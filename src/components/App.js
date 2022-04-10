import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header, Main, About, Contacts, } from '.';
import { Goods } from '../containers';
import './App.scss';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <main className='main'>
          <Header />
          <div className='body-page'>
            <section className='content'>
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/goods' element={<Goods />} />
              </Routes>
            </section>
          </div>
          <Footer />
        </main>
      </Router>
    </div >
  );
}

export default App;
