function initMap() {
    let geoLocation  = navigator.geolocation;

    geoLocation.watchPosition(success, failure);

    function success(position) {
        const coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        const map = new google.maps.Map(document.getElementById('myMap'), {
            zoom: 9,
            center: coords,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        const marker = new google.maps.Marker({map: map, position: coords});
    }

    function failure(error) {
        console.log(error);
    }
}