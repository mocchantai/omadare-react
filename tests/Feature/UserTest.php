<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{

    use RefreshDatabase;

//    public function setUp(): void
//    {
//        parent::setUp();
//
//        $user = User::factory()->create([
//            'id' => 1,
//        ]);
//
//        Sanctum::actingAs($user);
//    }

    /**
     * A basic feature test example.
     */
    public function test_user_store(): void
    {
        $data = [
            'name' => 'test',
            'email' => 'test@example.com',
            'password' => 'testtest',
        ];

        $responseData = [
            'name' => 'test',
            'email' => 'test@example.com',
        ];


        $response = $this->postJson('api/user', $data);

//        dd($response->json());

        $response->assertStatus(201)
            ->assertJsonFragment($responseData);


    }

    public function test_user_store_with_no_name(): void
    {
        $data = [
            'name' => '',
            'email' => 'test@example.com',
            'password' => 'testtest',
        ];

        $response = $this->postJson('api/user', $data);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name' => "名前は必ず指定してください。"]);


    }

}
