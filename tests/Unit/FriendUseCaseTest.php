<?php
namespace Tests\Unit;

use App\Models\Friend;
use App\Models\User;
use App\Repositories\FriendRepository;
use App\UseCases\Friend\CreateFriendUseCase;
use PHPUnit\Framework\TestCase;
use Mockery;

class FriendUseCaseTest extends TestCase
{
    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
    }

    public function test_friend_create_use_case()
    {
        // Arrange
        $friendData = [
            'friend_name' => 'update man',
            'community_name' => 'update',
            'memo' => 'update',
            'user_id' => $this->user->id,
        ];

        // FriendRepositoryをモック化します
        $friendRepository = Mockery::mock(FriendRepository::class);
        $friendRepository->shouldReceive('create')
            ->with($friendData)
            ->andReturn($friendData);

        $useCase = new CreateFriendUseCase($friendRepository);

        // Act
        $createdFriend = $useCase->execute($friendData);

        // Assert
        $this->assertInstanceOf(Friend::class, $createdFriend);
        $this->assertEquals($friendData['friend_name'], $createdFriend['friend_name']);
        $this->assertEquals($friendData['community_name'], $createdFriend['community_name']);
        $this->assertEquals($friendData['memo'], $createdFriend['memo']);
        $this->assertEquals($friendData['user_id'], $createdFriend['user_id']);
    }
}
