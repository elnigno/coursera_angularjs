(function () {
  "use scrict";

  angular
    .module("ShoppingList", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    var shoppingList = ShoppingListCheckOffService;

    toBuy.itemsToBuy = shoppingList.itemsToBuy;

    toBuy.buyItem = function (item) {
      shoppingList.buyItem(item);
    };
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    var shoppingList = ShoppingListCheckOffService;

    alreadyBought.itemsAlreadyBought = shoppingList.itemsAlreadyBought;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.itemsToBuy = [
      { name: "Bananas", quantity: 10 },
      { name: "Sodas", quantity: 10 },
      { name: "Cookies", quantity: 10 },
      { name: "Sandwiches", quantity: 10 },
      { name: "Potatoes", quantity: 10 },
    ];

    service.itemsAlreadyBought = [];

    service.buyItem = function (item) {
      console.log(service.itemsToBuy);
      console.log(service.itemsAlreadyBought);

      var itemIndex = service.itemsToBuy.findIndex(function (i) {
        return item.name == i.name && item.quantity == i.quantity;
      });
      service.itemsToBuy.splice(itemIndex, 1);
      service.itemsAlreadyBought.push(item);

      console.log(service.itemsToBuy);
      console.log(service.itemsAlreadyBought);
    };
  }
})();
