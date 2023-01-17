import Character from '../characters';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Существование персонажа', () => {
  expect(() => {
    const result = new Character('qwerty', 'Freak');
    return result;
  }).toThrow();
});

test('Создание Bowman', () => {
  const hero = new Bowman('qwerty', 'Bowman');
  expect(hero).toEqual({
    name: 'qwerty',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Создание Daemon', () => {
  const hero = new Daemon('qwerty', 'Daemon');
  expect(hero).toEqual({
    name: 'qwerty',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание Magician', () => {
  const hero = new Magician('qwerty', 'Magician');
  expect(hero).toEqual({
    name: 'qwerty',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Создание Swordsman', () => {
  const hero = new Swordsman('qwerty', 'Swordsman');
  expect(hero).toEqual({
    name: 'qwerty',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Создание Undead', () => {
  const hero = new Undead('qwerty', 'Undead');
  expect(hero).toEqual({
    name: 'qwerty',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Создание Zombie', () => {
  const hero = new Zombie('qwerty', 'Zombie');
  expect(hero).toEqual({
    name: 'qwerty',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
