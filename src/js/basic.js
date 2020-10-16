export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUserName() {
    const regRepNum = /[\d]{3,}/i;
    const regInspectStartAndEnd = /^[^-_\d]+[-\w]+[^-_\d]$/i;

    if (this.userName.match(regInspectStartAndEnd) !== null) {
      const num = this.userName.match(regRepNum);
      if (num !== null) {
        return `Пожалуйста, исключите из имени 3 и более цифр идущие друг за другом. У вас это: ${num[0]}`;
      }
      return 'Соответствует';
    }
    return 'Убедитесь, что имя не начинается или не заканчивается на запрещеные символы (-_ [0-9])';
  }
}
