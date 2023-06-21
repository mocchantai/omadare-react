<?php

// UserRegistrationUseCase.php

namespace App\UseCases;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;

class UserRegistrationUseCase
{
    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function registerUser(array $validatedData): User
    {
        // ユーザデータのバリデーションや重複チェックなどのビジネスロジックを実行

        // パスワードのハッシュ化などの操作
        $userData = [
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ];
        // ユーザをリポジトリを介して永続化
        return $this->userRepository->create($userData);
    }
}
