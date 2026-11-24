// Questions button 
document.addEventListener("DOMContentLoaded", function () {

  const questionsButton = document.getElementById("questions-button");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nasalgado25@hawk.illinoistech.edu");
    });
  }

});

function initMap() {

  const campus = {
    lat: 41.8349,
    lng: -87.6270
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: campus,
    zoom: 15,
    mapTypeId: "roadmap",
    zoomControl: true,
    mapTypeControl: true,
    fullscreenControl: true
  });

  const marker = new google.maps.Marker({
    position: campus,
    map: map,
    title: "Illinois Institute of Technology"
  });

 
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinoi Institute of Technology</h3><p>Campus - Chicago, IL</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

}
