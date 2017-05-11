import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  // json placeholders via http
  // using jquery
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(error, status, err){
        console.log(error);
      }
    });
  }

  //lifecycle method or use 'componentDidMount'
  getProjects(){
    this.setState({projects: [
      {
        // it will autogenerate a new id
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'A wonderful title',
        category: 'Web Development'
      },
      {
        id: uuid.v4(),
        title: 'Otherworldly Database',
        category: 'Backend Infrastructure'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    //console.log(project);
    // grabbing what's already there
    let projects = this.state.projects;
    // update the state
    projects.push(project);
    // reset the state
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    // get what already is existing
    let projects = this.state.projects;
    // simply searches for the item on the list if it matches then removes the matching
    // we could also use a control statement here such as a for loop
    let index = projects.findIndex(x => x.id === id);
    // simply removes 1 element from the list
    projects.splice(index, 1);
    // reset the state
    this.setState({projects:projects});
  }
  
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
