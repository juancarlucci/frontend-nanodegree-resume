/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/
/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
// var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><a href="mailto:%data%"><span class="white-text">%data%</span></a></li>'; //this is an atempt to get email link to send email
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="orange-text">linkedin</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbiopic = '<img class="media-object biopic" alt="Photo of JC" src="%data%">';
var HTMLwelcomeMsg = '<span class="welcome-message"><br><br>%data%<br><br></span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<h4><a href="#" target="_blank">%data%</h4>';
var HTMLworkTitle = '- %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><small>%data%</small><br><br></p>';

var HTMLprojectStart = '<div class="online list-group project-entry"></div>';
var HTMLprojectTitle = '<h4>%data%</h4>';
// var HTMLprojectTitle = '<a href="%url%">%data%</a>'; //this is an attemt to link to my github pages
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectSkills = '<p class="skillsText">Skills: %data%</p>';
var HTMLprojectImage = '<img src="%data%">';
var HTMLprojectlURL = '<h4><br><a href="#" target="_blank">%data%</a></h4>';
var HTMLprojectUpcoming = '<h3>Upcoming Projects</h3>';

var HTMLschoolClasses = '<h3>University</h3>';
var HTMLschoolStart = '<div class="education-entry list-group-item"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<br><div class="date-text">%data%</div>';
var HTMLschoolLocation = '<br><div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em>Major: %data%</em>';
var HTMLschoolURL = '<h4><br><a href="#" target="_blank">%data%</a></h4>';

var HTMLonlineClasses = '<h3>Programming, Coputer Science, and Graphic Design Classes</h3>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<h4><br><a href="#" target="_blank">%data%</a></h4>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/

$(document).ready(function() {
    $('button').click(function() {
        var iName = inName() || function() {};
        $('#name').html(iName);
    });
});

//below is the code from mcsLeader, in the forum
// $(document).ready(function() {
//     $('button').click(function() {
//         if (!inName) {
//           return;
//         }
//         var nameFromResume = $('#name').html();
//         var iName = inName(nameFromResume);
//         $('#name').html(iName);
//     });
// });

/*
This is the code from Karol, formum mentor

 $(document).ready(function() {
   $('button').click(function() {
     var name = $('#name').html();
     var iName = inName() || function(){};
     $('#name').html(iName);
   });
 });
 */
clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    // your code goes here!
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles:[
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {"visibility": "on"},
          { "saturation": -76 },
          { "color": "#f0560b" },
          { "weight": 0.1 }
        ]
      },
      {
        "featureType": "landscape.natural",
        "stylers": [
          {"visibility": "on"},
          { "saturation": -28 },
          // { "color": "#32302f" },
          { "color": "#e5e3df" }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {"visibility": "on"},
          // { "color": "#808080" },
          { "color": "#e5e3df" }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          { "weight": 0.5 },
          { "saturation": -71 },
          { "color": "#f0560b" }
        ]
      },{
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          { "color": "#ffffff"}
        ]
      },
        {
        "featureType": "landscape",
        "stylers": [
          { "visibility": "on" },
          { "color": "#e5e3df" }
        ]
      },
      {
             "featureType": "landscape",
             "elementType": "geometry",
             "stylers": [
                 {
                     "hue": "#e3e3e3"
                 },
                 {
                     "saturation": -100
                 },
                 {
                     "lightness": 0
                 },
                 {
                     "visibility": "on"
                 }
             ]
         },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {"color": "#ffffff"},
            {"visibility": "on"}
          ]
        }
        ]
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });

        // iterates through work locations and appends each location to
        // the locations array. Note that forEach is used for array iteration
        // as described in the Udacity FEND Style Guide:
        // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }
    
    function pinSymbol(color) {
         return {
             path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
            //  url: "images/marker_red.svg",
             fillColor: color,
             fillOpacity: 1,
             strokeColor: '#fff',
             strokeWeight: 1,
             scale: 1,
        };
     }    
    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window
        
        var imageIcon = {
              url: "images/marker_orange.svg",
              size: new google.maps.Size(300, 300),
              origin: new google.maps.Point(10, 10),
              anchor: new google.maps.Point(20, 20),
              scaledSize: new google.maps.Size(25, 25)
            };

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name,
            // zoom: 13,
            icon: pinSymbol("#f0560b"),
            animation: google.maps.Animation.DROP
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker); // your code goes here!
            map.setZoom(9); // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            //checks that what got retuned is an actual location. Then passes the first of such locations [0].
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
