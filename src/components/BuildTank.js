import * as React from 'react';
import ChooseTank from './ChooseTank.js';

const BuildTank = () =>  {
    return(
    <div className="buildTank">
        <span className="buildTankText">
            Build Your Tank
        </span>
        <ChooseTank />
    </div>
    );
};

export default BuildTank;