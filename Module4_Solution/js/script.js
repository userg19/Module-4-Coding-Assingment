var jname = new Array();
jname[0] = "Yaakov";
jname[1] = "John";
jname[2] = "Jen";
jname[3] = "Jason";
jname[4] = "Paul";
jname[5] = "Frank";
jname[6] = "Larry";
jname[7] = "Paula";
jname[8] = "Laura";
jname[9] = "Jim";


for (var i = 0; i < jname.length; i++) {
if (jname[i].charAt(0) === 'J') {
   console.log("Good bye " + jname[i]);
 } else {
   console.log("Hello " + jname[i]);
 }
}
