package com.adja.SpringReact.CourseControl;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.adja.SpringReact.model.Course;
import com.adja.SpringReact.service.ServiceMetierCourse;


@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class CourseRessourceController {
	@Autowired
	private ServiceMetierCourse managemCourse;

	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourse(@PathVariable String username){
		return managemCourse.findAll();

	}
	//@PutMapping("/instructors/{username}/courses/{id}")
	@RequestMapping(value = "/instructors/{username}/courses/{id}", //
			method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable int id) {
		Course course = ServiceMetierCourse.deleteById(id);
		if (course != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
	
	
	@GetMapping("/instructors/{username}/courses/{id}")
	public Course getCourse(@PathVariable String username, @PathVariable long id) {
		return managemCourse.findById(id);
	}
	
	
	@RequestMapping(value = "/instructors/{username}/courses/{id}", //
			method = RequestMethod.PATCH)
	public ResponseEntity<Course> updateCourse(@PathVariable String username, @PathVariable long id,
			@RequestBody Course course) {
		Course courseUpdated = managemCourse.save(course);
		return new ResponseEntity<Course>(course, HttpStatus.OK);
	}


	//@PostMapping("/instructors/{username}/courses")
	@RequestMapping(value = "/instructors/{username}/courses", //
	method = RequestMethod.POST)
	public ResponseEntity<Course> createCourse(@PathVariable String username, @RequestBody Course course) {
		Course createdCourse = managemCourse.save(course);
		// Location
		// Get current resource url
		/// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
	}





}
