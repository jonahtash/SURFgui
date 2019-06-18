const { spawn } = require('child_process');

function wrap(config, bindings, flags, outUpdate, errUpdate, onEnd) {


	let options = ["/C", "D:/conda3/Scripts/activate.bat", "D:/conda3", "&", "python", "-u", "./wrappers/conda/wrapper.py", config.target, config.function];

	Object.keys(config.parameters).forEach(function(k){
		if (bindings[config.parameters[k]]) {
			options.push(bindings[config.parameters[k]]);
		}
	});
	Object.keys(flags).forEach(function(k){
		if(flags[k]) {
			console.log('FLAG::'+k+'='+flags[k]);
			options.push('FLAG::'+k+'='+flags[k]);
		}
	});

	console.log(options)
	let shell = spawn("cmd.exe", options);

	shell.stdout.on('data', function (message) {
	  outUpdate((message.toString()+"\n"));
	});
	shell.stderr.on('data', function(err) {
		errUpdate(err.toString());
	});
	shell.on('exit', function (code) {
		console.log("end");
		console.log(code)
		onEnd();
	});
	return (1);
}

export default wrap;
