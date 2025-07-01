"use client"
import React from "react";
import { useState } from "react";

// function Header(props){
//     return(<React.Fragment>
//         <h1>Hello,{props.name}</h1>
//         <ul>
            // <li>Swimming</li>
            // <li>Volleyball</li>
            // <li>Cricket</li>
            // <li>Table tennis</li>
            // <li>Dolte firna</li>
//         </ul>
//         </React.Fragment>)
// }
// export default Header;

function Header(props){
    //const [variableName,setVariableName]=useState(initialValue) //hook react var //camel case studentName
    const [isShow,setIsShow]=useState(false)
    const [inputValue, setInputValue] = useState()
    const handleButtonClick = () => {
    //     console.log("User clicked the button");
    // }
        if (isShow == true){
            setIsShow(false);
        }
        else{
            setIsShow(true);
        }

    }
    const handleOnChange=(e) =>  {
        let value = e.target.value;
        console.log(value);
        setInputValue(value);
    }     
    
    let a=29;
    const hobbies = ["Painting","Chess","cricket","Coding"];
    hobbies.map((hobby) => console.log(hobby))
    return(
        <React.Fragment>
            <div>
                Hello, {props.name}.<br/>
                I am header component.<br/>
                I am from {props.place}.<br/><br/>
                My hobbies are :
                <ul>
                    {  
                        hobbies.map((hobby) => {
                            return (<li key={hobby}>{hobby}</li>)
                        })
                    }
                </ul>
                {
                    a==29 ? <p><br/>Value of a is 29</p> : <p><br/>Value of a is not 29</p>
                }
                <button onClick ={handleButtonClick} >
                    {/* "This is BUTTON, click it"  */}
                    {
                        isShow == true?"Hide" : "Show"
                    }
                </button>
                {/* <div>
                    <button>show</button>
                    {isShow == true && <ul>
                          <li>Swimming</li>
                          <li>Volleyball</li>
                          <li>cricket</li>
                        </ul>
                    }
                </div> */}
                <input type=""/*default string*/ placeholder="enter name" className="border"
                onChange = {(e)=>{handleOnChange(e)}}/>

                <div>
                    <button onClick={handleButtonClick}>
                        {isShow == true? "hide" : "show"}
                    </button>
                    {isShow == true &&
                    <p>my name is  {inputValue}</p>}
                </div>
            </div>
        </React.Fragment>)
}
export default Header;

// hookes learn 
// syntax
// const [varibleName , setVaribleName] = usestate(initialValue)

// 