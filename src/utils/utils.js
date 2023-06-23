// фильтрация фильмов по запросу в строке поиска
function filterMoviesByQuery(movies, searchQuery) {
  console.log(searchQuery);
  console.log(movies);
  const newMoviesByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const query = searchQuery.toLowerCase().trim();
      return movieRu.indexOf(query) !== -1 || movieEn.indexOf(query) !== -1;
  });
  return newMoviesByQuery;
}

// фильтрация фильмов с помощью чекбокса
function filterMoviesByCheckbox(movies) {
  const newMoviesByCheckbox = movies.filter((movie) => movie.duration < SHORT_FILMS_DURATION);
  return newMoviesByCheckbox;
}

function handleFilterMovies(movies, searchQuery, isCheckboxActive) {
  console.log(movies);
  const moviesToShow = filterMoviesByQuery(movies, searchQuery);
  setMoviesByQuery(moviesToShow);
  console.log(moviesToShow);
  localStorage.setItem('moviesByQuery', JSON.stringify(moviesToShow));
  console.log(localStorage.setItem('moviesByQuery', JSON.stringify(moviesToShow)));
  const filteredMoviesToShow = isCheckboxActive ? filterMoviesByCheckbox(moviesToShow) : moviesToShow;
  setFilteredMovies(filteredMoviesToShow);
  localStorage.setItem('allMovies', JSON.stringify(movies));
  console.log(localStorage.setItem('allMovies', JSON.stringify(movies)));
  setAllMovies(movies);
  // return filteredMoviesToShow;
}

function handleCheckedMovies() {
  setIsCheckboxActive(!isCheckboxActive);
  if (!isCheckboxActive) {
      setFilteredMovies(filterMoviesByCheckbox(moviesByQuery));
  } else {
      setFilteredMovies(moviesByQuery);
  }
  localStorage.setItem('isCheckboxActive', !isCheckboxActive);
}

function onSearchMovies(searchQuery) {
  console.log(searchQuery);
  localStorage.setItem('searchQuery', searchQuery);
  localStorage.setItem('isCheckboxActive', isCheckboxActive);

  if (localStorage.getItem('allMovies')) {
      console.log(localStorage.getItem('allMovies'))
      console.log(allMovies)
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      handleFilterMovies(movies, searchQuery, isCheckboxActive);
  } else {
      console.log('elseallMovies');
      setIsLoading(true);
      console.log(currentToken);
      moviesApi.getMovies(currentToken)
          .then((moviesList) => {
              handleFilterMovies(moviesList, searchQuery, isCheckboxActive);
          })
          .catch((err) => {
              setIsRequestError(true);
              console.log(err);
          })
          .finally(() => {
              setIsLoading(false);
          });
  }
}

useEffect(() => {
  if (localStorage.getItem('isCheckboxActive') === 'true') {
      setIsCheckboxActive(true);
  } else {
      setIsCheckboxActive(false);
  }
}, []);

useEffect(() => {
  if (localStorage.getItem('moviesByQuery')) {
      const movies = JSON.parse(localStorage.getItem('moviesByQuery'));
      setMoviesByQuery(movies);
      if (localStorage.getItem('isCheckboxActive') === 'true') {
          setFilteredMovies(filterMoviesByCheckbox(movies));
      } else {
          setFilteredMovies(movies);
      }
  }
}, []);

useEffect(() => {
  if (localStorage.getItem('isCheckboxActive')) {
      if (filteredMovies.length === 0) {
          setIsNotFound(true);
      } else {
          setIsNotFound(false);
      }
  } else {
      setIsNotFound(false);
  }
}, [filteredMovies]);



import {
  SHORT_MOVIES_DURATION,
  CARDS_QUANTITY_DECKTOP,
  CARDS_QUANTITY_TABLET,
  CARDS_QUANTITY_MOBILE,
  CARDS_MORE_DECKTOP,
  CARDS_MORE_MOBILE
} from '../config/config';

function MoviesFilter() {

  // фильтрация фильмов по запросу и чекбоксу
  function filterInitialMovies(initialMovies, searchValue, filterCheckboxState) {
      let filteredMovies;
      if (initialMovies) {
          filteredMovies = initialMovies.filter((movie) => {
              if (filterCheckboxState) {
                  return (
                      (movie.duration <= SHORT_MOVIES_DURATION) &
                      (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()))
                  );
              } else {
                  return (
                      movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
                      movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
                  );
              }
          });
      }
      return filteredMovies;
  }

  // фильтрация фильмов по сохраненным и не сохраненным
  function filterMovies(filteredMovies, savedMovies) {
      if (filteredMovies) {
          const filteredMoviesWithSaved = filteredMovies.filter((movie) => {
              savedMovies.some((savedMovie) => {
                  return movie.id === savedMovie.movieId
                      ? (movie.saved = true)
                      : (movie.saved = false);
              });
              return movie;
          });

          return filteredMoviesWithSaved;
      }
  }

  // длина массива карточек фильмов для отображения на странице
  function setShownMoviesQuantity(windowWidth, setShownMovies) {
      if (windowWidth > 896) {
          setShownMovies(CARDS_QUANTITY_DECKTOP);
      } else if ((windowWidth < 896) & (windowWidth > 564)) {
          setShownMovies(CARDS_QUANTITY_TABLET);
      } else if (windowWidth < 564) {
          setShownMovies(CARDS_QUANTITY_MOBILE);
      }
      return;
  }

  function loadMoreMovies(
      windowWidth,
      filteredMovies,
      shownMovies,
      setShownMovies
  ) {
      let quantity;
      if (windowWidth > 896) {
          quantity = CARDS_QUANTITY_DECKTOP;
          if (filteredMovies.length > quantity) {
              setShownMovies(shownMovies + CARDS_MORE_DECKTOP);
          }
      } else if ((windowWidth > 564) & (windowWidth < 896)) {
          quantity = CARDS_QUANTITY_TABLET;
          if (filteredMovies.length > quantity) {
              setShownMovies(shownMovies + CARDS_MORE_MOBILE);
          }
      } else if (windowWidth < 768) {
          quantity = CARDS_QUANTITY_MOBILE;
          if (filteredMovies.length > quantity) {
              setShownMovies(shownMovies + CARDS_MORE_MOBILE);
          }
      }
      return;
  }

  return {
      filterInitialMovies,
      filterMovies,
      setShownMoviesQuantity,
      loadMoreMovies,
  };
}

export default MoviesFilter;  
  
  // состояние загрузки на странице фильмов
  const [isPreloader, setPreloader] = useState(false);
  // const [isLoading, setLoading] = useState(false);

  // фильмы, которые приходят с сервера в формате JSON
  const initialMoviesStringify = localStorage.getItem("initialMovies");
  // массив фильмов с сервера
  const initialMoviesArr = JSON.parse(initialMoviesStringify);
  // список всех фильмов
  const [moviesCardList, setMoviesCardList] = useState(initialMoviesArr);
  // получен ли список фильмов
  const [isMoviesReceived, setIsMoviesReceived] = useState(true);

  // сохраненные фильмы в локальной БД в формате JSON
  const initialSavedMoviesStringify = localStorage.getItem("initialSavedMovies");
  // массив сохраненных фильмов
  const initialSavedMoviesArr = JSON.parse(initialSavedMoviesStringify);
  // список всех сохраненных фильмов
  const [savedMoviesCardList, setSavedMoviesCardList] = useState(initialSavedMoviesArr);
  // получен ли список сохраненных фильмов
  const [isSavedMoviesReceived, setIsSavedMoviesReceived] = useState(true);

  // состояние чекбокса на странице фильмов в формате JSON
  const filterCheckboxStateStringify = localStorage.getItem("filterCheckboxState");
  // состояние чекбокса на странице фильмов
  const [filterCheckboxState, setFilterCheckboxState] = useState(JSON.parse(filterCheckboxStateStringify));
  // состояние чекбокса на странице сохраненных фильмов
  const [savedMoviesFilterCheckboxState, setSavedMoviesFilterCheckboxState] = useState(false);
  // нажата ли кнопка удаления фильма
  const [isCardDeleteButtonClick, setCardDeleteButtonClick] = useState(false);
  // длина массива карточек фильмоа
  const [shownMovies, setShownMovies] = useState(0);
  // массив карточек фильмов посде фильтрации
  const [filteredMovies, setFilteredMovies] = useState([]);
  // состояние размера окна
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // название фильма в поиске на странице фильмов
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery"));
  // название фильма в поиске на странице сохраненных фильмов
  const [savedSearchQuery, setSavedSearchQuery] = useState("");
  // введено ли название фильма в поиске
  const [isSearchQuery, setIsSearchQuery] = useState(true);
  // массив карточек фильмов
  const [cardList, setCardList] = useState([]);
  // есть ли сообщение об ошибке
  const [isErrorMessage, setErrorMessage] = useState(false);
  // первый ли запрос в поисковой сроке (формат JSON)
  const isFirstRequestStringify = localStorage.getItem("isFirstRequest");
  // первый ли запрос в поиской строке
  const [isFirstRequest, setIsFirstRequest] = useState(JSON.parse(isFirstRequestStringify));


function getMoviesCards(setIsFirstRequest, setPreloader, setMoviesCardList, setIsMoviesReceived) {
    setPreloader(true);
    moviesApi
      .getMovies(currentToken)
      .then((resMovies) => {
        localStorage.setItem("initialMovies", JSON.stringify(resMovies));
        setMoviesCardList(resMovies);
        setIsMoviesReceived(true);
        setIsFirstRequest(true);
        localStorage.setItem("isFirstRequest", true);
      })
      .catch(() => {
        setIsMoviesReceived(false);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function getSavedMoviesCards(setPreloader, setSavedMoviesCardList, setIsSavedMoviesReceived) {
    setPreloader(true);
    mainApi
      .getSavedMoviesCards()
      .then((res) => {
        localStorage.setItem("initialSavedMovies", JSON.stringify(res));
        setSavedMoviesCardList(res);
        setIsSavedMoviesReceived(true);
      })
      .catch(() => {
        setIsSavedMoviesReceived(false);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function setMoviesCards(searchValue, filterCheckboxState) {
    setShownMoviesQuantity(windowWidth, setShownMovies);
    const filteredInitialMovies = filterInitialMovies(moviesCardList, searchValue, filterCheckboxState);
    const filteredMovies = filterMovies(filteredInitialMovies, savedMoviesCardList);
    setFilteredMovies(filteredMovies);
    setCardList(filteredMovies);
  }

  function setSavedMoviesCards(searchValue, filterCheckboxState) {
    const filteredSavedMovies = filterInitialMovies(savedMoviesCardList,searchValue,filterCheckboxState);
    setFilteredMovies(filteredSavedMovies);
    setCardList(filteredSavedMovies);
  }

  function handleSearchMovieButtonClick() {
    if (currentLocation === '/movies') {
      if (isFirstRequest) {
        if (initialMoviesArr.length > 0) {
          setMoviesCards(searchQuery, filterCheckboxState);
        }
      } else {
        getMoviesCards();
      }
    } else {
      setSavedMoviesCards(savedSearchQuery, savedMoviesFilterCheckboxState);
    }
    // setMoviesSearchButtonClick(!isMoviesSearchButtonClick);
  }

  function handleError() {
    if (isFirstRequest) {
      if (
        !isSearchQuery ||
        !isMoviesReceived ||
        !isSavedMoviesReceived ||
        cardList.length === 0
      ) {
        setErrorMessage(true);
      } else {
        setErrorMessage(false);
      }
    } else {
      setErrorMessage(false);
    }
  }

  function saveMovie(movieCard) {
    mainApi
      .saveMoviesCard(movieCard, currentToken)
      .then((newCard) => {
        savedMoviesCardList.push(newCard);
        closeAllPopups();
        console.log(`Карточка cохранена.`)
      })
      .then(() => { })
      .catch(() => {
        console.log(`Ошибка при сохранении карточки.`)
        setInfoTitle(MOVIE_SAVE_UNSUCCESS_MESSAGE);
        setInfoImg(FailImgSrc);
        setIsInfoPopupOpen(true);
      });
  }

  function deleteMovie(movieCard) {
    let cardToDelete = {};
    movieCard._id
      ? (cardToDelete = movieCard)
      : (cardToDelete = savedMoviesCardList.find((savedMoviesCard) => {
        return movieCard.id === savedMoviesCard.movieId;
      }));
    mainApi
      .deleteMoviesCard(cardToDelete, currentToken)
      .then(() => {
        if (cardToDelete._id) {
          setSavedMoviesCardList((state) =>
            state.filter((c) => c._id !== cardToDelete._id)
          );
        } else if (cardToDelete.id) {
          const card = savedMoviesCardList.find((savedMoviesCard) => {
            return cardToDelete.id === savedMoviesCard.movieId;
          });
          setSavedMoviesCardList((state) =>
            state.filter(() => card._id !== cardToDelete._id)
          );
        }
        // setCardDeleteButtonClick(!isCardDeleteButtonClick);
        closeAllPopups();
        console.log(`Карточка удалена.`)
      })
      .then(() => { })
      .catch(() => {
        console.log(`Ошибка при удалении карточки.`)
        setInfoTitle(MOVIE_DELETE_UNSUCCESS_MESSAGE);
        setInfoImg(FailImgSrc);
        setIsInfoPopupOpen(true);
      });
  }