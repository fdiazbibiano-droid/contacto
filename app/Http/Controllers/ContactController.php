<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
{
    $validated = $request->validate([
        'name'    => 'required|string|max:255',
        'phone'   => 'nullable|string|max:50',
        'email'   => 'required|email|max:255',
        'service' => 'nullable|string|max:255',
        'message' => 'required|string|max:2000',
    ]);

    // Pasamos los datos a la vista con un array
    Mail::send('emails.contact', ['data' => $validated], function($mail) {
        $mail->to('contacto@nwpointconstruction.com')
             ->subject('Website Contact Form: New Message');
    });

    return response()->json(['success' => true]);
}
}