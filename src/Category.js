import {React, useState} from "react";

const Category = (props) => {
    
    let colors = ["#FFD6D6", "#D6F5FF", "#D9DDFF"]
    let points = ["100", "200", "300"]

    const [editQnAModal, setEditQnAModal] = useState("")
    const [questionModal, setQuestionModal] = useState(false)
    const [answerModal, setAnswerModal] = useState(false)
    const [pointClicked, setPointClicked] = useState(0)

    let questionText = ""
    let answerText = ""

    const handleClick = (e) => {
        e.preventDefault()

        if (e.type === 'click') {
            setPointClicked((Number(e.target.innerHTML) / 100)-1)
            setQuestionModal(true)
        } else if (e.type === 'contextmenu') {
            setEditQnAModal(e.target.innerHTML)
        }
    }

    const handleQuestionChange = (e) => {
        questionText = e.target.value
    }

    const handleAnswerChange = (e) => {
        answerText = e.target.value
    }

    return (
        <div className="category-container">
            <div className="category-name">{props.categoryName}</div>
            {
                points.map((point) => {
                    return (
                        <div>
                            <div className="point-value" onClick={handleClick} onContextMenu={handleClick} style={{backgroundColor: colors[props.i % 3], cursor: "pointer"}}>{point}</div>
                            {
                                editQnAModal !== "" ? (
                                    <div className="edit-question-container">
                                        <p>Edit Question</p>
                                        <input className="edit-question-text" type="text" autoComplete="off" onChange={handleQuestionChange}/>
                                        <p>Edit Answer</p>
                                        <input id="answer-text" type="text" autoComplete="off" onChange={handleAnswerChange}></input>
                                        <button className="submit" onClick={()=>{
                                            let questionAnswers = [...props.questionAnswers]
                                            let questions = questionAnswers[props.i].questions
                                            let answers = questionAnswers[props.i].answers
                                            if(questionText !== ""){
                                                questions[(Number(editQnAModal) / 100)-1] = questionText
                                                questionText = ""
                                            }
                                            if(answerText != ""){
                                                answers[(Number(editQnAModal) / 100)-1] = answerText
                                                answerText = ""
                                            }
                                            questionAnswers[props.i].answered = false
                                            questionAnswers[props.i].questions = questions
                                            questionAnswers[props.i].answers = answers
                                            props.setQuestionAnswers(questionAnswers)
                                            setEditQnAModal("")
                                        }}>ok</button>
                                    </div> 
                                 ) : null
                            }
                            {
                                questionModal ? (
                                    <div className="qa-modal" onClick={() =>{
                                        console.log(pointClicked)
                                        setQuestionModal(false)
                                        setAnswerModal(true)
                                    }} style={{backgroundColor:'#abe3b4'}}>
                                        <p>Question: </p>
                                        <p>{props.questionAnswers[props.i].questions[pointClicked]}</p>
                                    </div>
                                ) : null

                            }
                            {
                                answerModal ? (
                                    <div className="qa-modal" onClick={() =>{
                                        setAnswerModal(false)
                                    }} style={{backgroundColor:'#FBC796'}}>
                                        <p>Answer: </p>
                                        <p>{props.questionAnswers[props.i].answers[pointClicked]}</p>
                                    </div>
                                ) : null
                            }


                        </div>
                    )
                })
            }
        </div>
    )
   
}

export default Category