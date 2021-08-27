import React from 'react'
import Blog from '../../components/Blog/Blog'
import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [refresh, setrefresh] = useState('')
  

  useEffect(() => {
    let token = localStorage.getItem('access_token')
    return fetch('http://localhost:8000/api/',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res=>res.json())
    .then(data=>setPosts(data))
    .catch(error => alert("Must Log In to View Posts!"))
  })

  const renderPosts = posts.map(post=>{
    return (
        <Blog
        postId={post.id}
        title={post.title}
        content={post.content}
        category={post.category}
        />
      )
    })

    const createPost = (evt) => {
      evt.preventDefault()
      let token = localStorage.getItem('access_token')
      return fetch('http://localhost:8000/api/',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `JWT ${token}`
        },
        body: JSON.stringify({
          "title": 'something',
          "content": evt.target[0].value
        })
      }).then(res=>setrefresh('refresh posts'))
    }

  return (
    <>
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Welcome to THE Blog</h1>
          <form onSubmit={createPost}>
              <input
              type='text'
              placeholder='Create Post!'
              className='coin-input'
              ></input>
              <button type='submit' className="hidden"></button>
            </form>
        </div>
        {renderPosts}
      </div>
    </>
  )
}


export default BlogPage
