import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ListCoursesComponent from './ListCoursesComponent';
import CourseComponent from './CourseComponent';
class InstructorApp extends Component{
    render(){
        return(
            <Router>
                <>
                    <h1> Liste des courses </h1>
                    <div>
                        <Route path="/" exact component={ListCoursesComponent}/>
                        <Route path="/courses" exact component={CourseComponent}/>
                        <Route path="/courses/:id" exact component={CourseComponent}/>
                    </div>
                </>
            </Router>
        )
    }
}

export default InstructorApp