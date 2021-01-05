import * as React from 'react';
import ProductTeasersDisplay from "./ProductTeasersDisplay";

function selectFilter(props) {
    alert("selected");
}

function PopUpWindow(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" >
                    <span onClick={props.handleClose}>close X</span>
                </div>    
                <div className="productDetailWindowTitle">{props.pageDetails.title}</div>
                <div className="productDetailWindowSubTitle">{props.pageDetails.subtitle}</div>
                {props.pageDetails.filter.map(filter => 
                    <div>
                        <div className="productDetailsWindowButton" onClick={selectFilter}>
                            <div className="productDetailsWindowButtonText">{filter.name}</div>
                            <div className="productDetailsWindowButtonDesc">{filter.description}</div>
                        </div>
                    </div> 

                )}    
                <div className="productDetailsWindowAdditionInfo">{props.pageDetails.pageInfo.additionalInfo}</div>
                <div className="productDetailsWindowFilterInfo">
                    {props.pageDetails.pageInfo.filterInfo}
                    <span className="show">Show</span>
                </div>
                <PopUpWindowProductsSection content={props}/>
            </div>
        </div>
    );
};

function PopUpWindowProductsSection(props) {
    return(
        <div className="popUpWindowProductsSection">
            <div className="productPagination">
                <div style={{'width':'205px', 'float':'left'}}>
                    items per page: 
                    {[9, 12, 24, 36].map(num => 
                        <span style={{'margin-left':'5px'}}>{num}</span>)
                    }
                </div>
                <div style={{'margin-right':'5px', 'float':'right'}}>Next </div>
            </div>
            <ProductTeasersDisplay listOfProcucts={props}/>
        </div>
    );
};


export default PopUpWindow;