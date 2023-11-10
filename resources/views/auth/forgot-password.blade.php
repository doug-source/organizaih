@extends('layouts.main')

@section('title', __('reset-password-title'))

@section('stylesheets')
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    @vite('resources/scss/forgot-password.scss')
@endsection

@section('scripts')
    <script>
        window.data = {
            {{ $localeKey }}: {!! $localeData !!},
            locales: {!! $locales !!},
            themeKey: {!! $themeKey !!},
        };
    </script>
    @vite('resources/js/forgot-password.ts')
@endsection

@section('body')
    @parent
@endsection
