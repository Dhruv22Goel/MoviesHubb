import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header.jsx";
import axios from "axios";
import styled from "styled-components";
import Recommendations from "../components/Recommendations.jsx";
const MovieDiv = styled.div``
const H1 = styled.h1`
  padding-top:20px;
  text-align:center;
  margin:0px;
  font-weight: lighter;
`
const Button = styled.button`
    background: #111111;
    color: #ffffff; 
    font-weight: 400;
    text-transform: uppercase;
    padding: 10px;
    border: 2px solid #4f4f4f; 
    transform: translate(0); 
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
    }
    :before {
        content:"";
        position: absolute; 
        background: linear-gradient(to left, #2d313a, #1c1e24, #2d313a);
        top: 0; 
        bottom: 0;
        width: 8px;
        left: -32px; 
        transform: rotate(-16deg);
        filter: blur (6px);
    }
    :hover::before 
    { 
        left: calc(100% + 32px);
        transition: 0.75s;
        background:#ffffff;
    }
`
const ButtonDiv = styled.div`
    margin:20px;
    margin-left:35vw;
    display:flex;
    flex-direction:row;
    gap:175px;
`
export default function TVSeries() {
  const API_URL = "https://api.themoviedb.org/3/";
  const [currentpage, setcurrentpage] = useState(1);
  const pages = "page=" + currentpage;
  const [recommendations, setRecommendations] = useState([]);
  const fetchRecommendations = async () => {
    const { data: { results } } = await axios.get(`${API_URL}trending/movie/week?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US&${pages}`)
    setRecommendations(results);
  }
  
  const incpage = () => {
    setcurrentpage(prevpage => prevpage + 1);
  }
  const decpage = () => {
    if (currentpage > 1) {
      setcurrentpage(prevpage => prevpage - 1);
    }
  }
  useEffect(() => {
    fetchRecommendations()
  }, [currentpage])
  return (
    <div>
      <MovieDiv>
        <H1>MOVIES</H1>
        <div className="recommendations">
          {recommendations.map(recommendations => (
            <Recommendations
              key={recommendations.id}
              recommendations={recommendations}
              type={"movie"}
            />
          ))}
        </div>
        <ButtonDiv>
          <Button onClick={decpage}>Previous Page</Button>
          <Button onClick={incpage}>Next Page</Button>
        </ButtonDiv>
      </MovieDiv>
      <NavBar />
    </div>
  )
}
