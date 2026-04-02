<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactReceived;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validamos los datos que vienen de Vue
        $data = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'phone'   => 'nullable|string|max:20',
            'message' => 'required|string',
        ]);

        // Enviamos el correo (pon tu dirección real aquí)
        Mail::to('d34.1z2k@gmail.com')->send(new ContactReceived($request->all()));

        // Como usas Inertia, regresamos a la página anterior con un mensaje de éxito
        return back()->with('success', '¡Mensaje enviado con éxito!');
    }
}