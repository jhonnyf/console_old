@extends('layouts.vertical')

@section('breadcrumb')
    <div class="row page-title">
        <div class="col-md-12">
            <nav aria-label="breadcrumb" class="float-right mt-1">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('dashboard') }}">Console</a></li>
                    <li class="breadcrumb-item"><a href="{{ route('users.index') }}">Usuário</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ is_null($id) ? "Novo" : "Editar" }}</li>
                </ol>
            </nav>
            <h4 class="mb-1 mt-0">Usuário</h4>
        </div>
    </div>
@endsection

@section('content')

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">       

                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a href="{{ route('users.form', ['id' => $id]) }}" class="nav-link">
                                <span class="d-block d-sm-none"><i class="uil-home-alt"></i></span>
                                <span class="d-none d-sm-block ">Principal</span>
                            </a>                            
                        </li>
                        @if (is_null($id) === false)
                            <li class="nav-item">
                                <a href="{{ route('users.category', ['id' => $id]) }}"  class="nav-link active">
                                    <span class="d-block d-sm-none"><i class="uil-home-alt"></i></span>
                                    <span class="d-none d-sm-block ">Categorias</span>
                                </a>    
                            </li>
                        @endif
                    </ul>

                    <div class="tab-content p-3 text-muted">
                        <div class="tab-pane show active" id="main">

                            @php
                                $action = route("{$route}.store");
                                if(is_null($id) === false){
                                    $action = route("{$route}.update", ['id' => $id]);    
                                }
                            @endphp
                            
                            <form action="{{ $action }}" method="POST" class="form-horizontal" autocomplete="off">
                                @csrf
                                @if ($categories->count() > 0)                                
                                    <div class="form-group row">
                                        <label class="col-lg-2 col-form-label">{{ $categories->category }}</label>
                                        <div class="col-lg-10">
                                            <select class="form-control custom-select">
                                                @foreach ($categories->categorySecondary as $category)                
                                                    <option value="{{ $category->id }}">{{ $category->category }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                @endif
                            </form>

                        </div>
                    </div>                    

                </div>
            </div>

        </div>
    </div>

@endsection