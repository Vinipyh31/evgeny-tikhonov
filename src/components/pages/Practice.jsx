import React, { useEffect, useState } from 'react'
import DropDown from '../UI/dropdown/DropDown'

import lr1p1 from '../images/labs/lr-1/1.jpg'
import lr1p2 from '../images/labs/lr-1/2.jpg'
import lr1p3 from '../images/labs/lr-1/3.jpg'

import lr2p1 from '../images/labs/lr-2/1.jpg'
import lr2p2 from '../images/labs/lr-2/2.jpg'
import lr2p3 from '../images/labs/lr-2/3.jpg'

import lr3p1 from '../images/labs/lr-3/1.jpg'
import lr3p2 from '../images/labs/lr-3/2.jpg'

import lr4p1 from '../images/labs/lr-4/1.jpg'
import lr4p2 from '../images/labs/lr-4/2.jpg'
import lr4p3 from '../images/labs/lr-4/3.jpg'

import lr5p1 from '../images/labs/lr-5/1.jpg'
import lr5p2 from '../images/labs/lr-5/2.jpg'

import lr6p1 from '../images/labs/lr-6/1.jpg'
import lr6p2 from '../images/labs/lr-6/2.jpg'

import lr7p1 from '../images/labs/lr-7/1.jpg'
import lr7p2 from '../images/labs/lr-7/2.jpg'
import lr7p3 from '../images/labs/lr-7/3.jpg'
import lr7p4 from '../images/labs/lr-7/4.jpg'

import lr8p1 from '../images/labs/lr-8/1.jpg'
import lr8p2 from '../images/labs/lr-8/2.jpg'
import lr8p3 from '../images/labs/lr-8/3.jpg'
import lr8p4 from '../images/labs/lr-8/4.jpg'

import lr9p1 from '../images/labs/lr-9/1.jpg'
import lr9p2 from '../images/labs/lr-9/2.jpg'
import lr9p3 from '../images/labs/lr-9/3.jpg'
import lr9p4 from '../images/labs/lr-9/4.jpg'

import lr10p1 from '../images/labs/lr-10/1.jpg'
import lr10p2 from '../images/labs/lr-10/2.jpg'
import lr10p3 from '../images/labs/lr-10/3.jpg'
import lr10p4 from '../images/labs/lr-10/4.jpg'

import lr11p1 from '../images/labs/lr-11/1.jpg'
import lr11p2 from '../images/labs/lr-11/2.jpg'
import lr11p3 from '../images/labs/lr-11/3.jpg'
import lr11p4 from '../images/labs/lr-11/4.jpg'
import lr11p5 from '../images/labs/lr-11/5.jpg'
import lr11p6 from '../images/labs/lr-11/6.jpg'

import lr12p1 from '../images/labs/lr-12/1.jpg'
import lr12p2 from '../images/labs/lr-12/2.jpg'
import lr12p3 from '../images/labs/lr-12/3.jpg'
import lr12p4 from '../images/labs/lr-12/4.jpg'
import lr12p5 from '../images/labs/lr-12/5.jpg'

import lr13p1 from '../images/labs/lr-13/1.jpg'
import lr13p2 from '../images/labs/lr-13/2.jpg'
import lr13p3 from '../images/labs/lr-13/3.jpg'
import lr13p4 from '../images/labs/lr-13/4.jpg'

import lr14p1 from '../images/labs/lr-14/1.jpg'
import lr14p2 from '../images/labs/lr-14/2.jpg'
import lr14p3 from '../images/labs/lr-14/3.jpg'
import lr14p4 from '../images/labs/lr-14/4.jpg'
import lr14p5 from '../images/labs/lr-14/5.jpg'
import lr14p6 from '../images/labs/lr-14/6.jpg'

import lr15p1 from '../images/labs/lr-15/1.jpg'
import lr15p2 from '../images/labs/lr-15/2.jpg'
import lr15p3 from '../images/labs/lr-15/3.jpg'
import lr15p4 from '../images/labs/lr-15/4.jpg'
import lr15p5 from '../images/labs/lr-15/5.jpg'

import lr16p1 from '../images/labs/lr-16/1.jpg'
import lr16p2 from '../images/labs/lr-16/2.jpg'
import lr16p3 from '../images/labs/lr-16/3.jpg'

import lr17p1 from '../images/labs/lr-17/1.jpg' 
import lr17p2 from '../images/labs/lr-17/2.jpg' 
import lr17p3 from '../images/labs/lr-17/3.jpg' 
import lr17p4 from '../images/labs/lr-17/4.jpg' 
import lr17p5 from '../images/labs/lr-17/5.jpg' 
import lr17p6 from '../images/labs/lr-17/6.jpg' 

import lr18p1 from '../images/labs/lr-18/1.jpg' 
import lr18p2 from '../images/labs/lr-18/2.jpg' 
import lr18p3 from '../images/labs/lr-18/3.jpg' 

import lr19p1 from '../images/labs/lr-19/1.jpg'
import lr19p2 from '../images/labs/lr-19/2.jpg'
import lr19p3 from '../images/labs/lr-19/3.jpg'
import lr19p4 from '../images/labs/lr-19/4.jpg'
import lr19p5 from '../images/labs/lr-19/5.jpg'
import lr19p6 from '../images/labs/lr-19/6.jpg'
import lr19p7 from '../images/labs/lr-19/7.jpg'

import lr20p1 from '../images/labs/lr-20/1.jpg'
import lr20p2 from '../images/labs/lr-20/2.jpg'
import lr20p3 from '../images/labs/lr-20/3.jpg'
import lr20p4 from '../images/labs/lr-20/4.jpg'
import lr20p5 from '../images/labs/lr-20/5.jpg'
import lr20p6 from '../images/labs/lr-20/6.jpg'

const navList = [
  "Лабораторная работа №1",
  "Лабораторная работа №2",
  "Лабораторная работа №3",
  "Лабораторная работа №4",
  "Лабораторная работа №5",
  "Лабораторная работа №6",
  "Лабораторная работа №7",
  "Лабораторная работа №8",
  "Лабораторная работа №9",
  "Лабораторная работа №10",
  "Лабораторная работа №11",
  "Лабораторная работа №12",
  "Лабораторная работа №13",
  "Лабораторная работа №14",
  "Лабораторная работа №15",
  "Лабораторная работа №16",
  "Лабораторная работа №17",
  "Лабораторная работа №18",
  "Лабораторная работа №19",
  "Лабораторная работа №20",
];

const Practice = () => {

  const [idOnScreen, setIdOnScreen] = useState(1);

  useEffect(() => {
    console.log(idOnScreen);
  }, [idOnScreen])

  return (
    <div className='page-content'>
      <div className='nav-column'>
        <nav className='them-list'>
          {
            navList.map((navText, i) => <a key={i} href={`#${i + 1}`}><li className={i + 1 === idOnScreen ? 'active' : ''}>{navText}</li></a>)
          }
        </nav>
      </div>
      <div className='content-column'>
        <DropDown setObservedId={setIdOnScreen} id={'1'} title={'Лабораторная работа №1'}>
          <img src={lr1p1} alt="" />
          <img src={lr1p2} alt="" />
          <img src={lr1p3} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'2'} title={'Лабораторная работа №2'}>
          <img src={lr2p1} alt="" />
          <img src={lr2p2} alt="" />
          <img src={lr2p3} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'3'} title={'Лабораторная работа №3'}>
          <img src={lr3p1} alt="" />
          <img src={lr3p2} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'4'} title={'Лабораторная работа №4'}>
          <img src={lr4p1} alt="" />
          <img src={lr4p2} alt="" />
          <img src={lr4p3} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'5'} title={'Лабораторная работа №5'}>
          <img src={lr5p1} alt="" />
          <img src={lr5p2} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'6'} title={'Лабораторная работа №6'}>
          <img src={lr6p1} alt="" />
          <img src={lr6p2} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'7'} title={'Лабораторная работа №7'}>
          <img src={lr7p1} alt="" />
          <img src={lr7p2} alt="" />
          <img src={lr7p3} alt="" />
          <img src={lr7p4} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'8'} title={'Лабораторная работа №8'}>
          <img src={lr8p1} alt="" />
          <img src={lr8p2} alt="" />
          <img src={lr8p3} alt="" />
          <img src={lr8p4} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'9'} title={'Лабораторная работа №9'}>
          <img src={lr9p1} alt="" />
          <img src={lr9p2} alt="" />
          <img src={lr9p3} alt="" />
          <img src={lr9p4} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'10'} title={'Лабораторная работа №10'}>
          <img src={lr10p1} alt="" />
          <img src={lr10p2} alt="" />
          <img src={lr10p3} alt="" />
          <img src={lr10p4} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'11'} title={'Лабораторная работа №11'}>
          <img src={lr11p1} alt="" />
          <img src={lr11p2} alt="" />
          <img src={lr11p3} alt="" />
          <img src={lr11p4} alt="" />
          <img src={lr11p5} alt="" />
          <img src={lr11p6} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'12'} title={'Лабораторная работа №12'}>
          <img src={lr12p1} alt="" />
          <img src={lr12p2} alt="" />
          <img src={lr12p3} alt="" />
          <img src={lr12p4} alt="" />
          <img src={lr12p5} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'13'} title={'Лабораторная работа №13'}>
          <img src={lr13p1} alt="" />
          <img src={lr13p2} alt="" />
          <img src={lr13p3} alt="" />
          <img src={lr13p4} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'14'} title={'Лабораторная работа №14'}>
          <img src={lr14p1} alt="" />
          <img src={lr14p2} alt="" />
          <img src={lr14p3} alt="" />
          <img src={lr14p4} alt="" />
          <img src={lr14p5} alt="" />
          <img src={lr14p6} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'15'} title={'Лабораторная работа №15'}>
          <img src={lr15p1} alt="" />
          <img src={lr15p2} alt="" />
          <img src={lr15p3} alt="" />
          <img src={lr15p4} alt="" />
          <img src={lr15p5} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'16'} title={'Лабораторная работа №16'}>
          <img src={lr16p1} alt="" />
          <img src={lr16p2} alt="" />
          <img src={lr16p3} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'17'} title={'Лабораторная работа №17'}>
          <img src={lr17p1} alt="" />
          <img src={lr17p2} alt="" />
          <img src={lr17p3} alt="" />
          <img src={lr17p4} alt="" />
          <img src={lr17p5} alt="" />
          <img src={lr17p6} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'18'} title={'Лабораторная работа №18'}>
          <img src={lr18p1} alt="" />
          <img src={lr18p2} alt="" />
          <img src={lr18p3} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'19'} title={'Лабораторная работа №19'}>
          <img src={lr19p1} alt="" />
          <img src={lr19p2} alt="" />
          <img src={lr19p3} alt="" />
          <img src={lr19p4} alt="" />
          <img src={lr19p5} alt="" />
          <img src={lr19p6} alt="" />
          <img src={lr19p7} alt="" />
        </DropDown>
        <DropDown setObservedId={setIdOnScreen} id={'20'} title={'Лабораторная работа №20'}>
          <img src={lr20p1} alt="" />
          <img src={lr20p2} alt="" />
          <img src={lr20p3} alt="" />
          <img src={lr20p4} alt="" />
          <img src={lr20p5} alt="" />
          <img src={lr20p6} alt="" />
        </DropDown>
      </div>
    </div>
  )
}

export default Practice


