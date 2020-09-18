import React, { Component } from 'react';
import MyStory from './MyStory';
import AddStory from './AddStory';

class PostStory extends Component {

  state = {
    title: "Title",
    content: "Content"
  }

  addStoryFunc = (newStory) =>{
    console.log ('New Story cua tui' + newStory);
    
    this.setState({
      title: newStory.title,
      content: newStory.content
      })
  }

  render() {
    return (
      <div>
        <AddStory addStory = {this.addStoryFunc} />
      {/*  <MyStory story = {this.state} /> */}
      </div>
    )
  }
  
}

export default PostStory;