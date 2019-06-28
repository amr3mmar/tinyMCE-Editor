import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Editor } from "@tinymce/tinymce-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor
          apiKey="3em7nbni490uwn4iapuzgzb87atxll6mk6dddgh0sdurrc5r"
          cloudChannel="dev"
          init={{
            selector: "textarea",
            plugins: "link image code textpattern lists",
            textpattern_patterns: [
              { start: "1. ", cmd: "InsertOrderedList" },
              { start: "* ", cmd: "InsertUnorderedList" },
              { start: "- ", cmd: "InsertUnorderedList" }
            ]
          }}
        />
      </div>
    );
  }
}

export default App;
