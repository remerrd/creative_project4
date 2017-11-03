var app = window.angular.module('app', [])

app.factory('directoryFetcher', directoryFetcher)
app.controller('mainCtrl', mainCtrl)

function directoryFetcher ($http) {

    var API_ROOT = 'directory';
    return {
        get: function (){
            return $http   
                .get(API_ROOT)
                .then(function (resp) {
                    return resp.data;
                });
        }
    }
}

function mainCtrl ($scope, directoryFetcher, $http) {

    $scope.directory = [];

    directoryFetcher.get()
        .then(function(data) {
            $scope.directory = data;
        });

    $scope.addToDirectory = function(){
        var formData = {
            name: $scope.Name,
            number: $scope.Number,
            email: $scope.Email    
        };
        $scope.directory += formData;
        console.log(formData);
        /*
        console.log(formData);
        var myUrl = 'directory';
        $http({
            url: myUrl,
            method: "POST",
            data: formData
         }).success(function(data, status, headers, config) {
           console.log("Post worked");
         }).error(function(data, status, headers, config) {
           console.log("Post failed");
         });*/
    }
}