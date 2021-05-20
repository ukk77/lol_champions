import React, { useState, useEffect } from 'react';
import './App.css';
import ChampionCard from './Components/ChampionCard'

function App() {
	let championUrl =
		'http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json';
	const [championData, setChampionData] = useState([]);
	const [showData, setShowData] = useState(false);

	const fetchData = async () => {
		await fetch(championUrl)
			.then((res) => res.json())
			.then((data) => {
				setChampionData(data.data);
				setShowData(true);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="app">
		<div className="data_container">
			{showData ? (
				<div className="champs">
					{
            Object.keys(championData).map((key) => (
						<ChampionCard data={championData[key]} key={key}/>
					))
        }
				</div>
			) : null}
			</div>
		</div>
	);
}

export default App;
