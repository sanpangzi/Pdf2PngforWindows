var pdf2png = require("./lib/pdf2png.js");
var fs = require("fs");

var projectPath = __dirname.split("\\");
projectPath.pop();
projectPath = projectPath.join("\\");

var gsPath = projectPath + "\\executables\\ghostScript";

// Rewrite the ghostscript path
pdf2png.ghostscriptPath = gsPath;

// Most simple example
pdf2png.convert(__dirname + "/example.pdf", function(resp){

	if(!resp.success){
		console.log("Something went wrong: " + resp.error);
		
		return;
	}
	fs.writeFile("test/"+resp.imgNum+".png", resp.data, function(err) {
		if(err) {
			console.log(err);
		}
	});
});
