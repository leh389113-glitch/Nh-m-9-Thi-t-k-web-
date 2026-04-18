document.addEventListener('DOMContentLoaded', function() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            if (code) {
                navigator.clipboard.writeText(code).then(() => {
                    const originalText = this.textContent;
                    this.textContent = 'Đã sao chép!';
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 1500);
                }).catch(() => alert('Không thể sao chép mã.'));
            }
        });
    });
});
