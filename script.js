function successfullyGet() {
	const file = document.querySelector("#photo").files[0];
	const name = file.name;
	const crs = document.querySelector("#crs").value;

	var link = "https://apple-slice-2001.herokuapp.com/predict/";
	link += name;
	link += "?crs=";
	link += crs;
	fetch(link, {
		headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
		method: 'GET',
		mode: "cors"
	})
	.then(response => response.json())
	.then(data => console.log(data))
	.then(_ => switcher = 2)
	.catch(err => console.error(err));
}

// this is called when the user want to predict image
// flow: called uploadImage() -> draw progress bar -> get API -> draw map
function predict() {
  uploadImage()
  setup();
  switcher = 1;
  percentage = 1;
  successfullyGet();
}