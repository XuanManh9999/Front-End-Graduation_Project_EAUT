import React, { useState } from 'react'
import styles from "./CarouselProduct.module.scss"
import classNames from 'classnames'
// ant
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CarouselProductItem from './CarouselProductItem/index.jsx';
const CustomPrevArrow = ({ currentSlide, ...props }) => {
    const { onClick } = props;
    return (
        <div className={classNames(styles.customPrev, currentSlide === 0 ? styles.hidden : "")} onClick={onClick}>
            <LeftOutlined />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className={styles.customNext} onClick={onClick}>
            <RightOutlined />
        </div>
    );
};
function CarouselProduct({ title = "Được đề xuất cho bạn", data, infinite = false, slidesToShowNumber = 5, dots = false }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <>
            <h4 className={styles.title_section}>{title}</h4>
            <Carousel className={styles.carousel} arrows infinite={infinite} dots={dots} slidesToShow={slidesToShowNumber}
                prevArrow={<CustomPrevArrow currentSlide={currentSlide} />}
                nextArrow={<CustomNextArrow />}
                beforeChange={(oldIndex, newIndex) => setCurrentSlide(newIndex)}
            >
                <CarouselProductItem />
                <CarouselProductItem />
                <CarouselProductItem />
                <CarouselProductItem />
                <CarouselProductItem />
                <CarouselProductItem />
            </Carousel >
        </>
    )
}
export default CarouselProduct