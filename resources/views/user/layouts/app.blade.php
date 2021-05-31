<!DOCTYPE html>
<html lang="en zxx" class="no-js">
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
@include('user/layouts/head')
@yield('head')
</head>

@yield('body')

	<main>

 @include('user/layouts/header')

 @section('main-content')
 
 @show

  @include('user/layouts/footer')
  
@yield('footer')


</body>

</html>
