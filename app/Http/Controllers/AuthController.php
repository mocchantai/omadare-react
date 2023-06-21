<?php

namespace App\Http\Controllers;

use App\UseCases\LoginUseCase;
use App\UseCases\LogoutUseCase;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private LoginUseCase $loginUseCase;
    private LogoutUseCase $logoutUseCase;

    public function __construct(LoginUseCase $loginUseCase, LogoutUseCase $logoutUseCase)
    {
        $this->loginUseCase = $loginUseCase;
        $this->logoutUseCase = $logoutUseCase;
    }

    public function login(Request $request): JsonResponse
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $result = $this->loginUseCase->execute($email, $password);

        if ($result['status'] === 'success') {
            return response()->json($result);
        } else {
            return response()->json($result, 401);
        }
    }

    public function logout(): JsonResponse
    {
        $this->logoutUseCase->execute();

        return response()->json([
            'status' => 'success',
            'message' => 'ログアウトしました。',
        ]);
    }
}
