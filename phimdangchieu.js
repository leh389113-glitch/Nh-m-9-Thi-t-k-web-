const dateButtons = document.querySelectorAll('.date-btn');

dateButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Xóa class active ở nút cũ
        document.querySelector('.date-btn.active').classList.remove('active');
        // Thêm active vào nút vừa nhấn
        this.classList.add('active');
        
        // Tại đây bạn có thể gọi API hoặc lọc dữ liệu theo ngày
        console.log("Đang xem lịch cho ngày:", this.innerText);
    });
});

function gotoTc(){
    window.location.href="phim.html";
}
function gotoPdc2(){
    window.location.href="phimdangchieu2.html";
}
function gotoPdc3(){
    window.location.href="phimdangchieu3.html";
}
function gotoPdc1(){
    window.location.href="phimdangchieu.html";
}
