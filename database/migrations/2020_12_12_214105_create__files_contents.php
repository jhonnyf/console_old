<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesContents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files_contents', function (Blueprint $table) {
            $table->engine = 'InnoDB';

            $table->unsignedBigInteger('files_id');
            $table->unsignedBigInteger('contents_id');
            $table->timestamps();

            $table->primary(['files_id', 'contents_id']);

            $table->foreign('files_id')->references('id')->on('files');
            $table->foreign('contents_id')->references('id')->on('contents');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files_contents');
    }
}
