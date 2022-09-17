import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import ProfilePic from "../ProfilePic (2).jpg";
import KanavProfilePic from "../WhatsApp Image 2022-09-09 at 2.11.36 PM.jpeg";
import PushkarProfilePic from "../WhatsApp Image 2022-09-17 at 9.35.19 AM.jpeg";

const AboutDiv = styled.div`
    max-height:100vh;
`
const AboutMe = styled.div`
    padding:10vh;   
    height:70vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const AboutMeImgDiv=styled.div`
    height:140px;
    width:140px;
    z-index:100;
    margin:0px 0px -70px 550px;
    // margin-bottom:-50px;
`
const AboutMeImg = styled.img`
    height:140px;
    border-radius:70px;
`
const AboutMeDiv = styled.div`
    height:400px;
    width:600px;
    background-color:white;
    margin:auto;
    border-radius:10px;
    padding:100px;
    color:black;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const P = styled.p`
    margin:auto;
    width:300px;
    font-size: 16px;
    text-align: left;
    word-wrap: break-word;
`
export default function About(){
    return(
        <>
        <AboutDiv>
            <AboutMe>
                <AboutMeImgDiv>
                    <AboutMeImg src={ProfilePic} />
                </AboutMeImgDiv>
                <AboutMeDiv>
                    <h3>DHRUV GOEL</h3>
                    <p><b>Student, Web Developer, and Software Engineer in Delhi,India</b></p>
                    <P>Greetings, I’m Dhruv . I’m a student living in Delhi,India. I am a fan of technology, food, and web development. I’m also interested in fitness and music.</P>
                </AboutMeDiv>
            </AboutMe>

        </AboutDiv>
        <AboutDiv>
            <AboutMe>
                <AboutMeImgDiv>
                    <AboutMeImg src={KanavProfilePic} />
                </AboutMeImgDiv>
                <AboutMeDiv>
                    <h3>KANAV KAPOOR</h3>
                    <p><b>Student, Web Developer, and Software Engineer in Delhi,India</b></p>
                    <P>Hey there, I’m Kanav. I’m a student living in IF/140 Lajpat Nagar -1 New Delhi-110024 . I am a fan of technology, music, and acting. I’m also interested in camping and running. You can hire me with a click on the button above.</P>
                </AboutMeDiv>
            </AboutMe>
        </AboutDiv>
        <AboutDiv>
            <AboutMe>
                <AboutMeImgDiv>
                    <AboutMeImg src={PushkarProfilePic} />
                </AboutMeImgDiv>
                <AboutMeDiv>
                    <h3>PUSHKAR KUMAR</h3>
                    <p><b>Student, Web Developer, and Software Engineer in Delhi,India</b></p>
                    <P>Hey, I’m Pushkar. I’m a student living in Delhi, India. I am a fan of technology, programming, and coffee. You can hire me with a click on the button above.</P>
                </AboutMeDiv>
            </AboutMe>
        </AboutDiv>
        <NavBar/>
        </>
    )
}
