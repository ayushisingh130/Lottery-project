(function spinning() {
    var wheel = document.querySelector('.spin-wheel');
    var startButton = document.querySelector('.startbutton');
    let deg = 0;
  
      startButton.addEventListener('click', () => {
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 8s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
    });
  
    wheel.addEventListener('transitionend', () => {
      wheel.style.transition = 'none';
      var actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
  })();
 
  function myfunction(){
    location.reload();
  }
  
   function result(){
      var num =document.getElementById('inputnum').value;

      if (num%3 == 0)
      {
          document.getElementById('win-img').style.display = "block";
          document.getElementById('tryagain').style.display = "block";
          document.getElementById('tryagain').innerHTML = "WIN AGAIN";
      }
  
      else if(num%3 !==0)
      {
          document.getElementById('win-img').style.display = "block";
          document.getElementById('win-img').src = "images/lose.jpg";
          document.getElementById('tryagain').style.display = "block";
      }

      else
      {
          document.getElementById('win-img').style.display = "none";
          document.getElementById('tryagain').style.display = "none";
      }
   }

   