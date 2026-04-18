const cinemaData = {
  "Hồ Chí Minh": [
    { name: "KOF Aeon Tân Phú", times: ["12:10", "13:50", "16:10", "18:30"] },
    { name: "KOF Menas Mall", times: ["12:40", "15:00", "17:20", "21:10"] },
  ],
  "Hà Nội": [
    { name: "KOF Vincom Nguyễn Chí Thanh", times: ["09:00", "11:30", "14:00"] },
    { name: "KOF Rice City", times: ["10:15", "13:45", "19:00"] },
  ],
  "Đà Nẵng": [
    { name: "KOF Vincom Đà Nẵng", times: ["12:00", "15:30", "20:00"] },
  ],
};

let comboData = { popcorn: 0, soda: 0 };
const prices = { popcorn: 60000, soda: 35000 };

// 1. Hàm tạo danh sách ngày
function renderDates() {
  const container = document.getElementById("date-list-container");
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < 10; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);

    const btn = document.createElement("div");
    btn.className = `date-btn ${i === 0 ? "active" : ""}`;
    btn.innerHTML = `<div>${(d.getMonth() + 1).toString().padStart(2, "0")}</div>
                     <div style="font-size:20px; font-weight:bold">${d.getDate()}</div>
                     <div>${days[d.getDay()]}</div>`;

    btn.onclick = function () {
      document.querySelector(".date-btn.active").classList.remove("active");
      this.classList.add("active");
    };
    container.appendChild(btn);
  }
}

// 2. Hàm hiển thị danh sách Tỉnh
function renderCities() {
  const container = document.getElementById("city-container");
  Object.keys(cinemaData).forEach((city) => {
    const btn = document.createElement("button");
    btn.className = "city-btn";
    btn.innerText = city;
    btn.onclick = function () {
      document
        .querySelectorAll(".city-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      renderCinemas(city);
    };
    container.appendChild(btn);
  });
}

// 3. Hàm hiển thị Rạp và Suất chiếu
function renderCinemas(city) {
  const container = document.getElementById("cinema-selection");
  container.innerHTML = `<h3>${city}</h3>`;

  cinemaData[city].forEach((cinema) => {
    const item = document.createElement("div");
    item.className = "cinema-item";

    let timeHtml = cinema.times
      .map(
        (t) =>
          `<button class="time-btn" onclick="openSeatSelection('${cinema.name}', '${t}')">${t}</button>`,
      )
      .join("");
    item.innerHTML = `
            <span class="cinema-name">${cinema.name}</span>
            <div class="showtime-list">${timeHtml}</div>
        `;
    container.appendChild(item);
  });
}

// 4. Hàm chuyển từ chọn rạp sang chọn ghế
function openSeatSelection(cinemaName, time) {
  document.getElementById("date-list-container").style.display = "none";
  document.getElementById("city-container").style.display = "none";
  document.getElementById("cinema-selection").style.display = "none";

  const seatScreen = document.getElementById("seat-selection");
  const mainFooter = document.getElementById("main-footer");

  if (seatScreen) seatScreen.style.display = "block";
  if (mainFooter) mainFooter.style.display = "flex";

  const movieDisplay = document.getElementById("movie-name-display");
  if (movieDisplay) movieDisplay.innerText = "Rạp: " + cinemaName;

  const timeDisplay = document.getElementById("showtime-info");
  if (timeDisplay) timeDisplay.innerText = "Suất chiếu: " + time;

  renderSeats();
}

// 5. Hàm vẽ ghế
function renderSeats() {
  const map = document.getElementById("seat-map");
  if (!map) return;
  map.innerHTML = "";
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];

  rows.forEach((row) => {
    for (let i = 9; i >= 1; i--) {
      const seat = document.createElement("div");
      seat.className = "seat";
      seat.innerText = row + i;

      if (row < "D") seat.classList.add("regular");
      else seat.classList.add("vip");

      seat.onclick = function () {
        this.classList.toggle("selected");
        updateBookingInfo();
      };
      map.appendChild(seat);
    }
  });
}

// 6. Hàm quay lại chọn rạp
function backToCinema() {
  document.getElementById("seat-selection").style.display = "none";
  document.getElementById("main-footer").style.display = "none"; // Ẩn footer đi

  document.getElementById("date-list-container").style.display = "flex";
  document.getElementById("city-container").style.display = "flex";
  document.getElementById("cinema-selection").style.display = "block";

  // Reset ghế
  const selectedSeats = document.querySelectorAll(".seat.selected");
  selectedSeats.forEach((seat) => seat.classList.remove("selected"));
  updateBookingInfo();
}

// 7. Hàm đi tới trang Bắp Nước
function goToCombo() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  if (selectedSeats.length === 0) {
    alert("Vui lòng chọn ghế trước!");
    return;
  }

  document.getElementById("seat-selection").style.display = "none";
  document.getElementById("combo-selection").style.display = "block";

  const nextBtn = document.querySelector(".btn-next");
  nextBtn.innerText = "THANH TOÁN";
  nextBtn.onclick = goToPayment;

  const prevBtn = document.querySelector(".btn-prev");
  prevBtn.onclick = backToSeats;
}

// 8. Hàm quay lại trang Ghế
function backToSeats() {
  document.getElementById("combo-selection").style.display = "none";
  document.getElementById("seat-selection").style.display = "block";

  const nextBtn = document.querySelector(".btn-next");
  nextBtn.innerText = "NEXT";
  nextBtn.onclick = goToCombo;

  const prevBtn = document.querySelector(".btn-prev");
  prevBtn.onclick = backToCinema;
}

// 9. Hàm cập nhật số lượng bắp nước
function changeQty(type, delta) {
  comboData[type] = Math.max(0, comboData[type] + delta);
  document.getElementById(`qty-${type}`).innerText = comboData[type];
  updateBookingInfo();
}

// 10. Hàm tính toán và cập nhật giao diện tổng tiền
function updateBookingInfo() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  const seatPrice = selectedSeats.length * 110000;

  const popcornPrice = (comboData.popcorn || 0) * prices.popcorn;
  const sodaPrice = (comboData.soda || 0) * prices.soda;

  const total = seatPrice + popcornPrice + sodaPrice;

  const priceDisplay = document.getElementById("price-amount");
  if (priceDisplay) {
    priceDisplay.innerText = total.toLocaleString();
  }

  const seatDisplay = document.getElementById("seat-info");
  if (seatDisplay) {
    const seatNames = Array.from(selectedSeats).map((seat) => seat.innerText);
    if (seatNames.length > 0) {
      seatDisplay.innerText = "Ghế: " + seatNames.join(", ");
    } else {
      seatDisplay.innerText = "Ghế: Chưa chọn";
    }
  }
}

// 11. Hàm đi tới trang Thanh Toán
function goToPayment() {
  document.getElementById("combo-selection").style.display = "none";
  document.getElementById("payment-selection").style.display = "block";

  const nextBtn = document.querySelector(".btn-next");
  nextBtn.innerText = "HOÀN TẤT";
  nextBtn.onclick = () => alert("Thanh toán thành công!");

  const prevBtn = document.querySelector(".btn-prev");
  prevBtn.onclick = function () {
    document.getElementById("payment-selection").style.display = "none";
    document.getElementById("combo-selection").style.display = "block";

    nextBtn.innerText = "THANH TOÁN";
    nextBtn.onclick = goToPayment;
    prevBtn.onclick = backToSeats;
  };

  // Đổ dữ liệu tổng kết
  let detailsHtml = "";
  let totalAmount = 0;
  const selectedSeats = document.querySelectorAll(".seat.selected");

  if (selectedSeats.length > 0) {
    const seatPrice = selectedSeats.length * 110000;
    totalAmount += seatPrice;
    detailsHtml += `<div class="detail-row"><span>Ghế x${selectedSeats.length}</span><span>${seatPrice.toLocaleString()} đ</span></div>`;
  }
  if (comboData.popcorn > 0) {
    const pPrice = comboData.popcorn * prices.popcorn;
    totalAmount += pPrice;
    detailsHtml += `<div class="detail-row"><span>Bắp Ngọt x${comboData.popcorn}</span><span>${pPrice.toLocaleString()} đ</span></div>`;
  }
  if (comboData.soda > 0) {
    const sPrice = comboData.soda * prices.soda;
    totalAmount += sPrice;
    detailsHtml += `<div class="detail-row"><span>Nước x${comboData.soda}</span><span>${sPrice.toLocaleString()} đ</span></div>`;
  }

  document.getElementById("summary-details").innerHTML = detailsHtml;
  document.getElementById("summary-subtotal").innerText =
    totalAmount.toLocaleString() + " đ";
  document.getElementById("summary-final").innerText =
    totalAmount.toLocaleString() + " đ";
}

// --- KHỞI CHẠY KHI MỞ TRANG ---
renderDates();
renderCities();

// Gán sự kiện cho nút NEXT ở footer lúc ban đầu
const btnNext = document.querySelector(".btn-next");
if (btnNext) {
  btnNext.onclick = goToCombo;
}
