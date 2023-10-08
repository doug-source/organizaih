@extends('layouts.main')

@section('title', ucfirst(__('app.name')))

@section('pageKey', 'app')

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
        };
    </script>
    @vite('resources/js/Pages/App/index.tsx')
@endsection

@section('body')
    @parent
@endsection
