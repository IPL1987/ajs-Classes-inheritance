export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (typeof name !== 'string') {
      throw new Error('Имя не должно содержать цифр');
    }

    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя героя должно содержать от 2 до 10 символов');
    }

    if (!Character.heroes.includes(type)) {
      throw new Error('Выберите одного из доступных : Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  }

  static heroes = [
    'Bowman',
    'Daemon',
    'Magician',
    'Swordsman',
    'Undead',
    'Zombie',
  ];

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить уровень умершего!');
    }
    return true;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
