import React from "react"
import {useState} from "react"
import PopUp from "./PopUp"
import Category from "./Category"
import Team from "./Team"

function App(){

  // Use State creates a state with the starting state. 
  // Example: addnew is the state of whether the popup is open or not. It is initially false (meaning not open)
  const [addnew, setAddNew] = useState(false)

  // categories is an array state that tells us what our categories at the current time.
  const [categories, setCategories] = useState([])

  // Teams is going to be an array of Team objects:
    // The Team object will have a name and pointCount
    /*
      const team =  {
        name: "Team 1",
        pointCount: 200
      }
     */
  const [teams, setTeams] = useState([])

  // Questions and answers
  /**
   * QuestionAnswers is going to be an array of Question and Answers
   * Example: 
   * const questionAnswers = [
   *  {
   *    category: "Misc",
   *    questions: ["Question 1", "Question 2", "Question 3"]
   *    answers: ["Answer 1", "Answer 2", "Answer 3"]
   *    answered: [false, true, true]
   *  }
   * ]
   */
  const [questionAnswers, setQuestionAnswers] = useState(
    [
      {
        category: "Misc",
        questions: ["Question 1", "Question 2", "Question 3"],
        answers: ["Answer 1", "Answer 2", "Answer 3"],
        answered: [false, true, true]
      }
    ]
  )


  // When you click on the handleClick function -- it will toggle the state between true and false;
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
                    setCategories={setCategories}
                    teams={teams}
                    setTeams={setTeams}/> : null
      }
      {/* We have a map that acts like a "for" loop to return a Category component for each component that we create. */}
      <div className="categories-container">
        {
          categories.map((category, i) => {
            return <Category categoryName={category} 
                             i={i}
                             questionAnswers={questionAnswers}
                             setQuestionAnswers={setQuestionAnswers}/>
          })
        }
      </div>


      {/* We have a map that acts like a "for" loop to return a Team component for each team that we create. */}
      <div className="teams-container">
        {
          teams.map((team, i) => {
            return <Team {...team} teams={teams} setTeams={setTeams} index={i} />
          })
        }
      </div>
    </div>
  )
}


export default App;
