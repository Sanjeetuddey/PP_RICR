function sub(){
    let isValid=true;
    const txt = document.getElementById("text1").value.trim();
    const em = document.getElementById("email1").value.trim();
    const pas = document.getElementById("pass1").value.trim();
    const gn=document.querySelector("input[name=gander]:checked").value;

    // const rd = document.getElementById("ip1").value();

    document.getElementById("text1").classList.remove("error");
    document.getElementById("email1").classList.remove("error");
    document.getElementById("pass1").classList.remove("error");
   // document.querySelector("input[name=gander]:checked").classList.remove("error");
    
    

    if(!/^[A-Za-z/s]+$/.test(txt)||txt.lenght<3){
        document.getElementById("text1").classList.add("error");
        let isValid=false;   
    }

    if(!/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail).(com|in|co.in)$/.test(em)||em.lenght<9){
        document.getElementById("email1").classList.add("error");
        let isValid=false;
    }

    if(pas.lenght<5){
        document.getElementById("pass1").classList.add("error");
        let isValid=false;
    }


    // if(!/^[A-Za-z/s]+$/.test(rd)){
    //     document.get("radio").classList.add("error");
    //     let isValid=false;
    // }

    console.log(txt,em,pas,gn);
    document.getElementById("text1").value="";//erase all the data from input feild
    document.getElementById("email1").value="";
    document.getElementById("pass1").value="";
    document.getElementById("ip1").value="";

// document.querySelectorAll(".ip1").forEach((element)=>{
//         element.value="";
//     });    


    // if(!/^[A-Za-z\s]+$/.test(txt)||txt.lenght<3)
    //     {  document.getElementById("text").classList.add("error");
    //     //  alert("incalid input");
    //     isValid=false;
    //   }

}