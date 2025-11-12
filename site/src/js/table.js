async function fetchJSONData(url, base) {
	const request = await fetch(url);
	loadData(await request.json(), base);
}

function loadData(data, base) {
	const keys = Object.keys(data);

	for (let i = 0; i < keys.length; i++) {
		if (keys[i] == "misc")
			continue;

		let table = document.getElementById("data-table");

		let newRow = table.insertRow();

		let titleCell = newRow.insertCell();
		let lessonCell = newRow.insertCell();
		//let solCell = newRow.insertCell();

		let title = document.createTextNode("Lesson " + keys[i])
		titleCell.appendChild(title);

		if (data[keys[i]].Lesson != "") {
			let link = document.createElement("a");
			link.setAttribute("href", base.concat(data[keys[i]].Lesson).concat(".pdf"));

			let text = document.createTextNode("pdf")
			link.appendChild(text);

			lessonCell.appendChild(link);
		}

		/*
		if (data[keys[i]].LessonSol != "") {
			let link = document.createElement("a");
			link.setAttribute("href", base.concat(data[keys[i]].LessonSol).concat(".pdf"));

			let text = document.createTextNode("pdf")
			link.appendChild(text);

			solCell.appendChild(link);
		}
		*/
	}
}
