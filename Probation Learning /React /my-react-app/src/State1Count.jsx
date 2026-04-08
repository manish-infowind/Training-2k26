import { useState } from "react";

function CountDynamic(){
const [ScreenCount  , Remote] = useState(0);
 
    return(
<div>


 {/* Syntax: const [stateVariable, setStateFunction] = useState(initialValue); */}

 {/* Array Destruction */}
<h1 id="DynamicCount1">Count :{ScreenCount}</h1>
<button onClick={()=>Remote(ScreenCount+1) }> Increment  ! </button>
<button onClick={()=>Remote(ScreenCount-1)}> Decrement ! </button>
<button onClick={()=>Remote(0)}> Reset </button>

</div>
    );
}

export default CountDynamic