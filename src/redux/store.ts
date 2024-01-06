import { createStore } from 'redux';
import rootReducer from './reducers'; // Импортируйте свой корневой редьюсер здесь

const store = createStore(rootReducer); // Создание хранилища Redux с помощью корневого редьюсера

export default store;
