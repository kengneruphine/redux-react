import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {  //adding the newly created post to the list of post
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
      ))
    return (
     <div>
            <h1>Posts</h1>
            {postItems}
     </div>
    );
  }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost :PropTypes.object  //adding the newly created post to the list of post
}

const mapStateToProps = state => ({
    posts: state.posts.items, //posts from postReducers
    newPost :state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })( Posts);