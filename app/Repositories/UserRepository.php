<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function create(array $userData): User
    {
        return User::create($userData);
    }

    public function findById(int $userId): ?User
    {
        return User::find($userId);
    }

    public function update(User $user, array $userData): bool
    {
        return $user->update($userData);
    }

    public function delete(User $user): bool
    {
        return $user->delete();
    }
}
