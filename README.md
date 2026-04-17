# 🎬 Topfilm – Hệ thống đặt vé xem phim trực tuyến

**Topfilm** là website cho phép người dùng khám phá phim, đặt vé, thanh toán và theo dõi lịch sử đặt vé. Dự án được thực hiện bởi nhóm 9 trong môn Thiết kế Web.

## 👥 Thành viên & Phân công

| Thành viên       | Nhiệm vụ chính                          |
|------------------|------------------------------------------|
| **Trung Hiếu**   | Trang chủ + Danh sách phim               |
| **TA Thái Anh**  | Chi tiết phim + Đăng nhập / Đăng ký      |
| **Thu Hằng**     | Đặt vé + Thanh toán                      |
| **Gia Minh**     | Vé của tôi (Lịch sử) + Ưu đãi            |

## 🛠 Công nghệ sử dụng

- HTML5, CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (ES6) – DOM, localStorage, sessionStorage
- Font Awesome 6 (icon)
- Google Fonts

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
