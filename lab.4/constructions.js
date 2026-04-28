/**
 * Item (функция-конструктор)
 */
function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}
/**getInfo и setWeight через prototype*/
Item.prototype.getInfo = function () {
    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
};

Item.prototype.setWeight = function (newWeight) {
    this.weight = newWeight;
};

/**
 * Weapon (функция-конструктор)
 */
function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity); //наследование
    this.damage = damage;
    this.durability = durability;
}

Weapon.prototype = Object.create(Item.prototype);//наследование
Weapon.prototype.constructor = Weapon;

Weapon.prototype.use = function () {
    if (this.durability > 0) {
        this.durability -= 10;
    }
};

Weapon.prototype.repair = function () {
    this.durability = 100;
};


const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());

sword.setWeight(4.0);
console.log(sword.getInfo());


const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());

bow.use();
console.log("After use:", bow.durability);

bow.repair();
console.log("After repair:", bow.durability);

// optional chaining
const axe = new Weapon("Axe", 5, "common", 20, 80);
console.log(axe?.damage);
console.log(axe?.notExist?.value);