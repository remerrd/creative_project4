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

function mainCtrl ($scope, directoryFetcher) {

    $scope.directory = [];

    directoryFetcher.get()
        .then(function(data) {
            $scope.directory = data;
        });

    directoryFetcher.tryit()
        .then(function (data){
            console.log("try directory");
            console.log(data);
        })
}