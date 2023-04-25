import {useState, useEffect} from "react";
import ReadPosts from "./ReadPosts";

const Home = (props) => {

    //for storing the query
    const [searchInput, setSearchInput] = useState("");
   
    //all posts being sent to this page
    const [posts, setPosts] = useState([]);
    
    //filter posts based on keywords
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);
        console.log("from homepage")
        console.log(props.data)

       console.log(posts)
        console.log("posts above")
    }, [props.data]);

    console.log(posts);

    /**This function handles the input change for the search
     * bar so that the value of search input is updated. It also calls
     * the searchItems function
     */
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
        searchItems(searchInput);
    }

    const searchItems = (searchValue) => {

        console.log("your search value")
        console.log(searchValue);

        if(searchValue!== ""){
            const filteredData = Object.values(posts).filter( post => 
            post.title.toLowerCase().includes(searchValue?.toLowerCase() ?? "")
            );
            setFilteredPosts(filteredData);
        } else {
            setFilteredPosts([]);
        }
    };
    


    return (
        <div className="homepage">
            <h1 className="goal_buddies">Goal Buddies</h1>
            <h3>My goal is: </h3>
            <input type = "text"
            placeholder = "Enter your goal here:"
            onChange={handleInputChange}/>
            {
                searchInput.length > 0 && 
                <ReadPosts data = {filteredPosts} filter = {false}/>
                
            }
        </div>
    );
}

export default Home;