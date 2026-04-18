function openModal(element) {
  let modal = document.getElementById("movieModal");

  let title = element.dataset.title;
  let img = element.dataset.img;
  let time = element.dataset.time;
  let country = element.dataset.country;
  let rate = element.dataset.rate;
  let desc = element.dataset.desc;
  let date = element.dataset.date;
  let director = element.dataset.director;
  let actor = element.dataset.actor;

  document.querySelector(".modal-info h2").innerText = title;
  document.querySelector(".modal-img img").src = img;

  document.querySelector(".meta").innerHTML = `
        <span>⏱ ${time}</span>
        <span>🌍 ${country}</span>
        <span>⭐ ${rate}</span>
        <span>🔥 ${date}</span>
    `;

  document.querySelector(".meta-x").innerHTML = `
        <span>🎬${director}</span>
        <span>🎭${actor}</span>
    `;

  document.querySelector(".modal-info p").innerText = desc;

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}

const heroData = [
  {
    img: "anh/songhy.png",
    title: "Song Hỷ Lâm Nguy",
    rate: "8.6",
    time: "113 phút",
    date: "03/04/2026",
    country: "Việt Nam",
    desc: "Hai lễ cưới, một sang trọng sa hoa, một đạm bạc dân dã, đáng lý sẽ được tổ chức đối diện nhau. Rắc rối bắt đầu khi đội ngũ tổ chức của hai lễ cưới phát hiện ra danh sách khách mời của hai bên là giống nhau.Đạo diễn: Vũ Hà - Diễn viên: Dustin Nguyễn, Misthy, Trung Anh, Đinh Y Nhung, Jun Vũ, Hoàng Phi, Hynee, Khoai Vũ",
  },

  {
    img: "anh/mario_slide.png",
    title: "Super Mario - Thiên Hà",
    rate: "8.6",
    time: "99 phút",
    date: "01/04/2026",
    country: "Mỹ",
    desc: "Mario bước vào thiên hà mới.phim hoạt hình được lấy bối cảnh trong thế giới của Anh Em Super Mario và là phần tiếp theo của Phim Anh Em Super Mario tác phẩm ra mắt năm 2023 và đạt doanh thu hơn 1,3 tỷ đô la trên toàn cầu. Cả hai bộ phim Phim Anh Em Super Mario (2023) và Phim Super Mario Thiên Hà",
  },

  {
    img: "anh/duoibongdienha_slide.png",
    title: "Dưới bóng điện hạ",
    rate: "8.9",
    time: "117 phút",
    date: "10/04/2026",
    country: "Hàn Quốc",
    desc: "Lấy mốc năm 1457 dưới triều đại Joseon, Dưới Bóng Điện Hạ khắc họa số phận nghiệt ngã của vua Danjong - vị quân vương thứ sáu của triều đại (Park Ji-hoon thủ vai). Lên ngôi khi tuổi đời còn non trẻ, Danjong nhanh chóng trở thành quân cờ trong vòng xoáy quyền lực tàn khốc. Bị chính người chú lật đổ, phế truất và đày đến vùng Cheongnyeongpo heo hút, cuộc đời của vị vua trẻ rẽ sang một ngã rẽ đầy u uất. Tại chốn lưu đày, ông gặp trưởng làng Eom Heung Do (Yoo Hai-jin thủ vai) - người đã chủ động biến ngôi làng nghèo thành nơi giam giữ nhà vua, đổi lại hy vọng cứu vãn sinh kế cho dân làng. Từ hai thân phận tưởng chừng đối lập, một cựu đế vương và một thường dân, bộ phim dần hé mở mối liên kết lặng lẽ nhưng sâu sắc - nơi lòng trung thành, sự che chở âm thầm và những phận người nhỏ bé cùng trôi dạt giữa cơn sóng lớn của lịch sử..",
  },
];

let currentHero = 0;

function changeHeroSlide(index = null) {
  if (index !== null) {
    currentHero = index;
  } else {
    currentHero++;
    if (currentHero >= heroData.length) {
      currentHero = 0;
    }
  }

  document.querySelector(".hero-slide img").src = heroData[currentHero].img;

  document.querySelector(".hero-title").innerText = heroData[currentHero].title;

  document.querySelector(".hero-description").innerText =
    heroData[currentHero].desc;

  document.querySelector(".hero-meta").innerHTML = `
    <span>⭐ ${heroData[currentHero].rate}</span>
    <span>⏱ ${heroData[currentHero].time}</span>
    <span>📅 ${heroData[currentHero].date}</span>
    <span>🌍 ${heroData[currentHero].country}</span>
    `;

  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentHero].classList.add("active");
}

setInterval(changeHeroSlide, 5000);

function goToBooking() {
  window.location.href = "/datve/datve.html";
}
function gotoTrailer() {
  window.open("https://www.youtube.com/watch?v=7m5SDPQe1Z8", "_blank");
}
function gotoLogin() {
  window.location.href = "login.html";
}
function gotoRegister() {
  window.location.href = "register.html";
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase().trim();
  const movies = document.querySelectorAll(".movie-card");

  movies.forEach((movie) => {
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

function openMap() {
  window.location.href = "map.html";
}

function goSlide(index) {
  changeHeroSlide(index);
}
let dots = document.querySelectorAll(".dot");

dots.forEach((dot) => dot.classList.remove("active"));

dots[currentHero].classList.add("active");

function openTrailer() {
  document.getElementById("trailerModal").style.display = "block";
}

function closeTrailer() {
  let video = document.querySelector("#trailerModal video");
  video.pause();
  video.currentTime = 0;

  document.getElementById("trailerModal").style.display = "none";
}
