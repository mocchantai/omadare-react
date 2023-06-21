<?php

// UserController.php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\UseCases\UserRegistrationUseCase;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    private UserRegistrationUseCase $userRegistrationUseCase;

    public function __construct(UserRegistrationUseCase $userRegistrationUseCase)
    {
        $this->userRegistrationUseCase = $userRegistrationUseCase;
    }

    public function store(StoreUserRequest $request): JsonResponse
    {
        $validatedData = $request->validated();

        try {
            $user = $this->userRegistrationUseCase->registerUser($validatedData);

            return response()->json($user, 201);
        } catch (\Exception $e) {
            // エラーハンドリング
            return response()->json(['message' => 'ユーザ登録に失敗しました。'], 500);
        }
    }
}
