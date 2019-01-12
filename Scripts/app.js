
"use strict";
//self executing anonymus function
//IIFE-immidiately invoked finction expression
(function()
{
function Start()
{ let myFuncVari=0;
    console.log(`App Started..${myFuncVari}`);
}
window.addEventListener("load",Start);

})();
