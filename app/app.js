let wheel_top = document.querySelector(".wheel_top")
let wheel_bottom = document.querySelector(".wheel_bottom")
let front = document.querySelector('.front')
let rear = document.querySelector('.rear')
let disk = document.querySelector('.disk')
let price = document.querySelector('.price')

//Диски Балоны Авто
wheel_t()
wheel_b()
function wheel_t() {

    wheel_top.onclick = () => {
        if (parseInt(disk.innerHTML) <= 16) {
            disk.innerHTML = parseInt(disk.innerHTML) + 3
            front.src = "img/19_size.png"
            rear.src = "img/19_size.png"
            price.innerHTML = parseInt(price.innerHTML) + 2400
        } else if (parseInt(disk.innerHTML) === 19) {
            disk.innerHTML = parseInt(disk.innerHTML) + 3
            front.src = "img/22_size.png"
            rear.src = "img/22_size.png"
            price.innerHTML = parseInt(price.innerHTML) + 2400
        } else { }
    }
}
function wheel_b() {
    wheel_bottom.onclick = () => {
        if (parseInt(disk.innerHTML) === 19) {
            disk.innerHTML = parseInt(disk.innerHTML) - 3
            front.src = "img/16_size.png"
            rear.src = "img/16_size.png"
            price.innerHTML = parseInt(price.innerHTML) - 2400
        } else if (parseInt(disk.innerHTML) === 22) {
            disk.innerHTML = parseInt(disk.innerHTML) - 3
            front.src = "img/19_size.png"
            rear.src = "img/19_size.png"
            price.innerHTML = parseInt(price.innerHTML) - 2400
        } else { }
    }
}
//Скорость Авто
let speedtop = document.querySelector('.speedtop')
let speedbot = document.querySelector('.speedbot')
let speed = document.querySelector('.speed')
let stat = document.querySelector('.res')
spedT()
spedB()

function spedT() {
    speedtop.onclick = () => {
        if (parseInt(speed.innerHTML) < 320) {
            speed.innerHTML = parseInt(speed.innerHTML) + 5
            stat.innerHTML = parseInt(stat.innerHTML) - 5

        } else {
            speed.innerHTML = '320 MAX'
        }
    }
}

function spedB() {
    speedbot.onclick = () => {
        if (parseInt(speed.innerHTML) > 0) {
            speed.innerHTML = parseInt(speed.innerHTML) - 5
            stat.innerHTML = parseInt(stat.innerHTML) + 5

        } else if (parseInt(speed.innerHTML) === 0) {
            speed.innerHTML = '0 MIN'
        }
    }
}

let temptop = document.querySelector('.temptop')
let tempbot = document.querySelector('.tempbot')
let temp = document.querySelector('.temp')
temp_t()
temp_b()
//Внешняя температура
function temp_t() {
    temptop.onclick = () => {
        temp.innerHTML = parseInt(temp.innerHTML) + 1
        stat.innerHTML = parseInt(stat.innerHTML) - 3
    }
}
function temp_b() {
    tempbot.onclick = () => {
        temp.innerHTML = parseInt(temp.innerHTML) - 1
        stat.innerHTML = parseInt(stat.innerHTML) + 3
    }
}
let version = document.querySelector('.version')
let ver_avto = document.querySelector(".tesla")
ver(version)
function ver(item) {
    item.onclick = () => {
        if (item.checked == false) {
            stat.innerHTML = parseInt(stat.innerHTML) + 29
            price.innerHTML = parseInt(price.innerHTML) - 10009
            ver_avto.src="img/tesla.png"
        } else {
            stat.innerHTML = parseInt(stat.innerHTML) - 29
            price.innerHTML = parseInt(price.innerHTML) + 10009
            ver_avto.src="img/tesla_2.png"
        }
    }
}
let kond = document.querySelector('.kond')
let anm = document.querySelector(".anm_img")
kondit()
function kondit() {
    kond.onclick = () => {
        if (kond.checked == false) {
            stat.innerHTML = parseInt(stat.innerHTML) + 40
            anm.classList.remove("active_anm")
        } else {
            stat.innerHTML = parseInt(stat.innerHTML) - 40
            anm.classList.add("active_anm")
        }
    }
}