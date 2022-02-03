!function (t, e) { "use strict"; function i(i, s) { function o() { h.width = i.offsetWidth, h.height = i.offsetHeight, d.fillStyle = s.dotColor, d.strokeStyle = s.lineColor, d.lineWidth = s.lineWidth } function l() { if (u) { f = t.innerWidth, c = t.innerHeight, d.clearRect(0, 0, h.width, h.height); for (let t = 0; t < y.length; t++)y[t].updatePosition(); for (e = 0; e < y.length; e++)y[e].draw(); M || requestAnimationFrame(l) } } function r() { switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = { x: Math.ceil(Math.random() * h.width), y: Math.ceil(Math.random() * h.height) }, this.speed = {}, s.directionX) { case "left": this.speed.x = +(-s.maxSpeedX + Math.random() * s.maxSpeedX - s.minSpeedX).toFixed(2); break; case "right": this.speed.x = +(Math.random() * s.maxSpeedX + s.minSpeedX).toFixed(2); break; default: this.speed.x = +(-s.maxSpeedX / 2 + Math.random() * s.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? s.minSpeedX : -s.minSpeedX }switch (s.directionY) { case "up": this.speed.y = +(-s.maxSpeedY + Math.random() * s.maxSpeedY - s.minSpeedY).toFixed(2); break; case "down": this.speed.y = +(Math.random() * s.maxSpeedY + s.minSpeedY).toFixed(2); break; default: this.speed.y = +(-s.maxSpeedY / 2 + Math.random() * s.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? s.minSpeedY : -s.minSpeedY } } function p(t) { void 0 !== s[t] && s[t].call(i) } let h, d, f, c, x, m, u = !!e.createElement("canvas").getContext, y = [], g = 0, w = 0, S = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), X = !!t.DeviceOrientationEvent, Y = 0, O = 0, M = !1; return s = function (t) { t = t || {}; for (let e = 1; e < arguments.length; e++) { let i = arguments[e]; if (i) for (let e in i) i.hasOwnProperty(e) && ("object" == typeof i[e] ? deepExtend(t[e], i[e]) : t[e] = i[e]) } return t }({}, t[a].defaults, s), r.prototype.draw = function () { d.beginPath(), d.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, s.particleRadius / 2, 0, 2 * Math.PI, !0), d.closePath(), d.fill(), d.beginPath(); for (let t = y.length - 1; t > this.stackPos; t--) { let e = y[t], i = this.position.x - e.position.x, a = this.position.y - e.position.y; Math.sqrt(i * i + a * a).toFixed(2) < s.proximity && (d.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), s.curvedLines ? d.quadraticCurveTo(Math.max(e.position.x, e.position.x), Math.min(e.position.y, e.position.y), e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY) : d.lineTo(e.position.x + e.parallaxOffsetX, e.position.y + e.parallaxOffsetY)) } d.stroke(), d.closePath() }, r.prototype.updatePosition = function () { s.parallax && (X && !S ? (x = (f - 0) / 60 * (Y - -30) + 0, m = (c - 0) / 60 * (O - -30) + 0) : (x = g, m = w), this.parallaxTargX = (x - f / 2) / (s.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (m - c / 2) / (s.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10); let t = i.offsetWidth, e = i.offsetHeight; switch (s.directionX) { case "left": this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = t - this.parallaxOffsetX); break; case "right": this.position.x + this.speed.x + this.parallaxOffsetX > t && (this.position.x = 0 - this.parallaxOffsetX); break; default: (this.position.x + this.speed.x + this.parallaxOffsetX > t || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x) }switch (s.directionY) { case "up": this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = e - this.parallaxOffsetY); break; case "down": this.position.y + this.speed.y + this.parallaxOffsetY > e && (this.position.y = 0 - this.parallaxOffsetY); break; default: (this.position.y + this.speed.y + this.parallaxOffsetY > e || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y) }this.position.x += this.speed.x, this.position.y += this.speed.y }, r.prototype.setStackPos = function (t) { this.stackPos = t }, function () { if (u) { (h = e.createElement("canvas")).className = "pg-canvas", h.style.display = "block", i.insertBefore(h, i.firstChild), d = h.getContext("2d"), o(); for (let t = Math.round(h.width * h.height / s.density), e = 0; t > e; e++) { let t = new r; t.setStackPos(e), y.push(t) } t.addEventListener("resize", function () { !function () { o(); for (let t = i.offsetWidth, e = i.offsetHeight, a = y.length - 1; a >= 0; a--)(y[a].position.x > t || y[a].position.y > e) && y.splice(a, 1); let t = Math.round(h.width * h.height / s.density); if (t > y.length) for (; t > y.length;) { let t = new r; y.push(t) } else t < y.length && y.splice(t); for (a = y.length - 1; a >= 0; a--)y[a].setStackPos(a) }() }, !1), e.addEventListener("mousemove", function (t) { g = t.pageX, w = t.pageY }, !1), X && !S && t.addEventListener("deviceorientation", function () { O = Math.min(Math.max(-event.beta, -30), 30), Y = Math.min(Math.max(-event.gamma, -30), 30) }, !0), l(), p("onInit") } }(), { option: function (t, e) { return e ? void (s[t] = e) : s[t] }, destroy: function () { h.parentNode.removeChild(h), p("onDestroy"), n && n(i).removeData("plugin_" + a) }, start: function () { M = !1, l() }, pause: function () { M = !0 } } } let a = "particleground", n = t.jQuery; t[a] = function (t, e) { return new i(t, e) }, t[a].defaults = { minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: "center", directionY: "center", density: 1e4, dotColor: "#666666", lineColor: "#666666", particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: function () { }, onDestroy: function () { } }, n && (n.fn[a] = function (t) { if ("string" == typeof arguments[0]) { let t, e = arguments[0], i = Array.prototype.slice.call(arguments, 1); return this.each(function () { n.data(this, "plugin_" + a) && "function" == typeof n.data(this, "plugin_" + a)[e] && (t = n.data(this, "plugin_" + a)[e].apply(this, i)) }), void 0 !== t ? t : this } return "object" != typeof t && t ? void 0 : this.each(function () { n.data(this, "plugin_" + a) || n.data(this, "plugin_" + a, new i(this, t)) }) }) }(window, document), function () { for (let t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (e) { let i = (new Date).getTime(), a = Math.max(0, 16 - (i - t)), n = window.setTimeout(function () { e(i + a) }, a); return t = i + a, n }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) { clearTimeout(t) }) }(), particleground(document.getElementById("particles"), { dotColor: "rgba(255, 255, 255, 1)", lineColor: "rgba(255, 255, 255, 0.05)", minSpeedX: .3, maxSpeedX: .6, minSpeedY: .3, maxSpeedY: .6, density: 75e3, curvedLines: !1, proximity: 250, parallaxMultiplier: 10, particleRadius: 4 }); let res = new XMLHttpRequest; res.open("GET", "https://spreadsheets.google.com/feeds/cells/1Qt9_MFzGkOIkhbm82kPrTKH7xh5zSCecYTVrsJ3EKt4/1/public/full?alt=json", !0), res.send(), res.onreadystatechange = async function () { let e; try { (e = JSON.parse(res.responseText)).feed.entry.forEach(e => { let t = e.content.$t.indexOf(":"), s = document.getElementsByClassName(e.content.$t.substring(0, t)); if (s && s.length > 0) for (let n = 0; n < s.length; n++)s[n].innerHTML = e.content.$t.substring(t + 1) }) } catch (e) { } }; window.onload = function () { setTimeout(async () => { let t = document.getElementById("preloader"), e = setInterval(function () { t.style.opacity || (t.style.opacity = 1), t.style.opacity > 0 ? t.style.opacity -= .2 : clearInterval(e) }, 200) }, 1000); }; document.getElementById("preloader").style.pointerEvents = "none"; document.onkeyup = function (e) { if ((e = e || window.event).altKey && 65 == e.which) { document.getElementById("particles").style.display = "none"; let e, t, a = [], n = [], o = ["#FF0092", "#540045", "#C60052", "#FF714B", "#EAFF87", "#ACFFE9"], l = 0; const h = { x: window.innerWidth / 2, y: window.innerHeight / 2 }, i = document.getElementsByTagName("CANVAS")[0], r = i.getContext("2d"), d = () => { r.clearRect(0, 0, e, t); for (var o = 0, l = a.length; o < l; o++)a[o][4] = 0; for (o = 0, l = n.length; o < l; o++) { var h = Math.floor(n[o].y / 10) * (Math.floor(e / 10) + 1) + Math.floor(n[o].x / 10); a[h] && (a[h][4] = n[o].color, a[h][5] = n[o].alpha), n[o].alpha > 0 && (n[o].alpha -= .008), n[o].alpha < 0 && (n[o].alpha = 0), n[o].x += n[o].vx, n[o].y += n[o].vy } for (o = 0, l = a.length; o < l; o++)r.globalAlpha = 1, r.fillStyle = "#000000", r.fillRect(a[o][0], a[o][1], a[o][2], a[o][3]), r.globalAlpha = a[o][5], r.fillStyle = a[o][4], r.fillRect(a[o][0], a[o][1], a[o][2], a[o][3]) }, c = () => { e = window.innerWidth, t = window.innerHeight, i.width = e, i.height = t, a = []; for (var n = 0; n < t / 10; n++)for (var o = 0; o < e / 10; o++)a.push([10 * o, 10 * n, 8, 8, "#000000", 1]) }, v = () => { p(), p(), d(), requestAnimationFrame(v) }, f = () => { for (var a = 0; a < 300; a++)n.push({ x: e / 2, y: t / 2, alpha: 0, color: o[a % 5], vx: 2 * Math.random() - 1, vy: 2 * Math.random() - 1 }) }, p = () => { n[l].x = h.x, n[l].y = h.y, n[l].alpha = 1, ++l > 299 && (l = 0) }; c(), f(), v(), window.addEventListener("resize", c), window.addEventListener("mousemove", function (e) { h.x = e.pageX, h.y = e.pageY }); const u = e => { e.preventDefault(), h.x = e.touches[0].pageX, h.y = e.touches[0].pageY }; document.addEventListener("touchstart", u), document.addEventListener("touchmove", u) } }; 