
//Here we assign routes to certain Components ie
// 1. / HomeBody
// 2. /about About
// 3. /camera Camera
// 4. /answer ApiFetcher
//Routing done using react-router-dom npm module
import React from 'react'
import {Switch,Route} from "react-router-dom";
import About from './About';
import ApiFetcher from './ApiFetcher';
import Camera from './Camera';
import HomeBody from './HomeBody';

export default function Routes() {
    
    return (
        <div>
            <Switch>
                <Route path="/about" component={About} />
                <Route exact path="/" component={HomeBody} />
                <Route path="/camera" component={Camera} />
                <Route path="/answer" component={ApiFetcher} />
            </Switch>
        </div>
    )
}
