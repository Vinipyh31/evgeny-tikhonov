import React, { useState } from 'react';

const Question = ({ question, options, correctAnswer, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onAnswer(option === correctAnswer);
    };

    return (
        <div>
            <h3 style={{whiteSpace: 'pre'}}>{question}</h3>
            {options.map((option) => (
                <div key={option} className='answer-row'>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={option === selectedOption}
                            onChange={() => handleOptionSelect(option)}
                        />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

const Quiz = ({ questions }) => {
    const [score, setScore] = useState(0);
    const [questionId, setQuestionId] = useState(0);
    const [answered, setAnswered] = useState(false);

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


    const currentQuestion = questions[questionId];

    return (
        <div>
            {questionId < questions.length ? (
                <div>
                    <Question
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        correctAnswer={currentQuestion.correctAnswer}
                        onAnswer={handleAnswer}
                    />
                </div>
            ) : (
                <div>
                        <p className='test-over'>Тест окончен. Ваш результат: {score}/{questions.length}</p>
                </div>
            )}
        </div>
    );
}

export default Quiz