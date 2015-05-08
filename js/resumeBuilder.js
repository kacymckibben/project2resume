var bio = {
	"name": "Kacy McKibben",
	"role": "Web Developer",
	"contacts": {
		"mobile": "714-604-5266",
		"email": "kacy.mckibben@gmail.com",
		"github": "kacy.mckibben",
		"twitter": "@kacy",
		"location": "Los Angeles"
	},
	"welcomeMessage": "Project Manager, Engineer, Dog-Lover",
	"skills": ["programming", "business analysis", "technical support", "project managing", "puppy loving"],
	"navigation": ["Work", "Projects", "Education", "Map"],
	"navURL": ["#workExperience", "#projects", "#education", "#mapDiv"],
	"biopic": "images/test2.jpg",
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i<bio.skills.length; i++){
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		};
		for (var i = 0; i<bio.navigation.length; i++){
			var formattedNavWork = HTMLnav.replace("%data%", bio.navigation[i]).replace("%url%", bio.navURL[i]);
			$("#navMenu").append(formattedNavWork);
		}
	}
};
bio.display();
var work = {
	"jobs": [
		{
			"employer": "Laserfiche",
			"title": "Technical Project Manager",
			"location": "Long Beach, CA",
			"dates": "10/13-present",
			"description": "Managed engineers and performed business analysis, requirements gathering, software implementation, and technical support for clients."
		},
		{
			"employer": "Laserfiche",
			"title": "Software Test Engineer",
			"location": "Long Beach, CA",
			"dates": "08/09-08/10",
			"description": "Wrote and performed testing scripts for client applications; gathered requirements and wrote software specifications."
		},
		{
			"employer": "Laserfiche",
			"title": "Solutions Engineer",
			"location": "Long Beach, CA",
			"dates": "08/10-10/13",
			"description": "Performed business analysis, requirements gathering, software implementation, and technical support for clients."
		},
		{
			"employer": "Auritec Pharmaceuticals",
			"title": "Chemical Engineer",
			"location": "Pasadena, CA",
			"dates": "05/09-08/09",
			"description": "Analyzed the diffusion properties of antiretroviral drugs to develop a drug delivery system to prevent HIV transmission."
		}
	],
	display: function() {
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();
var projects = {
	"projects": [
		{
			"title": "Mitsui Sumitomo Insurance Group (MSIG) Laserfiche Implementation",
			"dates": "05/14-present",
			"description": "Configured Laserfiche software in three departments at MSIG headquarters and satellite offices. Managed project, engineered solution design, and provided technical support.",
			"images": []
		},
		{
			"title": "State of Alabama Laserfiche Implementation",
			"dates": "03/14-05/15",
			"description": "Configured Laserfiche software as part of a 5-person team at Alabama Real Estate Commission, Alabama Department of Corrections, and Alabama Department of Mental Health. Acted as business analyst and technical lead.",
			"images": ["images/test4.jpg", "images/test3.jpg"]
		}
	],
	display: function() {
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				}
			}	
		}
	}
};
projects.display();
var education = {
	"schools": [
		{
			"name": "Harvey Mudd College",
			"location": "Claremont, CA",
			"degree": "Bachelor of Science",
			"majors": ["General Engineering, em. Biomedical"],
			"dates": "2009",
			"url": "http://www.hmc.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Project Management",
			"school": "ed2go, California State University at Long Beach",
			"date": "2014",
			"url": "http://www.ed2go.com"
		},
		{
			"title": "Introduction to C# Programming",
			"school": "ed2go, Loyola Marymount University Extension",
			"date": "2014",
			"url": "http://www.ed2go.com/lmuextension"
		},
		{
			"title": "Intermediate C# Programming",
			"school": "ed2go, Loyola Marymount University Extension",
			"date": "2014",
			"url": "http://www.ed2go.com/lmuextension"
		},
		{
			"title": "Front End Web Development",
			"school": "Udacity",
			"date": "2015",
			"url": "http://www.udacity.com"
		}
	],
	display: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
			$(".education-entry:last").append(formattedOnlineDate);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url).replace("%url%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}	
	}
};
education.display();
$("#mapDiv").append(googleMap);