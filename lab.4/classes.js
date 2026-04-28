/**
 * Класс Item — предмет
 */
class Item {

    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /** показать инф*/
    getInfo() {
        return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }

    /**изменить вес*/
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}


class Weapon extends Item { //etends- наследование

    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity); //сначала сделай обычный Item
        this.damage = damage;
        this.durability = durability;
    }

    /**
     * Использовать оружие
     */
    use() {
        if (this.durability > 0) {
            this.durability -= 10;
        }
    }

    /**
     * Починить оружие
     */
    repair() {
        this.durability = 100;
    }

    /**
     * Информация (переопределение)
     */
    getInfo() {
        return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
}

module.exports = { Item, Weapon };