<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::inertia('/', 'new/Home')->name('home');

Route::inertia('/new', 'new/Home')->name('new.home');

//Route::inertia('/contact', 'ContactoForm')->name('contact');

//Route::inertia('/navbar', 'NavBar')->name('navbar');

Route::post('/contact-submit', [ContactController::class, 'send'])->name('contact.send');

// Hidden CMS portal — not linked from any public navigation
Route::inertia('/x-portal-cms', 'portal/PortalApp')->name('portal');