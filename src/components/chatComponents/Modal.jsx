import React from 'react';
import { Fragment } from 'react';

const Modal = (props) => {

    const findByKey = (key) =>{
        return props.children.map(child=>{

                if(child.key===key){
                    return child;
                }
            
        })
    }
    return (
        <div className="modal-mask modal-close">
            <div className="modal-wrapper">
                <div className="modal-container">
                    <div className="modal-header">
                        {findByKey("header")}
                    </div>

                    <div className="modal-body">
                        {findByKey("body")}
                    </div>

                    <div className="modal-footer"> 
                        {findByKey("footer")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;