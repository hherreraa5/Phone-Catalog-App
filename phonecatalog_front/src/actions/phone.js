
import * as types from '../type/phone';

export const fetchPhones = () => ({
    type: types.FETCH_PHONES,
    payload: {}
});

export const fetchPhonesConfirm = ({
    phones
}) => ({
    type: types.FETCH_PHONES_SUCCEDED,
    payload: {
      phones
    }
});

export const fetchPhonesFailed = ({
    message
}) => ({
    type: types.FETCH_PHONES_FAILED,
    payload: {
        message
    }
});
