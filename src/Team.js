import React from "react";

const Team = (props) => {

    const handleAddClick = (e) => {  
        console.log("here!")
        // Get all the teams array
        let teams = [...props.teams]
        // Get the specific team we are changing
        let team = teams[props.index]
        // Update the pointCount
        team.pointCount = team.pointCount + 100
        // Update the teams into the main array
        teams[props.index] = team
        // Update the teams state
        props.setTeams(teams)


    }

    const handleSubClick = () => {  
        // Get all the teams array
        let teams = [...props.teams]
        // Get the specific team we are changing
        let team = teams[props.index]
        // Update the pointCount
        team.pointCount = team.pointCount - 100
        // Update the teams into the main array
        teams[props.index] = team

        props.setTeams(teams)
    }

    return (
        <div className="team-container"> 
            <p>{props.name}</p>
            <div className="point-container">
                <button className="point-button" onClick={handleSubClick} style={{backgroundColor: '#FFD6D6'}}>-</button>
                <div id="point-text">{props.pointCount}</div>
                <button className="point-button" onClick={handleAddClick} style={{backgroundColor: '#DEF3E0'}}>+</button>
            </div>
        </div>
    )
}

export default Team;