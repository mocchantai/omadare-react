<?php

namespace Tests\Unit;


use App\Models\User;
use App\Repositories\FriendRepository;
use Tests\TestCase;
use App\Models\Friend;
use Illuminate\Foundation\Testing\RefreshDatabase;


class FriendRepositoryTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
    }


    public function test_create_friend_repository()
    {
        // Arrange: Prepare the necessary data for the test
        $friendData = [
            'friend_name' => 'sample man',
            'community_name' => 'sample community',
            'memo' => 'sample memo',
            'user_id' => $this->user->id,
        ];

        // Act: Perform the action being tested
        $repository = new FriendRepository();
        $createdFriend = $repository->create($friendData);

        // Assert: Verify the expected outcome
        $this->assertInstanceOf(Friend::class, $createdFriend);
        $this->assertEquals($friendData['friend_name'], $createdFriend['friend_name']);
    }

}
