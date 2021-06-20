document.getElementById("color-button").addEventListener("click", changePage);

function changePage() {
  let colourWheel = [
    "#9896f1",
    "#d59bf6",
    "#edb1f1",
    "#f5c7f7",
    "#a393eb",
    "#83cee0",
    "#a4fbe3",
    "#7effdb",
    "#b693fe",
    "#ff9de2",
    "#ffd319",
    "#ff901f",
    "#ff2975",
    "#f222ff",
    "#8c1eff",
    "#300350",
    "#94167F",
    "#E93479",
    "#F9AC53",
    "#F62E97",
    "#153CB4",
  ];
  //videos
  let vidWheel = [
    "https://www.youtube.com/embed/eEYbLsechlo",
    "https://www.youtube.com/embed/_I6I2JOJhHY",
    "https://www.youtube.com/embed/qzux3UJk9Ts",
    "https://www.youtube.com/embed/JJP-Esek-_0",
    "https://www.youtube.com/embed/Vod4dUipgD0",
    "https://www.youtube.com/embed/wnWG8I-VkzM",
    "https://www.youtube.com/embed/-qstIEHDVRg",
    "https://www.youtube.com/embed/TCL1ZDLz5FY",
    "https://www.youtube.com/embed/QJe8Tub4-_g",
    "https://www.youtube.com/embed/bR6h4XGx3zA",
    "https://www.youtube.com/embed/m5uHBoze2js",
    "https://www.youtube.com/embed/u8CI_8SfsIQ",
    "https://www.youtube.com/embed/nocsoez3RW4",
    "https://www.youtube.com/embed/XehTLx0vlt0",
    "https://www.youtube.com/embed/GoZUjxstIZs",
    "https://www.youtube.com/embed/ghWOn8eq1hw",
    "https://www.youtube.com/embed/sc4sSUc6xj8",
    "https://www.youtube.com/embed/OlAx0a82beU",
    "https://www.youtube.com/embed/hhi6wmjhM9I",
    "https://www.youtube.com/embed/dMu5heoUv2k",
    "https://www.youtube.com/embed/MHlTX4Oc75U",
  ];

  let colour = colourWheel[Math.floor(Math.random() * colourWheel.length)];
  let element1 = document.querySelector("body");
  element1.style.background = colour;

  let vidya = vidWheel[Math.floor(Math.random() * vidWheel.length)];
  let element2 = document.querySelector("iframe");
  element2.src = vidya;
}
