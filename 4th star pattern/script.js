const starPattern=()=>{
    let string="";
    let num=document.getElementById("userInput").value;
    for(let i=0;i<num;i++){
      for(let j=0;j<num;j++){
        if(j>=i){
        string += " * ";}else{string += " _ "}
      }
      string += "<br/>"
    }
    return document.getElementById("demo").innerHTML=string
  }