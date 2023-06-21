<?php

namespace App\UseCases\Friend;


use App\Models\Friend;
use App\Repositories\FriendRepository;

class SearchFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(string $keyword): \Illuminate\Database\Eloquent\Collection
    {
        // ここでバリデーションやビジネスロジックの処理を行います

        // Friendの作成
        return $this->friendRepository->search($keyword);
    }
}
