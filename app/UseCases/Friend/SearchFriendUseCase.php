<?php

namespace App\UseCases\Friend;


use App\Repositories\FriendRepository;
use Illuminate\Database\Eloquent\Collection;

class SearchFriendUseCase
{
    private FriendRepository $friendRepository;

    public function __construct(FriendRepository $friendRepository)
    {
        $this->friendRepository = $friendRepository;
    }

    public function execute(string $keyword): Collection
    {
        return $this->friendRepository->search($keyword);
    }
}
