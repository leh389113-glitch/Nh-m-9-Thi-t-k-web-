# 🎬 Topfilm – Hệ thống đặt vé xem phim trực tuyến

**Topfilm** là website cho phép người dùng khám phá phim, đặt vé, thanh toán và theo dõi lịch sử đặt vé. Dự án được thực hiện bởi nhóm 9 trong môn Thiết kế Web.

## 👥 Thành viên & Phân công

| Thành viên       | Nhiệm vụ chính                          |
|------------------|------------------------------------------|
| **Trung Hiếu**   | Trang chủ + Danh sách phim               |
| **Thái Anh**  | Chi tiết phim + Đăng nhập / Đăng ký      |
| **Thu Hằng**     | Đặt vé + Thanh toán                      |
| **Gia Minh**     | Vé của tôi (Lịch sử) + Ưu đãi            |

## 🛠 Công nghệ sử dụng

- HTML5, CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (ES6) – DOM, localStorage, sessionStorage
- Font Awesome 6 (icon)
- Google Fonts

## 📁 Cấu trúc dự án – Phân loại file

### 📄 Tệp chính (Main files – điểm vào của ứng dụng)

| Tệp tin                     | Vai trò                                                                 |
|-----------------------------|-------------------------------------------------------------------------|
| `phim.html`                 | Trang chủ: hero slider, danh sách phim, tìm kiếm, modal chi tiết phim. |
| `login.html`                | Trang đăng nhập.                                                        |
| `register.html`             | Trang đăng ký tài khoản.                                                |
| `datve.html`                | Trang đặt vé: chọn rạp, suất, ghế, bắp nước, thanh toán.                |
| `lich_su.html`              | Trang lịch sử đặt vé (tìm kiếm, lọc, sắp xếp theo trạng thái/ngày).     |
| `uudai.html`                | Trang danh sách các chương trình khuyến mãi (thẻ ảnh + mô tả).           |
| `giave.html`                | Trang bảng giá vé chi tiết (theo khung giờ, loại ghế, đối tượng).       |
| `phimdangchieu.html`        | Lịch chiếu ngày 23/04/2026.                                              |
| `phimdangchieu2.html`       | Lịch chiếu ngày 26/04/2026.                                              |
| `phimdangchieu3.html`       | Lịch chiếu ngày 27/04/2026.                                              |
| `rapphim.html`              | Giới thiệu về rạp Topfilm (hình ảnh, mô tả, danh sách phim đang chiếu).  |
| `map.html`                  | Hiển thị bản đồ Google Maps vị trí rạp (NEU).                           |

### 🧩 Tệp thành phần (Component files – CSS, JS, cấu hình)

| Tệp tin                     | Thuộc phần                     | Mô tả |
|-----------------------------|--------------------------------|--------|
| `TopPhim.css`               | Trang chủ & danh sách phim     | Style header, hero, grid phim, modal, footer. |
| `TopPhim.js`                | Trang chủ & danh sách phim     | Slider, modal phim, tìm kiếm, chuyển trang. |
| `login-register.css`        | Đăng nhập / Đăng ký            | Form đăng nhập/đăng ký dạng thẻ trắng. |
| `login-register.js`         | Đăng nhập / Đăng ký            | Validation, lưu user vào localStorage, kiểm tra đăng nhập. |
| `datve.css`                 | Đặt vé & thanh toán            | Style chọn ngày, ghế, combo, footer đặt vé, thanh toán. |
| `datve.js`                  | Đặt vé & thanh toán            | Logic chọn ngày, rạp, suất, ghế, bắp nước, tính tiền. |
| `lich_su.css`               | Lịch sử vé                     | Style danh sách vé, toolbar lọc/tìm kiếm/sắp xếp. |
| `lich_su.js`                | Lịch sử vé                     | Render vé từ dữ liệu mẫu, lọc theo trạng thái/tên phim/ngày. |
| `uudai.css`                 | Ưu đãi                         | Style grid thẻ khuyến mãi, hiệu ứng hover, responsive. |
| `giave.css`                 | Bảng giá vé                    | Style bảng giá, footer riêng. |
| `giave.js`                  | Bảng giá vé                    | Chuyển hướng về trang chủ. |
| `phimdangchieu.css`         | Lịch chiếu                     | Style cho danh sách phim theo ngày, nút suất chiếu. |
| `phimdangchieu.js`          | Lịch chiếu                     | Xử lý active date, chuyển hướng giữa các ngày. |
| `rapphim.css`               | Giới thiệu rạp                 | Style bố cục 2 cột, grid phim giới thiệu. |

> **Ghi chú:**  
> - Tất cả các tệp `.html` đều có thể mở trực tiếp bằng trình duyệt.  
> - Trang chủ là `phim.html`.  
> - Dữ liệu người dùng và lịch sử đặt vé được lưu trong `localStorage` để mô phỏng backend.

## 📌 Tính năng chi tiết

### 1. Trang chủ & Danh sách phim (Trung Hiếu)
- Hero slider với phim nổi bật
- Danh mục thể loại dạng tab
- Grid hiển thị phim: Hot trong tuần, Đang khởi chiếu, Sắp chiếu
- Sidebar lọc phim theo thể loại và khu vực rạp
- Tìm kiếm phim theo tên

### 2. Chi tiết phim & Đăng nhập/Đăng ký (Thái Anh)
- Hiển thị đầy đủ thông tin phim (poster, đạo diễn, diễn viên, mô tả, điểm đánh giá)
- Nút “Đặt vé” chuyển hướng sang trang đặt vé
- Form đăng nhập/đăng ký với validation cơ bản
- Lưu trạng thái đăng nhập bằng sessionStorage

### 3. Đặt vé & Thanh toán (Thu Hằng)
- Chọn rạp, ngày, suất chiếu động
- Sơ đồ ghế trực quan (ghế thường/VIP, ghế đã đặt)
- Tự động tính tổng tiền
- Áp dụng mã giảm giá (tích hợp với phần Ưu đãi)
- Thanh toán giả lập qua VNPay, Momo, hoặc tiền mặt
- Xuất mã vé và lưu vào lịch sử (localStorage)

### 4. Vé của tôi & Ưu đãi (Gia Minh)
- Danh sách lịch sử đặt vé (phim, ngày giờ, rạp, ghế, mã vé)
- Hiển thị trạng thái: Đã xem / Sắp chiếu / Đã hủy
- Danh sách các mã ưu đãi hiện có (giảm %, mua 2 tặng 1, combo)
- Nút “Sao chép mã” lưu vào clipboard

## 🚀 Hướng dẫn cài đặt & chạy thử

1. **Clone hoặc tải** toàn bộ mã nguồn về máy.
2. Mở file `index.html` bằng trình duyệt (Chrome, Edge, Firefox).
3. **Không cần server** vì dự án sử dụng HTML/CSS/JS thuần.
4. Dữ liệu mẫu (phim, vé, ưu đãi) được nhúng sẵn trong JS hoặc localStorage.

## 🔧 Hướng dẫn tích hợp (cho nhóm)

- Mỗi thành viên code phần của mình trong file riêng (HTML/CSS/JS).
- Sử dụng `localStorage` để chia sẻ dữ liệu giữa các phần:
  - Sau khi đặt vé thành công → lưu vào `bookingHistory`.
  - Trang “Vé của tôi” đọc từ `bookingHistory` để hiển thị.
  - Mã ưu đãi có thể lưu trong `localStorage` hoặc hardcode.
- Khi tích hợp, copy các khối HTML vào đúng vị trí trong `index.html`.
- Gộp CSS vào một file hoặc link riêng (chú ý thứ tự ưu tiên).
- Gộp JS vào một file hoặc link riêng, đảm bảo load sau DOM.

## 📱 Responsive

- Hỗ trợ màn hình Desktop (≥1200px), Tablet (768px - 1199px), Mobile (<768px).
- Sử dụng `flex-wrap`, `grid` và `media queries`.

## 📄 Giấy phép

Dự án chỉ phục vụ mục đích học tập, không sử dụng thương mại.

---

**Nhóm 9 – Thiết kế Web**  
