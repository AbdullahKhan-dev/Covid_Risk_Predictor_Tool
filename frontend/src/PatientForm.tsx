import { useState } from 'react'
import {questions} from './questions'
import './index.css'
import { AggResults } from './types.interfaces'
import axios from 'axios'

const PatientForm = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] :any = useState(null)
  const { question, type, options } = questions[activeQuestion]
  const [prediction, setPrediction] = useState<null|number> (null)
  const [isLoading, setIsLoading] = useState(false)

  const [aggResults, setAggResults] = useState<AggResults>({
    SEX: null,
    AGE: null,
    CLASIFFICATION_FINAL: 3,
    PNEUMONIA: null,
    PREGNANT: null,
    DIABETES: null,
    COPD: null,
    ASTHMA: null,
    INMSUPR: null,
    HIPERTENSION: null,
    CARDIOVASCULAR: null,
    OTHER_DISEASE: null,
    RENAL_CHRONIC: null,
    TOBACCO: null,
    OBESITY: null
  })

  const onClickNext = () => {

    if (activeQuestion === questions.length - 1){
        setIsLoading(true)
        axios.post('http://localhost:3001/predict', JSON.stringify(aggResults),{headers: {
            'Content-Type': 'application/json'
          }})
          .then(function (response:any) {
            setPrediction(parseInt(response.data.prediction))
            if(response.prediction == 1){
                console.log("You are a high risk covid patient", response)
            }
            else {
                console.log("You are a low risk covid patient", response)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
          setIsLoading(false)
    }
    
    setSelectedAnswerIndex(null)
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer:string|number, index:number) => {
    console.log("answer selected:", answer)
    if(answer === "Yes" || answer === "Male") answer = 1
    else answer = 2
    setSelectedAnswerIndex(index)
    setAggResults({...aggResults, [type]:answer})

  }

  const setAge = (input : any) => {
    const parsed = parseInt(input)
    setAggResults({...aggResults, AGE: parsed})
    setSelectedAnswerIndex(true)
  }

  const addLeadingZero = (number:any) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          {type == 'AGE'? 
          <>
                <input name="AGE" onChange={(e:any)=>setAge(e.target.value)}/>
                        
            </> 
            :<ul style={{'margin':'0 auto'}}>

                {options!.map((option, index) => (
                    <li
                        onClick={() => onAnswerSelected(option, index)}
                        key={type+''+option}
                        className={selectedAnswerIndex === index ? 'selected-answer' : undefined}
                    >
                        {option}
                    </li>
                ))}
            </ul>
         }
          <div>
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>{isLoading? "Loading ..." : "Here are your results!"}</h3>
          <p>
            Your risk factor: <span>{prediction}%</span>
          </p>
         
        </div>
      )}
    </div>
  )
}

export default PatientForm