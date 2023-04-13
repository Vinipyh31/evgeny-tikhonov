import { BrowserRouter, Link } from 'react-router-dom';
import './components/styles/App.scss';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header>
          <h1>Основы алгоритмизации и программирования</h1>
          <nav className='main-navbar'>
            <Link to='/main'><span>Главная</span></Link>
            <Link to='/theory'><span>Теория</span></Link>
            <Link to='/practice'><span>Практика</span></Link>
            <Link to='/control'><span>Контроль</span></Link>
            <Link to='/gloss'><span>Глоссарий</span></Link>
            <Link to='/literature'><span>Литература</span></Link>
          </nav>
        </header>
        <div className='App__content'>
          <AppRouter/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
