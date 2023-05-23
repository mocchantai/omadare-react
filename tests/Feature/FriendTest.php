<?php

namespace Tests\Feature;

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

    public function test_friend_store_if_friend_name_is_null_return_error():void
    {
        $data = [
            'friend_name' => '',
            'memo' => 'これはテストです。',
            'user_id' => 1, // テスト用の適切なユーザーIDを設定する
        ];

        $response = $this->postJson('api/friends', $data);

        $response
            ->assertStatus(422)//エラーが帰ってきているかをチェックするには422
            ->assertJsonFragment([//指定した配列が JSON データ内のどこかに部分的に一致するかどうかを確認
                'errors' => [
                    'friend_name' => ["名前は必ず指定してください。"]
                ]
            ]);
    }

    public function test_friend_update():void
    {
        $friend = Friend::factory()->create();

        $friend->friend_name = 'テスト更新さん';
        $friend->memo = 'これはテスト更新です';

        $response = $this->patchJson("api/friends/{$friend->id}", $friend->toArray());


        $response
            ->assertStatus(200)
            ->assertJsonFragment($friend->toArray());
    }


    public function test_friend_destroy()
    {
        // テスト用のフレンドを作成
        $friends = Friend::factory()->count(10)->create();
        $friendToDelete = $friends->first();

        // フレンドを削除
        $response = $this->deleteJson("api/friends/{$friendToDelete->id}");
        $response->assertStatus(200);//削除が成功したかを確認

        // 削除後のフレンド数を確認
        $remainingFriendsCount = Friend::count();

        $this->assertEquals(9, $remainingFriendsCount);//削除後は9件になるはず
    }


}

