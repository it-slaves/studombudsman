google.maps.__gjsload__('stats', function(_) {
    var $0 = function() {
            this.b = new _.fl
        },
        a1 = function(a) {
            var b = 0,
                c = 0;
            a.b.forEach(function(a) {
                b += a.Wo;
                c += a.xo
            });
            return c ? b / c : 0
        },
        b1 = function(a, b, c) {
            var d = [];
            _.gb(a, function(a, c) {
                d.push(c + b + a)
            });
            return d.join(c)
        },
        c1 = function(a) {
            var b = {};
            _.gb(a, function(a, d) {
                b[(0, window.encodeURIComponent)(d)] = (0, window.encodeURIComponent)(a).replace(/%7C/g, "|")
            });
            return b1(b, ":", ",")
        },
        d1 = function(a, b, c) {
            this.l = b;
            this.f = a + "/maps/gen_204";
            this.j = c
        },
        e1 = function(a, b, c, d) {
            var e = {};
            e.host = window.document.location && window.document.location.host ||
            window.location.host;
            e.v = a;
            e.r = Math.round(1 / b);
            c && (e.client = c);
            d && (e.key = d);
            return e
        },
        f1 = function(a, b, c, d, e) {
            this.m = a;
            this.C = b;
            this.l = c;
            this.f = d;
            this.j = e;
            this.b = new _.fl;
            this.B = _.Ua()
        },
        h1 = function(a, b, c, d, e) {
            var f = _.N(_.R, 23, 500);
            var g = _.N(_.R, 22, 2);
            this.D = a;
            this.F = b;
            this.H = f;
            this.l = g;
            this.C = c;
            this.m = d;
            this.B = e;
            this.f = new _.fl;
            this.b = 0;
            this.j = _.Ua();
            g1(this)
        },
        g1 = function(a) {
            window.setTimeout(function() {
                i1(a);
                g1(a)
            }, Math.min(a.H * Math.pow(a.l, a.b), 2147483647))
        },
        j1 = function(a, b, c) {
            a.f.set(b, c)
        },
        i1 = function(a) {
            var b =
            e1(a.F, a.C, a.m, a.B);
            b.t = a.b + "-" + (_.Ua() - a.j);
            a.f.forEach(function(a, d) {
                a = a();
                0 < a && (b[d] = Number(a.toFixed(2)) + (_.Gm() ? "-if" : ""))
            });
            a.D.b({
                ev: "api_snap"
            }, b);
            ++a.b
        },
        k1 = function(a, b, c, d, e) {
            this.B = a;
            this.C = b;
            this.m = c;
            this.j = d;
            this.l = e;
            this.f = {};
            this.b = []
        },
        l1 = function(a, b, c, d) {
            this.j = a;
            _.G.bind(this.j, "set_at", this, this.l);
            _.G.bind(this.j, "insert_at", this, this.l);
            this.B = b;
            this.C = c;
            this.m = d;
            this.f = 0;
            this.b = {};
            this.l()
        },
        m1 = function() {
            this.j = _.O(_.R, 6);
            this.C = _.Bf();
            this.b = new d1(_.yg[35] ? _.O(_.Cf(_.R), 11) :
            _.ww, _.pj, window.document);
            new l1(_.cj, (0, _.p)(this.b.b, this.b), _.Gf, !!this.j);
            var a = _.O(new _.vf(_.R.data[3]), 1);
            this.D = a.split(".")[1] || a;
            this.F = {};
            this.B = {};
            this.m = {};
            this.H = {};
            this.ea = _.N(_.R, 0, 1);
            _.oj && (this.l = new h1(this.b, this.D, this.ea, this.j, this.C))
        };
    $0.prototype.f = function(a, b, c) {
        this.b.set(_.$c(a), {
            Wo: b,
            xo: c
        })
    };
    d1.prototype.b = function(a, b) {
        b = b || {};
        var c = _.lk().toString(36);
        b.src = "apiv3";
        b.token = this.l;
        b.ts = c.substr(c.length - 6);
        a.cad = c1(b);
        a = b1(a, "=", "&");
        a = this.f + "?target=api&" + a;
        this.j.createElement("img").src = a;
        (b = _.pb.__gm_captureCSI) && b(a)
    };
    f1.prototype.D = function(a, b) {
        b = _.m(b) ? b : 1;
        this.b.isEmpty() && window.setTimeout((0, _.p)(function() {
            var a = e1(this.C, this.l, this.f, this.j);
            a.t = _.Ua() - this.B;
            var b = this.b;
            _.gl(b);
            for (var e = {}, f = 0; f < b.b.length; f++) {
                var g = b.b[f];
                e[g] = b.G[g]
            }
            _.Vz(a, e);
            this.b.clear();
            this.m.b({
                ev: "api_maprft"
            }, a)
        }, this), 500);
        b = this.b.get(a, 0) + b;
        this.b.set(a, b)
    };
    k1.prototype.D = function(a) {
        this.f[a] || (this.f[a] = !0, this.b.push(a), 2 > this.b.length && _.rA(this, this.F, 500))
    };
    k1.prototype.F = function() {
        for (var a = e1(this.C, this.m, this.j, this.l), b = 0, c; c = this.b[b]; ++b)
            a[c] = "1";
        a.hybrid = +_.km();
        this.b.length = 0;
        this.B.b({
            ev: "api_mapft"
        }, a)
    };
    l1.prototype.l = function() {
        for (var a; a = this.j.removeAt(0);) {
            var b = a.Xn;
            a = a.timestamp - this.C;
            ++this.f;
            this.b[b] || (this.b[b] = 0);
            ++this.b[b];
            if (20 <= this.f && !(this.f % 5)) {
                var c = {};
                c.s = b;
                c.sr = this.b[b];
                c.tr = this.f;
                c.te = a;
                c.hc = this.m ? "1" : "0";
                this.B({
                    ev: "api_services"
                }, c)
            }
        }
    };
    m1.prototype.V = function(a) {
        a = _.$c(a);
        this.F[a] || (this.F[a] = new k1(this.b, this.D, this.ea, this.j, this.C));
        return this.F[a]
    };
    m1.prototype.S = function(a) {
        a = _.$c(a);
        this.B[a] || (this.B[a] = new f1(this.b, this.D, _.N(_.R, 0, 1), this.j, this.C));
        return this.B[a]
    };
    m1.prototype.f = function(a) {
        if (this.l) {
            this.m[a] || (this.m[a] = new _.jB, j1(this.l, a, function() {
                return b.cb()
            }));
            var b = this.m[a];
            return b
        }
    };
    m1.prototype.N = function(a) {
        if (this.l) {
            this.H[a] || (this.H[a] = new $0, j1(this.l, a, function() {
                return a1(b)
            }));
            var b = this.H[a];
            return b
        }
    };
    var n1 = new m1;
    _.me("stats", n1);
});
