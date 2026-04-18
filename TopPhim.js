function openModal(element) {
    let modal = document.getElementById("movieModal");

    let title = element.dataset.title;
    let img = element.dataset.img;
    let time = element.dataset.time;
    let country = element.dataset.country;
    let rate = element.dataset.rate;
    let desc = element.dataset.desc;
    let date = element.dataset.date;
    let director =element.dataset.director;
    let actor =element.dataset.actor;


    document.querySelector(".modal-info h2").innerText = title;
    document.querySelector(".modal-img img").src = img;

    document.querySelector(".meta").innerHTML = `
        <span>⏱ ${time}</span>
        <span>🌍 ${country}</span>
        <span>⭐ ${rate}</span>
        <span>🔥 ${date}</span>
    `;
    
    document.querySelector(".meta-x").innerHTML=`
        <span>🎬${director}</span>
        <span>🎭${actor}</span>
    `;

    document.querySelector(".modal-info p").innerText = desc;

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
}

function goToBooking() {
    window.location.href = "datve.html";
}
function gotoTrailer() {
    window.open("https://www.youtube.com/watch?v=7m5SDPQe1Z8", "_blank");
}
function gotoLogin(){
    window.location.href="login.html";
}
function gotoRegister(){
    window.location.href="register.html";
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();
  const movies = document.querySelectorAll(".movie-card");

  movies.forEach(movie => {
    const titleEl = movie.querySelector(".movie-title");

    if (!titleEl) return;

    const title = titleEl.innerText.toLowerCase();

    if (title.includes(keyword)) {
      movie.style.display = "";
    } else {
      movie.style.display = "none";
    }
  });
});
