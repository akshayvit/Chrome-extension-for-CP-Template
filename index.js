
function  copy() {
if (document.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("code"));
  //  alert(document.getElementById("code").innerText);
    document.getSelection().addRange(range);
    document.execCommand("copy");
  }
   else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById("code"));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
} 
document.querySelector("button").onclick=copy();