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

| Name          | Description                           |Quoted|
| ------------- |:-------------------------------------:|-----:|
| *prog_id*     | A variable-like name for your program | No   |
| *prog_label*  | Program display name                  | Yes  |
| *prog_desc*   | Text describing program               | Yes  |
| *prog_params* |A list of JSON dictionaries describing parameters. See [this](#specials)| Yes  |
| *wrapper_id*  | Name of wrapper. See [wrappers](#wrappers)                    | No   |
| *wrapper_conf*| A config JSON. see  [this](#specials)                         | Yes  |
