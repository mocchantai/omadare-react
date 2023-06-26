<?php

namespace App\Repositories;

use App\Models\Friend;

class FriendRepository
{
    public function create(array $friendData): ?Friend
    {
        // Friendの作成と保存
        return Friend::create($friendData);

    }

    public function update(Friend $friend, array $data): bool
    {
        return $friend->update($data);
    }

    public function delete(Friend $friend): bool
    {
        // Friendの削除
        return $friend->delete();
    }

    public function search(string $keyword)
    {
        // Friendの検索
        return Friend::where('friend_name', 'like', '%' . $keyword . '%')
            ->orWhere('community_name', 'like', '%' . $keyword . '%')
            ->orWhere('memo', 'like', '%' . $keyword . '%')
            ->get();
    }
}
