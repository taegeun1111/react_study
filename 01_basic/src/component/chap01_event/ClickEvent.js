//rafce
import React from 'react'
import PropTypes from 'prop-types'
import './style.css';

const ClickEvent = props => {

//   const $btn1 = document.getElementById('btn1');
//   $btn1.onclick = e =>{
//     alert('클릭 성공');
//   }
const greeting = e => {
    alert("안녕하세요");
}

const changeBox = e =>{
    const $box = document.querySelector('.box');
    $box.classList.toggle('active');
}


  return (
    <>
    <button id='btn1' onClick={() => {alert('클릭성공')}}>클릭해주세요</button>
    <button id='btn2' onClick={greeting}>클릭2</button>
    <button id='btn3' onMouseOver={changeBox}>클릭3</button>
    
    <div className='box'></div>
    </>
  )
}

ClickEvent.propTypes = {}

export default ClickEvent