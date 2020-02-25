import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/HTML">HTML</Link>
            </li>
            <li>
              <Link to="/CSS">CSS</Link>
            </li>
            <li>
              <Link to="/JS">JS</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/HTML">
            <HTML />
          </Route>
          <Route path="/CSS">
            <CSS />
          </Route>
          <Route path="/JS">
            <JS />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

function Home() {
  return <h2>Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.

  </h2>;
}

function HTML() {
  return <h2>HTML (abreviação para a expressão inglesa HyperText Markup Language, que significa Linguagem de Marcação de Hipertexto) é uma linguagem de marcação utilizada na construção de páginas na Web.</h2>;
}

function CSS() {
  return <h2>O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style. Também é possível, em vez de colocar a formatação dentro do documento, criar um link para um arquivo CSS que contém os estilos.</h2>;
}

function JS() {
  return <h2>JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma (protótipos, orientado a objeto, imperativo e, funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.</h2>;
}

export default App;
