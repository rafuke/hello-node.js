// last-mod.js
var fs=require('fs');
module.exports=function(fileName){
        if( fs.existsSync(fileName)){
			var stat=fs.statSync(fileName);
		return stat.mtime;
		}
		return false;
}

