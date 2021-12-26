import Container from 'react-bootstrap/Container'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './add';
import Education from './add/edu';
import Expe from './add/exp';
import Skill from './add/skill';
import Detail from './detail';
import Home from './Home';

function App() {
  return (
    <div className='bg-light min-vh-100 text-dark'>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:uniqueId' element={<Detail/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/add/edu/:uniqueId' element={<Education/>}/>
            <Route path='/add/exp/:uniqueId' element={<Expe/>}/>
            <Route path='/add/skill/:uniqueId' element={<Skill/>}/>
            <Route path='*' element={
              <main className='py-5 text-center'>
                <p className='fs-3 fw-bold'>There's nothing here!</p>
              </main>
            }/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;