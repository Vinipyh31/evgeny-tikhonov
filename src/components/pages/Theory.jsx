import React from 'react'
import '../styles/Theory.scss'
import DropDown from '../UI/dropdown/DropDown'
import t111 from '../images/1-1-1.png'
import t112 from '../images/1-1-2.png'

import t12p1 from '../images/theory/t-1-2/1.jpg';
import t12p2 from '../images/theory/t-1-2/2.jpg';
import t12p3 from '../images/theory/t-1-2/3.jpg';
import t12p4 from '../images/theory/t-1-2/4.jpg';

import t13p1 from '../images/theory/t-1-3/1.jpg';
import t13p2 from '../images/theory/t-1-3/2.jpg';

import t14p1 from '../images/theory/t-1-4/1.jpg';
import t14p2 from '../images/theory/t-1-4/2.jpg';
import t14p3 from '../images/theory/t-1-4/3.jpg';

import t15p1 from '../images/theory/t-1-5/1.jpg';
import t15p2 from '../images/theory/t-1-5/2.jpg';

import t21p1 from '../images/theory/t-2-1/1.jpg';
import t21p2 from '../images/theory/t-2-1/2.jpg';

import t22p1 from '../images/theory/t-2-2/1.jpg';
import t22p2 from '../images/theory/t-2-2/2.jpg';
import t22p3 from '../images/theory/t-2-2/3.jpg';
import t22p4 from '../images/theory/t-2-2/4.jpg';
import t22p5 from '../images/theory/t-2-2/5.jpg';
import t22p6 from '../images/theory/t-2-2/6.jpg';
import t22p7 from '../images/theory/t-2-2/7.jpg';
import t22p8 from '../images/theory/t-2-2/8.jpg';

import t23p1 from '../images/theory/t-2-3/1.jpg';
import t23p2 from '../images/theory/t-2-3/2.jpg';
import t23p3 from '../images/theory/t-2-3/3.jpg';
import t23p4 from '../images/theory/t-2-3/4.jpg';
import t23p5 from '../images/theory/t-2-3/5.jpg';
import t23p6 from '../images/theory/t-2-3/6.jpg';
import t23p7 from '../images/theory/t-2-3/7.jpg';

import t24p1 from '../images/theory/t-2-4/1.jpg';
import t24p2 from '../images/theory/t-2-4/2.jpg';

import t25p1 from '../images/theory/t-2-5/1.jpg';
import t25p2 from '../images/theory/t-2-5/2.jpg';
import t25p3 from '../images/theory/t-2-5/3.jpg';
import t25p4 from '../images/theory/t-2-5/4.jpg';
import t25p5 from '../images/theory/t-2-5/5.jpg';

import t26p1 from '../images/theory/t-2-6/1.jpg';
import t26p2 from '../images/theory/t-2-6/2.jpg';
import t26p3 from '../images/theory/t-2-6/3.jpg';

import t27p1 from '../images/theory/t-2-7/1.jpg';
import t27p2 from '../images/theory/t-2-7/2.jpg';
import t27p3 from '../images/theory/t-2-7/3.jpg';
import t27p4 from '../images/theory/t-2-7/4.jpg';
import t27p5 from '../images/theory/t-2-7/5.jpg';

import t28p1 from '../images/theory/t-2-8/1.jpg';
import t28p2 from '../images/theory/t-2-8/2.jpg';

import t29p1 from '../images/theory/t-2-9/1.jpg';
import t29p2 from '../images/theory/t-2-9/2.jpg';
import t29p3 from '../images/theory/t-2-9/3.jpg';

import t210p1 from '../images/theory/t-2-10/1.jpg';
import t210p2 from '../images/theory/t-2-10/2.jpg';
import t210p3 from '../images/theory/t-2-10/3.jpg';
import t210p4 from '../images/theory/t-2-10/4.jpg';
import t210p5 from '../images/theory/t-2-10/5.jpg';

import t211p1 from '../images/theory/t-2-11/1.jpg';
import t211p2 from '../images/theory/t-2-11/2.jpg';
import t211p3 from '../images/theory/t-2-11/3.jpg';
import t211p4 from '../images/theory/t-2-11/4.jpg';

import t212p1 from '../images/theory/t-2-12/1.jpg';
import t212p2 from '../images/theory/t-2-12/2.jpg';
import t212p3 from '../images/theory/t-2-12/3.jpg';
import t212p4 from '../images/theory/t-2-12/4.jpg';
import t212p5 from '../images/theory/t-2-12/5.jpg';
import t212p6 from '../images/theory/t-2-12/6.jpg';
import t212p7 from '../images/theory/t-2-12/7.jpg';
import t212p8 from '../images/theory/t-2-12/8.jpg';

import t213p1 from '../images/theory/t-2-13/1.jpg';
import t213p2 from '../images/theory/t-2-13/2.jpg';
import t213p3 from '../images/theory/t-2-13/3.jpg';
import t213p4 from '../images/theory/t-2-13/4.jpg';
import t213p5 from '../images/theory/t-2-13/5.jpg';
import t213p6 from '../images/theory/t-2-13/6.jpg';
import t213p7 from '../images/theory/t-2-13/7.jpg';
import t213p8 from '../images/theory/t-2-13/8.jpg';
import t213p9 from '../images/theory/t-2-13/9.jpg';
import t213p10 from '../images/theory/t-2-13/10.jpg';

import t31p1 from '../images/theory/t-3-1/1.jpg';
import t31p2 from '../images/theory/t-3-1/2.jpg';
import t31p3 from '../images/theory/t-3-1/3.jpg';
import t31p4 from '../images/theory/t-3-1/4.jpg';
import t31p5 from '../images/theory/t-3-1/5.jpg';

import t32p1 from '../images/theory/t-3-2/1.jpg';
import t32p2 from '../images/theory/t-3-2/2.jpg';
import t32p3 from '../images/theory/t-3-2/3.jpg';
import t32p4 from '../images/theory/t-3-2/4.jpg';
import t32p5 from '../images/theory/t-3-2/5.jpg';
import t32p6 from '../images/theory/t-3-2/6.jpg';
import t32p7 from '../images/theory/t-3-2/7.jpg';



const Theory = () => {
  return (
    <div className='page-content'>
      <div className='nav-column'>
        <h5>Основные принципы алгоритмизации и программирования</h5>
        <nav className='them-list'>
          <a href="#1"><li>Введение</li></a>
          <a href="#2"><li>Алгоритм и его свойства</li></a>
          <a href="#3"><li>Основные структуры алгоритмов</li></a>
          <a href="#4"><li>Логические основы алгоритмизации</li></a>
          <a href="#5"><li>Языки и системы программирования</li></a>
          <a href="#6"><li>Методы и принципы программирования</li></a>
        </nav>
        <h5>Основы Python</h5>
        <nav className='them-list'>
          <a href="#7"><li>Язык программирования python</li></a>
          <a href="#8"><li>Основные элементы языка python</li></a>
          <a href="#9"><li>Основные алгоритмические инструкции языка python</li></a>
          <a href="#10"><li>Коллекции в python</li></a>
          <a href="#11"><li>Строки</li></a>
          <a href="#12"><li>Множества</li></a>
          <a href="#13"><li>Списки</li></a>
          <a href="#14"><li>Кортежи</li></a>
          <a href="#15"><li>Словари</li></a>
          <a href="#16"><li>Функции в python</li></a>
          <a href="#17"><li>Файлы python</li></a>
          <a href="#18"><li>Библиотеки в python. Модули. Создание и подключение модулей</li></a>
          <a href="#19"><li>Библиотеки python. Работа с изображениями</li></a>
        </nav>
        <h5>Объектно-ориентированное программирование</h5>
        <nav className='them-list'>
          <a href="#20"><li>Основы объектно-ориентированного программирования (ООП)</li></a>
          <a href="#21"><li>Интегрированная среда разработки PyCharm</li></a>
        </nav>
      </div>
      <div className='content-column'>
        <DropDown id={'1'} title={'Введение'}>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'center' }}><strong><span style={{ fontFamily: '"TimesNewRoman\,Bold"' }}>ВВЕДЕНИЕ</span></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '27.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>В настоящее время на ЭВМ решают самые разнообразные задачи. В каждом случае ЭВМ выполняет какую-то программу. Некоторые из программ требуют от пользователя специальных знаний и высокой квалификации. Несмотря на бесконечное разнообразие программ, в самом процессе их изготовления можно выделить несколько этапов решения задачи на ЭВМ:</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '27.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>1 &nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Постановка задачи</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Под <em>постановкой задачи</em> понимают математическую или иную строгую формулировку решаемой задачи. Этот этап включает определение целей создаваемой программы и определение ограничений, налагаемых на программу. При постановке задачи должны быть определены требования:</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'SymbolMT' }}>•&nbsp;</span><span style={{ fontFamily: 'TimesNewRoman' }}>ко времени решения поставленной задачи;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'SymbolMT' }}>•&nbsp;</span><span style={{ fontFamily: 'TimesNewRoman' }}>объему необходимых ресурсов, например, оперативной памяти;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'SymbolMT' }}>•&nbsp;</span><span style={{ fontFamily: 'TimesNewRoman' }}>точности достигаемого результата.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>2 &nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Проектирование программы (формализация задачи)</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Если задача вычислительная, то на этом этапе следует выбрать метод расчета, если разрабатывается компьютерная игра, должен быть определен ее сценарий. В любом случае следует выбрать или создать некую формальную модель, которая, в конечном счете, реализуется в будущей программе. На этапе проектирования определяют вид данных, с которыми будет работать программа, основные части, из которых программа будет состоять и характер связей между этими частями.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>3 &nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Разработка алгоритма</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>На этом этапе следует разработать детали проекта программы. Детализацию необходимо довести до той степени, когда кодирование деталей программы (перевод их на алгоритмический язык) станет тривиальным. Возможно, детализация потребует нескольких стадий, от крупных блоков к все более мелким, и в результате должно получиться то, что называется алгоритмом решения задачи.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>4 &nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Написание программы на языке программирования&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>(</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>кодирование</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>)</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>После того как алгоритм разработан, его записывают на алгоритмическом языке, и этот процесс называют <em>кодированием</em> алгоритма. Для выполнения данного этапа необходимо знать хотя бы один из многих существующих языков программирования, а лучше знать несколько, чтобы выбрать наиболее подходящий для решаемой задачи.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>5 &nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Отладка и тестирование программы</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Целью данного этапа является поиск и устранение ошибок в программе. Ошибки бывают синтаксические (нарушение грамматики алгоритмического языка) и смысловые (искажение самого алгоритма решения задачи).&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>6 &nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Получение решения и анализ результатов</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>После проверки программы и устранении всех ошибок получают решение поставленной задачи, которое необходимо проанализировать. Если речь идет о моделировании какого-то природного процесса, то следует сравнить полученные с помощью компьютера результаты и результаты наблюдений. Они могут отличаться. В этом случае может потребоваться возврат на один из предыдущих этапов для устранения причин несоответствия результатов.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Если же удалось разработать полезную программу, то работа над ней не заканчивается этапом тестирования, а переходит в фазу сопровождения. Программа живет, приобретает новые функции, совершенствует старые, избавляется от последних ошибок и, наконец, умирает, уступив натиску более новых и совершенных программ.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Таким образом, специалист должен обладать следующими знаниями и навыками:</span></p>
          <ol style={{ listStyleType: 'undefined', marginLeft: '2cmundefined' }}>
            <li><span style={{ fontFamily: 'TimesNewRoman' }}>уметь строить алгоритм;</span></li>
            <li><span style={{ fontFamily: 'TimesNewRoman' }}>знать языки программирования;</span></li>
            <li><span style={{ fontFamily: 'TimesNewRoman' }}>уметь работать в соответствующей системе программирования.</span></li>
          </ol>
        </DropDown>
        <DropDown id={'2'} title={'Алгоритм и его свойства'}>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'center' }}><em><span style={{ fontSize: '19px', fontFamily: 'TimesNewRoman' }}>Тема 1.1&nbsp;</span></em><strong><span style={{ fontSize: '19px', fontFamily: 'TimesNewRoman' }}>&nbsp;Алгоритм и его свойства</span></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'center' }}><strong><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><strong><em><span style={{ fontFamily: 'TimesNewRoman' }}>1. Понятие алгоритма и его свойства</span></em></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Само слово "алгоритм" происходит от имени персидского математика Аль Хорезми, который в IX веке разработал правила четырех арифметических действий (сегодня мы бы сказали алгоритмы арифметических действий).</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>В начале ХХ века алгоритмы стали объектом изучения математиков, появились различные математические уточнения понятия "алгоритм" и возникла целая отрасль математики – теория алгоритмов. Результаты, полученные теорией алгоритмов, служат теоретическим фундаментом всей компьютерной технологии, но в повседневной программистской практике не используются.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><strong><em><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритм</span></em></strong><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– это описание некоторой последовательности действий, приводящее к решению поставленной задачи.&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><strong><em><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритм</span></em></strong><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– система четких однозначных указаний, которая определяет последовательность действий над некоторыми объектами и после конечного числа шагов приводит к получению требуемого результата.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритмы бывают численными и логическими.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритмы, в соответствии с которыми решение поставленных задач сводится к арифметическим действиям, называются <em>численными алгоритмами</em>.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритмы, в соответствии с которыми решение поставленных задач сводится к логическим действиям, называются <em>логическими алгоритмами</em> (алгоритмы поиска минимального числа, поиска пути в лабиринте).</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '36.0pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Основными свойствами алгоритма</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;являются:</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>1)&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Дискретность&nbsp;</span></em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>– разделение выполнения решения задачи на отдельные операции.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Под <em>дискретностью</em> понимается то, что алгоритм состоит из описания последовательности шагов обработки, организованных таким образом, что в начальный момент задаётся исходная ситуация, а после каждого следующего шага ситуация преобразуется на основе данных, полученные в предшествующие шаги обработки. Дискретность алгоритма означает, что он исполняется по шагам: каждое действие, предусмотренное алгоритмом, исполняется только после того, как закончилось исполнение предыдущего, то есть преобразование исходных данных в результат происходит во времени дискретно.&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>2)&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Детерминированность&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>(</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>определенность</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>) – каждая команда алгоритма должна однозначно определять действия исполнителя.&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Это свойство означает, что на каждом шаге алгоритма однозначно определяется преобразование данных, полученных на предшествующих шагах алгоритма, то есть на одинаковых исходных данных алгоритм должен всегда давать одинаковые результаты.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>3)&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Результативность&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>(</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>конечность</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>) - завершение работы алгоритма за конечное число шагов (при этом количество шагов может быть заранее не известным и различным для разных исходных данных).</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>4)&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Массовость&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>(</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>универсальность</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>) - алгоритм решения задачи разрабатывается в общем виде, то есть возможность решения класса задач, различающихся лишь исходными данными. При этом исходные данные выбираются из некоторой области, называемой областью применимости алгоритма.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>5)&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>Понятность –&nbsp;</span></em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>содержание допустимого набора команд, понятного конкретному исполнителю.<em>&nbsp;</em></span><span style={{ fontFamily: 'TimesNewRoman' }}>Каждый шаг алгоритма должен обязательно представлять собой какое-либо допустимое действие, т.е. алгоритм строится для конкретного исполнителя автором и должен быть им обоим понятен. Это облегчает проверку и модификацию алгоритма при необходимости.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><strong><em><span style={{ fontFamily: 'TimesNewRoman' }}>2. Формы записи алгоритмов</span></em></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Процесс составления алгоритмов называют <em>алгоритмизацией</em>.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритм, реализующий решение задачи, можно представить различными способами – с помощью графического или текстового описания.&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Графический способ</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;представления алгоритмов имеет ряд преимуществ благодаря визуальности и явному отображению процесса решения задачи. Алгоритмы, представленные графическими средствами, получили название&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>блок-схем.</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Текстовое описание</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;алгоритма является достаточно компактным и может быть реализовано на&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>естественном языке&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>или&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>специальном&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>(</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>алгоритмическом</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>)&nbsp;</span><em><span style={{ fontFamily: '"TimesNewRoman\,Italic"' }}>языке&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>в виде программы.&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Все три способа представления алгоритмов можно считать взаимодополняющими друг друга. На этапе проектирования алгоритмов наилучшим способом является графическое представление, а на этапах проверки и применения алгоритма – текстовая запись в виде программы.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'center' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Правила выполнения блок-схем:</span></em></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Блок-схемой</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;называется наглядное изображение алгоритма, когда отдельные действия (этапы алгоритма) изображаются при помощи различных геометрических фигур (блоков), а связи между этапами (последовательность выполнения этапов) указываются при помощи стрелок, соединяющие эти фигуры.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Выполнение блок-схем осуществляется по ГОСТ 19.701–90.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>При выполнении блок-схем внутри каждого блока указывается поясняющая информация, которая характеризует действия, выполняемые этим блоком. Потоки данных в схемах показываются линиями. Направление потока слева направо и сверху вниз считается стандартным. В случаях, когда необходимо внести большую ясность в схему или поток имеет направление отличное от стандартного, на линиях используются стрелки, указывающие это направление.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>В схемах следует избегать пересечения линий. Пересекающиеся линии не имеют логической связи между собой, поэтому изменения направления в точках пересечения не допускаются. Если две или более входящих линии объединяются в одну исходящую линию, то место объединения линий смещается.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Количество входящих линий не ограничено, выходящая линия из блока должна быть одна, за исключением логического блока.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Основными элементами блок-схем</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;являются:</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><br /></p>
          <table style={{ float: 'left' }}>
            <tbody>
              <tr>
                <td><br /></td>
              </tr>
              <tr>
                <td><br /></td>
                <td><br /></td>
              </tr>
            </tbody>
          </table>
          <p><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <img src={t111} alt="" style={{ display: 'block', margin: '0 auto' }} />
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><strong><em><span style={{ fontFamily: 'TimesNewRoman' }}>3. Данные и их типы</span></em></strong></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Алгоритм, реализующий решение задачи, всегда работает с данными.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><strong><em><span style={{ fontFamily: 'TimesNewRoman' }}>Данные</span></em></strong><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– это любая информация, представленная в формализованном виде и пригодная для обработки алгоритмом.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>По отношению к программе данные делятся на исходные, промежуточные и выходные.</span></p>
          <img src={t112} alt="" />
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textIndent: '35.4pt' }}><br /></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp; Данные, известные перед выполнением алгоритма, являются начальными, <em>исходными данными</em>. Данные, используемые в процессе выполнения программы, являются <em>промежуточными данными</em>. Результат решения задачи – это конечные, <em>выходные данные</em>.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Данные делятся на переменные и константы.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Переменные</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– это такие данные, значения которых могут изменяться в процессе выполнения алгоритма.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Константы</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– это данные, значения которых не меняются в процессе выполнения алгоритма.</span></p>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>Любая величина имеет <em>3 основные свойства</em>:</span></p>
          <ul style={{ listStyleType: 'square', marginLeft: '53px' }}>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>имя</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>, которое задается идентификатором, представляющим собой последовательность букв и цифр, начинающихся с буквы;</span></li>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>значение</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>;</span></li>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>тип данных</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– это такая характеристика данных, которая задает множество допустимых значений и определяет множество операций, которые можно к этим данным применить.</span></li>
          </ul>
          <p style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif', textAlign: 'justify', textIndent: '35.4pt' }}><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp; &nbsp;Типы данных делят на 2 группы:</span></p>
          <div style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif' }}>
            <ol style={{ marginBottom: '0cm', listStyleType: 'undefined' }}>
              <li style={{ margin: '0cm', marginBottom: '.0001pt', fontSize: '16px', fontFamily: '"Times New Roman",serif' }}><em><span style={{ fontFamily: 'TimesNewRoman' }}>Простые</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;<em>(скалярные) типы</em> – содержат одно единственное значение. К ним относятся:</span></li>
            </ol>
          </div>
          <ul style={{ listStyleType: 'square', marginLeft: '91.7px' }}>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>целый тип</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;– определяет подмножество допустимых значений из множества целых чисел (например: 23, -12);</span></li>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>вещественный тип</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp;- определяет подмножество допустимых значений из множества целых и дробных чисел в некотором диапазоне &nbsp; &nbsp; &nbsp; &nbsp; (например: 2,5; -0,01; 3,6</span><span style={{ fontFamily: 'Symbol' }}><span style={{ fontFamily: 'Symbol' }}>×</span></span><span style={{ fontFamily: 'TimesNewRoman' }}>10<sup>9</sup>);</span></li>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>логический тип&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>– переменная принимает только два значения: истина (</span><span style={{ fontFamily: 'TimesNewRoman' }}>true</span><span style={{ fontFamily: 'TimesNewRoman' }}>) и ложь (</span><span style={{ fontFamily: 'TimesNewRoman' }}>false</span><span style={{ fontFamily: 'TimesNewRoman' }}>);</span></li>
            <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>символьный тип&nbsp;</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>– любые символы компьютерного алфавита (например: ‘а’, ‘5’, ‘+’).</span>
              <ol style={{ listStyleType: 'undefined' }}>
                <li><em><span style={{ fontFamily: 'TimesNewRoman' }}>Структурированные</span></em><span style={{ fontFamily: 'TimesNewRoman' }}>&nbsp; <em>типы</em> - описывают наборы однотипных или разнотипных данных (т.е. содержат несколько значений), с которыми алгоритм должен работать как с одной именованной переменной. К ним относятся: массивы, строки, множества и т.д.</span></li>
              </ol>
            </li>
          </ul>
        </DropDown>
        <DropDown id={'3'} title={'Основные структуры алгоритмов'}>
          <img src={t12p1} alt="" />
          <img src={t12p2} alt="" />
          <img src={t12p3} alt="" />
          <img src={t12p4} alt="" />
        </DropDown>
        <DropDown id={'4'} title={'Логические основы алгоритмизации'}>
          <img src={t13p1} alt="" />
          <img src={t13p2} alt="" />
        </DropDown>
        <DropDown id={'5'} title={'Языки и системы программирования'}>
          <img src={t14p1} alt="" />
          <img src={t14p2} alt="" />
          <img src={t14p3} alt="" />

        </DropDown>
        <DropDown id={'6'} title={'Методы и принципы программирования'}>
          <img src={t15p1} alt="" />
          <img src={t15p2} alt="" />
        </DropDown>
        <br />
        <DropDown id={'7'} title={'Язык программирования python'}>
          <img src={t21p1} alt="" />
          <img src={t21p2} alt="" />
        </DropDown>
        <DropDown id={'8'} title={'Основные элементы языка python'}>
          <img src={t22p1} alt="" />
          <img src={t22p2} alt="" />
          <img src={t22p3} alt="" />
          <img src={t22p4} alt="" />
          <img src={t22p5} alt="" />
          <img src={t22p6} alt="" />
          <img src={t22p7} alt="" />
          <img src={t22p8} alt="" />
        </DropDown>
        <DropDown id={'9'} title={'Основные алгоритмические инструкции языка python'}>
          <img src={t23p1} alt="" />
          <img src={t23p2} alt="" />
          <img src={t23p3} alt="" />
          <img src={t23p4} alt="" />
          <img src={t23p5} alt="" />
          <img src={t23p6} alt="" />
          <img src={t23p7} alt="" />
        </DropDown>
        <DropDown id={'10'} title={'Коллекции в python'}>
          <img src={t24p1} alt="" />
          <img src={t24p2} alt="" />
        </DropDown>
        <DropDown id={'11'} title={'Строки'}>
          <img src={t25p1} alt="" />
          <img src={t25p2} alt="" />
          <img src={t25p3} alt="" />
          <img src={t25p4} alt="" />
          <img src={t25p5} alt="" />
        </DropDown>
        <DropDown id={'12'} title={'Множества'}>
          <img src={t26p1} alt="" />
          <img src={t26p2} alt="" />
          <img src={t26p3} alt="" />
        </DropDown>
        <DropDown id={'13'} title={'Списки'}>
          <img src={t27p1} alt="" />
          <img src={t27p2} alt="" />
          <img src={t27p3} alt="" />
          <img src={t27p4} alt="" />
          <img src={t27p5} alt="" />
        </DropDown>
        <DropDown id={'14'} title={'Кортежи'}>
          <img src={t28p1} alt="" />
          <img src={t28p2} alt="" />
        </DropDown>
        <DropDown id={'15'} title={'Словари'}>
          <img src={t29p1} alt="" />
          <img src={t29p2} alt="" />
          <img src={t29p3} alt="" />
        </DropDown>
        <DropDown id={'16'} title={'Функции в python'}>
          <img src={t210p1} alt="" />
          <img src={t210p2} alt="" />
          <img src={t210p3} alt="" />
          <img src={t210p4} alt="" />
          <img src={t210p5} alt="" />
        </DropDown>
        <DropDown id={'17'} title={'Файлы python'}>
          <img src={t211p1} alt="" />
          <img src={t211p2} alt="" />
          <img src={t211p3} alt="" />
          <img src={t211p4} alt="" />
        </DropDown>
        <DropDown id={'18'} title={'Библиотеки в python. Модули. Создание и подключение модулей'}>
          <img src={t212p1} alt="" />
          <img src={t212p2} alt="" />
          <img src={t212p3} alt="" />
          <img src={t212p4} alt="" />
          <img src={t212p5} alt="" />
          <img src={t212p6} alt="" />
          <img src={t212p7} alt="" />
          <img src={t212p8} alt="" />
        </DropDown>
        <DropDown id={'19'} title={'Библиотеки python. Работа с изображениями'}>
          <img src={t213p1} alt="" />
          <img src={t213p2} alt="" />
          <img src={t213p3} alt="" />
          <img src={t213p4} alt="" />
          <img src={t213p5} alt="" />
          <img src={t213p6} alt="" />
          <img src={t213p7} alt="" />
          <img src={t213p8} alt="" />
          <img src={t213p9} alt="" />
          <img src={t213p10} alt="" />
        </DropDown>
        <br />
        <DropDown id={'20'} title={'Основы объектно-ориентированного программирования (ООП)'}>
          <img src={t31p1} alt="" />
          <img src={t31p2} alt="" />
          <img src={t31p3} alt="" />
          <img src={t31p4} alt="" />
          <img src={t31p5} alt="" />
        </DropDown>
        <DropDown id={'21'} title={'Интегрированная среда разработки PyCharm'}>
          <img src={t32p1} alt="" />
          <img src={t32p2} alt="" />
          <img src={t32p3} alt="" />
          <img src={t32p4} alt="" />
          <img src={t32p5} alt="" />
          <img src={t32p6} alt="" />
          <img src={t32p7} alt="" />

        </DropDown>

      </div>
    </div>
  )
}

export default Theory