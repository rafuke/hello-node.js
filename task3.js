var m=require("./last-mod");
var timestamp=m(process.argv[2]);
if(timestamp !== false){
	var data=new Date(timestamp);
	
     var fin=data.getDate()+"-"+(data.getMonth()+1)+"-"+data.getFullYear()+" ";
	 fin+=' '+data.getHours()+":"+data.getMinutes(); 
	 console.log(fin);
}else{
	 console.log("Error file name");
}
