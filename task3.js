var m=require("./last-mod");
var dateFormat = require('dateformat');

var timestamp=m(process.argv[2]);

if(timestamp !== false){
	var data=new Date(timestamp);
	
	var formattedDate = dateFormat(data, "dd.mm.yyyy H:MM:ss");
	
	var fin=data.getDate()+"-"+(data.getMonth()+1)+"-"+data.getFullYear()+" ";
	fin+=' '+data.getHours()+":"+data.getMinutes(); 
	
	console.log(formattedDate);
}else{
	 console.log("Error file name");
}
