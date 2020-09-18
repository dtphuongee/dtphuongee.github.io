const initState = {
  stories: [
   { id: '1', title: 'Init Title', content: 'Init Content'}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);
  return state;
}

export default rootReducer;