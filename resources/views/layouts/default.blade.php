<!DOCTYPE html>
<html>
    <head>
       @include('includes.head')
    </head>
    <body ng-app="rentApp">
        <div class="container">
            <header class="row">
                @include('includes.header')
            </header>
            <div class="row">
                @yield('content')
            </div>
            <footer class="row">
        @include('includes.footer')
    		</footer>
        </div>
    </body>
</html>
