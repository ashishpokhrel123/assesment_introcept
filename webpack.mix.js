const mix = require('laravel-mix');
require('laravel-mix-purgecss');



mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
