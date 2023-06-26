<?php

namespace App\Repositories;

use App\Models\Friend;
use Illuminate\Database\Eloquent\Collection;

class FriendRepository
{
    public function create(array $friendData): ?Friend
    {
        return Friend::create($friendData);
    }

    public function update(Friend $friend, array $data): bool
    {
        return $friend->update($data);
    }

    public function delete(Friend $friend): bool
    {
        return $friend->delete();
    }

    public function search(string $keyword): Collection
    {
        return Friend::where('friend_name', 'like', '%' . $keyword . '%')
            ->orWhere('community_name', 'like', '%' . $keyword . '%')
            ->orWhere('memo', 'like', '%' . $keyword . '%')
            ->get();
    }
}
