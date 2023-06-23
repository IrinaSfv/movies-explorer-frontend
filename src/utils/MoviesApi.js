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
export const getMovies = (token) => {
    return fetch(`${MOVIES_BASE_URL}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    }).then((res) => checkResponse(res))
}
