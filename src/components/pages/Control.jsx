import React, { useEffect, useState } from 'react'
import DropDown from '../UI/dropdown/DropDown';
import Quiz from '../Quiz';
import '../styles/Control.scss'
import Quizs from '../../Quizs';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';


const Control = () => {

  const { id } = useParams();

  const scrollToElement = (elementId) => {
    if (elementId) {
      const elem = document.getElementById(elementId);

      elem.scrollIntoView()
    }
    // scroll.scrollToElement(elementId);
  };

  useEffect(() => {
    console.log(id);
    scrollToElement(id);

  }, [id])



  return (
    <div className='page-content'>
      {/* <div className='nav-column'>
        <nav className='them-list'>
          <a href="#1"><li><h2>Раздел 1</h2></li></a>
          <a href="#2"><li><h2>Раздел 2</h2></li></a>
          <a href="#3"><li><h2>Раздел 3</h2></li></a>
        </nav>
      </div> */}
      <div className='control-content'>
        {/* <DropDown setObservedId={() => {}} id={'1'} title={'Тест №1'}><Quiz questions={Quizs.quiz1}/></DropDown>
        <DropDown setObservedId={() => {}} id={'2'} title={'Итоговое тестирование'}><Quiz questions={Quizs.quiz2}/></DropDown>
        <DropDown setObservedId={() => {}} id={'3'} title={'Тест №3'}><Quiz questions={Quizs.quiz3}/></DropDown> */}
        <h1 className='quiz-title' id="quiz1">Тестирование по 1 разделу теории</h1>
        <Quiz questions={Quizs.quiz1} />
        <h1 className='quiz-title' id="quiz2">Тестирование по 2 разделу теории</h1>
        <Quiz questions={Quizs.quiz2} />
        <h1 className='quiz-title' id="quiz3">Тестирование по 3 разделу теории</h1>
        <Quiz questions={Quizs.quiz3} />
        <h1 className='quiz-title' id="quiz-itog">Итоговое тестирование</h1>
        <Quiz questions={Quizs.quizItog} />
      </div>
    </div>
  )
}

export default Control