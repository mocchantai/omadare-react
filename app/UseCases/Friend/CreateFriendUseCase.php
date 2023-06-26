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
        // ここでバリデーションやビジネスロジックの処理を行います
//        $friendData = Arr::only($data, ['friend_name', 'community_name', 'memo', 'user_id']);
        Log::info("UseCaseでのデータ", ['data' => $data]);

        $friendData = array_intersect_key($data, array_flip(['friend_name', 'community_name', 'memo', 'user_id']));

        // Output the data to the log for debugging
        Log::info('Original data:', $data);
        Log::info('Filtered friend data:', $friendData);

        // Friendの作成
        return $this->friendRepository->create($friendData);
    }


}
