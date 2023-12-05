<?php

namespace App\Library\Builders;

use \Illuminate\Support\Stringable;

final class Response
{
    /**
     * Build the invalid json response output
     *
     * @param \Illuminate\Support\Stringable|string $msg
     * @return \Illuminate\Http\JsonResponse
     */
    public static function invalidJSON(Stringable|string $msg)
    {
        return response()->json([
            'message' => $msg,
            'errors' => ['status' => [$msg]]
        ], 403);
    }

    /**
     * Build the invalid json response output
     *
     * @param mixed $data
     * @return \Illuminate\Http\JsonResponse
     */
    public static function successJSON($data = NULL)
    {
        return response()->json([
            'message' => 'OK',
            'status' => 200,
            'data' => $data
        ]);
    }
}
