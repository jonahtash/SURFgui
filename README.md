# SURFgui

A UI that allows researchers to run functionality from software libraries.

### Features
* Run code in any language
* Add/remove programs without modifying source code
* Load pre-set parameter configurations
* Save program output to a log file
### Setup
__Windows__: run `setup.bat`<br />
__Anything else__:
```
npm install
npm install -g electron-forge
```

## Usage
To launch on...

__Windows__: run `start.bat`<br />
__Anything else__: `electron-forge start`

## Adding Programs
SURFgui allows users to add programs to the interface without editing this repo's source.
The UI configuration is found in `config/programs.csv`. We recommend that you do NOT use Excel to open this file, instead try Notepad++ or a similar text editor.

### The process
Fill out the these fields for your program<br />
Fields are joined using the __@__ character. Quoted fields are surrounded by __"__ double quotes __"__ <br />

| Name          | Description                           |Quoted|
| ------------- |:-------------------------------------|:-----:|
| *prog_id*     | A [variable-like](#variables) name for your program  |    |
| *prog_label*  | Program display text                  | X  |
| *prog_desc*   | Short program description             |X  |
| *prog_params* | A list of JSON dictionaries describing parameters. See [special fields](#Special-fields)| X  |
| *wrapper_id*  | Name of wrapper. See [wrappers](#wrappers)                    |    |
| *wrapper_conf*| A config JSON. See  [special fields](#Special-fields)                         | X  |

## Special fields
__prog_params__: Use this field to describe your program's inputs (parameters to a function).
* _id_: A [variable-like](#variables) name for the parameter
* _label_: Display text for parameter input field
* _desc_: Additional help text
* _type_: Describes what the parameter represents and provides the corresponding selector. Currently supported types:
	* string- just text
	* file- a singular file path
	* folder- a directory path
	* table- a database table, _desc_ field should be set to comma-separated list of columns
* _direction_: `in`, `out` or [`flag`](#flags) expressing that the parameter is input, output or optional

__Example__:\
`[{'id' : 'input_data_txt', 'label': 'Input Data TXT File', 'desc' : 'A .txt file with data to be processed', 'type' : 'file', 'direction':'in'}, {...}]`

__wrapper_conf__: Defines configuration for run environment. Note this can vary from wrapper to wrapper. The following is the configuration for the Python wrapper.
* _target_: Name of .py file in `wrappers/python/`
* _function_: Name of function to run in _target_ .py file
* _parameters_: Dictionary mapping parameter _id_ values to the names of the Python function parameters

__Example__:\
`{'target':'run_data.py', 'function':'execute_data_analysis', 'parameters': {'input_data_txt':'input', ...}}`

## Flags
Flags allow users to configuration optional parameters. In general, users should not modify a flag if they don't know what it does. Flags can allow users to set keyword arguments, or somehow modify program execution. Flags can be set by pressing the flag icon on the right-hand side of the parameter configuration panel.

## Wrappers
Wrappers allow SURFgui to execute code written in any language.
To add a new language/ new way to execute code create a directory in `wrappers/`.The name of this folder is the *wrapper_id* for your new wrapper.
The only requirement for a wrapper is a file `wrapper.js` in the wrapper directory. This .js function must implement the function
```javascript
wrap(config, bindings, flags, outUpdate, errUpdate, onEnd)
```
where each parameter represents
* _config_: __wrapper_conf__ JSON
* _bindings_: A JSON mapping the name of a parameter its value
* _flags_: A JSON mapping the name of any active to flags to their values
* _outUpdate_: A callback that should be called with string STDOUT when available
* _errUpdate_: A callback that should be called with string STDERR when available
* _onEnd_: A callback that should be called once execution is complete

Note: _outUpdate_, _errUpdate_, _onEnd_, have already been implemented and will be passed to `wrapper.js`. `wrapper.js` only needs to call these functions at the appropriate time.

## Default configurations
SURFgui allows users to load pre-set parameter configurations for a given program. To set up these configurations for a program, create the file `config/programs/`*`prog_id`*`.csv` where `prog_id` is the value assigned to the program in `config/programs.csv`. *`prog_id`*`.csv` should have the following fields

* _id_: A [variable-like](#variables) name for the configuration
* _label_: The display text for the configuration
* _param id 1_: The id for the first parameter of the program as defined in __prog_params__
* _param id 2_: The id for the second parameter of the program as defined in __prog_params__
* _param id ..._: etc..

## Misc.

### Variable-like <div id="variables"></div>
A variable-like name contains only letters, nubers and the __\___ (underscore) character, the preferred style of a variable-like name is combined_lowercase_with_underscores.


Developed for 2019 NIST SURF Program by Jonah Tash
