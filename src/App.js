import { BrowserRouter, Route, Switch } from "react-router-dom";

import '../src/styles/App.css';
import './styles/components/nav.css'

import Header from './../src/components/Header';
import NavBar from './../src/components/NavBar';
import Page from './components/Page';


import Informacion from './../src/pages/Informacion'
import Experiencia from './../src/pages/Experiencia'
import Habilidades from './../src/pages/Habilidades'
import Formacion from './../src/pages/Formacion'
import Contacto from './../src/pages/Contacto'

function App() {
  return (
    <div>
      <div className='top'>

        <BrowserRouter>
          <Header />
          <NavBar />
            <Switch>
              <Route path='/' exact component={Page}></Route>
              <Route path="/informacion" exact component={Informacion} />
              <Route path="/experiencia" exact component={Experiencia} />
              <Route path="/habilidades" exact component={Habilidades} />
              <Route path="/formacion" exact component={Formacion} />
              <Route path="/contacto" exact component={Contacto} />
            </Switch>
        </BrowserRouter>

      </div>
    </div>

  );
}

export default App;
