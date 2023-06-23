// MainApi
const MAIN_BASE_URL = "https://api.movies.irinasfv.nomoredomains.rocks";
const CARDS_IMAGE_BASE_URL = "https://api.nomoreparties.co";

// MoviesApi
const MOVIES_BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

// Данные для ответа от сервера
const REG_SUCCESS_MESSAGE = "Вы успешно зарегистрировались!";
const REG_UNSUCCESS_MESSAGE = "Не получилось зарегистрироваться! Попробуйте ещё раз";
const LOGIN_UNSUCCESS_MESSAGE = "Не получилось войти! Попробуйте ещё раз.";
// const LOGOUT_UNSUCCESS_MESSAGE = "Не получилось выйти! Попробуйте ещё раз";
const AUTH_UNSUCCESS_MESSAGE = "Необходима авторизация!";
const USER_INFO_SUCCESS_MESSAGE = "Данные успешно обновлены!";
const USER_INFO_UNSUCCESS_MESSAGE = "Ошибка при обновлении данных! Попробуйте ещё раз.";
const MOVIE_SAVE_UNSUCCESS_MESSAGE = "Фильм не сохранился! Попробуйте ещё раз";
const MOVIE_DELETE_UNSUCCESS_MESSAGE = "Фильм не удалён! Попробуйте ещё раз";

// Валидация форм
const EMAIL_REGEX =
  "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";
const USER_NAME_REGEX = '^[A-Za-zА-Яа-яЁё /s -]+$';

// Фильтрация и подгрузка фильмов
const SHORT_MOVIES_DURATION = 40;
const CARDS_QUANTITY_DECKTOP = 12;
const CARDS_QUANTITY_TABLET = 8;
const CARDS_QUANTITY_MOBILE = 5;
const CARDS_MORE_DECKTOP = 3;
const CARDS_MORE_MOBILE = 2;

// Ошибки в блоке результатов
const NOTHING_FOUND = "Ничего не найдено";
const KEY_WORD_ERROR = "Нужно ввести ключевое слово";
const MOVIES_SERVER_ERROR ="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

export {
  REG_SUCCESS_MESSAGE,
  REG_UNSUCCESS_MESSAGE,
  LOGIN_UNSUCCESS_MESSAGE,
  // LOGOUT_UNSUCCESS_MESSAGE,
  AUTH_UNSUCCESS_MESSAGE,
  USER_INFO_SUCCESS_MESSAGE,
  USER_INFO_UNSUCCESS_MESSAGE,
  MOVIE_SAVE_UNSUCCESS_MESSAGE,
  MOVIE_DELETE_UNSUCCESS_MESSAGE,
  EMAIL_REGEX,
  USER_NAME_REGEX,
  NOTHING_FOUND,
  KEY_WORD_ERROR,
  MOVIES_SERVER_ERROR,
  SHORT_MOVIES_DURATION,
  CARDS_QUANTITY_DECKTOP,
  CARDS_QUANTITY_TABLET,
  CARDS_QUANTITY_MOBILE,
  CARDS_MORE_DECKTOP,
  CARDS_MORE_MOBILE,
  MAIN_BASE_URL,
  CARDS_IMAGE_BASE_URL,
  MOVIES_BASE_URL,
};