<?php

namespace Database\Seeders;

use App\Models\Friend;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FriendSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Friend::insert([
            [
                'friend_name' => '本村',
                'memo' => '慶應義塾大学',
                'user_id' => 2,
            ],
            [
                'friend_name' => '伊藤',
                'memo' => '慶應義塾大学',
                'user_id' => 2,

            ],
            [
                'friend_name' => '武田',
                'memo' => '慶應義塾大学',
                'user_id' => 2,

            ],
            [
                'friend_name' => '佐々木',
                'memo' => '東京大学',
                'user_id' => 2,

            ],
            [
                'friend_name' => '三宅',
                'memo' => '京都大学',
                'user_id' => 2,

            ],
            [
                'friend_name' => '藤岡',
                'memo' => '京都大学',
                'user_id' => 2,

            ]
        ]);

    }
}
