<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Friend;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
//        User::factory()->count(1)->create();
//        Friend::factory()->count(10)->create();
        $this->call([
            UserSeeder::class,
        ]);
        $this->call([
            FriendSeeder::class,
        ]);
    }
}
