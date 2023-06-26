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
        $this->assertEquals($friendData['community_name'], $createdFriend['community_name']);
        $this->assertEquals($friendData['memo'], $createdFriend['memo']);
        $this->assertEquals($friendData['user_id'], $createdFriend['user_id']);
    }

    public function test_create_friend_repository_without_memo_and_community_name()
    {
        // Arrange
        $friendData = [
            'friend_name' => 'sample man',
            'community_name' => '',
            'memo' => '',
            'user_id' => $this->user->id,
        ];

        // Act
        $repository = new FriendRepository();
        $createdFriend = $repository->create($friendData);

        // Assert
        $this->assertInstanceOf(Friend::class, $createdFriend);
        $this->assertEquals($friendData['friend_name'], $createdFriend['friend_name']);
        $this->assertEquals($friendData['community_name'], $createdFriend['community_name']);
        $this->assertEquals($friendData['memo'], $createdFriend['memo']);
        $this->assertEquals($friendData['user_id'], $createdFriend['user_id']);
    }

    public function test_update_friend_repository()
    {
        // Arrange
        $friend = Friend::factory()->create();

        $friendData = [
            'friend_name' => 'update man',
            'community_name' => 'update',
            'memo' => 'update',
            'user_id' => $this->user->id,
        ];

        // Act
        $repository = new FriendRepository();
        $isUpdated = $repository->update($friend, $friendData);

        // Assert
        $this->assertTrue($isUpdated);

        // Refresh the model from the database
        $friend->refresh();

        // Assert the updated attributes in the database
        $this->assertEquals($friendData['friend_name'], $friend->friend_name);
        $this->assertEquals($friendData['community_name'], $friend->community_name);
        $this->assertEquals($friendData['memo'], $friend->memo);
        $this->assertEquals($friendData['user_id'], $friend->user_id);
    }

    public function test_delete_friend_repository()
    {
        // Arrange
        $friend = Friend::factory()->create();

        // Act
        $repository = new FriendRepository();
        $isDeleted = $repository->delete($friend);

        // Assert
        $this->assertTrue($isDeleted);

        // Ensure that the friend model is not found in the database
        $this->assertDatabaseMissing('friends', ['id' => $friend->id]);
    }

    public function test_search_friend_repository()
    {
        // Arrange
        Friend::factory()
            ->count(10)
            ->create()
            ->each(function ($friend, $index) {
                if ($index < 5) {
                    $friend->friend_name = 'テストさん';
                    $friend->save();
                }
            });

        $keyword = 'テスト';

        // Act
        $repository = new FriendRepository();
        $searchedFriends = $repository->search($keyword);

        // Assert
        $this->assertEquals(5, $searchedFriends->count());
    }

    public function test_search_friend_repository_with_no_searched_friends()
    {
        // Arrange
        Friend::factory()
            ->count(10)
            ->state([
                'friend_name' => '名前'
            ])
            ->create();

        $keyword = 'テスト';

        // Act
        $repository = new FriendRepository();
        $searchedFriends = $repository->search($keyword);

        // Assert
        $this->assertEquals(0, $searchedFriends->count());
    }

    public function test_search_friend_repository_with_no_keyword()
    {
        // Arrange
        Friend::factory()
            ->count(10)
            ->state([
                'friend_name' => '名前'
            ])
            ->create();

        $keyword = '';

        // Act
        $repository = new FriendRepository();
        $searchedFriends = $repository->search($keyword);

        // Assert
        $this->assertEquals(10, $searchedFriends->count());
    }


}
