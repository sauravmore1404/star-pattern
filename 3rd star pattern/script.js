const starPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=num;i>0;i--){
      for(let j=1;j<=num;j++){
        if(j>=i){
        string += " * ";}else{string += " _ "}
      }
      string += "<br/>"
    }
    return document.getElementById("demo").innerHTML=string
  }