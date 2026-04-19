import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

test('должен корректно загружать данные', async () => {
    const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
        bufferView[i] = data.charCodeAt(i);
    }

    read.mockResolvedValue(buffer);

    const saving = await GameSavingLoader.load();
    expect(saving).toEqual(JSON.parse(data));
});

test('должен выбрасывать ошибку для 100% покрытия', async () => {
    read.mockRejectedValue(new Error('Ошибка чтения'));

    let error;
    try {
        await GameSavingLoader.load();
    } catch (e) {
        error = e;
    }

    expect(error.message).toBe('Ошибка при загрузке сохранения: Ошибка чтения');
});