import "./App.css";
import { useState } from "react";
import Home from "./Pages/Home";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Search from "./Pages/Search";

function App() {
  //const [students, setStudents] = useState([
    //"aaa",
    //"bbb",
    //{ name: 'Jan Nowak', desc: 'fajny opis', tags: ['frontend', 'backend'], courses: ['so2', 'piw']},
    //{ name: 'Janina Kowalska', desc: 'ciekawy opis', tags: ['reactjs', 'python'], courses: ['piw', 'iob']},
  //]);
  const [names, setNames] = useState([
    "Jan Nowak",
    "Janina Kowalska",
  ]);
  const [desc, setDesc] = useState([
    'fajny opis',
    'ciekawy opis',
  ]);
  const [tags, setTags] = useState([
    ['frontend ', 'backend '],
    ['reactjs ', 'python '],
  ]);
  const [courses, setCourses] = useState([
    ['so2 ', 'piw '],
    ['piw ', 'iob '],
  ]);

  return (
    <div className="App">
      <header>
        <h2>This is the header</h2>
      </header>
      <main>
        <BrowserRouter>
        <nav>
          <NavLink to="/">Home</NavLink>
          
          <NavLink to="/nie_ma">nie klikać</NavLink>
        </nav>

        <Routes>

          <Route path="/" element={<Home names={names} setNames={setNames} desc={desc} setDesc={setDesc} tags={tags} setTags={setTags} courses={courses} setCourses={setCourses} />}/>
          <Route path="/nie_ma" element={<h2>Koniec internetu</h2>} />
        </Routes>
        </BrowserRouter>
      </main>
      <footer>footer</footer>

    </div>
  );
}

export default App;

//<NavLink to="/search">Search</NavLink>
//<Route path="/search" element={<Search students={students}/>} />
