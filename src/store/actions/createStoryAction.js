export const createStory = (story) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({type: 'CREATE_STORY', story: story})
  }
}

