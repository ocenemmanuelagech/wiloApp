import React, { Component } from 'react';
import ActivityNotes from './ActivityNotes';

export default class Activity extends Component {
    constructor(props){
        super(props);
        this.state={
            noteText: "",
            notes: [],
        }
    }
    updateNoteText(noteText){
        this.state({noteText : noteText.target.value})
        console.log(this.notes.noteText)
    }
    addNote(){
        if (this.state.noteText === "") {return}

        let noteArr=this.state.notes;
        noteArr.push(this.state.noteText);
        this.setState({ noteText: ""});
        this.textInput.focus() ;
    }
    handleKeyPress = (event) =>{
        if(event.key === 'Enter'){
//this is the logic to submit 

        }
    }
    deleteNote(index){
        let noteArr=this.state.notes;
        noteArr.splice(index, 1);
        this.setState({notes: noteArr})
    }
  render() {
      let notes=this.state.notes.map((val,key) =>{
          return <notes key={key} text={val}
          deleteMethod={ ()=> this.deleteNote(key)}/>
      })
    return (
        <div className="container">
            <div className="header">
                <h1>To Do Page</h1>
                {notes}
            </div>
            <div className="mainBody">
                <button className="btn-primary" onClick={this.addNote.bind(this)}>+</button><br /> <br />
                <input type="text"
                    ref={((input)=>{this.textInput=input})}
                    className="textInput"
                    value={this.state.noteText}
                    onChange={noteText=>this.updateNoteText(noteText)}
                    onkeyPress={this.handleKeyPress.bind(this)}
                />
            </div>
       
        </div>
    )
  }
}
