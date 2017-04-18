/**
 * Angular Controller for handling the map on the page
 */
angular.module("app").controller("MapCtrl", function ($scope) {
  var map = this;

  // Defines the default center of the map and the zoom level
  map.center = {
    lat: 46.778474,
    lng: 6.641183,
    zoom: 15
  };

  // Fixes the default Icon bug, see slide #10
  var defaultIcon = {
    iconUrl: "assets/leaflet/images/marker-icon.png",
    shadowUrl: "assets/leaflet/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  };

  // Defines a custom icon
  var myIcon = {
    iconUrl: "images/myIcon.png",
    iconSize: [38, 95],
    iconAnchor: [22, 95],
    shadowUrl: "images/myIconShadow.png",
    shadowSize: [50, 64],
    shadowAnchor: [5, 64]
  };

  // Defines the markers that will be added to the map.
  // Add any marker object to this array for it to appear on the map
  map.markers = [
    {
      lat: 46.781547,
      lng: 6.640351,
      icon: defaultIcon,
      draggable: true,
      // You can add any additionnal property you want to your marker
      // This way, we can for example add a name to identify the marker later on.
      name: 'Yverdon gare'
    }, {
      lat: 46.781058,
      lng: 6.647179,
      icon: defaultIcon,
      name: 'HEIG-VD, St-Roch'
    }, {
      lat: 46.778246,
      lng: 6.641490,
      icon: defaultIcon,
      name: 'Place Pestalozzi'
    }
  ];

  // This function adds a new marker to the map.markers array
  // and, consequently, to the map
  // Calling it multiple time will add the same marker each time.
  map.addMarker = function () {
    map.markers.push({
      lat: 46.779244,
      lng: 6.659402,
      icon: myIcon,
      name: 'HEIG-VD, Cheseaux'
    })
  }

  // Event listener to react to user clicking the map
  $scope.$on('leafletDirectiveMap.click', function (event, args) {
    alert('Map clicked at coordinates [' + args.leafletEvent.latlng.lat + ', ' + args.leafletEvent.latlng.lng + ']')
  })

  // Event listener to react to user clicking a marker
  $scope.$on('leafletDirectiveMarker.click', function (events, args) {
    alert('Marker clicked: ' + args.model.name)
  })

  // Event listener to react to user finishing dragging a marker
  $scope.$on('leafletDirectiveMarker.dragend', function (events, args) {
    alert('Marker moved to coordinates [' + args.model.lat + ', ' + args.model.lng + ']')
  })
});
