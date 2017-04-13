angular.module('app').controller('MapCtrl', function () {
  var map = this;

  map.center = {
    lat: 46.778474,
    lng: 6.641183,
    zoom: 15
  }

  var defaultIcon = {
    iconUrl: "assets/leaflet/images/marker-icon.png",
    iconRetinaUrl: "assets/leaflet/images/marker-icon-2x.png",
    shadowUrl: "assets/leaflet/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  }

  map.markers = [
    {
      lat: 46.781547,
      lng: 6.640351,
    }, {
      lat: 46.781058,
      lng: 6.647179,
      icon: angular.copy(defaultIcon)
    }, {
      lat: 46.778246,
      lng: 6.641490,
      icon: angular.copy(defaultIcon)
    }
  ]
});