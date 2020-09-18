import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStory } from '../store/actions/createStoryAction'

class CreateStory extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleChangeTextArea = (e) => {
        // let textarea = document.querySelector('textarea');

        // textarea.addEventListener('keydown', autosize);

        // function autosize() {
        //     var el = this;
        //     setTimeout(function () {
        //         el.style.cssText = 'height:auto; padding:0';
        //         // for box-sizing other than "content-box" use:
        //         // el.style.cssText = '-moz-box-sizing:content-box';
        //         el.style.cssText = 'height:' + el.scrollHeight + 2 + 'px';
        //     }, 0);
        // }

        this.setState({
            [e.target.id]: e.target.value
        })


    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.createStory(this.state);
        this.setState ({
            title: '',
            content: ''
        })

    }

    render() {
        return (
            <div className='row'>
                <div className="input-field col s10 offset-s1">
                    <form onSubmit={this.handleSubmit}>
                         

                        <div className="input-field">
                            <label htmlFor='title'> Title: </label>
                            <input type='text'
                                id='title'
                                onChange={this.handleChange} />
                            
                        </div>

                        <div className="input-field">
                            <label htmlFor='content'> Content: </label>
                            <textarea id='content' className = 'materialize-textarea'
                                onChange={this.handleChangeTextArea} > </textarea>
                            
                        </div>
                        <button className='btn pink lighten-1 z-depth-0 right'>Save</button>
                    </form>
                </div>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createStory: (story) => dispatch(createStory(story))
    }
  }

export default connect(null,mapDispatchToProps)(CreateStory)
