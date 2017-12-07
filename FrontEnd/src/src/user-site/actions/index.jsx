export const fetchUser = id => {
    return dispatch => {
        fetch('http://bestlab.us:8080/user'+id, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'get', 
            body: JSON.stringify(id)
        })
        .then(response => response.json())
        .then(id => dispatch({type: GET_USER, id})) //might need to be user
    }
}