<?php

namespace App\UseCases\Friend;

use App\Models\Friend;
use App\Repositories\FriendRepository;

class UpdateFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(Friend $friend, array $data): ?Friend
    {
        // Friendの更新
        $success = $this->friendRepository->update($friend, $data);

        return $success ? $friend : null;
    }
}
