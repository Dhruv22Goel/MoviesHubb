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
    border:1px solid white;
    border-radius:5px;
    height:fit-content;
    width:fit-content;
    background-color:black;
    color:white;
    padding:10px;
    :hover{
        background-color:white;
        color:black;
        border:1px solid black;
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
    // const { data } = await axios.get(`${API_URL}trending/movie/week?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US&${pages}`)
    setRecommendations(results);
    // console.log(data)
  }
  useEffect(() => {
    fetchRecommendations()
  }, [])

  const incpage = () => {
    fetchRecommendations();
    setcurrentpage(prevpage => prevpage + 1);
    console.log(currentpage);
    fetchRecommendations();
  }
  const decpage = () => {
    if (currentpage > 1) {
      setcurrentpage(prevpage => prevpage - 1);
    }
    console.log(currentpage);
    fetchRecommendations()
  }
  return (
    <div>
      <Header />
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