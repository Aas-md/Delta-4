function onFormSubmit(event){
    event.preventDefault();
    console.log("Form was submited");
}

export default function Form(){

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="write something" />
            <button>submit</button>
        </form>
    )
}