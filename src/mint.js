import React from 'react';
import {useState} from 'react'
// import React from 'react'


const Mint = () => {

  function onchangeFunc(e){
    return e.target.value
  }
function mintprops(){
  return console.log("minted")
}
 return(
    <>
    <div className='minting-section'>
    <h1>Mint Your Prperty</h1>
    <form>
      <input type='text'
      
      onChange={onchangeFunc}
      placeholder="nft name"/>

   <button onClick={mintprops}>mint</button>   
    </form>
    </div>
    </>
 )
}
export {Mint}