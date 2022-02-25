import { combineReducers } from 'redux';

import phone, * as phoneHandler from './phone';

export default combineReducers({
  phone
});

export const getPhones = (state) => phoneHandler.getPhones(state.phone);
export const getPhonesLoading = (state) => phoneHandler.getPhonesLoading(state.phone);