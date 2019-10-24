import axios from 'axios'

const INSTRUCTOR = 'in28minutes'
const COURSE_API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = '{COURSE_API_URL}/instructors/{INSTRUCTOR}'


class CourseDataService{
    retrieveAllCourses(){
        //console.log({COURSE_API_URL}); 
        return axios.get('http://localhost:8080/instructors/in28minutes/courses');
    }
    deleteCourse (id) {
        //console.log(id);
        return axios.delete('http://localhost:8080/instructors/in28minutes/courses/'+id);
    }
    retrieveCourse(id) {
        return axios.get('http://localhost:8080/instructors/in28minutes/courses/'+id);
    }

    updateCourse(id, course) {
        return axios.put('http://localhost:8080/instructors/in28minutes/courses/'+id, course);
    }
    createCourse(course) {
        return axios.post('http://localhost:8080/instructors/in28minutes/courses/', course);
    }
    
}
export default new CourseDataService()