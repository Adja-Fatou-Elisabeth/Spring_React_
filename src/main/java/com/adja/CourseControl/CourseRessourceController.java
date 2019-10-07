package com.adja.CourseControl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adja.model.Course;
import com.adja.service.ServiceMetierCourse;

@RestController
public class CourseRessourceController {
	@Autowired
	private ServiceMetierCourse managemCourse;
	
	@RequestMapping("/instructors/{username}/courses")
	public List<Course> getAllCourse(@PathVariable String username){
		return managemCourse.findAll();
		
	}

}
