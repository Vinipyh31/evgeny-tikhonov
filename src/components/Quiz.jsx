import React, { useEffect, useRef, useState } from 'react';


const Question = ({ question, options, correctAnswer, onAnswer, setQuizStart, questionId}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        if (questionId === 0) {
            setQuizStart( v => !v);
        }
        setSelectedOption(option);
        onAnswer(option === correctAnswer);
    };

    return (
        <div className='question'>
            <h3 style={{ whiteSpace: 'pre' }}>{question}</h3>
            {options.map((option) => (
                <div key={option} className='answer-row'>
                    {/* <label>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={option === selectedOption}
                            onChange={() => handleOptionSelect(option)}
                        />
                        {option}
                    </label> */}
                    <input type="button" value={option} onClick={() => handleOptionSelect(option)} />
                </div>
            ))}
        </div>
    );
};


const Quiz = ({ questions }) => {
    const [score, setScore] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [savedTime, setSavedTime] = useState('');
    let timer = useRef().current;
    const [quizStart, setQuizStart] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setQuestionId(v => ++v)
        setAnswered(true);
    };

    const handleNextQuestion = () => {
        setAnswered(false);
    };

    useEffect(() => {

        if (quizStart) {
            timer = setInterval(() => {
                setSec(v => ++v);
                // setMin(v => ++v);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        }
    }, [quizStart])

    useEffect(() => {
        if (sec >= 60) {
            setMin(v => ++v);
            setSec(0);
        }

        if (min >= 30 || questions.length === questionId) {
            clearInterval(timer);
            if (savedTime === "") {

                setSavedTime(`${min.toString().length > 1 ? min : `0${min}`}:${sec.toString().length > 1 ? sec : `0${sec}`}`);
            }
            setQuestionId(questions.length);
        }
    }, [sec])




    const currentQuestion = questions[questionId];

    return (
        <>

            {
                questionId < questions.length ?
                    <div className='timer'>
                        {`${min.toString().length > 1 ? min : `0${min}`}:${sec.toString().length > 1 ? sec : `0${sec}`}`}
                    </div> :
                    <div></div>
            }

            <div className='progress-bar__wrapper'>
                <div
                    className='progress-bar'
                    style={{ width: `${(questionId * 100) / questions.length}%` }}
                ></div>
            </div>

            <div className='quiz'>
                {questionId < questions.length ? (
                    <div>
                        <Question
                            question={currentQuestion.question}
                            options={currentQuestion.options}
                            correctAnswer={currentQuestion.correctAnswer}
                            onAnswer={handleAnswer}
                            questionId={questionId}
                            setQuizStart={setQuizStart}
                        />
                    </div>
                ) : (
                    <div className='question'>
                        <h1>Тест окончен!</h1>
                        <p className='test-over'>Время: {savedTime}</p>
                        <p className='test-over'>Результат: {score} из {questions.length}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Quiz