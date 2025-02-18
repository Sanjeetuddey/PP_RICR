const URL = "https://api.chucknorris.io/jokes/random";

async  function getJokes(){
      const resolve = await fetch(URL);
      const  data= await resolve.json();

      console.log(resolve);
      console.log(data);

      document.getElementById("icon2").src=data.icon_url;
      document.getElementById("text1").innerHTML=data.value;
}


