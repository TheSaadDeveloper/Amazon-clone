import React, { useEffect } from 'react';
import './Home.css';
import Product from './Product';
import axios from 'axios';

function Home() {

    useEffect(() => {
        fetch("https://amazon-product-data2.p.rapidapi.com/fetch_data?links=https%253A%252F%252Fwww.amazon.com%252FWsiiroon-Multicolor-Interior-Lighting-Waterproof%252Fdp%252FB075MFDQFY%252Chttps%253A%252F%252Fwww.amazon.com%252Fdp%252FB07WZ8JMM7%252Chttps%253A%252F%252Fwww.amazon.com%252FToppik-Building-Fibers-Light-Brown%252Fdp%252FB0009YKIZE", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "amazon-product-data2.p.rapidapi.com",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY"
            }
        })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
});
    }, [])

    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                alt="amazon__homeImage"
                />

            <div className="home__rows">
                <Product
                    id="23423" 
                    title="Asus ROG Phone 3"
                    image="https://www-techindeep-com.exactdn.com/phones/devicephotos/asus-rog-phone-3.png?strip=all&lossy=1&ssl=1"
                    price="899.00"
                    ratings={6}
                    key
                />
                <Product
                    id="45343" 
                    title="HARRY POTTER & the PRIZONER OF AZKABAN BOOK"
                    image="https://m.media-amazon.com/images/I/51Dfqo6jR5L.jpg"
                    price="199.20"
                    ratings={3}
                />
                <Product
                    id="63542" 
                    title="Yonex Rackets (pair) with the Shettle"
                    price="269.20"
                    image="https://assetscdn1.paytm.com/images/catalog/product/S/SP/SPOST-GOLD-2-BARUDR858916F986AF6D/1562053597173_0..png"
                    ratings={5}
                />
            </div>

            <div className="home__rows">
                <Product
                    id="15846" 
                    title="Gaming Computer Table for Professional's"
                    price="699.90"
                    image="https://d1cv0w6tawnc3a.cloudfront.net/catalog/product/i/c/ica-tb_esg01-techly-ica-tb_esg01-51876.jpg"
                    ratings={4}
                />
                <Product
                    id="15846" 
                    title="Adidas Sports Water Bottle"
                    price="89.02"
                    image="https://i5.walmartimages.com/asr/e7f9e713-476a-45ea-a8cd-487554c7a2b4_1.df33af809da95df7daaf9fdd426a95a9.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"
                    ratings={2}
                />
            </div>

            <div className="home__rows">
                <Product 
                    id="15846" 
                    title="SAMSUNG QLED Gaming Monitor 120inches display with (curved) display , HDMI Slots , USB Solts with 1year Warranty"
                    price="14999.00"
                    image="https://wallpapershome.com/images/pages/pic_h/13880.jpg"
                    ratings={10}
                />
            </div>

            </div>
        </div>
    )
}

export default Home
