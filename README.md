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
The UI configuration is found in `config/programs.csv`. We reccomend that you do NOT use Excel to open this file, instead try Notepad++ or a similar text editor.

### The process
Fill out the these fields for your program<br />
A __\*__ means this value should be surrounded by quotes<br />
*prog_id*: A variable-like name for your program<br />
*prog_label*:  The display text<br />
*prog_desc*: Description text __\*__<br />
*prog_params*: <br />
*wrapper_id*: <br />
*wrapper_conf*: <br />
