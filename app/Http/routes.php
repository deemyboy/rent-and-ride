<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
// main
Route::get('/', 'MainController@index');


// quotes
Route::get('/quote', 'QuotesController@index');

Route::post('/quote', 'QuotesController@store');

Route::auth();

Route::get('/home', 'HomeController@index');
