var name = "Mohammed";
var can = 'developer|designer|cse'.split('|');
var age = Math.abs(new Date(Date.now() - new Date("08/03/2004").getTime()).getUTCFullYear() - 1970);  

export { name, can, age };
// name not working!!!