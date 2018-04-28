$(function () {
    
    let hero = new Hero("Adam");
    let villain = new Villain("Joker");

    hero.render();
    villain.render();

    let herosWeapon = new Weapon("Sythe");
    let villainsWeapon = new Weapon("Gun");

    hero.equipWeapon(herosWeapon);
    villain.equipWeapon(villainsWeapon);

    $('#heroAttack').click(()=>{
        hero.attack(villain);
        villain.render();
    });

    $('#villainAttack').click(() => {
        villain.attack(hero);
        hero.render();
    });
    
});