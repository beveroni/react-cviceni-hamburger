import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({ onSelect, text }) => {
  return (
    <a
      href="#"
      onClick={() => {
        onSelect(text);
      }}
      className="menu-item"
    >
      {text}
    </a>
  );
};

const App = () => {
  const [pageTitle, setPageTitle] = useState('Domů');
  const handleSelectItem = (page) => {
    setPageTitle(page);
    setMenuOpened(!menuOpened);
  };
  const [menuOpened, setMenuOpened] = useState(true);
  return (
    <>
      <header>
        <div className={menuOpened ? 'menu menu--closed' : 'menu'}>
          <button
            className="menu__btn"
            onClick={() => {
              setMenuOpened(!menuOpened);
            }}
          ></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectItem} text="Domů" />
            <MenuItem onSelect={handleSelectItem} text="Naše nabídka" />
            <MenuItem onSelect={handleSelectItem} text="Náš tým" />
            <MenuItem onSelect={handleSelectItem} text="Blog" />
            <MenuItem onSelect={handleSelectItem} text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
