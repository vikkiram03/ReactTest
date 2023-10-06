// External Styling
import "./style.css";

// We can write this in App.js instead of importing in every component file
// Import bootstrap (.. => go back from directory)
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function F1() {
    
    // Internal Styling
    const myStyle = {
        color: "blue",
        backgroundColor: "black"
    }

    return (
        <div>
            <h1 style={{color:"red"}}> Inline Styling </h1>
            <h1 style={myStyle}> Internal Style </h1>
            <h1 class="c1"> External Styling </h1>
            <h1 class="text-center text-success bg-dark"> Bootstrap Style </h1>
        </div>
    )
}

export default F1;