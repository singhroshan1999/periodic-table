var xmlDoc = null;
function element_info(anumber)
{
	 document.getElementById("element_icon").innerHTML = "<img src=\"element_icon/"+anumber+".jpg\" class=\"element_icon_img\" border=\"0\">";
    if (typeof window.ActiveXObject != 'undefined' ) {
      xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
      xmlDoc.onreadystatechange = process ;
    }
    else {
      xmlDoc = new XMLHttpRequest();
      xmlDoc.onload = process ;
    }
    xmlDoc.open( "GET", "element_info.php?atomic_number="+anumber, true );
    xmlDoc.send( null );


}

  function process() {
    if ( xmlDoc.readyState != 4 ) return ;


var str = xmlDoc.responseText;
var res = str.split("#");
document.getElementById("element_info_header_an").innerHTML = res[0];
document.getElementById("element_info_header_mn").innerHTML = res[1];
document.getElementById("element_info_element").innerHTML = res[2];
document.getElementById("element_info_element_add").innerHTML = res[3];
document.getElementById("element_info_footer_mp").innerHTML = res[4];
document.getElementById("element_info_footer_dn").innerHTML = res[5];
document.getElementById("element_info_footer_bp").innerHTML = res[6];
document.getElementById("element_info_footer_en").innerHTML = res[7];
document.getElementById("element_info").style.background = "radial-gradient(#ffffff,#"+res[8]+")";


}

function highlight(norm,col,column,e1,e2,e3,e4,e5,e6,e7) {
/* needs optimisation */

// normalise first
var prev = document.getElementById("h");
normal('66cccc','alkli','h','li','na','k','rb','cs','fr');
normal('cc75ff','alkli_earth','be','mg','ca','sr','ba','ra',null);
normal('EFE77E','nobel','he','ne','ar','kr','xe','rn',null);
normal('deb887','halogen','f','cl','br','i','at',null,null);
/* highlight2(0);  */ // maximium call stack reached

if(norm == 1){
return;
}
 highlight2(0);
document.getElementById(e1).setAttribute("style","background:#"+col+";border:2px solid #000;");
document.getElementById(e2).setAttribute("style","background:#"+col+";border:2px solid #000;");
document.getElementById(e3).setAttribute("style","background:#"+col+";border:2px solid #000;");
document.getElementById(e4).setAttribute("style","background:#"+col+";border:2px solid #000;");
document.getElementById(e5).setAttribute("style","background:#"+col+";border:2px solid #000;");
if (e6 == null ){
document.getElementById(column).setAttribute("onclick","normal('"+col+"','"+column+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"',null,null)");
return;
}
document.getElementById(e6).setAttribute("style","background:#"+col+";border:2px solid #000;");

if ( e7 == null ){
document.getElementById(column).setAttribute("onclick","normal('"+col+"','"+column+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"','"+e6+"',null)");
return;
}
document.getElementById(e7).setAttribute("style","background:#"+col+";border:2px solid #000;");
document.getElementById(column).setAttribute("onclick","normal('"+col+"','"+column+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"','"+e6+"','"+e7+"')");
}
function normal(col,column,e1,e2,e3,e4,e5,e6,e7) {

document.getElementById(e1).removeAttribute("style");
document.getElementById(e2).removeAttribute("style");
document.getElementById(e3).removeAttribute("style");
document.getElementById(e4).removeAttribute("style");
document.getElementById(e5).removeAttribute("style");
if (e6 == null){
document.getElementById(column).setAttribute("onclick","highlight(null,'"+col+"','"+column+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"',null,null)");
return;
}
document.getElementById(e6).removeAttribute("style");

if (e7 == null){
document.getElementById(column).setAttribute("onclick","highlight(null,'"+col+"','"+column+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"','"+e6+"',null)");
return;
}
document.getElementById(e7).removeAttribute("style");
document.getElementById(column).setAttribute("onclick","highlight(null,'"+col+"','"+column+"','"+e1+"','"+e2+"','"+e3+"','"+e4+"','"+e5+"','"+e6+"','"+e7+"')");
}

function highlight2(val){
normal2(1);
normal2(2);
if(val == 0){return;}
highlight(1,0,0,0,0,0,0,0,0,0);
if(val == 1){
var query = document.getElementById("lanthanoids").querySelectorAll(".load_einfo");
var add = document.getElementById("la");
document.getElementById("period_lanth").setAttribute("onclick","normal2(1)");
} else
{
var query = document.getElementById("actinioids").querySelectorAll(".load_einfo");
var add = document.getElementById("ac");
document.getElementById("period_actini").setAttribute("onclick","normal2(2)");
}
var i;
for (i = 0; i < query.length; i++) {
    query[i].style.border = "2px solid #000";
    add.style.border = "2px solid #000";

}

}
function normal2(val){
if(val == 1){
var query = document.getElementById("lanthanoids").querySelectorAll(".load_einfo");
document.getElementById("period_lanth").setAttribute("onclick","highlight2(1)");
document.getElementById("la").removeAttribute("style");
} else {
var query = document.getElementById("actinioids").querySelectorAll(".load_einfo");
document.getElementById("period_actini").setAttribute("onclick","highlight2(2)");
document.getElementById("ac").removeAttribute("style");
}
var i;
for (i = 0; i < query.length; i++) {
    query[i].removeAttribute("style");
}
}

function apply_to_all(attrib,val){
var query = document.querySelectorAll(".load_einfo");
var i;
for(i = 0;i < query.length; i++){
	query[i].setAttribute(attrib,val);
	}
	}

function physical_property(state){


if(state == 1){
physical_property(5);
var element = "h he ne ar kr xe rn f cl br n o tc hg rf db sg bh hs mt ds rg uub uut uuq uup uuh uus uuo np pu am cm bk cf es fm md no lr pm";
var arr = element.split(" ");
var l;
apply_to_all("style","border:2px solid #000;");
for(l = 0; l < arr.length; l++){
document.getElementById(arr[l]).getElementsByClassName("load_einfo")[0].style.opacity = "0.1";
document.getElementById(arr[l]).getElementsByClassName("load_einfo")[0].style.border = "0px";
}
return;
	}//solid

if(state == 2){//liquid
physical_property(5);
apply_to_all("style","opacity:0.1;");
var e1 = document.getElementById("br").getElementsByClassName("load_einfo")[0].style;
var e2 = document.getElementById("hg").getElementsByClassName("load_einfo")[0].style;
e1.opacity = e2.opacity = "1";
e1.border = e2.border = "2px solid #000";
return;
	}

if(state == 3){
physical_property(5);
var element = "h he ne ar kr xe rn f cl n o";
var arr = element.split(" ");
var l;
apply_to_all("style","opacity:0.1");
for(l = 0; l < arr.length; l++){
document.getElementById(arr[l]).getElementsByClassName("load_einfo")[0].style.opacity = "1";
document.getElementById(arr[l]).getElementsByClassName("load_einfo")[0].style.border = "2px solid #000";
}
return;
	}//gas

if(state == 4){
physical_property(5);
var element = "tc rf db sg bh hs mt ds rg uub uut uuq uup uuh uus uuo np pu am cm bk cf es fm md no lr pm";
var arr = element.split(" ");
var l;
apply_to_all("style","opacity:0.1");
for(l = 0; l < arr.length; l++){
document.getElementById(arr[l]).getElementsByClassName("load_einfo")[0].style.opacity = "1";
document.getElementById(arr[l]).getElementsByClassName("load_einfo")[0].style.border = "2px solid #000";
}
return;
	}//synthetic

if(state == 5){
apply_to_all("style","opacity:1");
temp_refresh(-1);
return;
}
	}

function temp_refresh(val){
	var ValNum = parseInt(val);
	var count;
/*var Modify = function () { document.getElememtById(SY[count]).style.backgroundColor = "#f0f"; }*/
var MP = MeltingPoint.split("#");
var BP = BoilingPoint.split("#");
var SY = Symbol.split("#");
if (val == -1){
document.getElementById("slider").value = 0;
document.getElementById("cur_val").innerHTML = 0;

	for(count = 0;count != 118;count++){
		document.getElementById(SY[count]).removeAttribute("style");
		}
return;
	}
document.getElementById("cur_val").innerHTML = ValNum;

for(count = 0;count != 118;count++){
if(MP[count] == 0){document.getElementById(SY[count]).style.backgroundColor = "#708090"; continue;}
if(MP[count] < ValNum){  document.getElementById(SY[count]).style.backgroundColor = "#008B8B";
if(BP[count] < ValNum) { document.getElementById(SY[count]).style.backgroundColor = "#D2B48C"; }
} else { document.getElementById(SY[count]).style.backgroundColor = "#555";  }

	}
	}
function start_dyn(){
	if(document.getElementById("slider_main").style.display == "none") {document.getElementById("slider_main").style.display = "block";}
	else {document.getElementById("slider_main").style.display = "none";}
	}

function KtoC(temp){ return temp + -272.15; }
function KtoF(temp){return ;}

function toC(){

	document.getElementById("slider").addEventListener("change", "temp_refresh(this.value,'C')");
	}
function property(minm,maxm,opt,colorFile){
var SY = Symbol.split("#");
var OPT = opt.split("#");
var Min = OPT[118];
var Max = OPT[119];
var count;
for(count = 0;count != 118;count++){
if(OPT[count] == 0){document.getElementById(SY[count]).style.backgroundColor = "#555";continue;}
var percent = Math.round((OPT[count]/Max)*98)+1;
document.getElementById(SY[count]).style.background = "#000 url("+colorFile+") 0% "+percent+"%";
document.getElementById(SY[count]).style.backgroundSize = "10000px";
	}


	}

function pre(){
	var x = document.getElementById("slider").step = "1";
}