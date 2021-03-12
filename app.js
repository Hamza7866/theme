const themeSwitcher = document.querySelector("#themeSwitcher");

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position);
});

const defaultTheme = localStorage.getItem("theme") || "theme-light";

console.log(defaultTheme);

setTheme(defaultTheme);

const timeChange = (themeValue) => {
  const date = new Date().toLocaleTimeString();
  console.log(date);
};

themeSwitcher.addEventListener("change", (e) => {
  const themeValue = e.target.value;
  setTheme(themeValue);
  timeChange(themeValue);
});

function setTheme(themeValue) {
  themeValue = themeValue || "theme-light";
  document.documentElement.className = themeValue;
  localStorage.setItem("theme", themeValue);
  themeSwitcher.value = themeValue;
}
