import React from 'react'
import './Intro.css'
import FloatDiv from '../FloatDiv/FloatDiv';
import Github from '../../img/github.png';
import Facebook from '../../img/facebook.png';
import Telegram from '../../img/telegram.png';
import Long from '../../img/long-edit.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesemoji from '../../img/glassesimoji.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Intro = () => {

    const transition = {duration:2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hi! I Am</span>
                <span>Hoang Long</span>
                <span style={{color: darkMode?'white':''}}>Frontend Developer</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/longITsince2021"><img src={Github} alt="" /></a>
                <a href="https://www.facebook.com/hwanglong2k"><img src={Facebook} alt="" /></a>
                <a href=""><img src={Telegram} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
            {/* <img src={Vector1} alt="" />
            <img src={Vector2} alt="" /> */}
            <img src={Long} alt="" />
            <motion.img 
                initial={{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}
                
            src={glassesemoji} />
            <motion.div
            initial={{top: "-4%", left: "74%"}}
            whileInView={{left: "68%"}}
            transition={transition}
            className="floating-div">
  
                <FloatDiv image={Crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div 
            initial={{left: '9rem', top:'18rem'}}
            whileInView={{left: '0rem'}}
            transition={transition}
            className="floating-div">

                <FloatDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
            <div className='blur' style={{background:"rgb (238 210 255)"}}></div>
            <div className="blur"
                style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}
            ></div>
        </div>
    </div>
  )
}

export default Intro
