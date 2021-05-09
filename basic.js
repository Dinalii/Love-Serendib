var size;
			
	function incfont()
			
	{
	var t = document.getElementById('fontSize').value;
	var x = document.getElementById('intro_content');
	x.style.fontSize = t+"px";
	size = t;
	document.getElementById("size") .innerHTML=size;
			
	}