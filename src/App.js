import React from "react"
import {useState} from "react"
import PopUp from "./PopUp"
import Category from "./Category"
import Team from "./Team"

function App(){

  const [addnew, setAddNew] = useState(false)
  const [categories, setCategories] = useState([])
  // const [teams, setTeams] = useState([])

  const handleClick = (e) => {
      setAddNew(!addnew)
  }

  return (
    <div className="game-body">
      <h1>trivia game</h1>
      <button className="add-new" onClick={handleClick}>+</button>
      {
        addnew ? <PopUp 
                    addnew={addnew} 
                    setAddNew={setAddNew}
                    categories={categories}
                    setCategories={setCategories}/> : null
      }
      <div className="categories-container">
        {
          categories.map((category, i) => {
            return <Category categoryName={category} i={i}/>
          })
        }
      </div>

      {/* <div className="teams-container">
        {
          teams.map((team, i) => {
            return <Team teamName={team}/>
          })
        }
      </div> */}

    </div>
  )
}


export default App;
