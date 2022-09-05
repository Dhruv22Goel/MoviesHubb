import React, { useEffect, useState } from "react";
import Movie from "../components/MovieComponent.jsx";
import NavBar from "../components/NavBar.jsx";
import Recommendations from "../components/Recommendations.jsx";
import axios from "axios";
import Header from "../components/Header.jsx";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const H1 = styled.h1`
    padding-top:20px;
    text-align:center;
    margin:0px;
    font-weight: lighter;
`
const REACT_API_KEY = "ec16f51aa2aeb34f870ccabdaf00a523";

export default function App() {
	const { id } = useParams()
	const API_URL = "https://api.themoviedb.org/3/";
	const [recommendations, setRecommendations] = useState([]);
	const fetchRecommendations = async () => {
		const { data: { results } } = await axios.get(`${API_URL}movie/${id}/similar?`
			, {
				params: {
					api_key: REACT_API_KEY
				}
			})
		setRecommendations(results);
	}
	useEffect(() => {
		fetchRecommendations()
	}, [id])


	const [movies, setmovies] = useState({})
	const fetchMovie = async () => {
		const { data } = await axios.get(`${API_URL}movie/${id}?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US&page=1&append_to_response=reviews,similar,credits,alternative_titles,videos`)
			.catch((exception) => {
				console.log(exception);
			})
		setmovies(data)
	}
	useEffect(() => {
		fetchMovie()
	}, [id])
	function alpha() {
		fetchMovie();
	}
	return (
		<div className="App">
			<Header />
			<Movie
				movies={movies}
			/>
			<NavBar />
		</div>
	);
}
