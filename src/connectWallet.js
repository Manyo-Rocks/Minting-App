// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'

// const ConnectWallet =(props) =>{

// const [walletAddress, setWalletAddress]=useState("")
// const [status, setstatus]=useState("")





  export const connectwallet=  async()=>{
    
      if(window.ethereum){
        try{
        const addressArray=  await window.ethereum.request({
            method:"eth_requestAccounts",
          })
          const obj = {
            status: "hello hacker",
            address: addressArray[0],
          }
          return obj;
        }
        catch(error){
          return{
            address: "",
            status: error.message
          }
        }
      }else{
        return{
          address: '',
          status:(
            <p><a target="_blank" href={`https://metamask.io/download.html`}>metamask wallet is required <span>click to install</span></a></p>
          )
        }
      }

  }
//       setstatus(status)
//       setWalletAddress(walletAddress)
//     }
    

   
//   return(
//     <div>
//     <button id='wallet'
//     onClick={connectwallet}>
    
//     {walletAddress.length > 0 ? 
//     ("connected to " + String(walletAddress).substring(0, 5) + String(walletAddress).substring(38)):
//     (<p>connect to wallet</p>)
//     }
//     </button>
//     <p id='status'>{status}</p>
// </div>
//   )

// }


// export {ConnectWallet}