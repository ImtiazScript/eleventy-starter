/*!
 *
 *  //\\
 * //XX\\
 *
 * Dunbar Beddingfield JS
 * Made by Monogram. https://monogram.io
 * -----------------------------------------------------------------------------
 * Copyright (c) 2021 Dunbar Beddingfield, LLC. All rights reserved.
 *
 */
function sendContactForm(t) {
  var e = new FormData(whichFormIsIt);
  $submit
    .find("i.fas")
    .removeClass("fa-paper-plane")
    .addClass("fa-spinner-third fa-spin");
  var o = new XMLHttpRequest();
  o.open("POST", whichFormIsIt.action, !0),
    (o.onload = function (t) {
      JSON.parse(o.response);
      if (200 !== o.status)
        return (
          $submit
            .find("i.fas")
            .removeClass("fa-spinner-third fa-spin")
            .addClass("fa-times"),
          $submit
            .removeClass("bg-orange-500")
            .addClass("bg-red-400")
            .text("Oh no :("),
          $(whichFormIsIt).submit(),
          !1
        );
      $submit
        .find("i.fas")
        .removeClass("fa-spinner-third fa-spin")
        .addClass("fa-check"),
        $submit
          .removeClass("bg-orange-500")
          .addClass("bg-green-400")
          .text("Successfully sent!")
          .attr("disabled", ""),
        $(whichFormIsIt).find("input,textarea").attr("disabled", "disabled");
    }),
    o.send(e);
}
!(function (n) {
  (n.belowthefold = function (t, e) {
    return (
      n(window).height() + n(window).scrollTop() <=
      n(t).offset().top - e.threshold
    );
  }),
    (n.abovethetop = function (t, e) {
      return (
        n(window).scrollTop() >=
        n(t).offset().top + n(t).outerHeight() - e.threshold
      );
    }),
    (n.rightofscreen = function (t, e) {
      return (
        n(window).width() + n(window).scrollLeft() <=
        n(t).offset().left - e.threshold
      );
    }),
    (n.leftofscreen = function (t, e) {
      return (
        n(window).scrollLeft() >=
        n(t).offset().left + n(t).outerWidth() - e.threshold
      );
    }),
    (n.inviewport = function (t, e) {
      return !(
        n.rightofscreen(t, e) ||
        n.leftofscreen(t, e) ||
        n.belowthefold(t, e) ||
        n.abovethetop(t, e)
      );
    }),
    n.extend(n.expr[":"], {
      "below-the-fold": function (t, e, o) {
        return n.belowthefold(t, { threshold: 0 });
      },
      "above-the-top": function (t, e, o) {
        return n.abovethetop(t, { threshold: 0 });
      },
      "left-of-screen": function (t, e, o) {
        return n.leftofscreen(t, { threshold: 0 });
      },
      "right-of-screen": function (t, e, o) {
        return n.rightofscreen(t, { threshold: 0 });
      },
      "in-viewport": function (t, e, o) {
        return n.inviewport(t, { threshold: 50 });
      },
    });
})(jQuery),
  $(window).on("load scroll resize", function () {
    $(".animate:in-viewport").addClass("in");
  }),
  $(function () {
    var e;
    function o() {
      "#contact" == e && $("#contact").find("input").first().focus();
    }
    $(document).on("click", "a[data-scroll]", function (t) {
      t.preventDefault(),
        (e = $(this).attr("href")),
        TweenLite.to(window, 0.75, {
          scrollTo: { y: e, autoKill: !1 },
          ease: Power3.easeInOut,
          onComplete: o,
        });
    });
    var n = $("html"),
      s = $(".modal"),
      i = !1;
    $("[data-modal]").on("click", function (t) {
      var e;
      t.preventDefault(),
        (s =
          "" == $(this).attr("data-modal")
            ? $(".modal")
            : $("#" + $(this).attr("data-modal"))),
        i ||
          ((e = s).removeClass("is-hidden"),
          setTimeout(function () {
            e.addClass("is-active");
          }, 10),
          n.addClass("is-clipped"),
          (i = !0));
    }),
      $(".modal-background, .modal-close, [data-modal-close]").on(
        "click",
        function (t) {
          var e;
          t.preventDefault(),
            i &&
              ((e = s).removeClass("is-active"),
              e.one("transitionend", function () {
                i || e.addClass("is-hidden");
              }),
              n.removeClass("is-clipped"),
              (i = !1));
        }
      ),
      $("input,textarea").change(function () {
        $(this).val()
          ? $(this).addClass("is-filled")
          : $(this).removeClass("is-filled");
      });
  }),
  $(function () {
    ($contactForm = $("#contact")),
      ($submit = $contactForm.find(".button.is-primary")),
      $("form.contact").submit(function (t) {
        t.preventDefault(),
          (whichFormIsIt = t.target),
          ($submit = $(whichFormIsIt).find("button")),
          grecaptcha.execute();
      });
  });
