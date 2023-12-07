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
     * @param mixed|null $data
     */
    public static function successJSON($data = NULL, $options = 0, bool $complete = false)
    {
        if ($complete) {
            return response()->json(
                data: [
                    'message' => 'OK',
                    'status' => 200,
                    'data' => $data
                ],
                options: $options
            );
        }
        return response()->json(
            data: $data,
            options: $options
        );
    }
}
