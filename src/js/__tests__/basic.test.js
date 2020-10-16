import Validator from '../basic';

test('validate 1', () => {
  const userName = 'dsd3_d23-23ds';
  const result = new Validator(userName);

  expect(result.validateUserName()).toEqual('Соответствует');
});


test('validate 2', () => {
  const userName = '_dsd3_d23-23ds';
  const result = new Validator(userName);

  expect(result.validateUserName()).toEqual('Убедитесь, что имя не начинается или не заканчивается на запрещеные символы (-_ [0-9])');
});


test('validate 3', () => {
  const userName = 'dsd3_d23-23ds3';
  const result = new Validator(userName);

  expect(result.validateUserName()).toEqual('Убедитесь, что имя не начинается или не заканчивается на запрещеные символы (-_ [0-9])');
});

test('validate 4', () => {
  const userName = 'dsd3_d23-23ds-';
  const result = new Validator(userName);

  expect(result.validateUserName()).toEqual('Убедитесь, что имя не начинается или не заканчивается на запрещеные символы (-_ [0-9])');
});

test('validate 5', () => {
  const userName = 'dsd3_d243-23ds';
  const result = new Validator(userName);

  expect(result.validateUserName()).toEqual('Пожалуйста, исключите из имени 3 и более цифр идущие друг за другом. У вас это: 243');
});
