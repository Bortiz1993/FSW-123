import {useParams} from "react-router-dom";
import postData from  '../data/posts.json'


function Post(){
    const {slug} = useParams();
    const post = postData.find(post => post.slug === slug)
    console.log(post)


    return <div><h1>{post.title}</h1> {post.content}
    </div>

}


export default Post;