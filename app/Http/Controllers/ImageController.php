<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;

class ImageController extends Controller
{
    /**
     * Find resource item inside of application's storage folder
     *
     * @param string $folder
     * @param string $fiename
     * @return \Illuminate\Http\Response
     */
    public function find(string $folder, string $filename)
    {
        $path = storage_path() . "/app/$folder/$filename";
        if (!File::exists($path)) {
            return response()->json(['message' => 'Image not found.'], 404);
        }
        $file = File::get($path);
        $type = File::mimeType($path);
        $response = Response::make($file, 200);
        $response->header('Content-Type', $type);
        return $response;
    }
}
