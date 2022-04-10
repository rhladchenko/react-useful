import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header, Main, About, Contacts } from '.';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <div className='content'>
        <Router>
          <Header />
          <div className='body-page'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div >
  );
}

export default App;
