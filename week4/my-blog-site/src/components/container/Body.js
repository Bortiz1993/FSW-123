import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NoMatch from '../pages/NoMatch';
import Post from '../pages/Post';


function Body () {
    return (
        <main className="container">

        <Switch>
        
          <Route exact ={true} path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
          <Route path="/post/:slug" children={<Post/>}>
          <Post/>

          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
          
        </Switch>
  
        </main>
        
    )
}

export default Body;

