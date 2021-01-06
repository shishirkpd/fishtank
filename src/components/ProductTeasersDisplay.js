import * as React from 'react';

function ProductTeasersDisplay(props) {
    return(
    <div>
        <div className="productTraser">
            <img className="productTraserImage" src="https://picsum.photos/200/300"/>
            <div className="productTraserTitle">Product title</div>
            <div className="productTraserPrice">Price</div>
            <div className="productTraserRating">Rating</div>
            <div></div>
            <img className="productTraserImage" src="https://picsum.photos/200/300"/>
            <div className="productTraserTitle">Product title</div>
            <div className="productTraserPrice">Price</div>
            <div className="productTraserRating">Rating</div>
        </div>
    </div>
    );
};


export default ProductTeasersDisplay;