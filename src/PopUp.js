import React from "react";

const PopUp = (props) => {

    return(
        <div className="pop-up">
            <div className="pop-up-content">
                <p>Create Category</p>
                <input id="category-text" type="text" autocomplete="off"></input>
                <p>Create Team</p>
                <input id="team-text" type="text" autocomplete="off"></input>
                <button className="submit" 
                onClick={()=>{
                    props.setAddNew(!props.addnew)
                    console.log(document.getElementById("category-text").value)
                    if(document.getElementById("category-text").value !== "") {
                        props.setCategories([
                            ...props.categories,
                            document.getElementById("category-text").value
                        ])
                    }
                    
                    // if(document.getElementById("team-text").value !== "") {
                    //     props.setTeams([
                    //         ...props.teams,
                    //         document.getElementById("team-text").value
                    //     ])
                    // }
                    
                }}>ok</button>
            </div>
        </div>
    )
}

export default PopUp;