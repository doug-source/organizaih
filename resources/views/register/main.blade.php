@extends('layouts.main')

@section('title', ucfirst(__('app.name')))

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
            apiVersion: '{!! config('auth.api-version') !!}',
            register: {
                action: {!! $registerAction !!},
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
        };
    </script>
    @vite('resources/js/register.ts')
@endsection

@section('body')
    @parent
@endsection
