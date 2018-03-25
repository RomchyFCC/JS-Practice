import React from 'react';

class AddComment extends React.Component {
  handleSubmit(e) {
    
    const r = this.refs;
    console.log(r)
    e.preventDefault();
    const newComment = {
      commenterName: r.newCName.value,
      commentt: r.newCText.value,
    }
    // here we would trigger a function that was passed down from parent
    // and we would send data to the sibling and update the current comments
    // need something like flux or redux or backend to be efficient with this one
    // I will come back to this app when i learn flux/redux/nodeJS
    // this.props.onAdd(newComment);
  }
  render() {
    return(
    <form id="add-comment" onSubmit={this.handleSubmit.bind(this)}>
      <p>Name: </p>
      <input required ref="newCName" type="text" />
      <p>Comment: </p>
      <input required ref="newCText" type="text" placeholder="this would have been an awesome app with backend" />
      <input type="submit" value="Submit" hidden />
    </form>
    )
  }
}

export default AddComment;
