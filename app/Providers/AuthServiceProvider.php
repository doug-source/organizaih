<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;

use App\Models\RegisterRequest;
use App\Models\User;
use App\Policies\RegisterRequestPolice;
use App\Policies\UserPolice;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Str;
use Illuminate\Support\HtmlString;
use Illuminate\Auth\Notifications\{
    ResetPassword,
    VerifyEmail
};

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        User::class => UserPolice::class,
        RegisterRequest::class => RegisterRequestPolice::class
    ];

    /**
     * Register any authentication / authorization services.
     * douglas.gtads@gmail.com
     */
    public function boot(): void
    {
        $lastLine = Str::of(__('regards'))->ucfirst();
        $app = config('app.name');

        VerifyEmail::toMailUsing(function (object $notifiable, string $url) use ($lastLine, $app) {
            $greeting = Str::of(__('hello'))->ucfirst() . ", {$notifiable->name}";

            return (new MailMessage)
                ->greeting($greeting)
                ->subject(Str::of(__('confirmation-email'))->ucfirst())
                ->line(Str::of(__('confirmation-email-text'))->ucfirst())
                ->action(Str::of(__('click-here'))->ucfirst(), $url)
                ->salutation(new HtmlString("$lastLine, <br><br>{$app}"));
        });

        ResetPassword::toMailUsing(function (object $notifiable, string $token) use ($lastLine, $app) {
            $greeting = Str::of(__('hello'))->ucfirst() . ", {$notifiable->name}";
            $expireLine = Str::of(__('forgot-password-expire-line', [
                'time' => config('auth.passwords.users.expire')
            ]))->ucfirst();
            $otherwiseLine = Str::of(__('forgot-password-otherwise-line'))->ucfirst();

            return (new MailMessage)
                ->greeting($greeting)
                ->subject(Str::of(__('forgot-password-title'))->ucfirst())
                ->line(Str::of(__('forgot-password-text'))->ucfirst())
                ->action(
                    Str::of(__('forgot-password-action'))->ucfirst(),
                    url(config('app.url') . route('password.reset', [
                        'token' => $token,
                        'email' => $notifiable->email
                    ], false))
                )
                ->line(new HtmlString("$expireLine<br><br>$otherwiseLine"))
                ->salutation(new HtmlString("$lastLine, <br><br>{$app}"));
        });
    }
}
