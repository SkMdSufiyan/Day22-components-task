function Child2(props){

    // Returning the data that needs to be shown on web-page from Child2.js component
    return(

        <div className="child-2-main-div">

        <h3>Child-2 component</h3>
        <p class="file-name-p">"Child2.js" file</p>
        <br />
        <p>The value supplied FROM child-1 component via parent (App.js) is shown here (in child-2 component)</p>

        {/* Displaying the value that is supplied from Child1.js component via parent (App.js) component */}
        <b>Value FROM child-1 is: <span className="value-span-2">{props.valFromParent}</span> </b>

        </div>

    )
}
export default Child2;


