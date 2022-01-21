function clockTime(){
      var date = new Date();
      var min = date.getMinutes();
      var hr = date.getHours();
      var sec = date.getSeconds();
      var time = document.querySelector('.time');
      if ( hr < 10){
            time.innerHTML = `0${hr}:${min}:${sec}`;
      }else if (min < 10  && sec < 10){
            time.innerHTML = `${hr}:0${min}:0${sec}`;
      }else if(hr < 10 && min < 10 && sec < 10){
            time.innerHTML = `0${hr}:0${min}:0${sec}`;

      } else {

            time.innerHTML = `${hr}:${min}:${sec}`;
      }
}

setInterval(clockTime,800);