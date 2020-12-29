<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{

    protected $fillable = ['file_gallery_id', 'file_path', 'original_name', 'extension', 'size', 'mime_type'];

    public function categoriesFiles()
    {
        return $this->belongsToMany(Categories::class)->withTimestamps();
    }

    public function fileGallery()
    {
        return $this->belongsTo(FilesGalleries::class);
    }

    public function contentFile()
    {
        return $this->hasMany(ContentsFiles::class);
    }
}
