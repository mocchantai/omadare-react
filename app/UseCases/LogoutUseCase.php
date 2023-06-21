<?php

namespace App\UseCases;

use Illuminate\Support\Facades\Auth;

class LogoutUseCase
{
    public function execute()
    {
        if (Auth::user()) {
            Auth::user()->tokens()->delete();
        }
    }
}
