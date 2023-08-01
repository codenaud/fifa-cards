$(document).ready(function () {
  const bannerMan = $('.banner-man');
  const hero = $('.hero');

  hero.mousemove(function (e) {
    const mouseX = e.pageX - $(this).offset().left;
    const mouseY = e.pageY - $(this).offset().top;

    const moveX = (mouseX - $(this).width() / 2) / 15; // Aumenta el valor aquí
    const moveY = (mouseY - $(this).height() / 2) / 15; // Aumenta el valor aquí

    bannerMan.css('transform', `translate(-50%, -50%) translateX(${moveX}px) translateY(${moveY}px)`);
  });
});
