<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'App')->name('home');

Route::inertia('/contact', 'ContactoForm')->name('contact');

Route::inertia('/navbar', 'NavBar')->name('navbar');

Route::post('/contact', function () {
    // Aquí puedes manejar el envío del formulario de contacto
    return redirect()->route('home')->with('success', '¡Mensaje enviado con éxito!');
})->name('contact.submit');