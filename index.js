//js
$("#refreshscore").click(function()
{
	var A =	parseInt($("#Home #Aris").html());
	var B =	parseInt($("#Home #Bris").html());
	var newA=parseInt(document.getElementById("newa").value);
	var newB=parseInt(document.getElementById("newb").value);
	A=A+newA;
	B=B+newB;
	$("#Home #Aris").html(A);
	$("#Home #Bris").html(B);
	document.getElementById("newa").value=0;
	document.getElementById("newb").value=0;
});
$("#azzera #yes").click(function(){
	$("#Home #Aris").html(0);
	$("#Home #Bris").html(0);
});
$("#mrs").click(function()
{
	var A =document.getElementById("moda");
	var B =document.getElementById("modb");
	$("#Home #Aris").html(A.value);
	$("#Home #Bris").html(B.value);
	A.value=0;
	B.value=0;

});

$("#calc").click(function()
{
	var ace,three,wmn,hrs,kng,atwy,afty,btwy,bfty;
	var tot,atot;
	ace=document.getElementById("aces");
	three=document.getElementById("tre");
	wmn=document.getElementById("wmn");
	hrs=document.getElementById("fnt");
	kng=document.getElementById("kn");
	atwy=document.getElementById("av");
	afty=document.getElementById("aq");
	btwy=document.getElementById("bv");
	bfty=document.getElementById("bq");
	tot=parseInt(ace.value*11)+parseInt(three.value*10)+parseInt(wmn.value*2)+parseInt(hrs.value*3)+parseInt(kng.value*4);	
	atot=parseInt(120-tot);
	tot=tot+parseInt(atwy.value*20)+parseInt(afty.value*40);
	atot=atot+parseInt(btwy.value*20)+parseInt(bfty.value*40);
	$("#calcA").html(tot);
	$("#calcB").html(atot);
});

$("#calcCharge").click(function()
{
	var ca,cb,ra,rb;
	ca=parseInt(document.getElementById("calcA"));
	cb=parseInt(document.getElementById("calcB"));
	ra=parseInt(document.getElementById("Aris"));
	rb=parseInt(document.getElementById("Bris"));
	$("#Home #Aris").html(ca+ra);
	$("#Home #Bris").html(cb+rb);
	$("calcA").html(0);
	$("calcB").html(0);
});
