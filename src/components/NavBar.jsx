import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterBG from "../footer-bg.jpg";
const NavBarDiv = styled.div`
    height:10vh;
    max-height:10vh;
    background-image:url(${FooterBG});
    display:flex;
    flex-direction:row;
    padding-left:230px;
`
export default function NavBar(){
    function scroll() {
        window.scrollTo(0, 0);
    }
    return(
        <NavBarDiv>
            <Link to="/" className="link2" onClick={scroll}>Home</Link>
            <Link to="/popular" className="link2" onClick={scroll}>Popular</Link>
            <Link to="/movies" className="link2" onClick={scroll}>Movie</Link>
            <Link to="/tvseries" className="link2" onClick={scroll}>TV Series</Link>
            <Link to="/search" className="link2" onClick={scroll}>Search</Link>
        </NavBarDiv>
    )
}
