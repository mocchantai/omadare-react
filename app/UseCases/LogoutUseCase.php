<?php

namespace App\UseCases;

use Illuminate\Support\Facades\Auth;

class LogoutUseCase
{
    public function exec()
    {
        if (Auth::user()) {
            Auth::user()->tokens()->delete();
        }
    }
}
