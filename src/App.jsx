import { useState } from "react";
import "./App.css";
import editImage from "./images/edit.png";
import editingImage from "./images/editing.png";

function App() {
  return (
    <Layout>
      <Resume />
    </Layout>
  );
}

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

function Resume() {
  return (
    <div className="resume">
      <Contact />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <Name />
    </div>
  );
}

function Name() {
  const [name, setName] = useState("Your Name");
  const [eidtMode, setEditMode] = useState(false);

  const handleClick = () => {
    setEditMode((prev) => !prev);
  };

  const handleChange = (e) => {
    setName(e.target.value);
    const WIDTHBUFFER = 10;
    e.target.style.width = "180px";
    e.target.style.width = `${e.target.scrollWidth + WIDTHBUFFER}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <div className="name">
      {eidtMode ? (
        <form onSubmit={handleSubmit}>
          <input
            className="name-input"
            onChange={handleChange}
            spellcheck="false"
            autoFocus
          />
        </form>
      ) : (
        <h1>{name}</h1>
      )}
      <button className="eidt-button" onClick={handleClick}>
        <img src={eidtMode ? editingImage : editImage} />
      </button>
    </div>
  );
}
export default App;
