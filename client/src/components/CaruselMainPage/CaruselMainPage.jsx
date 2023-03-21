import React from "react";
import "./CaruselMainPage.scss";
import Carousel from "better-react-carousel";
import Card from '../Card/Card';
import SliderIconLeft from "../../images/slider-icon_prev.svg";
import SliderIconRight from "../../images/slider-icon_next.svg";


const CaruselMainPage = ({ data }) => {

  let classNameSliderBtns = '';

  let count = 0;
  for (let key in data) {
    count++;
  }

  if (count <= 8) {
    classNameSliderBtns += 'hiddenSliderBtns';

  } else {
    classNameSliderBtns -= 'hiddenSliderBtns';
  }

  const sliderIconPrev = () => (
    <button className={`${classNameSliderBtns} mainPageSlider__btn mainPageSlider__btn_left`} >
      <img src={SliderIconLeft} alt='' />
    </button>
  )

  const sliderIconNext = () => (
    <button className={`${classNameSliderBtns} mainPageSlider__btn mainPageSlider__btn_right`} >
      <img src={SliderIconRight} alt='' />
    </button>
  )

  return (
    <Carousel cols={4} rows={2} gap={10} loop arrowLeft={sliderIconPrev} arrowRight={sliderIconNext}>
      {data?.map((item) => (
        <Carousel.Item key={item.id}>
          <Card item={item} key={item.id} />
        </Carousel.Item>))}
    </Carousel>
  );
}

export default CaruselMainPage;