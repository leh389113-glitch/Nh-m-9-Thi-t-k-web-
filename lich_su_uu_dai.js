// Xử lý sao chép mã ưu đãi
document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            if (code) {
                // Sao chép vào clipboard
                navigator.clipboard.writeText(code).then(() => {
                    // Thông báo tạm thời
                    const originalText = this.textContent;
                    this.textContent = 'Đã sao chép!';
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 1500);
                }).catch(err => {
                    console.error('Không thể sao chép: ', err);
                    alert('Không thể sao chép mã. Hãy thử lại.');
                });
            }
        });
    });
});