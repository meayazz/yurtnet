const app = document.getElementById("app");

const routes = {
  "/login": "pages/auth/login.html",
  "/home": "pages/home/home.html",
  "/talebe": "pages/talebe/index.html",
  "/santral": "pages/santral/index.html",
  "/yemekhane": "pages/yemekhane/index.html",
  "/mescid": "pages/mescid/index.html",
  "/ayarlar": "pages/ayarlar/index.html"
};

function router(path){
  if(!localStorage.getItem("auth") && path !== "/login"){
    path = "/login";
  }
  fetch(routes[path])
    .then(r => r.text())
    .then(html => app.innerHTML = html);

  history.pushState({}, "", path);
}

window.onpopstate = () => router(location.pathname);

document.addEventListener("click", e => {
  const link = e.target.closest("[data-link]");
  if(link){
    e.preventDefault();
    router(link.getAttribute("href"));
  }
});

function login(){
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if(u === "admin" && p === "123456"){
    localStorage.setItem("auth","admin");
    router("/home");
  }else{
    alert("Hatalı giriş");
  }
}

function logout(){
  localStorage.clear();
  router("/login");
}

if(location.pathname === "/" || location.pathname === ""){
  router("/login");
}
