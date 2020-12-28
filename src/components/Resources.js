import * as React from 'react';

const ResourcesGallary = props =>  {
    return(
    <div className="resourcesGalary">
        <h2 className="resourcesGalaryHeading">{props.content}</h2>
    </div>
    );
};

export default ResourcesGallary;