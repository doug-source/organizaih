@extends('layouts.main')

@section('title', ucfirst(__('app.name')))

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
            authAction: {!! $authAction !!},
        };
    </script>
    @vite('resources/js/Pages/Login/index.tsx')
@endsection

@section('body')
    @parent
@endsection
