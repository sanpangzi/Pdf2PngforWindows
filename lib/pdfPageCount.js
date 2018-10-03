var exec = require('child_process').exec;
var filesource = require('filesource');

var initialized = false;

// Add Ghostscript executables path
var projectPath = __dirname.split("\\");
projectPath.pop();
projectPath = projectPath.join("\\");

exports.ghostscriptPath = projectPath + "\\executables\\ghostScript";

// for linux compability
exports.ghostscriptPath = exports.ghostscriptPath.split("\\").join("/");

exports.count = function() {
	var filepathOrData = arguments[0];
	var callback = arguments[1];
	var options = {};
	
	var tmpFileCreated = false;
	
	if(arguments[2] != null)
	{
		options = arguments[1];
		callback = arguments[2];
	}
	
	if(!initialized)
	{
		if(!options.useLocalGhostscript)
		{
			process.env.Path += ";" + exports.ghostscriptPath;
		}
		
		initialized = true;
	}
	
	filesource.getDataPath(filepathOrData, function(resp){
		if(!resp.success)
		{
			callback(resp);
			return;
		}
		
		var cmd = 'gs -q -dNODISPLAY -c "(' + resp.data.replace(/\\/g, "/") + ') (r) file runpdfbegin pdfpagecount = quit"';
		
		exec(cmd, function (error, stdout, stderr) {
			// Remove temp files
			resp.clean();
			
			if(error !== null)
			{
				//console.log("Error reading pdf: " + error);
				callback({ success: false, error: "Error reading pdf: " + error });
				return;
			}
			
			// Remove line break (\n) at the end
			var pageCount = stdout.substr(0, stdout.length - 1);
			
			callback({ success: true, data: pageCount });
		});
	});
};