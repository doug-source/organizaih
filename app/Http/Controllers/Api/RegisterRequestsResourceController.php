<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest\CheckRequest;
use App\Library\Converters\Phone as PhoneConverter;
use App\Mail\AllowedRegister as AllowedRegisterMail;
use App\Models\{
    RegisterRequest,
    AllowedRegister,
    User
};
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class RegisterRequestsResourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(CheckRequest $request)
    {
        $parameters = [TRUE, $request->input('group', 3)];
        if ($request->email) {
            $parameters[] = trim($request->email);
        }
        return response()->json(
            $this->searchRegisterRequests(...$parameters)
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(CheckRequest $request)
    {
        $registerRequest = RegisterRequest::find($request->registerRequestID);
        return response()->json([
            'id' => $registerRequest->id,
            'email' => $registerRequest->email,
            'phone' => $registerRequest->phone,
            'created_at' => $registerRequest->created_at_formatted,
        ]);
    }

    /**
     * Update the model's phone if the phone is different
     *
     * @param mixed $model
     * @param ?string $phone
     */
    private function updateModelPhone($model, $phone)
    {
        if ($model->phone === $phone) {
            return;
        }

        $model->update([
            'phone' => $phone
        ]);
    }

    /**
     * Persist the specified resource.
     */
    public function store(CheckRequest $request)
    {
        $userQuery = User::where('email', $request->email);
        if (!$userQuery->exists()) {
            $registerRequest = RegisterRequest::where('email', $request->email)->first();
            $phone = PhoneConverter::clear($request->phone);
            if (!$registerRequest) {
                $allowedRegister = AllowedRegister::where('email', $request->email)->first();
                if (!$allowedRegister) {
                    RegisterRequest::create([
                        'email' => $request->email,
                        'phone' => $phone
                    ]);
                } else {
                    $token = $allowedRegister->token;
                    if (Carbon::now()->greaterThan(Carbon::parse($allowedRegister->expiration_data))) {
                        $token = bin2hex(random_bytes(20));
                        $expire = config('app.register.expire');
                        DB::table('allowed_registers')->where('id', $allowedRegister->id)->update([
                            'token' => $token,
                            'expiration_data' => now()->addHours($expire)
                        ]);
                    }
                    $this->updateModelPhone($allowedRegister, $phone);
                    $this->sendApprovalMail($request->email, $token);
                }
            } else {
                $this->updateModelPhone($registerRequest, $phone);
            }
        }
        return response()->json([
            'message' => 'OK',
            'status' => 200,
            'data' => NULL
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CheckRequest $request)
    {
        RegisterRequest::destroy($request->validated('registerRequestID'));
        return response('OK', 200);
    }

    /**
     * Execute the register request's approval.
     */
    public function approve(CheckRequest $request)
    {
        $registerRequestID = $request->validated('registerRequestID');
        $registerRequest = RegisterRequest::find($registerRequestID);
        RegisterRequest::destroy($registerRequestID);
        $token = bin2hex(random_bytes(20));
        $expire = config('app.register.expire');
        $fields = [
            'email' => $registerRequest->email,
            'token' => $token,
            'expiration_data' => now()->addHours($expire)
        ];
        if ($registerRequest->phone) {
            $fields['phone'] = $registerRequest->phone;
        }
        AllowedRegister::create($fields);

        $this->sendApprovalMail($registerRequest->email, $token);

        return response('OK', 200);
    }

    /**
     * Send the register request's approval mail.
     */
    private function sendApprovalMail(string $email, string $token)
    {
        Mail::to($email)->send(new AllowedRegisterMail([
            'fromName' => config('app.name'),
            'fromEmail' => config('mail.from.address'),
            'subject' => Str::of(__('register-approval'))->ucfirst(),
            'url' => URL::temporarySignedRoute(
                name: 'register.user.form',
                expiration: now()->addMinutes(15),
                parameters: ['token' => $token]
            ),
        ]));
    }

    /**
     * Search the register_requests list
     *
     * @param  bool  $paginate
     * @param  int  $perPage
     * @param  ?string  $email
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    private function searchRegisterRequests($paginate = FALSE, $perPage = 3, $email = NULL)
    {
        $query = RegisterRequest::select('id', 'email', 'phone', 'created_at');
        if ($email) {
            $query = $query->where([
                ['email', 'like', "%{$email}%"]
            ]);
        }
        if ($paginate) {
            return $query->paginate($perPage);
        }
        return $query->get();
    }
}
