import React, { Component } from 'react';

class ProjectItem extends Component {
  //forgot to insert the freaking 'id' tag here for reference
  deleteProject(id){
    //console.log('test hehe');
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ProjectItem">
          <strong>{this.props.project.title}</strong> - {this.props.project.category}
          <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;