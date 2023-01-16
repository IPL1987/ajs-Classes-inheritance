import Character from '../characters';

test('Наличие цифр в имени персонажа', () => {
  expect(() => {
    const hero = new Character(121, 'Zombie');
    return hero;
  }).toThrow();
});

test('Количество символов в имени персонажа', () => {
  expect(() => {
    const hero = new Character('c', 'Undead');
    return hero;
  }).toThrow();
});

test('Проверка доступности персонажа', () => {
  expect(() => {
    const hero = new Character('Zorro', 'traktorist');
    return hero;
  }).toThrow();
});
