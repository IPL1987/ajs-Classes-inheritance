import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Zombie from '../zombie';

test('Метод levelUp На 1 повышает поле level, на 20 % повышает показатели attack и defence, приводит показатель health к значению 100', () => {
  const hero = new Magician('Zorro', 'Magician');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Zorro',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('Метод levelUp выбрасывает ошибку, если health = 0', () => {
  const hero = new Zombie('qwerty', 'Zombie');
  hero.health = 0;
  expect(() => hero.levelUp()).toThrowError('Нельзя повысить уровень умершего!');
});

test('Метод damage(points) показывает состояние объекта, после нанесение урона', () => {
  const hero = new Bowman('qwerty', 'Bowman');
  hero.damage(10);
  const result = {
    name: 'qwerty',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(hero).toEqual(result);
});

test('Метод damage(points) не сработает при health = 0', () => {
  const hero = new Swordsman('qwerty', 'Swordsman');
  hero.health = 0;
  const result = {
    name: 'qwerty',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 10,
  };
  hero.damage(10);
  expect(hero).toEqual(result);
});

test('Если health < 0, тогда health = 0,', () => {
  const hero = new Daemon('Valera', 'Daemon');
  const expectedHealth = 0;
  hero.damage(100);
  hero.health = 0;

  expect(hero.health).toEqual(expectedHealth);
});
