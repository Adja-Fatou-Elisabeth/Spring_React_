import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService';


class ListCoursesComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses('in28minutes')//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                    console.log("okok");
                }
                
            )
    }
    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    Course =>
                                        <tr key={Course.id}>
                                            <td>{Course.id}</td>
                                            <td>{Course.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent