angular.module("MyPortfolioApplication")

    .controller("PortfolioController", ["$scope", '$window', function ($scope, $window) {

        $scope.pageClass = "page-portfolio"

        $scope.liveLink = function (port) {
            $window.open(`http://danielkpak.com/${port}/`, '_blank');
        }

}])
