//----------Variables
//----------Event Listeners

//----------LOAD----------
document.getElementById('content-main').style.opacity = "1";
//----------Functions
function donate() {
	var title = window.location.toString().removeBefore("/", 1, true);
	var link = document.createElement('a');
	// link.href = "/donate?" + title;
	link.href = "/donate";
	link.click();
}

function headerSearch(e) {
	if (e.key == "Enter") {
		if (document.getElementById("header-search-output").children.length > 0) {
			window.location = document.getElementById("header-search-output").children[0].children[0].children[2].innerHTML;
		}
		return;
	}
	setTimeout(function() {
		var el = e.target || e.srcElement;
		var query = el.value.trim().toLowerCase().replace(/[_-]/g, " ").replace(/[!();:'",.?]/g, "");
		if (query.length > 0) {
			var results = [];
			for (const page of window.pages) {
				var valid = false;
				var rank = 0;
				if (page.title.toLowerCase() == query) {
					rank = 100000;
					valid = true;
				}
				else if (page.title.toLowerCase().startsWith(query)) {
					rank = 10000;
					valid = true;
				}
				else if (page.title.toLowerCase().indexOf(query) > -1) {
					rank = 10;
					valid = true;
				}
				else {
					for (const kw of page.keywords) {
						if (query.indexOf(kw) > -1) {
							rank = 3;
							valid = true;
							break;
						}
						else if (kw.indexOf(query) > -1) {
							rank = 1;
							valid = true;
							break;
						}
					}
				}
				if (page.description.toLowerCase().indexOf(query) > -1) {
					rank += 1;
					valid = true;
				}
				if (page.url.replace(/[_-]/g, " ").toLowerCase().indexOf(query) > -1) {
					rank += 10;
					valid = true;
				}
				if (valid == true) {results.push({title:page.title,description:page.description,url:page.url,rank:rank})};
			}
			results.sort((a, b) => b.rank - a.rank || a.title.localeCompare(b.title));
			while (results.length > 50) {results.pop()};
			while (document.getElementById("header-search-output").lastChild) {document.getElementById("header-search-output").lastChild.remove()};
			for (const r of results) {
				var result = document.createElement('a');
				result.className = "header-search-result";
				result.innerHTML = "<div><b>" + r.title.removeAfter("-", -2, true) + "</b><p>" + r.description + "</p><i>" + r.url + "</i></div>";
				document.getElementById("header-search-output").appendChild(result);
			}
			document.getElementById("header-search-output").style.display = "flex";
		}
		else {
			document.getElementById("header-search-output").style.display = null;
		}
	}, 1)
}