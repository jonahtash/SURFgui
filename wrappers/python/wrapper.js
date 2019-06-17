import {PythonShell} from 'python-shell';

function wrap(config, bindings, flags, outUpdate, errUpdate, onEnd) {
	let ret = ['', '']
	let options = {
	  mode: 'text',
	  pythonOptions: ['-u'], // get print results in real-time
		args: [config.target, config.function]
	};
	Object.keys(config.parameters).forEach(function(k){
		if (bindings[config.parameters[k]]) {
			options.args = options.args.concat(bindings[config.parameters[k]]);
		}
	});
	Object.keys(flags).forEach(function(k){
		if(flags[k]) {
			console.log('FLAG::'+k+'='+flags[k]);
			options.args = options.args.concat('FLAG::'+k+'='+flags[k]);
		}
	});
	let pyshell = new PythonShell(process.cwd()+'/wrappers/python/wrapper.py', options);
	pyshell.on('message', function (message) {
	  // received a message sent from the Python script (a simple "print" statement)
	  outUpdate((message+"\n"));
	});
	pyshell.on('stderr', function(err) {
		errUpdate(err);
	});
	pyshell.end(function (err,code,signal) {
		onEnd();
	});
	return (ret);
}

export default wrap;
