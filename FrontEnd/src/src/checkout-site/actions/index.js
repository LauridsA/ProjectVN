import { DELETE_CART_ITEM, RESET_CART, UPDATE_QUANTITY } from "../../components/Constants.jsx";

export const addCartAndReset = cart => {
    return dispatch => {
        fetch('http://bestlab.us:8080/shoppingCarts', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'POST', 
            body: JSON.stringify(cart)                
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: RESET_CART,
        }))
    }
}

export const updateQuantity = update => {
    return dispatch =>{
        fetch('http://bestlab.us:8080/students', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'PUT', 
            body: JSON.stringify(student)
        })
        .then((res) =>{res.json()})
        .then((data) => {store.dispatch({type : UPDATE_QUANTITY, payload: data})})
    }
}

export const deleteCartItem = id => {
    return dispatch => {
        fetch('http://bestlab.us:8080/shoppingCarts/'+id, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })
            .then(res=>res.json())
            .then((data) => {store.dispatch({ type: DELETE_CART_ITEM, payload: data })})
    }
}