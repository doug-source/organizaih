@extends('layouts.main')

@section('title', ucfirst(__('app.name')))

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
            auth: {
                action: {!! $authAction !!},
                status: {
                    errors: {
                        @if($authStatus ?? FALSE)
                            status: [ '{!! $authMsgStatus !!}' ]
                        @endif
                    },
                },
            },
        };
    </script>
    @vite('resources/js/login.ts')
@endsection

@section('body')
    @parent
@endsection
