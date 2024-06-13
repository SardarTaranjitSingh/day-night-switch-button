function changeWidth(width) {
  document.documentElement.style.setProperty('--switch_width', width + 'px');
}

document.addEventListener("DOMContentLoaded", () => {
  const switchWidth = document.querySelector('.switch_wrpr').getAttribute('switch_width');
  if (switchWidth) {
    changeWidth(switchWidth);
  }
});

document.querySelector('.switch_width_changer').addEventListener('input', (event) => {
  const newWidth = event.target.value;
  if (newWidth) {
    changeWidth(newWidth);
  }
});