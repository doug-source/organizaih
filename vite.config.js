import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.ts',
                'resources/js/forgot-password.ts',
                'resources/js/reset-password.ts',
                'resources/js/login.ts',
                'resources/js/register.ts',
                'resources/js/register-request.ts',
                'resources/scss/verify-email.scss',
            ],
            refresh: true,
        }),
        svgr(),
        react({
            jsxRuntime: 'classic',
            fastRefresh: false,
        }),
    ],
});
