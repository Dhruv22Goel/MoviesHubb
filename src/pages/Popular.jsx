import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import axios from "axios";
import styled from "styled-components";
import Recommendations from "../components/Recommendations.jsx";
import NavBar from "../components/NavBar.jsx";
const TrendingDiv = styled.div``
const H1 = styled.h1`
  padding-top:20px;
  text-align:center;
  margin:0px;
  font-weight: lighter;
`
const H2 = styled.h2`
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
export default function Trending() {
  const API_URL = "https://api.themoviedb.org/3/";
  const [currentpage, setcurrentpage] = useState(1);
  const pages = "page=" + currentpage;
  const [recommendations, setRecommendations] = useState([]);
  const fetchRecommendations = async () => {
    const { data: { results } } = await axios.get(`${API_URL}movie/popular?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US&${pages}`)
    setRecommendations(results);
  }
  useEffect(() => {
    fetchRecommendations()
  }, [])
  const [recommendations2, setRecommendations2] = useState([]);
  const fetchRecommendations2 = async () => {
    const { data: { results } } = await axios.get(`${API_URL}tv/popular?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US&${pages}`)
    setRecommendations2(results);
  }
  useEffect(() => {
    fetchRecommendations2()
  }, [])


  const incpage = () => {
    fetchRecommendations();
    fetchRecommendations2();
    setcurrentpage(prevpage => prevpage + 1);
    console.log(currentpage);
    fetchRecommendations();
    fetchRecommendations2();
  }
  const decpage = () => {
    if (currentpage > 1) {
      setcurrentpage(prevpage => prevpage - 1);
    }
    console.log(currentpage);
    fetchRecommendations()
    fetchRecommendations2()
  }
  return (
    <div>
      <Header />
      <TrendingDiv>
        <H1>POPULAR</H1>
        <H2>MOVIE</H2>
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
        <H2>TV</H2>
        <div className="recommendations">
          {recommendations2.map(recommendations2 => (
            <Recommendations
              key={recommendations2.id}
              recommendations={recommendations2}
              type={"tv"}
            />
          ))}
        </div>
        <ButtonDiv>
          <Button onClick={decpage}>Previous Page</Button>
          <Button onClick={incpage}>Next Page</Button>
        </ButtonDiv>
      </TrendingDiv>
      <NavBar />
    </div>
  )
}