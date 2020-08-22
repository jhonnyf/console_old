<?php

namespace App\View\Components;

use Illuminate\View\Component;

class TableFields extends Component
{
    public $list;
    public $tableFields;

    public function __construct($tableFields, $list)
    {
        $this->list        = $list;
        $this->tableFields = $tableFields;
    }

    public function render()
    {
        return view('components.table-fields');
    }
}