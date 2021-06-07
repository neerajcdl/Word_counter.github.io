let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){
    let text = this.value;
    let char =  text.length;
    document.getElementById("char").innerHTML = char;
     

    text = text.trim();
    let words = text.split(" ");
    let clearList = words.filter(function(element){
        return element != " ";
    });
    document.getElementById("word").innerHTML = clearList.length;
});


      
                     /* yha phle character ke code ko smjhte hai */ 


               /*      sab se phle maine us text box ki id ko get kiya or use ek    variable me rakh liya or fir maine add Event listener use kiya, ye value get karne ke liye use hota hai.
                     ab jo variable me us textbox ko get kar ke rakh liya tha ab usi par hum target krenge,
                     eske ander input jo hai wo hai ke addEventListener se kya krwana chahte hai to hum es se abhi input get karwana chahte hai eski ke ander humne ek anonymous function (jis function ka koi name na ho) bnaya esi ke ander wo sare kam krenge jo us input lene se related hoga.....eske ander humne sab se phle ek variable liya 'text' name se use asign kar diya es textbox ki value jo ki humne aabhi es function ke bahar bnaya tha (this keyword esi liye use hua hai) ab humne ek or variable liya or usme humne 'text' variable ke ander jo store kiya hai wo humne length get kar ke rakh li,
                    
                     ab us id ko get krenge jise hume use text.length wala variable asign krenge jo ki hai 'char'  or char hi humara character ka bhi ID hi.    kam ho gya character ka.   */                  


                /*  ab word ki code ko samjhe hai-------------- 

                 ( 1.)   word ki baat kre to sab se phle hume ye samjhne ki jarurat hai ki esko count kaise kre to jab bhi koi character ke baad use koi space mile to wo whi se use todd de to eske liye hum yha par use krenge split function (" es split funciton ko hum btayenge ki kis se todna hai to hume space se todna hai to wha parameter me space de denge") essa kren maatar se ye  us text ko har space se todd kar array bna ke words name ke variable me store kar dega. fir aap usse length se uski value get krenge. use liye phle hum word ke ander es words variable ko store karne ke liye use get krna hoga uske liye hum phle document.getElementById se id ko get kr lenge jo ki hai ("word") for uska innerHTML set krenge uske liye yha ya ek variable lo or usse asign kro uss text.length ki value or uss variable ko set kro es innerHTML me. yaaaa fir direct uss variable ko target karo jis me store hai split ("words") use length get kro ("words.length").......yha tak sirf 25% problem solve hui hai.......  */

                /*    ( 2.)     ab problem kya aayegi wo smjhte hai kyuki ye space ko bhi count krta hai to phle first or last se space ko htane ke liye ye    method hai "trim" name se eska use krenge. character me hum eska use nhi kar skte the kyuki wha se character me bhi count krwana tha lekin yha par esse use kar lenge lekin yha esse starting or endding se trim kr denge eske liye ussi text-variable ko trim kr lenge or text naam ke variable me hi esse store bhi kr lenge ("text = text.trim()")...........yha tak bhi abhi 50% hi problem solve hui hai.  */
           

                    
                /*  ( 3.)      ab kyuki sirf stating or endding se space to htaya gya hai ab ander se bhi space ko htane ke liye hum use krenge filter funciton.....esse use krne ka tarika smjhte hai sab se phle ek variable lenge ('clearList') fir us variable ko target krenge jis me ye split kiya hua function hai ('words') uska use krenge or us par ye filter function lga denge or es filter me ek anonymous function bnayenge or esi funciton me ek parameter pass krenge ('element') ab es funciton ke ander hume return karna hoga....kya return? to wo element (parameter) or esko not ke sath btayenge or equal space...khne ka matlab hai sirf wo hi cheez hume do jo space naa ho  */