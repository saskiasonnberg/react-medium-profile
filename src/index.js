import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class Editor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "",
      }
      this.handleChange = this.handleChange.bind(this)     
    };

      
    modules = {
      toolbar: [
        
        ['bold', 'italic', 'underline','strike',
        {'list': 'ordered'}, {'list': 'bullet'}, 
        'link', 'image', {'indent': '-1'}, {'indent': '+1'},
        'clean',
        { 'color': [] }, { 'script': 'super' }],
      ],
    }
  
    formats = [
      
      'bold', 'italic', 'underline', 'strike', 
      'list', 'bullet', 
      'link', 'image','indent', 'color', 'script'
    ]

    handleChange (value) {
        this.setState({ text: value });
        console.log(this.state.text)
    }
   
    render() {
      return (
          <div>
        <div className="text-editor">
          <ReactQuill theme="snow"
                      modules={this.modules}
                      placeholder={this.props.placeholder}
                      formats={this.formats}
                      onChange={this.handleChange}
                      value={this.state.text}>
          </ReactQuill>
        </div>
        <div dangerouslySetInnerHTML={{__html: this.state.text}} className={'notes form-control'} disabled>
        </div>
       
        </div>
      );
    }
  }
