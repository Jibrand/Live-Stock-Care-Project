import { combineReducers } from 'redux';
import amountReducer from './amountReducer';
import cartReducer from './cartReducer';

const reducers = combineReducers({
  amount: amountReducer,
  cartt: cartReducer
});

export default reducers;
