import {combineReducers} from 'redux';
import books from './books';
import cart from './cart';
import filter from './filter';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    books,
    cart,
    filter
});