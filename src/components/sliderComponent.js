import React from "react";
import Slider from "react-slick";
import styles from "./styleInfo.module.css"

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const slides = [
        {img: "https://image.tmdb.org/t/p/original//70AV2Xx5FQYj20labp0EGdbjI6E.jpg"},
        {img: "https://image.tmdb.org/t/p/original//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"},
        {img: "https://image.tmdb.org/t/p/original//ouOojiypBE6CD1aqcHPVq7cJf2R.jpg"},
        {img: "https://image.tmdb.org/t/p/original//pkxPkHOPJjOvzfQOclANEBT8OfK.jpg"},
        {img: "https://image.tmdb.org/t/p/original//z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg"},
        {img: "https://image.tmdb.org/t/p/original//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"},
        {img: "https://image.tmdb.org/t/p/original//ouOojiypBE6CD1aqcHPVq7cJf2R.jpg"},
        {img: "https://image.tmdb.org/t/p/original//pkxPkHOPJjOvzfQOclANEBT8OfK.jpg"},
        {img: "https://image.tmdb.org/t/p/original//z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg"},
        {img: "https://image.tmdb.org/t/p/original//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"},
    ];
    return (
        <Slider {...settings}>
            {slides.map(slide=>(
                <div>
                    <img className={styles.slider} src={slide.img} />
                </div>
            ))}


        </Slider>
    );
}