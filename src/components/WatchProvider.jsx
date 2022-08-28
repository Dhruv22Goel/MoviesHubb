import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import NOIMAGE from "../no_image.jpg"

const ProviderDiv = styled.div`
  height:100px;
  width:100px;
	display:flex;
	flex-direction:row;
	justify-content:center;
`
const ProviderImg = styled.img`
  height:100px;
  width:100px;
	margin:0px 5px;
`
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_PATH_W200 = "https://image.tmdb.org/t/p/w200"
export default function WatchProvider() {
	const { id } = useParams();
	const [provider, setprovider] = useState([]);
	const fetchRecommendations = async () => {
		const { data } = await axios.get(`${API_URL}movie/${id}/watch/providers?api_key=ec16f51aa2aeb34f870ccabdaf00a523&language=en-US`)
			.catch((exception) => {
				console.log(exception);
			})
		setprovider(data.results.IN.flatrate)
	}
	useEffect(() => {
		fetchRecommendations()
	}, [])
	const len = provider.length;

	var lenindex = len-len
	// console.log(len);
	// console.log(lenindex);
	return (
		<>
				<ProviderDiv>
					<ProviderImg src={
						provider.slice(lenindex, lenindex+1).map((provider) => { return provider.logo_path }) ?
							`${IMAGE_PATH_W200}${provider.slice(lenindex, 1).map((provider) => { return provider.logo_path })}`
							:
							NOIMAGE
					} />
					<ProviderImg src={
						provider.slice(lenindex, lenindex+1).map((provider) => { return provider.logo_path }) ?
							`${IMAGE_PATH_W200}${provider.slice(lenindex+1, lenindex+2).map((provider) => { return provider.logo_path })}`
							:
							NOIMAGE
					} />
					
				</ProviderDiv>
		</>
	)	
}

/* <ProviderImg src={
						provider.slice(1, 2).map((provider) => { return provider.logo_path }) ?
							`${IMAGE_PATH_W200}${provider.slice(1, 2).map((provider) => { return provider.logo_path })}`
							:
							NOIMAGE
					} />
					<ProviderImg src={
						provider.slice(2, 3).map((provider) => { return provider.logo_path }) ?
							`${IMAGE_PATH_W200}${provider.slice(2, 3).map((provider) => { return provider.logo_path })}`
							:
							NOIMAGE
					} />
					<ProviderImg src={
						provider.slice(3, 4).map((provider) => { return provider.logo_path }) ?
							`${IMAGE_PATH_W200}${provider.slice(3, 4).map((provider) => { return provider.logo_path })}`
							:
							NOIMAGE
					} /> */