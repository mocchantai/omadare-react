<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFriendRequest;
use App\Models\Friend;
use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;

class FriendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index()
    {
//        abort(500);//読み込みに失敗した時のエラーを表示されるテスト
//        return [];//TODOが0件の時のエラーメッセージのテスト
        return Friend::all();
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $friend = Friend::create($request->all());

        return $friend
            ? response()->json($friend, 201)
            : response()->json([], 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Friend $friend)//DIでidに対応するFriendを取得
    {
        $friend->friend_name = $request->friend_name;
        $friend->memo = $request->memo;

        return $friend->update()
            ? response()->json($friend)
            : response()->json([], 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
