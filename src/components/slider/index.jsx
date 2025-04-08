import React from 'react'
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container, Title, Button } from '../';
import style from './style.module.css'


export const Slider = () => {
  return (
    <Container className={style.cont}>
        <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        
    >
        <SwiperSlide >
            <div className={style.slider}>
                <div className={style.sliderContainer}>
                    <div className={style.sliderLeftPart}>
                        <img className={style.swipperLogo} src="/logo1.png" alt="" />
                        <div className={style.sliderTextButton}>
                            <Title size="l" text={<><span style={{color: "var(--primary-color)"}} >Stan Smith,</span> Forever!</>}/>
                            <Button className={style.button}>Купить</Button>
                        </div>
                    </div>
                </div>
                <img className={style.sliderRightPart} src="/slide.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.slider}>
                <div className={style.sliderContainer}>
                    <div className={style.sliderLeftPart}>
                        <img className={style.swipperLogo} src="/logo1.png" alt="" />
                        <div className={style.sliderTextButton}>
                            <Title size="l" text={<><span style={{color: "var(--primary-color)"}} >Stan Smith,</span> Forever!</>}/>
                            <Button className={style.button}>Купить</Button>
                        </div>
                    </div>
                </div>
                <img className={style.sliderRightPart} src="/slide.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.slider}>
                <div className={style.sliderContainer}>
                    <div className={style.sliderLeftPart}>
                        <img className={style.swipperLogo} src="/logo1.png" alt="" />
                        <div className={style.sliderTextButton}>
                            <Title size="l" text={<><span style={{color: "var(--primary-color)"}} >Stan Smith,</span> Forever!</>}/>
                            <Button className={style.button}>Купить</Button>
                        </div>
                    </div>
                </div>
                <img className={style.sliderRightPart} src="/slide.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.slider}>
                <div className={style.sliderContainer}>
                    <div className={style.sliderLeftPart}>
                        <img className={style.swipperLogo} src="/logo1.png" alt="" />
                        <div className={style.sliderTextButton}>
                            <Title size="l" text={<><span style={{color: "var(--primary-color)"}} >Stan Smith,</span> Forever!</>}/>
                            <Button className={style.button}>Купить</Button>
                        </div>
                    </div>
                </div>
                <img className={style.sliderRightPart} src="/slide.png" alt="" />
            </div>
        </SwiperSlide>
    </Swiper>
  </Container>
  )
}
