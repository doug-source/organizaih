<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    /**
     * Handle the file submit logic
     *
     * @param \Illuminate\Http\Request $request
     * @param \Illuminate\Database\Eloquent\Model $model
     * @param string $name
     * @param string $folderName
     * @return string|null The new file's path
     */
    protected static function handleFile(Request $request, Model $model, string $name, string $folderName)
    {
        if ($request->hasFile($name) && $request->file($name)->isValid()) {
            $pathPhotoRecent = storage_path() . '/app/' . $model->$name;
            if (File::exists($pathPhotoRecent)) {
                File::delete($pathPhotoRecent);
            }
            $pathPhotoNew = $request->$name->store($folderName);
            return $pathPhotoNew;
        }
        return NULL;
    }
}
