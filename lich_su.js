// Dữ liệu mẫu mở rộng (giả lập từ localStorage hoặc API)
let bookingHistory = [
    {
        id: "TOP-8H2K-9L3P",
        movie: "Song hỷ Lâm nguy",
        date: "2026-04-05",
        time: "19:30",
        cinema: "CGV Vincom",
        seats: ["A12", "A13"],
        combo: { popcorn: 1, soda: 1 },
        totalPrice: 210000,
        status: "da-xem",
        poster: "anh/songhy.png"
    },
    {
        id: "TOP-4M7Q-1W2E",
        movie: "Dưới bóng điện hạ",
        date: "2026-04-12",
        time: "20:15",
        cinema: "BHD Star Bitexco",
        seats: ["C05", "C06"],
        combo: { popcorn: 0, soda: 2 },
        totalPrice: 195000,
        status: "sap-chieu",
        poster: "anh/duoibongdienha.png"
    },
    {
        id: "TOP-9X8C-7V6B",
        movie: "Vùng đất luân hồi",
        date: "2026-03-01",
        time: "18:00",
        cinema: "Lotte Cinema",
        seats: ["B09"],
        combo: { popcorn: 1, soda: 0 },
        totalPrice: 95000,
        status: "da-huy",
        poster: "anh/vungdatluanhoi.png"
    },
    {
        id: "TOP-2A5S-8D9F",
        movie: "Siêu quậy marsupilami",
        date: "2026-03-28",
        time: "14:45",
        cinema: "Galaxy Nguyễn Du",
        seats: ["F02", "F03", "F04"],
        combo: { popcorn: 2, soda: 2 },
        totalPrice: 380000,
        status: "da-xem",
        poster: "anh/marsupilami.png"
    },
    {
        id: "TOP-7J3K-2M9N",
        movie: "Super Mario - Thiên hà",
        date: "2026-04-18",
        time: "10:30",
        cinema: "Aeon Tân Phú",
        seats: ["D08", "D09"],
        combo: { popcorn: 1, soda: 1 },
        totalPrice: 189000,
        status: "sap-chieu",
        poster: "anh/mario.png"
    }
];

// Helper: format tiền VNĐ
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + ' đ';
}

// Helper: format ngày hiển thị
function formatDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`;
}

// Render danh sách vé dựa trên filter và sort
function renderHistory() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const sortBy = document.getElementById('sortSelect').value;

    let filtered = [...bookingHistory];

    // Lọc theo tên phim
    if (searchTerm) {
        filtered = filtered.filter(item => item.movie.toLowerCase().includes(searchTerm));
    }

    // Lọc theo trạng thái
    if (statusFilter !== 'all') {
        filtered = filtered.filter(item => item.status === statusFilter);
    }

    // Sắp xếp
    filtered.sort((a, b) => {
        if (sortBy === 'date-desc') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    const container = document.getElementById('historyList');
    const noResultDiv = document.getElementById('noResult');

    if (filtered.length === 0) {
        container.innerHTML = '';
        noResultDiv.style.display = 'block';
        return;
    }

    noResultDiv.style.display = 'none';
    container.innerHTML = filtered.map(item => `
        <div class="ticket-item">
            <div class="ticket-header">
                <div class="movie-title">
                    <i class="fas fa-film"></i> ${item.movie}
                </div>
                <div class="status ${item.status}">
                    ${item.status === 'da-xem' ? 'Đã xem' : item.status === 'sap-chieu' ? 'Sắp chiếu' : 'Đã hủy'}
                </div>
            </div>
            <div class="ticket-details">
                <div class="detail-item"><i class="fas fa-calendar-alt"></i> ${formatDate(item.date)}</div>
                <div class="detail-item"><i class="fas fa-clock"></i> ${item.time}</div>
                <div class="detail-item"><i class="fas fa-map-marker-alt"></i> ${item.cinema}</div>
                <div class="detail-item"><i class="fas fa-chair"></i> Ghế: ${item.seats.join(', ')}</div>
                <div class="detail-item"><i class="fas fa-tag"></i> Bắp: ${item.combo.popcorn} | Nước: ${item.combo.soda}</div>
            </div>
            <div class="ticket-footer">
                <div class="ticket-code"><i class="fas fa-qrcode"></i> Mã vé: ${item.id}</div>
                <div class="ticket-total">💰 ${formatCurrency(item.totalPrice)}</div>
            </div>
        </div>
    `).join('');
}

// Lắng nghe sự kiện thay đổi
document.addEventListener('DOMContentLoaded', () => {
    renderHistory();
    document.getElementById('searchInput').addEventListener('input', renderHistory);
    document.getElementById('statusFilter').addEventListener('change', renderHistory);
    document.getElementById('sortSelect').addEventListener('change', renderHistory);
});

    function gotoTc(){
    window.location.href="phim.html";
}
