<?php

namespace App\UseCases\Friend;

use App\Models\Friend;
use App\Repositories\FriendRepository;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;

class CreateFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(array $data): ?Friend
    {
        $friendData = array_intersect_key($data, array_flip(['friend_name', 'community_name', 'memo', 'user_id']));

        return $this->friendRepository->create($friendData);
    }


}
