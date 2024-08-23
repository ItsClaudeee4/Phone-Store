const menus = document.getElementById("ul");
const bar = document.getElementById("bar");

bar.addEventListener("click", () => {
  menus.classList.toggle("menus");
  console.log("clicked");
});
