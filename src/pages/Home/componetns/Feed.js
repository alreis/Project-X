import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const posts = [
  {id: 1, description: 'test 1'},
  {id: 2, description: 'test 2'},
  {id: 3, description: 'test 3'},
  {id: 4, description: 'test 4'}
];

function Feed() {
  const classes =useStyles();

  return (
    <div className={classes.root}>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post}/>
        ))
      }
    </div>
  )
}

export default Feed;
