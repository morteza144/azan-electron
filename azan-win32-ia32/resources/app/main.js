// ################## gat persian time ############################
function get_iran_date(){
var c = "https://api.codebazan.ir/time-date/?td=date";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  document.getElementById("date1").innerHTML =this.responseText;
	  document.getElementById("date2").innerHTML =this.responseText;
		}
};
		xhr.open("GET",c, true);
		xhr.send();
}

get_iran_date();
// ###############################################################

	var azan_sound_el=document.getElementById("audio");
function play_azan(){
	azan_sound_el.play();
}

function togglePlay() {
	var azan_sound_el=document.getElementById("audio");
    var text  = document.getElementById("toggle_play");
    if (azan_sound_el.paused) {
        azan_sound_el.play();
 
        	text.innerHTML="پخش";
        
    }
    else {
        azan_sound_el.pause();

        	text.innerHTML="توقف";
        
    }
        

};

// ############### flip card ##################
function flip(){
	var s = document.getElementsByClassName("card1")[0];
	s.classList.toggle("mori-flip");
}
// ############### flip card #################


tolu_aftab
ghorub_aftab
nimeshab

function go() {

    var a = document.getElementById("sele");
	var b = a.options[a.selectedIndex].value;
	var c = "https://api.keybit.ir/owghat/?city="+ b;
	// var c = "http://localhost:8000/api/mori";
	// var c = "https://api.keybit.ir/owghat/?city="+ b +"&showsec=false";

	// 
	var now = new Date();


	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	    	var j = JSON.parse(this.responseText);
	     document.getElementById("azan_sobh").innerHTML ="اذان صبح "+"&nbsp;"+" = "+"&nbsp;"+ j.result.azan_sobh;
	     document.getElementById("azan_zohr").innerHTML ="اذان ظهر"+"&nbsp;"+" = "+"&nbsp;"+ j.result.azan_zohr;
	     document.getElementById("azan_maghreb").innerHTML ="اذان مغرب"+"&nbsp;"+" = "+"&nbsp;"+ j.result.azan_maghreb;
	     document.getElementById("tolu_aftab").innerHTML ="طلوع آفتاب"+"&nbsp;"+" = "+"&nbsp;"+ j.result.tolu_aftab;
	     document.getElementById("ghorub_aftab").innerHTML ="غروب آفتاب"+"&nbsp;"+" = "+"&nbsp;"+ j.result.ghorub_aftab;
	     document.getElementById("nimeshab").innerHTML ="نیمه شب شرعی"+"&nbsp;"+" = "+"&nbsp;"+ j.result.nimeshab;

	     var sobh_time = j.result.azan_sobh;
	     var zohr_time = j.result.azan_zohr;
	     var magh_time = j.result.azan_maghreb;
 
	     var sobh = sobh_time.split(":");
	     var zohr = zohr_time.split(":");
	     var magh = magh_time.split(":");





	


function dif(bbbb) {
dis =new Date(now.getFullYear(), now.getMonth(), now.getDate(), bbbb[0], bbbb[1], bbbb[2], 0) - now;
	return dis;
}

if(dif(sobh)>0){

	     document.getElementById("message").innerHTML ="زنگ برای اذان صبح و ظهر و مغرب تنظیم شد.";
		setTimeout(play_azan, dif(sobh));
		setTimeout(play_azan, dif(zohr));
		setTimeout(play_azan, dif(magh));

}
else if(dif(zohr)>0){

	     document.getElementById("message").innerHTML ="زنگ برای اذان  ظهر و مغرب تنظیم شد.";
		setTimeout(play_azan, dif(zohr));
		setTimeout(play_azan, dif(magh));
}
else {
	if(dif(magh)>0){

	     document.getElementById("message").innerHTML ="زنگ برای اذان مغرب تنظیم شد";
		setTimeout(play_azan, parseInt(dif(magh)));
	}
}

flip();


	    }
	  };

	  xhttp.open("GET",c, true);
	  xhttp.send();
}





function entezar() {
	azan_sound_el.pause();
	togglePlay();
	document.getElementById("audio").src="azan_mp3/Entezar.mp3";
}
function manshavi() {
	azan_sound_el.pause();
	togglePlay();
	document.getElementById("audio").src="azan_mp3/Menshawi.mp3";
}
function salim() {
	azan_sound_el.pause();
	togglePlay();
	document.getElementById("audio").src="azan_mp3/Moazenzadeh_Salim.mp3";
}
function abdalbast() {
	azan_sound_el.pause();
	togglePlay();
	document.getElementById("audio").src="azan_mp3/Abdolbaset.mp3";
}
function ghalvash() {
	azan_sound_el.pause();
	togglePlay();	
	document.getElementById("audio").src="azan_mp3/Ghalvash.mp3";
}
function sharif() {
	azan_sound_el.pause();
	togglePlay();	
	document.getElementById("audio").src="azan_mp3/Hossein-ali-sharif.mp3";
}
function aboorihe() {
	azan_sound_el.pause();
	togglePlay();	
	document.getElementById("audio").src="azan_mp3/Mohammad-hossein-aborieh.mp3";
}
function rezaeean() {
	azan_sound_el.pause();
	togglePlay();	
	document.getElementById("audio").src="azan_mp3/Rezaeian.mp3";
}
function saeedhafez() {
	azan_sound_el.pause();
	togglePlay();	
	document.getElementById("audio").src="azan_mp3/Saeed-hafez.mp3";
}



function theme_change() {
	// var bodyo = document.getElementsByTagName("BODY")[0];
	document.body.classList.toggle("mori-gra5");
	// document.body.classList.toggle("mori-gra8");

	var fronto = document.getElementById("front");
	fronto.classList.toggle("mori-gradient3");
	fronto.classList.toggle("mori-gra6");
	fronto.classList.toggle("text-light");


	var backo = document.getElementById("back");
	// backo.classList.toggle("mori-gra8");
	backo.classList.toggle("mori-gra6");
	// backo.classList.toggle("text_white");
	backo.classList.toggle("text-light");
	// backo.classList.toggle("text-light");
}