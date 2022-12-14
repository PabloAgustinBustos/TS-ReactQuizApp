import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNumber, totalQuestions}) => {
    return (
        <div>
            <p className='number'>
                Question: {questionNumber} / {totalQuestions}
            </p>

            {/* setea el contenido de la etiqueta */}
            <p dangerouslySetInnerHTML={{__html: question}}/>

            <div>
                {answers.map(answer => (<div key={answer}>
                    <button disabled={userAnswer} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </div>))}
            </div>
        </div>
    )
}

export default QuestionCard
