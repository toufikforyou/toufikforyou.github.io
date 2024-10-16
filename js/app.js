// for type white
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 100;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("textAnimation");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".textAnimation > .wrap { border-right: 0.08em solid green}";
  document.body.appendChild(css);
};

// My Skill Animation jQuery
$(".my-skill-percentage").each(function () {
  var $this = $(this);
  var count = $this.attr("count");
  $this.css("width", count + "%");
  $({ countValue: 0 }).animate(
    { countValue: count },
    {
      duration: 1000,
      step: function () {
        $this.attr("count", Math.floor(this.countValue) + "%");
      },
      complete: function () {
        $this.attr("count", Math.floor(this.countValue) + "%");
      },
    }
  );
});

// This code is menu mobail toggle;
function menuToggle() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("menuActive");
}