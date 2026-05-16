import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import i18n from 'laravel-vue-i18n/vite';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                base: null,
                includeAbsolute: false
            }
        }),
        i18n(),
    ],
    resolve: {
        alias: {
            // This maps standard Node modules to their browser-friendly polyfills
            path: 'path-browserify',
            url: 'url'
        }
    },
    optimizeDeps: {
        esbuildOptions: {
            // Enable Node.js polyfills during development build processing
            plugins: [NodeModulesPolyfillPlugin()]
        }
    }
});
