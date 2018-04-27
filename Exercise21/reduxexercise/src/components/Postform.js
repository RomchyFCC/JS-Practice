import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    }

    this.props.createPost(post);

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.onSubmit} >
          <div>
            <label>Title: </label>
            <br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea type="text" name="body" onChange={this.onChange} value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(Postform);
