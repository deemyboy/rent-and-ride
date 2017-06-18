var argv = require('yargs').argv,
    elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

if(argv.vendor || argv.production || argv.watch) {
    elixir(function(mix) {

    var paths = {
        'bootstrap'     : './node_modules/bootstrap-sass/assets',
        'bower'         : './bower_components',
        'jquery'        : './node_modules/jquery/dist',
        'fontawesome'   : './node_modules/font-awesome'
    };

    mix
        .copy(paths.bootstrap + '/fonts/bootstrap', 'public/build/fonts/')
        .copy(paths.fontawesome + '/fonts', 'public/build/fonts/')
        .copy(paths.bower + '/angular-material/modules/scss/angular-material.layout-attributes.scss', 'resources/assets/sass/_angular-material.layout-attributes.scss')
        .copy(paths.bower + '/angular-material/modules/scss/angular-material.layouts.scss', 'resources/assets/sass/_angular-material.layouts.scss')
        .copy(paths.bower + '/angular-material/modules/scss/angular-material.scss', 'resources/assets/sass/_angular-material.scss')

        .copy(paths.bower + '/moment/min/moment.min.js', 'resources/assets/js/vendor')
        .copy(paths.bower + '/angular/angular.min.js', 'resources/assets/js/vendor')
        .copy(paths.bower + '/angular-moment/angular-moment.min.js', 'resources/assets/js/vendor')
        .copy(paths.bower + '/angular-aria/angular-aria.min.js', 'resources/assets/js/vendor')
        .copy(paths.bower + '/angular-animate/angular-animate.min.js', 'resources/assets/js/vendor')
        .copy(paths.bower + '/angular-material/angular-material.min.js', 'resources/assets/js/vendor')
        .copy(paths.bootstrap + '/javascripts/bootstrap.min.js', 'resources/assets/js/vendor')
        .copy(paths.jquery + '/jquery.min.js', 'resources/assets/js/vendor');

    mix
        .scripts([
        'vendor/moment.min.js',
        'vendor/angular.min.js',
        'vendor/angular-moment.min.js',
        'vendor/angular-aria.min.js',
        'vendor/angular-animate.min.js',
        'vendor/angular-material.min.js',
        'vendor/jquery.min.js',
        'vendor/bootstrap.min.js'
    ], 'public/js/vendor.js');

    mix
        .sass('app.scss', 'public/css/', {includePaths: [paths.bootstrap + 'stylesheets/', paths.fontawesome + 'scss/']});
    });
}

    elixir(function (mix)
    {
    mix
        .scripts([
        'rentApp.js',
        'quotes/**/*.js'
    ], 'public/js/app.js');

    mix
        .version(['public/css/app.css', 'public/js/app.js', 'public/js/vendor.js']);

});