<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\CheckRequest;
use App\Models\Address;
use App\Models\Customer;
use Illuminate\Support\Facades\File;

class CustomersResourceController extends Controller
{
    /**
     * Returns the customer list on json format
     *
     * @param \App\Http\Requests\Customer\CheckRequest $request
     * @return \Illuminate\Http\Response
     */
    public function index(CheckRequest $request)
    {
        $search = trim($request->search ?? '');
        return response()->json(
            $this->searchCustomers(TRUE, $request->input('group', 3), $search)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Customer\CheckRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CheckRequest $request)
    {
        $customer = Customer::make($request->only(
            'name',
            'sex',
            'phone_1',
            'phone_2',
            'birthday',
        ));

        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $path = $request->photo->store('customer-photos');
            $customer->photo = $path;
        }

        $customer->user_id = auth()->user()->id;
        $address = $this->makeAddress($request);
        $customer->address_id = $address->id;

        $customer->save();

        return response('OK', 200);
    }

    /**
     * Create a new customer's address by 'city id' from request
     *
     * @param \App\Http\Requests\Customer\CheckRequest $request
     * @return App\Models\Address
     */
    private function makeAddress(CheckRequest $request)
    {
        $address = Address::make($request->only(
            'street',
            'number',
            'district',
        ));
        $address->city_id = $request->city;
        $address->save();
        return $address;
    }

    /**
     * Update the customer's address by 'city id' from request
     *
     * @param \App\Http\Requests\Customer\CheckRequest $request
     * @param App\Models\Customer $customer
     */
    private function updateAddress(CheckRequest $request, Customer $customer)
    {
        $address = $customer->address;
        $address->street = $request->street;
        $address->number = $request->number;
        $address->district = $request->district;
        $address->city_id = $request->city;
        $address->update();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Http\Requests\Customer\CheckRequest $request
     * @return \Illuminate\Http\Response
     */
    public function show(CheckRequest $request)
    {
        $customer = Customer::find($request->validated('customerID'));
        $address = $customer->address;
        $city = $address->city;
        $state = $city->state;
        return response()->json([
            'birthday_formatted' => $customer->birthday_formatted,
            'address_id' => $customer->address_id,
            'id' => $customer->id,
            'name' => $customer->name,
            'phone_1' => $customer->phone_1,
            'raw_phone1' => $customer->raw_phone1,
            'phone_2' => $customer->phone_2,
            'raw_phone2' => $customer->raw_phone2,
            'photo' => $customer->photo,
            'sex' => $customer->sex,
            'raw_sex' => $customer->raw_sex,
            'updated_at' => $customer->updated_at_formatted,
            'created_at' => $customer->created_at_formatted,
            'address' => [
                'street' => $address->street,
                'number' => $address->number,
                'district' => $address->district,
                'state' => [
                    'id' => $state->id,
                    'name' => $state->name
                ],
                'city' => [
                    'id' => $city->id,
                    'name' => $city->name
                ]
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Customer\CheckRequest  $request
     * @param  int  $customerID
     * @return \Illuminate\Http\Response
     */
    public function update(CheckRequest $request)
    {
        $customer = Customer::find($request->validated('customerID'));
        if ($request->hasFile('photo') && $request->file('photo')->isValid()) {
            $pathPhotoRecent = storage_path() . '/app/' . $customer->photo;
            if (File::exists($pathPhotoRecent)) {
                File::delete($pathPhotoRecent);
            }
            $pathPhotoNew = $request->photo->store('customer-photos');
            $customer->photo = $pathPhotoNew;
        }
        $data = $request->only(
            'name',
            'sex',
            'phone_1',
            'phone_2',
            'birthday',
        );
        $data['photo'] = $customer->photo;
        $customer->update($data);

        $this->updateAddress($request, $customer);

        return response('OK', 200);
    }

    /**
     * @param  \App\Http\Requests\Customer\CheckRequest  $request
     * @return  \Illuminate\Http\Response
     */
    public function destroy(CheckRequest $request)
    {
        $customer = Customer::find($request->validated('customerID'));
        $address = $customer->address;
        $customer->delete();
        $address->delete();

        return response('OK', 200);
    }

    /**
     * @param  string  $search
     * @param  bool  $paginate
     * @param  int  $perPage
     * @return  \Illuminate\Database\Eloquent\Collection
     */
    private function searchCustomers($paginate = FALSE, $perPage = 3, $search = NULL)
    {
        if (!$search) {
            $query = Customer::select('id', 'name', 'photo')->where([
                ['user_id', auth()->user()->id],
            ]);
            if ($paginate) {
                return $query->paginate($perPage);
            }
            return $query->get();
        }
        $query = Customer::select('id', 'name', 'photo')->where([
            ['name', 'like', "%{$search}%"],
            ['user_id', auth()->user()->id],
        ]);
        if ($paginate) {
            return $query->paginate($perPage);
        }
        return $query->get();
    }
}
