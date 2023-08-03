<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    use HasFactory;

    protected $fillable = [
        'community',
    ];

    public function friends()
    {
        return $this->belongsToMany(Friend::class, 'members', 'community_id', 'friend_id');
    }
}
