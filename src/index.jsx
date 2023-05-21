import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = (props) => {
  return (
    <a href="#" className="menu-item">
      {props.text}
    </a>
  );
};

const App = () => {
  return (
    <>
      <header>
        <div className="menu">
          <button className="menu__btn"></button>
          <div className="menu__items">
            <MenuItem text="Domů" />
            <MenuItem text="Naše nabídka" />
            <MenuItem text="Náš tým" />
            <MenuItem text="Blog" />
            <MenuItem text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
