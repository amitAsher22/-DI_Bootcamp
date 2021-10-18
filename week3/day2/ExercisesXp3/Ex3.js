function volume_sphere()
 {
  let volume;
  let radius = document.getElementById('radius').value;
  console.log(radius);
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 } 

//  let p = document.createElement("p")
//  let form = document.getElementById('MyForm')
//  p.innerHTML = volume_sphere()
//  form.appendChild(p)

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;