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
        return $this->friendRepository->delete($friend);
    }
}
