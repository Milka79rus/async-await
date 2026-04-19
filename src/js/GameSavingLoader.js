import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      // await "останавливает" выполнение, пока Promise не выполнится
      const data = await read(); 
      // Результат попадает сразу в переменную data
      const value = await json(data); 
      // Парсим строку в объект
      return JSON.parse(value);
    } catch (error) {
      // Если в read() или json() случится reject, мы попадем сюда
      throw new Error('Ошибка при загрузке сохранения: ' + error.message);
    }
  }
}