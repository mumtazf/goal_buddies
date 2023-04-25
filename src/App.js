import './stylesheets/App.css'
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import FullPost from './components/FullPost';

import {useState, useEffect} from 'react';

import {supabase} from './client'

const App = () => {
  const[posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      const {data} = await supabase
      .from('Posts')
      .select('*')
      .order('time', {ascending:true})
      setPosts(data)
    }
    fetchData()
    console.log("in apps: the post is: ")
    console.log(posts)
  },[])
  
  // Sets up routes
  let element = useRoutes([
    {
      path: "/", 
      element: <Home data = {posts} />
    },
    {
      path: "/explore",
      element:<ReadPosts data={posts} filter = {true}/>
    },
    {
      path:"/explore/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path: "/FullPost/:id",
      element: <FullPost />
    }
  ]);

  return ( 

    <div className="App">
        <div className = "App">
          <Nav />
        </div>

      <div className='displayElementApp'>
        {element}
      </div>
    </div>


  );
}

export default App;
