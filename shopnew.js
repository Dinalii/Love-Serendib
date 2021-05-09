var price1;
var price2;
var price3;
var price4;
var price5;
var price6;
var quantityArray =[];
var productArray =[];
var priceArray =[];
var alertMessage =[];


function shopedProduct1(){
	price1=document.getElementById('product1').value*12500;	
	window.alert(document.getElementById('product1').value+" mask is added to your cart. Rs"+price1);
	quantityArray.push(document.getElementById('product1').value);
	productArray.push("mask");
	priceArray.push(price1);
	
}

function shopedProduct2(){
	price2=document.getElementById('product2').value*9500;	
	window.alert(document.getElementById('product2').value+" elephant is added to your cart. Rs"+price2);
	quantityArray.push(document.getElementById('product2').value);
	productArray.push("elephant");
	priceArray.push(price2);
}

function shopedProduct3(){
	price3=document.getElementById('product3').value*5000;	
	window.alert(document.getElementById('product3').value+" pot is added to your cart. Rs"+price3);
	quantityArray.push(document.getElementById('product3').value);
	productArray.push("pot");
	priceArray.push(price3);
}

function shopedProduct4(){
	price4=document.getElementById('product4').value*3000;	
	window.alert(document.getElementById('product4').value+" necklace is added to your cart. Rs"+price4);
	quantityArray.push(document.getElementById('product4').value);
	productArray.push("necklace");
	priceArray.push(price4);
}

function shopedProduct5(){
	price5=document.getElementById('product5').value*9500;	
	window.alert(document.getElementById('product5').value+" bracelet is added to your cart. Rs"+price5);
	quantityArray.push(document.getElementById('product5').value);
	productArray.push("bracelet");
	priceArray.push(price5);
}

function shopedProduct6(){
	price6=document.getElementById('product6').value*5000;	
	window.alert(document.getElementById('product6').value+" swan is added to your cart. Rs"+price6);
	quantityArray.push(document.getElementById('product6').value);
	productArray.push("swan");
	priceArray.push(price6);
}


function validateForm(){
	var x= document.forms["MyForm"]["fullname"].value;
	var y= document.forms["MyForm"]["Email"].value;
	var z= document.forms["MyForm"]["Address"].value;
	var m= document.forms["MyForm"]["Mnumber"].value;
	
	if(x==""){
		alert("Name is null");
		return false;
	}
	
	
	if(y==""){
		alert("Email is null");
		return false;
	}
	
	
	if(z==""){
		alert("Address is null");
		return false;
	}

	if(m==""){
		alert("Mobile Number is null");
		return false;
	}
	
	var totalPrice=0;
	var i;
	for(i = 0; i < productArray.length; i++){
		var tempString = quantityArray[i] + " x " + productArray[i] + " - Rs. " + priceArray[i];
		alertMessage.push(tempString);
		totalPrice += priceArray[i];
	}
	
	
	window.alert("Customer name : "+document.getElementById('name').value + "\nYour order summary : \n" + alertMessage.join("\n") + "\nYour total is Rs." + totalPrice.toString() + "\nThank you for shopping with us.please give your comments")
}