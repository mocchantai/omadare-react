<?php

namespace App\UseCases\Auth;

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
