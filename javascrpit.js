let spinCount = 0;
let [xx, yy] = [1024, 9999]; // [min, max]
let win = ["Fatima", "Beatriz", "Hanna", "Charles", "Eric", "Diya", "Gabriel", "Diya"];





document.querySelector('.spin').addEventListener('click', spin);

function spin() {
  if (spinCount > 3) {
    alert("No more spins.");
    return false;
  }
  let deg = Math.floor(Math.random() * (xx - yy)) + yy;
  let deg_off = (deg % 360) - 21;
  let widx = Math.floor((deg_off / 45));
  widx = (0 <= widx) ? widx : 7;

  document.getElementById('box').style.transform = `rotate(${deg}deg)`;
  let mainbox = document.getElementById('mainbox');
  mainbox.classList.remove('animate');

  setTimeout(function() {
    mainbox.classList.add('animate');
    document.getElementById("winnings").textContent 
      = `Congratulations, you've won ${win[widx]}`;
  }, 5000); //5000 = 5 second

  spinCount++;
}