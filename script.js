function successfullyGet() {
	const file = document.querySelector("#photo").files[0];
	const name = file.name;
	const crs = document.querySelector("#crs").value;
	var return_data = Array.new();

	// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	var link = "https://apple-slice-2001.herokuapp.com/predict/";
	link += name;
	link += "?crs=";
	link += crs;
	fetch(proxyurl + link)
	.then(response => response.json())
	.then(data => {
		return_data.push(data["latitude"]);
		return_data.push(data["longitude"]);
	})
	.then(_ => switcher = 2)
	.catch(err => console.error(err));

	return return_data;
}

// this is called when the user want to predict image
// flow: called uploadImage() -> draw progress bar -> get API -> draw map
function predict() {
  uploadImage()
  setup();
  switcher = 1;
  percentage = 1;
  coordinate = successfullyGet();
  draw_map(coordinate);
}