<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFriendRequest;
use App\Http\Requests\UpdateFriendRequest;
use App\Models\Friend;

use App\UseCases\Friend\CreateFriendUseCase;
use App\UseCases\Friend\DeleteFriendUseCase;
use App\UseCases\Friend\SearchFriendUseCase;
use App\UseCases\Friend\UpdateFriendUseCase;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class FriendController extends Controller
{
    private CreateFriendUseCase $createFriendUseCase;
    private UpdateFriendUseCase $updateFriendUseCase;
    private DeleteFriendUseCase $deleteFriendUseCase;
    private SearchFriendUseCase $searchFriendUseCase;

    public function __construct(
        CreateFriendUseCase $createFriendUseCase,
        UpdateFriendUseCase $updateFriendUseCase,
        DeleteFriendUseCase $deleteFriendUseCase,
        SearchFriendUseCase $searchFriendUseCase
    ) {
        $this->createFriendUseCase = $createFriendUseCase;
        $this->updateFriendUseCase = $updateFriendUseCase;
        $this->deleteFriendUseCase = $deleteFriendUseCase;
        $this->searchFriendUseCase = $searchFriendUseCase;
    }

    public function index(Request $request): JsonResponse
    {
        $friends = $this->searchFriendUseCase->execute('');

        return response()->json($friends);
    }

    public function store(StoreFriendRequest $request): JsonResponse
    {
        Log::info("StoreFriendRequest", ['request' => $request->all()]);
        $validatedData = $request->validated();

        $friend = $this->createFriendUseCase->execute($validatedData);

        return $friend
            ? response()->json($friend, 201)
            : response()->json([], 500);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFriendRequest $request, Friend $friend)//DIでidに対応するFriendを取得
    {
        $friend->friend_name = $request->friend_name;
        $friend->community_name = $request->community_name;
        $friend->memo = $request->memo;

        return $friend->update()
            ? response()->json($friend)
            : response()->json([], 500);
    }

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
            ->OrWhere('community_name', 'like', '%' .$keyword. '%')
            ->OrWhere('memo', 'like', '%' .$keyword. '%')
            ->get();

        return $friends->isNotEmpty()
            ? response()->json($friends)
            : response()->json([], 404);
    }
}
