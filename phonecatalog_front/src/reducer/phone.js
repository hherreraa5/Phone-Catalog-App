import * as types from '../type/phone';

const stateShape = {
  loading: false,
  phones: [],
};

const phones = (state = stateShape, action) => {
  switch (action.type) {
    case types.FETCH_PHONES: {
      return {
        ...state,
        loading: true,
      }
    }
    case types.FETCH_PHONES_SUCCEDED: {
      const {
        phones
      } = action.payload;
      return {
        ...state,
        loading: false,
        phones
      }
    }
    case types.FETCH_PHONES_FAILED: {
      return {
        ...state,
        loading: false,
        phones: [],
      }
    }
    default: {
      return {
        ...state,
      }
    }
  }
}

export default phones;

export const getPhones = (state) => state.phones;
export const getPhonesLoading = (state) => state.loading;
