function submit(){
    let isValid=true;
    const txt=document.getElementById("text").value.trim();
    const em=document.getElementById("email").value.trim();

 document.getElementById("text").classList.remove("error");
 document.getElementById("email").classList.remove("error");

//   if (txt.lenght<3){
//     alert("Data to small");
//     return;
//   }
  if(!/^[A-Za-z\s]+$/.test(txt)||txt.lenght<3)
    {  document.getElementById("text").classList.add("error");
    //  alert("incalid input");
    isValid=false;
  }

  if(!/^[A-Za-z\d._]+@(gmail|yahoo|outlook|hotmail)$/.test(em)||em.lenght<9)
    { document.getElementById("email").classList.add("error");
    //  alert("incalid input");
    isValid=false;
  }
  console.log(txt,em);
  document.getElementById("text").value="";//erase all the data from input feild
  document.getElementById("email").value="";
}