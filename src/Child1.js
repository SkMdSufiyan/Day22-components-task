import {useState, useEffect} from "react";

function Child1(props){

    // Setting initial state for "child1Val"
    const [child1Val, setChild1Val] = useState(0);

    // Function to increase "child1Val"
    const increaseChild1 = () => {
        setChild1Val(child1Val+1);
    }

    // Function to decrease the "child1Val"
    const decreaseChild1 = () => {
        setChild1Val(child1Val-1);
    }

    // Function to reset "child1Val"
    const resetChild1 = async () => {
        setChild1Val(0)
    }

    // Taking the function that is supplied by the parent (App.js) component
    const parentFun = props.parentFun;


    // Using the useEffect hook to call the "parentFun" function whenever the state of "child1Val" changes
    useEffect(()=>{
        parentFun(child1Val);
        // eslint-disable-next-line
    },[child1Val])


    // Returning the data that needs to be shown on the web-page from child-1 component
    return(

        <div className="child-1-main-div">

        <h3>Child-1 component </h3>
        <p class="file-name-p">"Child1.js" file</p>
        <br />
        
        {/* Buttons to perform the specified operations */}
        {/* The following buttons will execute the respective functions when they are clicked */}
        <button onClick={increaseChild1} >Increase child-1</button>
        <button onClick={decreaseChild1} >Decrease child-1</button>
        <button onClick={resetChild1} >Reset child-1</button>
        <br />
        <br />

        {/* Displaying the value of "child1Val" that is in child-1 component */}
        <b>Value in child-1 component is: <span className="value-span-1">{child1Val}</span></b>

        </div>

    )
}
export default Child1;

