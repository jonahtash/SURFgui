import {PythonShell} from 'python-shell';

function wrap(config, bindings, outUpdate, errUpdate, onEnd) {
	let ret = ['', '']
	let options = {
	  mode: 'text',
	  pythonOptions: ['-u'], // get print results in real-time
		args: [config.target, config.function]
	};
	Object.keys(config.parameters).forEach(function(k){
		options.args = options.args.concat(bindings[config.parameters[k]]);
	});
	let pyshell = new PythonShell(process.cwd()+'/wrappers/python/wrapper.py', options);
	pyshell.on('message', function (message) {
	  // received a message sent from the Python script (a simple "print" statement)
	  outUpdate((message+"\n"));
	});
	pyshell.end(function (err,code,signal) {
  if (err)	{
		errUpdate(err.stack);
	}
	onEnd();
	});
	return (ret);
}

export default wrap;
