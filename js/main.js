"use strict";
$(document).ready(function () {
  var method;
  var noop = function () { };
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeStamp",
    "trace",
    "warn"
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  var contextWindow = $(window);
  var $root = $("html, body");
  while (length--) {
    method = methods[length];

    if (!console[method]) {
      console[method] = noop;
    }
  }


  var list = $(".bg-img");
  for (var i = 0; i < list.length; i++) {
    var src = list[i].getAttribute("data-image-src");
    list[i].style.backgroundImage = "url('" + src + "')";
    list[i].style.backgroundRepeat = "no-repeat";
    list[i].style.backgroundPosition = "center";
    list[i].style.backgroundSize = "cover";
  }

  var listImgBlock = $(".img-block");
  for (var i = 0; i < listImgBlock.length; i++) {
    var src = listImgBlock[i].getAttribute("src");
    var divBlock = document.createElement("div");
    divBlock.setAttribute("class", "img");
    divBlock.style.backgroundImage = "url('" + src + "')";
    divBlock.style.backgroundRepeat = "no-repeat";
    divBlock.style.backgroundPosition = "center";
    divBlock.style.backgroundSize = "cover";
    $(listImgBlock[i]).after(divBlock);
    listImgBlock[i].style.display = "none";
  }

  var listColor = $(".bg-color");
  for (var i = 0; i < listColor.length; i++) {
    var src = listColor[i].getAttribute("data-bgcolor");
    listColor[i].style.backgroundColor = src;
  }


  try {

    $(".clock-countdown").downCount({
      date: $(".site-config").attr("data-date"),
      offset: +10
    });
  } catch (error) {

    console.log("clock disabled/unavailable");
  }


  var menuItems = $(".all-menu-wrapper .nav-link");
  var menuIcon = $(".menu-icon, #navMenuIcon");
  var menuBlock = $(".all-menu-wrapper");
  var reactToMenu = $(".page-main, .navbar-sidebar, .page-cover");
  var menuLinks = $(".navbar-mainmenu a, .navbar-sidebar a");

  menuIcon.on("click", function () {
    menuIcon.toggleClass("menu-visible");
    menuBlock.toggleClass("menu-visible");
    menuItems.toggleClass("menu-visible");
    reactToMenu.toggleClass("menu-visible");
    return false;
  });


  menuLinks.on("click", function () {
    menuIcon.removeClass("menu-visible");
    menuBlock.removeClass("menu-visible");
    menuItems.removeClass("menu-visible");
    reactToMenu.removeClass("menu-visible");
    return true;
  });




  if ($(".carousel-slick-alpha-demo") && $(".carousel-slick-alpha-demo").length > 0) {
    $(".carousel-slick-alpha-demo").slick({
      dots: true
    });
  }




































































  var videoBg = $(".video-container video, .video-container object");







  try {
    var pageSectionDivs = $(".page-fullpage .section");
    var headerLogo = $(".header-top .logo");
    var bodySelector = $("body");
    var sectionSelector = $(".section");
    var headerContainer = $(".hh-header");
    var slideElem = $(".slide");
    var arrowElem = $(".p-footer .arrow-d");
    var siteFooter = $(".page-footer");
    var siteHeader = $(".page-header");
    var pageElem = $(".section");
    var pageSections = [];
    var pageAnchors = [];
    var mainPage = $("#mainpage");
    var galleryPage = $("#gallerypage");
    var sendEmailForm = $(".send_email_form");
    var sendMessageForm = $(".send_message_form");
    var scrollOverflow = true;
    var css3 = true;

    if (contextWindow.width() < 601) {
      scrollOverflow = false;
      css3 = false;
    }
    if (contextWindow.height() < 480) {
      scrollOverflow = false;
      css3 = false;
    }

    for (var i = 0; i < pageSectionDivs.length; i++) {
      pageSections.push(pageSectionDivs[i]);
    }
    new Swiper(".carousel-swiper-alpha-demo .swiper-container", {
      pagination: ".carousel-swiper-alpha-demo .items-pagination",
      paginationClickable: ".carousel-alpha-demo .items-pagination",
      nextButton: ".carousel-swiper-alpha-demo .items-button-next",
      prevButton: ".carousel-swiper-alpha-demo .items-button-prev",
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      slidesPerView: 2,
      spaceBetween: 16,
      effect: "slide",
      breakpoints: {
        440: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });
    window.asyncEach(
      pageSections,
      function (pageSection, cb) {
        var anchor = pageSection.getAttribute("data-section");
        pageAnchors.push(anchor + "");
        cb();
      },
      function (err) {

        if (mainPage.width()) {

          mainPage.fullpage({
            menu: "#qmenu",
            anchors: pageAnchors,
            verticalCentered: false,
            css3: css3,
            navigation: true,
            responsiveWidth: 1024,
            responsiveHeight: 480,
            scrollOverflow: true,

            scrollOverflowOptions: {

              click: false,
              submit: true
            },
            normalScrollElements: ".section .scrollable",
            afterRender: function () {

              var parallaxCover = document.getElementById("parallax-cover");
              if (parallaxCover) {
                if (contextWindow.width() > 1024) {
                  var parallaxInstance = new Parallax(parallaxCover);
                }
              }







              videoBg.maximage("maxcover");



              var isIE = false || !!document.documentMode;
              if (isIE) {
                var contentColumns = $(".section .content .c-columns");
                contentColumns.height(contextWindow.height());
                for (var i = 0; i < contentColumns.length; i++) {
                  if (contentColumns[i].height <= contextWindow.height()) {
                    contentColumns[i].style.height = "100vh";
                  }
                }
              }



              var newsletterServerUrl = "./ajaxserver/serverfile.php";
              var messageServerUrl = "./ajaxserver/serverfile.php";


              if (
                sendEmailForm.attr("action") &&
                sendEmailForm.attr("action") != ""
              ) {
                newsletterServerUrl = sendEmailForm.attr("action");
              }
              if (
                sendMessageForm.attr("action") &&
                sendMessageForm.attr("action") != ""
              ) {
                messageServerUrl = sendMessageForm.attr("action");
              }

              sendEmailForm.initForm({
                serverUrl: newsletterServerUrl
              });
              sendMessageForm.initForm({
                serverUrl: messageServerUrl
              });
            },
            afterResize: function () {
              var pluginContainer = $(this);
              $.fn.fullpage.reBuild();

              if (contextWindow.width() > 1023) {
                location.reload();
              }
            },
            onLeave: function (index, nextIndex, direction) {

              arrowElem.addClass("gone");
              pageElem.addClass("transition");
              slideElem.removeClass("transition");
              pageElem.removeClass("transition");
            },
            afterLoad: function (anchorLink, index) {

              var pageCover = $(".page-cover");
              if (index > 1) {
                if (!siteHeader.hasClass("fp-scrolled")) {
                  siteHeader.addClass("fp-scrolled");
                }
                if (!siteFooter.hasClass("fp-scrolled")) {
                  siteFooter.addClass("fp-scrolled");
                }
              } else {
                pageCover.removeClass("scrolled");
                siteHeader.removeClass("fp-scrolled");
                siteFooter.removeClass("fp-scrolled");
              }
              var activeSection = $(".section.active");
              if (!activeSection.hasClass("section-anim")) {

                activeSection.addClass("section-anim");
              }

              if ($(".section.active").hasClass("hide-clock")) {
                headerContainer.addClass("gone");
              } else {
                headerContainer.removeClass("gone");
              }
            }
          });
        }


        if (galleryPage.width()) {

          galleryPage.fullpage({
            menu: "#qmenu",
            anchors: pageAnchors,
            verticalCentered: false,
            css3: css3,
            navigation: true,
            scrollOverflow: false,
            loopTop: true,
            loopBottom: true,
            responsiveHeight: 480,
            normalScrollElements: ".section .scrollable",
            scrollOverflowOptions: {
              click: false,
              submit: true
            },
            afterRender: function () { },
            afterResize: function () {
              var pluginContainer = $(this);
              $.fn.fullpage.reBuild();
            },
            afterLoad: function () { },
            onLeave: function (index, nextIndex, direction) {

              arrowElem.addClass("gone");
              pageElem.addClass("transition");
              slideElem.removeClass("transition");
              pageElem.removeClass("transition");
            }
          });
        }
      }
    );

    $(".scrolldown a, .scrolldown.down, .scroll.down").on("click", function () {
      try {

        $.fn.fullpage.moveSectionDown();
      } catch (error) {

        $root.animate(
          {
            scrollTop: window.innerHeight
          },
          400,
          function () { }
        );
      }
    });

    $(".scroll.up").on("click", function () {
      try {

        $.fn.fullpage.moveSectionUp();
      } catch (error) {

        $root.animate(
          {
            scrollTop: window.innerHeight
          },
          400,
          function () { }
        );
      }
    });


    var scrollHeight = $(document).height() - contextWindow.height();
    contextWindow.on("scroll", function () {
      var scrollpos = $(this).scrollTop();
      var siteHeaderFooter = $(".page-footer, .page-header");


      if (scrollpos > 100) {
        siteHeaderFooter.addClass("scrolled");
      } else {
        siteHeaderFooter.removeClass("scrolled");
      }
    });





    var shadowBall = $(".cursor-ball");
    $(".body-page").mousemove(function (e) {
      shadowBall.css("transform", "translateX(" + e.pageX + "px)");



    });
  } catch (err) {
    console.error(err)
  }
})
window.addEventListener("load", function () {
  $("#page-loader").addClass("p-hidden");
  $(".section").addClass("anim");
});
