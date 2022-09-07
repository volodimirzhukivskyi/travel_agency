const menu = document.querySelector(".menu");
menu.addEventListener("click", (e) => {
  let searchList = null;
  if (e.target.closest("#tour")) {
    searchList = ".benefits-list--small";
  } else if (e.target.closest("#benefits")) {
    searchList = ".benefits-list--big";
  }
  if (searchList === null) return;
  const currentUl = document.querySelector(searchList);

  currentUl.classList.contains("hide-header-block")
    ? currentUl.classList.remove("hide-header-block")
    : currentUl.classList.add("hide-header-block");
});
