// in-line comment
/* multi-line comment
hi this is the multi-line comment


-----------------------------------------------------------

/* DATA TYPES

we can declare variable by three types: var, let, const.
var can be change but const can't be change

-----------------------------------------------------------------------


/* To printing in javascript
var a = 7;
console.log(a)
----------------------------------------------------------------------------



/* ARITHMATIC OPERATION
var sum = 1 + 5;
var diff = 6 -  2;
var multi = 2 * 2;
var div = 6 / 2;
var quotient = 6 % 2;
console.log(sum, diff, multi, div, quotient);

-------------------------------------------------------

/* Augmented addition 
 var  a = 3;
 a += 12; is same as   a = a + 12; (same for -=, *=, /=)
 console.log(a)

 ------------------------------------------------------------

 /* STRING
 var myname = 'prasid';
 console.log(myname) 


----------------------------------------------------------------
 /* Some feature
//backlash
\n newline 
\r carriage return
\t tab
\b backspace
\f form feed 

 var a = 'prasid \nBhusal \f maya';
 console.log(a)

-------------------------------------------------------------------- 
 /* CONCATENATION OF STRING
 We can concatenate with the + sign
  var x = 'My name is prasid ' + ' Bhusal. I am from pipara kapilvastu '
  console.log(x)

  OR
  var x = 'My name is prasid Bhusal';
  x += ' I am from pipara kapilvastuuu';
  console.log(x)
  
  */

/* Length of the string 
var name = 'Prasid'
console.log(name.length) 

*/

/* first letter
var a ='amy'
console.log(a[0])

*/

/* Changing name, we cant change the specific character
var name = 'prasid'
name = 'Bhusal';
console.log(name)

*/

/* FUNCTION IN JAVASCRIPT
function myname(){
    console.log('Prasid Bhusal')
}
myname();

*/
/*
function myname(a,b){
    console.log(a * b);
}
myname(5,6);
myname(4,3);

*/


/*Global vs local variable
var a = 'prasid'; //Global variable because it is outside the function
function name(){
    var a = 'Bhusal' //Local variable because it is inside the function
    console.log(a)
}
name()
console.log(a)

*/

/* BOOLEAN IN JAVASCRIPT
function boolean(){
    return true;


}
console.log(boolean())

*/

/* IF STATEMENT
function trueorfalse(hey){
    if (hey){ // if automatically no which is  true and which is false
        return 'Yes, that was true'
    }
    return 'No, that was false' //the second sentence is always false
}
console.log(trueorfalse(true))
*/



/* getting the result by putting the value with the equality operator
function testequal(val){
    if(val == 12){
        return 'Equal';
    }
    return 'Not equal'
}
console.log(testequal(12))

*/

/* getting the result with the unequality operator
function testequal(val){
    if(val != 12){
        return 'Equal';
    }
    return 'Not equal'
}
console.log(testequal(12))

*/


/*IF ELSE IF CONDITION IN JAVASCRIPT
function orderlogic(val){
    if(val < 10){
        return 'less than 10';
    }
    else if(val < 5){
        return 'less than 5';
    }
    else{
        return 'greater than or eqaul to 10';
    }
}
console.log(orderlogic(9))
*/

/* SWITCH STATEMENT 
function switchstatement(val){
    var answer = '';
    switch(val){
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'theta'
            break;
        case 4:
            answer = 'delta'
            break;
         

    }
    return answer
}
console.log(switchstatement(4))

*/

// OBJECTS IN JAVASCRIPT
var biodata ={
    'name': 'prasid',
    'age': 20,
    'address': 'lubbock',
    'phone number': 8065593055
}

var namevalue = biodata.name; // METHOD OF GETTING VALUE
var agevalue = biodata.age;
console.log(namevalue);
console.log(agevalue)