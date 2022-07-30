<script type="text/javascript">

var timer_1;
var Henka = 0;
myColor = new Array(
"ffffff","fffaf7","fff5ee","fff0e6","ffebdd",
"ffe5d5","ffe0cc","ffdbc4","ffd6bb","ffd1b3",
"ffccaa","ffc7a2","ffc299","ffbd91","ffb888",
"ffb280","ffad77","ffa86f","ffa366","ff9e5e");
function Hyooji(){
Henka++;
document.getElementById("subProfile").style.color = myColor[Henka];
setTimeout("Hyooji()",1000);
if(henka > 19){clearTimeout( timer_1);
}
}
  </script>
