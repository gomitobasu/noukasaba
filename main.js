const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("on");
  menu.classList.toggle("on");
});
menu.addEventListener("click", () => {
    menuButton.classList.toggle("on");
    menu.classList.toggle("on");
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
  