const Color = require("color");

//Generate random colors

const color = Color("#7743CE").alpha(0.5).lighten(0.5);

const singleColor = color.hsl().toString();

console.log(singleColor);

// NPM
// helps us install and manage node.js packages required in app

/* 
repository / community (modules) not part of core node modules

npm has local and global modes

glb affects all node.js applications

local install advisable

npm i color 
npm i -D color (Dev dependencies dev env only)


server accepts req fr clients sends responses

reqa
client req -- server process --> sent req to database

resp 
databse --> response to server -- > client

*/
