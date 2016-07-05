function logClicks(a,t){clickLocations.push({x:a,y:t}),console.log("x location: "+a+"; y location: "+t)}function initializeMap(){function a(){var a=[];return a.push(bio.contacts.location),education.schools.forEach(function(t){a.push(t.location)}),work.jobs.forEach(function(t){a.push(t.location)}),a}function t(a){var t=a.geometry.location.lat(),e=a.geometry.location.lng(),s=a.formatted_address,o=window.mapBounds,n=new google.maps.Marker({map:map,position:a.geometry.location,title:s,animation:google.maps.Animation.BOUNCE}),l=new google.maps.InfoWindow({content:s});google.maps.event.addListener(n,"click",function(){l.open(map,n),map.setZoom(9)}),o.extend(new google.maps.LatLng(t,e)),map.fitBounds(o),map.setCenter(o.getCenter())}function e(a,e){e==google.maps.places.PlacesServiceStatus.OK&&t(a[0])}function s(a){var t=new google.maps.places.PlacesService(map);a.forEach(function(a){var s={query:a};t.textSearch(s,e)})}var o,n={disableDefaultUI:!0};map=new google.maps.Map(document.querySelector("#map"),n),window.mapBounds=new google.maps.LatLngBounds,o=a(),s(o)}var HTMLheaderName='<h1 id="name">%data%</h1>',HTMLheaderRole="<span>%data%</span><hr>",HTMLcontactGeneric='<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',HTMLmobile='<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',HTMLemail='<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',HTMLtwitter='<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',HTMLlinkedin='<li class="flex-item"><span class="orange-text">linkedin</span><span class="white-text">%data%</span></li>',HTMLgithub='<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',HTMLblog='<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',HTMLlocation='<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',HTMLbiopic='<img class="media-object biopic" alt="Photo of JC" src="%data%">',HTMLwelcomeMsg='<span class="welcome-message"><br><br>%data%<br><br></span>',HTMLskillsStart='<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',HTMLskills='<li class="flex-item"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<h4><a href="#" target="_blank">%data%</h4>',HTMLworkTitle="- %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><small>%data%</small><br><br></p>",HTMLprojectStart='<div class="online list-group project-entry"></div>',HTMLprojectTitle="<h4>%data%</h4>",HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p>%data%</p>",HTMLprojectSkills='<p class="skillsText">Skills: %data%</p>',HTMLprojectImage='<img src="%data%">',HTMLprojectlURL='<br><a href="#" target="_blank">%data%</a>',HTMLschoolClasses="<h3>University</h3>",HTMLschoolStart='<div class="education-entry list-group-item"></div>',HTMLschoolName='<a href="#" target="_blank">%data%',HTMLschoolDegree=" -- %data%</a>",HTMLschoolDates='<br><div class="date-text">%data%</div>',HTMLschoolLocation='<br><div class="location-text">%data%</div>',HTMLschoolMajor="<em>Major: %data%</em>",HTMLschoolURL='<h4><br><a href="#" target="_blank">%data%</a></h4>',HTMLonlineClasses="<h3>Online Classes</h3>",HTMLonlineTitle='<a href="#" target="_blank">%data%',HTMLonlineSchool=" - %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineURL='<h4><br><a href="#" target="_blank">%data%</a></h4>',internationalizeButton="<button>Internationalize</button>",googleMap='<div id="map"></div>';$(document).ready(function(){$("button").click(function(){var a=inName()||function(){};$("#name").html(a)})}),clickLocations=[],$(document).click(function(a){var t=a.pageX,e=a.pageY;logClicks(t,e)});var map;window.addEventListener("load",initializeMap),window.addEventListener("resize",function(a){map.fitBounds(mapBounds)});