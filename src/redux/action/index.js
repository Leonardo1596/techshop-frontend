// For add item to cart
export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}


// For delete item from cart
export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}


// For check if user is logged in
export const setAuth = (auth) => {
    return {
        type: 'ISLOGGEDIN',
        payload: auth
    }
}


// For save user info
export const setUser = (user) => {
    return {
        type: 'SETUSER',
        payload: user
    }
}


// For delete user info
export const removeUser = (user) => {
    return {
        type: 'REMOVEUSER',
        payload: user
    }
}


// For set total value cart
export const setTotal = (total) => {
    return {
        type: 'SETTOTAL',
        payload: total
    }
}

export const reduceTotal = (total) => {
    return {
        type: 'REDUCETOTAL',
        payload: total
    }
}