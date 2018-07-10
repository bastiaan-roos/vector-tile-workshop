//mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzdGlhYW4tcm9vcyIsImEiOiJjampmZHIxMnYyejBpM2tuejVhbHFtaXdtIn0.a48Mj174p0R2IGE88DTEiw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'style.json',
    zoom: 11,
    pitch: 60,
    bearing: 62.4,
    center: [ 4.8, 52.4]
});