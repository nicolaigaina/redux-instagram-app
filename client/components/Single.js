import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render(){
        const { postId } = this.props.params;
        //index of the post
        const postIndex = this.props.posts.findIndex((post) => post.code === postId);
        //actual post
        const post = this.props.posts[postIndex];

        //get all comments for a specific post
        const postComments = this.props.comments[postId] || [];

        return(
            <div className="single-photo">
              <Photo i={postIndex} post={post} {...this.props}/>
              <Comments postComments={postComments} {...this.props}/>
            </div>
            
        )
    }
})

export default Single;