import React, { useState, useEffect  } from 'react';
import '../Styles/ChampionCard.css'
import ChampionLore from './ChampionLore'

  

function ChampionCard(props) {
    const [showlLore, setShowlLore] = useState(false)
    const [cardSide, setCardSide] = useState(false)
    const [classNamest, setClassNamest] = useState("")
    const [classNamesf, setClassNamesf] = useState("")

    const onShowLore = (e) => {
        if(showlLore){
            setShowlLore(false)
        }
        else{
            setShowlLore(true)
        }
    }

    const onChangeCardSide = (e) => {
        if(cardSide){
            setClassNamest("hover")
            setTimeout(() => {
                setCardSide(false)
                setClassNamesf("")    
            }, 500);
            
        }
        else{
            setClassNamesf("hover")
            setTimeout(() => {
                setCardSide(true)
                setClassNamest("")    
            }, 500);
        }
    }

    return (
        <div className="card">
            {
                cardSide? 
                <div className="basic_stuff">
                    <div className="image_and_flip">
                        <div className="champion_image">
                            <img src={"http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/" + props.data.image.full} alt= {"" + props.name + " avatar image"}/>
                        </div>
                        <button onClick={onChangeCardSide} ><i className='fa fa-rotate-right'></i>Flip</button>
                    </div>

                    <div className="champion_details">
                        <div className="details">
                            <p className="detail_text"> 
                            { props.data.name }<br/>
                            { props.data.title }</p>
                        </div>

                        <div className="tags">
                            {    
                                props.data.tags.map((tag) => (
                                    <li key={tag}><h4>{tag + ", "}</h4></li>
                                )) 
                            }
                        </div>
                        <br/>
                        <button onClick={onShowLore} id="lore_button"><i className={showlLore?'fa fa-angle-up':'fa fa-angle-down'}></i>Lore</button>
                    </div> 

                    <div className={"champion_stats " + classNamest}>
                        <div className="champ_stats">
                            <p>hp : {props.data.stats.hp}</p>
                            <p>armor : {props.data.stats.armor}</p>
                            <p>magic resist : {props.data.stats.spellblock}</p>
                            <p>attack damage : {props.data.stats.attackdamage}</p>
                            <p>attack speed : {props.data.stats.attackspeed}</p>
                            <p>move speed : {props.data.stats.movespeed}</p>
                        </div>
                    </div>
                </div> 
                :
                <div className="basic_stuff">
                <div className="image_and_flip">
                    <div className="champion_image">
                        <img src={"http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/" + props.data.image.full} alt= {"" + props.name + " avatar image"}/>
                    </div>
                    <button onClick={onChangeCardSide} ><i className='fa fa-rotate-left'></i>Flip</button>
                </div>

                <div className="champion_details">
                    <div className="details">
                        <p className="detail_text"> 
                        { props.data.name }<br/>
                         { props.data.title }</p>
                    </div>

                    <div className="tags">
                        {    
                            props.data.tags.map((tag) => (
                                <li key={tag}><h4>{tag + ", "}</h4></li>
                            )) 
                        }
                    </div>
                    <br/>
                    <button onClick={onShowLore} id="lore_button"><i className={showlLore?'fa fa-angle-up':'fa fa-angle-down'}></i>Lore</button>
            
                </div>    
                
                <div className={"champ_info " + classNamesf}>
                        {
                            Object.keys(props.data.info).map((stat) => (
                                <div className="progressBars" key={stat}>
                                    {stat} :
                                    <div className="progressContainer">
                                        <div className={"bar bar_" + props.data.info[stat]}  key={stat}> {props.data.info[stat]} </div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
            }
            <div className="lore">
                {
                    showlLore? <div className="lore_info">
                    <ChampionLore id={props.data.id}/>
                </div> : null
                }                
            </div>
        </div>
        
    )
}

export default ChampionCard
