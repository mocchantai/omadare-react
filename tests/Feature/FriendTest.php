<?php

namespace Tests\Feature;

use Illuminate\Database\Eloquent\Factories\Sequence;
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

    public function test_friend_store(): void
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

    public function test_friend_store_if_friend_name_is_null_return_error(): void
    {
        $data = [
            'friend_name' => '',
            'memo' => 'これはテストです。',
            'user_id' => 1, // テスト用の適切なユーザーIDを設定する
        ];

        $response = $this->postJson('api/friends', $data);

        $response
            ->assertStatus(422)//エラーが帰ってきているかをチェックするには422
            ->assertJsonValidationErrors(['friend_name' => "名前は必ず指定してください。"]);
    }

    public function test_friend_store_if_friend_name_is_longer_than_31_return_error(): void
    {
        $data = [
            'friend_name' => str_repeat('あ', 31),
            'memo' => 'これはテストです。',
            'user_id' => 1, // テスト用の適切なユーザーIDを設定する
        ];

        $response = $this->postJson('api/friends', $data);

        $response
            ->assertStatus(422)//エラーが帰ってきているかをチェックするには422
            ->assertJsonValidationErrors(['friend_name' => "名前は、30文字以下で指定してください。"]);
    }

    public function test_friend_update(): void
    {
        $friend = Friend::factory()->create();

        $friend->friend_name = 'テスト更新さん';
        $friend->memo = 'これはテスト更新です';

        $response = $this->patchJson("api/friends/{$friend->id}", $friend->toArray());


        $response
            ->assertStatus(200)
            ->assertJsonFragment($friend->toArray());
    }

    public function test_friend_update_if_friend_name_is_null_return_error(): void
    {
        $friend = Friend::factory()->create();

        $friend->friend_name = '';
        $friend->memo = 'これはテスト更新です';

        $response = $this->patchJson("api/friends/{$friend->id}", $friend->toArray());
//        dd($response);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors(['friend_name' => '名前は必ず指定してください']);
    }

    public function test_friend_update_if_friend_name_is_longer_than_256_return_error(): void
    {
        $friend = Friend::factory()->create();

        $friend->friend_name = str_repeat('あ', 256);
        $friend->memo = 'これはテスト更新です';

        $response = $this->patchJson("api/friends/{$friend->id}", $friend->toArray());
//        dd($response);

        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors(['friend_name' => '名前は、255文字以下で指定してください。']);
    }

    public function test_friend_update_if_memo_is_null_no_problem_because_memo_is_nullable(): void
    {
        $friend = Friend::factory()->create();

        $friend->friend_name = 'テスト更新さん';
        $friend->memo = '';

        $response = $this->patchJson("api/friends/{$friend->id}", $friend->toArray());

        $response
            ->assertStatus(200)
            ->assertJsonFragment([
                'memo' => null
            ]);
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

//    public function test_friend_search()
//    {
//        $friends = Friend::factory()->count(15)->state(new Sequence(
//            ['friend_name' => '本村'],
//            ['friend_name' => '佐々木'],
//            ['friend_name' => '三宅'],
//        ))->create();
//
//
//        $filter_friend = $friends->filter(function ($friend) {
//            return $friend->friend_name === '本村';
//        });
//
////        dd($filter_friend->ToArray());
//
//        $keyword = '本村';
//
//        $response = $this->getJson("api/friends/search", ['keyword' => $keyword]);
////        $response = $this->getJson("api/friends?keyword={$keyword}");
//
//        $response->assertStatus(200);
//        $friends = $response->json();
//
//        dd($friends); // 友達の情報を表示
//
//    }


    public function test_friend_search()
    {
        $friends = Friend::factory()->count(15)->state(new Sequence(
            ['friend_name' => '本村'],
            ['friend_name' => '佐々木'],
            ['friend_name' => '三宅'],
        ))->create();

        $keyword = "本";

        // APIエンドポイントにリクエスト
        $response = $this->postJson("api/friends/search", ['keyword' => $keyword]);

        // レスポンスのステータスコードを確認
        $response->assertStatus(200);

        // レスポンスのJSONを取得
        $responseData = $response->json();
//        dd($responseData);


        // filter_friendとレスポンスの配列が一致しているかテスト
        $filter_friend = $friends->filter(function ($friend) use ($keyword) {
            return stripos($friend->friend_name, $keyword) !== false;
        });

        $this->assertTrue($filter_friend->pluck('friend_name')->toArray() === array_column($responseData, 'friend_name'));

    }


    public function test_friend_search_with_no_keyword()
    {
        $friends = Friend::factory()->count(15)->state(new Sequence(
            ['friend_name' => '本村'],
            ['friend_name' => '佐々木'],
            ['friend_name' => '三宅'],
        ))->create();

        $keyword = "";

        // APIエンドポイントにリクエスト
        $response = $this->postJson("api/friends/search", ['keyword' => $keyword]);

        // レスポンスのステータスコードを確認
        $response->assertStatus(200);

        // レスポンスのJSONを取得
        $responseData = $response->json();
//        dd($responseData);


        // filter_friendとレスポンスの配列が一致しているかテスト
        $filter_friend = $friends->filter(function ($friend) use ($keyword) {
            return stripos($friend->friend_name, $keyword) !== false;
        });

        $this->assertTrue($filter_friend->pluck('friend_name')->toArray() === array_column($responseData, 'friend_name'));

    }


    public function test_friend_search_with_long_keyword_which_is_not_exist_in_datasets()
    {
        $friends = Friend::factory()->count(15)->state(new Sequence(
            ['friend_name' => '本村'],
            ['friend_name' => '佐々木'],
            ['friend_name' => '三宅'],
        ))->create();

        $keyword = "初めまして、私は";

        // APIエンドポイントにリクエスト
        $response = $this->postJson("api/friends/search", ['keyword' => $keyword]);

        // レスポンスのステータスコードを確認
        $response->assertStatus(404);

        // レスポンスのJSONを取得
        $responseData = $response->json();
//        dd($responseData);


        // filter_friendとレスポンスの配列が一致しているかテスト
        $filter_friend = $friends->filter(function ($friend) use ($keyword) {
            return stripos($friend->friend_name, $keyword) !== false;
        });

        $this->assertTrue($filter_friend->pluck('friend_name')->toArray() === array_column($responseData, 'friend_name'));

    }

}

