@extends('layouts.main')

@section('title', ucfirst(__('app.name')))

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
            apiVersion: '{!! config('auth.api-version') !!}',
            registerRequest: {
                action: {!! $registerRequestAction !!},
                status: {
                    errors: {
                        @if($gateStatus ?? FALSE)
                            status: [ '{!! $gateMsgStatus !!}' ]
                        @endif
                    },
                },
                @if(isset($fields))
                    fields: {!! $fields !!},
                @endif
            },
            googleAuthUrl: '{!! $googleAuthUrl !!}',
        };
    </script>
    @vite('resources/js/register-request.ts')
@endsection

@section('body')
    @parent
@endsection
