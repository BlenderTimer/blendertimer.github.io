var smallMenu = document.getElementById('small-menu');
var largeMenu = document.getElementById('large-menu');
var largeMenuItem = document.getElementsByClassName('large-menu-item');
var largeMenuItemDD = document.getElementsByClassName('large-menu-itemDD');
var ulul = document.querySelectorAll('nav ul li ul');
var smallMenuMain = document.getElementById('small-menu-main');
var navDropdown = document.all["nav-dropdown"]
var smallMenuOpen = false
var ululHeights = [];
var revolveButton = document.getElementById('revolve-button');
var navLinksWidths = 0;

loadMenu();
for (var i=0; i < ulul.length; i++) {
	ululHeights.push(ulul[i].offsetHeight);
	ulul[i].style.height = "0px";
}
determineDisplayMenu();

function determineDisplayMenu() {
	if (window.innerWidth < (navLinksWidths + (window.innerWidth / 10) + 298)) {
		smallMenu.style.display = "block";
		for (var i=0; i < largeMenuItem.length; i++) {
  			largeMenuItem[i].style.display = "none";
		}
		for (var i=0; i < largeMenuItemDD.length; i++) {
  			largeMenuItemDD[i].style.display = "none";
		}
		smallMenuMain.style.display = "block";
		if (revolveButton) {revolveButton.style.marginRight = "50px"};
	}
	else {
		smallMenu.style.display = "none";
		for (var i=0; i < largeMenuItem.length; i++) {
  			largeMenuItem[i].style.display = "block";
  			largeMenuItem[i].style.opacity = "1";
		}
		for (var i=0; i < largeMenuItemDD.length; i++) {
  			largeMenuItemDD[i].style.display = "block";
  			largeMenuItemDD[i].style.opacity = "1";
		}
		smallMenuMain.style.display = "none";
		if (revolveButton) {revolveButton.style.marginRight = "0px"};
	}
}

function loadMenu() {
	for (var i=0; i < navLinks.length; i++) {
		var daysSinceAdded = (new Date().getTime() - navLinks[i].date.getTime()) / 1000 / 60 / 60 / 24;
		var smallLink = document.createElement('a');
		smallLink.innerHTML = navLinks[i].title;
		smallLink.className = "small-menu-button-0";
		if (navLinks[i].url.length > 0) {
			smallLink.href = navLinks[i].url;
		};
		smallMenuMain.appendChild(smallLink);
		var largeLink = document.createElement('li');
		largeLink.id = i.toString();
		if (navLinks[i].dropdownURLs) {
			largeLink.className = "large-menu-itemDD";
		}
		else {
			largeLink.className = "large-menu-item";
		};
		largeLink.style.display = "block";
		largeLink.style.opacity = "0";
		largeLink.addEventListener("mouseenter", function(event) {
			var element = event.target || event.srcElement;
			setululHeight(element.id, 'enter')
		});
		largeLink.addEventListener("mouseleave", function(event) {
			var element = event.target || event.srcElement;
			setululHeight(element.id, 'leave')
		});
		if (daysSinceAdded < 30) {
			var largeLinkNew = document.createElement('p');
			largeLinkNew.innerHTML = "NEW";
			largeLinkNew.className = "large-menu-new";
			largeLink.appendChild(largeLinkNew);
			var smallLinkNew = document.createElement('p');
			smallLinkNew.innerHTML = "NEW";
			smallLinkNew.className = "small-menu-new";
			smallLink.appendChild(smallLinkNew);
		}
		var largeLinkA = document.createElement('a');
		largeLinkA.innerHTML = navLinks[i].title;
		largeLinkA.style.width = navLinks[i].width + "px";
		if (navLinks[i].url.length > 0) {
			largeLinkA.href = navLinks[i].url;
		};
		largeLink.appendChild(largeLinkA);
		var largeLinkUL = document.createElement('ul');
		largeLinkUL.style.width = navLinks[i].width + "px";
		if (navLinks[i].dropdownURLs) {
			for (var i2=0; i2 < navLinks[i].dropdownURLs.length; i2++) {
				var daysSinceAddedDD = (new Date().getTime() - navLinks[i].dropdownURLs[i2].date.getTime()) / 1000 / 60 / 60 / 24;
				var smallLink2 = document.createElement('a');
				smallLink2.innerHTML = navLinks[i].dropdownURLs[i2].title;
				smallLink2.className = "small-menu-button-1";
				smallLink2.href = navLinks[i].dropdownURLs[i2].url;
				smallMenuMain.appendChild(smallLink2);
				var largeLinkLI = document.createElement('li');
				if (daysSinceAddedDD < 30) {
					var largeLinkNewDD = document.createElement('p');
					largeLinkNewDD.innerHTML = "";
					largeLinkNewDD.className = "large-menu-newDD";
					largeLinkLI.appendChild(largeLinkNewDD);
					var smallLinkNew2 = document.createElement('p');
					smallLinkNew2.innerHTML = "";
					smallLinkNew2.className = "small-menu-new-1";
					smallLink2.appendChild(smallLinkNew2);
				}
				var largeLinkLIA = document.createElement('a');
				largeLinkLIA.innerHTML = navLinks[i].dropdownURLs[i2].title
				largeLinkLIA.href = navLinks[i].dropdownURLs[i2].url
				largeLinkLI.appendChild(largeLinkLIA);
				largeLinkUL.appendChild(largeLinkLI);
			};
		};
		largeLink.appendChild(largeLinkUL);
		largeMenu.appendChild(largeLink);
		navLinksWidths += navLinks[i].width + 10;
	};
	ulul = document.querySelectorAll('nav ul li ul');
}

function setululHeight(ululId, action) {
	if (action == 'enter') {
		ulul[ululId].style.height = ululHeights[ululId].toString() + "px";
	}
	else {
		ulul[ululId].style.height = "0px";
	}
}

function smallMenuToggle() {
	if (smallMenuOpen == true){
		smallMenuMain.style.boxShadow = "0px 20px 20px rgba(0,0,0,0.0)";
		smallMenuMain.style.width = "0px";
		smallMenuMain.style.opacity = "0";
		smallMenu.style.background = "#1E1E1E";
		smallMenuOpen = false;
	}
	else{
		smallMenuMain.style.boxShadow = "0px 20px 20px rgba(0,0,0,0.5)";
		smallMenuMain.style.width = "250px";
		smallMenuMain.style.opacity = "1";
		smallMenu.style.background = "#303030";
		smallMenuOpen = true;
	}
}