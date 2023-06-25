import { MOVIES_BASE_URL } from '../config/config';

//Проверка ответа от сервера
export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
};

//Получение массива исходных карточек
export const getMovies = () => {
    return fetch(`${MOVIES_BASE_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => checkResponse(res))
}
