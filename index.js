var s = [];
		s[0]="1_1.png";
		s[1]="1_2.png";
		s[2]="1_3.png";
		s[3]="1_4.png";
		s[4]="1_5.png";
		var i=1;	
		
		var t = [];
		t[0]="1_1.png";
		t[1]="1_2.png";
		t[2]="1_3.png";
		t[3]="1_4.png";
		t[4]="1_5.png";
		var j=1;	
		
		var u = [];
		u[0]="1_1.png";
		u[1]="1_2.png";
		u[2]="1_3.png";
		u[3]="1_4.png";
		u[4]="1_5.png";
		var k=1;	

function change_image() {	
	document.getElementById("combat1").src = "CombatSim/" + s[i];	
	if(i>=s.length-1){
		i=0;
	}else if(i< s.length-1){
		i++;
	}
	
	document.getElementById("combat2").src = "CombatSim/" + t[i];	
	if(j>=t.length-1){
		j=0;
	}else if(j< t.length-1){
		j++;
	}
	
	document.getElementById("combat3").src = "CombatSim/" + u[i];	
	if(k>=u.length-1){
		k=0;
	}else if(k< u.length-1){
		k++;
	}
}		

setInterval(change_image, 3000);