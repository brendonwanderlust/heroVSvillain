class Person {
    constructor (name, health, weapon) {
        this.name = name;
        this.health = 100;
        this.weapon = null;
    };

    equipWeapon(weapon) {
        this.weapon = weapon
    };

    attack(person) {
        if (!person) {
            console.log('you forgot to pass in a person');
            return;
        };

        if (this.weapon == null) {
            console.log('you forgot to equip a weapon!')
        };

        person.health -= this.weapon.damage;
    };

    render() {
        $(this.selector).html(`
            <div>
                <img src="${this.imageURL}" alt="">
                <p>${this.health}</p>
            </div>
            `)
    };
};