export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    const heroes = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if (typeof name === 'string' && name.length > 2 || name.length < 10) {
      throw new Error('Имя героя должно содердать от 2 до 10 символов');
    } else {
      this.name = name;
    };

    if (Character.heroes.includes(type)) {
      throw new Error('Выберите одного из доступных : Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
    } else {
      this.type = type;
    };
  };
};
