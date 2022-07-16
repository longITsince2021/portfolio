import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from "framer-motion"

const Services = () => {

    const transition = {duration:1, type: 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>My programming</span>
            <span>abilities</span>
            <span style={{color: darkMode?'white':''}}>
            I can code on many different applications. From simple applications
                <br/>
                coded in the Java programming language to developing both front
                <br/>
                -end and backend of the website.
            </span>

            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className="cards">
            <motion.div 
            initial={{left: '25rem'}}
            whileInView={{left: '14rem'}}
            transition={transition}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Database'}
                    detail = {"SQL Server"}
                />
            </motion.div>
            <motion.div 
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}>
                <Card
                    emoji = {Glasses}
                    heading = {'Web Development'}
                    detail = {"HTML, CSS, JavaScript, React"}
                />
            </motion.div>
            <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}>
                <Card
                    emoji = {Humble}
                    heading = {'Object Oriented Programming'}
                    detail = {"Java"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services
