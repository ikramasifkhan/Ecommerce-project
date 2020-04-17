const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css/app.css')
    .styles([
        'resources/css/bootstrap.min.css',
        'resources/css/style.css'
    ], 'public/css/all.css')
    .scripts([
        'resources/js/jquery-3.4.1.slim.min.js',
        'resources/js/bootstrap.bundle.min.js',
    ], 'public/js/app.js')
    .version();