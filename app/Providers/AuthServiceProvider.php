<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Str;
use Illuminate\Support\HtmlString;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     * douglas.gtads@gmail.com
     */
    public function boot(): void
    {
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            $greeting = Str::of(__('hello'))->ucfirst() . ", {$notifiable->name}";
            $lastLine = Str::of(__('regards'))->ucfirst();
            $app = config('app.name');

            return (new MailMessage)
                ->greeting($greeting)
                ->subject(Str::of(__('confirmation-email'))->ucfirst())
                ->line(Str::of(__('confirmation-email-text'))->ucfirst())
                ->action(Str::of(__('click-here'))->ucfirst(), $url)
                ->salutation(new HtmlString("$lastLine, <br><br>{$app}"));
        });
    }
}
