<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>

        <meta name='csrf-token' content='<?php echo csrf_token(); ?>' id='token'>

        <meta name='page-key' content="@yield('pageKey', 'login')" id='pageKey'>

        <link rel='icon' type='image/png' href='/img/web.png'>

        <link href="https://fonts.googleapis.com/css2?family=Capriola&family=Roboto&family=Dangrek" rel="stylesheet">

        <title>
            @section('title')
                &#65279;
            @show
        </title>

        @viteReactRefresh

        @yield('scripts')
        @yield('stylesheets')
    </head>
    <body>
        @section('body')
            <div id='container-app'></div>
        @show
    </body>
</html>
