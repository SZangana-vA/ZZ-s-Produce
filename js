function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}

// Google Maps API 

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 42.24622568821108, lng: -83.67766256803851 },
//     zoom: 8,
//   });
// }

// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
// let marker;

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: { lat: 42.24622568821108, lng: -83.67766256803851  },
//   });
//   marker = new google.maps.Marker({
//     map,
//     draggable: true,
//     animation: google.maps.Animation.DROP,
//     position: { lat: 42.24622568821108, lng: -83.67766256803851 },
//   });
  
//   marker.addListener("click", toggleBounce);
  
// }


// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }

      // lat: 42.24622568821108, lng: -83.67766256803851 
      // 42.688344393574155, -84.55822329689215
  // Region 

  const acc = document.getElementsByClassName("accordion");
  let i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
