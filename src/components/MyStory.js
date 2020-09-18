import React from 'react';
import Quote from './Quote'

const today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
let todayN = dd + '/' + mm + '/' + yyyy;

const MyStory = ({ story }) => {

  
  return (
    <div className='myStory'>
      <Quote />
      <button className='right' id='saveButton'> Save </button> <br />
      <h3 className='center red-text'> {story.title} </h3>
      <p className='right'> {todayN} </p>
      <div>
        {story.content.split("\n").map((i, key) => {
          return (
            <p key={key}> {i} </p>
          )
        })}
      </div>

    </div>
  )
}
export default MyStory;