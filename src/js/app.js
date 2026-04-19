import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    // Здесь мы получим уже готовый объект
    console.log('Успешно загружено:', saving);
  } catch (error) {
    // Ловим ошибки, которые могли "всплыть" из load()
    console.error('Критическая ошибка:', error);
  }
})();