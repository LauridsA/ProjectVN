import React from 'react'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Root from './containers/Root.jsx'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {
    SHOW_PRODUCTS, SHOW_CATEGORIES, SWITCH_VIEW, SET_SORTBY, VIEW_PRODUCT_LIST,
    VIEW_PRODUCT_GRID, SORTBY_CATEGORY, SORTBY_PRICE, ADD_TO_CART, VISIBILITY_ABOUTUS,
    FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_PRICE_SUCCESS,
    SET_CURRENTPRODUCT, EMPTY_CURRENTPRODUCT, RESET_FILTER, RESET,
    RESET_CART, UPDATE_QUANTITY, DELETE_CART_ITEM, FETCH_PRODUCT_TYPES, RANDOM,
    PRODUCTS, PRODUCT_TYPES, SHOPPING_CART, SET_CURRENTUSER, EMPTY_CURRENTUSER, 
    FETCH_USER_DETAILS, ADD_USER, USERS
} from './components/Constants.jsx'
import {fetchProducts, fetchProductsByPrice, fetchProductsByTypeId, fetchProductTypes, 
    addShoppingCart, addUser, fetchUserDetails} from '../src/actions.jsx'

var initialState = {
    shoppingcart: {
        products: [],
        customer: {}
    },
    filter: {
        sortBy: RANDOM,
        view: VIEW_PRODUCT_GRID,
        minPrice: 0,
        maxPrice: 10000
    },
    currentProduct: {},
    currentUser: {}
}

function products(state = [], action) {
    switch (action.type) {
        case SHOW_PRODUCTS:
            return state

        case FETCH_PRODUCTS_SUCCESS:
            return [...action.payload]

        case FETCH_PRODUCTS_BY_ID_SUCCESS:
            let products = action.products
            return products.filter(p => p.productType === action.typeId)

        case FETCH_PRODUCTS_BY_PRICE_SUCCESS:
            let newProducts = action.payload[0].filter((p) => {
                return action.payload[1] < Number.parseInt(p.price) && Number.parseInt(p.price) < action.payload[2]
            })
            return [...newProducts]

        default:
            break;
    }

    return state;
}

function categories(state = [], action) {
    switch (action.type) {
        case SHOW_CATEGORIES:
            return state
        case FETCH_PRODUCT_TYPES:
            return action.data
        default:
            break;
    }
    return state;
}

function shoppingCart(state = initialState.shoppingcart, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, { ...action.payload, quantity: 1 }]

        case RESET_CART:
            return []

        case UPDATE_QUANTITY:
            return state.map(p => {
                if (p.id === action.id)
                    return { ...p, quantity: action.quantity }
                return p
            })

        case DELETE_CART_ITEM:
            return state.filter(product => product.id !== action.id)

        default:
            break;
    }
    return state;
}

function filter(state = initialState.filter, action) {
    switch (action.type) {
        case SWITCH_VIEW:
            if (state.view === VIEW_PRODUCT_GRID) {
                return Object.assign({}, state, { view: VIEW_PRODUCT_LIST })
            } else {
                return Object.assign({}, state, { view: VIEW_PRODUCT_GRID })
            }

        case SET_SORTBY:
            if (action.payload[0] === SORTBY_PRICE) {
                store.dispatch(fetchProductsByPrice(action.payload[1], action.payload[2]))

                return Object.assign({}, state, { sortBy: SORTBY_PRICE })
            }
            else if (action.payload[0] === SORTBY_CATEGORY) {
                store.dispatch(fetchProductsByTypeId(action.payload[1]))
                return Object.assign({}, state, { sortBy: SORTBY_CATEGORY })
            }

        case RESET_FILTER:
            store.dispatch(fetchProducts())
            return Object.assign({}, {
                sortBy: RANDOM,
                view: VIEW_PRODUCT_GRID,
                minPrice: 0,
                maxPrice: 10000
            })

        case RESET:
            store.dispatch(fetchProducts())
            return Object.assign({}, {
                sortBy: RANDOM,
                view: VIEW_PRODUCT_GRID,
                minPrice: 0,
                maxPrice: 10000
            })
    }
    return state;
}

function currentProduct(state = initialState.currentProduct, action) {
    switch (action.type) {
        case SET_CURRENTPRODUCT:
            return Object.assign({}, state, action.payload)

        case EMPTY_CURRENTPRODUCT:
            return Object.assign({}, {})

        case RESET:
            return Object.assign({}, {})
    }
    return state;
}

function currentUser(state = initialState.currentUser, action) {
    switch (action.type) {
        case SET_CURRENTUSER:
            return Object.assign({}, state, action.user)
        case EMPTY_CURRENTUSER:
            return Object.assign({}, {})
    }
    return state;
}

function users(state = [], action) {
    switch (action.type) {
        case FETCH_USER_DETAILS:
            return [...action.user]
        case ADD_USER:
            return [...action.user]

        default:
            break;
    }

    return state;
}


const centralState = combineReducers({
    products,
    categories,
    shoppingCart,
    filter,
    currentProduct,
    currentUser,
    users
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(centralState, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
store.dispatch(fetchProducts())
store.dispatch(fetchProductTypes())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider >, document.getElementById('app')

)