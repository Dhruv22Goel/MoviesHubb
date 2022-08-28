import React, { useEffect, useState } from "react";
import Tv from "../components/TvComponent.jsx";
import NavBar from "../components/NavBar.jsx";
import axios from "axios";
import Header from "../components/Header.jsx";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const H1 = styled.h1`
    padding-top:20px;
    text-align:center;
    margin:0px;
    font-weight: lighter;
`

export default function App() {
	const { id } = useParams()
	const API_URL = "https://api.themoviedb.org/3/";

	const [tvs, settvs] = useState({})
	const fetchtv = async () => {
		const { data } = await axios.get(`${API_URL}tv/${id}?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US&page=1&append_to_response=reviews,similar,credits,alternative_titles`)
		.catch((exception) => {
			console.log(exception);
		})
		settvs(data)
	}
	useEffect(() => {
		fetchtv()
	}, [1])
	
	return (
		<div className="App">
			<Header />
			<Tv
				tvs={tvs}
			/>
			<NavBar />
		</div>
	);
}