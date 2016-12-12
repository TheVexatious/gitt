# gitt
gitt is a very basic CLI that makes using git easier,


### installation:

1. Clone or download this repository
2. type `npm install` to install all the dependencies
3. type `npm link` so that the CLI commands are available on the command line globally
4. Feel free to test some of the commands. (they really work, so don't try testing this in a repo or you might accidently commit/push your code ( ͡° ͜ʖ ͡°) )

### current available commands:


* >`gitt push [branch]`: pushes the code to the origin specified, if not specified it will be set to master ondefault
>
> cmd command: `git push origin [branch] --force` || `git push origin master --force`

* >`gitt origin [LINK | username/repo]` || `gitt o [LINK | username/repo]`: sets the origin with either the full link or simple just `username/repo`
>
> cmd command: `git remote add origin https://github.com/[username]/[repo]`

* >`gitt deploy "[message]" `: adds all the files and commits with the specified commit message or 'made some changes' as default,
>* **NOTE**: when writing the deploy message, write it in between `"`'s and not `'`'s, eg: `gitt deploy "added the best code ever"` and not `gitt deploy 'added the best code ever'`
>
> cmd command: `git remote add origin https://github.com/[username]/[repo]`


**NOTE**: this repo is mainly just for basic simplicities in breaking down git commands, not for very serious types of functions
