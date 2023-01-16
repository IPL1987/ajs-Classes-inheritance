import Character from '../characters';

test ('Количество символов в имени персонажа', () =>{
  const hero = new Character ('1', 'Zombie');
  expect(hero).toThrow('Имя героя должно содержать от 2 до 10 не цифровых символа');
});

test('Проверка доступности персонажа', () => {
  const unit1 = () => new Character('Zorro', 'Berserk');
  expect(unit1).toThrow('Выберите одного из доступных : Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
});
