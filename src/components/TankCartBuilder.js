import React, { useState } from 'react';
import MyTank from './MyTank';
import TankAccessories from './TankAccessories';
import PopUpWindow from './PopUpWindow';


const TankCartBuilder = props =>  {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return(
    <div className="tankCartBuilder">
        <MyTank />
        <input  className="chooseButton" type="button" value="choose tank" onClick={togglePopup}/>
        {isOpen && <PopUpWindow handleClose={togglePopup}
        />}
    </div>
    );
};

export default TankCartBuilder;