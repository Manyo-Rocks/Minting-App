import React from 'react'
import { useState } from 'react';
import { VerifyStatus } from './verifystatus';



const RegisterLand =()=>{
    const [verifiedStatus, setVerifiedStatus] = useState(false)

    const [onGoing, setOnGoing] = useState(false)
    const [landDetails, setLandDetails] = useState({
        state: "",
        city: "",
        district: "",
        propertyId: "",
        surveyNumber: "",
        owner: "",
        marketValue: "",
        sizes: "",

    })
    const onChangeFunc = (event) =>{
        const {name, value} = event.target;
        setLandDetails({...landDetails, [name]:value});
      }

      const handleOnClick = async () =>{
        
        setOnGoing(true)
       
       
        // await contract.registerLand(landDetails.state, landDetails.city,  landDetails.district, landDetails.propertyId, landDetails.surveyNo, landDetails.owner, landDetails.marketValue, landDetails.size, {
        //   from: account
        // })
        // console.log(landDetails)
         
        setVerifiedStatus(true)
         setLandDetails({state:"", district:"", city:"", propertyId:"", surveyNo:"", owner:"", marketValue:"", size:""})
       
      
    //         catch(error){
    //     console.log(error)
    //     setOnGoing(false)
            
    //   }
    }
    function mess(){
        return(
         <VerifyStatus trigger={verifiedStatus}>
                    <h1>Verified successfully!</h1>
                </VerifyStatus>
        )
    }

    return (<div>
         <form method='#'>
                <div >
                    <label>State</label>
                    <input type="text"  name="state" placeholder="Enter State" 
                    autoComplete="off" value={landDetails.state} onChange={onChangeFunc}/>
                    
                </div>

                <div >
                    <label>City</label>
                    <input type="text"  name="city" placeholder="Enter city" 
                    autoComplete="off" value={landDetails.city} onChange={onChangeFunc}/>
                   
                </div>
                <div >
                    <label>District</label>
                    <input type="text"  name="district" placeholder="Enter district" 
                    autoComplete="off" value={landDetails.district} onChange={onChangeFunc}/>
                    
                </div>
                <div >
                    <label>Property ID</label>
                    <input type="number"  name="propertyId" placeholder="Enter property ID" 
                    autoComplete="off" value={landDetails.propertyId} onChange={onChangeFunc}/>
                    
                </div>
                <div >
                <label>Survey Number</label>
                <input type="number"  name="surveyNo" placeholder="Enter survey number" 
                autoComplete="off" value={landDetails.surveyNo} onChange={onChangeFunc}/>
                
            </div>
            <div >
                <label>Owner Address</label>
                <input type="text"  name="owner" placeholder="Enter owner address" 
                autoComplete="off" value={landDetails.owner} onChange={onChangeFunc}/>
                
            </div>
            <div >
                <label>Market Value</label>
                <input type="number"  name="marketValue" placeholder="Enter market value" 
                autoComplete="off" value={landDetails.marketValue} onChange={onChangeFunc} />
               
            </div>
            <div >
                <label>Size</label>
                <input type="number"  name="size" placeholder="Enter size (sq. ft.)" 
                autoComplete="off" value={landDetails.size} onChange={onChangeFunc}/>
                
            </div>
             {/* <button  onClick={handleOnClick}>Register Land</button>
             */}
                  {onGoing ? (
                    
        <div className="minting">
          verifying... please wait
        </div>
        
      ) : (
                <button  onClick={handleOnClick}>Register Land</button>

                     )
                }
            
            </form>
    </div>);

   
}


export {RegisterLand}

    
  