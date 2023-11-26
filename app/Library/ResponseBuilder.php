<?php

namespace App\Library;

use \Illuminate\Support\Stringable;

final class ResponseBuilder
{
    /**
     * Build the invalid json response output
     *
     * @param \Illuminate\Support\Stringable|string $msg
     * @return \Illuminate\Http\JsonResponse
     */
    public static function buildInvalidResponse(Stringable|string $msg)
    {
        return response()->json([
            'message' => $msg,
            'errors' => ['status' => [$msg]]
        ], 403);
    }
}
