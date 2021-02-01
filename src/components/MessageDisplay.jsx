import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <>
            <div>{ props.message.map((item, index) => {
                let style={backgroundColor:item, width:200, height:200, display:"inline-block", margin:20}
                return <div key={index} style ={style}></div>
            }) }</div>
        </>
    );
};
    
export default MessageDisplay;