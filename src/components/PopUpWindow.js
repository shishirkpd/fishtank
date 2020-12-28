import * as React from 'react';

const PopUpWindow = props => {

    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" >
                    <span onClick={props.handleClose}>close X</span>
                </div>    
            </div>
            {props.content}
        </div>
    );
};

export default PopUpWindow;