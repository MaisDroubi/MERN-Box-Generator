import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.youveGotMail(msg)
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Color</h1>
            <input  onChange={ (e) => setMsg(e.target.value) }
                value={ msg }></input>
            <input type="submit" value="Add" />
        </form>
    );
};
    
export default MessageForm;