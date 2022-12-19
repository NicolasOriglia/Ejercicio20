
function initMap() {
   
   const posCordoba = {
    lat : -31.417,
    lng : -64.183
   }
   const posBariloche = {
    lat : -41.134258,
    lng : -71.308525
   }
   const posMendoza = {
    lat : -32.89084,
    lng : -68.82717
   }

   const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 5,
    center: {lat : -38.416097, lng: -64.0000000}
   });

   const marker = new google.maps.Marker({
    position: posCordoba,
    map: map,
    title: 'Cordoba, Arg'
   });

   const marker_2 = new google.maps.Marker({
    position: posBariloche,
    map: map,
    title: 'Bariloche, Arg'
   });

   const marker_3 = new google.maps.Marker({
    position: posMendoza,
    map: map,
    title: 'Mendoza, Arg'
   });
}
  
window.initMap = initMap;