<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Friend;
use App\Models\User;

/**
 * @extends Friend
 */
class FriendFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Friend::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition():array
    {
        return [
            'friend_name' => $this->faker->name(),
            'memo' => $this->faker->realText(10),//10文字以下
            'user_id' => User::factory(), // ランダムなユーザーのIDを指定
        ];
    }
}



