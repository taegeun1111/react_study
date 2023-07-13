import React from 'react'

const ChangeEvent = () => {

  const changeValue = (e) =>{
    console.log(`value : ${e.target.value}`);
  };

  return (
    <>
        <input type='text' onChange={changeValue} />

        <select onChange={changeValue}>
            <option value='피자'>피자</option>
            <option value='햄버거'>햄버거</option>
            <option value='치킨'>치킨</option>
            <option value='파스타'>파스타</option>
        </select>
    </>
  )
}

export default ChangeEvent