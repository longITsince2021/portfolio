import React from 'react'
import "./Feedback.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/tin.jpg";
import profilePic2 from "../../img/huu.png";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Feedback = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients = [
        {
            img: profilePic1,
            review: "Một chàng trai hào phóng và tốt bụng, nhưng đôi khi hơi khó gần và đầy bí mật.",
            author: "- Nguyen Dang Tin"
        },
        {
            img: profilePic2,
            review: "Một người hơi trầm nhưng rất có tâm, luôn tìm ra giải pháp cho công việc và có trách nhiệm với công việc.",
            author: "- Quicky Booster"
        },
        {
            img: profilePic3,
            review: "abcxyz",
            author: ""
        },
        {
            img: profilePic4,
            review: "abcxyz",
            auhotr: ""
        },
    ]
  return (
    <div className="f-wrapper" id="Feedback">
        <div className="f-heading">
            <span>Let's see what </span>
            <span>my friends </span>
            <span>think of me...</span>
            <div className="blur f-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur f-blur2" style={{background: "skyblue"}}></div>
        </div>
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="feedback">
                            <img src={client.img} />
                            <span style={{color: darkMode?'white':''}}>&quot;{client.review}&quot;</span>
                            <span style={{color: darkMode?'white':''}}><i>{client.author}</i></span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default Feedback
