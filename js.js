object = {
  name: "Hut",
  location: "Somewhere",
  size: "Small"
};

for (i in object) {
  p.innerHTML += "<li>" + "<span>" + object[i] + "</span>" + "</li>";
}
