const { Item, Weapon } = require("./classes"); //возьми классы Item и Weapon *require*--взять другой файл

// тест Item
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());

sword.setWeight(4.0);
console.log(sword.getInfo());

// тест Weapon
const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());

bow.use();
console.log(bow.durability); // должно уменьшиться

bow.repair();
console.log(bow.durability); // увеличивается до 100
