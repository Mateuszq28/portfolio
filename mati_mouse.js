const bubbles = document.querySelector('._styles-module__scrollable__2MD0k');
const dragspeed = 2;
let isDown = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;

bubbles.addEventListener('mousedown', (e) => {
  isDown = true;
  bubbles.classList.add('active');
  startX = e.pageX - bubbles.offsetLeft;
  startY = e.pageY - bubbles.offsetTop;
  scrollLeft = bubbles.scrollLeft;
  scrollTop = bubbles.scrollTop;
});
bubbles.addEventListener('mouseleave', () => {
  isDown = false;
  bubbles.classList.remove('active');
});
bubbles.addEventListener('mouseup', () => {
  isDown = false;
  bubbles.classList.remove('active');
});
bubbles.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - bubbles.offsetLeft;
  const y = e.pageY - bubbles.offsetTop;
  const walk = (x - startX) * dragspeed;
  const topwalk = (y - startY) * dragspeed;
  bubbles.scrollLeft = scrollLeft - walk;
  bubbles.scrollTop = scrollTop - topwalk;
});






// <div class="_styles-module__scrollable__2MD0k"><div class="_styles-module__horizontalSpacer__376IX" style="height: calc(50% - 205.361px);"></div><div class="_styles-module__rowContainer__3bAl3" style="width: 1120px; padding-left: calc(50% - 295.361px); padding-right: calc(50% - 295.361px);"><div class="_styles-module__row__1iLpS" style="margin-top: 0px;"><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(12.8426px) translateY(6.45422px) scale(0.840298);"><div style="background-color: rgba(215, 99, 249, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 1; pointer-events: none;"><img src="./companyLogos/PinkiePie.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">PinkiePie</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">PinkiePie</p></div></div></div><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(0px) translateY(0px) scale(1);"><div style="background-color: rgba(201, 152, 111, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 1; pointer-events: none;"><img src="./companyLogos/Spike.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">Spike</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">Spike</p></div></div></div><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(0px) translateY(0px) scale(1);"><div style="background-color: rgba(17, 75, 19, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 1; pointer-events: none;"><img src="./companyLogos/RainbowDash.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">RainbowDash</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">RainbowDash</p></div></div></div><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(-52.4566px) translateY(12.0731px) scale(0.401911);"><div style="background-color: rgba(215, 169, 114, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 1; pointer-events: none;"><img src="./companyLogos/Fluttershy.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">Fluttershy</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">Fluttershy</p></div></div></div><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(-101.192px) translateY(10.4736px) scale(0.111111);"><div style="background-color: rgba(75, 0, 100, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 0; pointer-events: none;"><img src="./companyLogos/PrincessTwilightSparkle.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">PrincessTwilightSparkle</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">PrincessTwilightSparkle</p></div></div></div></div><div class="_styles-module__row__1iLpS" style="margin-top: -17.192px;"><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(0px) translateY(0px) scale(1);"><div style="background-color: rgba(72, 182, 205, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 1; pointer-events: none;"><img src="./companyLogos/Apple Jack.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">Apple Jack</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">Apple Jack</p></div></div></div><div class="_styles-module__bubbleContainer__2gu6r" style="width: 180px; height: 180px; margin-right: 4px; margin-left: 4px; transform: translateX(-4.81966px) translateY(0px) scale(0.946448);"><div style="background-color: rgba(52, 36, 18, 0.816);" class="companyBubble"><div style="display: flex; justify-content: center; align-items: center; flex-direction: column; transition: opacity 0.1s; opacity: 1; pointer-events: none;"><img src="./companyLogos/Rarity.svg" alt="" style="width: 50px; border-radius: 50%; margin-bottom: 10px;"><p style="color: white; font-size: 14px; margin-bottom: 6px; font-weight: 1000; max-width: 150px; text-align: center;">Rarity</p><p style="color: white; font-size: 14px; margin-bottom: 5px; max-width: 100px; opacity: 0.5;">Rarity</p></div></div></div></div></div><div class="_styles-module__horizontalSpacer__376IX" style="height: calc(50% - 205.361px);"></div></div>