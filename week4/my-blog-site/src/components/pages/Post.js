import {useParams} from "react-router-dom";
import postData from  '../data/posts.json'


function Post(){
    const {slug} = useParams();
    const post = postData.find(post => post.slug === slug)



    return (
        <div>
    <h1>{post.title}</h1> 
    
    
    
    <div>{post.content}</div>
    </div>
    
    )
}


export default Post;