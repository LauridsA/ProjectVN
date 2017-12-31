import {
    SHOW_PRODUCTS, SHOW_CATEGORIES, SWITCH_VIEW, SET_SORTBY, VIEW_PRODUCT_LIST,
    VIEW_PRODUCT_GRID, SORTBY_CATEGORY, SORTBY_PRICE, ADD_TO_CART, VISIBILITY_ABOUTUS,
    FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_PRICE_SUCCESS,
    SET_CURRENTPRODUCT, EMPTY_CURRENTPRODUCT, RESET_FILTER, RESET,
    RESET_CART, UPDATE_QUANTITY, DELETE_CART_ITEM, FETCH_PRODUCT_TYPES, RANDOM,
    PRODUCTS, PRODUCT_TYPES, SHOPPING_CART, SET_CURRENTUSER, EMPTY_CURRENTUSER, 
    FETCH_USER_DETAILS, ADD_USER, USERS, GET_USER
} from './components/Constants.jsx'
import store from '../src/main.js'

export function fetchProducts() {
    return function () {
        fetch(PRODUCTS)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    payload: data
                })
            })
    }
}

export function fetchProductsByPrice(min, max) {
    return function () {
        fetch(PRODUCTS)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_PRODUCTS_BY_PRICE_SUCCESS,
                    payload: [data, min, max]
                })
            })
    }
}

export function fetchProductsByTypeId(id) {
    return function () {
        fetch(PRODUCTS)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_PRODUCTS_BY_ID_SUCCESS,
                    products: data,
                    typeId: id
                })
            })
    }
}
export function fetchProductTypes() {
    return dispatch => {
        fetch(PRODUCT_TYPES)
            .then(response => response.json())
            .then(data => dispatch({
                type: FETCH_PRODUCT_TYPES,
                data
            }))
    }
}

export function addShoppingCart(shoppingcart) {
    return function () {
        fetch(SHOPPING_CART, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(shoppingcart)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                store.dispatch({ type: ADD_TO_CART, payload: data })
            })
    }
}

export function addUser(user) {
    return function () {
        fetch(USERS+user.id, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(user)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                store.dispatch({ type: ADD_USER, user: data })
            })
    }
}

export function fetchUserDetails(user) {
    return function () {
        fetch(USERS+user.id)
            .then(function (res) {
                return res.json()
            })
            .then(function (data) {
                store.dispatch({
                    type: FETCH_USER_DETAILS,
                    user: data
                })
            })
    }
}

export const fetchUser = id => {
    return dispatch => {
        fetch(USERS+id, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'GET', 
            body: JSON.stringify(id)
        })
        .then(response => response.json())
        .then(id => dispatch({type: GET_USER, id})) //might need to be user already defined above ?????
    }
}