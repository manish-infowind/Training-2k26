//5. **Dynamic Form**: Create a `DynamicForm` component that accepts 
// a `fields` array and renders different input types based on field configuration

function DynamicFields(){
    return(
        <div className="Dynamic-form">
            <form >

<input type='text' placeholder="Enter name "> {Name} </input>
<input type='number' placeholder="Enter Age "> {Age}  </input>
<input type='text' placeholder="Enter Hobbies"> {Hobbies}  </input>
<input type="email" placeholder="Enter Your Email">{Email}</input>
<button type="button">Submit</button>
            </form>
        </div>
    )
}


export default DynamicFields()