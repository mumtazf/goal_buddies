import React from 'react';
import '../stylesheets/CreatePost.css'
import {supabase} from '../client' 
import {useState, useEffect} from 'react';

const CreatePost = () => {
    const[post,setPost] = useState(null);

    const handleInput = (event) => {
        const {name, value} = event.target;
        setPost(prevPost => ({
            ...prevPost, 
            [name]: value
        }))
        
    }

    const createPost = async(event) => {
        event.preventDefault();
        await supabase
        .from('Posts')
        .insert({ status: post.status, title: post.title, author: post.author, description: post.description,  type: post.type, opt_in:post.opt_in })
        .select();

        window.location = "/";
    }

    return (
        <div>
            <h2>Post to Goal Buddies</h2>
            <form>
                <label for = "status">Status </label>
                <select id = "status" name = "status" onChange={handleInput}>
                    <option>Goal</option>
                    <option>Goal Achieved</option>
                </select>
                <br/>

                <label for="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleInput}/><br />
                <br/>

                <label for="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleInput}/><br />
                <br/>

                <label for="type">Type </label><br />
                <select id = "type" name = "type" onChange={handleInput}>
                    <option>Career</option>
                    <option>School</option>
                    <option>Health</option>
                    <option>Self</option>
                    <option>Relationships</option>
                    <option>Others</option>
                </select>
                <br/>
                <br/>

                <label for="description">Motivation</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleInput}>
                </textarea>
                <br/>

                <label for = "opt_in">Seeking Accountability Buddy?</label>
                <select id = "opt_in" name = "opt_in" onChange={handleInput}>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <br/>


                <input type="submit" value="Submit!" onClick = {createPost} />
            </form>
        </div>
    )
}

export default CreatePost;