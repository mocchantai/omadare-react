<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Friend;

class FriendTest extends TestCase
{
    use RefreshDatabase;

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
            'memo' => 'これはテストです。'
        ];

        $response = $this->postJson('api/friends', $data);

        $response
            ->assertStatus(201)
            ->assertJsonFragment($data);
    }
}

