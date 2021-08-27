import React from 'react'
import {BlogContainer,
  BlogRow,
  BlogData,
  BlogDelete,
  BlogCategory,
  BlogContent,
} from './BlogStyles'
import { useState, useEffect } from 'react';

  
const Blog = ({category, title, content, postId}) => {
  const [post, setPost] = useState('')
  
  const deletePost = () => {
    return fetch(`http://localhost:8000/api/${postId}`, {
      method: 'DELETE' 
    }).then(res=>setPost('successfully deleted'))
  }


  return (
    <BlogContainer>
    <BlogRow>
        <BlogCategory>{category}</BlogCategory>
      <BlogData>
        <BlogContent>{title}</BlogContent>
        <BlogContent>{content}</BlogContent>
        <BlogDelete onClick={deletePost}>Delete</BlogDelete>
      </BlogData>
    </BlogRow>
  </BlogContainer>
  )
}

export default Blog
