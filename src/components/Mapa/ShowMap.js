import React, {useState} from 'react';
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip"; 
import "./css/Styles.css";
import Map from "./Map";

function ShowMap({ handler }) {
    const [content, setContent] = useState("");
    return(
        <div>
            <Map handler={handler} setTooltipContent={setContent}/>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    )
    
}
 
export default ShowMap;

const rootElement = document.getElementById("root");
ReactDOM.render(<ShowMap />, rootElement);