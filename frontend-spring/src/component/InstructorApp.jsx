import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
class InstructorApp extends Component{
    render(){
        return(<>
            <h1> Liste des courses </h1>
            <ListCoursesComponent/>
            </>
        )
    }
}

export default InstructorApp