import { BrowserRouter, Link } from 'react-router-dom';
import './components/styles/App.scss';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          {/* <h1>ЭУП по дисциплине «Основы алгоритмизации и программирования»</h1> */}
          <nav className='main-navbar'>
            {/* <Link to='/main'><span>Главная</span></Link> */}
            <Link to='/theory'><span>ТЕОРИЯ</span></Link>
            <Link to='/control'><span>ТЕСТИРОВАНИЕ</span></Link>
            <Link to='/practice'><span>ЛАБОРАТОРНЫЕ РАБОТЫ</span></Link>
            {/* <Link to='/gloss'><span>Глоссарий</span></Link> */}
            {/* <Link to='/literature'><span>Литература</span></Link> */}
          </nav>
        </header>
        <div className='App__content'>
          <AppRouter />
        </div>
        <footer className='footer'>
          <div className='footer__content'>
            <span className='white-text'>Уральский технологический колледж - филиал НИЯУ МИФИ</span>
            <address>624250, Свердловская обл., г. Заречный, ул. Ленина, 27</address>
            <span>
              <span className='white-text'>Телефон: </span>
              <a href="tel:+73437732409">(343 77) 3-24-09</a>
              <span className='white-text'> Факс: </span>
              <a href="tel:+73437732409">(343 77) 3-24-09</a>
            </span><br />
            <span>Эл. почта: <a href="mailto:urtk@mephi.ru">urtk@mephi.ru</a></span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
