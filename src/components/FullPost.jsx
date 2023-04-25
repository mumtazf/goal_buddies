import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import {supabase} from '../client'
import '../stylesheets/FullPost.css'
import Comment from '../components/Comment'

const FullPost = () => {
    const[fullPost, setFullPost] = useState(null);
    const [postComment, setPostComment] = useState({author: '', comment: ''});
    const { id } = useParams();
    const [fetchedComments, setFetchedComments] = useState([]);

    console.log("start fullpost", id);

    const handleInput = (event) => {
        const {name, value} = event.target;
        setPostComment(prevComment => ({
            ...prevComment, 
            [name]: value
        }))
    }

    const submitComment = async(event) => {
        event.preventDefault();
        await supabase
        .from('Comments')
        .insert({ original_id: fullPost.id, author: postComment.author, comment: postComment.comment })
        .select();

        window.location = `/FullPost/${id}`;
    }

    //when the page refreshes
    useEffect(()=> {

        const fetchData = async() => {
            //for fetching the posts
            const {data} = await supabase
            .from('Posts')
            .select('*')
            .eq('id', Number(id))

            //for fetching the comments
            const comments = await supabase
            .from('Comments')
            .select('*')
            .eq('original_id', Number(id))

            console.log("comments are")
            console.log(comments)
      
            setFullPost(data[0])

            if(comments.data && comments.data.length > 0)
                setFetchedComments(comments.data)

            console.log(`fetched post with id ${id}`)
            console.log(data[0])
        }
          fetchData()
          console.log("completed the fetch instruction.")
    },[fetchedComments])
    console.log("my" , fullPost)

    return(
        <div className='fullpost'>

           {fullPost ? (
            <div>
                <p>Author: {fullPost.author}</p>
                <h1 className = "title">{fullPost.status + ": " + fullPost.title}</h1>
                <br/>

                <div className = "info">
                    <p className='date'>Created at: {fullPost.time.substring(0,10)}</p>
                    <p>{"type: "+ fullPost.type }</p>
                </div>
                    <p className='point'>{"Are you looking for an accountability buddy?  " + fullPost.opt_in}</p>


                <br/>
                <p>{fullPost.description}</p>
                <br/>
            </div>
           )
           :
           <p>Loading....</p>
        }
        
            <h3>Post Your Comments</h3>

            <form>

            <label for="author">Author</label><br />
            <input type="text" id="author" name="author" onChange={handleInput}/><br />
            <br/>

            <label for = "comment">Comment</label> <br/>
            <input type = "text" id = "comment" name = "comment" onChange = {handleInput}/> <br/>
            
            <input type = "submit" value = "Submit" onClick = {submitComment}/>
            </form>

            <h3>Comments</h3>

            {
                fetchedComments.length > 0 ? (
                        fetchedComments.map((comment) =>
                            <Comment author = {comment.author} comment = {comment.comment} time = {comment.created_at.substring(0,10)} />
                        )
                ) : (
                    <p>
                        No comments found
                    </p>
                )
            }
        </div>

    )



}

export default FullPost;