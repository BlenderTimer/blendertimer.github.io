const mainDownload = document.getElementById('main-download');
const secondaryDownloads = document.getElementById('secondary-downloads');

const version = '1.1.0';
const installers = {
	windows: {url:`https://github.com/BlenderTimer/Mathmetic/releases/download/v${version}/mathmetic-v${version}.exe`, info:'Windows (127MB)'},
	macos: {url:`https://github.com/BlenderTimer/Mathmetic/releases/download/v${version}/mathmetic-v${version}.dmg`, info:'MacOS (105MB)'},
	deb: {url:`https://github.com/BlenderTimer/Mathmetic/releases/download/v${version}/mathmetic-v${version}.deb`, info:'Linux/Debian (78.5MB)'},
	rpm: {url:`https://github.com/BlenderTimer/Mathmetic/releases/download/v${version}/mathmetic-v${version}.rpm`, info:'Linux/RPM (87MB)'},
};

const platform = navigator.userAgent.toLowerCase();

if (platform.includes('mac')) {
	mainDownload.children[0].href = installers.macos.url;
	mainDownload.children[0].innerHTML = "Download for MacOS";
	mainDownload.children[1].innerHTML = version + " - " + installers.macos.info;
	secondaryDownloads.children[0].href = installers.windows.url;
	secondaryDownloads.children[0].innerHTML = installers.windows.info;
	secondaryDownloads.children[1].href = installers.deb.url;
	secondaryDownloads.children[1].innerHTML = installers.deb.info;
	secondaryDownloads.children[2].href = installers.rpm.url;
	secondaryDownloads.children[2].innerHTML = installers.rpm.info;
}
else if (platform.includes('linux')) {
	if (platform.includes('ubuntu') || platform.includes('debian')) {
		mainDownload.children[0].href = installers.deb.url;
		mainDownload.children[0].innerHTML = "Download for Linux (.deb)";
		mainDownload.children[1].innerHTML = version + " - " + installers.deb.info;
		secondaryDownloads.children[0].href = installers.rpm.url;
		secondaryDownloads.children[0].innerHTML = installers.rpm.info;
		secondaryDownloads.children[1].href = installers.windows.url;
		secondaryDownloads.children[1].innerHTML = installers.windows.info;
		secondaryDownloads.children[2].href = installers.macos.url;
		secondaryDownloads.children[2].innerHTML = installers.macos.info;
	}
	else {
		mainDownload.children[0].href = installers.rpm.url;
		mainDownload.children[0].innerHTML = "Download for Linux (.rpm)";
		mainDownload.children[1].innerHTML = version + " - " + installers.rpm.info;
		secondaryDownloads.children[0].href = installers.deb.url;
		secondaryDownloads.children[0].innerHTML = installers.deb.info;
		secondaryDownloads.children[1].href = installers.windows.url;
		secondaryDownloads.children[1].innerHTML = installers.windows.info;
		secondaryDownloads.children[2].href = installers.macos.url;
		secondaryDownloads.children[2].innerHTML = installers.macos.info;
	}
}
else {
	mainDownload.children[0].href = installers.windows.url;
	mainDownload.children[0].innerHTML = "Download for Windows";
	mainDownload.children[1].innerHTML = "Version " + version + " - " + installers.windows.info;
	secondaryDownloads.children[0].href = installers.macos.url;
	secondaryDownloads.children[0].innerHTML = installers.macos.info;
	secondaryDownloads.children[1].href = installers.deb.url;
	secondaryDownloads.children[1].innerHTML = installers.deb.info;
	secondaryDownloads.children[2].href = installers.rpm.url;
	secondaryDownloads.children[2].innerHTML = installers.rpm.info;
}