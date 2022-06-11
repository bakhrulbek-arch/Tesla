
let wh_top = document.querySelector(".wheel_top")
let wh_bottom = document.querySelector(".wheel_bottom")
diskT()
diskB()
let front = document.querySelector('.front')
let rear = document.querySelector('.rear')
function diskT() {
    if (parseInt(disk.innerHTML) === 18) {
        img2.src = './img/wheel-removebg-preview.png'
        img.src = './img/wheel-removebg-preview.png'
    }
    wh_top.onclick = () => {
        if (parseInt(disk.innerHTML) <= 16) {
            disk.innerHTML = parseInt(disk.innerHTML) + 2
            front.src = "img/16_size.png"
            rear.src = "img/16_size.png"
            price.innerHTML = parseInt(price.innerHTML) + 2400
        } else { }
    }
}
function diskB() {
    wh_bottom.onclick = () => {
        if (parseInt(disk.innerHTML) === 19) {
            disk.innerHTML = parseInt(disk.innerHTML) - 2
            front.src = "img/19_size.png"
            rear.src = "img/19_size.png"
            price.innerHTML = parseInt(price.innerHTML) - 2400
        } else { }
    }
}