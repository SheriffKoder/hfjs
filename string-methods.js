

console.log("//////////////////");
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//// localeCompare, returns a value based on a/b precedence

//localeCompare(compareString, locales, options);

// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1


const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
console.log(items);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//eval executes a string calculation
//should not be used in security because it exposes code
let x = 10;
let y = 20;
let text11 = "x + y";
let result = eval(text11);


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//match() returns number of occurances

let text2 = " here we are here";
let result2 = text2.match(/ere/g); //search global or gi case-insenstive
console.log(result2);

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//str1.padEnd(25, '.');
// expected output: "Breaded Mushrooms........"

//console.log(str2.padEnd(5));
// expected output: "  200" total string length is 5, spaces placed by default

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//let new_text = text3.repeat(2); //returns the text repeated n times


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/* returns new string with all matches of pattern/string/RegExp
*/

//p = "quickly jump over the box of the box";

//console.log ( p.replaceAll('box','box2') ); 

//console.log ( p.replace('box','box2') );  //first occurrence only

//console.log ( p.search("ui"));  //search beginning of string


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


//takes a string and output a string
//let string2 = string.valueOf();

//let text = String.fromCharCode(65);   //outputs A
//let result = text.includes("world"); //returns true if found

/*////////////////////////////////////////////////////////////////////*/

//Wrapper Methods
//better use concatenate tags it may not be supported in future versions

//methods output the string as an html element to be used in innerHtml

//anchor, link
//big
//blink, 
//bold, 
//fixed <tt>,
//font color  <font color="red"></font>, 
//font size
//italics <i> </i>
//small
//strike
//sub
//sup


let text2210 = "Hello world";
let text22102 = text2210.sup("red");
//console.log(text22102);




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*//*
                            HTML DOM EVENTS
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/





//media loading issues : onabrot, onerror, onsuspend
//.afterprint

//on-canplay    //when browser has buffered media and ready to play it
//on-canplaythrough     //without stopping for buffering, fully loaded

//media onerrors
// onabrot, onemptied, onstalled, onsuspend



/*////////////////////////////////////////////////////////////////////*/
//Css animation related 

//  .animationstart, .animationiteration, .animationend

//onclick this function

let myDiv2410 = document.getElementById("animation_event");

myDiv2410.addEventListener("click", clickFunction);

function clickFunction (para) {
    
    let myDivHere = para.target;
    myDivHere.style.animation = "animation1 2s 2";


    myDivHere.addEventListener("animationstart", startFunction );
    myDivHere.addEventListener("animationiteration", repeatFunction );
    myDivHere.addEventListener("animationend", endFunction );


    function startFunction () {
        myDivHere.style.background = "red";
        myDivHere.style.color = "white";

    }

    function repeatFunction () {
        myDivHere.style.background = "red";
        myDivHere.style.color = "lime";

    }

    function endFunction () {
        myDivHere.style.background = "purple";
        myDivHere.style.color = "grey";

    }

}

/*////////////////////////////////////////////////////////////////////*/


//before print, about to be printed

//before unload, before the document becomes unloaded, custom message
    //<body onbeforeunload="return unloadfunction();">

    function unloadfunction () {
        return "message here will be displayer only in IE else default";
    }



    //onfocus, onblur/onfocusout
    //onfocusin (about to get focus)




/*////////////////////////////////////////////////////////////////////*/

//onchange, for selection/checked inputs
//click
//contextmenu, right click, firefox has a contextmenu attribute to be edited
//oncopy
//oncut
//dblclick
//drag


//drag start, drag end
//drag over
//drop
//drag


//drag leave
//drag enter
//



//ondragstart
function drag_start (event) {
    event.dataTransfer.setData("Text", event.target.id);
}


//ondragover
function on_drag_over (event) {
    event.preventDefault(); //prevents element to appear on div1 ?
}


//ondrop
function on_drop (event) {
    event.preventDefault(); //prevents element to appear on div1 ?

    let data =   event.dataTransfer.getData("Text");
    
    event.target.appendChild(document.getElementById(data)); //append div with text?

    document.getElementById("demo").innerHTML = "The Element was dropped";


}

/*misc*/
//ondrag
function on_drag (event) {
    document.getElementById("demo").innerHTML = "the element is being dragged";
}


function dragEnter (event) {

    if (event.target.className == "droptarget") {
        document.getElementById("demo2").innerHTML = "entered drop zone";
        event.target.style.border = "3px dotted red";
    }
}


function dragLeave (event) {

    if (event.target.className = "droptarget" ) {
        document.getElementById("demo2").innerHTML = "left drop zone";
        event.target.style.border = "";
    }

}



/* explanation: send the id, take the id, append that element */
/*
para.dataTransfer.setData("Text", para.target.id); //dataTransfer the id of type text

let DataReceived_id = para.dataTransfer.getData("Text");  //get the data of the type text
let DataReceived = document.getElementById(DataReceived_id); // data is an id so get the element of this id
para.target.appendChild(DataReceived_id);
*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

// Media

//when the total duration of video changes i.e from 0 to loading the duration
videoName.ondurationchange = function {};
audioName.onended = function ();


/*////////////////////////////////////////////////////////////////////*/
/* fullscreen, does not work, also has editions for each browser*/

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();

    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();

    }
  }


  var output = document.getElementById("demo");

  document.addEventListener("webkitfullscreenchange", function() {
    output.innerHTML = "webkitfullscreenchange event fired!";
  });

  
  document.addEventListener("fullscreenerror", function() {
    alert("Fullscreen denied");
  });

  document.addEventListener("mozfullscreenerror", function() {
    alert("Fullscreen denied");

  });


console.log("//////////////////");


/*////////////////////////////////////////////////////////////////////*/


/* add event on hash change 

html <body onhashchange="myFunction()">
html <button onclick="changeHash()"> Try it </button>

*/

function myFunction () {
    alert("anchor part has changed");
}


window.location.hash = "part5";

function changeHash() {
    location.hash = "part5";
    x = location.hash;
    document.getElementById("demo").innerHTML = "Anchor now is " + x;
}

//////////


const hashUpdate = document.getElementById('hash-update-p');

window.addEventListener("hashchange", function () {
        //alert("the hash has been changed");
        hashUpdate.textContent = window.location.hash.substring(1); //after#
});



/*////////////////////////////////////////////////////////////////////*/

/*
x.parentNode.nodeName
document.body.childNodes
//nodes are elements, text, comments, whitespaces

children are elements, but nodes contains elements, text, comment, whitespaces

.parentNode
.childNodes //list of child nodes   //can loop on them
    .firstChild, .lastChild,
.nextSibling, .previousSibling

element.hasChildNodes();    //true if it has children
element.removeChild

x.nodeName
x.nodeType, 1(element), 2(attribute), 3(text), 8(comment)
x.nodeValue





innerHTML, including all spacing and inner HTML Tags
innerText, just the text content of the element and its children, no css tags
textContent, text content of element and children, with spacing/css but without tags


const foo = null ?? "default string " //default string
returns the right hand side operand 
if the left hand side is null or undefined
otherwise returns the left




*/



