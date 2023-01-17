import Character from '../characters';

test('Наличие цифр в имени персонажа', () => {
  expect(() => {
    const hero = new Character(121, 'Zombie');
    return hero;
  }).toThrowError('Имя не должно содержать цифр');
});

test('Количество символов в имени персонажа', () => {
  expect(() => {
    const hero = new Character('c', 'Undead');
    return hero;
  }).toThrowError('Имя героя должно содержать от 2 до 10 символов');
});

test('Проверка доступности персонажа', () => {
  expect(() => {
    const hero = new Character('Zorro', 'traktorist');
    return hero;
  }).toThrowError('Выберите одного из доступных : Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});
