@extends('layouts.main')

@section('title', __('reset-password-title'))

@section('stylesheets')
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
@endsection

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
            resetPassword: {
                fields: {
                    email: {!! $email !!}
                },
                token: '{!! $token !!}',

                status: {
                    errors: {
                        @if(isset($resetPasswordStatusError))
                            status: [ '{!! $resetPasswordMsgStatus !!}' ]
                        @endif
                    },
                    @if(isset($resetPasswordStatusSuccess))
                        message: '{!! $resetPasswordMsgStatus !!}',
                    @endif
                }
            }
        };
    </script>
    @vite('resources/js/reset-password.ts')
@endsection

@section('body')
    @parent
@endsection
