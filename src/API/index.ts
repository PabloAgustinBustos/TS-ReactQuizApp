import { shuffleArray } from "../utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string
}

export type QuestionState = Question & {
    answers: string[]
}

export enum difficulty{
    EASY="easy", 
    MEDIUM="medium", 
    HARD="hard"
}

export const fetchQuizQuestions = async(amount: number, difficulty: difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

    const data = await (await fetch(endpoint)).json()

    // retorna el array de preguntas y respuestas con su información
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}