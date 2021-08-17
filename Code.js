var Char = [];
var Output = "";

doc=(id)=>document.getElementById(id);

Char[0]="<br>"
Char[1]="3"
Char[2]="5"
Char[3]="2"
Char[4]="7"
Char[5]="1"
Char[6]="4"
Char[7]="8"
Char[8]="0"
Char[9]="6"
Char[10]="q"
Char[11]="w"
Char[12]="e"
Char[13]="r"
Char[14]="t"
Char[15]="y"
Char[16]="u"
Char[17]="i"
Char[18]="o"
Char[19]="p"
Char[20]="a"
Char[21]="s"
Char[22]="d"
Char[23]="f"
Char[24]="g"
Char[25]="h"
Char[26]="j"
Char[27]="k"
Char[28]="l"
Char[29]="z"
Char[30]="x"
Char[31]="c"
Char[32]="v"
Char[33]="b"
Char[34]="n"
Char[35]="m"
Char[36]="?"
Char[37]="+"
Char[38]="-"
Char[39]="×"
Char[40]=":"


main=()=>{
  
var docM = doc("main");
var docO = doc("output");
var detT = 0;
var binN = [];
var loop = 0;
binN[0]  = 0;
binN[1]  = 10;
binN[2]  = 20;
binN[3]  = 30;
binN[4]  = 40;
/*
binN[5]  = 5;
binN[6]  = 6;
binN[7]  = 7;
binN[8]  = 8;
binN[9]  = 9;
*/


docM.style.color="white";
docM.style.top="-90px";
docM.style.position="absolute";
docO.style.fontFamily="cursive";
docO.style.fontWeight="bold";
  var loops = setInterval(()=>{
    if(docM.innerText.charAt(detT)=="¿"){
      docO.innerHTML=docO.innerText+Char[binN[loop]];
      binN[0]  = 0;
      binN[1]  = 10;
      binN[2]  = 20;
      binN[3]  = 30;
      binN[4]  = 40;
      console.log(Char[binN[loop]])
      console.log("succes ::¿::")
    }else if(docM.innerText.charAt(detT)==">"){
      loop++
      console.log("succes ::>::")
    }else if(docM.innerText.charAt(detT)=="<"){
      loop--
      console.log("succes ::<::")
    }else if(docM.innerText.charAt(detT)=="."){
      binN[loop]++
      console.log("succes ::.::")
    }else if(docM.innerText.charAt(detT)==" "){
      console.log("succes :: ::")
    }else{
      clearInterval(loops)
    }
      detT++
  },2)
}


main()


