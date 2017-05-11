import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {

  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  // 'e' is an event is JS
  handleSubmit(e){
    // a simple log for human beings
    // add eval to the submission
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Title</label>
              <input type="text" ref="title" />
            </div>
            <div>
              <label>Category</label><br />
              <select ref="category">
                {categoryOptions}
              </select>
            </div>
            <br />
            <input type="submit" value="Submit" />
            <br />
        </form>
      </div>
    );
  }
}

AddProjects.propTypes = {
  category: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProjects;
