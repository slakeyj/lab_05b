'use strict';

// resource for using jQuery media queries https://www.wiliam.com.au/wiliam-blog/jquery-and-css-media-queries
$(function () {
  if ($(window).width() <= 767) {
    $('div:nth-child(1)').css({ 'background-color': 'rgb(123, 25, 18)' });
    $('div:nth-child(2)').css({ 'background-color': 'rgba(225, 80, 75, 0.954)' });
    $('div:nth-child(3)').css({ 'background-color': 'rgba(255, 176, 28, 0.995)' });
    $('div:nth-child(4)').css({ 'background-color': 'rgb(250, 240, 93' });
    $('div:nth-child(5)').css({ 'background-color': 'rgb(117, 201, 104)' });
    $('div:nth-child(6)').css({ 'background-color': 'rgb(19, 162, 194)' });
    $('div:nth-child(7)').css({ 'background-color': 'rgb(5, 15, 148)' });
    $('div:nth-child(8)').css({ 'background-color': 'rgb(113, 97, 211)' });
    $('div:nth-child(9)').css({ 'background-color': 'rgb(170, 103, 165)' });
  } else if (($(window).width() >= 768)) {
    $('div:nth-child(1)').css({ 'background-color': 'rgb(232, 151, 151)' });
    $('div:nth-child(2)').css({ 'background-color': 'rgba(247, 211, 157, 0.954)' });
    $('div:nth-child(3)').css({ 'background-color': 'rgba(254, 222, 164, 0.995)' });
    $('div:nth-child(4)').css({ 'background-color': 'rgb(245, 243, 208)' });
    $('div:nth-child(5)').css({ 'background-color': 'rgb(215, 240, 212)' });
    $('div:nth-child(6)').css({ 'background-color': 'rgb(164, 215, 226)' });
    $('div:nth-child(7)').css({ 'background-color': 'rgb(162, 166, 223)' });
    $('div:nth-child(8)').css({ 'background-color': 'rgb(201, 195, 235)' });
    $('div:nth-child(9)').css({ 'background-color': 'rgb(230, 185, 227)' });

  }
  $(window).resize(function () {
    if ($(window).width() <= 767) {
      $('div:nth-child(1)').css({ 'background-color': 'rgb(123, 25, 18)' });
      $('div:nth-child(2)').css({ 'background-color': 'rgba(225, 80, 75, 0.954)' });
      $('div:nth-child(3)').css({ 'background-color': 'rgba(255, 176, 28, 0.995)' });
      $('div:nth-child(4)').css({ 'background-color': 'rgb(250, 240, 93' });
      $('div:nth-child(5)').css({ 'background-color': 'rgb(117, 201, 104)' });
      $('div:nth-child(6)').css({ 'background-color': 'rgb(19, 162, 194)' });
      $('div:nth-child(7)').css({ 'background-color': 'rgb(5, 15, 148)' });
      $('div:nth-child(8)').css({ 'background-color': 'rgb(113, 97, 211)' });
      $('div:nth-child(9)').css({ 'background-color': 'rgb(170, 103, 165)' });
    } else if (($(window).width() >= 768)) {
      $('div:nth-child(1)').css({ 'background-color': 'rgb(232, 151, 151)' });
      $('div:nth-child(2)').css({ 'background-color': 'rgba(247, 211, 157, 0.954)' });
      $('div:nth-child(3)').css({ 'background-color': 'rgba(254, 222, 164, 0.995)' });
      $('div:nth-child(4)').css({ 'background-color': 'rgb(245, 243, 208)' });
      $('div:nth-child(5)').css({ 'background-color': 'rgb(215, 240, 212)' });
      $('div:nth-child(6)').css({ 'background-color': 'rgb(164, 215, 226)' });
      $('div:nth-child(7)').css({ 'background-color': 'rgb(162, 166, 223)' });
      $('div:nth-child(8)').css({ 'background-color': 'rgb(201, 195, 235)' });
      $('div:nth-child(9)').css({ 'background-color': 'rgb(230, 185, 227)' });

    }

  });

});
