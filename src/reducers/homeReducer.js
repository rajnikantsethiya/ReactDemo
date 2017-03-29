const initialState = {
  data: null
};

function homeReducer(state = initialState, action) {
  if (action) {
    console.log('true');
  }
  return state;
}

export default homeReducer;
