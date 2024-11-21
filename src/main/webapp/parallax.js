function castParallax() {
    window.addEventListener("scroll", function(event) {
        var top = this.pageYOffset;

        // Lấy tất cả các layer có class "parallax"
        var layers = document.getElementsByClassName("parallax");
        var layer, speed, yPos;

        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];

            // Kiểm tra xem có phải layer đầu tiên không
            if (i === 0) {
                // Tốc độ của layer đầu tiên sẽ bằng tốc độ cuộn của trang
                speed = 100;
            } else {
                // Các layer còn lại có tốc độ khác nhau dựa vào data-speed
                speed = layer.getAttribute('data-speed');
            }

            // Tính toán vị trí Y của layer dựa trên tốc độ
            yPos = -(top * speed / 100);

            // Áp dụng transform để tạo hiệu ứng parallax
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }
    });
}

function dispelParallax() {
    document.getElementById("nonparallax").style.display = 'block';
    document.getElementById("parallax").style.display = 'none';
}

function startSite() {
    var platform = navigator.platform.toLowerCase();

    // Kiểm tra loại thiết bị
    if (platform.indexOf('ipad') !== -1 || platform.indexOf('iphone') !== -1) {
        dispelParallax(); // Tắt parallax trên iPad hoặc iPhone
    } else {
        castParallax(); // Kích hoạt parallax cho các thiết bị khác
    }
}

document.body.onload = startSite;
