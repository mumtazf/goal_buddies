import {React} from 'react'
import '../stylesheets/Comment.css' 

const Comment = (props) => {

    return(
        <div className='comment_card'>

            <div className='user_card'>
                <p className = "comment_author" >
                    {'Posted by: ' + props.author}
                </p>
                <p className = "comment_time">
                    {'Posted at: ' + props.time}
                </p>
            </div>
            <p className = "comment_comment">
                {props.comment}
            </p>
            <br/>
        </div>
    )

}

export default Comment;