<?php
namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // 認証成功時の処理
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;
            return response()->json([
                'status' => 'success',
                'message' => 'ログインに成功しました。',
                'token' => $token,
            ]);
        } else {
            // 認証失敗時の処理
            return response()->json([
                'status' => 'error',
                'message' => 'ログインに失敗しました。',
            ], 401);
        }
    }

    public function logout(Request $request): JsonResponse
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'ログアウトしました。',
        ]);
    }
}
