const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const copy = document.getElementById("copy");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("on");
  menu.classList.toggle("on");
});
menu.addEventListener("click", () => {
    menuButton.classList.toggle("on");
    menu.classList.toggle("on");
  });

copy.addEventListener("click", () => {
    if(navigator.clipboard == undefined) {
        window.clipboardData.setData('Text', "kunonodesign@gmail.com");
    } else {
        navigator.clipboard.writeText("kunonodesign@gmail.com");
    }
    copy.style.backgroundColor = "#d9d9d9";
    setTimeout(() => {
        copy.style.backgroundColor = "#f3f3f3";
        console.log("timeout");
      }, "200");
});

  window.onload = function () {
    //lax.jsを初期化
    lax.init()
  
    // ドライバーを追加する
    lax.addDriver('scrollY', function () {
      return window.scrollY;
    });
  
    // 要素にアニメーションを紐づける
    lax.addElements('.cardsList', {
      scrollY: {
        translateX: [
        ['elInY', 'elCenterY-elHeight/3'],
        [-50, 0]
        ],
        opacity:[
        ['elInY', 'elCenterY-elHeight/3'],
        [0, 1]
        ],
        rotate:[
            ['elInY', 'elCenterY-elHeight/3'],
            [-15, 0]
            ]
      }
    });
    lax.addElements('.boardsList', {
        scrollY: {
            rotate:[
                ['elInY', 'elCenterY-elHeight/3'],
                [15, 0]
            ],
        opacity: [
        ['elInY', 'elCenterY-elHeight/3'],
        [0, 1]
        ],
        }
      });
  }
  