const initialState = {
  user: {},
  myBusiness: {},
};

const GET_USER = "GET_USER",
  CLEAR_USER = "CLEAR_USER",
  GET_BUSINESS = "GET_BUSINESS",
  CLEAR_BUSINESS = "CLEAR_BUSINESS";

export function getUser(userObj) {
  return {
    type: GET_USER,
    payload: userObj,
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER,
    payload: {},
  };
}

export function getBusiness(businessObj) {
  return {
    type: GET_BUSINESS,
    payload: businessObj,
  };
}

export function clearBusiness() {
  return {
    type: CLEAR_BUSINESS,
    payload: {},
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return { ...state, user: payload };
    case CLEAR_USER:
      return { ...state, user: payload };
    case GET_BUSINESS:
      return { ...state, user: payload };
    case CLEAR_BUSINESS:
      return { ...state, user: payload };
    default:
      return state;
  }
}
