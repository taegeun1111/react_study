import React from 'react'

const SubmitEvent = () => {

  const send = e => {
    e.preventDefault(); //submit 기능 중지

    console.log(document.getElementById('nickName').value); 
  };

const buttonStyle = {
    backgroungColor : 'aqua',
    color : 'orange',
    fontSize : '1.5rem'
};

  return (
    <form onSubmit={send}>
        <input type='text' id='nickName' name='nick' />
        <button style={buttonStyle}  type='submit'>확인</button>
        {/* <button style={{color : 'orange'}}  type='submit'>확인</button> */}
    </form>
  )
}

export default SubmitEvent