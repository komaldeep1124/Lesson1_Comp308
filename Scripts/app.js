
"use strict";
//self executing anonymus function
//IIFE-immidiately invoked finction expression
(function()
{
function Start()
{ let myFuncVari=0;
    console.log(`%c App Started..`,//template string
    "font-size: 20px;color: blue; font-weight:italic;"
    );
 //console.log(`App Started..${myFuncVari}`);//template string
}
//start();(same as below)
window.addEventListener("load",Start);

})();
