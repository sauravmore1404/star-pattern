const starPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=0;i<num;i++){
      for(let j=0;j<=i;j++){
        string += " * ";
      }
      string += "<br/>"
    }
    return document.getElementById("demo").innerHTML=string
  }