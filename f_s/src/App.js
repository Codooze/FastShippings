import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
  Navigate, Link, NavLink, useNavigate, useLocation,
  Outlet,
  useParams
} from "react-router-dom";

//Component imports
import Home from "./Components/homeComp";
import learn from "./Components/learnComp";
import Courses from "./Components/learnComp";
import Bundles from "./Components/learnComp";
import CourseId from "./Components/learnComp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseId" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        {/* <Route path='/welcome' element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

//Navigate replace redirecciona
// no usamos <a> tags porque recarga toda la pagina en su lugar usamos Link
//outlet indica en qué parte de la pagina cargar algún componente
//useParams para hacer uso de :id parametros que se pasen en la url
//element={<>} lo que va aquí son los componentes que injectamos
//TEST ve al link courses/TuNombre   pon tu nombre allí, observa Courses() y CourseId()
//NavLink similar a useParams también te redirecciona
//useNavigate te puedes traer información de alguna pagina pasando el valor en el 2do argumento {state:"value"}, ver CourseId(), Dashboard()
    //no tiene que ser un string {state: value} siempre
    //Podemos usar Link en lugar de useNavigate, aqui el state siempre sera un string