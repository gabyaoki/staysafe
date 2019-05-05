// const userPos = navigator.geolocation.getCurrentPosition(response => console.log(response.coords));
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNhcmlsbG8iLCJhIjoiY2pyamk2ZWRuMGN4djN5bzNicTRxbjM3ZyJ9.YFMYrTtzGmExzY-Vy7Dyzw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 3,
    center: [-123.1146425, 49.2813521]
});

let fireLocations = (json) => {
    json.forEach(fire => {
        new mapboxgl.Marker({
            color: '#ff2a22c7'
        })
            .setLngLat([fire.centroid.longitude, fire.centroid.latitude])
            .addTo(map);
    });
};
fetch("scripts/json/fires.json")
    .then(response => response.json())
    .then(json => fireLocations(json));
