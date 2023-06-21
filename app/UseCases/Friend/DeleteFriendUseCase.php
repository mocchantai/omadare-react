<?php

namespace App\UseCases\Friend;


use App\Models\Friend;
use App\Repositories\FriendRepository;

class DeleteFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(Friend $friend): bool
    {
        // ここでバリデーションやビジネスロジックの処理を行います

        // Friendの作成
        return $this->friendRepository->delete($friend);
    }
}
