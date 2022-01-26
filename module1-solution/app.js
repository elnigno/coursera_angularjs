(function () {
  "use scrict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope, $filter, $injector) {
    $scope.lunchMenu = "";
    $scope.checkFood = function () {
      var foods = $scope.lunchMenu.split(",");
      var nonEmptyFoods = removeEmptyFoods(foods);

      if (nonEmptyFoods.length == 0) {
        $scope.message = "Please enter data first!";
        $scope.messageStyle = {
          "color" : "red"
        };
        $scope.textboxStyle = {
          "border-color" : "red"
        };
      } else if (nonEmptyFoods.length > 3) {
        $scope.message = "Too Much!";
        $scope.messageStyle = {
          "color" : "green"
        };
        $scope.textboxStyle = {
          "border-color" : "green"
        };
      } else {
        $scope.message = "Enjoy!";
        $scope.messageStyle = {
          "color" : "green"
        };
        $scope.textboxStyle = {
          "border-color" : "green"
        };
      }
    };

    function removeEmptyFoods(foods) {
      var nonEmptyFoods = [];
      for (var i = 0; i < foods.length; ++i) {
        var food = foods[i];
        food = food.trim();
        if (food != "") {
          nonEmptyFoods.push(food);
        }
      }

      return nonEmptyFoods;
    }
  }
})();
