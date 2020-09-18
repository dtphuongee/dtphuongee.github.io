import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  render() {
     console.log('Props from Post');
     console.log(this.props.st.stories);
    
    return (
      <div>
      <div className='myStory'>
      <h1> This is Post Content</h1>
      <h3 className='center red-text'>  </h3>
      <div>
        {this.props.content}
      </div>

    </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    st: state
  }
}

export default connect(mapStateToProps)(Post);