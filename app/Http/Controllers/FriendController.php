<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFriendRequest;
use App\Http\Requests\UpdateFriendRequest;
use App\Models\Community;
use App\Models\Friend;
use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;
use Symfony\Component\String\Inflector\FrenchInflector;

class FriendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index(Request $request)
    {

        return Friend::all();
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFriendRequest $request)
    {
        $friendData = $request->only(['friend_name', 'memo']);
        $communityData = $request->only(['community']);

        $friend = Friend::create($friendData);

        if ($communityData['community']) {
            $community = Community::create(['community_name' => $communityData['community']]);
            $friend->communities()->attach($community->id);
        }

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
    public function update(UpdateFriendRequest $request, Friend $friend)//DIでidに対応するFriendを取得
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
    public function destroy(Friend $friend)
    {
        return $friend->delete()
            ? response()->json($friend)
            : response()->json([], 500);
    }


    public function search(Request $request)
    {
        $keyword = $request->input('keyword');

        $friends = Friend::where('friend_name','like', '%' .$keyword. '%')
            ->OrWhere('memo', 'like', '%' .$keyword. '%')
            ->get();

        return $friends->isNotEmpty()
            ? response()->json($friends)
            : response()->json([], 404);
    }

}
