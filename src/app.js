window.onload = () => {
  //randomUsergn();
   
  showTime();

const randomUsergn = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) =>  showRandomUserdata(data)
    );
};

const showRandomUserdata = (randomUser) => {
  document.getElementById(
    "name"
  ).innerText = `${randomUser.results[0].name.title} ${randomUser.results[0].name.first} ${randomUser.results[0].name.last}`;
  document.getElementById(
    "dob"
  ).innerHTML = `${randomUser.results[0].dob.date}`;

  document.getElementById("email").innerText = `${randomUser.results[0].email}`;

  
//   document.getElementById(
//     "img"
//   ).innerText = `${randomUser.results[0].picture.medium}`;
document.getElementById("addr").innerText = `${randomUser.results[0].location.city}, ${randomUser.results[0].location.state},(${randomUser.results[0].location.country})`;

};

document.getElementById("btn").addEventListener("click", randomUsergn);

};

// code for clock

function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();


