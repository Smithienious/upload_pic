function draw_map(coordinate) {
	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		zoom: 13,
		center: coordinate
	});	
}