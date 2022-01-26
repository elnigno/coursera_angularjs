(function () {
'use scrict';

angular.module('Module1', [])
.controller('Container', ContainerController)

function ContainerController ($scope, $filter, $injector) {
    $scope.lunchMenu = '';
    $scope.checkFood = function()
    {
        var foods = $scope.lunchMenu.split(',');
        var nonEmptyFoods = removeEmptyFoods(foods);

        if (nonEmptyFoods.length == 0)
        {
            $scope.message = "Please enter data first!";
        }
        else if (nonEmptyFoods.length > 3)
        {
            $scope.message = "Too Much!";
        }
        else
        {
            $scope.message = "Enjoy!";
        }
    }

    function removeEmptyFoods(foods)
    {
        var nonEmptyFoods = [];
        for (var i=0; i<foods.length; ++i)
        {
            var food = foods[i];
            food = food.trim();
            if (food != "")
            {
                nonEmptyFoods.push(food);
            }
        }

        return nonEmptyFoods;
    }
}
})();