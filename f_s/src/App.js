import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

//Component imports
import HomeList from "../src/Components/UsuarioExterno/HomeUser";
import HomeP from "./Components/LandingPage/Principal/home";
import Home from "./Components/UsuarioExterno/Home/homeComp";
import AboutUSmain from "./Components/Comun/AboutUs/about_us";
import Registro from "./Components/LandingPage/Registro/registro";
import OrdenDespacho from "../src/Components/UsuarioExterno/OrdenDespacho/ordenDespacho";

// Section admin
import ViewUserAdm from "./Components/Admin/VerUsuarioInterno/js/ViewUserAdm";
import Add_user from "./Components/Admin/AgregarUsuarioInterno/add_user";
import Info_user from "./Components/Admin/VerUsuarioInterno/js/info_user";
import Rutas from "./Components/UsuarioInterno/Rutas/rutas";
import ViewHisUI from "./Components/UsuarioInterno/Historial/js/ViewHisUI";
import Info_orden from "./Components/UsuarioInterno/Historial/js/info_orden";
import Login from "./Components/LandingPage/Login/Login";
import Solicitud from "./Components/UsuarioInterno/Solicitudes/Solicitud";
import { NavBar_Adm } from "./Components/Comun/NavBar/NavBar_Adm";
import Separador from "./Components/Comun/Separador/separador";
import Footer from "./Components/Comun/footer/footer";
import PrivateAmin from "./Components/Admin/Authentication/Auth";
import Edit_user from "./Components/Admin/EditarUsuarioInterno/editUI";
import Section_cards from "./Components/Admin/VerUsuarioInterno/js/cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true,
      username: "",
    };
    this.updateState = this.updateState.bind(this);
  }

  async updateState(logged, username) {
    await this.setState({
      logged: logged,
      username: username,
    });
    console.log(this.state);
  }

  renderLogin() {
    return (
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Login onTryLogin={this.updateState} />} />

            <Route path="/registro" element={<Registro />} />
          </Route>
        </Routes>
      </Router>
    );
  }

  renderApp() {
    return (
      <Router>
        <NavBar_Adm />
        <Separador />
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path={"/inicio"} element={<HomeList />} />
          <Route path="/Login" element={<HomeP />} />

          <Route path="/about" element={<AboutUSmain />} />

          {/* 🔏🔏🔏🔏 */}
          <Route path="/HomeUsExt" element={<PrivateOutletHome />}>
            <Route path="" element={<Home />} />
            <Route path="OrdenarDespacho" element={<OrdenDespacho />} />
          </Route>
          {/* 🔏🔏🔏🔏 */}

          <Route path="rutas" element={<Rutas />} />
          <Route path="historialui" element={<ViewHisUI />}>
            <Route index element={<main style={{ padding: "1rem" }}></main>} />
            <Route path=":userID" element={<Info_orden />} />
          </Route>
          <Route path="/Solicitud" element={<Solicitud />} />

          {/* 🔏🔏🔏🔏 */}
          <Route path="card/" element={<Section_cards />}>
            <Route path=":paramsID" element={<Info_user />} />
            <Route path="Add_User" element={<Add_user />} />
            <Route path="Edit_User" element={<Edit_user />} />
          </Route>
          {/* 🔏🔏🔏🔏 */}
        </Routes>
        <Footer />
      </Router>
    );
  }

  render() {
    if (this.state.logged) {
      return this.renderApp();
    } else {
      return this.renderLogin();
    }
  }
}

export default App;

// const Private = () => <div>private</div>;  No se está usando, es un div de prueba solamente.

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}

//🏠
const PrivateHome = () => <div>private HOME el auth es true</div>;

function PrivateOutletHome() {
  const auth = useAuthHome();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function useAuthHome() {
  return true;
}
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
