import { createStore, combineReducers, applyMiddleware } from 'redux'

//Redux Misc.
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Redux Reducers
import { productListReducer, productDetailsReducer } from './redux/reducers/productReducers'
import { cartReducer } from './redux/reducers/cartReducers'
import { userLoginReducer } from './redux/reducers/userReducers'
import { userRegisterReducer } from './redux/reducers/userReducers'
import { userDetailsReducer } from './redux/reducers/userReducers'
import { userUpdateProfileReducer } from './redux/reducers/userReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
})

const storageCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: { cartItems: storageCartItems },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store