<?php

namespace App\UseCases\Friend;

use App\Models\Friend;
use App\Repositories\FriendRepository;
use Illuminate\Support\Facades\Log;

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
        Log::alert("UseCase使ってるね");
        $success = $this->friendRepository->update($friend, $data);

        return $success ? $friend : null;
    }
}
