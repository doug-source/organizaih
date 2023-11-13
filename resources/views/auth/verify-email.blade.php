@extends('layouts.main')

@section('title', config('app.name'))

@section('stylesheets')
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    @vite('resources/scss/verify-email.scss')
@endsection

@section('body')
    <main>
        @svg('GateIcon.svg')

        <h1>{{ $title }}</h1>
        <p>
            {{ $paragraph_1 }}. {{ $paragraph_2 }}:
        </p>
        <form action='/email/verification-notification' method='POST'>
            @csrf
            <button type="submit">{{ $btn_text }}</button>
        </form>
        @if(session()->has('message'))
            <div class="message">{{ session()->get('message') }}!</div>
        @endif
    </main>
@endsection
