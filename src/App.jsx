import { useState } from "react";
import editImage from "./images/edit.png";
import editingImage from "./images/editing.png";
import githubImage from "./images/github.png";
import linkedinImage from "./images/linkedin.png";

function App() {
  return (
    <Layout>
      <Resume />
    </Layout>
  );
}

function Layout({ children }) {
  return <div className="flex justify-center mt-2">{children}</div>;
}

function Resume() {
  return (
    <div className="border-4 border-solid w-[816px] h-[1054px]">
      <Contact />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <TextInput
        placeHolder={"Pak Wan"}
        styles={"text-3xl font-bold ml-1 w-40"}
      />

      <TextInput
        placeHolder={"Software Engineer"}
        styles={"text-lg font-normal ml-1 w-40"}
      />
      <div className="flex gap-5 ml-1 mr-1 justify-start">
        <div className="flex-none">
          <TextInput
            placeHolder={"510-xxx-xxxx"}
            styles={"text-lg font-normal w-28"}
          />
        </div>
        <span className="flex-none">|</span>
        <div className="flex-none">
          <TextInput
            placeHolder={"paklong2556@gmail.com"}
            styles={"text-lg font-normal w-55"}
          />
        </div>
        <span className="flex-none">|</span>
        <div className="flex-none">
          <TextInput
            placeHolder={"Newark, CA"}
            styles={"text-lg font-normal w-25"}
          />
        </div>
      </div>
    </div>
  );
}

function TextInput({ placeHolder, styles }) {
  const [text, setText] = useState(placeHolder);
  const [eidtMode, setEditMode] = useState(false);

  const handleClick = () => {
    setEditMode((prev) => !prev);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  return (
    <div className="flex gap-1 flex-auto">
      {eidtMode ? (
        <form onSubmit={handleSubmit}>
          <input
            className={styles}
            onChange={handleChange}
            spellcheck="false"
            autoFocus
          />
        </form>
      ) : (
        <p className={styles}>{text}</p>
      )}
      <button className="w-4 h-4" onClick={handleClick}>
        <img src={eidtMode ? editingImage : editImage} />
      </button>
    </div>
  );
}
export default App;
