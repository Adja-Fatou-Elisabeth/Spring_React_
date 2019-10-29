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
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)

    }

    componentDidMount() {
        this.refreshCourses();
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push('/courses/'+id)
    }

    addCourseClicked() {
        this.props.history.push('/courses/')
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses()//HARDCODED
            .then(
                response => {
                    this.setState({ courses: response.data })
                }
                
            )
    }
    render() {
        return (
            <div className="container">
                <h3>
                    All Courses
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
                    </div>
                </h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
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
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(Course.id)}>Delete</button></td>
                                            <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(Course.id)}>Update</button></td>
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