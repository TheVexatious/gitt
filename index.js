#! /usr/bin/env node

var argv = require("minimist")(process.argv.slice(2));
var shell = require("shelljs");

var undef = argv._;
var keys = Object.keys(argv).slice(1);

switch(undef[0]){
    case "push":
        if(undef.length == 1) shell.exec("git push origin master --force")
        else shell.exec(`git push origin ${undef[1]} --force`);
        break;
    case "o":
    case "origin":
        if(undef.length == 2){
            if(undef[1].split("").filter(e => e == "/").length == 1){
                var part = undef[1].split("/");
                shell.exec(`git remote add origin https://github.com/${part[0]}/${part[1]}`);
            }else{
                shell.exec(`git remote add origin ${undef[1]}`);
            }
        }else console.log("Wrong syntax!");
        break;
    case "deploy":
        if(undef.length == 2) shell.exec(`git add -A && git commit -m "${undef[1]}"`);
        else shell.exec("git add -A && git commit -m 'made some changes'");
        break;
    default:
        console.log("Wrong syntax!");
}
