<?php

namespace App\UseCases\Friend;

use App\Models\Friend;
use App\Repositories\FriendRepository;

class CreateFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(array $data, int $userId): ?Friend
    {
        // ここでバリデーションやビジネスロジックの処理を行います

        // Friendの作成
        $data['user_id'] = $userId;
        return $this->friendRepository->create($data);
    }

}
