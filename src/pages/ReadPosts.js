import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom'

const ReadPosts = (props) => {
    // console.log('props')
    // console.log(props)

    const [posts, setPosts] = useState([]);
    const [timeFilter, setTimeFilter]  = useState(false);
    const [upvoteFilter, setUpvoteFilter]  = useState(false);
    const [showFilter, setShowFilter] = useState(true);
    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
        setShowFilter(props.filter);
       
    }, [props.data]);
    
    const handleTimeFilter = (event) => {
        setTimeFilter(true);
        const sort = posts.slice().sort((a,b) => (a.time < b.time ? 1:-1))
        setSortedPosts(sort);
    }

    const handleUpvoteFilter = (event) => {
        setUpvoteFilter(true);
    }

    const handleResetFilter = (event) => {
        setTimeFilter(false);
        setUpvoteFilter(false);
    }



    return (
        <div className="ReadPosts">
            {
                showFilter ? (
                <div className='filterDiv'>
                <p>Filter by:</p>
                <button onClick = {handleTimeFilter}>Most Recent</button>
                <button onClick = {handleUpvoteFilter}>Upvotes</button>
                <button onClick = {handleResetFilter}>Reset</button>
                </div>
                ) : (
                    <div> </div>
                )
            }
            {
                posts && posts.length > 0 ? (
                    timeFilter ? (
                        //filter it by time
                        sortedPosts.map((post,index) => 
                        <Card id={post.id} title={post.title} author={post.author} description={post.description} time = {post.time.substring(0,10)} upvote = {post.upvote}/>
                         )   
                    ) : upvoteFilter ? (
                        <div> </div>
                    ) : (
                        posts.map((post,index) => 
                        <Card id={post.id} title={post.title} author={post.author} description={post.description} time = {post.time.substring(0,10)} upvote = {post.upvote}/>
                     ) ) )
                    
                    : <div>
                    <h2>{'No Matches Found Yet 😞'}</h2>
                    <button><Link to = "/new">Post your Goal</Link></button>
                    </div>  
}      
        </div>  
    )
}

export default ReadPosts;