function table(){
    var a = document.getElementById("number").value;
    if(a === ""){
        alert("Enter a number")
    }else{
        for(var h = 1; h <= 10; h++){
            document.write(a + " " + "*" + " " + h + " "+ "=" + " " + a * h + "<br>")
        }        
    }
}
