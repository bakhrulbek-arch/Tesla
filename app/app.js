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
        }
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
        }
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
        if (parseInt(speed.innerHTML) < 315) {
            speed.innerHTML = parseInt(speed.innerHTML) + 5
            stat.innerHTML = parseInt(stat.innerHTML) - 5
            if (parseInt(speed.innerHTML) <= 5) {
                setInterval(function () {
                    a_d()
                }, 200)
            }
        } else {
            speed.innerHTML = '320 MAX'
        }
    }
}
function a_d() {
    if (front.style.transform == "rotate(360deg)") {
        front.style.transform = "rotate(0deg)";
        rear.style.transform = "rotate(0deg)";
    } else if (front.style.transform = "rotate(0deg)") {
        front.style.transform = "rotate(360deg)";
        rear.style.transform = "rotate(360deg)";
    }

}
function spedB() {
    speedbot.onclick = () => {
        if (parseInt(speed.innerHTML) > 5) {
            speed.innerHTML = parseInt(speed.innerHTML) - 5
            stat.innerHTML = parseInt(stat.innerHTML) + 5
        } else if (parseInt(speed.innerHTML) === 5 || parseInt(speed.innerHTML) === 0) {
            speed.innerHTML = '0 MIN'
            front.style.animation = 0
            rear.style.animation = 0
        }
    }
}
let kond = document.querySelector('.kond')
let anm = document.querySelector(".anm_img")
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
        if (temp.innerHTML >= 23) {
            kond.checked = true;
            anm.classList.add("active_anm")
            setInterval(function () {
                stat.innerHTML = parseInt(stat.innerHTML) - 0.1
            }, 800);
        }
    }
}
function temp_b() {
    tempbot.onclick = () => {
        temp.innerHTML = parseInt(temp.innerHTML) - 1
        stat.innerHTML = parseInt(stat.innerHTML) + 3
        if (temp.innerHTML < 23) {
            kond.checked = false;
            anm.classList.remove("active_anm")
        }
    }
}

//Кондиционер автомобиля
kondit()
function kondit() {
    kond.onclick = () => {
        if (kond.checked == false) {
            stat.innerHTML = parseInt(stat.innerHTML) + 37
            stat.innerHTML = parseInt(stat.innerHTML) - 40
        } else {
            stat.innerHTML = parseInt(stat.innerHTML) - 40
            setInterval(function kk() {
                stat.innerHTML = parseInt(stat.innerHTML) - 0.1
            }, 500);
        }
    }
}
let version = document.querySelector('.version')
let ver_avto = document.querySelector(".tesla")
ver(version)
let audio_ad = new Audio('./sound/Tesla_Roadster_2020.mp3')
let audio_long_range = new Audio('./sound/Driving_Sport_Rock.mp3')
//version auto
function ver(item) {
    item.onclick = () => {
        if (item.checked == false) {
            stat.innerHTML = parseInt(stat.innerHTML) + 29
            price.innerHTML = parseInt(price.innerHTML) - 10009
            ver_avto.src = "img/tesla.png"
            audio_long_range.pause()
            audio_ad.play()
        } else {
            stat.innerHTML = parseInt(stat.innerHTML) - 29
            price.innerHTML = parseInt(price.innerHTML) + 10009
            ver_avto.src = "img/tesla_2.png"
            audio_ad.pause()
            audio_long_range.play()
        }
    }
}

// let view = document.querySelector('.view')
let price2 = document.querySelector('#pr')

// vid()
// function vid() {
//     view.onclick = () => {
//         if (view.checked == false) {
//             price.innerHTML = parseInt(price.innerHTML) + 5500
//             
//         } else {
//             price.innerHTML = parseInt(price.innerHTML) - 5500
//         }
//     }
// }

// vid2()
// function vid2() {
//     view2.onclick = () => {
//         if (view2.checked == false) {
//             price2.innerHTML = parseInt(price2.innerHTML) + 5500
//           
//         } else {
//             price2.innerHTML = parseInt(price2.innerHTML) - 5500
//         }
//     }
// }

let cir = document.querySelector('.cir')
let cir2 = document.querySelector('.cir2')
let cir3 = document.querySelector('.cir3')
let img_salon = document.querySelector('#tesla')

cir.onclick = () => {
    img_salon.src = './img/salon.png'
    price2.innerHTML = '+49000'
}
cir2.onclick = () => {
    img_salon.src = './img/white.png'
    price2.innerHTML = '+52000'
}
cir3.onclick = () => {
    img_salon.src = './img/yellow.png'
    price2.innerHTML = '+57000'
}

let tesla = document.querySelector('.tesla')
let tesla_img = document.querySelector('.img')
let cont = document.querySelector('.blc_bottom')
let blc_top = document.querySelector(".blc_top")
tesla.onclick = () => {

    tesla_img.style.transform = 'scale(18)'
    cont.classList.add('active')

    setTimeout(() => {
        cont.classList.add('act')
        tesla.style.transform = 'scale(1)'
    }, 300);

    setTimeout(() => {
        blc_top.classList.add("blc_top_none")
    }, 300);

}
let view = document.querySelector('.view')
let view2 = document.querySelector('#vw')
vid()
function vid() {
    view.onclick = () => {
        if (view.checked == false) {
            // price.innerHTML = parseInt(price.innerHTML) + 5500
            tesla_img.style.transform = 'scale(18)'
            cont.classList.add('active')

            setTimeout(() => {
                cont.classList.add('act')
                tesla.style.transform = 'scale(1)'
            }, 300);

            setTimeout(() => {
                blc_top.classList.add("blc_top_none")
            }, 300);

        } else if(view.checked == true){
            tesla_img.style.transform = 'scale(0)'
            cont.classList.remove('active')

            setTimeout(() => {
                cont.classList.remove('act')
                tesla.style.transform = 'scale(-18)'
            }, 300);

            setTimeout(() => {
                blc_top.classList.add("blc_top_none")
            }, 300);
        }
    }
}

vid2()
function vid2() {
    view2.onclick = () => {
        if (view2.checked == false) {
            price2.innerHTML = parseInt(price2.innerHTML) + 5500

        } else {
            price2.innerHTML = parseInt(price2.innerHTML) - 5500
        }
    }
}
