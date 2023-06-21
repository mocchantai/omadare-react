<?php

namespace App\UseCases;

use Illuminate\Support\Facades\Auth;

class LoginUseCase
{
    public function execute(string $email, string $password)
    {
        $credentials = [
            'email' => $email,
            'password' => $password
        ];

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;
            return [
                'status' => 'success',
                'message' => 'ログインに成功しました。',
                'token' => $token,
                'user' => $user,
            ];
        } else {
            return [
                'status' => 'error',
                'message' => 'ログインに失敗しました。',
            ];
        }
    }
}
