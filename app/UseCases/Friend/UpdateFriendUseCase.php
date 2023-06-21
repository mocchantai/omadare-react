<?php

namespace App\UseCases;

use App\Models\Friend;
use App\Repositories\FriendRepository;

class UpdateFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(Friend $friend, array $data): bool
    {
        // ここでバリデーションやビジネスロジックの処理を行います

        // Friendの更新
        return $this->friendRepository->update($friend, $data);
    }
}
