import React, { useState, useEffect } from 'react';

function ChampionLore(props) {
    const [champData, setChampData] = useState({});
   

    const fetchData = async () => {
		await fetch('http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/' + props.id + '.json')
			.then((res) => res.json())
			.then((data) => {
                setChampData(data.data[props.id])
			});
	};


	useEffect(() => {
		fetchData();
	}, []);



    return (
        <div>
            <p className="lore_text">
            {
                champData['lore']
            }
            </p>
        </div>
    )
}

export default ChampionLore
