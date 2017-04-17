# LearnRedux

PHPStorm Setup:
- Duplicate directory structure from 'ReactBoilerplate3' to [projectname]
- Rename project. (File > Rename Project)
- Refactor project name. (Project Tab > [right click on projectname] > Refactor > Rename > Rename Project)

Git setup:
- Go to https://github.com/pagefusionux
- Create new repository [projectname]
- In [projectname] directory:
  - `$ rm -rf .git`
  - `$ git init`
  - `$ git add -A`
  - `$ git commit -m 'Initial commit.'`
  - `$ git remote add origin https://github.com/pagefusionux/[projectname].git`
  - `$ git push -u origin master`

Setup npm package requirements as specified in packages.json:
- `$ npm install`

Start express server (have following processes running concurrently):
- (open tab): `$ webpack -w`
- (open tab): `$ node server.js`
- Go to: localhost:3000

---
Udemy Tutorial:
https://www.udemy.com/the-complete-react-web-app-developer-course
