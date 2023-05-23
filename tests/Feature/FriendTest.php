<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Friend;
use App\Models\User;

class FriendTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        User::factory()->create([
            'id' => 1, // id=1のユーザーを作成する
        ]);
    }

    /**
     * A basic test example.
     */
    public function test_friend_index(): void
    {
        $friends = Friend::factory()->count(10)->create();
//        dd($friends->toArray());

        $response = $this->getJson('api/friends');

        $response->assertJsonCount($friends->count());
    }

    public function test_friend_store():void
    {
        $data = [
            'friend_name' => 'テストさん',
            'memo' => 'これはテストです。',
            'user_id' => 1, // テスト用の適切なユーザーIDを設定する
        ];


        $response = $this->postJson('api/friends', $data);

        $response
            ->assertStatus(201)
            ->assertJsonFragment($data);
    }
}

