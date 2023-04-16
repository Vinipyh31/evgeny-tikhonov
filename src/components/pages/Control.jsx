import React from 'react'
import DropDown from '../UI/dropdown/DropDown';
import Quiz from '../Quiz';
import '../styles/Control.scss'
import Quizs from '../../Quizs';


const Control = () => {
  return (
    <div className='page-content'>
      <div className='nav-column'>
        <nav className='them-list'>
          <a href="#1"><li><h2>Раздел 1</h2></li></a>
          <a href="#2"><li><h2>Раздел 2</h2></li></a>
          <a href="#3"><li><h2>Раздел 3</h2></li></a>
        </nav>
      </div>
      <div className='content-column'>
        <DropDown id={'1'} title={'Тест №1'}><Quiz questions={Quizs.quiz1}/></DropDown>
        <DropDown id={'2'} title={'Тест №2'}><Quiz questions={Quizs.quiz2}/></DropDown>
        <DropDown id={'3'} title={'Тест №3'}><Quiz questions={Quizs.quiz3}/></DropDown>
      </div>
    </div>
  )
}

export default Control