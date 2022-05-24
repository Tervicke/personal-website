let isDarkMode = false;
function switchMode(){
	if(isDarkMode){
		isDarkMode=false;
		document.getElementsByTagName("body")[0].style.backgroundColor = '#eee';
		document.getElementsByTagName("body")[0].style.color= '#121212';
		let a_tags = document.getElementsByTagName("a");
		for(const a of a_tags){
			a.style.color = '#121212';
		}
		document.getElementById('hello-gif').style.border = "3px solid #121212"
		document.getElementById('switch-mode-button').src = "images/moon.png"
		document.getElementById('twitter').src='images/twitter_dark.png'
		document.getElementById('instagram').src='images/instagram_dark.png'
		document.getElementById('github').src='images/github_dark.png'
		document.getElementById('discord').src='images/discord_dark.png'
	}
	else{
		isDarkMode=true;
		document.getElementsByTagName("body")[0].style.backgroundColor = '#121212';
		document.getElementsByTagName("body")[0].style.color= '#E6E6FA';
		let a_tags = document.getElementsByTagName("a");
		for(const a of a_tags){
			a.style.color = '#E6E6FA';
		}
		document.getElementById('hello-gif').style.border = "3px solid #E6E6FA"
		document.getElementById('switch-mode-button').src = "images/sun.png"
		document.getElementById('twitter').src='images/twitter_light.png'
		document.getElementById('instagram').src='images/instagram_light.png'
		document.getElementById('github').src='images/github_light.png'
		document.getElementById('discord').src='images/discord_light.png'
	}	
}
