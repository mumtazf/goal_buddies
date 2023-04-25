import React from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/EditPost.css'
import {useState} from 'react';
import {supabase} from '../client';

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    const handleInput = (event) => {
        const {name, value} = event.target;
        
        setPost(prevPost => ({
            ...prevPost, 
            [name]:value
        }))
    }

    const updatePost = async(event) => {
        event.preventDefault();
        await supabase.from('Posts')
        .update({ status: post.status, title: post.title, author: post.author, description: post.description,  type: post.type, opt_in:post.opt_in })
        .eq('id', id);

        window.location = "/explore";
    }

    const deletePost = async(event) => {
        event.preventDefault();

        await supabase.from('Posts').delete().eq('id',id);

        window.location = "/explore";
    }

    return (
        <div>
            <h2>Edit Your Goal Post</h2>
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


                <input type="submit" value="Edit" onClick = {updatePost} />
                <input type="submit" value="Delete" onClick = {deletePost} />

            </form>
        </div>
    )
}

export default EditPost