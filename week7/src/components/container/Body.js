import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Content from '../pages/Content';
import NoMatch from '../pages/NoMatch';

function Body () {
    return (
        <main>
            <Switch>
        <Route exact = {true} path="/">
            <Home />
        </Route>
        <Route path="/content">
            <Content/>
        </Route>
        <Route path="/Contact">
            <Contact/>
        </Route>
        <Route path="*">
        <NoMatch/>

        </Route>

            </Switch>
        </main>
    )
}

export default Body;