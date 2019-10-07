package com.adja.SpringReact.CourseControl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adja.SpringReact.model.Course;
import com.adja.SpringReact.service.ServiceMetierCourse;


@CrossOrigin(origins = { "http://localhost:3001", "http://localhost:4200" })
@RestController
public class CourseRessourceController {
	@Autowired
	private ServiceMetierCourse managemCourse;
	
	@GetMapping("/instructors/{username}/courses")
	public List<Course> getAllCourse(@PathVariable String username){
		return managemCourse.findAll();
		
	}

}
