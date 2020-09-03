function uploadImage() {
	const ref = firebase.storage().ref();
	const file = document.querySelector("#photo").files[0];
	const name = file.name;
	const metadata = {
		contentType: file.type
	};

	const task = ref.child(name).put(file, metadata);
	task
	.then(snapshot => snapshot.ref.getDownloadURL())
	.then(url => {
		document.querySelector('.large-text').style.visibility = 'hidden';
		document.querySelector('.large-text').style.display = 'none';
		document.querySelector('#so_hong_image').src = url;
	});
}