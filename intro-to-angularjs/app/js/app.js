var app = angular.module("app", [])

app.config(function($routeProvider) {

    $routeProvider.when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    });

    $routeProvider.otherwise({ redirectTo: '/login' });

});

app.service("AuthenticationService", function($location) {
    return {
        login: function(credentials) {
            if (credentials.username !== "Tao" || credentials.password !== "Liu") {
                alert("Wrong username and/or password");
            } else {
                $location.path('/home');
            }
        },
        logout: function() {
            $location.path('/login');
        }
    };
});


app.controller("LoginController", function($scope, $location, AuthenticationService) {
    $scope.credentials = { username: "", password: "" };

    $scope.login = function() {
        AuthenticationService.login($scope.credentials);
    }
});

app.controller("HomeController", function($scope, AuthenticationService) {
    $scope.title = "Awesome Home";
    window.title = $scope;
    $scope.message = "Mouse Over these images to see a directive at work!";

    $scope.logout = function() {
        AuthenticationService.logout();
    };
});

app.directive("showsMessageWhenHovered", function() {
    return {
        restrict: "A", // A = Attribute, C = CSS Class, E = HTML Element, M = HTML Comment
        link: function(scope, element, attributes) {
            var originalMessage = scope.message;
            element.bind("mouseenter", function() {
                scope.message = attributes.message;
                scope.$apply();
            });
            element.bind("mouseleave", function() {
                scope.message = originalMessage;
                scope.$apply();
            });
        }
    };
});
