#! /usr/bin/env node
var fs = require("fs");
var exec = require("child_process").exec;
var paths = fs.readFileSync("path.data").toString();
var child = new Array();

paths = paths.split("\n");
for(var i = 0; i < paths.length; i++)
	child[i] = exec('forever start ' + paths[i], function(err,stdout,strerr){
		console.log(stdout);
	});