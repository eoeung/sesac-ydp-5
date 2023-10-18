const CHANGE = 'isVisible/CHANGE';

const initialState = true;

export const toggleVisible = () => ({ type: CHANGE });

const isVisibleReducer = (state = initialState, action) => {
  if (action.type === CHANGE) {
    return !state;
  }

  return state;
};

export default isVisibleReducer;
