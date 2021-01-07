import * as React from 'react';

const ProductsList =[{
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct1",
        price: 121.00,
        rating: 4,
        tankSize: "small"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct2",
        price: 122.00,
        rating: 5,
        tankSize: "large"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct3",
        price: 123.00,
        rating: 2,
        tankSize: "small"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct4",
        price: 124.00,
        rating: 5,
        tankSize: "small"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct5",
        price: 125.00,
        rating: 4,
        tankSize: "large"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct6",
        price: 126.00,
        rating: 1,
        tankSize: "medium"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct7",
        price: 127.00,
        rating: 3,
        tankSize: "small"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct8",
        price: 128.00,
        rating: 2,
        tankSize: "medium"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct9",
        price: 129.00,
        rating: 4,
        tankSize: "small"
    },
    {
        imageUrl: "https://picsum.photos/200/300",
        productTitle: "Prodct10",
        price: 130.00,
        rating: 5,
        tankSize: "large"
    }
]; 

function ProductTeasersDisplay(props) {
    return(
    <div>
        {ProductsList.map(product => 
        <div key={product.productTitle}className="productTraser">
            <img className="productTraserImage" src={product.imageUrl}/>
            <div className="productTraserTitle">{product.productTitle}</div>
            <div className="productTraserPrice">${product.price}</div>
            <div className="productTraserRating">{product.rating}</div>
            <button className="productTraserChooseButton">
                <div className="productTraserChooseButtonText">Choose</div>
            </button>
        </div>
)};
    </div>
    );
};


export default ProductTeasersDisplay;