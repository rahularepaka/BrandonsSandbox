// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.getElementsByClassName("header-container")[0];
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.style.height = "3rem";
    header.style.backgroundColor = "var(--offset-background-color)";
  } else {
    header.style.height = "6rem";
    header.style.backgroundColor = "var(--background-color)";
  }
}

window.onload=function() {
  document.getElementById("content-container").style.opacity = 1;
};

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);