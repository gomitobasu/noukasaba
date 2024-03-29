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
    lax.addElements('.cardsOne', {
      scrollY: {
        translateX: [
        ['elInY', 'elHeight/1.2'],
        [-300, 0]
        ],
        opacity:[
        ['elInY', 'elHeight/1.2'],
        [0, 1]
        ],
        rotate:[
            ['elInY', 'elHeight/1.2'],
            [-15, 0]
            ]
      }
    });
    lax.addElements('.cardsTwo', {
        scrollY: {
          opacity: [
          ['elInY', 'elCenterY-elHeight/1.5'],
          [0, 1]
          ],
          rotate:[
            ['elInY', 'elHeight/2'],
            [-15, 0]
            ]
        }
      });
  }
  