import './Quiz.css' ;
import Q1 from "./Q1.js"
import Q2 from "./Q2.js"
function QuizTitle() {
    
    return(
        <div>
            <h2>How Do You Like Front End?</h2>
            <Q1/>
            <Q2/>
        </div>
    )
}

export default QuizTitle