function navBar() {
  const x = document.getElementById("MyMenu");
  const y = document.getElementById("MyTopnav");
  const z = document.getElementById("Title")
  const b = document.getElementById("AboutMe")
  x.classList.toggle('responsive');
  y.classList.toggle('responsive');
  z.classList.toggle('responsive');
  b.classList.toggle('responsive');
  /*if (y.className.contains('responsive')) {
    document.getElementById("TopHalf").style.display = 'none';
  } else {
    document.getElementById("TopHalf").style.display = 'block';
  }*/
  if (y.className.contains('responsive')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}


