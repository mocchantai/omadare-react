import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            refresh: true,

            input: [
                'resources/sass/app.scss',
                'resources/tsx/index.tsx'
            ]
        }),
        react(),
    ],
    server: {
        hmr: {
            host: 'localhost',
        },
    },
});
