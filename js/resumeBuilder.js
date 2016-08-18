var bio = {   
    "name": "Juan Carlos Collins",
       "role": "Web Developer",
       "contacts": {      
        "mobile": "415-641-1939",
              "email": "juancarloscollins@gmail.com",
              "linkedin": "juan-carlos-collins/20/883/b89",
              "github": "juancarlucci",
              "location": "san francisco, ca"   
    },
       "welcomeMessage": "As a front-end developer, my guiding principles include <br>responsive, maintainable, and engaging web development.",
       "skills": [      "HTML/CSS",       "JavaScript",       "Teaching",       "AJAX"   ],
       "biopic": "images/jc2.jpg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedBioPic = HTMLbiopic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
    var formattedbioMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedbioMobile);
    $("#footerContacts").append(formattedbioMobile);
    var formattedbioEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedbioEmail);
    $("#footerContacts").append(formattedbioEmail);
    var formattedbioGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedbioGithub);
    $("#footerContacts").append(formattedbioGithub);
    var formattedbioLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    $("#topContacts").append(formattedbioLinkedin);
    $("#footerContacts").append(formattedbioLinkedin);
    var formattedbioLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedbioLocation);
    if (bio.skills.length > 0) {
        $( "#header" ).append( HTMLskillsStart );
        for (var i = 0; i < bio.skills.length; i ++ ) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(formattedSkill);
        }
    }
};
bio.display();

var education = {   
    "schools": [      {         
         "name": "American College of Traditional Chinese Medicine",
         "location": "San Francisco, CA",
         "degree": "MA",
         "majors": ["Chinese Medicine"],
         "dates": "2003-2007",
         "url": "https://www.actcm.edu"      
    },        {         
        "name": "Pomona College",
        "location": "Claremont, CA",
         "degree": "BA",
         "majors": ["International Relations"],
         "dates": "1988-1992",
         "url": "http://www.pomona.edu/"      
    }   ],
     "onlineCourses": [      {         
        "title": "Front End Nanodegree",
         "school": "Udacity",
         "date": "December 2015 - September 2016",
         "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"      
    },        {         
        "title": "Intro to JS: Drawing & Animation",
         "school": "Khan Academy",
         "date": "January 2016",
         "url": "https://www.khanacademy.org/computing/computer-programming/programming"      
    },        {         
        "title": "Intro to HTML and CSS",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"      
    },        {         
        "title": "Responsive Web Design Fundementals",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/courses/ud893"      
    },        {         
        "title": "Responsive Images",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/courses/ud882"      
    },        {         
        "title": "How to Use Git and GitHub",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/courses/ud775"      
    },        {         
        "title": "JavaScript Basics",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/courses/ud804"      
    },        {         
        "title": "CS50: Introduction to Computer Science",
         "school": "Harvard",
         "date": "2015",
         "url": "http://online-learning.harvard.edu/course/cs50-introduction-computer-science"      
    }   ]
};
education.display = function() {
  $("#education").append(HTMLonlineClasses); 
    education.onlineCourses.forEach(function(onlineCourse) {
        if (education.onlineCourses.length > 0) {
          var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
          var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
          var formattedOnlineURL = HTMLonlineURL.replace("#", onlineCourse.url);
          var formattedOnlineName = HTMLonlineURL.replace("%data%", onlineCourse.school);
          var finalOnlineNameWLink = formattedOnlineName.replace("#", onlineCourse.url);
          var formattedOnlineLink = HTMLonlineURL.replace("%data%", onlineCourse.title);
          var finalOnlineLink = formattedOnlineLink.replace('#', onlineCourse.url);
          var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
          var formattedOnlineTitleOnlineSchool = finalOnlineLink + formattedOnlineSchool;
          $("#education").append(HTMLschoolStart);
          $(".education-entry:last").append(formattedOnlineTitleOnlineSchool);
          $(".education-entry:last").append(formattedOnlineDates);
          $("#education").append(HTMLschoolStart);
        }
      });
        $("#education").append(HTMLschoolClasses);
      education.schools.forEach(function(school, index) {
          if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolUrl = HTMLschoolURL.replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolLink = HTMLschoolURL.replace("%data%", school.name);
            var finalSchoolLink = formattedSchoolLink.replace('#', school.url);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedSchoolDegree = finalSchoolLink + formattedMajor +formattedDegree;
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedDates);
            $("#education").append(HTMLschoolStart);
        }
      });
};

education.display();

var work = {
    "jobs": [{
        "employer": "Juan Carlos Acupuncture",
        "title": "Owner",
        "location": "San Francisco, CA",
        "url": "http://juancarlosacupuncture.com/",
        "dates": "2008-current",
        "description": "Provide primary care through acupuncture and Chinese Medicine"
    }, {
        "employer": "Academy of Chinese Culture and Health Sciences",
        "title": "Associate Professor",
        "location": "Oakland, CA",
        "url": "http://www.acchs.edu/",
        "dates": "2008-2013",
        "description": "Taught Chinese Medicine, Herbology, Formulas"
    }, {
        "employer": "Center for Ecoliteracy",
        "title": "Curriculum Coordinator",
        "location": "Berkeley, CA",
        "url": "http://www.ecoliteracy.org/",
        "dates": "2000-2003",
        "description": "Worked closely with CEL’s Director, founding members"+
        "(including Fritjof Capra), and main investors to develop content,"+
        " programs and strategies."
    }, {
        "employer": "Cesar Chavez Elementary School",
        "title": "Grant Writer/Curriculum Developer/Teacher",
        "location": "San Francisco, CA",
        "url": "http://www.sfusd.edu/",
        "dates": "1996-2000",
        "description": "Lead teacher, curriculum developer and grant writer for a three year, 6-teacher team project"
    }]
};
work.display = function() {

    // https://discussions.udacity.com/t/foreach-trouble/160070/7
    work.jobs.forEach(function(job, index) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkLink = HTMLworkEmployer.replace("%data%", job.employer);
            var finalWorkLink = formattedWorkLink.replace('#', job.url);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            var formattedEmployerTitle = finalWorkLink+ formattedTitle;
            // $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(finalWorkLink);
            $(".work-entry:last").append(formattedTitle);
            $(".work-entry:last").append(formattedDates);
            // $(".work-entry:last").append(finalWorkLink);
            $(".work-entry:last").append(formattedDescription);
        }
    });
};
work.display();

var projects = {
    "projects": [{
        "title": "Online Portfolio",
        "dates": "January 2016",
        "description": "A showcase of my front-end work",
        "skills": "JavaScript, HTML, CSS",
        "images": ["images/Portfolio.jpg"],
        "url": "https://juancarlucci.github.io/porfolio/portfolio_4.html#/"

    }, {
        "title": "Classic Arcade Game",
        "dates": "March 2016",
        "description": "Frogger, look out!. Single page responsive application developed using HTML-5 Canvas. Hosted on GitHub.",
        "skills": "Object-Oriented JavaScript, HTML-5 Canvas",
        "images": ["images/Game.jpg"],
        "url": "https://github.com/juancarlucci/frontend-nanodegree-arcade-game"
    }, {
        "title": "Web Optimization",
        "dates": "May 2016",
        "description": "Web performance optimization (WPO), Browser Rendering",
        "skills": "Targeted Page Speed, Critical Rendering Path, Chrome Developer Tools",
        "images": ["images/CRP.jpg"],
        "url": "https://github.com/juancarlucci/frontend-nanodegree-mobile-portfolio/blob/master/README.md"
    },
    // {
    //     "title": "Neighborhood Map",
    //     "dates": "June 2016",
    //     "description": "Here be dragons! Includes: map markers, a search function, and a listview to support simple browsing of all locations",
    //     "skills": "AJAX, JavaScript Design Patterns",
    //     "images": ["http://placehold.it/350x150"]
    // }, {
    //     "title": "Health Tracker",
    //     "dates": "December, 2015-2016",
    //     "description": "A single page tracker for health-related metrics",
    //     "skills": "Backbone.js",
    //     "images": ["http://placehold.it/350x150"]
    // }, {
    //     "title": "Feed Reader Testing",
    //     "dates": "December, 2015-2016",
    //     "description": "Implementation of 'test-driven development' or TDD",
    //     "skills": "JavaScript Testing",
    //     "images": ["http://placehold.it/350x150"]

    // }
  ]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedUrl = HTMLprojectlURL.replace("#", projects.projects[project].url).replace("%url%", projects.projects[project].url);
        var formattedSkills = HTMLprojectSkills.replace("%data%", projects.projects[project].skills);
        var formattedProjectlLink = HTMLprojectlURL.replace("%data%", projects.projects[project].title);
        var finalProjectLink = formattedProjectlLink.replace('#', projects.projects[project].url);
        $(".project-entry:last").append(finalProjectLink);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedSkills);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};
projects.display();

// Here is the code from mcsLeader
function inName() {
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

var name = $("#name").text();

// $('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);
