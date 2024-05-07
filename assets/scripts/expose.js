// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init()
{
  const horn = document.getElementById("horn-select");
  
  horn.addEventListener("change", function()
  {
    if(horn.value == "air-horn")
    {
      document.querySelector("[alt='No image selected']").src = 'assets/images/air-horn.svg';
      document.querySelector(".hidden").src = 'assets/audio/air-horn.mp3';
    }
    if(horn.value == "car-horn")
    {
      document.querySelector("[alt='No image selected']").src = 'assets/images/car-horn.svg';
      document.querySelector(".hidden").src = 'assets/audio/car-horn.mp3';
    }
    if(horn.value == "party-horn")
    {
      document.querySelector("[alt='No image selected']").src = 'assets/images/party-horn.svg';
      document.querySelector(".hidden").src = 'assets/audio/party-horn.mp3';
    }
  })

  const volumelevel = document.getElementById("volume");
  document.querySelector(".hidden").volume = 0.5;

  volumelevel.addEventListener("input", function()
  {
    if(volumelevel.value == 0)
    {
      document.querySelector("[alt='Volume level 2']").src = 'assets/icons/volume-level-0.svg';
    }
    if(1 <= volumelevel.value && volumelevel.value < 33)
    {
      document.querySelector("[alt='Volume level 2']").src = 'assets/icons/volume-level-1.svg';
    }
    if(33 <= volumelevel.value && volumelevel.value < 67)
    {
      document.querySelector("[alt='Volume level 2']").src = 'assets/icons/volume-level-2.svg';
    }
    if(67 <= volumelevel.value)
    {
      document.querySelector("[alt='Volume level 2']").src = 'assets/icons/volume-level-3.svg';
    }
    document.querySelector(".hidden").volume = volumelevel.value / 100;
  })

  const button = document.querySelector("button");

  button.addEventListener("click", function() 
  {
    document.querySelector(".hidden").play();

    if(horn.value == "party-horn")
    {
      jsConfetti.addConfetti();
    }
  })
}