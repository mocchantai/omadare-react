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
        $friendData = $request->validated();

        $friend = $this->createFriendUseCase->execute($friendData);

        return $friend
            ? response()->json($friend, 201)
            : response()->json([], 500);
    }

    public function update(UpdateFriendRequest $request, Friend $friend): JsonResponse
    {
        $friendData = $request->validated();

        $updatedFriend = $this->updateFriendUseCase->execute($friend, $friendData);

        return $updatedFriend
            ? response()->json($updatedFriend)
            : response()->json([], 500);
    }

    public function destroy(Friend $friend): JsonResponse
    {
        $success = $this->deleteFriendUseCase->execute($friend);

        return $success
            ? response()->json($friend)
            : response()->json([], 500);
    }

    public function search(Request $request): JsonResponse
    {
        $keyword = $request->input('keyword');

        $friends = $this->searchFriendUseCase->execute($keyword);

        return $friends->isNotEmpty()
            ? response()->json($friends)
            : response()->json([], 404);
    }
}
