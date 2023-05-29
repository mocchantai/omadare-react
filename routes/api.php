<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FriendController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/friends', FriendController::class);
    Route::post('/friends/search', [FriendController::class, 'search']);

    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});




Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $request->session()->regenerate();

        return response()->json([
            'status' => 'success',
            'message' => 'ログインに成功しました。',
        ]);
    } else {
        return response()->json([
            'status' => 'error',
            'message' => 'ログインに失敗しました。',
        ], 401);
    }
});







