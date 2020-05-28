import React, { Component } from "react";
import Editor from "react-medium-profile";
import './index.css';
import '../node_modules/react-medium-profile/example/node_modules/react-medium-profile/node_modules/react-quill/dist/quill.snow.css'

export default class App extends Component {  
  render() {
    return (    
      <Editor placeholder={"Kirjutan"} />       
    );
  }
}
