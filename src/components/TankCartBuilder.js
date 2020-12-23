import * as React from 'react';
import MyTank from './MyTank';
import TankAccessories from './TankAccessories';

const TankCartBuilder = () =>  {
    return(
    <div className="tankCartBuilder">
        <MyTank />
        <div className="tankCartBuilderRightArrow"> &gt; </div>
        <TankAccessories />
        <div className="tankCartBuilderRightArrow2"> &gt; </div>
    </div>
    );
};

export default TankCartBuilder;