<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::inertia('/', 'App')->name('home');

Route::inertia('/contact', 'ContactoForm')->name('contact');

Route::inertia('/navbar', 'NavBar')->name('navbar');

Route::post('/contact-submit', [ContactController::class, 'send'])->name('contact.send');