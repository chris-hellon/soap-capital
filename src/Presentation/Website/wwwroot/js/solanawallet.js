/*! For license information please see jsinterop.js.LICENSE.txt */
var solanawallet;
(() => {
    var t = {
            1506: (t) => {
                (t.exports = function (t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t;
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            8926: (t) => {
                function e(t, e, r, n, i, o, s) {
                    try {
                        var a = t[o](s),
                            f = a.value;
                    } catch (t) {
                        return void r(t);
                    }
                    a.done ? e(f) : Promise.resolve(f).then(n, i);
                }
                (t.exports = function (t) {
                    return function () {
                        var r = this,
                            n = arguments;
                        return new Promise(function (i, o) {
                            var s = t.apply(r, n);
                            function a(t) {
                                e(s, i, o, a, f, "next", t);
                            }
                            function f(t) {
                                e(s, i, o, a, f, "throw", t);
                            }
                            a(void 0);
                        });
                    };
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            4575: (t) => {
                (t.exports = function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            3913: (t) => {
                function e(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
                    }
                }
                (t.exports = function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t;
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            9754: (t) => {
                function e(r) {
                    return (
                        (t.exports = e = Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (t) {
                                return t.__proto__ || Object.getPrototypeOf(t);
                            }),
                            (t.exports.default = t.exports),
                            (t.exports.__esModule = !0),
                            e(r)
                    );
                }
                (t.exports = e), (t.exports.default = t.exports), (t.exports.__esModule = !0);
            },
            2205: (t, e, r) => {
                var n = r(9489);
                (t.exports = function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && n(t, e);
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            5318: (t) => {
                (t.exports = function (t) {
                    return t && t.__esModule ? t : { default: t };
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            8585: (t, e, r) => {
                var n = r(8).default,
                    i = r(1506);
                (t.exports = function (t, e) {
                    if (e && ("object" === n(e) || "function" == typeof e)) return e;
                    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                    return i(t);
                }),
                    (t.exports.default = t.exports),
                    (t.exports.__esModule = !0);
            },
            9489: (t) => {
                function e(r, n) {
                    return (
                        (t.exports = e =
                            Object.setPrototypeOf ||
                            function (t, e) {
                                return (t.__proto__ = e), t;
                            }),
                            (t.exports.default = t.exports),
                            (t.exports.__esModule = !0),
                            e(r, n)
                    );
                }
                (t.exports = e), (t.exports.default = t.exports), (t.exports.__esModule = !0);
            },
            8: (t) => {
                function e(r) {
                    return (
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? ((t.exports = e = function (t) {
                                return typeof t;
                            }),
                                (t.exports.default = t.exports),
                                (t.exports.__esModule = !0))
                            : ((t.exports = e = function (t) {
                                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                            }),
                                (t.exports.default = t.exports),
                                (t.exports.__esModule = !0)),
                            e(r)
                    );
                }
                (t.exports = e), (t.exports.default = t.exports), (t.exports.__esModule = !0);
            },
            7757: (t, e, r) => {
                t.exports = r(5666);
            },
            9386: function (t, e, r) {
                "use strict";
                var n,
                    i =
                        (this && this.__extends) ||
                        ((n = function (t, e) {
                            return (
                                (n =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                    n(t, e)
                            );
                        }),
                            function (t, e) {
                                if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                                function r() {
                                    this.constructor = t;
                                }
                                n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                            });
                (e.__esModule = !0),
                    (e.s16 = e.s8 = e.nu64be = e.u48be = e.u40be = e.u32be = e.u24be = e.u16be = e.nu64 = e.u48 = e.u40 = e.u32 = e.u24 = e.u16 = e.u8 = e.offset = e.greedy = e.Constant = e.UTF8 = e.CString = e.Blob = e.Boolean = e.BitField = e.BitStructure = e.VariantLayout = e.Union = e.UnionLayoutDiscriminator = e.UnionDiscriminator = e.Structure = e.Sequence = e.DoubleBE = e.Double = e.FloatBE = e.Float = e.NearInt64BE = e.NearInt64 = e.NearUInt64BE = e.NearUInt64 = e.IntBE = e.Int = e.UIntBE = e.UInt = e.OffsetLayout = e.GreedyCount = e.ExternalLayout = e.bindConstructorLayout = e.nameWithProperty = e.Layout = e.uint8ArrayToBuffer = e.checkUint8Array = void 0),
                    (e.constant = e.utf8 = e.cstr = e.blob = e.unionLayoutDiscriminator = e.union = e.seq = e.bits = e.struct = e.f64be = e.f64 = e.f32be = e.f32 = e.ns64be = e.s48be = e.s40be = e.s32be = e.s24be = e.s16be = e.ns64 = e.s48 = e.s40 = e.s32 = e.s24 = void 0);
                var o = r(8764);
                function s(t) {
                    if (!(t instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array");
                }
                function a(t) {
                    return s(t), o.Buffer.from(t.buffer, t.byteOffset, t.length);
                }
                (e.checkUint8Array = s), (e.uint8ArrayToBuffer = a);
                var f = (function () {
                    function t(t, e) {
                        if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
                        (this.span = t), (this.property = e);
                    }
                    return (
                        (t.prototype.makeDestinationObject = function () {
                            return {};
                        }),
                            (t.prototype.decode = function (t, e) {
                                throw new Error("Layout is abstract");
                            }),
                            (t.prototype.encode = function (t, e, r) {
                                throw new Error("Layout is abstract");
                            }),
                            (t.prototype.getSpan = function (t, e) {
                                if (0 > this.span) throw new RangeError("indeterminate span");
                                return this.span;
                            }),
                            (t.prototype.replicate = function (t) {
                                var e = Object.create(this.constructor.prototype);
                                return Object.assign(e, this), (e.property = t), e;
                            }),
                            (t.prototype.fromArray = function (t) {}),
                            t
                    );
                })();
                function u(t, e) {
                    return e.property ? t + "[" + e.property + "]" : t;
                }
                (e.Layout = f),
                    (e.nameWithProperty = u),
                    (e.bindConstructorLayout = function (t, e) {
                        if ("function" != typeof t) throw new TypeError("Class must be constructor");
                        if (Object.prototype.hasOwnProperty.call(t, "layout_")) throw new Error("Class is already bound to a layout");
                        if (!(e && e instanceof f)) throw new TypeError("layout must be a Layout");
                        if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
                        (t.layout_ = e),
                            (e.boundConstructor_ = t),
                            (e.makeDestinationObject = function () {
                                return new t();
                            }),
                            Object.defineProperty(t.prototype, "encode", {
                                value: function (t, r) {
                                    return e.encode(this, t, r);
                                },
                                writable: !0,
                            }),
                            Object.defineProperty(t, "decode", {
                                value: function (t, r) {
                                    return e.decode(t, r);
                                },
                                writable: !0,
                            });
                    });
                var c = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.isCount = function () {
                                throw new Error("ExternalLayout is abstract");
                            }),
                            e
                    );
                })(f);
                e.ExternalLayout = c;
                var h = (function (t) {
                    function e(e, r) {
                        var n = this;
                        if ((void 0 === e && (e = 1), !Number.isInteger(e) || 0 >= e)) throw new TypeError("elementSpan must be a (positive) integer");
                        return ((n = t.call(this, -1, r) || this).elementSpan = e), n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.isCount = function () {
                                return !0;
                            }),
                            (e.prototype.decode = function (t, e) {
                                s(t), void 0 === e && (e = 0);
                                var r = t.length - e;
                                return Math.floor(r / this.elementSpan);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return 0;
                            }),
                            e
                    );
                })(c);
                e.GreedyCount = h;
                var d = (function (t) {
                    function e(e, r, n) {
                        var i = this;
                        if (!(e instanceof f)) throw new TypeError("layout must be a Layout");
                        if (void 0 === r) r = 0;
                        else if (!Number.isInteger(r)) throw new TypeError("offset must be integer or undefined");
                        return ((i = t.call(this, e.span, n || e.property) || this).layout = e), (i.offset = r), i;
                    }
                    return (
                        i(e, t),
                            (e.prototype.isCount = function () {
                                return this.layout instanceof l || this.layout instanceof p;
                            }),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), this.layout.decode(t, e + this.offset);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), this.layout.encode(t, e, r + this.offset);
                            }),
                            e
                    );
                })(c);
                e.OffsetLayout = d;
                var l = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        if (6 < n.span) throw new RangeError("span must not exceed 6 bytes");
                        return n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readUIntLE(e, this.span);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeUIntLE(t, r, this.span), this.span;
                            }),
                            e
                    );
                })(f);
                e.UInt = l;
                var p = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        if (6 < n.span) throw new RangeError("span must not exceed 6 bytes");
                        return n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readUIntBE(e, this.span);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeUIntBE(t, r, this.span), this.span;
                            }),
                            e
                    );
                })(f);
                e.UIntBE = p;
                var b = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        if (6 < n.span) throw new RangeError("span must not exceed 6 bytes");
                        return n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readIntLE(e, this.span);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeIntLE(t, r, this.span), this.span;
                            }),
                            e
                    );
                })(f);
                e.Int = b;
                var y = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, e, r) || this;
                        if (6 < n.span) throw new RangeError("span must not exceed 6 bytes");
                        return n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readIntBE(e, this.span);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeIntBE(t, r, this.span), this.span;
                            }),
                            e
                    );
                })(f);
                e.IntBE = y;
                var m = Math.pow(2, 32);
                function g(t) {
                    var e = Math.floor(t / m);
                    return { hi32: e, lo32: t - e * m };
                }
                function v(t, e) {
                    return t * m + e;
                }
                var w = (function (t) {
                    function e(e) {
                        return t.call(this, 8, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = a(t),
                                    n = r.readUInt32LE(e);
                                return v(r.readUInt32LE(e + 4), n);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = g(t),
                                    i = a(e);
                                return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
                            }),
                            e
                    );
                })(f);
                e.NearUInt64 = w;
                var M = (function (t) {
                    function e(e) {
                        return t.call(this, 8, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = a(t);
                                return v(r.readUInt32BE(e), r.readUInt32BE(e + 4));
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = g(t),
                                    i = a(e);
                                return i.writeUInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8;
                            }),
                            e
                    );
                })(f);
                e.NearUInt64BE = M;
                var _ = (function (t) {
                    function e(e) {
                        return t.call(this, 8, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = a(t),
                                    n = r.readUInt32LE(e);
                                return v(r.readInt32LE(e + 4), n);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = g(t),
                                    i = a(e);
                                return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
                            }),
                            e
                    );
                })(f);
                e.NearInt64 = _;
                var A = (function (t) {
                    function e(e) {
                        return t.call(this, 8, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = a(t);
                                return v(r.readInt32BE(e), r.readUInt32BE(e + 4));
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = g(t),
                                    i = a(e);
                                return i.writeInt32BE(n.hi32, r), i.writeUInt32BE(n.lo32, r + 4), 8;
                            }),
                            e
                    );
                })(f);
                e.NearInt64BE = A;
                var S = (function (t) {
                    function e(e) {
                        return t.call(this, 4, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readFloatLE(e);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeFloatLE(t, r), 4;
                            }),
                            e
                    );
                })(f);
                e.Float = S;
                var x = (function (t) {
                    function e(e) {
                        return t.call(this, 4, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readFloatBE(e);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeFloatBE(t, r), 4;
                            }),
                            e
                    );
                })(f);
                e.FloatBE = x;
                var E = (function (t) {
                    function e(e) {
                        return t.call(this, 8, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readDoubleLE(e);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeDoubleLE(t, r), 8;
                            }),
                            e
                    );
                })(f);
                e.Double = E;
                var k = (function (t) {
                    function e(e) {
                        return t.call(this, 8, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return void 0 === e && (e = 0), a(t).readDoubleBE(e);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return void 0 === r && (r = 0), a(e).writeDoubleBE(t, r), 8;
                            }),
                            e
                    );
                })(f);
                e.DoubleBE = k;
                var I = (function (t) {
                    function e(e, r, n) {
                        var i = this;
                        if (!(e instanceof f)) throw new TypeError("elementLayout must be a Layout");
                        if (!((r instanceof c && r.isCount()) || (Number.isInteger(r) && 0 <= r))) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
                        var o = -1;
                        return !(r instanceof c) && 0 < e.span && (o = r * e.span), ((i = t.call(this, o, n) || this).elementLayout = e), (i.count = r), i;
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                if (0 <= this.span) return this.span;
                                void 0 === e && (e = 0);
                                var r = 0,
                                    n = this.count;
                                if ((n instanceof c && (n = n.decode(t, e)), 0 < this.elementLayout.span)) r = n * this.elementLayout.span;
                                else for (var i = 0; i < n; ) (r += this.elementLayout.getSpan(t, e + r)), ++i;
                                return r;
                            }),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = [],
                                    n = 0,
                                    i = this.count;
                                for (i instanceof c && (i = i.decode(t, e)); n < i; ) r.push(this.elementLayout.decode(t, e)), (e += this.elementLayout.getSpan(t, e)), (n += 1);
                                return r;
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = this.elementLayout,
                                    i = t.reduce(function (t, i) {
                                        return t + n.encode(i, e, r + t);
                                    }, 0);
                                return this.count instanceof c && this.count.encode(t.length, e, r), i;
                            }),
                            e
                    );
                })(f);
                e.Sequence = I;
                var B = (function (t) {
                    function e(e, r, n) {
                        var i = this;
                        if (
                            !Array.isArray(e) ||
                            !e.reduce(function (t, e) {
                                return t && e instanceof f;
                            }, !0)
                        )
                            throw new TypeError("fields must be array of Layout instances");
                        "boolean" == typeof r && void 0 === n && ((n = r), (r = void 0));
                        for (var o = 0, s = e; o < s.length; o++) {
                            var a = s[o];
                            if (0 > a.span && void 0 === a.property) throw new Error("fields cannot contain unnamed variable-length layout");
                        }
                        var u = -1;
                        try {
                            u = e.reduce(function (t, e) {
                                return t + e.getSpan();
                            }, 0);
                        } catch (t) {}
                        return ((i = t.call(this, u, r) || this).fields = e), (i.decodePrefixes = !!n), i;
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                if (0 <= this.span) return this.span;
                                void 0 === e && (e = 0);
                                var r = 0;
                                try {
                                    r = this.fields.reduce(function (r, n) {
                                        var i = n.getSpan(t, e);
                                        return (e += i), r + i;
                                    }, 0);
                                } catch (t) {
                                    throw new RangeError("indeterminate span");
                                }
                                return r;
                            }),
                            (e.prototype.decode = function (t, e) {
                                s(t), void 0 === e && (e = 0);
                                for (var r = this.makeDestinationObject(), n = 0, i = this.fields; n < i.length; n++) {
                                    var o = i[n];
                                    if ((void 0 !== o.property && (r[o.property] = o.decode(t, e)), (e += o.getSpan(t, e)), this.decodePrefixes && t.length === e)) break;
                                }
                                return r;
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                for (var n = r, i = 0, o = 0, s = 0, a = this.fields; s < a.length; s++) {
                                    var f = a[s],
                                        u = f.span;
                                    if (((o = 0 < u ? u : 0), void 0 !== f.property)) {
                                        var c = t[f.property];
                                        void 0 !== c && ((o = f.encode(c, e, r)), 0 > u && (u = f.getSpan(e, r)));
                                    }
                                    (i = r), (r += u);
                                }
                                return i + o - n;
                            }),
                            (e.prototype.fromArray = function (t) {
                                for (var e = this.makeDestinationObject(), r = 0, n = this.fields; r < n.length; r++) {
                                    var i = n[r];
                                    void 0 !== i.property && 0 < t.length && (e[i.property] = t.shift());
                                }
                                return e;
                            }),
                            (e.prototype.layoutFor = function (t) {
                                if ("string" != typeof t) throw new TypeError("property must be string");
                                for (var e = 0, r = this.fields; e < r.length; e++) {
                                    var n = r[e];
                                    if (n.property === t) return n;
                                }
                            }),
                            (e.prototype.offsetOf = function (t) {
                                if ("string" != typeof t) throw new TypeError("property must be string");
                                for (var e = 0, r = 0, n = this.fields; r < n.length; r++) {
                                    var i = n[r];
                                    if (i.property === t) return e;
                                    0 > i.span ? (e = -1) : 0 <= e && (e += i.span);
                                }
                            }),
                            e
                    );
                })(f);
                e.Structure = B;
                var P = (function () {
                    function t(t) {
                        this.property = t;
                    }
                    return (
                        (t.prototype.decode = function (t, e) {
                            throw new Error("UnionDiscriminator is abstract");
                        }),
                            (t.prototype.encode = function (t, e, r) {
                                throw new Error("UnionDiscriminator is abstract");
                            }),
                            t
                    );
                })();
                e.UnionDiscriminator = P;
                var R = (function (t) {
                    function e(e, r) {
                        var n = this;
                        if (!(e instanceof c && e.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
                        return ((n = t.call(this, r || e.property || "variant") || this).layout = e), n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return this.layout.decode(t, e);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return this.layout.encode(t, e, r);
                            }),
                            e
                    );
                })(P);
                e.UnionLayoutDiscriminator = R;
                var U = (function (t) {
                    function e(e, r, n) {
                        var i,
                            o = this,
                            s = e instanceof l || e instanceof p;
                        if (s) i = new R(new d(e));
                        else if (e instanceof c && e.isCount()) i = new R(e);
                        else {
                            if (!(e instanceof P)) throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
                            i = e;
                        }
                        if ((void 0 === r && (r = null), !(null === r || r instanceof f))) throw new TypeError("defaultLayout must be null or a Layout");
                        if (null !== r) {
                            if (0 > r.span) throw new Error("defaultLayout must have constant span");
                            void 0 === r.property && (r = r.replicate("content"));
                        }
                        var a = -1;
                        r && 0 <= (a = r.span) && s && (a += i.layout.span), ((o = t.call(this, a, n) || this).discriminator = i), (o.usesPrefixDiscriminator = s), (o.defaultLayout = r), (o.registry = {});
                        var u = o.defaultGetSourceVariant.bind(o);
                        return (
                            (o.getSourceVariant = function (t) {
                                return u(t);
                            }),
                                (o.configGetSourceVariant = function (t) {
                                    u = t.bind(this);
                                }),
                                o
                        );
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                if (0 <= this.span) return this.span;
                                void 0 === e && (e = 0);
                                var r = this.getVariant(t, e);
                                if (!r) throw new Error("unable to determine span for unrecognized variant");
                                return r.getSpan(t, e);
                            }),
                            (e.prototype.defaultGetSourceVariant = function (t) {
                                if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
                                    if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)) return;
                                    if ((r = this.registry[t[this.discriminator.property]]) && (!r.layout || (r.property && Object.prototype.hasOwnProperty.call(t, r.property)))) return r;
                                } else
                                    for (var e in this.registry) {
                                        var r;
                                        if ((r = this.registry[e]).property && Object.prototype.hasOwnProperty.call(t, r.property)) return r;
                                    }
                                throw new Error("unable to infer src variant");
                            }),
                            (e.prototype.decode = function (t, e) {
                                var r;
                                void 0 === e && (e = 0);
                                var n = this.discriminator,
                                    i = n.decode(t, e),
                                    o = this.registry[i];
                                if (void 0 === o) {
                                    var s = this.defaultLayout,
                                        a = 0;
                                    this.usesPrefixDiscriminator && (a = n.layout.span), ((r = this.makeDestinationObject())[n.property] = i), (r[s.property] = s.decode(t, e + a));
                                } else r = o.decode(t, e);
                                return r;
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = this.getSourceVariant(t);
                                if (void 0 === n) {
                                    var i = this.discriminator,
                                        o = this.defaultLayout,
                                        s = 0;
                                    return this.usesPrefixDiscriminator && (s = i.layout.span), i.encode(t[i.property], e, r), s + o.encode(t[o.property], e, r + s);
                                }
                                return n.encode(t, e, r);
                            }),
                            (e.prototype.addVariant = function (t, e, r) {
                                var n = new O(this, t, e, r);
                                return (this.registry[t] = n), n;
                            }),
                            (e.prototype.getVariant = function (t, e) {
                                var r;
                                return t instanceof Uint8Array ? (void 0 === e && (e = 0), (r = this.discriminator.decode(t, e))) : (r = t), this.registry[r];
                            }),
                            e
                    );
                })(f);
                e.Union = U;
                var O = (function (t) {
                    function e(e, r, n, i) {
                        var o = this;
                        if (!(e instanceof U)) throw new TypeError("union must be a Union");
                        if (!Number.isInteger(r) || 0 > r) throw new TypeError("variant must be a (non-negative) integer");
                        if (("string" == typeof n && void 0 === i && ((i = n), (n = null)), n)) {
                            if (!(n instanceof f)) throw new TypeError("layout must be a Layout");
                            if (null !== e.defaultLayout && 0 <= n.span && n.span > e.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                            if ("string" != typeof i) throw new TypeError("variant must have a String property");
                        }
                        var s = e.span;
                        return 0 > e.span && 0 <= (s = n ? n.span : 0) && e.usesPrefixDiscriminator && (s += e.discriminator.layout.span), ((o = t.call(this, s, i) || this).union = e), (o.variant = r), (o.layout = n || null), o;
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                if (0 <= this.span) return this.span;
                                void 0 === e && (e = 0);
                                var r = 0;
                                this.union.usesPrefixDiscriminator && (r = this.union.discriminator.layout.span);
                                var n = 0;
                                return this.layout && (n = this.layout.getSpan(t, e + r)), r + n;
                            }),
                            (e.prototype.decode = function (t, e) {
                                var r = this.makeDestinationObject();
                                if ((void 0 === e && (e = 0), this !== this.union.getVariant(t, e))) throw new Error("variant mismatch");
                                var n = 0;
                                this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
                                var i = this.property;
                                return this.layout ? (r[i] = this.layout.decode(t, e + n)) : i ? (r[i] = !0) : this.union.usesPrefixDiscriminator && (r[this.union.discriminator.property] = this.variant), r;
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = 0;
                                this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
                                var i = this.property;
                                if (this.layout && !Object.prototype.hasOwnProperty.call(t, i)) throw new TypeError("variant lacks property " + i);
                                this.union.discriminator.encode(this.variant, e, r);
                                var o = n;
                                if (this.layout && (this.layout.encode(t[i], e, r + n), (o += this.layout.getSpan(e, r + n)), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
                                return o;
                            }),
                            (e.prototype.fromArray = function (t) {
                                if (this.layout) return this.layout.fromArray(t);
                            }),
                            e
                    );
                })(f);
                function T(t) {
                    return 0 > t && (t += 4294967296), t;
                }
                e.VariantLayout = O;
                var L = (function (t) {
                    function e(e, r, n) {
                        var i = this;
                        if (!(e instanceof l || e instanceof p)) throw new TypeError("word must be a UInt or UIntBE layout");
                        if (("string" == typeof r && void 0 === n && ((n = r), (r = !1)), 4 < e.span)) throw new RangeError("word cannot exceed 32 bits");
                        ((i = t.call(this, e.span, n) || this).word = e), (i.msb = !!r), (i.fields = []);
                        var o = 0;
                        return (
                            (i._packedSetValue = function (t) {
                                return (o = T(t)), this;
                            }),
                                (i._packedGetValue = function () {
                                    return o;
                                }),
                                i
                        );
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                var r = this.makeDestinationObject();
                                void 0 === e && (e = 0);
                                var n = this.word.decode(t, e);
                                this._packedSetValue(n);
                                for (var i = 0, o = this.fields; i < o.length; i++) {
                                    var s = o[i];
                                    void 0 !== s.property && (r[s.property] = s.decode(n));
                                }
                                return r;
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0);
                                var n = this.word.decode(e, r);
                                this._packedSetValue(n);
                                for (var i = 0, o = this.fields; i < o.length; i++) {
                                    var s = o[i];
                                    if (void 0 !== s.property) {
                                        var a = t[s.property];
                                        void 0 !== a && s.encode(a);
                                    }
                                }
                                return this.word.encode(this._packedGetValue(), e, r);
                            }),
                            (e.prototype.addField = function (t, e) {
                                var r = new z(this, t, e);
                                return this.fields.push(r), r;
                            }),
                            (e.prototype.addBoolean = function (t) {
                                var e = new j(this, t);
                                return this.fields.push(e), e;
                            }),
                            (e.prototype.fieldFor = function (t) {
                                if ("string" != typeof t) throw new TypeError("property must be string");
                                for (var e = 0, r = this.fields; e < r.length; e++) {
                                    var n = r[e];
                                    if (n.property === t) return n;
                                }
                            }),
                            e
                    );
                })(f);
                e.BitStructure = L;
                var z = (function () {
                    function t(t, e, r) {
                        if (!(t instanceof L)) throw new TypeError("container must be a BitStructure");
                        if (!Number.isInteger(e) || 0 >= e) throw new TypeError("bits must be positive integer");
                        var n = 8 * t.span,
                            i = t.fields.reduce(function (t, e) {
                                return t + e.bits;
                            }, 0);
                        if (e + i > n) throw new Error("bits too long for span remainder (" + (n - i) + " of " + n + " remain)");
                        (this.container = t),
                            (this.bits = e),
                            (this.valueMask = (1 << e) - 1),
                        32 === e && (this.valueMask = 4294967295),
                            (this.start = i),
                        this.container.msb && (this.start = n - i - e),
                            (this.wordMask = T(this.valueMask << this.start)),
                            (this.property = r);
                    }
                    return (
                        (t.prototype.decode = function (t, e) {
                            return T(this.container._packedGetValue() & this.wordMask) >>> this.start;
                        }),
                            (t.prototype.encode = function (t) {
                                if (!Number.isInteger(t) || t !== T(t & this.valueMask)) throw new TypeError(u("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
                                var e = this.container._packedGetValue(),
                                    r = T(t << this.start);
                                this.container._packedSetValue(T(e & ~this.wordMask) | r);
                            }),
                            t
                    );
                })();
                e.BitField = z;
                var j = (function (t) {
                    function e(e, r) {
                        return t.call(this, e, 1, r) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return !!z.prototype.decode.call(this, t, e);
                            }),
                            (e.prototype.encode = function (t) {
                                return "boolean" == typeof t && (t = +t), z.prototype.encode.call(this, t);
                            }),
                            e
                    );
                })(z);
                e.Boolean = j;
                var N = (function (t) {
                    function e(e, r) {
                        var n = this;
                        if (!((e instanceof c && e.isCount()) || (Number.isInteger(e) && 0 <= e))) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
                        var i = -1;
                        return e instanceof c || (i = e), ((n = t.call(this, i, r) || this).length = e), n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                var r = this.span;
                                return 0 > r && (r = this.length.decode(t, e)), r;
                            }),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = this.span;
                                return 0 > r && (r = this.length.decode(t, e)), a(t).slice(e, e + r);
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                var n = this.length;
                                if ((this.length instanceof c && (n = t.length), !(t instanceof Uint8Array && n === t.length))) throw new TypeError(u("Blob.encode", this) + " requires (length " + n + ") Uint8Array as src");
                                if (r + n > e.length) throw new RangeError("encoding overruns Uint8Array");
                                var i = a(t);
                                return a(e).write(i.toString("hex"), r, n, "hex"), this.length instanceof c && this.length.encode(n, e, r), n;
                            }),
                            e
                    );
                })(f);
                e.Blob = N;
                var q = (function (t) {
                    function e(e) {
                        return t.call(this, -1, e) || this;
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                s(t), void 0 === e && (e = 0);
                                for (var r = e; r < t.length && 0 !== t[r]; ) r += 1;
                                return 1 + r - e;
                            }),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = this.getSpan(t, e);
                                return a(t)
                                    .slice(e, e + r - 1)
                                    .toString("utf-8");
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0), "string" != typeof t && (t = t.toString());
                                var n = o.Buffer.from(t, "utf8"),
                                    i = n.length;
                                if (r + i > e.length) throw new RangeError("encoding overruns Buffer");
                                var s = a(e);
                                return n.copy(s, r), (s[r + i] = 0), i + 1;
                            }),
                            e
                    );
                })(f);
                e.CString = q;
                var C = (function (t) {
                    function e(e, r) {
                        var n = this;
                        if (("string" == typeof e && void 0 === r && ((r = e), (e = void 0)), void 0 === e)) e = -1;
                        else if (!Number.isInteger(e)) throw new TypeError("maxSpan must be an integer");
                        return ((n = t.call(this, -1, r) || this).maxSpan = e), n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.getSpan = function (t, e) {
                                return s(t), void 0 === e && (e = 0), t.length - e;
                            }),
                            (e.prototype.decode = function (t, e) {
                                void 0 === e && (e = 0);
                                var r = this.getSpan(t, e);
                                if (0 <= this.maxSpan && this.maxSpan < r) throw new RangeError("text length exceeds maxSpan");
                                return a(t)
                                    .slice(e, e + r)
                                    .toString("utf-8");
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                void 0 === r && (r = 0), "string" != typeof t && (t = t.toString());
                                var n = o.Buffer.from(t, "utf8"),
                                    i = n.length;
                                if (0 <= this.maxSpan && this.maxSpan < i) throw new RangeError("text length exceeds maxSpan");
                                if (r + i > e.length) throw new RangeError("encoding overruns Buffer");
                                return n.copy(a(e), r), i;
                            }),
                            e
                    );
                })(f);
                e.UTF8 = C;
                var W = (function (t) {
                    function e(e, r) {
                        var n = t.call(this, 0, r) || this;
                        return (n.value = e), n;
                    }
                    return (
                        i(e, t),
                            (e.prototype.decode = function (t, e) {
                                return this.value;
                            }),
                            (e.prototype.encode = function (t, e, r) {
                                return 0;
                            }),
                            e
                    );
                })(f);
                (e.Constant = W),
                    (e.greedy = function (t, e) {
                        return new h(t, e);
                    }),
                    (e.offset = function (t, e, r) {
                        return new d(t, e, r);
                    }),
                    (e.u8 = function (t) {
                        return new l(1, t);
                    }),
                    (e.u16 = function (t) {
                        return new l(2, t);
                    }),
                    (e.u24 = function (t) {
                        return new l(3, t);
                    }),
                    (e.u32 = function (t) {
                        return new l(4, t);
                    }),
                    (e.u40 = function (t) {
                        return new l(5, t);
                    }),
                    (e.u48 = function (t) {
                        return new l(6, t);
                    }),
                    (e.nu64 = function (t) {
                        return new w(t);
                    }),
                    (e.u16be = function (t) {
                        return new p(2, t);
                    }),
                    (e.u24be = function (t) {
                        return new p(3, t);
                    }),
                    (e.u32be = function (t) {
                        return new p(4, t);
                    }),
                    (e.u40be = function (t) {
                        return new p(5, t);
                    }),
                    (e.u48be = function (t) {
                        return new p(6, t);
                    }),
                    (e.nu64be = function (t) {
                        return new M(t);
                    }),
                    (e.s8 = function (t) {
                        return new b(1, t);
                    }),
                    (e.s16 = function (t) {
                        return new b(2, t);
                    }),
                    (e.s24 = function (t) {
                        return new b(3, t);
                    }),
                    (e.s32 = function (t) {
                        return new b(4, t);
                    }),
                    (e.s40 = function (t) {
                        return new b(5, t);
                    }),
                    (e.s48 = function (t) {
                        return new b(6, t);
                    }),
                    (e.ns64 = function (t) {
                        return new _(t);
                    }),
                    (e.s16be = function (t) {
                        return new y(2, t);
                    }),
                    (e.s24be = function (t) {
                        return new y(3, t);
                    }),
                    (e.s32be = function (t) {
                        return new y(4, t);
                    }),
                    (e.s40be = function (t) {
                        return new y(5, t);
                    }),
                    (e.s48be = function (t) {
                        return new y(6, t);
                    }),
                    (e.ns64be = function (t) {
                        return new A(t);
                    }),
                    (e.f32 = function (t) {
                        return new S(t);
                    }),
                    (e.f32be = function (t) {
                        return new x(t);
                    }),
                    (e.f64 = function (t) {
                        return new E(t);
                    }),
                    (e.f64be = function (t) {
                        return new k(t);
                    }),
                    (e.struct = function (t, e, r) {
                        return new B(t, e, r);
                    }),
                    (e.bits = function (t, e, r) {
                        return new L(t, e, r);
                    }),
                    (e.seq = function (t, e, r) {
                        return new I(t, e, r);
                    }),
                    (e.union = function (t, e, r) {
                        return new U(t, e, r);
                    }),
                    (e.unionLayoutDiscriminator = function (t, e) {
                        return new R(t, e);
                    }),
                    (e.blob = function (t, e) {
                        return new N(t, e);
                    }),
                    (e.cstr = function (t) {
                        return new q(t);
                    }),
                    (e.utf8 = function (t, e) {
                        return new C(t, e);
                    }),
                    (e.constant = function (t, e) {
                        return new W(t, e);
                    });
            },
            4285: (t, e, r) => {
                "use strict";
                const n = r(9742),
                    i = r(645),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                (e.lW = f), (e.h2 = 50);
                const s = 2147483647;
                function a(t) {
                    if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                    const e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, f.prototype), e;
                }
                function f(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return h(t);
                    }
                    return u(t, e, r);
                }
                function u(t, e, r) {
                    if ("string" == typeof t)
                        return (function (t, e) {
                            if ((("string" == typeof e && "" !== e) || (e = "utf8"), !f.isEncoding(e))) throw new TypeError("Unknown encoding: " + e);
                            const r = 0 | b(t, e);
                            let n = a(r);
                            const i = n.write(t, e);
                            return i !== r && (n = n.slice(0, i)), n;
                        })(t, e);
                    if (ArrayBuffer.isView(t))
                        return (function (t) {
                            if (H(t, Uint8Array)) {
                                const e = new Uint8Array(t);
                                return l(e.buffer, e.byteOffset, e.byteLength);
                            }
                            return d(t);
                        })(t);
                    if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (H(t, ArrayBuffer) || (t && H(t.buffer, ArrayBuffer))) return l(t, e, r);
                    if ("undefined" != typeof SharedArrayBuffer && (H(t, SharedArrayBuffer) || (t && H(t.buffer, SharedArrayBuffer)))) return l(t, e, r);
                    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    const n = t.valueOf && t.valueOf();
                    if (null != n && n !== t) return f.from(n, e, r);
                    const i = (function (t) {
                        if (f.isBuffer(t)) {
                            const e = 0 | p(t.length),
                                r = a(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r;
                        }
                        return void 0 !== t.length ? ("number" != typeof t.length || J(t.length) ? a(0) : d(t)) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0;
                    })(t);
                    if (i) return i;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return f.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                }
                function c(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                    if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                }
                function h(t) {
                    return c(t), a(t < 0 ? 0 : 0 | p(t));
                }
                function d(t) {
                    const e = t.length < 0 ? 0 : 0 | p(t.length),
                        r = a(e);
                    for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                    return r;
                }
                function l(t, e, r) {
                    if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    let n;
                    return (n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r)), Object.setPrototypeOf(n, f.prototype), n;
                }
                function p(t) {
                    if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                    return 0 | t;
                }
                function b(t, e) {
                    if (f.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || H(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    const r = t.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    let i = !1;
                    for (;;)
                        switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return V(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return Z(t).length;
                            default:
                                if (i) return n ? -1 : V(t).length;
                                (e = ("" + e).toLowerCase()), (i = !0);
                        }
                }
                function y(t, e, r) {
                    let n = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
                    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                            case "hex":
                                return P(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return E(this, e, r);
                            case "ascii":
                                return I(this, e, r);
                            case "latin1":
                            case "binary":
                                return B(this, e, r);
                            case "base64":
                                return x(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return R(this, e, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + t);
                                (t = (t + "").toLowerCase()), (n = !0);
                        }
                }
                function m(t, e, r) {
                    const n = t[e];
                    (t[e] = t[r]), (t[r] = n);
                }
                function g(t, e, r, n, i) {
                    if (0 === t.length) return -1;
                    if (("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), J((r = +r)) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)) {
                        if (i) return -1;
                        r = t.length - 1;
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0;
                    }
                    if (("string" == typeof e && (e = f.from(e, n)), f.isBuffer(e))) return 0 === e.length ? -1 : v(t, e, r, n, i);
                    if ("number" == typeof e) return (e &= 255), "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r)) : v(t, [e], r, n, i);
                    throw new TypeError("val must be string, number or Buffer");
                }
                function v(t, e, r, n, i) {
                    let o,
                        s = 1,
                        a = t.length,
                        f = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        (s = 2), (a /= 2), (f /= 2), (r /= 2);
                    }
                    function u(t, e) {
                        return 1 === s ? t[e] : t.readUInt16BE(e * s);
                    }
                    if (i) {
                        let n = -1;
                        for (o = r; o < a; o++)
                            if (u(t, o) === u(e, -1 === n ? 0 : o - n)) {
                                if ((-1 === n && (n = o), o - n + 1 === f)) return n * s;
                            } else -1 !== n && (o -= o - n), (n = -1);
                    } else
                        for (r + f > a && (r = a - f), o = r; o >= 0; o--) {
                            let r = !0;
                            for (let n = 0; n < f; n++)
                                if (u(t, o + n) !== u(e, n)) {
                                    r = !1;
                                    break;
                                }
                            if (r) return o;
                        }
                    return -1;
                }
                function w(t, e, r, n) {
                    r = Number(r) || 0;
                    const i = t.length - r;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    const o = e.length;
                    let s;
                    for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                        const n = parseInt(e.substr(2 * s, 2), 16);
                        if (J(n)) return s;
                        t[r + s] = n;
                    }
                    return s;
                }
                function M(t, e, r, n) {
                    return Y(V(e, t.length - r), t, r, n);
                }
                function _(t, e, r, n) {
                    return Y(
                        (function (t) {
                            const e = [];
                            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e;
                        })(e),
                        t,
                        r,
                        n
                    );
                }
                function A(t, e, r, n) {
                    return Y(Z(e), t, r, n);
                }
                function S(t, e, r, n) {
                    return Y(
                        (function (t, e) {
                            let r, n, i;
                            const o = [];
                            for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) (r = t.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
                            return o;
                        })(e, t.length - r),
                        t,
                        r,
                        n
                    );
                }
                function x(t, e, r) {
                    return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
                }
                function E(t, e, r) {
                    r = Math.min(t.length, r);
                    const n = [];
                    let i = e;
                    for (; i < r; ) {
                        const e = t[i];
                        let o = null,
                            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                        if (i + s <= r) {
                            let r, n, a, f;
                            switch (s) {
                                case 1:
                                    e < 128 && (o = e);
                                    break;
                                case 2:
                                    (r = t[i + 1]), 128 == (192 & r) && ((f = ((31 & e) << 6) | (63 & r)), f > 127 && (o = f));
                                    break;
                                case 3:
                                    (r = t[i + 1]), (n = t[i + 2]), 128 == (192 & r) && 128 == (192 & n) && ((f = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)), f > 2047 && (f < 55296 || f > 57343) && (o = f));
                                    break;
                                case 4:
                                    (r = t[i + 1]),
                                        (n = t[i + 2]),
                                        (a = t[i + 3]),
                                    128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && ((f = ((15 & e) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & a)), f > 65535 && f < 1114112 && (o = f));
                            }
                        }
                        null === o ? ((o = 65533), (s = 1)) : o > 65535 && ((o -= 65536), n.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))), n.push(o), (i += s);
                    }
                    return (function (t) {
                        const e = t.length;
                        if (e <= k) return String.fromCharCode.apply(String, t);
                        let r = "",
                            n = 0;
                        for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += k)));
                        return r;
                    })(n);
                }
                (f.TYPED_ARRAY_SUPPORT = (function () {
                    try {
                        const t = new Uint8Array(1),
                            e = {
                                foo: function () {
                                    return 42;
                                },
                            };
                        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
                    } catch (t) {
                        return !1;
                    }
                })()),
                f.TYPED_ARRAY_SUPPORT ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                    Object.defineProperty(f.prototype, "parent", {
                        enumerable: !0,
                        get: function () {
                            if (f.isBuffer(this)) return this.buffer;
                        },
                    }),
                    Object.defineProperty(f.prototype, "offset", {
                        enumerable: !0,
                        get: function () {
                            if (f.isBuffer(this)) return this.byteOffset;
                        },
                    }),
                    (f.poolSize = 8192),
                    (f.from = function (t, e, r) {
                        return u(t, e, r);
                    }),
                    Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
                    Object.setPrototypeOf(f, Uint8Array),
                    (f.alloc = function (t, e, r) {
                        return (function (t, e, r) {
                            return c(t), t <= 0 ? a(t) : void 0 !== e ? ("string" == typeof r ? a(t).fill(e, r) : a(t).fill(e)) : a(t);
                        })(t, e, r);
                    }),
                    (f.allocUnsafe = function (t) {
                        return h(t);
                    }),
                    (f.allocUnsafeSlow = function (t) {
                        return h(t);
                    }),
                    (f.isBuffer = function (t) {
                        return null != t && !0 === t._isBuffer && t !== f.prototype;
                    }),
                    (f.compare = function (t, e) {
                        if ((H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), H(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(t) || !f.isBuffer(e)))
                            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === e) return 0;
                        let r = t.length,
                            n = e.length;
                        for (let i = 0, o = Math.min(r, n); i < o; ++i)
                            if (t[i] !== e[i]) {
                                (r = t[i]), (n = e[i]);
                                break;
                            }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }),
                    (f.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (f.concat = function (t, e) {
                        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return f.alloc(0);
                        let r;
                        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                        const n = f.allocUnsafe(e);
                        let i = 0;
                        for (r = 0; r < t.length; ++r) {
                            let e = t[r];
                            if (H(e, Uint8Array)) i + e.length > n.length ? (f.isBuffer(e) || (e = f.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
                            else {
                                if (!f.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                e.copy(n, i);
                            }
                            i += e.length;
                        }
                        return n;
                    }),
                    (f.byteLength = b),
                    (f.prototype._isBuffer = !0),
                    (f.prototype.swap16 = function () {
                        const t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (let e = 0; e < t; e += 2) m(this, e, e + 1);
                        return this;
                    }),
                    (f.prototype.swap32 = function () {
                        const t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (let e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                        return this;
                    }),
                    (f.prototype.swap64 = function () {
                        const t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (let e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                        return this;
                    }),
                    (f.prototype.toString = function () {
                        const t = this.length;
                        return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : y.apply(this, arguments);
                    }),
                    (f.prototype.toLocaleString = f.prototype.toString),
                    (f.prototype.equals = function (t) {
                        if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === f.compare(this, t);
                    }),
                    (f.prototype.inspect = function () {
                        let t = "";
                        const r = e.h2;
                        return (
                            (t = this.toString("hex", 0, r)
                                .replace(/(.{2})/g, "$1 ")
                                .trim()),
                            this.length > r && (t += " ... "),
                            "<Buffer " + t + ">"
                        );
                    }),
                o && (f.prototype[o] = f.prototype.inspect),
                    (f.prototype.compare = function (t, e, r, n, i) {
                        if ((H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(t))) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                        if ((void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length))
                            throw new RangeError("out of range index");
                        if (n >= i && e >= r) return 0;
                        if (n >= i) return -1;
                        if (e >= r) return 1;
                        if (this === t) return 0;
                        let o = (i >>>= 0) - (n >>>= 0),
                            s = (r >>>= 0) - (e >>>= 0);
                        const a = Math.min(o, s),
                            u = this.slice(n, i),
                            c = t.slice(e, r);
                        for (let t = 0; t < a; ++t)
                            if (u[t] !== c[t]) {
                                (o = u[t]), (s = c[t]);
                                break;
                            }
                        return o < s ? -1 : s < o ? 1 : 0;
                    }),
                    (f.prototype.includes = function (t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }),
                    (f.prototype.indexOf = function (t, e, r) {
                        return g(this, t, e, r, !0);
                    }),
                    (f.prototype.lastIndexOf = function (t, e, r) {
                        return g(this, t, e, r, !1);
                    }),
                    (f.prototype.write = function (t, e, r, n) {
                        if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                        else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                        else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                        }
                        const i = this.length - e;
                        if (((void 0 === r || r > i) && (r = i), (t.length > 0 && (r < 0 || e < 0)) || e > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        let o = !1;
                        for (;;)
                            switch (n) {
                                case "hex":
                                    return w(this, t, e, r);
                                case "utf8":
                                case "utf-8":
                                    return M(this, t, e, r);
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return _(this, t, e, r);
                                case "base64":
                                    return A(this, t, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return S(this, t, e, r);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + n);
                                    (n = ("" + n).toLowerCase()), (o = !0);
                            }
                    }),
                    (f.prototype.toJSON = function () {
                        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                    });
                const k = 4096;
                function I(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                    return n;
                }
                function B(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                    return n;
                }
                function P(t, e, r) {
                    const n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    let i = "";
                    for (let n = e; n < r; ++n) i += G[t[n]];
                    return i;
                }
                function R(t, e, r) {
                    const n = t.slice(e, r);
                    let i = "";
                    for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                    return i;
                }
                function U(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
                }
                function O(t, e, r, n, i, o) {
                    if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw new RangeError("Index out of range");
                }
                function T(t, e, r, n, i) {
                    K(e, n, i, t, r, 7);
                    let o = Number(e & BigInt(4294967295));
                    (t[r++] = o), (o >>= 8), (t[r++] = o), (o >>= 8), (t[r++] = o), (o >>= 8), (t[r++] = o);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), r;
                }
                function L(t, e, r, n, i) {
                    K(e, n, i, t, r, 7);
                    let o = Number(e & BigInt(4294967295));
                    (t[r + 7] = o), (o >>= 8), (t[r + 6] = o), (o >>= 8), (t[r + 5] = o), (o >>= 8), (t[r + 4] = o);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (t[r + 3] = s), (s >>= 8), (t[r + 2] = s), (s >>= 8), (t[r + 1] = s), (s >>= 8), (t[r] = s), r + 8;
                }
                function z(t, e, r, n, i, o) {
                    if (r + n > t.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range");
                }
                function j(t, e, r, n, o) {
                    return (e = +e), (r >>>= 0), o || z(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
                }
                function N(t, e, r, n, o) {
                    return (e = +e), (r >>>= 0), o || z(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
                }
                (f.prototype.slice = function (t, e) {
                    const r = this.length;
                    (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                    const n = this.subarray(t, e);
                    return Object.setPrototypeOf(n, f.prototype), n;
                }),
                    (f.prototype.readUintLE = f.prototype.readUIntLE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = this[t],
                            i = 1,
                            o = 0;
                        for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
                        return n;
                    }),
                    (f.prototype.readUintBE = f.prototype.readUIntBE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = this[t + --e],
                            i = 1;
                        for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
                        return n;
                    }),
                    (f.prototype.readUint8 = f.prototype.readUInt8 = function (t, e) {
                        return (t >>>= 0), e || U(t, 1, this.length), this[t];
                    }),
                    (f.prototype.readUint16LE = f.prototype.readUInt16LE = function (t, e) {
                        return (t >>>= 0), e || U(t, 2, this.length), this[t] | (this[t + 1] << 8);
                    }),
                    (f.prototype.readUint16BE = f.prototype.readUInt16BE = function (t, e) {
                        return (t >>>= 0), e || U(t, 2, this.length), (this[t] << 8) | this[t + 1];
                    }),
                    (f.prototype.readUint32LE = f.prototype.readUInt32LE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                    }),
                    (f.prototype.readUint32BE = f.prototype.readUInt32BE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                    }),
                    (f.prototype.readBigUInt64LE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                        return BigInt(n) + (BigInt(i) << BigInt(32));
                    })),
                    (f.prototype.readBigUInt64BE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                            i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                        return (BigInt(n) << BigInt(32)) + BigInt(i);
                    })),
                    (f.prototype.readIntLE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = this[t],
                            i = 1,
                            o = 0;
                        for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
                        return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
                    }),
                    (f.prototype.readIntBE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = e,
                            i = 1,
                            o = this[t + --n];
                        for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
                        return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
                    }),
                    (f.prototype.readInt8 = function (t, e) {
                        return (t >>>= 0), e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }),
                    (f.prototype.readInt16LE = function (t, e) {
                        (t >>>= 0), e || U(t, 2, this.length);
                        const r = this[t] | (this[t + 1] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (f.prototype.readInt16BE = function (t, e) {
                        (t >>>= 0), e || U(t, 2, this.length);
                        const r = this[t + 1] | (this[t] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (f.prototype.readInt32LE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                    }),
                    (f.prototype.readInt32BE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                    }),
                    (f.prototype.readBigInt64LE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                        return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
                    })),
                    (f.prototype.readBigInt64BE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                        return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r);
                    })),
                    (f.prototype.readFloatLE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !0, 23, 4);
                    }),
                    (f.prototype.readFloatBE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !1, 23, 4);
                    }),
                    (f.prototype.readDoubleLE = function (t, e) {
                        return (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !0, 52, 8);
                    }),
                    (f.prototype.readDoubleBE = function (t, e) {
                        return (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !1, 52, 8);
                    }),
                    (f.prototype.writeUintLE = f.prototype.writeUIntLE = function (t, e, r, n) {
                        (t = +t), (e >>>= 0), (r >>>= 0), n || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        let i = 1,
                            o = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = (t / i) & 255;
                        return e + r;
                    }),
                    (f.prototype.writeUintBE = f.prototype.writeUIntBE = function (t, e, r, n) {
                        (t = +t), (e >>>= 0), (r >>>= 0), n || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        let i = r - 1,
                            o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = (t / o) & 255;
                        return e + r;
                    }),
                    (f.prototype.writeUint8 = f.prototype.writeUInt8 = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
                    }),
                    (f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                    }),
                    (f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                    }),
                    (f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 4294967295, 0), (this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t), e + 4;
                    }),
                    (f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 4294967295, 0), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4;
                    }),
                    (f.prototype.writeBigUInt64LE = X(function (t, e = 0) {
                        return T(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
                    })),
                    (f.prototype.writeBigUInt64BE = X(function (t, e = 0) {
                        return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
                    })),
                    (f.prototype.writeIntLE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            O(this, t, e, r, n - 1, -n);
                        }
                        let i = 0,
                            o = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++i < r && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), (this[e + i] = (((t / o) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (f.prototype.writeIntBE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            O(this, t, e, r, n - 1, -n);
                        }
                        let i = r - 1,
                            o = 1,
                            s = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), (this[e + i] = (((t / o) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (f.prototype.writeInt8 = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                    }),
                    (f.prototype.writeInt16LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                    }),
                    (f.prototype.writeInt16BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                    }),
                    (f.prototype.writeInt32LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 2147483647, -2147483648), (this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24), e + 4;
                    }),
                    (f.prototype.writeInt32BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4;
                    }),
                    (f.prototype.writeBigInt64LE = X(function (t, e = 0) {
                        return T(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                    })),
                    (f.prototype.writeBigInt64BE = X(function (t, e = 0) {
                        return L(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                    })),
                    (f.prototype.writeFloatLE = function (t, e, r) {
                        return j(this, t, e, !0, r);
                    }),
                    (f.prototype.writeFloatBE = function (t, e, r) {
                        return j(this, t, e, !1, r);
                    }),
                    (f.prototype.writeDoubleLE = function (t, e, r) {
                        return N(this, t, e, !0, r);
                    }),
                    (f.prototype.writeDoubleBE = function (t, e, r) {
                        return N(this, t, e, !1, r);
                    }),
                    (f.prototype.copy = function (t, e, r, n) {
                        if (!f.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                        if ((r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r)) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                        const i = n - r;
                        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i;
                    }),
                    (f.prototype.fill = function (t, e, r, n) {
                        if ("string" == typeof t) {
                            if (("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), void 0 !== n && "string" != typeof n)) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                            if (1 === t.length) {
                                const e = t.charCodeAt(0);
                                (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
                            }
                        } else "number" == typeof t ? (t &= 255) : "boolean" == typeof t && (t = Number(t));
                        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        let i;
                        if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t)) for (i = e; i < r; ++i) this[i] = t;
                        else {
                            const o = f.isBuffer(t) ? t : f.from(t, n),
                                s = o.length;
                            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
                        }
                        return this;
                    });
                const q = {};
                function C(t, e, r) {
                    q[t] = class extends r {
                        constructor() {
                            super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: !0, configurable: !0 }), (this.name = `${this.name} [${t}]`), this.stack, delete this.name;
                        }
                        get code() {
                            return t;
                        }
                        set code(t) {
                            Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: t, writable: !0 });
                        }
                        toString() {
                            return `${this.name} [${t}]: ${this.message}`;
                        }
                    };
                }
                function W(t) {
                    let e = "",
                        r = t.length;
                    const n = "-" === t[0] ? 1 : 0;
                    for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                    return `${t.slice(0, r)}${e}`;
                }
                function K(t, e, r, n, i, o) {
                    if (t > r || t < e) {
                        const n = "bigint" == typeof e ? "n" : "";
                        let i;
                        throw (
                            ((i = o > 3 ? (0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}`) : `>= ${e}${n} and <= ${r}${n}`),
                                new q.ERR_OUT_OF_RANGE("value", i, t))
                        );
                    }
                    !(function (t, e, r) {
                        D(e, "offset"), (void 0 !== t[e] && void 0 !== t[e + r]) || F(e, t.length - (r + 1));
                    })(n, i, o);
                }
                function D(t, e) {
                    if ("number" != typeof t) throw new q.ERR_INVALID_ARG_TYPE(e, "number", t);
                }
                function F(t, e, r) {
                    if (Math.floor(t) !== t) throw (D(t, r), new q.ERR_OUT_OF_RANGE(r || "offset", "an integer", t));
                    if (e < 0) throw new q.ERR_BUFFER_OUT_OF_BOUNDS();
                    throw new q.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t);
                }
                C(
                    "ERR_BUFFER_OUT_OF_BOUNDS",
                    function (t) {
                        return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
                    },
                    RangeError
                ),
                    C(
                        "ERR_INVALID_ARG_TYPE",
                        function (t, e) {
                            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
                        },
                        TypeError
                    ),
                    C(
                        "ERR_OUT_OF_RANGE",
                        function (t, e, r) {
                            let n = `The value of "${t}" is out of range.`,
                                i = r;
                            return (
                                Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? (i = W(String(r))) : "bigint" == typeof r && ((i = String(r)), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = W(i)), (i += "n")),
                                    (n += ` It must be ${e}. Received ${i}`),
                                    n
                            );
                        },
                        RangeError
                    );
                const $ = /[^+/0-9A-Za-z-_]/g;
                function V(t, e) {
                    let r;
                    e = e || 1 / 0;
                    const n = t.length;
                    let i = null;
                    const o = [];
                    for (let s = 0; s < n; ++s) {
                        if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
                            if (!i) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                if (s + 1 === n) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                i = r;
                                continue;
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                                continue;
                            }
                            r = 65536 + (((i - 55296) << 10) | (r - 56320));
                        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (((i = null), r < 128)) {
                            if ((e -= 1) < 0) break;
                            o.push(r);
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push((r >> 6) | 192, (63 & r) | 128);
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        }
                    }
                    return o;
                }
                function Z(t) {
                    return n.toByteArray(
                        (function (t) {
                            if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
                            for (; t.length % 4 != 0; ) t += "=";
                            return t;
                        })(t)
                    );
                }
                function Y(t, e, r, n) {
                    let i;
                    for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                    return i;
                }
                function H(t, e) {
                    return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
                }
                function J(t) {
                    return t != t;
                }
                const G = (function () {
                    const t = "0123456789abcdef",
                        e = new Array(256);
                    for (let r = 0; r < 16; ++r) {
                        const n = 16 * r;
                        for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                    }
                    return e;
                })();
                function X(t) {
                    return "undefined" == typeof BigInt ? Q : t;
                }
                function Q() {
                    throw new Error("BigInt not supported");
                }
            },
            8162: (t, e, r) => {
                "use strict";
                var n = r(9509).Buffer;
                t.exports = function (t) {
                    if (t.length >= 255) throw new TypeError("Alphabet too long");
                    for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
                    for (var i = 0; i < t.length; i++) {
                        var o = t.charAt(i),
                            s = o.charCodeAt(0);
                        if (255 !== e[s]) throw new TypeError(o + " is ambiguous");
                        e[s] = i;
                    }
                    var a = t.length,
                        f = t.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        c = Math.log(256) / Math.log(a);
                    function h(t) {
                        if ("string" != typeof t) throw new TypeError("Expected String");
                        if (0 === t.length) return n.alloc(0);
                        var r = 0;
                        if (" " !== t[r]) {
                            for (var i = 0, o = 0; t[r] === f; ) i++, r++;
                            for (var s = ((t.length - r) * u + 1) >>> 0, c = new Uint8Array(s); t[r]; ) {
                                var h = e[t.charCodeAt(r)];
                                if (255 === h) return;
                                for (var d = 0, l = s - 1; (0 !== h || d < o) && -1 !== l; l--, d++) (h += (a * c[l]) >>> 0), (c[l] = h % 256 >>> 0), (h = (h / 256) >>> 0);
                                if (0 !== h) throw new Error("Non-zero carry");
                                (o = d), r++;
                            }
                            if (" " !== t[r]) {
                                for (var p = s - o; p !== s && 0 === c[p]; ) p++;
                                var b = n.allocUnsafe(i + (s - p));
                                b.fill(0, 0, i);
                                for (var y = i; p !== s; ) b[y++] = c[p++];
                                return b;
                            }
                        }
                    }
                    return {
                        encode: function (e) {
                            if (((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)), !n.isBuffer(e))) throw new TypeError("Expected Buffer");
                            if (0 === e.length) return "";
                            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; ) o++, r++;
                            for (var u = ((s - o) * c + 1) >>> 0, h = new Uint8Array(u); o !== s; ) {
                                for (var d = e[o], l = 0, p = u - 1; (0 !== d || l < i) && -1 !== p; p--, l++) (d += (256 * h[p]) >>> 0), (h[p] = d % a >>> 0), (d = (d / a) >>> 0);
                                if (0 !== d) throw new Error("Non-zero carry");
                                (i = l), o++;
                            }
                            for (var b = u - i; b !== u && 0 === h[b]; ) b++;
                            for (var y = f.repeat(r); b < u; ++b) y += t.charAt(h[b]);
                            return y;
                        },
                        decodeUnsafe: h,
                        decode: function (t) {
                            var e = h(t);
                            if (e) return e;
                            throw new Error("Non-base" + a + " character");
                        },
                    };
                };
            },
            9742: (t, e) => {
                "use strict";
                (e.byteLength = function (t) {
                    var e = f(t),
                        r = e[0],
                        n = e[1];
                    return (3 * (r + n)) / 4 - n;
                }),
                    (e.toByteArray = function (t) {
                        var e,
                            r,
                            o = f(t),
                            s = o[0],
                            a = o[1],
                            u = new i(
                                (function (t, e, r) {
                                    return (3 * (e + r)) / 4 - r;
                                })(0, s, a)
                            ),
                            c = 0,
                            h = a > 0 ? s - 4 : s;
                        for (r = 0; r < h; r += 4)
                            (e = (n[t.charCodeAt(r)] << 18) | (n[t.charCodeAt(r + 1)] << 12) | (n[t.charCodeAt(r + 2)] << 6) | n[t.charCodeAt(r + 3)]), (u[c++] = (e >> 16) & 255), (u[c++] = (e >> 8) & 255), (u[c++] = 255 & e);
                        return (
                            2 === a && ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)), (u[c++] = 255 & e)),
                            1 === a && ((e = (n[t.charCodeAt(r)] << 10) | (n[t.charCodeAt(r + 1)] << 4) | (n[t.charCodeAt(r + 2)] >> 2)), (u[c++] = (e >> 8) & 255), (u[c++] = 255 & e)),
                                u
                        );
                    }),
                    (e.fromByteArray = function (t) {
                        for (var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, f = n - i; a < f; a += s) o.push(u(t, a, a + s > f ? f : a + s));
                        return 1 === i ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "==")) : 2 === i && ((e = (t[n - 2] << 8) + t[n - 1]), o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "=")), o.join("");
                    });
                for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s)
                    (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
                function f(t) {
                    var e = t.length;
                    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var r = t.indexOf("=");
                    return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
                }
                function u(t, e, n) {
                    for (var i, o, s = [], a = e; a < n; a += 3) (i = ((t[a] << 16) & 16711680) + ((t[a + 1] << 8) & 65280) + (255 & t[a + 2])), s.push(r[((o = i) >> 18) & 63] + r[(o >> 12) & 63] + r[(o >> 6) & 63] + r[63 & o]);
                    return s.join("");
                }
                (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            3550: function (t, e, r) {
                !(function (t, e) {
                    "use strict";
                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed");
                    }
                    function i(t, e) {
                        t.super_ = e;
                        var r = function () {};
                        (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
                    }
                    function o(t, e, r) {
                        if (o.isBN(t)) return t;
                        (this.negative = 0), (this.words = null), (this.length = 0), (this.red = null), null !== t && (("le" !== e && "be" !== e) || ((r = e), (e = 10)), this._init(t || 0, e || 10, r || "be"));
                    }
                    var s;
                    "object" == typeof t ? (t.exports = o) : (e.BN = o), (o.BN = o), (o.wordSize = 26);
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(6601).Buffer;
                    } catch (t) {}
                    function a(t, e) {
                        var r = t.charCodeAt(e);
                        return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : void n(!1, "Invalid character in " + t);
                    }
                    function f(t, e, r) {
                        var n = a(t, r);
                        return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
                    }
                    function u(t, e, r, i) {
                        for (var o = 0, s = 0, a = Math.min(t.length, r), f = e; f < a; f++) {
                            var u = t.charCodeAt(f) - 48;
                            (o *= i), (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u), n(u >= 0 && s < i, "Invalid character"), (o += s);
                        }
                        return o;
                    }
                    function c(t, e) {
                        (t.words = e.words), (t.length = e.length), (t.negative = e.negative), (t.red = e.red);
                    }
                    if (
                        ((o.isBN = function (t) {
                            return t instanceof o || (null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words));
                        }),
                            (o.max = function (t, e) {
                                return t.cmp(e) > 0 ? t : e;
                            }),
                            (o.min = function (t, e) {
                                return t.cmp(e) < 0 ? t : e;
                            }),
                            (o.prototype._init = function (t, e, r) {
                                if ("number" == typeof t) return this._initNumber(t, e, r);
                                if ("object" == typeof t) return this._initArray(t, e, r);
                                "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                                var i = 0;
                                "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, (this.negative = 1)),
                                i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)));
                            }),
                            (o.prototype._initNumber = function (t, e, r) {
                                t < 0 && ((this.negative = 1), (t = -t)),
                                    t < 67108864
                                        ? ((this.words = [67108863 & t]), (this.length = 1))
                                        : t < 4503599627370496
                                            ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                                            : (n(t < 9007199254740992), (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]), (this.length = 3)),
                                "le" === r && this._initArray(this.toArray(), e, r);
                            }),
                            (o.prototype._initArray = function (t, e, r) {
                                if ((n("number" == typeof t.length), t.length <= 0)) return (this.words = [0]), (this.length = 1), this;
                                (this.length = Math.ceil(t.length / 3)), (this.words = new Array(this.length));
                                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                                var o,
                                    s,
                                    a = 0;
                                if ("be" === r)
                                    for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                                        (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)), (this.words[o] |= (s << a) & 67108863), (this.words[o + 1] = (s >>> (26 - a)) & 67108863), (a += 24) >= 26 && ((a -= 26), o++);
                                else if ("le" === r)
                                    for (i = 0, o = 0; i < t.length; i += 3)
                                        (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)), (this.words[o] |= (s << a) & 67108863), (this.words[o + 1] = (s >>> (26 - a)) & 67108863), (a += 24) >= 26 && ((a -= 26), o++);
                                return this._strip();
                            }),
                            (o.prototype._parseHex = function (t, e, r) {
                                (this.length = Math.ceil((t.length - e) / 6)), (this.words = new Array(this.length));
                                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                                var i,
                                    o = 0,
                                    s = 0;
                                if ("be" === r) for (n = t.length - 1; n >= e; n -= 2) (i = f(t, e, n) << o), (this.words[s] |= 67108863 & i), o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8);
                                else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) (i = f(t, e, n) << o), (this.words[s] |= 67108863 & i), o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8);
                                this._strip();
                            }),
                            (o.prototype._parseBase = function (t, e, r) {
                                (this.words = [0]), (this.length = 1);
                                for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                                n--, (i = (i / e) | 0);
                                for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, f = 0, c = r; c < a; c += n) (f = u(t, c, c + n, e)), this.imuln(i), this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
                                if (0 !== s) {
                                    var h = 1;
                                    for (f = u(t, c, t.length, e), c = 0; c < s; c++) h *= e;
                                    this.imuln(h), this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
                                }
                                this._strip();
                            }),
                            (o.prototype.copy = function (t) {
                                t.words = new Array(this.length);
                                for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                                (t.length = this.length), (t.negative = this.negative), (t.red = this.red);
                            }),
                            (o.prototype._move = function (t) {
                                c(t, this);
                            }),
                            (o.prototype.clone = function () {
                                var t = new o(null);
                                return this.copy(t), t;
                            }),
                            (o.prototype._expand = function (t) {
                                for (; this.length < t; ) this.words[this.length++] = 0;
                                return this;
                            }),
                            (o.prototype._strip = function () {
                                for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
                                return this._normSign();
                            }),
                            (o.prototype._normSign = function () {
                                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
                            }),
                        "undefined" != typeof Symbol && "function" == typeof Symbol.for)
                    )
                        try {
                            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = h;
                        } catch (t) {
                            o.prototype.inspect = h;
                        }
                    else o.prototype.inspect = h;
                    function h() {
                        return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                    }
                    var d = [
                            "",
                            "0",
                            "00",
                            "000",
                            "0000",
                            "00000",
                            "000000",
                            "0000000",
                            "00000000",
                            "000000000",
                            "0000000000",
                            "00000000000",
                            "000000000000",
                            "0000000000000",
                            "00000000000000",
                            "000000000000000",
                            "0000000000000000",
                            "00000000000000000",
                            "000000000000000000",
                            "0000000000000000000",
                            "00000000000000000000",
                            "000000000000000000000",
                            "0000000000000000000000",
                            "00000000000000000000000",
                            "000000000000000000000000",
                            "0000000000000000000000000",
                        ],
                        l = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        p = [
                            0,
                            0,
                            33554432,
                            43046721,
                            16777216,
                            48828125,
                            60466176,
                            40353607,
                            16777216,
                            43046721,
                            1e7,
                            19487171,
                            35831808,
                            62748517,
                            7529536,
                            11390625,
                            16777216,
                            24137569,
                            34012224,
                            47045881,
                            64e6,
                            4084101,
                            5153632,
                            6436343,
                            7962624,
                            9765625,
                            11881376,
                            14348907,
                            17210368,
                            20511149,
                            243e5,
                            28629151,
                            33554432,
                            39135393,
                            45435424,
                            52521875,
                            60466176,
                        ];
                    function b(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = (t.length + e.length) | 0;
                        (r.length = n), (n = (n - 1) | 0);
                        var i = 0 | t.words[0],
                            o = 0 | e.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            f = (s / 67108864) | 0;
                        r.words[0] = a;
                        for (var u = 1; u < n; u++) {
                            for (var c = f >>> 26, h = 67108863 & f, d = Math.min(u, e.length - 1), l = Math.max(0, u - t.length + 1); l <= d; l++) {
                                var p = (u - l) | 0;
                                (c += ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) / 67108864) | 0), (h = 67108863 & s);
                            }
                            (r.words[u] = 0 | h), (f = 0 | c);
                        }
                        return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r._strip();
                    }
                    (o.prototype.toString = function (t, e) {
                        var r;
                        if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
                            r = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    f = (16777215 & ((a << i) | o)).toString(16);
                                (r = 0 != (o = (a >>> (24 - i)) & 16777215) || s !== this.length - 1 ? d[6 - f.length] + f + r : f + r), (i += 2) >= 26 && ((i -= 26), s--);
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var u = l[t],
                                c = p[t];
                            r = "";
                            var h = this.clone();
                            for (h.negative = 0; !h.isZero(); ) {
                                var b = h.modrn(c).toString(t);
                                r = (h = h.idivn(c)).isZero() ? b + r : d[u - b.length] + b + r;
                            }
                            for (this.isZero() && (r = "0" + r); r.length % e != 0; ) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        }
                        n(!1, "Base should be between 2 and 36");
                    }),
                        (o.prototype.toNumber = function () {
                            var t = this.words[0];
                            return (
                                2 === this.length
                                    ? (t += 67108864 * this.words[1])
                                    : 3 === this.length && 1 === this.words[2]
                                        ? (t += 4503599627370496 + 67108864 * this.words[1])
                                        : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                                    0 !== this.negative ? -t : t
                            );
                        }),
                        (o.prototype.toJSON = function () {
                            return this.toString(16, 2);
                        }),
                    s &&
                    (o.prototype.toBuffer = function (t, e) {
                        return this.toArrayLike(s, t, e);
                    }),
                        (o.prototype.toArray = function (t, e) {
                            return this.toArrayLike(Array, t, e);
                        }),
                        (o.prototype.toArrayLike = function (t, e, r) {
                            this._strip();
                            var i = this.byteLength(),
                                o = r || Math.max(1, i);
                            n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0");
                            var s = (function (t, e) {
                                return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
                            })(t, o);
                            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
                        }),
                        (o.prototype._toArrayLikeLE = function (t, e) {
                            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                                var s = (this.words[i] << o) | n;
                                (t[r++] = 255 & s),
                                r < t.length && (t[r++] = (s >> 8) & 255),
                                r < t.length && (t[r++] = (s >> 16) & 255),
                                    6 === o ? (r < t.length && (t[r++] = (s >> 24) & 255), (n = 0), (o = 0)) : ((n = s >>> 24), (o += 2));
                            }
                            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
                        }),
                        (o.prototype._toArrayLikeBE = function (t, e) {
                            for (var r = t.length - 1, n = 0, i = 0, o = 0; i < this.length; i++) {
                                var s = (this.words[i] << o) | n;
                                (t[r--] = 255 & s), r >= 0 && (t[r--] = (s >> 8) & 255), r >= 0 && (t[r--] = (s >> 16) & 255), 6 === o ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0)) : ((n = s >>> 24), (o += 2));
                            }
                            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
                        }),
                        Math.clz32
                            ? (o.prototype._countBits = function (t) {
                                return 32 - Math.clz32(t);
                            })
                            : (o.prototype._countBits = function (t) {
                                var e = t,
                                    r = 0;
                                return e >= 4096 && ((r += 13), (e >>>= 13)), e >= 64 && ((r += 7), (e >>>= 7)), e >= 8 && ((r += 4), (e >>>= 4)), e >= 2 && ((r += 2), (e >>>= 2)), r + e;
                            }),
                        (o.prototype._zeroBits = function (t) {
                            if (0 === t) return 26;
                            var e = t,
                                r = 0;
                            return 0 == (8191 & e) && ((r += 13), (e >>>= 13)), 0 == (127 & e) && ((r += 7), (e >>>= 7)), 0 == (15 & e) && ((r += 4), (e >>>= 4)), 0 == (3 & e) && ((r += 2), (e >>>= 2)), 0 == (1 & e) && r++, r;
                        }),
                        (o.prototype.bitLength = function () {
                            var t = this.words[this.length - 1],
                                e = this._countBits(t);
                            return 26 * (this.length - 1) + e;
                        }),
                        (o.prototype.zeroBits = function () {
                            if (this.isZero()) return 0;
                            for (var t = 0, e = 0; e < this.length; e++) {
                                var r = this._zeroBits(this.words[e]);
                                if (((t += r), 26 !== r)) break;
                            }
                            return t;
                        }),
                        (o.prototype.byteLength = function () {
                            return Math.ceil(this.bitLength() / 8);
                        }),
                        (o.prototype.toTwos = function (t) {
                            return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
                        }),
                        (o.prototype.fromTwos = function (t) {
                            return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
                        }),
                        (o.prototype.isNeg = function () {
                            return 0 !== this.negative;
                        }),
                        (o.prototype.neg = function () {
                            return this.clone().ineg();
                        }),
                        (o.prototype.ineg = function () {
                            return this.isZero() || (this.negative ^= 1), this;
                        }),
                        (o.prototype.iuor = function (t) {
                            for (; this.length < t.length; ) this.words[this.length++] = 0;
                            for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                            return this._strip();
                        }),
                        (o.prototype.ior = function (t) {
                            return n(0 == (this.negative | t.negative)), this.iuor(t);
                        }),
                        (o.prototype.or = function (t) {
                            return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
                        }),
                        (o.prototype.uor = function (t) {
                            return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
                        }),
                        (o.prototype.iuand = function (t) {
                            var e;
                            e = this.length > t.length ? t : this;
                            for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                            return (this.length = e.length), this._strip();
                        }),
                        (o.prototype.iand = function (t) {
                            return n(0 == (this.negative | t.negative)), this.iuand(t);
                        }),
                        (o.prototype.and = function (t) {
                            return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
                        }),
                        (o.prototype.uand = function (t) {
                            return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
                        }),
                        (o.prototype.iuxor = function (t) {
                            var e, r;
                            this.length > t.length ? ((e = this), (r = t)) : ((e = t), (r = this));
                            for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
                            return (this.length = e.length), this._strip();
                        }),
                        (o.prototype.ixor = function (t) {
                            return n(0 == (this.negative | t.negative)), this.iuxor(t);
                        }),
                        (o.prototype.xor = function (t) {
                            return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
                        }),
                        (o.prototype.uxor = function (t) {
                            return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
                        }),
                        (o.prototype.inotn = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e = 0 | Math.ceil(t / 26),
                                r = t % 26;
                            this._expand(e), r > 0 && e--;
                            for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                            return r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this._strip();
                        }),
                        (o.prototype.notn = function (t) {
                            return this.clone().inotn(t);
                        }),
                        (o.prototype.setn = function (t, e) {
                            n("number" == typeof t && t >= 0);
                            var r = (t / 26) | 0,
                                i = t % 26;
                            return this._expand(r + 1), (this.words[r] = e ? this.words[r] | (1 << i) : this.words[r] & ~(1 << i)), this._strip();
                        }),
                        (o.prototype.iadd = function (t) {
                            var e, r, n;
                            if (0 !== this.negative && 0 === t.negative) return (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign();
                            if (0 === this.negative && 0 !== t.negative) return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign();
                            this.length > t.length ? ((r = this), (n = t)) : ((r = t), (n = this));
                            for (var i = 0, o = 0; o < n.length; o++) (e = (0 | r.words[o]) + (0 | n.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26);
                            for (; 0 !== i && o < r.length; o++) (e = (0 | r.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26);
                            if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++;
                            else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
                            return this;
                        }),
                        (o.prototype.add = function (t) {
                            var e;
                            return 0 !== t.negative && 0 === this.negative
                                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                                : 0 === t.negative && 0 !== this.negative
                                    ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
                                    : this.length > t.length
                                        ? this.clone().iadd(t)
                                        : t.clone().iadd(this);
                        }),
                        (o.prototype.isub = function (t) {
                            if (0 !== t.negative) {
                                t.negative = 0;
                                var e = this.iadd(t);
                                return (t.negative = 1), e._normSign();
                            }
                            if (0 !== this.negative) return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign();
                            var r,
                                n,
                                i = this.cmp(t);
                            if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
                            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
                            for (var o = 0, s = 0; s < n.length; s++) (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26), (this.words[s] = 67108863 & e);
                            for (; 0 !== o && s < r.length; s++) (o = (e = (0 | r.words[s]) + o) >> 26), (this.words[s] = 67108863 & e);
                            if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
                            return (this.length = Math.max(this.length, s)), r !== this && (this.negative = 1), this._strip();
                        }),
                        (o.prototype.sub = function (t) {
                            return this.clone().isub(t);
                        });
                    var y = function (t, e, r) {
                        var n,
                            i,
                            o,
                            s = t.words,
                            a = e.words,
                            f = r.words,
                            u = 0,
                            c = 0 | s[0],
                            h = 8191 & c,
                            d = c >>> 13,
                            l = 0 | s[1],
                            p = 8191 & l,
                            b = l >>> 13,
                            y = 0 | s[2],
                            m = 8191 & y,
                            g = y >>> 13,
                            v = 0 | s[3],
                            w = 8191 & v,
                            M = v >>> 13,
                            _ = 0 | s[4],
                            A = 8191 & _,
                            S = _ >>> 13,
                            x = 0 | s[5],
                            E = 8191 & x,
                            k = x >>> 13,
                            I = 0 | s[6],
                            B = 8191 & I,
                            P = I >>> 13,
                            R = 0 | s[7],
                            U = 8191 & R,
                            O = R >>> 13,
                            T = 0 | s[8],
                            L = 8191 & T,
                            z = T >>> 13,
                            j = 0 | s[9],
                            N = 8191 & j,
                            q = j >>> 13,
                            C = 0 | a[0],
                            W = 8191 & C,
                            K = C >>> 13,
                            D = 0 | a[1],
                            F = 8191 & D,
                            $ = D >>> 13,
                            V = 0 | a[2],
                            Z = 8191 & V,
                            Y = V >>> 13,
                            H = 0 | a[3],
                            J = 8191 & H,
                            G = H >>> 13,
                            X = 0 | a[4],
                            Q = 8191 & X,
                            tt = X >>> 13,
                            et = 0 | a[5],
                            rt = 8191 & et,
                            nt = et >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ft = 8191 & at,
                            ut = at >>> 13,
                            ct = 0 | a[8],
                            ht = 8191 & ct,
                            dt = ct >>> 13,
                            lt = 0 | a[9],
                            pt = 8191 & lt,
                            bt = lt >>> 13;
                        (r.negative = t.negative ^ e.negative), (r.length = 19);
                        var yt = (((u + (n = Math.imul(h, W))) | 0) + ((8191 & (i = ((i = Math.imul(h, K)) + Math.imul(d, W)) | 0)) << 13)) | 0;
                        (u = ((((o = Math.imul(d, K)) + (i >>> 13)) | 0) + (yt >>> 26)) | 0), (yt &= 67108863), (n = Math.imul(p, W)), (i = ((i = Math.imul(p, K)) + Math.imul(b, W)) | 0), (o = Math.imul(b, K));
                        var mt = (((u + (n = (n + Math.imul(h, F)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, $)) | 0) + Math.imul(d, F)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, $)) | 0) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
                            (mt &= 67108863),
                            (n = Math.imul(m, W)),
                            (i = ((i = Math.imul(m, K)) + Math.imul(g, W)) | 0),
                            (o = Math.imul(g, K)),
                            (n = (n + Math.imul(p, F)) | 0),
                            (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(b, F)) | 0),
                            (o = (o + Math.imul(b, $)) | 0);
                        var gt = (((u + (n = (n + Math.imul(h, Z)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, Y)) | 0) + Math.imul(d, Z)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, Y)) | 0) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
                            (gt &= 67108863),
                            (n = Math.imul(w, W)),
                            (i = ((i = Math.imul(w, K)) + Math.imul(M, W)) | 0),
                            (o = Math.imul(M, K)),
                            (n = (n + Math.imul(m, F)) | 0),
                            (i = ((i = (i + Math.imul(m, $)) | 0) + Math.imul(g, F)) | 0),
                            (o = (o + Math.imul(g, $)) | 0),
                            (n = (n + Math.imul(p, Z)) | 0),
                            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, Z)) | 0),
                            (o = (o + Math.imul(b, Y)) | 0);
                        var vt = (((u + (n = (n + Math.imul(h, J)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, G)) | 0) + Math.imul(d, J)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, G)) | 0) + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
                            (vt &= 67108863),
                            (n = Math.imul(A, W)),
                            (i = ((i = Math.imul(A, K)) + Math.imul(S, W)) | 0),
                            (o = Math.imul(S, K)),
                            (n = (n + Math.imul(w, F)) | 0),
                            (i = ((i = (i + Math.imul(w, $)) | 0) + Math.imul(M, F)) | 0),
                            (o = (o + Math.imul(M, $)) | 0),
                            (n = (n + Math.imul(m, Z)) | 0),
                            (i = ((i = (i + Math.imul(m, Y)) | 0) + Math.imul(g, Z)) | 0),
                            (o = (o + Math.imul(g, Y)) | 0),
                            (n = (n + Math.imul(p, J)) | 0),
                            (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(b, J)) | 0),
                            (o = (o + Math.imul(b, G)) | 0);
                        var wt = (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(d, Q)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
                            (wt &= 67108863),
                            (n = Math.imul(E, W)),
                            (i = ((i = Math.imul(E, K)) + Math.imul(k, W)) | 0),
                            (o = Math.imul(k, K)),
                            (n = (n + Math.imul(A, F)) | 0),
                            (i = ((i = (i + Math.imul(A, $)) | 0) + Math.imul(S, F)) | 0),
                            (o = (o + Math.imul(S, $)) | 0),
                            (n = (n + Math.imul(w, Z)) | 0),
                            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(M, Z)) | 0),
                            (o = (o + Math.imul(M, Y)) | 0),
                            (n = (n + Math.imul(m, J)) | 0),
                            (i = ((i = (i + Math.imul(m, G)) | 0) + Math.imul(g, J)) | 0),
                            (o = (o + Math.imul(g, G)) | 0),
                            (n = (n + Math.imul(p, Q)) | 0),
                            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
                            (o = (o + Math.imul(b, tt)) | 0);
                        var Mt = (((u + (n = (n + Math.imul(h, rt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(d, rt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, nt)) | 0) + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
                            (Mt &= 67108863),
                            (n = Math.imul(B, W)),
                            (i = ((i = Math.imul(B, K)) + Math.imul(P, W)) | 0),
                            (o = Math.imul(P, K)),
                            (n = (n + Math.imul(E, F)) | 0),
                            (i = ((i = (i + Math.imul(E, $)) | 0) + Math.imul(k, F)) | 0),
                            (o = (o + Math.imul(k, $)) | 0),
                            (n = (n + Math.imul(A, Z)) | 0),
                            (i = ((i = (i + Math.imul(A, Y)) | 0) + Math.imul(S, Z)) | 0),
                            (o = (o + Math.imul(S, Y)) | 0),
                            (n = (n + Math.imul(w, J)) | 0),
                            (i = ((i = (i + Math.imul(w, G)) | 0) + Math.imul(M, J)) | 0),
                            (o = (o + Math.imul(M, G)) | 0),
                            (n = (n + Math.imul(m, Q)) | 0),
                            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(g, Q)) | 0),
                            (o = (o + Math.imul(g, tt)) | 0),
                            (n = (n + Math.imul(p, rt)) | 0),
                            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(b, rt)) | 0),
                            (o = (o + Math.imul(b, nt)) | 0);
                        var _t = (((u + (n = (n + Math.imul(h, ot)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, st)) | 0) + Math.imul(d, ot)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, st)) | 0) + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
                            (_t &= 67108863),
                            (n = Math.imul(U, W)),
                            (i = ((i = Math.imul(U, K)) + Math.imul(O, W)) | 0),
                            (o = Math.imul(O, K)),
                            (n = (n + Math.imul(B, F)) | 0),
                            (i = ((i = (i + Math.imul(B, $)) | 0) + Math.imul(P, F)) | 0),
                            (o = (o + Math.imul(P, $)) | 0),
                            (n = (n + Math.imul(E, Z)) | 0),
                            (i = ((i = (i + Math.imul(E, Y)) | 0) + Math.imul(k, Z)) | 0),
                            (o = (o + Math.imul(k, Y)) | 0),
                            (n = (n + Math.imul(A, J)) | 0),
                            (i = ((i = (i + Math.imul(A, G)) | 0) + Math.imul(S, J)) | 0),
                            (o = (o + Math.imul(S, G)) | 0),
                            (n = (n + Math.imul(w, Q)) | 0),
                            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(M, Q)) | 0),
                            (o = (o + Math.imul(M, tt)) | 0),
                            (n = (n + Math.imul(m, rt)) | 0),
                            (i = ((i = (i + Math.imul(m, nt)) | 0) + Math.imul(g, rt)) | 0),
                            (o = (o + Math.imul(g, nt)) | 0),
                            (n = (n + Math.imul(p, ot)) | 0),
                            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(b, ot)) | 0),
                            (o = (o + Math.imul(b, st)) | 0);
                        var At = (((u + (n = (n + Math.imul(h, ft)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, ut)) | 0) + Math.imul(d, ft)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, ut)) | 0) + (i >>> 13)) | 0) + (At >>> 26)) | 0),
                            (At &= 67108863),
                            (n = Math.imul(L, W)),
                            (i = ((i = Math.imul(L, K)) + Math.imul(z, W)) | 0),
                            (o = Math.imul(z, K)),
                            (n = (n + Math.imul(U, F)) | 0),
                            (i = ((i = (i + Math.imul(U, $)) | 0) + Math.imul(O, F)) | 0),
                            (o = (o + Math.imul(O, $)) | 0),
                            (n = (n + Math.imul(B, Z)) | 0),
                            (i = ((i = (i + Math.imul(B, Y)) | 0) + Math.imul(P, Z)) | 0),
                            (o = (o + Math.imul(P, Y)) | 0),
                            (n = (n + Math.imul(E, J)) | 0),
                            (i = ((i = (i + Math.imul(E, G)) | 0) + Math.imul(k, J)) | 0),
                            (o = (o + Math.imul(k, G)) | 0),
                            (n = (n + Math.imul(A, Q)) | 0),
                            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(S, Q)) | 0),
                            (o = (o + Math.imul(S, tt)) | 0),
                            (n = (n + Math.imul(w, rt)) | 0),
                            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(M, rt)) | 0),
                            (o = (o + Math.imul(M, nt)) | 0),
                            (n = (n + Math.imul(m, ot)) | 0),
                            (i = ((i = (i + Math.imul(m, st)) | 0) + Math.imul(g, ot)) | 0),
                            (o = (o + Math.imul(g, st)) | 0),
                            (n = (n + Math.imul(p, ft)) | 0),
                            (i = ((i = (i + Math.imul(p, ut)) | 0) + Math.imul(b, ft)) | 0),
                            (o = (o + Math.imul(b, ut)) | 0);
                        var St = (((u + (n = (n + Math.imul(h, ht)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, dt)) | 0) + Math.imul(d, ht)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, dt)) | 0) + (i >>> 13)) | 0) + (St >>> 26)) | 0),
                            (St &= 67108863),
                            (n = Math.imul(N, W)),
                            (i = ((i = Math.imul(N, K)) + Math.imul(q, W)) | 0),
                            (o = Math.imul(q, K)),
                            (n = (n + Math.imul(L, F)) | 0),
                            (i = ((i = (i + Math.imul(L, $)) | 0) + Math.imul(z, F)) | 0),
                            (o = (o + Math.imul(z, $)) | 0),
                            (n = (n + Math.imul(U, Z)) | 0),
                            (i = ((i = (i + Math.imul(U, Y)) | 0) + Math.imul(O, Z)) | 0),
                            (o = (o + Math.imul(O, Y)) | 0),
                            (n = (n + Math.imul(B, J)) | 0),
                            (i = ((i = (i + Math.imul(B, G)) | 0) + Math.imul(P, J)) | 0),
                            (o = (o + Math.imul(P, G)) | 0),
                            (n = (n + Math.imul(E, Q)) | 0),
                            (i = ((i = (i + Math.imul(E, tt)) | 0) + Math.imul(k, Q)) | 0),
                            (o = (o + Math.imul(k, tt)) | 0),
                            (n = (n + Math.imul(A, rt)) | 0),
                            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(S, rt)) | 0),
                            (o = (o + Math.imul(S, nt)) | 0),
                            (n = (n + Math.imul(w, ot)) | 0),
                            (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(M, ot)) | 0),
                            (o = (o + Math.imul(M, st)) | 0),
                            (n = (n + Math.imul(m, ft)) | 0),
                            (i = ((i = (i + Math.imul(m, ut)) | 0) + Math.imul(g, ft)) | 0),
                            (o = (o + Math.imul(g, ut)) | 0),
                            (n = (n + Math.imul(p, ht)) | 0),
                            (i = ((i = (i + Math.imul(p, dt)) | 0) + Math.imul(b, ht)) | 0),
                            (o = (o + Math.imul(b, dt)) | 0);
                        var xt = (((u + (n = (n + Math.imul(h, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, bt)) | 0) + Math.imul(d, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, bt)) | 0) + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
                            (xt &= 67108863),
                            (n = Math.imul(N, F)),
                            (i = ((i = Math.imul(N, $)) + Math.imul(q, F)) | 0),
                            (o = Math.imul(q, $)),
                            (n = (n + Math.imul(L, Z)) | 0),
                            (i = ((i = (i + Math.imul(L, Y)) | 0) + Math.imul(z, Z)) | 0),
                            (o = (o + Math.imul(z, Y)) | 0),
                            (n = (n + Math.imul(U, J)) | 0),
                            (i = ((i = (i + Math.imul(U, G)) | 0) + Math.imul(O, J)) | 0),
                            (o = (o + Math.imul(O, G)) | 0),
                            (n = (n + Math.imul(B, Q)) | 0),
                            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(P, Q)) | 0),
                            (o = (o + Math.imul(P, tt)) | 0),
                            (n = (n + Math.imul(E, rt)) | 0),
                            (i = ((i = (i + Math.imul(E, nt)) | 0) + Math.imul(k, rt)) | 0),
                            (o = (o + Math.imul(k, nt)) | 0),
                            (n = (n + Math.imul(A, ot)) | 0),
                            (i = ((i = (i + Math.imul(A, st)) | 0) + Math.imul(S, ot)) | 0),
                            (o = (o + Math.imul(S, st)) | 0),
                            (n = (n + Math.imul(w, ft)) | 0),
                            (i = ((i = (i + Math.imul(w, ut)) | 0) + Math.imul(M, ft)) | 0),
                            (o = (o + Math.imul(M, ut)) | 0),
                            (n = (n + Math.imul(m, ht)) | 0),
                            (i = ((i = (i + Math.imul(m, dt)) | 0) + Math.imul(g, ht)) | 0),
                            (o = (o + Math.imul(g, dt)) | 0);
                        var Et = (((u + (n = (n + Math.imul(p, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(b, bt)) | 0) + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
                            (Et &= 67108863),
                            (n = Math.imul(N, Z)),
                            (i = ((i = Math.imul(N, Y)) + Math.imul(q, Z)) | 0),
                            (o = Math.imul(q, Y)),
                            (n = (n + Math.imul(L, J)) | 0),
                            (i = ((i = (i + Math.imul(L, G)) | 0) + Math.imul(z, J)) | 0),
                            (o = (o + Math.imul(z, G)) | 0),
                            (n = (n + Math.imul(U, Q)) | 0),
                            (i = ((i = (i + Math.imul(U, tt)) | 0) + Math.imul(O, Q)) | 0),
                            (o = (o + Math.imul(O, tt)) | 0),
                            (n = (n + Math.imul(B, rt)) | 0),
                            (i = ((i = (i + Math.imul(B, nt)) | 0) + Math.imul(P, rt)) | 0),
                            (o = (o + Math.imul(P, nt)) | 0),
                            (n = (n + Math.imul(E, ot)) | 0),
                            (i = ((i = (i + Math.imul(E, st)) | 0) + Math.imul(k, ot)) | 0),
                            (o = (o + Math.imul(k, st)) | 0),
                            (n = (n + Math.imul(A, ft)) | 0),
                            (i = ((i = (i + Math.imul(A, ut)) | 0) + Math.imul(S, ft)) | 0),
                            (o = (o + Math.imul(S, ut)) | 0),
                            (n = (n + Math.imul(w, ht)) | 0),
                            (i = ((i = (i + Math.imul(w, dt)) | 0) + Math.imul(M, ht)) | 0),
                            (o = (o + Math.imul(M, dt)) | 0);
                        var kt = (((u + (n = (n + Math.imul(m, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(m, bt)) | 0) + Math.imul(g, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(g, bt)) | 0) + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
                            (kt &= 67108863),
                            (n = Math.imul(N, J)),
                            (i = ((i = Math.imul(N, G)) + Math.imul(q, J)) | 0),
                            (o = Math.imul(q, G)),
                            (n = (n + Math.imul(L, Q)) | 0),
                            (i = ((i = (i + Math.imul(L, tt)) | 0) + Math.imul(z, Q)) | 0),
                            (o = (o + Math.imul(z, tt)) | 0),
                            (n = (n + Math.imul(U, rt)) | 0),
                            (i = ((i = (i + Math.imul(U, nt)) | 0) + Math.imul(O, rt)) | 0),
                            (o = (o + Math.imul(O, nt)) | 0),
                            (n = (n + Math.imul(B, ot)) | 0),
                            (i = ((i = (i + Math.imul(B, st)) | 0) + Math.imul(P, ot)) | 0),
                            (o = (o + Math.imul(P, st)) | 0),
                            (n = (n + Math.imul(E, ft)) | 0),
                            (i = ((i = (i + Math.imul(E, ut)) | 0) + Math.imul(k, ft)) | 0),
                            (o = (o + Math.imul(k, ut)) | 0),
                            (n = (n + Math.imul(A, ht)) | 0),
                            (i = ((i = (i + Math.imul(A, dt)) | 0) + Math.imul(S, ht)) | 0),
                            (o = (o + Math.imul(S, dt)) | 0);
                        var It = (((u + (n = (n + Math.imul(w, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(w, bt)) | 0) + Math.imul(M, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(M, bt)) | 0) + (i >>> 13)) | 0) + (It >>> 26)) | 0),
                            (It &= 67108863),
                            (n = Math.imul(N, Q)),
                            (i = ((i = Math.imul(N, tt)) + Math.imul(q, Q)) | 0),
                            (o = Math.imul(q, tt)),
                            (n = (n + Math.imul(L, rt)) | 0),
                            (i = ((i = (i + Math.imul(L, nt)) | 0) + Math.imul(z, rt)) | 0),
                            (o = (o + Math.imul(z, nt)) | 0),
                            (n = (n + Math.imul(U, ot)) | 0),
                            (i = ((i = (i + Math.imul(U, st)) | 0) + Math.imul(O, ot)) | 0),
                            (o = (o + Math.imul(O, st)) | 0),
                            (n = (n + Math.imul(B, ft)) | 0),
                            (i = ((i = (i + Math.imul(B, ut)) | 0) + Math.imul(P, ft)) | 0),
                            (o = (o + Math.imul(P, ut)) | 0),
                            (n = (n + Math.imul(E, ht)) | 0),
                            (i = ((i = (i + Math.imul(E, dt)) | 0) + Math.imul(k, ht)) | 0),
                            (o = (o + Math.imul(k, dt)) | 0);
                        var Bt = (((u + (n = (n + Math.imul(A, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(A, bt)) | 0) + Math.imul(S, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(S, bt)) | 0) + (i >>> 13)) | 0) + (Bt >>> 26)) | 0),
                            (Bt &= 67108863),
                            (n = Math.imul(N, rt)),
                            (i = ((i = Math.imul(N, nt)) + Math.imul(q, rt)) | 0),
                            (o = Math.imul(q, nt)),
                            (n = (n + Math.imul(L, ot)) | 0),
                            (i = ((i = (i + Math.imul(L, st)) | 0) + Math.imul(z, ot)) | 0),
                            (o = (o + Math.imul(z, st)) | 0),
                            (n = (n + Math.imul(U, ft)) | 0),
                            (i = ((i = (i + Math.imul(U, ut)) | 0) + Math.imul(O, ft)) | 0),
                            (o = (o + Math.imul(O, ut)) | 0),
                            (n = (n + Math.imul(B, ht)) | 0),
                            (i = ((i = (i + Math.imul(B, dt)) | 0) + Math.imul(P, ht)) | 0),
                            (o = (o + Math.imul(P, dt)) | 0);
                        var Pt = (((u + (n = (n + Math.imul(E, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(E, bt)) | 0) + Math.imul(k, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(k, bt)) | 0) + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
                            (Pt &= 67108863),
                            (n = Math.imul(N, ot)),
                            (i = ((i = Math.imul(N, st)) + Math.imul(q, ot)) | 0),
                            (o = Math.imul(q, st)),
                            (n = (n + Math.imul(L, ft)) | 0),
                            (i = ((i = (i + Math.imul(L, ut)) | 0) + Math.imul(z, ft)) | 0),
                            (o = (o + Math.imul(z, ut)) | 0),
                            (n = (n + Math.imul(U, ht)) | 0),
                            (i = ((i = (i + Math.imul(U, dt)) | 0) + Math.imul(O, ht)) | 0),
                            (o = (o + Math.imul(O, dt)) | 0);
                        var Rt = (((u + (n = (n + Math.imul(B, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(B, bt)) | 0) + Math.imul(P, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(P, bt)) | 0) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
                            (Rt &= 67108863),
                            (n = Math.imul(N, ft)),
                            (i = ((i = Math.imul(N, ut)) + Math.imul(q, ft)) | 0),
                            (o = Math.imul(q, ut)),
                            (n = (n + Math.imul(L, ht)) | 0),
                            (i = ((i = (i + Math.imul(L, dt)) | 0) + Math.imul(z, ht)) | 0),
                            (o = (o + Math.imul(z, dt)) | 0);
                        var Ut = (((u + (n = (n + Math.imul(U, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(U, bt)) | 0) + Math.imul(O, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(O, bt)) | 0) + (i >>> 13)) | 0) + (Ut >>> 26)) | 0), (Ut &= 67108863), (n = Math.imul(N, ht)), (i = ((i = Math.imul(N, dt)) + Math.imul(q, ht)) | 0), (o = Math.imul(q, dt));
                        var Ot = (((u + (n = (n + Math.imul(L, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(L, bt)) | 0) + Math.imul(z, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(z, bt)) | 0) + (i >>> 13)) | 0) + (Ot >>> 26)) | 0), (Ot &= 67108863);
                        var Tt = (((u + (n = Math.imul(N, pt))) | 0) + ((8191 & (i = ((i = Math.imul(N, bt)) + Math.imul(q, pt)) | 0)) << 13)) | 0;
                        return (
                            (u = ((((o = Math.imul(q, bt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
                                (Tt &= 67108863),
                                (f[0] = yt),
                                (f[1] = mt),
                                (f[2] = gt),
                                (f[3] = vt),
                                (f[4] = wt),
                                (f[5] = Mt),
                                (f[6] = _t),
                                (f[7] = At),
                                (f[8] = St),
                                (f[9] = xt),
                                (f[10] = Et),
                                (f[11] = kt),
                                (f[12] = It),
                                (f[13] = Bt),
                                (f[14] = Pt),
                                (f[15] = Rt),
                                (f[16] = Ut),
                                (f[17] = Ot),
                                (f[18] = Tt),
                            0 !== u && ((f[19] = u), r.length++),
                                r
                        );
                    };
                    function m(t, e, r) {
                        (r.negative = e.negative ^ t.negative), (r.length = t.length + e.length);
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var s = i;
                            i = 0;
                            for (var a = 67108863 & n, f = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= f; u++) {
                                var c = o - u,
                                    h = (0 | t.words[c]) * (0 | e.words[u]),
                                    d = 67108863 & h;
                                (a = 67108863 & (d = (d + a) | 0)), (i += (s = ((s = (s + ((h / 67108864) | 0)) | 0) + (d >>> 26)) | 0) >>> 26), (s &= 67108863);
                            }
                            (r.words[o] = a), (n = s), (s = i);
                        }
                        return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
                    }
                    function g(t, e, r) {
                        return m(t, e, r);
                    }
                    function v(t, e) {
                        (this.x = t), (this.y = e);
                    }
                    Math.imul || (y = b),
                        (o.prototype.mulTo = function (t, e) {
                            var r = this.length + t.length;
                            return 10 === this.length && 10 === t.length ? y(this, t, e) : r < 63 ? b(this, t, e) : r < 1024 ? m(this, t, e) : g(this, t, e);
                        }),
                        (v.prototype.makeRBT = function (t) {
                            for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                            return e;
                        }),
                        (v.prototype.revBin = function (t, e, r) {
                            if (0 === t || t === r - 1) return t;
                            for (var n = 0, i = 0; i < e; i++) (n |= (1 & t) << (e - i - 1)), (t >>= 1);
                            return n;
                        }),
                        (v.prototype.permute = function (t, e, r, n, i, o) {
                            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
                        }),
                        (v.prototype.transform = function (t, e, r, n, i, o) {
                            this.permute(o, t, e, r, n, i);
                            for (var s = 1; s < i; s <<= 1)
                                for (var a = s << 1, f = Math.cos((2 * Math.PI) / a), u = Math.sin((2 * Math.PI) / a), c = 0; c < i; c += a)
                                    for (var h = f, d = u, l = 0; l < s; l++) {
                                        var p = r[c + l],
                                            b = n[c + l],
                                            y = r[c + l + s],
                                            m = n[c + l + s],
                                            g = h * y - d * m;
                                        (m = h * m + d * y), (y = g), (r[c + l] = p + y), (n[c + l] = b + m), (r[c + l + s] = p - y), (n[c + l + s] = b - m), l !== a && ((g = f * h - u * d), (d = f * d + u * h), (h = g));
                                    }
                        }),
                        (v.prototype.guessLen13b = function (t, e) {
                            var r = 1 | Math.max(e, t),
                                n = 1 & r,
                                i = 0;
                            for (r = (r / 2) | 0; r; r >>>= 1) i++;
                            return 1 << (i + 1 + n);
                        }),
                        (v.prototype.conjugate = function (t, e, r) {
                            if (!(r <= 1))
                                for (var n = 0; n < r / 2; n++) {
                                    var i = t[n];
                                    (t[n] = t[r - n - 1]), (t[r - n - 1] = i), (i = e[n]), (e[n] = -e[r - n - 1]), (e[r - n - 1] = -i);
                                }
                        }),
                        (v.prototype.normalize13b = function (t, e) {
                            for (var r = 0, n = 0; n < e / 2; n++) {
                                var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                                (t[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0);
                            }
                            return t;
                        }),
                        (v.prototype.convert13b = function (t, e, r, i) {
                            for (var o = 0, s = 0; s < e; s++) (o += 0 | t[s]), (r[2 * s] = 8191 & o), (o >>>= 13), (r[2 * s + 1] = 8191 & o), (o >>>= 13);
                            for (s = 2 * e; s < i; ++s) r[s] = 0;
                            n(0 === o), n(0 == (-8192 & o));
                        }),
                        (v.prototype.stub = function (t) {
                            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                            return e;
                        }),
                        (v.prototype.mulp = function (t, e, r) {
                            var n = 2 * this.guessLen13b(t.length, e.length),
                                i = this.makeRBT(n),
                                o = this.stub(n),
                                s = new Array(n),
                                a = new Array(n),
                                f = new Array(n),
                                u = new Array(n),
                                c = new Array(n),
                                h = new Array(n),
                                d = r.words;
                            (d.length = n), this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, u, n), this.transform(s, o, a, f, n, i), this.transform(u, o, c, h, n, i);
                            for (var l = 0; l < n; l++) {
                                var p = a[l] * c[l] - f[l] * h[l];
                                (f[l] = a[l] * h[l] + f[l] * c[l]), (a[l] = p);
                            }
                            return this.conjugate(a, f, n), this.transform(a, f, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), (r.negative = t.negative ^ e.negative), (r.length = t.length + e.length), r._strip();
                        }),
                        (o.prototype.mul = function (t) {
                            var e = new o(null);
                            return (e.words = new Array(this.length + t.length)), this.mulTo(t, e);
                        }),
                        (o.prototype.mulf = function (t) {
                            var e = new o(null);
                            return (e.words = new Array(this.length + t.length)), g(this, t, e);
                        }),
                        (o.prototype.imul = function (t) {
                            return this.clone().mulTo(t, this);
                        }),
                        (o.prototype.imuln = function (t) {
                            var e = t < 0;
                            e && (t = -t), n("number" == typeof t), n(t < 67108864);
                            for (var r = 0, i = 0; i < this.length; i++) {
                                var o = (0 | this.words[i]) * t,
                                    s = (67108863 & o) + (67108863 & r);
                                (r >>= 26), (r += (o / 67108864) | 0), (r += s >>> 26), (this.words[i] = 67108863 & s);
                            }
                            return 0 !== r && ((this.words[i] = r), this.length++), e ? this.ineg() : this;
                        }),
                        (o.prototype.muln = function (t) {
                            return this.clone().imuln(t);
                        }),
                        (o.prototype.sqr = function () {
                            return this.mul(this);
                        }),
                        (o.prototype.isqr = function () {
                            return this.imul(this.clone());
                        }),
                        (o.prototype.pow = function (t) {
                            var e = (function (t) {
                                for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                    var n = (r / 26) | 0,
                                        i = r % 26;
                                    e[r] = (t.words[n] >>> i) & 1;
                                }
                                return e;
                            })(t);
                            if (0 === e.length) return new o(1);
                            for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                            if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                            return r;
                        }),
                        (o.prototype.iushln = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e,
                                r = t % 26,
                                i = (t - r) / 26,
                                o = (67108863 >>> (26 - r)) << (26 - r);
                            if (0 !== r) {
                                var s = 0;
                                for (e = 0; e < this.length; e++) {
                                    var a = this.words[e] & o,
                                        f = ((0 | this.words[e]) - a) << r;
                                    (this.words[e] = f | s), (s = a >>> (26 - r));
                                }
                                s && ((this.words[e] = s), this.length++);
                            }
                            if (0 !== i) {
                                for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                                for (e = 0; e < i; e++) this.words[e] = 0;
                                this.length += i;
                            }
                            return this._strip();
                        }),
                        (o.prototype.ishln = function (t) {
                            return n(0 === this.negative), this.iushln(t);
                        }),
                        (o.prototype.iushrn = function (t, e, r) {
                            var i;
                            n("number" == typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0);
                            var o = t % 26,
                                s = Math.min((t - o) / 26, this.length),
                                a = 67108863 ^ ((67108863 >>> o) << o),
                                f = r;
                            if (((i -= s), (i = Math.max(0, i)), f)) {
                                for (var u = 0; u < s; u++) f.words[u] = this.words[u];
                                f.length = s;
                            }
                            if (0 === s);
                            else if (this.length > s) for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                            else (this.words[0] = 0), (this.length = 1);
                            var c = 0;
                            for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                                var h = 0 | this.words[u];
                                (this.words[u] = (c << (26 - o)) | (h >>> o)), (c = h & a);
                            }
                            return f && 0 !== c && (f.words[f.length++] = c), 0 === this.length && ((this.words[0] = 0), (this.length = 1)), this._strip();
                        }),
                        (o.prototype.ishrn = function (t, e, r) {
                            return n(0 === this.negative), this.iushrn(t, e, r);
                        }),
                        (o.prototype.shln = function (t) {
                            return this.clone().ishln(t);
                        }),
                        (o.prototype.ushln = function (t) {
                            return this.clone().iushln(t);
                        }),
                        (o.prototype.shrn = function (t) {
                            return this.clone().ishrn(t);
                        }),
                        (o.prototype.ushrn = function (t) {
                            return this.clone().iushrn(t);
                        }),
                        (o.prototype.testn = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e = t % 26,
                                r = (t - e) / 26,
                                i = 1 << e;
                            return !(this.length <= r || !(this.words[r] & i));
                        }),
                        (o.prototype.imaskn = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e = t % 26,
                                r = (t - e) / 26;
                            if ((n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r)) return this;
                            if ((0 !== e && r++, (this.length = Math.min(r, this.length)), 0 !== e)) {
                                var i = 67108863 ^ ((67108863 >>> e) << e);
                                this.words[this.length - 1] &= i;
                            }
                            return this._strip();
                        }),
                        (o.prototype.maskn = function (t) {
                            return this.clone().imaskn(t);
                        }),
                        (o.prototype.iaddn = function (t) {
                            return (
                                n("number" == typeof t),
                                    n(t < 67108864),
                                    t < 0
                                        ? this.isubn(-t)
                                        : 0 !== this.negative
                                            ? 1 === this.length && (0 | this.words[0]) <= t
                                                ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0), this)
                                                : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
                                            : this._iaddn(t)
                            );
                        }),
                        (o.prototype._iaddn = function (t) {
                            this.words[0] += t;
                            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) (this.words[e] -= 67108864), e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++;
                            return (this.length = Math.max(this.length, e + 1)), this;
                        }),
                        (o.prototype.isubn = function (t) {
                            if ((n("number" == typeof t), n(t < 67108864), t < 0)) return this.iaddn(-t);
                            if (0 !== this.negative) return (this.negative = 0), this.iaddn(t), (this.negative = 1), this;
                            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1);
                            else for (var e = 0; e < this.length && this.words[e] < 0; e++) (this.words[e] += 67108864), (this.words[e + 1] -= 1);
                            return this._strip();
                        }),
                        (o.prototype.addn = function (t) {
                            return this.clone().iaddn(t);
                        }),
                        (o.prototype.subn = function (t) {
                            return this.clone().isubn(t);
                        }),
                        (o.prototype.iabs = function () {
                            return (this.negative = 0), this;
                        }),
                        (o.prototype.abs = function () {
                            return this.clone().iabs();
                        }),
                        (o.prototype._ishlnsubmul = function (t, e, r) {
                            var i,
                                o,
                                s = t.length + r;
                            this._expand(s);
                            var a = 0;
                            for (i = 0; i < t.length; i++) {
                                o = (0 | this.words[i + r]) + a;
                                var f = (0 | t.words[i]) * e;
                                (a = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)), (this.words[i + r] = 67108863 & o);
                            }
                            for (; i < this.length - r; i++) (a = (o = (0 | this.words[i + r]) + a) >> 26), (this.words[i + r] = 67108863 & o);
                            if (0 === a) return this._strip();
                            for (n(-1 === a), a = 0, i = 0; i < this.length; i++) (a = (o = -(0 | this.words[i]) + a) >> 26), (this.words[i] = 67108863 & o);
                            return (this.negative = 1), this._strip();
                        }),
                        (o.prototype._wordDiv = function (t, e) {
                            var r = (this.length, t.length),
                                n = this.clone(),
                                i = t,
                                s = 0 | i.words[i.length - 1];
                            0 != (r = 26 - this._countBits(s)) && ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]));
                            var a,
                                f = n.length - i.length;
                            if ("mod" !== e) {
                                ((a = new o(null)).length = f + 1), (a.words = new Array(a.length));
                                for (var u = 0; u < a.length; u++) a.words[u] = 0;
                            }
                            var c = n.clone()._ishlnsubmul(i, 1, f);
                            0 === c.negative && ((n = c), a && (a.words[f] = 1));
                            for (var h = f - 1; h >= 0; h--) {
                                var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                                for (d = Math.min((d / s) | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative; ) d--, (n.negative = 0), n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                                a && (a.words[h] = d);
                            }
                            return a && a._strip(), n._strip(), "div" !== e && 0 !== r && n.iushrn(r), { div: a || null, mod: n };
                        }),
                        (o.prototype.divmod = function (t, e, r) {
                            return (
                                n(!t.isZero()),
                                    this.isZero()
                                        ? { div: new o(0), mod: new o(0) }
                                        : 0 !== this.negative && 0 === t.negative
                                            ? ((a = this.neg().divmod(t, e)), "mod" !== e && (i = a.div.neg()), "div" !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)), { div: i, mod: s })
                                            : 0 === this.negative && 0 !== t.negative
                                                ? ((a = this.divmod(t.neg(), e)), "mod" !== e && (i = a.div.neg()), { div: i, mod: a.mod })
                                                : 0 != (this.negative & t.negative)
                                                    ? ((a = this.neg().divmod(t.neg(), e)), "div" !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)), { div: a.div, mod: s })
                                                    : t.length > this.length || this.cmp(t) < 0
                                                        ? { div: new o(0), mod: this }
                                                        : 1 === t.length
                                                            ? "div" === e
                                                                ? { div: this.divn(t.words[0]), mod: null }
                                                                : "mod" === e
                                                                    ? { div: null, mod: new o(this.modrn(t.words[0])) }
                                                                    : { div: this.divn(t.words[0]), mod: new o(this.modrn(t.words[0])) }
                                                            : this._wordDiv(t, e)
                            );
                            var i, s, a;
                        }),
                        (o.prototype.div = function (t) {
                            return this.divmod(t, "div", !1).div;
                        }),
                        (o.prototype.mod = function (t) {
                            return this.divmod(t, "mod", !1).mod;
                        }),
                        (o.prototype.umod = function (t) {
                            return this.divmod(t, "mod", !0).mod;
                        }),
                        (o.prototype.divRound = function (t) {
                            var e = this.divmod(t);
                            if (e.mod.isZero()) return e.div;
                            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                                n = t.ushrn(1),
                                i = t.andln(1),
                                o = r.cmp(n);
                            return o < 0 || (1 === i && 0 === o) ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
                        }),
                        (o.prototype.modrn = function (t) {
                            var e = t < 0;
                            e && (t = -t), n(t <= 67108863);
                            for (var r = (1 << 26) % t, i = 0, o = this.length - 1; o >= 0; o--) i = (r * i + (0 | this.words[o])) % t;
                            return e ? -i : i;
                        }),
                        (o.prototype.modn = function (t) {
                            return this.modrn(t);
                        }),
                        (o.prototype.idivn = function (t) {
                            var e = t < 0;
                            e && (t = -t), n(t <= 67108863);
                            for (var r = 0, i = this.length - 1; i >= 0; i--) {
                                var o = (0 | this.words[i]) + 67108864 * r;
                                (this.words[i] = (o / t) | 0), (r = o % t);
                            }
                            return this._strip(), e ? this.ineg() : this;
                        }),
                        (o.prototype.divn = function (t) {
                            return this.clone().idivn(t);
                        }),
                        (o.prototype.egcd = function (t) {
                            n(0 === t.negative), n(!t.isZero());
                            var e = this,
                                r = t.clone();
                            e = 0 !== e.negative ? e.umod(t) : e.clone();
                            for (var i = new o(1), s = new o(0), a = new o(0), f = new o(1), u = 0; e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++u;
                            for (var c = r.clone(), h = e.clone(); !e.isZero(); ) {
                                for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                                if (d > 0) for (e.iushrn(d); d-- > 0; ) (i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(h)), i.iushrn(1), s.iushrn(1);
                                for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
                                if (p > 0) for (r.iushrn(p); p-- > 0; ) (a.isOdd() || f.isOdd()) && (a.iadd(c), f.isub(h)), a.iushrn(1), f.iushrn(1);
                                e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(f)) : (r.isub(e), a.isub(i), f.isub(s));
                            }
                            return { a, b: f, gcd: r.iushln(u) };
                        }),
                        (o.prototype._invmp = function (t) {
                            n(0 === t.negative), n(!t.isZero());
                            var e = this,
                                r = t.clone();
                            e = 0 !== e.negative ? e.umod(t) : e.clone();
                            for (var i, s = new o(1), a = new o(0), f = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                                for (var u = 0, c = 1; 0 == (e.words[0] & c) && u < 26; ++u, c <<= 1);
                                if (u > 0) for (e.iushrn(u); u-- > 0; ) s.isOdd() && s.iadd(f), s.iushrn(1);
                                for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1);
                                if (h > 0) for (r.iushrn(h); h-- > 0; ) a.isOdd() && a.iadd(f), a.iushrn(1);
                                e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
                            }
                            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
                        }),
                        (o.prototype.gcd = function (t) {
                            if (this.isZero()) return t.abs();
                            if (t.isZero()) return this.abs();
                            var e = this.clone(),
                                r = t.clone();
                            (e.negative = 0), (r.negative = 0);
                            for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                            for (;;) {
                                for (; e.isEven(); ) e.iushrn(1);
                                for (; r.isEven(); ) r.iushrn(1);
                                var i = e.cmp(r);
                                if (i < 0) {
                                    var o = e;
                                    (e = r), (r = o);
                                } else if (0 === i || 0 === r.cmpn(1)) break;
                                e.isub(r);
                            }
                            return r.iushln(n);
                        }),
                        (o.prototype.invm = function (t) {
                            return this.egcd(t).a.umod(t);
                        }),
                        (o.prototype.isEven = function () {
                            return 0 == (1 & this.words[0]);
                        }),
                        (o.prototype.isOdd = function () {
                            return 1 == (1 & this.words[0]);
                        }),
                        (o.prototype.andln = function (t) {
                            return this.words[0] & t;
                        }),
                        (o.prototype.bincn = function (t) {
                            n("number" == typeof t);
                            var e = t % 26,
                                r = (t - e) / 26,
                                i = 1 << e;
                            if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this;
                            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                                var a = 0 | this.words[s];
                                (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
                            }
                            return 0 !== o && ((this.words[s] = o), this.length++), this;
                        }),
                        (o.prototype.isZero = function () {
                            return 1 === this.length && 0 === this.words[0];
                        }),
                        (o.prototype.cmpn = function (t) {
                            var e,
                                r = t < 0;
                            if (0 !== this.negative && !r) return -1;
                            if (0 === this.negative && r) return 1;
                            if ((this._strip(), this.length > 1)) e = 1;
                            else {
                                r && (t = -t), n(t <= 67108863, "Number is too big");
                                var i = 0 | this.words[0];
                                e = i === t ? 0 : i < t ? -1 : 1;
                            }
                            return 0 !== this.negative ? 0 | -e : e;
                        }),
                        (o.prototype.cmp = function (t) {
                            if (0 !== this.negative && 0 === t.negative) return -1;
                            if (0 === this.negative && 0 !== t.negative) return 1;
                            var e = this.ucmp(t);
                            return 0 !== this.negative ? 0 | -e : e;
                        }),
                        (o.prototype.ucmp = function (t) {
                            if (this.length > t.length) return 1;
                            if (this.length < t.length) return -1;
                            for (var e = 0, r = this.length - 1; r >= 0; r--) {
                                var n = 0 | this.words[r],
                                    i = 0 | t.words[r];
                                if (n !== i) {
                                    n < i ? (e = -1) : n > i && (e = 1);
                                    break;
                                }
                            }
                            return e;
                        }),
                        (o.prototype.gtn = function (t) {
                            return 1 === this.cmpn(t);
                        }),
                        (o.prototype.gt = function (t) {
                            return 1 === this.cmp(t);
                        }),
                        (o.prototype.gten = function (t) {
                            return this.cmpn(t) >= 0;
                        }),
                        (o.prototype.gte = function (t) {
                            return this.cmp(t) >= 0;
                        }),
                        (o.prototype.ltn = function (t) {
                            return -1 === this.cmpn(t);
                        }),
                        (o.prototype.lt = function (t) {
                            return -1 === this.cmp(t);
                        }),
                        (o.prototype.lten = function (t) {
                            return this.cmpn(t) <= 0;
                        }),
                        (o.prototype.lte = function (t) {
                            return this.cmp(t) <= 0;
                        }),
                        (o.prototype.eqn = function (t) {
                            return 0 === this.cmpn(t);
                        }),
                        (o.prototype.eq = function (t) {
                            return 0 === this.cmp(t);
                        }),
                        (o.red = function (t) {
                            return new E(t);
                        }),
                        (o.prototype.toRed = function (t) {
                            return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
                        }),
                        (o.prototype.fromRed = function () {
                            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
                        }),
                        (o.prototype._forceRed = function (t) {
                            return (this.red = t), this;
                        }),
                        (o.prototype.forceRed = function (t) {
                            return n(!this.red, "Already a number in reduction context"), this._forceRed(t);
                        }),
                        (o.prototype.redAdd = function (t) {
                            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
                        }),
                        (o.prototype.redIAdd = function (t) {
                            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
                        }),
                        (o.prototype.redSub = function (t) {
                            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
                        }),
                        (o.prototype.redISub = function (t) {
                            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
                        }),
                        (o.prototype.redShl = function (t) {
                            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
                        }),
                        (o.prototype.redMul = function (t) {
                            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
                        }),
                        (o.prototype.redIMul = function (t) {
                            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
                        }),
                        (o.prototype.redSqr = function () {
                            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
                        }),
                        (o.prototype.redISqr = function () {
                            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
                        }),
                        (o.prototype.redSqrt = function () {
                            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
                        }),
                        (o.prototype.redInvm = function () {
                            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
                        }),
                        (o.prototype.redNeg = function () {
                            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
                        }),
                        (o.prototype.redPow = function (t) {
                            return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
                        });
                    var w = { k256: null, p224: null, p192: null, p25519: null };
                    function M(t, e) {
                        (this.name = t), (this.p = new o(e, 16)), (this.n = this.p.bitLength()), (this.k = new o(1).iushln(this.n).isub(this.p)), (this.tmp = this._tmp());
                    }
                    function _() {
                        M.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                    }
                    function A() {
                        M.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                    }
                    function S() {
                        M.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                    }
                    function x() {
                        M.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                    }
                    function E(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            (this.m = e.p), (this.prime = e);
                        } else n(t.gtn(1), "modulus must be greater than 1"), (this.m = t), (this.prime = null);
                    }
                    function k(t) {
                        E.call(this, t),
                            (this.shift = this.m.bitLength()),
                        this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
                            (this.r = new o(1).iushln(this.shift)),
                            (this.r2 = this.imod(this.r.sqr())),
                            (this.rinv = this.r._invmp(this.m)),
                            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                            (this.minv = this.minv.umod(this.r)),
                            (this.minv = this.r.sub(this.minv));
                    }
                    (M.prototype._tmp = function () {
                        var t = new o(null);
                        return (t.words = new Array(Math.ceil(this.n / 13))), t;
                    }),
                        (M.prototype.ireduce = function (t) {
                            var e,
                                r = t;
                            do {
                                this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
                            } while (e > this.n);
                            var n = e < this.n ? -1 : r.ucmp(this.p);
                            return 0 === n ? ((r.words[0] = 0), (r.length = 1)) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
                        }),
                        (M.prototype.split = function (t, e) {
                            t.iushrn(this.n, 0, e);
                        }),
                        (M.prototype.imulK = function (t) {
                            return t.imul(this.k);
                        }),
                        i(_, M),
                        (_.prototype.split = function (t, e) {
                            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                            if (((e.length = n), t.length <= 9)) return (t.words[0] = 0), void (t.length = 1);
                            var o = t.words[9];
                            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                                var s = 0 | t.words[i];
                                (t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s);
                            }
                            (o >>>= 22), (t.words[i - 10] = o), 0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
                        }),
                        (_.prototype.imulK = function (t) {
                            (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
                            for (var e = 0, r = 0; r < t.length; r++) {
                                var n = 0 | t.words[r];
                                (e += 977 * n), (t.words[r] = 67108863 & e), (e = 64 * n + ((e / 67108864) | 0));
                            }
                            return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
                        }),
                        i(A, M),
                        i(S, M),
                        i(x, M),
                        (x.prototype.imulK = function (t) {
                            for (var e = 0, r = 0; r < t.length; r++) {
                                var n = 19 * (0 | t.words[r]) + e,
                                    i = 67108863 & n;
                                (n >>>= 26), (t.words[r] = i), (e = n);
                            }
                            return 0 !== e && (t.words[t.length++] = e), t;
                        }),
                        (o._prime = function (t) {
                            if (w[t]) return w[t];
                            var e;
                            if ("k256" === t) e = new _();
                            else if ("p224" === t) e = new A();
                            else if ("p192" === t) e = new S();
                            else {
                                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                                e = new x();
                            }
                            return (w[t] = e), e;
                        }),
                        (E.prototype._verify1 = function (t) {
                            n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers");
                        }),
                        (E.prototype._verify2 = function (t, e) {
                            n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers");
                        }),
                        (E.prototype.imod = function (t) {
                            return this.prime ? this.prime.ireduce(t)._forceRed(this) : (c(t, t.umod(this.m)._forceRed(this)), t);
                        }),
                        (E.prototype.neg = function (t) {
                            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
                        }),
                        (E.prototype.add = function (t, e) {
                            this._verify2(t, e);
                            var r = t.add(e);
                            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
                        }),
                        (E.prototype.iadd = function (t, e) {
                            this._verify2(t, e);
                            var r = t.iadd(e);
                            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                        }),
                        (E.prototype.sub = function (t, e) {
                            this._verify2(t, e);
                            var r = t.sub(e);
                            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
                        }),
                        (E.prototype.isub = function (t, e) {
                            this._verify2(t, e);
                            var r = t.isub(e);
                            return r.cmpn(0) < 0 && r.iadd(this.m), r;
                        }),
                        (E.prototype.shl = function (t, e) {
                            return this._verify1(t), this.imod(t.ushln(e));
                        }),
                        (E.prototype.imul = function (t, e) {
                            return this._verify2(t, e), this.imod(t.imul(e));
                        }),
                        (E.prototype.mul = function (t, e) {
                            return this._verify2(t, e), this.imod(t.mul(e));
                        }),
                        (E.prototype.isqr = function (t) {
                            return this.imul(t, t.clone());
                        }),
                        (E.prototype.sqr = function (t) {
                            return this.mul(t, t);
                        }),
                        (E.prototype.sqrt = function (t) {
                            if (t.isZero()) return t.clone();
                            var e = this.m.andln(3);
                            if ((n(e % 2 == 1), 3 === e)) {
                                var r = this.m.add(new o(1)).iushrn(2);
                                return this.pow(t, r);
                            }
                            for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1);
                            n(!i.isZero());
                            var a = new o(1).toRed(this),
                                f = a.redNeg(),
                                u = this.m.subn(1).iushrn(1),
                                c = this.m.bitLength();
                            for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(f); ) c.redIAdd(f);
                            for (var h = this.pow(c, i), d = this.pow(t, i.addn(1).iushrn(1)), l = this.pow(t, i), p = s; 0 !== l.cmp(a); ) {
                                for (var b = l, y = 0; 0 !== b.cmp(a); y++) b = b.redSqr();
                                n(y < p);
                                var m = this.pow(h, new o(1).iushln(p - y - 1));
                                (d = d.redMul(m)), (h = m.redSqr()), (l = l.redMul(h)), (p = y);
                            }
                            return d;
                        }),
                        (E.prototype.invm = function (t) {
                            var e = t._invmp(this.m);
                            return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e);
                        }),
                        (E.prototype.pow = function (t, e) {
                            if (e.isZero()) return new o(1).toRed(this);
                            if (0 === e.cmpn(1)) return t.clone();
                            var r = new Array(16);
                            (r[0] = new o(1).toRed(this)), (r[1] = t);
                            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                            var i = r[0],
                                s = 0,
                                a = 0,
                                f = e.bitLength() % 26;
                            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
                                for (var u = e.words[n], c = f - 1; c >= 0; c--) {
                                    var h = (u >> c) & 1;
                                    i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? ((s <<= 1), (s |= h), (4 == ++a || (0 === n && 0 === c)) && ((i = this.mul(i, r[s])), (a = 0), (s = 0))) : (a = 0);
                                }
                                f = 26;
                            }
                            return i;
                        }),
                        (E.prototype.convertTo = function (t) {
                            var e = t.umod(this.m);
                            return e === t ? e.clone() : e;
                        }),
                        (E.prototype.convertFrom = function (t) {
                            var e = t.clone();
                            return (e.red = null), e;
                        }),
                        (o.mont = function (t) {
                            return new k(t);
                        }),
                        i(k, E),
                        (k.prototype.convertTo = function (t) {
                            return this.imod(t.ushln(this.shift));
                        }),
                        (k.prototype.convertFrom = function (t) {
                            var e = this.imod(t.mul(this.rinv));
                            return (e.red = null), e;
                        }),
                        (k.prototype.imul = function (t, e) {
                            if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t;
                            var r = t.imul(e),
                                n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                i = r.isub(n).iushrn(this.shift),
                                o = i;
                            return i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
                        }),
                        (k.prototype.mul = function (t, e) {
                            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                            var r = t.mul(e),
                                n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                i = r.isub(n).iushrn(this.shift),
                                s = i;
                            return i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
                        }),
                        (k.prototype.invm = function (t) {
                            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
                        });
                })((t = r.nmd(t)), this);
            },
            5532: function (t, e, r) {
                "use strict";
                var n =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (t, e, r, n) {
                                void 0 === n && (n = r),
                                    Object.defineProperty(t, n, {
                                        enumerable: !0,
                                        get: function () {
                                            return e[r];
                                        },
                                    });
                            }
                            : function (t, e, r, n) {
                                void 0 === n && (n = r), (t[n] = e[r]);
                            }),
                    i =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                            ? function (t, e) {
                                Object.defineProperty(t, "default", { enumerable: !0, value: e });
                            }
                            : function (t, e) {
                                t.default = e;
                            }),
                    o =
                        (this && this.__decorate) ||
                        function (t, e, r, n) {
                            var i,
                                o = arguments.length,
                                s = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, n);
                            else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
                            return o > 3 && s && Object.defineProperty(e, r, s), s;
                        },
                    s =
                        (this && this.__importStar) ||
                        function (t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t) for (var r in t) "default" !== r && Object.hasOwnProperty.call(t, r) && n(e, t, r);
                            return i(e, t), e;
                        },
                    a =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.deserializeUnchecked = e.deserialize = e.serialize = e.BinaryReader = e.BinaryWriter = e.BorshError = e.baseDecode = e.baseEncode = void 0);
                const f = a(r(3550)),
                    u = a(r(7191)),
                    c = s(r(1379)),
                    h = new ("function" != typeof r.g.TextDecoder ? c.TextDecoder : r.g.TextDecoder)("utf-8", { fatal: !0 });
                (e.baseEncode = function (t) {
                    return "string" == typeof t && (t = Buffer.from(t, "utf8")), u.default.encode(Buffer.from(t));
                }),
                    (e.baseDecode = function (t) {
                        return Buffer.from(u.default.decode(t));
                    });
                const d = 1024;
                class l extends Error {
                    constructor(t) {
                        super(t), (this.fieldPath = []), (this.originalMessage = t);
                    }
                    addToFieldPath(t) {
                        this.fieldPath.splice(0, 0, t), (this.message = this.originalMessage + ": " + this.fieldPath.join("."));
                    }
                }
                e.BorshError = l;
                class p {
                    constructor() {
                        (this.buf = Buffer.alloc(d)), (this.length = 0);
                    }
                    maybeResize() {
                        this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(d)]));
                    }
                    writeU8(t) {
                        this.maybeResize(), this.buf.writeUInt8(t, this.length), (this.length += 1);
                    }
                    writeU16(t) {
                        this.maybeResize(), this.buf.writeUInt16LE(t, this.length), (this.length += 2);
                    }
                    writeU32(t) {
                        this.maybeResize(), this.buf.writeUInt32LE(t, this.length), (this.length += 4);
                    }
                    writeU64(t) {
                        this.maybeResize(), this.writeBuffer(Buffer.from(new f.default(t).toArray("le", 8)));
                    }
                    writeU128(t) {
                        this.maybeResize(), this.writeBuffer(Buffer.from(new f.default(t).toArray("le", 16)));
                    }
                    writeU256(t) {
                        this.maybeResize(), this.writeBuffer(Buffer.from(new f.default(t).toArray("le", 32)));
                    }
                    writeU512(t) {
                        this.maybeResize(), this.writeBuffer(Buffer.from(new f.default(t).toArray("le", 64)));
                    }
                    writeBuffer(t) {
                        (this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), t, Buffer.alloc(d)])), (this.length += t.length);
                    }
                    writeString(t) {
                        this.maybeResize();
                        const e = Buffer.from(t, "utf8");
                        this.writeU32(e.length), this.writeBuffer(e);
                    }
                    writeFixedArray(t) {
                        this.writeBuffer(Buffer.from(t));
                    }
                    writeArray(t, e) {
                        this.maybeResize(), this.writeU32(t.length);
                        for (const r of t) this.maybeResize(), e(r);
                    }
                    toArray() {
                        return this.buf.subarray(0, this.length);
                    }
                }
                function b(t, e, r) {
                    const n = r.value;
                    r.value = function (...t) {
                        try {
                            return n.apply(this, t);
                        } catch (t) {
                            if (t instanceof RangeError) {
                                const e = t.code;
                                if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(e) >= 0) throw new l("Reached the end of buffer when deserializing");
                            }
                            throw t;
                        }
                    };
                }
                e.BinaryWriter = p;
                class y {
                    constructor(t) {
                        (this.buf = t), (this.offset = 0);
                    }
                    readU8() {
                        const t = this.buf.readUInt8(this.offset);
                        return (this.offset += 1), t;
                    }
                    readU16() {
                        const t = this.buf.readUInt16LE(this.offset);
                        return (this.offset += 2), t;
                    }
                    readU32() {
                        const t = this.buf.readUInt32LE(this.offset);
                        return (this.offset += 4), t;
                    }
                    readU64() {
                        const t = this.readBuffer(8);
                        return new f.default(t, "le");
                    }
                    readU128() {
                        const t = this.readBuffer(16);
                        return new f.default(t, "le");
                    }
                    readU256() {
                        const t = this.readBuffer(32);
                        return new f.default(t, "le");
                    }
                    readU512() {
                        const t = this.readBuffer(64);
                        return new f.default(t, "le");
                    }
                    readBuffer(t) {
                        if (this.offset + t > this.buf.length) throw new l(`Expected buffer length ${t} isn't within bounds`);
                        const e = this.buf.slice(this.offset, this.offset + t);
                        return (this.offset += t), e;
                    }
                    readString() {
                        const t = this.readU32(),
                            e = this.readBuffer(t);
                        try {
                            return h.decode(e);
                        } catch (t) {
                            throw new l(`Error decoding UTF-8 string: ${t}`);
                        }
                    }
                    readFixedArray(t) {
                        return new Uint8Array(this.readBuffer(t));
                    }
                    readArray(t) {
                        const e = this.readU32(),
                            r = Array();
                        for (let n = 0; n < e; ++n) r.push(t());
                        return r;
                    }
                }
                function m(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1);
                }
                function g(t, e, r, n, i) {
                    try {
                        if ("string" == typeof n) i[`write${m(n)}`](r);
                        else if (n instanceof Array)
                            if ("number" == typeof n[0]) {
                                if (r.length !== n[0]) throw new l(`Expecting byte array of length ${n[0]}, but got ${r.length} bytes`);
                                i.writeFixedArray(r);
                            } else
                                i.writeArray(r, (r) => {
                                    g(t, e, r, n[0], i);
                                });
                        else if (void 0 !== n.kind) {
                            if ("option" !== n.kind) throw new l(`FieldType ${n} unrecognized`);
                            null == r ? i.writeU8(0) : (i.writeU8(1), g(t, e, r, n.type, i));
                        } else v(t, r, i);
                    } catch (t) {
                        throw (t instanceof l && t.addToFieldPath(e), t);
                    }
                }
                function v(t, e, r) {
                    const n = t.get(e.constructor);
                    if (!n) throw new l(`Class ${e.constructor.name} is missing in schema`);
                    if ("struct" === n.kind)
                        n.fields.map(([n, i]) => {
                            g(t, n, e[n], i, r);
                        });
                    else {
                        if ("enum" !== n.kind) throw new l(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
                        {
                            const i = e[n.field];
                            for (let o = 0; o < n.values.length; ++o) {
                                const [s, a] = n.values[o];
                                if (s === i) {
                                    r.writeU8(o), g(t, s, e[s], a, r);
                                    break;
                                }
                            }
                        }
                    }
                }
                function w(t, e, r, n) {
                    try {
                        return "string" == typeof r
                            ? n[`read${m(r)}`]()
                            : r instanceof Array
                                ? "number" == typeof r[0]
                                    ? n.readFixedArray(r[0])
                                    : n.readArray(() => w(t, e, r[0], n))
                                : "option" === r.kind
                                    ? n.readU8()
                                        ? w(t, e, r.type, n)
                                        : void 0
                                    : M(t, r, n);
                    } catch (t) {
                        throw (t instanceof l && t.addToFieldPath(e), t);
                    }
                }
                function M(t, e, r) {
                    const n = t.get(e);
                    if (!n) throw new l(`Class ${e.name} is missing in schema`);
                    if ("struct" === n.kind) {
                        const n = {};
                        for (const [i, o] of t.get(e).fields) n[i] = w(t, i, o, r);
                        return new e(n);
                    }
                    if ("enum" === n.kind) {
                        const i = r.readU8();
                        if (i >= n.values.length) throw new l(`Enum index: ${i} is out of range`);
                        const [o, s] = n.values[i];
                        return new e({ [o]: w(t, o, s, r) });
                    }
                    throw new l(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
                }
                o([b], y.prototype, "readU8", null),
                    o([b], y.prototype, "readU16", null),
                    o([b], y.prototype, "readU32", null),
                    o([b], y.prototype, "readU64", null),
                    o([b], y.prototype, "readU128", null),
                    o([b], y.prototype, "readU256", null),
                    o([b], y.prototype, "readU512", null),
                    o([b], y.prototype, "readString", null),
                    o([b], y.prototype, "readFixedArray", null),
                    o([b], y.prototype, "readArray", null),
                    (e.BinaryReader = y),
                    (e.serialize = function (t, e) {
                        const r = new p();
                        return v(t, e, r), r.toArray();
                    }),
                    (e.deserialize = function (t, e, r) {
                        const n = new y(r),
                            i = M(t, e, n);
                        if (n.offset < r.length) throw new l(`Unexpected ${r.length - n.offset} bytes after deserialized data`);
                        return i;
                    }),
                    (e.deserializeUnchecked = function (t, e, r) {
                        return M(t, e, new y(r));
                    });
            },
            9931: (t, e, r) => {
                var n;
                function i(t) {
                    this.rand = t;
                }
                if (
                    ((t.exports = function (t) {
                        return n || (n = new i(null)), n.generate(t);
                    }),
                        (t.exports.Rand = i),
                        (i.prototype.generate = function (t) {
                            return this._rand(t);
                        }),
                        (i.prototype._rand = function (t) {
                            if (this.rand.getBytes) return this.rand.getBytes(t);
                            for (var e = new Uint8Array(t), r = 0; r < e.length; r++) e[r] = this.rand.getByte();
                            return e;
                        }),
                    "object" == typeof self)
                )
                    self.crypto && self.crypto.getRandomValues
                        ? (i.prototype._rand = function (t) {
                            var e = new Uint8Array(t);
                            return self.crypto.getRandomValues(e), e;
                        })
                        : self.msCrypto && self.msCrypto.getRandomValues
                            ? (i.prototype._rand = function (t) {
                                var e = new Uint8Array(t);
                                return self.msCrypto.getRandomValues(e), e;
                            })
                            : "object" == typeof window &&
                            (i.prototype._rand = function () {
                                throw new Error("Not implemented yet");
                            });
                else
                    try {
                        var o = r(9214);
                        if ("function" != typeof o.randomBytes) throw new Error("Not supported");
                        i.prototype._rand = function (t) {
                            return o.randomBytes(t);
                        };
                    } catch (t) {}
            },
            7191: (t, e, r) => {
                var n = r(8162);
                t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
            },
            8764: (t, e, r) => {
                "use strict";
                const n = r(9742),
                    i = r(645),
                    o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                (e.Buffer = f),
                    (e.SlowBuffer = function (t) {
                        return +t != t && (t = 0), f.alloc(+t);
                    }),
                    (e.INSPECT_MAX_BYTES = 50);
                const s = 2147483647;
                function a(t) {
                    if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                    const e = new Uint8Array(t);
                    return Object.setPrototypeOf(e, f.prototype), e;
                }
                function f(t, e, r) {
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return h(t);
                    }
                    return u(t, e, r);
                }
                function u(t, e, r) {
                    if ("string" == typeof t)
                        return (function (t, e) {
                            if ((("string" == typeof e && "" !== e) || (e = "utf8"), !f.isEncoding(e))) throw new TypeError("Unknown encoding: " + e);
                            const r = 0 | b(t, e);
                            let n = a(r);
                            const i = n.write(t, e);
                            return i !== r && (n = n.slice(0, i)), n;
                        })(t, e);
                    if (ArrayBuffer.isView(t))
                        return (function (t) {
                            if (H(t, Uint8Array)) {
                                const e = new Uint8Array(t);
                                return l(e.buffer, e.byteOffset, e.byteLength);
                            }
                            return d(t);
                        })(t);
                    if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                    if (H(t, ArrayBuffer) || (t && H(t.buffer, ArrayBuffer))) return l(t, e, r);
                    if ("undefined" != typeof SharedArrayBuffer && (H(t, SharedArrayBuffer) || (t && H(t.buffer, SharedArrayBuffer)))) return l(t, e, r);
                    if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    const n = t.valueOf && t.valueOf();
                    if (null != n && n !== t) return f.from(n, e, r);
                    const i = (function (t) {
                        if (f.isBuffer(t)) {
                            const e = 0 | p(t.length),
                                r = a(e);
                            return 0 === r.length || t.copy(r, 0, 0, e), r;
                        }
                        return void 0 !== t.length ? ("number" != typeof t.length || J(t.length) ? a(0) : d(t)) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0;
                    })(t);
                    if (i) return i;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return f.from(t[Symbol.toPrimitive]("string"), e, r);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                }
                function c(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
                    if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                }
                function h(t) {
                    return c(t), a(t < 0 ? 0 : 0 | p(t));
                }
                function d(t) {
                    const e = t.length < 0 ? 0 : 0 | p(t.length),
                        r = a(e);
                    for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                    return r;
                }
                function l(t, e, r) {
                    if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    let n;
                    return (n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r)), Object.setPrototypeOf(n, f.prototype), n;
                }
                function p(t) {
                    if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                    return 0 | t;
                }
                function b(t, e) {
                    if (f.isBuffer(t)) return t.length;
                    if (ArrayBuffer.isView(t) || H(t, ArrayBuffer)) return t.byteLength;
                    if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                    const r = t.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    let i = !1;
                    for (;;)
                        switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return V(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return Z(t).length;
                            default:
                                if (i) return n ? -1 : V(t).length;
                                (e = ("" + e).toLowerCase()), (i = !0);
                        }
                }
                function y(t, e, r) {
                    let n = !1;
                    if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
                    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
                    if ((r >>>= 0) <= (e >>>= 0)) return "";
                    for (t || (t = "utf8"); ; )
                        switch (t) {
                            case "hex":
                                return P(this, e, r);
                            case "utf8":
                            case "utf-8":
                                return E(this, e, r);
                            case "ascii":
                                return I(this, e, r);
                            case "latin1":
                            case "binary":
                                return B(this, e, r);
                            case "base64":
                                return x(this, e, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return R(this, e, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + t);
                                (t = (t + "").toLowerCase()), (n = !0);
                        }
                }
                function m(t, e, r) {
                    const n = t[e];
                    (t[e] = t[r]), (t[r] = n);
                }
                function g(t, e, r, n, i) {
                    if (0 === t.length) return -1;
                    if (("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648), J((r = +r)) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length)) {
                        if (i) return -1;
                        r = t.length - 1;
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0;
                    }
                    if (("string" == typeof e && (e = f.from(e, n)), f.isBuffer(e))) return 0 === e.length ? -1 : v(t, e, r, n, i);
                    if ("number" == typeof e) return (e &= 255), "function" == typeof Uint8Array.prototype.indexOf ? (i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r)) : v(t, [e], r, n, i);
                    throw new TypeError("val must be string, number or Buffer");
                }
                function v(t, e, r, n, i) {
                    let o,
                        s = 1,
                        a = t.length,
                        f = e.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        (s = 2), (a /= 2), (f /= 2), (r /= 2);
                    }
                    function u(t, e) {
                        return 1 === s ? t[e] : t.readUInt16BE(e * s);
                    }
                    if (i) {
                        let n = -1;
                        for (o = r; o < a; o++)
                            if (u(t, o) === u(e, -1 === n ? 0 : o - n)) {
                                if ((-1 === n && (n = o), o - n + 1 === f)) return n * s;
                            } else -1 !== n && (o -= o - n), (n = -1);
                    } else
                        for (r + f > a && (r = a - f), o = r; o >= 0; o--) {
                            let r = !0;
                            for (let n = 0; n < f; n++)
                                if (u(t, o + n) !== u(e, n)) {
                                    r = !1;
                                    break;
                                }
                            if (r) return o;
                        }
                    return -1;
                }
                function w(t, e, r, n) {
                    r = Number(r) || 0;
                    const i = t.length - r;
                    n ? (n = Number(n)) > i && (n = i) : (n = i);
                    const o = e.length;
                    let s;
                    for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
                        const n = parseInt(e.substr(2 * s, 2), 16);
                        if (J(n)) return s;
                        t[r + s] = n;
                    }
                    return s;
                }
                function M(t, e, r, n) {
                    return Y(V(e, t.length - r), t, r, n);
                }
                function _(t, e, r, n) {
                    return Y(
                        (function (t) {
                            const e = [];
                            for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                            return e;
                        })(e),
                        t,
                        r,
                        n
                    );
                }
                function A(t, e, r, n) {
                    return Y(Z(e), t, r, n);
                }
                function S(t, e, r, n) {
                    return Y(
                        (function (t, e) {
                            let r, n, i;
                            const o = [];
                            for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) (r = t.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
                            return o;
                        })(e, t.length - r),
                        t,
                        r,
                        n
                    );
                }
                function x(t, e, r) {
                    return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
                }
                function E(t, e, r) {
                    r = Math.min(t.length, r);
                    const n = [];
                    let i = e;
                    for (; i < r; ) {
                        const e = t[i];
                        let o = null,
                            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                        if (i + s <= r) {
                            let r, n, a, f;
                            switch (s) {
                                case 1:
                                    e < 128 && (o = e);
                                    break;
                                case 2:
                                    (r = t[i + 1]), 128 == (192 & r) && ((f = ((31 & e) << 6) | (63 & r)), f > 127 && (o = f));
                                    break;
                                case 3:
                                    (r = t[i + 1]), (n = t[i + 2]), 128 == (192 & r) && 128 == (192 & n) && ((f = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)), f > 2047 && (f < 55296 || f > 57343) && (o = f));
                                    break;
                                case 4:
                                    (r = t[i + 1]),
                                        (n = t[i + 2]),
                                        (a = t[i + 3]),
                                    128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && ((f = ((15 & e) << 18) | ((63 & r) << 12) | ((63 & n) << 6) | (63 & a)), f > 65535 && f < 1114112 && (o = f));
                            }
                        }
                        null === o ? ((o = 65533), (s = 1)) : o > 65535 && ((o -= 65536), n.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))), n.push(o), (i += s);
                    }
                    return (function (t) {
                        const e = t.length;
                        if (e <= k) return String.fromCharCode.apply(String, t);
                        let r = "",
                            n = 0;
                        for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += k)));
                        return r;
                    })(n);
                }
                (e.kMaxLength = s),
                    (f.TYPED_ARRAY_SUPPORT = (function () {
                        try {
                            const t = new Uint8Array(1),
                                e = {
                                    foo: function () {
                                        return 42;
                                    },
                                };
                            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
                        } catch (t) {
                            return !1;
                        }
                    })()),
                f.TYPED_ARRAY_SUPPORT ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),
                    Object.defineProperty(f.prototype, "parent", {
                        enumerable: !0,
                        get: function () {
                            if (f.isBuffer(this)) return this.buffer;
                        },
                    }),
                    Object.defineProperty(f.prototype, "offset", {
                        enumerable: !0,
                        get: function () {
                            if (f.isBuffer(this)) return this.byteOffset;
                        },
                    }),
                    (f.poolSize = 8192),
                    (f.from = function (t, e, r) {
                        return u(t, e, r);
                    }),
                    Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
                    Object.setPrototypeOf(f, Uint8Array),
                    (f.alloc = function (t, e, r) {
                        return (function (t, e, r) {
                            return c(t), t <= 0 ? a(t) : void 0 !== e ? ("string" == typeof r ? a(t).fill(e, r) : a(t).fill(e)) : a(t);
                        })(t, e, r);
                    }),
                    (f.allocUnsafe = function (t) {
                        return h(t);
                    }),
                    (f.allocUnsafeSlow = function (t) {
                        return h(t);
                    }),
                    (f.isBuffer = function (t) {
                        return null != t && !0 === t._isBuffer && t !== f.prototype;
                    }),
                    (f.compare = function (t, e) {
                        if ((H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), H(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(t) || !f.isBuffer(e)))
                            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (t === e) return 0;
                        let r = t.length,
                            n = e.length;
                        for (let i = 0, o = Math.min(r, n); i < o; ++i)
                            if (t[i] !== e[i]) {
                                (r = t[i]), (n = e[i]);
                                break;
                            }
                        return r < n ? -1 : n < r ? 1 : 0;
                    }),
                    (f.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (f.concat = function (t, e) {
                        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return f.alloc(0);
                        let r;
                        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                        const n = f.allocUnsafe(e);
                        let i = 0;
                        for (r = 0; r < t.length; ++r) {
                            let e = t[r];
                            if (H(e, Uint8Array)) i + e.length > n.length ? (f.isBuffer(e) || (e = f.from(e)), e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i);
                            else {
                                if (!f.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                                e.copy(n, i);
                            }
                            i += e.length;
                        }
                        return n;
                    }),
                    (f.byteLength = b),
                    (f.prototype._isBuffer = !0),
                    (f.prototype.swap16 = function () {
                        const t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (let e = 0; e < t; e += 2) m(this, e, e + 1);
                        return this;
                    }),
                    (f.prototype.swap32 = function () {
                        const t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (let e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                        return this;
                    }),
                    (f.prototype.swap64 = function () {
                        const t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (let e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                        return this;
                    }),
                    (f.prototype.toString = function () {
                        const t = this.length;
                        return 0 === t ? "" : 0 === arguments.length ? E(this, 0, t) : y.apply(this, arguments);
                    }),
                    (f.prototype.toLocaleString = f.prototype.toString),
                    (f.prototype.equals = function (t) {
                        if (!f.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === f.compare(this, t);
                    }),
                    (f.prototype.inspect = function () {
                        let t = "";
                        const r = e.INSPECT_MAX_BYTES;
                        return (
                            (t = this.toString("hex", 0, r)
                                .replace(/(.{2})/g, "$1 ")
                                .trim()),
                            this.length > r && (t += " ... "),
                            "<Buffer " + t + ">"
                        );
                    }),
                o && (f.prototype[o] = f.prototype.inspect),
                    (f.prototype.compare = function (t, e, r, n, i) {
                        if ((H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(t))) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                        if ((void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length))
                            throw new RangeError("out of range index");
                        if (n >= i && e >= r) return 0;
                        if (n >= i) return -1;
                        if (e >= r) return 1;
                        if (this === t) return 0;
                        let o = (i >>>= 0) - (n >>>= 0),
                            s = (r >>>= 0) - (e >>>= 0);
                        const a = Math.min(o, s),
                            u = this.slice(n, i),
                            c = t.slice(e, r);
                        for (let t = 0; t < a; ++t)
                            if (u[t] !== c[t]) {
                                (o = u[t]), (s = c[t]);
                                break;
                            }
                        return o < s ? -1 : s < o ? 1 : 0;
                    }),
                    (f.prototype.includes = function (t, e, r) {
                        return -1 !== this.indexOf(t, e, r);
                    }),
                    (f.prototype.indexOf = function (t, e, r) {
                        return g(this, t, e, r, !0);
                    }),
                    (f.prototype.lastIndexOf = function (t, e, r) {
                        return g(this, t, e, r, !1);
                    }),
                    (f.prototype.write = function (t, e, r, n) {
                        if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                        else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
                        else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
                        }
                        const i = this.length - e;
                        if (((void 0 === r || r > i) && (r = i), (t.length > 0 && (r < 0 || e < 0)) || e > this.length)) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        let o = !1;
                        for (;;)
                            switch (n) {
                                case "hex":
                                    return w(this, t, e, r);
                                case "utf8":
                                case "utf-8":
                                    return M(this, t, e, r);
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return _(this, t, e, r);
                                case "base64":
                                    return A(this, t, e, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return S(this, t, e, r);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + n);
                                    (n = ("" + n).toLowerCase()), (o = !0);
                            }
                    }),
                    (f.prototype.toJSON = function () {
                        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
                    });
                const k = 4096;
                function I(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
                    return n;
                }
                function B(t, e, r) {
                    let n = "";
                    r = Math.min(t.length, r);
                    for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                    return n;
                }
                function P(t, e, r) {
                    const n = t.length;
                    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                    let i = "";
                    for (let n = e; n < r; ++n) i += G[t[n]];
                    return i;
                }
                function R(t, e, r) {
                    const n = t.slice(e, r);
                    let i = "";
                    for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                    return i;
                }
                function U(t, e, r) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
                }
                function O(t, e, r, n, i, o) {
                    if (!f.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > t.length) throw new RangeError("Index out of range");
                }
                function T(t, e, r, n, i) {
                    K(e, n, i, t, r, 7);
                    let o = Number(e & BigInt(4294967295));
                    (t[r++] = o), (o >>= 8), (t[r++] = o), (o >>= 8), (t[r++] = o), (o >>= 8), (t[r++] = o);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), (s >>= 8), (t[r++] = s), r;
                }
                function L(t, e, r, n, i) {
                    K(e, n, i, t, r, 7);
                    let o = Number(e & BigInt(4294967295));
                    (t[r + 7] = o), (o >>= 8), (t[r + 6] = o), (o >>= 8), (t[r + 5] = o), (o >>= 8), (t[r + 4] = o);
                    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
                    return (t[r + 3] = s), (s >>= 8), (t[r + 2] = s), (s >>= 8), (t[r + 1] = s), (s >>= 8), (t[r] = s), r + 8;
                }
                function z(t, e, r, n, i, o) {
                    if (r + n > t.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range");
                }
                function j(t, e, r, n, o) {
                    return (e = +e), (r >>>= 0), o || z(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
                }
                function N(t, e, r, n, o) {
                    return (e = +e), (r >>>= 0), o || z(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
                }
                (f.prototype.slice = function (t, e) {
                    const r = this.length;
                    (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                    const n = this.subarray(t, e);
                    return Object.setPrototypeOf(n, f.prototype), n;
                }),
                    (f.prototype.readUintLE = f.prototype.readUIntLE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = this[t],
                            i = 1,
                            o = 0;
                        for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
                        return n;
                    }),
                    (f.prototype.readUintBE = f.prototype.readUIntBE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = this[t + --e],
                            i = 1;
                        for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
                        return n;
                    }),
                    (f.prototype.readUint8 = f.prototype.readUInt8 = function (t, e) {
                        return (t >>>= 0), e || U(t, 1, this.length), this[t];
                    }),
                    (f.prototype.readUint16LE = f.prototype.readUInt16LE = function (t, e) {
                        return (t >>>= 0), e || U(t, 2, this.length), this[t] | (this[t + 1] << 8);
                    }),
                    (f.prototype.readUint16BE = f.prototype.readUInt16BE = function (t, e) {
                        return (t >>>= 0), e || U(t, 2, this.length), (this[t] << 8) | this[t + 1];
                    }),
                    (f.prototype.readUint32LE = f.prototype.readUInt32LE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
                    }),
                    (f.prototype.readUint32BE = f.prototype.readUInt32BE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
                    }),
                    (f.prototype.readBigUInt64LE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                        return BigInt(n) + (BigInt(i) << BigInt(32));
                    })),
                    (f.prototype.readBigUInt64BE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                            i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                        return (BigInt(n) << BigInt(32)) + BigInt(i);
                    })),
                    (f.prototype.readIntLE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = this[t],
                            i = 1,
                            o = 0;
                        for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
                        return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
                    }),
                    (f.prototype.readIntBE = function (t, e, r) {
                        (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                        let n = e,
                            i = 1,
                            o = this[t + --n];
                        for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
                        return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
                    }),
                    (f.prototype.readInt8 = function (t, e) {
                        return (t >>>= 0), e || U(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
                    }),
                    (f.prototype.readInt16LE = function (t, e) {
                        (t >>>= 0), e || U(t, 2, this.length);
                        const r = this[t] | (this[t + 1] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (f.prototype.readInt16BE = function (t, e) {
                        (t >>>= 0), e || U(t, 2, this.length);
                        const r = this[t + 1] | (this[t] << 8);
                        return 32768 & r ? 4294901760 | r : r;
                    }),
                    (f.prototype.readInt32LE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
                    }),
                    (f.prototype.readInt32BE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
                    }),
                    (f.prototype.readBigInt64LE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                        return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
                    })),
                    (f.prototype.readBigInt64BE = X(function (t) {
                        D((t >>>= 0), "offset");
                        const e = this[t],
                            r = this[t + 7];
                        (void 0 !== e && void 0 !== r) || F(t, this.length - 8);
                        const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                        return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r);
                    })),
                    (f.prototype.readFloatLE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !0, 23, 4);
                    }),
                    (f.prototype.readFloatBE = function (t, e) {
                        return (t >>>= 0), e || U(t, 4, this.length), i.read(this, t, !1, 23, 4);
                    }),
                    (f.prototype.readDoubleLE = function (t, e) {
                        return (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !0, 52, 8);
                    }),
                    (f.prototype.readDoubleBE = function (t, e) {
                        return (t >>>= 0), e || U(t, 8, this.length), i.read(this, t, !1, 52, 8);
                    }),
                    (f.prototype.writeUintLE = f.prototype.writeUIntLE = function (t, e, r, n) {
                        (t = +t), (e >>>= 0), (r >>>= 0), n || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        let i = 1,
                            o = 0;
                        for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = (t / i) & 255;
                        return e + r;
                    }),
                    (f.prototype.writeUintBE = f.prototype.writeUIntBE = function (t, e, r, n) {
                        (t = +t), (e >>>= 0), (r >>>= 0), n || O(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                        let i = r - 1,
                            o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = (t / o) & 255;
                        return e + r;
                    }),
                    (f.prototype.writeUint8 = f.prototype.writeUInt8 = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
                    }),
                    (f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                    }),
                    (f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                    }),
                    (f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 4294967295, 0), (this[e + 3] = t >>> 24), (this[e + 2] = t >>> 16), (this[e + 1] = t >>> 8), (this[e] = 255 & t), e + 4;
                    }),
                    (f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 4294967295, 0), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4;
                    }),
                    (f.prototype.writeBigUInt64LE = X(function (t, e = 0) {
                        return T(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
                    })),
                    (f.prototype.writeBigUInt64BE = X(function (t, e = 0) {
                        return L(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
                    })),
                    (f.prototype.writeIntLE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            O(this, t, e, r, n - 1, -n);
                        }
                        let i = 0,
                            o = 1,
                            s = 0;
                        for (this[e] = 255 & t; ++i < r && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), (this[e + i] = (((t / o) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (f.prototype.writeIntBE = function (t, e, r, n) {
                        if (((t = +t), (e >>>= 0), !n)) {
                            const n = Math.pow(2, 8 * r - 1);
                            O(this, t, e, r, n - 1, -n);
                        }
                        let i = r - 1,
                            o = 1,
                            s = 0;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), (this[e + i] = (((t / o) >> 0) - s) & 255);
                        return e + r;
                    }),
                    (f.prototype.writeInt8 = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
                    }),
                    (f.prototype.writeInt16LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
                    }),
                    (f.prototype.writeInt16BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
                    }),
                    (f.prototype.writeInt32LE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 2147483647, -2147483648), (this[e] = 255 & t), (this[e + 1] = t >>> 8), (this[e + 2] = t >>> 16), (this[e + 3] = t >>> 24), e + 4;
                    }),
                    (f.prototype.writeInt32BE = function (t, e, r) {
                        return (t = +t), (e >>>= 0), r || O(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), (this[e] = t >>> 24), (this[e + 1] = t >>> 16), (this[e + 2] = t >>> 8), (this[e + 3] = 255 & t), e + 4;
                    }),
                    (f.prototype.writeBigInt64LE = X(function (t, e = 0) {
                        return T(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                    })),
                    (f.prototype.writeBigInt64BE = X(function (t, e = 0) {
                        return L(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
                    })),
                    (f.prototype.writeFloatLE = function (t, e, r) {
                        return j(this, t, e, !0, r);
                    }),
                    (f.prototype.writeFloatBE = function (t, e, r) {
                        return j(this, t, e, !1, r);
                    }),
                    (f.prototype.writeDoubleLE = function (t, e, r) {
                        return N(this, t, e, !0, r);
                    }),
                    (f.prototype.writeDoubleBE = function (t, e, r) {
                        return N(this, t, e, !1, r);
                    }),
                    (f.prototype.copy = function (t, e, r, n) {
                        if (!f.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                        if ((r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r)) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                        const i = n - r;
                        return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), i;
                    }),
                    (f.prototype.fill = function (t, e, r, n) {
                        if ("string" == typeof t) {
                            if (("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)), void 0 !== n && "string" != typeof n)) throw new TypeError("encoding must be a string");
                            if ("string" == typeof n && !f.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                            if (1 === t.length) {
                                const e = t.charCodeAt(0);
                                (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
                            }
                        } else "number" == typeof t ? (t &= 255) : "boolean" == typeof t && (t = Number(t));
                        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                        if (r <= e) return this;
                        let i;
                        if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t)) for (i = e; i < r; ++i) this[i] = t;
                        else {
                            const o = f.isBuffer(t) ? t : f.from(t, n),
                                s = o.length;
                            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
                        }
                        return this;
                    });
                const q = {};
                function C(t, e, r) {
                    q[t] = class extends r {
                        constructor() {
                            super(), Object.defineProperty(this, "message", { value: e.apply(this, arguments), writable: !0, configurable: !0 }), (this.name = `${this.name} [${t}]`), this.stack, delete this.name;
                        }
                        get code() {
                            return t;
                        }
                        set code(t) {
                            Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: t, writable: !0 });
                        }
                        toString() {
                            return `${this.name} [${t}]: ${this.message}`;
                        }
                    };
                }
                function W(t) {
                    let e = "",
                        r = t.length;
                    const n = "-" === t[0] ? 1 : 0;
                    for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
                    return `${t.slice(0, r)}${e}`;
                }
                function K(t, e, r, n, i, o) {
                    if (t > r || t < e) {
                        const n = "bigint" == typeof e ? "n" : "";
                        let i;
                        throw (
                            ((i = o > 3 ? (0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}`) : `>= ${e}${n} and <= ${r}${n}`),
                                new q.ERR_OUT_OF_RANGE("value", i, t))
                        );
                    }
                    !(function (t, e, r) {
                        D(e, "offset"), (void 0 !== t[e] && void 0 !== t[e + r]) || F(e, t.length - (r + 1));
                    })(n, i, o);
                }
                function D(t, e) {
                    if ("number" != typeof t) throw new q.ERR_INVALID_ARG_TYPE(e, "number", t);
                }
                function F(t, e, r) {
                    if (Math.floor(t) !== t) throw (D(t, r), new q.ERR_OUT_OF_RANGE(r || "offset", "an integer", t));
                    if (e < 0) throw new q.ERR_BUFFER_OUT_OF_BOUNDS();
                    throw new q.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t);
                }
                C(
                    "ERR_BUFFER_OUT_OF_BOUNDS",
                    function (t) {
                        return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
                    },
                    RangeError
                ),
                    C(
                        "ERR_INVALID_ARG_TYPE",
                        function (t, e) {
                            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
                        },
                        TypeError
                    ),
                    C(
                        "ERR_OUT_OF_RANGE",
                        function (t, e, r) {
                            let n = `The value of "${t}" is out of range.`,
                                i = r;
                            return (
                                Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? (i = W(String(r))) : "bigint" == typeof r && ((i = String(r)), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = W(i)), (i += "n")),
                                    (n += ` It must be ${e}. Received ${i}`),
                                    n
                            );
                        },
                        RangeError
                    );
                const $ = /[^+/0-9A-Za-z-_]/g;
                function V(t, e) {
                    let r;
                    e = e || 1 / 0;
                    const n = t.length;
                    let i = null;
                    const o = [];
                    for (let s = 0; s < n; ++s) {
                        if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
                            if (!i) {
                                if (r > 56319) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                if (s + 1 === n) {
                                    (e -= 3) > -1 && o.push(239, 191, 189);
                                    continue;
                                }
                                i = r;
                                continue;
                            }
                            if (r < 56320) {
                                (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                                continue;
                            }
                            r = 65536 + (((i - 55296) << 10) | (r - 56320));
                        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                        if (((i = null), r < 128)) {
                            if ((e -= 1) < 0) break;
                            o.push(r);
                        } else if (r < 2048) {
                            if ((e -= 2) < 0) break;
                            o.push((r >> 6) | 192, (63 & r) | 128);
                        } else if (r < 65536) {
                            if ((e -= 3) < 0) break;
                            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            o.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
                        }
                    }
                    return o;
                }
                function Z(t) {
                    return n.toByteArray(
                        (function (t) {
                            if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
                            for (; t.length % 4 != 0; ) t += "=";
                            return t;
                        })(t)
                    );
                }
                function Y(t, e, r, n) {
                    let i;
                    for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
                    return i;
                }
                function H(t, e) {
                    return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
                }
                function J(t) {
                    return t != t;
                }
                const G = (function () {
                    const t = "0123456789abcdef",
                        e = new Array(256);
                    for (let r = 0; r < 16; ++r) {
                        const n = 16 * r;
                        for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
                    }
                    return e;
                })();
                function X(t) {
                    return "undefined" == typeof BigInt ? Q : t;
                }
                function Q() {
                    throw new Error("BigInt not supported");
                }
            },
            7953: (t) => {
                var e = "~",
                    r = "\\x" + ("0" + e.charCodeAt(0).toString(16)).slice(-2),
                    n = "\\" + r,
                    i = new RegExp(r, "g"),
                    o = new RegExp(n, "g"),
                    s = new RegExp("(?:^|([^\\\\]))" + n),
                    a =
                        [].indexOf ||
                        function (t) {
                            for (var e = this.length; e-- && this[e] !== t; );
                            return e;
                        },
                    f = String;
                function u(t, r, n) {
                    return r instanceof Array
                        ? (function (t, e, r) {
                            for (var n = 0, i = e.length; n < i; n++) e[n] = u(t, e[n], r);
                            return e;
                        })(t, r, n)
                        : r instanceof f
                            ? r.length
                                ? n.hasOwnProperty(r)
                                    ? n[r]
                                    : (n[r] = (function (t, r) {
                                        for (var n = 0, i = r.length; n < i; t = t[r[n++].replace(o, e)]);
                                        return t;
                                    })(t, r.split(e)))
                                : t
                            : r instanceof Object
                                ? (function (t, e, r) {
                                    for (var n in e) e.hasOwnProperty(n) && (e[n] = u(t, e[n], r));
                                    return e;
                                })(t, r, n)
                                : r;
                }
                var c = {
                    stringify: function (t, o, s, f) {
                        return c.parser.stringify(
                            t,
                            (function (t, o, s) {
                                var f,
                                    u,
                                    c = !1,
                                    h = !!o,
                                    d = [],
                                    l = [t],
                                    p = [t],
                                    b = [s ? e : "[Circular]"],
                                    y = t,
                                    m = 1;
                                return (
                                    h &&
                                    (u =
                                        "object" == typeof o
                                            ? function (t, e) {
                                                return "" !== t && o.indexOf(t) < 0 ? void 0 : e;
                                            }
                                            : o),
                                        function (t, o) {
                                            return (
                                                h && (o = u.call(this, t, o)),
                                                    c
                                                        ? (y !== this && ((f = m - a.call(l, this) - 1), (m -= f), l.splice(m, l.length), d.splice(m - 1, d.length), (y = this)),
                                                            "object" == typeof o && o
                                                                ? (a.call(l, o) < 0 && l.push((y = o)),
                                                                    (m = l.length),
                                                                    (f = a.call(p, o)) < 0 ? ((f = p.push(o) - 1), s ? (d.push(("" + t).replace(i, r)), (b[f] = e + d.join(e))) : (b[f] = b[0])) : (o = b[f]))
                                                                : "string" == typeof o && s && (o = o.replace(r, n).replace(e, r)))
                                                        : (c = !0),
                                                    o
                                            );
                                        }
                                );
                            })(t, o, !f),
                            s
                        );
                    },
                    parse: function (t, i) {
                        return c.parser.parse(
                            t,
                            (function (t) {
                                return function (i, o) {
                                    var a = "string" == typeof o;
                                    return a && o.charAt(0) === e ? new f(o.slice(1)) : ("" === i && (o = u(o, o, {})), a && (o = o.replace(s, "$1~").replace(n, r)), t ? t.call(this, i, o) : o);
                                };
                            })(i)
                        );
                    },
                    parser: JSON,
                };
                t.exports = c;
            },
            9266: (t, e, r) => {
                "use strict";
                const n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : void 0,
                    i = (t) => async (e, r) => {
                        "string" == typeof e && (e = new n.TextEncoder().encode(e)), (r = { outputFormat: "hex", ...r });
                        const i = await n.crypto.subtle.digest(t, e);
                        return "hex" === r.outputFormat
                            ? ((t) => {
                                const e = new DataView(t);
                                let r = "";
                                for (let t = 0; t < e.byteLength; t += 4) r += e.getUint32(t).toString(16).padStart(8, "0");
                                return r;
                            })(i)
                            : i;
                    };
                i("SHA-1"), (e.JQ = i("SHA-256")), i("SHA-384"), i("SHA-512");
            },
            6266: (t, e, r) => {
                "use strict";
                var n = e;
                (n.version = r(8597).i8), (n.utils = r(953)), (n.rand = r(9931)), (n.curve = r(8254)), (n.curves = r(5427)), (n.ec = r(7954)), (n.eddsa = r(5980));
            },
            4918: (t, e, r) => {
                "use strict";
                var n = r(3785),
                    i = r(953),
                    o = i.getNAF,
                    s = i.getJSF,
                    a = i.assert;
                function f(t, e) {
                    (this.type = t),
                        (this.p = new n(e.p, 16)),
                        (this.red = e.prime ? n.red(e.prime) : n.mont(this.p)),
                        (this.zero = new n(0).toRed(this.red)),
                        (this.one = new n(1).toRed(this.red)),
                        (this.two = new n(2).toRed(this.red)),
                        (this.n = e.n && new n(e.n, 16)),
                        (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
                        (this._wnafT1 = new Array(4)),
                        (this._wnafT2 = new Array(4)),
                        (this._wnafT3 = new Array(4)),
                        (this._wnafT4 = new Array(4)),
                        (this._bitLength = this.n ? this.n.bitLength() : 0);
                    var r = this.n && this.p.div(this.n);
                    !r || r.cmpn(100) > 0 ? (this.redN = null) : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
                }
                function u(t, e) {
                    (this.curve = t), (this.type = e), (this.precomputed = null);
                }
                (t.exports = f),
                    (f.prototype.point = function () {
                        throw new Error("Not implemented");
                    }),
                    (f.prototype.validate = function () {
                        throw new Error("Not implemented");
                    }),
                    (f.prototype._fixedNafMul = function (t, e) {
                        a(t.precomputed);
                        var r = t._getDoubles(),
                            n = o(e, 1, this._bitLength),
                            i = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
                        i /= 3;
                        var s,
                            f,
                            u = [];
                        for (s = 0; s < n.length; s += r.step) {
                            f = 0;
                            for (var c = s + r.step - 1; c >= s; c--) f = (f << 1) + n[c];
                            u.push(f);
                        }
                        for (var h = this.jpoint(null, null, null), d = this.jpoint(null, null, null), l = i; l > 0; l--) {
                            for (s = 0; s < u.length; s++) (f = u[s]) === l ? (d = d.mixedAdd(r.points[s])) : f === -l && (d = d.mixedAdd(r.points[s].neg()));
                            h = h.add(d);
                        }
                        return h.toP();
                    }),
                    (f.prototype._wnafMul = function (t, e) {
                        var r = 4,
                            n = t._getNAFPoints(r);
                        r = n.wnd;
                        for (var i = n.points, s = o(e, r, this._bitLength), f = this.jpoint(null, null, null), u = s.length - 1; u >= 0; u--) {
                            for (var c = 0; u >= 0 && 0 === s[u]; u--) c++;
                            if ((u >= 0 && c++, (f = f.dblp(c)), u < 0)) break;
                            var h = s[u];
                            a(0 !== h), (f = "affine" === t.type ? (h > 0 ? f.mixedAdd(i[(h - 1) >> 1]) : f.mixedAdd(i[(-h - 1) >> 1].neg())) : h > 0 ? f.add(i[(h - 1) >> 1]) : f.add(i[(-h - 1) >> 1].neg()));
                        }
                        return "affine" === t.type ? f.toP() : f;
                    }),
                    (f.prototype._wnafMulAdd = function (t, e, r, n, i) {
                        var a,
                            f,
                            u,
                            c = this._wnafT1,
                            h = this._wnafT2,
                            d = this._wnafT3,
                            l = 0;
                        for (a = 0; a < n; a++) {
                            var p = (u = e[a])._getNAFPoints(t);
                            (c[a] = p.wnd), (h[a] = p.points);
                        }
                        for (a = n - 1; a >= 1; a -= 2) {
                            var b = a - 1,
                                y = a;
                            if (1 === c[b] && 1 === c[y]) {
                                var m = [e[b], null, null, e[y]];
                                0 === e[b].y.cmp(e[y].y)
                                    ? ((m[1] = e[b].add(e[y])), (m[2] = e[b].toJ().mixedAdd(e[y].neg())))
                                    : 0 === e[b].y.cmp(e[y].y.redNeg())
                                        ? ((m[1] = e[b].toJ().mixedAdd(e[y])), (m[2] = e[b].add(e[y].neg())))
                                        : ((m[1] = e[b].toJ().mixedAdd(e[y])), (m[2] = e[b].toJ().mixedAdd(e[y].neg())));
                                var g = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                    v = s(r[b], r[y]);
                                for (l = Math.max(v[0].length, l), d[b] = new Array(l), d[y] = new Array(l), f = 0; f < l; f++) {
                                    var w = 0 | v[0][f],
                                        M = 0 | v[1][f];
                                    (d[b][f] = g[3 * (w + 1) + (M + 1)]), (d[y][f] = 0), (h[b] = m);
                                }
                            } else (d[b] = o(r[b], c[b], this._bitLength)), (d[y] = o(r[y], c[y], this._bitLength)), (l = Math.max(d[b].length, l)), (l = Math.max(d[y].length, l));
                        }
                        var _ = this.jpoint(null, null, null),
                            A = this._wnafT4;
                        for (a = l; a >= 0; a--) {
                            for (var S = 0; a >= 0; ) {
                                var x = !0;
                                for (f = 0; f < n; f++) (A[f] = 0 | d[f][a]), 0 !== A[f] && (x = !1);
                                if (!x) break;
                                S++, a--;
                            }
                            if ((a >= 0 && S++, (_ = _.dblp(S)), a < 0)) break;
                            for (f = 0; f < n; f++) {
                                var E = A[f];
                                0 !== E && (E > 0 ? (u = h[f][(E - 1) >> 1]) : E < 0 && (u = h[f][(-E - 1) >> 1].neg()), (_ = "affine" === u.type ? _.mixedAdd(u) : _.add(u)));
                            }
                        }
                        for (a = 0; a < n; a++) h[a] = null;
                        return i ? _ : _.toP();
                    }),
                    (f.BasePoint = u),
                    (u.prototype.eq = function () {
                        throw new Error("Not implemented");
                    }),
                    (u.prototype.validate = function () {
                        return this.curve.validate(this);
                    }),
                    (f.prototype.decodePoint = function (t, e) {
                        t = i.toArray(t, e);
                        var r = this.p.byteLength();
                        if ((4 === t[0] || 6 === t[0] || 7 === t[0]) && t.length - 1 == 2 * r)
                            return 6 === t[0] ? a(t[t.length - 1] % 2 == 0) : 7 === t[0] && a(t[t.length - 1] % 2 == 1), this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
                        if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r) return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
                        throw new Error("Unknown point format");
                    }),
                    (u.prototype.encodeCompressed = function (t) {
                        return this.encode(t, !0);
                    }),
                    (u.prototype._encode = function (t) {
                        var e = this.curve.p.byteLength(),
                            r = this.getX().toArray("be", e);
                        return t ? [this.getY().isEven() ? 2 : 3].concat(r) : [4].concat(r, this.getY().toArray("be", e));
                    }),
                    (u.prototype.encode = function (t, e) {
                        return i.encode(this._encode(e), t);
                    }),
                    (u.prototype.precompute = function (t) {
                        if (this.precomputed) return this;
                        var e = { doubles: null, naf: null, beta: null };
                        return (e.naf = this._getNAFPoints(8)), (e.doubles = this._getDoubles(4, t)), (e.beta = this._getBeta()), (this.precomputed = e), this;
                    }),
                    (u.prototype._hasDoubles = function (t) {
                        if (!this.precomputed) return !1;
                        var e = this.precomputed.doubles;
                        return !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step);
                    }),
                    (u.prototype._getDoubles = function (t, e) {
                        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
                        for (var r = [this], n = this, i = 0; i < e; i += t) {
                            for (var o = 0; o < t; o++) n = n.dbl();
                            r.push(n);
                        }
                        return { step: t, points: r };
                    }),
                    (u.prototype._getNAFPoints = function (t) {
                        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
                        for (var e = [this], r = (1 << t) - 1, n = 1 === r ? null : this.dbl(), i = 1; i < r; i++) e[i] = e[i - 1].add(n);
                        return { wnd: t, points: e };
                    }),
                    (u.prototype._getBeta = function () {
                        return null;
                    }),
                    (u.prototype.dblp = function (t) {
                        for (var e = this, r = 0; r < t; r++) e = e.dbl();
                        return e;
                    });
            },
            1138: (t, e, r) => {
                "use strict";
                var n = r(953),
                    i = r(3785),
                    o = r(5717),
                    s = r(4918),
                    a = n.assert;
                function f(t) {
                    (this.twisted = 1 != (0 | t.a)),
                        (this.mOneA = this.twisted && -1 == (0 | t.a)),
                        (this.extended = this.mOneA),
                        s.call(this, "edwards", t),
                        (this.a = new i(t.a, 16).umod(this.red.m)),
                        (this.a = this.a.toRed(this.red)),
                        (this.c = new i(t.c, 16).toRed(this.red)),
                        (this.c2 = this.c.redSqr()),
                        (this.d = new i(t.d, 16).toRed(this.red)),
                        (this.dd = this.d.redAdd(this.d)),
                        a(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
                        (this.oneC = 1 == (0 | t.c));
                }
                function u(t, e, r, n, o) {
                    s.BasePoint.call(this, t, "projective"),
                        null === e && null === r && null === n
                            ? ((this.x = this.curve.zero), (this.y = this.curve.one), (this.z = this.curve.one), (this.t = this.curve.zero), (this.zOne = !0))
                            : ((this.x = new i(e, 16)),
                                (this.y = new i(r, 16)),
                                (this.z = n ? new i(n, 16) : this.curve.one),
                                (this.t = o && new i(o, 16)),
                            this.x.red || (this.x = this.x.toRed(this.curve.red)),
                            this.y.red || (this.y = this.y.toRed(this.curve.red)),
                            this.z.red || (this.z = this.z.toRed(this.curve.red)),
                            this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
                                (this.zOne = this.z === this.curve.one),
                            this.curve.extended && !this.t && ((this.t = this.x.redMul(this.y)), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
                }
                o(f, s),
                    (t.exports = f),
                    (f.prototype._mulA = function (t) {
                        return this.mOneA ? t.redNeg() : this.a.redMul(t);
                    }),
                    (f.prototype._mulC = function (t) {
                        return this.oneC ? t : this.c.redMul(t);
                    }),
                    (f.prototype.jpoint = function (t, e, r, n) {
                        return this.point(t, e, r, n);
                    }),
                    (f.prototype.pointFromX = function (t, e) {
                        (t = new i(t, 16)).red || (t = t.toRed(this.red));
                        var r = t.redSqr(),
                            n = this.c2.redSub(this.a.redMul(r)),
                            o = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                            s = n.redMul(o.redInvm()),
                            a = s.redSqrt();
                        if (0 !== a.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
                        var f = a.fromRed().isOdd();
                        return ((e && !f) || (!e && f)) && (a = a.redNeg()), this.point(t, a);
                    }),
                    (f.prototype.pointFromY = function (t, e) {
                        (t = new i(t, 16)).red || (t = t.toRed(this.red));
                        var r = t.redSqr(),
                            n = r.redSub(this.c2),
                            o = r.redMul(this.d).redMul(this.c2).redSub(this.a),
                            s = n.redMul(o.redInvm());
                        if (0 === s.cmp(this.zero)) {
                            if (e) throw new Error("invalid point");
                            return this.point(this.zero, t);
                        }
                        var a = s.redSqrt();
                        if (0 !== a.redSqr().redSub(s).cmp(this.zero)) throw new Error("invalid point");
                        return a.fromRed().isOdd() !== e && (a = a.redNeg()), this.point(a, t);
                    }),
                    (f.prototype.validate = function (t) {
                        if (t.isInfinity()) return !0;
                        t.normalize();
                        var e = t.x.redSqr(),
                            r = t.y.redSqr(),
                            n = e.redMul(this.a).redAdd(r),
                            i = this.c2.redMul(this.one.redAdd(this.d.redMul(e).redMul(r)));
                        return 0 === n.cmp(i);
                    }),
                    o(u, s.BasePoint),
                    (f.prototype.pointFromJSON = function (t) {
                        return u.fromJSON(this, t);
                    }),
                    (f.prototype.point = function (t, e, r, n) {
                        return new u(this, t, e, r, n);
                    }),
                    (u.fromJSON = function (t, e) {
                        return new u(t, e[0], e[1], e[2]);
                    }),
                    (u.prototype.inspect = function () {
                        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
                    }),
                    (u.prototype.isInfinity = function () {
                        return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)));
                    }),
                    (u.prototype._extDbl = function () {
                        var t = this.x.redSqr(),
                            e = this.y.redSqr(),
                            r = this.z.redSqr();
                        r = r.redIAdd(r);
                        var n = this.curve._mulA(t),
                            i = this.x.redAdd(this.y).redSqr().redISub(t).redISub(e),
                            o = n.redAdd(e),
                            s = o.redSub(r),
                            a = n.redSub(e),
                            f = i.redMul(s),
                            u = o.redMul(a),
                            c = i.redMul(a),
                            h = s.redMul(o);
                        return this.curve.point(f, u, h, c);
                    }),
                    (u.prototype._projDbl = function () {
                        var t,
                            e,
                            r,
                            n,
                            i,
                            o,
                            s = this.x.redAdd(this.y).redSqr(),
                            a = this.x.redSqr(),
                            f = this.y.redSqr();
                        if (this.curve.twisted) {
                            var u = (n = this.curve._mulA(a)).redAdd(f);
                            this.zOne
                                ? ((t = s.redSub(a).redSub(f).redMul(u.redSub(this.curve.two))), (e = u.redMul(n.redSub(f))), (r = u.redSqr().redSub(u).redSub(u)))
                                : ((i = this.z.redSqr()), (o = u.redSub(i).redISub(i)), (t = s.redSub(a).redISub(f).redMul(o)), (e = u.redMul(n.redSub(f))), (r = u.redMul(o)));
                        } else (n = a.redAdd(f)), (i = this.curve._mulC(this.z).redSqr()), (o = n.redSub(i).redSub(i)), (t = this.curve._mulC(s.redISub(n)).redMul(o)), (e = this.curve._mulC(n).redMul(a.redISub(f))), (r = n.redMul(o));
                        return this.curve.point(t, e, r);
                    }),
                    (u.prototype.dbl = function () {
                        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
                    }),
                    (u.prototype._extAdd = function (t) {
                        var e = this.y.redSub(this.x).redMul(t.y.redSub(t.x)),
                            r = this.y.redAdd(this.x).redMul(t.y.redAdd(t.x)),
                            n = this.t.redMul(this.curve.dd).redMul(t.t),
                            i = this.z.redMul(t.z.redAdd(t.z)),
                            o = r.redSub(e),
                            s = i.redSub(n),
                            a = i.redAdd(n),
                            f = r.redAdd(e),
                            u = o.redMul(s),
                            c = a.redMul(f),
                            h = o.redMul(f),
                            d = s.redMul(a);
                        return this.curve.point(u, c, d, h);
                    }),
                    (u.prototype._projAdd = function (t) {
                        var e,
                            r,
                            n = this.z.redMul(t.z),
                            i = n.redSqr(),
                            o = this.x.redMul(t.x),
                            s = this.y.redMul(t.y),
                            a = this.curve.d.redMul(o).redMul(s),
                            f = i.redSub(a),
                            u = i.redAdd(a),
                            c = this.x.redAdd(this.y).redMul(t.x.redAdd(t.y)).redISub(o).redISub(s),
                            h = n.redMul(f).redMul(c);
                        return this.curve.twisted ? ((e = n.redMul(u).redMul(s.redSub(this.curve._mulA(o)))), (r = f.redMul(u))) : ((e = n.redMul(u).redMul(s.redSub(o))), (r = this.curve._mulC(f).redMul(u))), this.curve.point(h, e, r);
                    }),
                    (u.prototype.add = function (t) {
                        return this.isInfinity() ? t : t.isInfinity() ? this : this.curve.extended ? this._extAdd(t) : this._projAdd(t);
                    }),
                    (u.prototype.mul = function (t) {
                        return this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve._wnafMul(this, t);
                    }),
                    (u.prototype.mulAdd = function (t, e, r) {
                        return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !1);
                    }),
                    (u.prototype.jmulAdd = function (t, e, r) {
                        return this.curve._wnafMulAdd(1, [this, e], [t, r], 2, !0);
                    }),
                    (u.prototype.normalize = function () {
                        if (this.zOne) return this;
                        var t = this.z.redInvm();
                        return (this.x = this.x.redMul(t)), (this.y = this.y.redMul(t)), this.t && (this.t = this.t.redMul(t)), (this.z = this.curve.one), (this.zOne = !0), this;
                    }),
                    (u.prototype.neg = function () {
                        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
                    }),
                    (u.prototype.getX = function () {
                        return this.normalize(), this.x.fromRed();
                    }),
                    (u.prototype.getY = function () {
                        return this.normalize(), this.y.fromRed();
                    }),
                    (u.prototype.eq = function (t) {
                        return this === t || (0 === this.getX().cmp(t.getX()) && 0 === this.getY().cmp(t.getY()));
                    }),
                    (u.prototype.eqXToP = function (t) {
                        var e = t.toRed(this.curve.red).redMul(this.z);
                        if (0 === this.x.cmp(e)) return !0;
                        for (var r = t.clone(), n = this.curve.redN.redMul(this.z); ; ) {
                            if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)) return !1;
                            if ((e.redIAdd(n), 0 === this.x.cmp(e))) return !0;
                        }
                    }),
                    (u.prototype.toP = u.prototype.normalize),
                    (u.prototype.mixedAdd = u.prototype.add);
            },
            8254: (t, e, r) => {
                "use strict";
                var n = e;
                (n.base = r(4918)), (n.short = r(6673)), (n.mont = r(2881)), (n.edwards = r(1138));
            },
            2881: (t, e, r) => {
                "use strict";
                var n = r(3785),
                    i = r(5717),
                    o = r(4918),
                    s = r(953);
                function a(t) {
                    o.call(this, "mont", t),
                        (this.a = new n(t.a, 16).toRed(this.red)),
                        (this.b = new n(t.b, 16).toRed(this.red)),
                        (this.i4 = new n(4).toRed(this.red).redInvm()),
                        (this.two = new n(2).toRed(this.red)),
                        (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
                }
                function f(t, e, r) {
                    o.BasePoint.call(this, t, "projective"),
                        null === e && null === r
                            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
                            : ((this.x = new n(e, 16)), (this.z = new n(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
                }
                i(a, o),
                    (t.exports = a),
                    (a.prototype.validate = function (t) {
                        var e = t.normalize().x,
                            r = e.redSqr(),
                            n = r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
                        return 0 === n.redSqrt().redSqr().cmp(n);
                    }),
                    i(f, o.BasePoint),
                    (a.prototype.decodePoint = function (t, e) {
                        return this.point(s.toArray(t, e), 1);
                    }),
                    (a.prototype.point = function (t, e) {
                        return new f(this, t, e);
                    }),
                    (a.prototype.pointFromJSON = function (t) {
                        return f.fromJSON(this, t);
                    }),
                    (f.prototype.precompute = function () {}),
                    (f.prototype._encode = function () {
                        return this.getX().toArray("be", this.curve.p.byteLength());
                    }),
                    (f.fromJSON = function (t, e) {
                        return new f(t, e[0], e[1] || t.one);
                    }),
                    (f.prototype.inspect = function () {
                        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
                    }),
                    (f.prototype.isInfinity = function () {
                        return 0 === this.z.cmpn(0);
                    }),
                    (f.prototype.dbl = function () {
                        var t = this.x.redAdd(this.z).redSqr(),
                            e = this.x.redSub(this.z).redSqr(),
                            r = t.redSub(e),
                            n = t.redMul(e),
                            i = r.redMul(e.redAdd(this.curve.a24.redMul(r)));
                        return this.curve.point(n, i);
                    }),
                    (f.prototype.add = function () {
                        throw new Error("Not supported on Montgomery curve");
                    }),
                    (f.prototype.diffAdd = function (t, e) {
                        var r = this.x.redAdd(this.z),
                            n = this.x.redSub(this.z),
                            i = t.x.redAdd(t.z),
                            o = t.x.redSub(t.z).redMul(r),
                            s = i.redMul(n),
                            a = e.z.redMul(o.redAdd(s).redSqr()),
                            f = e.x.redMul(o.redISub(s).redSqr());
                        return this.curve.point(a, f);
                    }),
                    (f.prototype.mul = function (t) {
                        for (var e = t.clone(), r = this, n = this.curve.point(null, null), i = []; 0 !== e.cmpn(0); e.iushrn(1)) i.push(e.andln(1));
                        for (var o = i.length - 1; o >= 0; o--) 0 === i[o] ? ((r = r.diffAdd(n, this)), (n = n.dbl())) : ((n = r.diffAdd(n, this)), (r = r.dbl()));
                        return n;
                    }),
                    (f.prototype.mulAdd = function () {
                        throw new Error("Not supported on Montgomery curve");
                    }),
                    (f.prototype.jumlAdd = function () {
                        throw new Error("Not supported on Montgomery curve");
                    }),
                    (f.prototype.eq = function (t) {
                        return 0 === this.getX().cmp(t.getX());
                    }),
                    (f.prototype.normalize = function () {
                        return (this.x = this.x.redMul(this.z.redInvm())), (this.z = this.curve.one), this;
                    }),
                    (f.prototype.getX = function () {
                        return this.normalize(), this.x.fromRed();
                    });
            },
            6673: (t, e, r) => {
                "use strict";
                var n = r(953),
                    i = r(3785),
                    o = r(5717),
                    s = r(4918),
                    a = n.assert;
                function f(t) {
                    s.call(this, "short", t),
                        (this.a = new i(t.a, 16).toRed(this.red)),
                        (this.b = new i(t.b, 16).toRed(this.red)),
                        (this.tinv = this.two.redInvm()),
                        (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
                        (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
                        (this.endo = this._getEndomorphism(t)),
                        (this._endoWnafT1 = new Array(4)),
                        (this._endoWnafT2 = new Array(4));
                }
                function u(t, e, r, n) {
                    s.BasePoint.call(this, t, "affine"),
                        null === e && null === r
                            ? ((this.x = null), (this.y = null), (this.inf = !0))
                            : ((this.x = new i(e, 16)),
                                (this.y = new i(r, 16)),
                            n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
                            this.x.red || (this.x = this.x.toRed(this.curve.red)),
                            this.y.red || (this.y = this.y.toRed(this.curve.red)),
                                (this.inf = !1));
                }
                function c(t, e, r, n) {
                    s.BasePoint.call(this, t, "jacobian"),
                        null === e && null === r && null === n ? ((this.x = this.curve.one), (this.y = this.curve.one), (this.z = new i(0))) : ((this.x = new i(e, 16)), (this.y = new i(r, 16)), (this.z = new i(n, 16))),
                    this.x.red || (this.x = this.x.toRed(this.curve.red)),
                    this.y.red || (this.y = this.y.toRed(this.curve.red)),
                    this.z.red || (this.z = this.z.toRed(this.curve.red)),
                        (this.zOne = this.z === this.curve.one);
                }
                o(f, s),
                    (t.exports = f),
                    (f.prototype._getEndomorphism = function (t) {
                        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                            var e, r;
                            if (t.beta) e = new i(t.beta, 16).toRed(this.red);
                            else {
                                var n = this._getEndoRoots(this.p);
                                e = (e = n[0].cmp(n[1]) < 0 ? n[0] : n[1]).toRed(this.red);
                            }
                            if (t.lambda) r = new i(t.lambda, 16);
                            else {
                                var o = this._getEndoRoots(this.n);
                                0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(e)) ? (r = o[0]) : ((r = o[1]), a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
                            }
                            return {
                                beta: e,
                                lambda: r,
                                basis: t.basis
                                    ? t.basis.map(function (t) {
                                        return { a: new i(t.a, 16), b: new i(t.b, 16) };
                                    })
                                    : this._getEndoBasis(r),
                            };
                        }
                    }),
                    (f.prototype._getEndoRoots = function (t) {
                        var e = t === this.p ? this.red : i.mont(t),
                            r = new i(2).toRed(e).redInvm(),
                            n = r.redNeg(),
                            o = new i(3).toRed(e).redNeg().redSqrt().redMul(r);
                        return [n.redAdd(o).fromRed(), n.redSub(o).fromRed()];
                    }),
                    (f.prototype._getEndoBasis = function (t) {
                        for (var e, r, n, o, s, a, f, u, c, h = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), d = t, l = this.n.clone(), p = new i(1), b = new i(0), y = new i(0), m = new i(1), g = 0; 0 !== d.cmpn(0); ) {
                            var v = l.div(d);
                            (u = l.sub(v.mul(d))), (c = y.sub(v.mul(p)));
                            var w = m.sub(v.mul(b));
                            if (!n && u.cmp(h) < 0) (e = f.neg()), (r = p), (n = u.neg()), (o = c);
                            else if (n && 2 == ++g) break;
                            (f = u), (l = d), (d = u), (y = p), (p = c), (m = b), (b = w);
                        }
                        (s = u.neg()), (a = c);
                        var M = n.sqr().add(o.sqr());
                        return (
                            s.sqr().add(a.sqr()).cmp(M) >= 0 && ((s = e), (a = r)),
                            n.negative && ((n = n.neg()), (o = o.neg())),
                            s.negative && ((s = s.neg()), (a = a.neg())),
                                [
                                    { a: n, b: o },
                                    { a: s, b: a },
                                ]
                        );
                    }),
                    (f.prototype._endoSplit = function (t) {
                        var e = this.endo.basis,
                            r = e[0],
                            n = e[1],
                            i = n.b.mul(t).divRound(this.n),
                            o = r.b.neg().mul(t).divRound(this.n),
                            s = i.mul(r.a),
                            a = o.mul(n.a),
                            f = i.mul(r.b),
                            u = o.mul(n.b);
                        return { k1: t.sub(s).sub(a), k2: f.add(u).neg() };
                    }),
                    (f.prototype.pointFromX = function (t, e) {
                        (t = new i(t, 16)).red || (t = t.toRed(this.red));
                        var r = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
                            n = r.redSqrt();
                        if (0 !== n.redSqr().redSub(r).cmp(this.zero)) throw new Error("invalid point");
                        var o = n.fromRed().isOdd();
                        return ((e && !o) || (!e && o)) && (n = n.redNeg()), this.point(t, n);
                    }),
                    (f.prototype.validate = function (t) {
                        if (t.inf) return !0;
                        var e = t.x,
                            r = t.y,
                            n = this.a.redMul(e),
                            i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
                        return 0 === r.redSqr().redISub(i).cmpn(0);
                    }),
                    (f.prototype._endoWnafMulAdd = function (t, e, r) {
                        for (var n = this._endoWnafT1, i = this._endoWnafT2, o = 0; o < t.length; o++) {
                            var s = this._endoSplit(e[o]),
                                a = t[o],
                                f = a._getBeta();
                            s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))), s.k2.negative && (s.k2.ineg(), (f = f.neg(!0))), (n[2 * o] = a), (n[2 * o + 1] = f), (i[2 * o] = s.k1), (i[2 * o + 1] = s.k2);
                        }
                        for (var u = this._wnafMulAdd(1, n, i, 2 * o, r), c = 0; c < 2 * o; c++) (n[c] = null), (i[c] = null);
                        return u;
                    }),
                    o(u, s.BasePoint),
                    (f.prototype.point = function (t, e, r) {
                        return new u(this, t, e, r);
                    }),
                    (f.prototype.pointFromJSON = function (t, e) {
                        return u.fromJSON(this, t, e);
                    }),
                    (u.prototype._getBeta = function () {
                        if (this.curve.endo) {
                            var t = this.precomputed;
                            if (t && t.beta) return t.beta;
                            var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                            if (t) {
                                var r = this.curve,
                                    n = function (t) {
                                        return r.point(t.x.redMul(r.endo.beta), t.y);
                                    };
                                (t.beta = e), (e.precomputed = { beta: null, naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(n) }, doubles: t.doubles && { step: t.doubles.step, points: t.doubles.points.map(n) } });
                            }
                            return e;
                        }
                    }),
                    (u.prototype.toJSON = function () {
                        return this.precomputed
                            ? [
                                this.x,
                                this.y,
                                this.precomputed && {
                                    doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) },
                                    naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) },
                                },
                            ]
                            : [this.x, this.y];
                    }),
                    (u.fromJSON = function (t, e, r) {
                        "string" == typeof e && (e = JSON.parse(e));
                        var n = t.point(e[0], e[1], r);
                        if (!e[2]) return n;
                        function i(e) {
                            return t.point(e[0], e[1], r);
                        }
                        var o = e[2];
                        return (n.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [n].concat(o.doubles.points.map(i)) }, naf: o.naf && { wnd: o.naf.wnd, points: [n].concat(o.naf.points.map(i)) } }), n;
                    }),
                    (u.prototype.inspect = function () {
                        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
                    }),
                    (u.prototype.isInfinity = function () {
                        return this.inf;
                    }),
                    (u.prototype.add = function (t) {
                        if (this.inf) return t;
                        if (t.inf) return this;
                        if (this.eq(t)) return this.dbl();
                        if (this.neg().eq(t)) return this.curve.point(null, null);
                        if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
                        var e = this.y.redSub(t.y);
                        0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
                        var r = e.redSqr().redISub(this.x).redISub(t.x),
                            n = e.redMul(this.x.redSub(r)).redISub(this.y);
                        return this.curve.point(r, n);
                    }),
                    (u.prototype.dbl = function () {
                        if (this.inf) return this;
                        var t = this.y.redAdd(this.y);
                        if (0 === t.cmpn(0)) return this.curve.point(null, null);
                        var e = this.curve.a,
                            r = this.x.redSqr(),
                            n = t.redInvm(),
                            i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
                            o = i.redSqr().redISub(this.x.redAdd(this.x)),
                            s = i.redMul(this.x.redSub(o)).redISub(this.y);
                        return this.curve.point(o, s);
                    }),
                    (u.prototype.getX = function () {
                        return this.x.fromRed();
                    }),
                    (u.prototype.getY = function () {
                        return this.y.fromRed();
                    }),
                    (u.prototype.mul = function (t) {
                        return (t = new i(t, 16)), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [t]) : this.curve._wnafMul(this, t);
                    }),
                    (u.prototype.mulAdd = function (t, e, r) {
                        var n = [this, e],
                            i = [t, r];
                        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i) : this.curve._wnafMulAdd(1, n, i, 2);
                    }),
                    (u.prototype.jmulAdd = function (t, e, r) {
                        var n = [this, e],
                            i = [t, r];
                        return this.curve.endo ? this.curve._endoWnafMulAdd(n, i, !0) : this.curve._wnafMulAdd(1, n, i, 2, !0);
                    }),
                    (u.prototype.eq = function (t) {
                        return this === t || (this.inf === t.inf && (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))));
                    }),
                    (u.prototype.neg = function (t) {
                        if (this.inf) return this;
                        var e = this.curve.point(this.x, this.y.redNeg());
                        if (t && this.precomputed) {
                            var r = this.precomputed,
                                n = function (t) {
                                    return t.neg();
                                };
                            e.precomputed = { naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) }, doubles: r.doubles && { step: r.doubles.step, points: r.doubles.points.map(n) } };
                        }
                        return e;
                    }),
                    (u.prototype.toJ = function () {
                        return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
                    }),
                    o(c, s.BasePoint),
                    (f.prototype.jpoint = function (t, e, r) {
                        return new c(this, t, e, r);
                    }),
                    (c.prototype.toP = function () {
                        if (this.isInfinity()) return this.curve.point(null, null);
                        var t = this.z.redInvm(),
                            e = t.redSqr(),
                            r = this.x.redMul(e),
                            n = this.y.redMul(e).redMul(t);
                        return this.curve.point(r, n);
                    }),
                    (c.prototype.neg = function () {
                        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
                    }),
                    (c.prototype.add = function (t) {
                        if (this.isInfinity()) return t;
                        if (t.isInfinity()) return this;
                        var e = t.z.redSqr(),
                            r = this.z.redSqr(),
                            n = this.x.redMul(e),
                            i = t.x.redMul(r),
                            o = this.y.redMul(e.redMul(t.z)),
                            s = t.y.redMul(r.redMul(this.z)),
                            a = n.redSub(i),
                            f = o.redSub(s);
                        if (0 === a.cmpn(0)) return 0 !== f.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                        var u = a.redSqr(),
                            c = u.redMul(a),
                            h = n.redMul(u),
                            d = f.redSqr().redIAdd(c).redISub(h).redISub(h),
                            l = f.redMul(h.redISub(d)).redISub(o.redMul(c)),
                            p = this.z.redMul(t.z).redMul(a);
                        return this.curve.jpoint(d, l, p);
                    }),
                    (c.prototype.mixedAdd = function (t) {
                        if (this.isInfinity()) return t.toJ();
                        if (t.isInfinity()) return this;
                        var e = this.z.redSqr(),
                            r = this.x,
                            n = t.x.redMul(e),
                            i = this.y,
                            o = t.y.redMul(e).redMul(this.z),
                            s = r.redSub(n),
                            a = i.redSub(o);
                        if (0 === s.cmpn(0)) return 0 !== a.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
                        var f = s.redSqr(),
                            u = f.redMul(s),
                            c = r.redMul(f),
                            h = a.redSqr().redIAdd(u).redISub(c).redISub(c),
                            d = a.redMul(c.redISub(h)).redISub(i.redMul(u)),
                            l = this.z.redMul(s);
                        return this.curve.jpoint(h, d, l);
                    }),
                    (c.prototype.dblp = function (t) {
                        if (0 === t) return this;
                        if (this.isInfinity()) return this;
                        if (!t) return this.dbl();
                        var e;
                        if (this.curve.zeroA || this.curve.threeA) {
                            var r = this;
                            for (e = 0; e < t; e++) r = r.dbl();
                            return r;
                        }
                        var n = this.curve.a,
                            i = this.curve.tinv,
                            o = this.x,
                            s = this.y,
                            a = this.z,
                            f = a.redSqr().redSqr(),
                            u = s.redAdd(s);
                        for (e = 0; e < t; e++) {
                            var c = o.redSqr(),
                                h = u.redSqr(),
                                d = h.redSqr(),
                                l = c.redAdd(c).redIAdd(c).redIAdd(n.redMul(f)),
                                p = o.redMul(h),
                                b = l.redSqr().redISub(p.redAdd(p)),
                                y = p.redISub(b),
                                m = l.redMul(y);
                            m = m.redIAdd(m).redISub(d);
                            var g = u.redMul(a);
                            e + 1 < t && (f = f.redMul(d)), (o = b), (a = g), (u = m);
                        }
                        return this.curve.jpoint(o, u.redMul(i), a);
                    }),
                    (c.prototype.dbl = function () {
                        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
                    }),
                    (c.prototype._zeroDbl = function () {
                        var t, e, r;
                        if (this.zOne) {
                            var n = this.x.redSqr(),
                                i = this.y.redSqr(),
                                o = i.redSqr(),
                                s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                            s = s.redIAdd(s);
                            var a = n.redAdd(n).redIAdd(n),
                                f = a.redSqr().redISub(s).redISub(s),
                                u = o.redIAdd(o);
                            (u = (u = u.redIAdd(u)).redIAdd(u)), (t = f), (e = a.redMul(s.redISub(f)).redISub(u)), (r = this.y.redAdd(this.y));
                        } else {
                            var c = this.x.redSqr(),
                                h = this.y.redSqr(),
                                d = h.redSqr(),
                                l = this.x.redAdd(h).redSqr().redISub(c).redISub(d);
                            l = l.redIAdd(l);
                            var p = c.redAdd(c).redIAdd(c),
                                b = p.redSqr(),
                                y = d.redIAdd(d);
                            (y = (y = y.redIAdd(y)).redIAdd(y)), (t = b.redISub(l).redISub(l)), (e = p.redMul(l.redISub(t)).redISub(y)), (r = (r = this.y.redMul(this.z)).redIAdd(r));
                        }
                        return this.curve.jpoint(t, e, r);
                    }),
                    (c.prototype._threeDbl = function () {
                        var t, e, r;
                        if (this.zOne) {
                            var n = this.x.redSqr(),
                                i = this.y.redSqr(),
                                o = i.redSqr(),
                                s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
                            s = s.redIAdd(s);
                            var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                                f = a.redSqr().redISub(s).redISub(s);
                            t = f;
                            var u = o.redIAdd(o);
                            (u = (u = u.redIAdd(u)).redIAdd(u)), (e = a.redMul(s.redISub(f)).redISub(u)), (r = this.y.redAdd(this.y));
                        } else {
                            var c = this.z.redSqr(),
                                h = this.y.redSqr(),
                                d = this.x.redMul(h),
                                l = this.x.redSub(c).redMul(this.x.redAdd(c));
                            l = l.redAdd(l).redIAdd(l);
                            var p = d.redIAdd(d),
                                b = (p = p.redIAdd(p)).redAdd(p);
                            (t = l.redSqr().redISub(b)), (r = this.y.redAdd(this.z).redSqr().redISub(h).redISub(c));
                            var y = h.redSqr();
                            (y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y)), (e = l.redMul(p.redISub(t)).redISub(y));
                        }
                        return this.curve.jpoint(t, e, r);
                    }),
                    (c.prototype._dbl = function () {
                        var t = this.curve.a,
                            e = this.x,
                            r = this.y,
                            n = this.z,
                            i = n.redSqr().redSqr(),
                            o = e.redSqr(),
                            s = r.redSqr(),
                            a = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
                            f = e.redAdd(e),
                            u = (f = f.redIAdd(f)).redMul(s),
                            c = a.redSqr().redISub(u.redAdd(u)),
                            h = u.redISub(c),
                            d = s.redSqr();
                        d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                        var l = a.redMul(h).redISub(d),
                            p = r.redAdd(r).redMul(n);
                        return this.curve.jpoint(c, l, p);
                    }),
                    (c.prototype.trpl = function () {
                        if (!this.curve.zeroA) return this.dbl().add(this);
                        var t = this.x.redSqr(),
                            e = this.y.redSqr(),
                            r = this.z.redSqr(),
                            n = e.redSqr(),
                            i = t.redAdd(t).redIAdd(t),
                            o = i.redSqr(),
                            s = this.x.redAdd(e).redSqr().redISub(t).redISub(n),
                            a = (s = (s = (s = s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),
                            f = n.redIAdd(n);
                        f = (f = (f = f.redIAdd(f)).redIAdd(f)).redIAdd(f);
                        var u = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(f),
                            c = e.redMul(u);
                        c = (c = c.redIAdd(c)).redIAdd(c);
                        var h = this.x.redMul(a).redISub(c);
                        h = (h = h.redIAdd(h)).redIAdd(h);
                        var d = this.y.redMul(u.redMul(f.redISub(u)).redISub(s.redMul(a)));
                        d = (d = (d = d.redIAdd(d)).redIAdd(d)).redIAdd(d);
                        var l = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
                        return this.curve.jpoint(h, d, l);
                    }),
                    (c.prototype.mul = function (t, e) {
                        return (t = new i(t, e)), this.curve._wnafMul(this, t);
                    }),
                    (c.prototype.eq = function (t) {
                        if ("affine" === t.type) return this.eq(t.toJ());
                        if (this === t) return !0;
                        var e = this.z.redSqr(),
                            r = t.z.redSqr();
                        if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0)) return !1;
                        var n = e.redMul(this.z),
                            i = r.redMul(t.z);
                        return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
                    }),
                    (c.prototype.eqXToP = function (t) {
                        var e = this.z.redSqr(),
                            r = t.toRed(this.curve.red).redMul(e);
                        if (0 === this.x.cmp(r)) return !0;
                        for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
                            if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
                            if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
                        }
                    }),
                    (c.prototype.inspect = function () {
                        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
                    }),
                    (c.prototype.isInfinity = function () {
                        return 0 === this.z.cmpn(0);
                    });
            },
            5427: (t, e, r) => {
                "use strict";
                var n,
                    i = e,
                    o = r(3715),
                    s = r(8254),
                    a = r(953).assert;
                function f(t) {
                    "short" === t.type ? (this.curve = new s.short(t)) : "edwards" === t.type ? (this.curve = new s.edwards(t)) : (this.curve = new s.mont(t)),
                        (this.g = this.curve.g),
                        (this.n = this.curve.n),
                        (this.hash = t.hash),
                        a(this.g.validate(), "Invalid curve"),
                        a(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
                }
                function u(t, e) {
                    Object.defineProperty(i, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            var r = new f(e);
                            return Object.defineProperty(i, t, { configurable: !0, enumerable: !0, value: r }), r;
                        },
                    });
                }
                (i.PresetCurve = f),
                    u("p192", {
                        type: "short",
                        prime: "p192",
                        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                        hash: o.sha256,
                        gRed: !1,
                        g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"],
                    }),
                    u("p224", {
                        type: "short",
                        prime: "p224",
                        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                        hash: o.sha256,
                        gRed: !1,
                        g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"],
                    }),
                    u("p256", {
                        type: "short",
                        prime: null,
                        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                        hash: o.sha256,
                        gRed: !1,
                        g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"],
                    }),
                    u("p384", {
                        type: "short",
                        prime: null,
                        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                        hash: o.sha384,
                        gRed: !1,
                        g: [
                            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
                        ],
                    }),
                    u("p521", {
                        type: "short",
                        prime: null,
                        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                        hash: o.sha512,
                        gRed: !1,
                        g: [
                            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
                        ],
                    }),
                    u("curve25519", {
                        type: "mont",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "76d06",
                        b: "1",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: o.sha256,
                        gRed: !1,
                        g: ["9"],
                    }),
                    u("ed25519", {
                        type: "edwards",
                        prime: "p25519",
                        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                        a: "-1",
                        c: "1",
                        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                        hash: o.sha256,
                        gRed: !1,
                        g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"],
                    });
                try {
                    n = r(1037);
                } catch (t) {
                    n = void 0;
                }
                u("secp256k1", {
                    type: "short",
                    prime: "k256",
                    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                    a: "0",
                    b: "7",
                    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                    h: "1",
                    hash: o.sha256,
                    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                    basis: [
                        { a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" },
                        { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" },
                    ],
                    gRed: !1,
                    g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", n],
                });
            },
            7954: (t, e, r) => {
                "use strict";
                var n = r(3785),
                    i = r(2156),
                    o = r(953),
                    s = r(5427),
                    a = r(9931),
                    f = o.assert,
                    u = r(1251),
                    c = r(611);
                function h(t) {
                    if (!(this instanceof h)) return new h(t);
                    "string" == typeof t && (f(Object.prototype.hasOwnProperty.call(s, t), "Unknown curve " + t), (t = s[t])),
                    t instanceof s.PresetCurve && (t = { curve: t }),
                        (this.curve = t.curve.curve),
                        (this.n = this.curve.n),
                        (this.nh = this.n.ushrn(1)),
                        (this.g = this.curve.g),
                        (this.g = t.curve.g),
                        this.g.precompute(t.curve.n.bitLength() + 1),
                        (this.hash = t.hash || t.curve.hash);
                }
                (t.exports = h),
                    (h.prototype.keyPair = function (t) {
                        return new u(this, t);
                    }),
                    (h.prototype.keyFromPrivate = function (t, e) {
                        return u.fromPrivate(this, t, e);
                    }),
                    (h.prototype.keyFromPublic = function (t, e) {
                        return u.fromPublic(this, t, e);
                    }),
                    (h.prototype.genKeyPair = function (t) {
                        t || (t = {});
                        for (
                            var e = new i({ hash: this.hash, pers: t.pers, persEnc: t.persEnc || "utf8", entropy: t.entropy || a(this.hash.hmacStrength), entropyEnc: (t.entropy && t.entropyEnc) || "utf8", nonce: this.n.toArray() }),
                                r = this.n.byteLength(),
                                o = this.n.sub(new n(2));
                            ;

                        ) {
                            var s = new n(e.generate(r));
                            if (!(s.cmp(o) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
                        }
                    }),
                    (h.prototype._truncateToN = function (t, e) {
                        var r = 8 * t.byteLength() - this.n.bitLength();
                        return r > 0 && (t = t.ushrn(r)), !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
                    }),
                    (h.prototype.sign = function (t, e, r, o) {
                        "object" == typeof r && ((o = r), (r = null)), o || (o = {}), (e = this.keyFromPrivate(e, r)), (t = this._truncateToN(new n(t, 16)));
                        for (
                            var s = this.n.byteLength(),
                                a = e.getPrivate().toArray("be", s),
                                f = t.toArray("be", s),
                                u = new i({ hash: this.hash, entropy: a, nonce: f, pers: o.pers, persEnc: o.persEnc || "utf8" }),
                                h = this.n.sub(new n(1)),
                                d = 0;
                            ;
                            d++
                        ) {
                            var l = o.k ? o.k(d) : new n(u.generate(this.n.byteLength()));
                            if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(h) >= 0)) {
                                var p = this.g.mul(l);
                                if (!p.isInfinity()) {
                                    var b = p.getX(),
                                        y = b.umod(this.n);
                                    if (0 !== y.cmpn(0)) {
                                        var m = l.invm(this.n).mul(y.mul(e.getPrivate()).iadd(t));
                                        if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                            var g = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                                            return o.canonical && m.cmp(this.nh) > 0 && ((m = this.n.sub(m)), (g ^= 1)), new c({ r: y, s: m, recoveryParam: g });
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    (h.prototype.verify = function (t, e, r, i) {
                        (t = this._truncateToN(new n(t, 16))), (r = this.keyFromPublic(r, i));
                        var o = (e = new c(e, "hex")).r,
                            s = e.s;
                        if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                        if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
                        var a,
                            f = s.invm(this.n),
                            u = f.mul(t).umod(this.n),
                            h = f.mul(o).umod(this.n);
                        return this.curve._maxwellTrick ? !(a = this.g.jmulAdd(u, r.getPublic(), h)).isInfinity() && a.eqXToP(o) : !(a = this.g.mulAdd(u, r.getPublic(), h)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o);
                    }),
                    (h.prototype.recoverPubKey = function (t, e, r, i) {
                        f((3 & r) === r, "The recovery param is more than two bits"), (e = new c(e, i));
                        var o = this.n,
                            s = new n(t),
                            a = e.r,
                            u = e.s,
                            h = 1 & r,
                            d = r >> 1;
                        if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d) throw new Error("Unable to find sencond key candinate");
                        a = d ? this.curve.pointFromX(a.add(this.curve.n), h) : this.curve.pointFromX(a, h);
                        var l = e.r.invm(o),
                            p = o.sub(s).mul(l).umod(o),
                            b = u.mul(l).umod(o);
                        return this.g.mulAdd(p, a, b);
                    }),
                    (h.prototype.getKeyRecoveryParam = function (t, e, r, n) {
                        if (null !== (e = new c(e, n)).recoveryParam) return e.recoveryParam;
                        for (var i = 0; i < 4; i++) {
                            var o;
                            try {
                                o = this.recoverPubKey(t, e, i);
                            } catch (t) {
                                continue;
                            }
                            if (o.eq(r)) return i;
                        }
                        throw new Error("Unable to find valid recovery factor");
                    });
            },
            1251: (t, e, r) => {
                "use strict";
                var n = r(3785),
                    i = r(953).assert;
                function o(t, e) {
                    (this.ec = t), (this.priv = null), (this.pub = null), e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc);
                }
                (t.exports = o),
                    (o.fromPublic = function (t, e, r) {
                        return e instanceof o ? e : new o(t, { pub: e, pubEnc: r });
                    }),
                    (o.fromPrivate = function (t, e, r) {
                        return e instanceof o ? e : new o(t, { priv: e, privEnc: r });
                    }),
                    (o.prototype.validate = function () {
                        var t = this.getPublic();
                        return t.isInfinity()
                            ? { result: !1, reason: "Invalid public key" }
                            : t.validate()
                                ? t.mul(this.ec.curve.n).isInfinity()
                                    ? { result: !0, reason: null }
                                    : { result: !1, reason: "Public key * N != O" }
                                : { result: !1, reason: "Public key is not a point" };
                    }),
                    (o.prototype.getPublic = function (t, e) {
                        return "string" == typeof t && ((e = t), (t = null)), this.pub || (this.pub = this.ec.g.mul(this.priv)), e ? this.pub.encode(e, t) : this.pub;
                    }),
                    (o.prototype.getPrivate = function (t) {
                        return "hex" === t ? this.priv.toString(16, 2) : this.priv;
                    }),
                    (o.prototype._importPrivate = function (t, e) {
                        (this.priv = new n(t, e || 16)), (this.priv = this.priv.umod(this.ec.curve.n));
                    }),
                    (o.prototype._importPublic = function (t, e) {
                        if (t.x || t.y)
                            return (
                                "mont" === this.ec.curve.type ? i(t.x, "Need x coordinate") : ("short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type) || i(t.x && t.y, "Need both x and y coordinate"),
                                    void (this.pub = this.ec.curve.point(t.x, t.y))
                            );
                        this.pub = this.ec.curve.decodePoint(t, e);
                    }),
                    (o.prototype.derive = function (t) {
                        return t.validate() || i(t.validate(), "public point not validated"), t.mul(this.priv).getX();
                    }),
                    (o.prototype.sign = function (t, e, r) {
                        return this.ec.sign(t, this, e, r);
                    }),
                    (o.prototype.verify = function (t, e) {
                        return this.ec.verify(t, e, this);
                    }),
                    (o.prototype.inspect = function () {
                        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
                    });
            },
            611: (t, e, r) => {
                "use strict";
                var n = r(3785),
                    i = r(953),
                    o = i.assert;
                function s(t, e) {
                    if (t instanceof s) return t;
                    this._importDER(t, e) ||
                    (o(t.r && t.s, "Signature without r or s"), (this.r = new n(t.r, 16)), (this.s = new n(t.s, 16)), void 0 === t.recoveryParam ? (this.recoveryParam = null) : (this.recoveryParam = t.recoveryParam));
                }
                function a() {
                    this.place = 0;
                }
                function f(t, e) {
                    var r = t[e.place++];
                    if (!(128 & r)) return r;
                    var n = 15 & r;
                    if (0 === n || n > 4) return !1;
                    for (var i = 0, o = 0, s = e.place; o < n; o++, s++) (i <<= 8), (i |= t[s]), (i >>>= 0);
                    return !(i <= 127) && ((e.place = s), i);
                }
                function u(t) {
                    for (var e = 0, r = t.length - 1; !t[e] && !(128 & t[e + 1]) && e < r; ) e++;
                    return 0 === e ? t : t.slice(e);
                }
                function c(t, e) {
                    if (e < 128) t.push(e);
                    else {
                        var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
                        for (t.push(128 | r); --r; ) t.push((e >>> (r << 3)) & 255);
                        t.push(e);
                    }
                }
                (t.exports = s),
                    (s.prototype._importDER = function (t, e) {
                        t = i.toArray(t, e);
                        var r = new a();
                        if (48 !== t[r.place++]) return !1;
                        var o = f(t, r);
                        if (!1 === o) return !1;
                        if (o + r.place !== t.length) return !1;
                        if (2 !== t[r.place++]) return !1;
                        var s = f(t, r);
                        if (!1 === s) return !1;
                        var u = t.slice(r.place, s + r.place);
                        if (((r.place += s), 2 !== t[r.place++])) return !1;
                        var c = f(t, r);
                        if (!1 === c) return !1;
                        if (t.length !== c + r.place) return !1;
                        var h = t.slice(r.place, c + r.place);
                        if (0 === u[0]) {
                            if (!(128 & u[1])) return !1;
                            u = u.slice(1);
                        }
                        if (0 === h[0]) {
                            if (!(128 & h[1])) return !1;
                            h = h.slice(1);
                        }
                        return (this.r = new n(u)), (this.s = new n(h)), (this.recoveryParam = null), !0;
                    }),
                    (s.prototype.toDER = function (t) {
                        var e = this.r.toArray(),
                            r = this.s.toArray();
                        for (128 & e[0] && (e = [0].concat(e)), 128 & r[0] && (r = [0].concat(r)), e = u(e), r = u(r); !(r[0] || 128 & r[1]); ) r = r.slice(1);
                        var n = [2];
                        c(n, e.length), (n = n.concat(e)).push(2), c(n, r.length);
                        var o = n.concat(r),
                            s = [48];
                        return c(s, o.length), (s = s.concat(o)), i.encode(s, t);
                    });
            },
            5980: (t, e, r) => {
                "use strict";
                var n = r(3715),
                    i = r(5427),
                    o = r(953),
                    s = o.assert,
                    a = o.parseBytes,
                    f = r(9087),
                    u = r(3622);
                function c(t) {
                    if ((s("ed25519" === t, "only tested with ed25519 so far"), !(this instanceof c))) return new c(t);
                    (t = i[t].curve), (this.curve = t), (this.g = t.g), this.g.precompute(t.n.bitLength() + 1), (this.pointClass = t.point().constructor), (this.encodingLength = Math.ceil(t.n.bitLength() / 8)), (this.hash = n.sha512);
                }
                (t.exports = c),
                    (c.prototype.sign = function (t, e) {
                        t = a(t);
                        var r = this.keyFromSecret(e),
                            n = this.hashInt(r.messagePrefix(), t),
                            i = this.g.mul(n),
                            o = this.encodePoint(i),
                            s = this.hashInt(o, r.pubBytes(), t).mul(r.priv()),
                            f = n.add(s).umod(this.curve.n);
                        return this.makeSignature({ R: i, S: f, Rencoded: o });
                    }),
                    (c.prototype.verify = function (t, e, r) {
                        (t = a(t)), (e = this.makeSignature(e));
                        var n = this.keyFromPublic(r),
                            i = this.hashInt(e.Rencoded(), n.pubBytes(), t),
                            o = this.g.mul(e.S());
                        return e.R().add(n.pub().mul(i)).eq(o);
                    }),
                    (c.prototype.hashInt = function () {
                        for (var t = this.hash(), e = 0; e < arguments.length; e++) t.update(arguments[e]);
                        return o.intFromLE(t.digest()).umod(this.curve.n);
                    }),
                    (c.prototype.keyFromPublic = function (t) {
                        return f.fromPublic(this, t);
                    }),
                    (c.prototype.keyFromSecret = function (t) {
                        return f.fromSecret(this, t);
                    }),
                    (c.prototype.makeSignature = function (t) {
                        return t instanceof u ? t : new u(this, t);
                    }),
                    (c.prototype.encodePoint = function (t) {
                        var e = t.getY().toArray("le", this.encodingLength);
                        return (e[this.encodingLength - 1] |= t.getX().isOdd() ? 128 : 0), e;
                    }),
                    (c.prototype.decodePoint = function (t) {
                        var e = (t = o.parseBytes(t)).length - 1,
                            r = t.slice(0, e).concat(-129 & t[e]),
                            n = 0 != (128 & t[e]),
                            i = o.intFromLE(r);
                        return this.curve.pointFromY(i, n);
                    }),
                    (c.prototype.encodeInt = function (t) {
                        return t.toArray("le", this.encodingLength);
                    }),
                    (c.prototype.decodeInt = function (t) {
                        return o.intFromLE(t);
                    }),
                    (c.prototype.isPoint = function (t) {
                        return t instanceof this.pointClass;
                    });
            },
            9087: (t, e, r) => {
                "use strict";
                var n = r(953),
                    i = n.assert,
                    o = n.parseBytes,
                    s = n.cachedProperty;
                function a(t, e) {
                    (this.eddsa = t), (this._secret = o(e.secret)), t.isPoint(e.pub) ? (this._pub = e.pub) : (this._pubBytes = o(e.pub));
                }
                (a.fromPublic = function (t, e) {
                    return e instanceof a ? e : new a(t, { pub: e });
                }),
                    (a.fromSecret = function (t, e) {
                        return e instanceof a ? e : new a(t, { secret: e });
                    }),
                    (a.prototype.secret = function () {
                        return this._secret;
                    }),
                    s(a, "pubBytes", function () {
                        return this.eddsa.encodePoint(this.pub());
                    }),
                    s(a, "pub", function () {
                        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
                    }),
                    s(a, "privBytes", function () {
                        var t = this.eddsa,
                            e = this.hash(),
                            r = t.encodingLength - 1,
                            n = e.slice(0, t.encodingLength);
                        return (n[0] &= 248), (n[r] &= 127), (n[r] |= 64), n;
                    }),
                    s(a, "priv", function () {
                        return this.eddsa.decodeInt(this.privBytes());
                    }),
                    s(a, "hash", function () {
                        return this.eddsa.hash().update(this.secret()).digest();
                    }),
                    s(a, "messagePrefix", function () {
                        return this.hash().slice(this.eddsa.encodingLength);
                    }),
                    (a.prototype.sign = function (t) {
                        return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(t, this);
                    }),
                    (a.prototype.verify = function (t, e) {
                        return this.eddsa.verify(t, e, this);
                    }),
                    (a.prototype.getSecret = function (t) {
                        return i(this._secret, "KeyPair is public only"), n.encode(this.secret(), t);
                    }),
                    (a.prototype.getPublic = function (t) {
                        return n.encode(this.pubBytes(), t);
                    }),
                    (t.exports = a);
            },
            3622: (t, e, r) => {
                "use strict";
                var n = r(3785),
                    i = r(953),
                    o = i.assert,
                    s = i.cachedProperty,
                    a = i.parseBytes;
                function f(t, e) {
                    (this.eddsa = t),
                    "object" != typeof e && (e = a(e)),
                    Array.isArray(e) && (e = { R: e.slice(0, t.encodingLength), S: e.slice(t.encodingLength) }),
                        o(e.R && e.S, "Signature without R or S"),
                    t.isPoint(e.R) && (this._R = e.R),
                    e.S instanceof n && (this._S = e.S),
                        (this._Rencoded = Array.isArray(e.R) ? e.R : e.Rencoded),
                        (this._Sencoded = Array.isArray(e.S) ? e.S : e.Sencoded);
                }
                s(f, "S", function () {
                    return this.eddsa.decodeInt(this.Sencoded());
                }),
                    s(f, "R", function () {
                        return this.eddsa.decodePoint(this.Rencoded());
                    }),
                    s(f, "Rencoded", function () {
                        return this.eddsa.encodePoint(this.R());
                    }),
                    s(f, "Sencoded", function () {
                        return this.eddsa.encodeInt(this.S());
                    }),
                    (f.prototype.toBytes = function () {
                        return this.Rencoded().concat(this.Sencoded());
                    }),
                    (f.prototype.toHex = function () {
                        return i.encode(this.toBytes(), "hex").toUpperCase();
                    }),
                    (t.exports = f);
            },
            1037: (t) => {
                t.exports = {
                    doubles: {
                        step: 4,
                        points: [
                            ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                            ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                            ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                            ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                            ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                            ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                            ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                            ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                            ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                            ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                            ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                            ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                            ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                            ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                            ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                            ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                            ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                            ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                            ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                            ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                            ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                            ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                            ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                            ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                            ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                            ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                            ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                            ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                            ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                            ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                            ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                            ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                            ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                            ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                            ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                            ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                            ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                            ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                            ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                            ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                            ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                            ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                            ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                            ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                            ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                            ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                            ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                            ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                            ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                            ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                            ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                            ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                            ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                            ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                            ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                            ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                            ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                            ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                            ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                            ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                            ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                            ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                            ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                            ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                            ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"],
                        ],
                    },
                    naf: {
                        wnd: 7,
                        points: [
                            ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                            ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                            ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                            ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                            ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                            ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                            ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                            ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                            ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                            ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                            ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                            ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                            ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                            ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                            ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                            ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                            ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                            ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                            ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                            ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                            ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                            ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                            ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                            ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                            ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                            ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                            ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                            ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                            ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                            ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                            ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                            ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                            ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                            ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                            ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                            ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                            ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                            ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                            ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                            ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                            ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                            ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                            ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                            ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                            ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                            ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                            ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                            ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                            ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                            ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                            ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                            ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                            ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                            ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                            ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                            ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                            ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                            ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                            ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                            ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                            ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                            ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                            ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                            ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                            ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                            ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                            ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                            ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                            ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                            ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                            ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                            ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                            ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                            ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                            ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                            ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                            ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                            ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                            ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                            ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                            ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                            ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                            ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                            ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                            ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                            ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                            ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                            ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                            ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                            ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                            ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                            ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                            ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                            ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                            ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                            ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                            ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                            ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                            ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                            ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                            ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                            ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                            ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                            ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                            ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                            ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                            ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                            ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                            ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                            ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                            ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                            ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                            ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                            ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                            ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                            ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                            ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                            ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                            ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                            ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                            ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                            ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                            ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                            ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                            ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                            ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                            ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"],
                        ],
                    },
                };
            },
            953: (t, e, r) => {
                "use strict";
                var n = e,
                    i = r(3785),
                    o = r(9746),
                    s = r(4504);
                (n.assert = o),
                    (n.toArray = s.toArray),
                    (n.zero2 = s.zero2),
                    (n.toHex = s.toHex),
                    (n.encode = s.encode),
                    (n.getNAF = function (t, e, r) {
                        var n = new Array(Math.max(t.bitLength(), r) + 1);
                        n.fill(0);
                        for (var i = 1 << (e + 1), o = t.clone(), s = 0; s < n.length; s++) {
                            var a,
                                f = o.andln(i - 1);
                            o.isOdd() ? ((a = f > (i >> 1) - 1 ? (i >> 1) - f : f), o.isubn(a)) : (a = 0), (n[s] = a), o.iushrn(1);
                        }
                        return n;
                    }),
                    (n.getJSF = function (t, e) {
                        var r = [[], []];
                        (t = t.clone()), (e = e.clone());
                        for (var n, i = 0, o = 0; t.cmpn(-i) > 0 || e.cmpn(-o) > 0; ) {
                            var s,
                                a,
                                f = (t.andln(3) + i) & 3,
                                u = (e.andln(3) + o) & 3;
                            3 === f && (f = -1),
                            3 === u && (u = -1),
                                (s = 0 == (1 & f) ? 0 : (3 != (n = (t.andln(7) + i) & 7) && 5 !== n) || 2 !== u ? f : -f),
                                r[0].push(s),
                                (a = 0 == (1 & u) ? 0 : (3 != (n = (e.andln(7) + o) & 7) && 5 !== n) || 2 !== f ? u : -u),
                                r[1].push(a),
                            2 * i === s + 1 && (i = 1 - i),
                            2 * o === a + 1 && (o = 1 - o),
                                t.iushrn(1),
                                e.iushrn(1);
                        }
                        return r;
                    }),
                    (n.cachedProperty = function (t, e, r) {
                        var n = "_" + e;
                        t.prototype[e] = function () {
                            return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
                        };
                    }),
                    (n.parseBytes = function (t) {
                        return "string" == typeof t ? n.toArray(t, "hex") : t;
                    }),
                    (n.intFromLE = function (t) {
                        return new i(t, "hex", "le");
                    });
            },
            3785: function (t, e, r) {
                !(function (t, e) {
                    "use strict";
                    function n(t, e) {
                        if (!t) throw new Error(e || "Assertion failed");
                    }
                    function i(t, e) {
                        t.super_ = e;
                        var r = function () {};
                        (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
                    }
                    function o(t, e, r) {
                        if (o.isBN(t)) return t;
                        (this.negative = 0), (this.words = null), (this.length = 0), (this.red = null), null !== t && (("le" !== e && "be" !== e) || ((r = e), (e = 10)), this._init(t || 0, e || 10, r || "be"));
                    }
                    var s;
                    "object" == typeof t ? (t.exports = o) : (e.BN = o), (o.BN = o), (o.wordSize = 26);
                    try {
                        s = "undefined" != typeof window && void 0 !== window.Buffer ? window.Buffer : r(5568).Buffer;
                    } catch (t) {}
                    function a(t, e) {
                        var r = t.charCodeAt(e);
                        return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : (r - 48) & 15;
                    }
                    function f(t, e, r) {
                        var n = a(t, r);
                        return r - 1 >= e && (n |= a(t, r - 1) << 4), n;
                    }
                    function u(t, e, r, n) {
                        for (var i = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
                            var a = t.charCodeAt(s) - 48;
                            (i *= n), (i += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a);
                        }
                        return i;
                    }
                    (o.isBN = function (t) {
                        return t instanceof o || (null !== t && "object" == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words));
                    }),
                        (o.max = function (t, e) {
                            return t.cmp(e) > 0 ? t : e;
                        }),
                        (o.min = function (t, e) {
                            return t.cmp(e) < 0 ? t : e;
                        }),
                        (o.prototype._init = function (t, e, r) {
                            if ("number" == typeof t) return this._initNumber(t, e, r);
                            if ("object" == typeof t) return this._initArray(t, e, r);
                            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
                            var i = 0;
                            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && (i++, (this.negative = 1)),
                            i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), "le" === r && this._initArray(this.toArray(), e, r)));
                        }),
                        (o.prototype._initNumber = function (t, e, r) {
                            t < 0 && ((this.negative = 1), (t = -t)),
                                t < 67108864
                                    ? ((this.words = [67108863 & t]), (this.length = 1))
                                    : t < 4503599627370496
                                        ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]), (this.length = 2))
                                        : (n(t < 9007199254740992), (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]), (this.length = 3)),
                            "le" === r && this._initArray(this.toArray(), e, r);
                        }),
                        (o.prototype._initArray = function (t, e, r) {
                            if ((n("number" == typeof t.length), t.length <= 0)) return (this.words = [0]), (this.length = 1), this;
                            (this.length = Math.ceil(t.length / 3)), (this.words = new Array(this.length));
                            for (var i = 0; i < this.length; i++) this.words[i] = 0;
                            var o,
                                s,
                                a = 0;
                            if ("be" === r)
                                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                                    (s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)), (this.words[o] |= (s << a) & 67108863), (this.words[o + 1] = (s >>> (26 - a)) & 67108863), (a += 24) >= 26 && ((a -= 26), o++);
                            else if ("le" === r)
                                for (i = 0, o = 0; i < t.length; i += 3)
                                    (s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)), (this.words[o] |= (s << a) & 67108863), (this.words[o + 1] = (s >>> (26 - a)) & 67108863), (a += 24) >= 26 && ((a -= 26), o++);
                            return this.strip();
                        }),
                        (o.prototype._parseHex = function (t, e, r) {
                            (this.length = Math.ceil((t.length - e) / 6)), (this.words = new Array(this.length));
                            for (var n = 0; n < this.length; n++) this.words[n] = 0;
                            var i,
                                o = 0,
                                s = 0;
                            if ("be" === r) for (n = t.length - 1; n >= e; n -= 2) (i = f(t, e, n) << o), (this.words[s] |= 67108863 & i), o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8);
                            else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) (i = f(t, e, n) << o), (this.words[s] |= 67108863 & i), o >= 18 ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26)) : (o += 8);
                            this.strip();
                        }),
                        (o.prototype._parseBase = function (t, e, r) {
                            (this.words = [0]), (this.length = 1);
                            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
                            n--, (i = (i / e) | 0);
                            for (var o = t.length - r, s = o % n, a = Math.min(o, o - s) + r, f = 0, c = r; c < a; c += n) (f = u(t, c, c + n, e)), this.imuln(i), this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
                            if (0 !== s) {
                                var h = 1;
                                for (f = u(t, c, t.length, e), c = 0; c < s; c++) h *= e;
                                this.imuln(h), this.words[0] + f < 67108864 ? (this.words[0] += f) : this._iaddn(f);
                            }
                            this.strip();
                        }),
                        (o.prototype.copy = function (t) {
                            t.words = new Array(this.length);
                            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
                            (t.length = this.length), (t.negative = this.negative), (t.red = this.red);
                        }),
                        (o.prototype.clone = function () {
                            var t = new o(null);
                            return this.copy(t), t;
                        }),
                        (o.prototype._expand = function (t) {
                            for (; this.length < t; ) this.words[this.length++] = 0;
                            return this;
                        }),
                        (o.prototype.strip = function () {
                            for (; this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
                            return this._normSign();
                        }),
                        (o.prototype._normSign = function () {
                            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
                        }),
                        (o.prototype.inspect = function () {
                            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
                        });
                    var c = [
                            "",
                            "0",
                            "00",
                            "000",
                            "0000",
                            "00000",
                            "000000",
                            "0000000",
                            "00000000",
                            "000000000",
                            "0000000000",
                            "00000000000",
                            "000000000000",
                            "0000000000000",
                            "00000000000000",
                            "000000000000000",
                            "0000000000000000",
                            "00000000000000000",
                            "000000000000000000",
                            "0000000000000000000",
                            "00000000000000000000",
                            "000000000000000000000",
                            "0000000000000000000000",
                            "00000000000000000000000",
                            "000000000000000000000000",
                            "0000000000000000000000000",
                        ],
                        h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                        d = [
                            0,
                            0,
                            33554432,
                            43046721,
                            16777216,
                            48828125,
                            60466176,
                            40353607,
                            16777216,
                            43046721,
                            1e7,
                            19487171,
                            35831808,
                            62748517,
                            7529536,
                            11390625,
                            16777216,
                            24137569,
                            34012224,
                            47045881,
                            64e6,
                            4084101,
                            5153632,
                            6436343,
                            7962624,
                            9765625,
                            11881376,
                            14348907,
                            17210368,
                            20511149,
                            243e5,
                            28629151,
                            33554432,
                            39135393,
                            45435424,
                            52521875,
                            60466176,
                        ];
                    function l(t, e, r) {
                        r.negative = e.negative ^ t.negative;
                        var n = (t.length + e.length) | 0;
                        (r.length = n), (n = (n - 1) | 0);
                        var i = 0 | t.words[0],
                            o = 0 | e.words[0],
                            s = i * o,
                            a = 67108863 & s,
                            f = (s / 67108864) | 0;
                        r.words[0] = a;
                        for (var u = 1; u < n; u++) {
                            for (var c = f >>> 26, h = 67108863 & f, d = Math.min(u, e.length - 1), l = Math.max(0, u - t.length + 1); l <= d; l++) {
                                var p = (u - l) | 0;
                                (c += ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[l]) + h) / 67108864) | 0), (h = 67108863 & s);
                            }
                            (r.words[u] = 0 | h), (f = 0 | c);
                        }
                        return 0 !== f ? (r.words[u] = 0 | f) : r.length--, r.strip();
                    }
                    (o.prototype.toString = function (t, e) {
                        var r;
                        if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
                            r = "";
                            for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                                var a = this.words[s],
                                    f = (16777215 & ((a << i) | o)).toString(16);
                                (r = 0 != (o = (a >>> (24 - i)) & 16777215) || s !== this.length - 1 ? c[6 - f.length] + f + r : f + r), (i += 2) >= 26 && ((i -= 26), s--);
                            }
                            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        }
                        if (t === (0 | t) && t >= 2 && t <= 36) {
                            var u = h[t],
                                l = d[t];
                            r = "";
                            var p = this.clone();
                            for (p.negative = 0; !p.isZero(); ) {
                                var b = p.modn(l).toString(t);
                                r = (p = p.idivn(l)).isZero() ? b + r : c[u - b.length] + b + r;
                            }
                            for (this.isZero() && (r = "0" + r); r.length % e != 0; ) r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        }
                        n(!1, "Base should be between 2 and 36");
                    }),
                        (o.prototype.toNumber = function () {
                            var t = this.words[0];
                            return (
                                2 === this.length
                                    ? (t += 67108864 * this.words[1])
                                    : 3 === this.length && 1 === this.words[2]
                                        ? (t += 4503599627370496 + 67108864 * this.words[1])
                                        : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"),
                                    0 !== this.negative ? -t : t
                            );
                        }),
                        (o.prototype.toJSON = function () {
                            return this.toString(16);
                        }),
                        (o.prototype.toBuffer = function (t, e) {
                            return n(void 0 !== s), this.toArrayLike(s, t, e);
                        }),
                        (o.prototype.toArray = function (t, e) {
                            return this.toArrayLike(Array, t, e);
                        }),
                        (o.prototype.toArrayLike = function (t, e, r) {
                            var i = this.byteLength(),
                                o = r || Math.max(1, i);
                            n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                            var s,
                                a,
                                f = "le" === e,
                                u = new t(o),
                                c = this.clone();
                            if (f) {
                                for (a = 0; !c.isZero(); a++) (s = c.andln(255)), c.iushrn(8), (u[a] = s);
                                for (; a < o; a++) u[a] = 0;
                            } else {
                                for (a = 0; a < o - i; a++) u[a] = 0;
                                for (a = 0; !c.isZero(); a++) (s = c.andln(255)), c.iushrn(8), (u[o - a - 1] = s);
                            }
                            return u;
                        }),
                        Math.clz32
                            ? (o.prototype._countBits = function (t) {
                                return 32 - Math.clz32(t);
                            })
                            : (o.prototype._countBits = function (t) {
                                var e = t,
                                    r = 0;
                                return e >= 4096 && ((r += 13), (e >>>= 13)), e >= 64 && ((r += 7), (e >>>= 7)), e >= 8 && ((r += 4), (e >>>= 4)), e >= 2 && ((r += 2), (e >>>= 2)), r + e;
                            }),
                        (o.prototype._zeroBits = function (t) {
                            if (0 === t) return 26;
                            var e = t,
                                r = 0;
                            return 0 == (8191 & e) && ((r += 13), (e >>>= 13)), 0 == (127 & e) && ((r += 7), (e >>>= 7)), 0 == (15 & e) && ((r += 4), (e >>>= 4)), 0 == (3 & e) && ((r += 2), (e >>>= 2)), 0 == (1 & e) && r++, r;
                        }),
                        (o.prototype.bitLength = function () {
                            var t = this.words[this.length - 1],
                                e = this._countBits(t);
                            return 26 * (this.length - 1) + e;
                        }),
                        (o.prototype.zeroBits = function () {
                            if (this.isZero()) return 0;
                            for (var t = 0, e = 0; e < this.length; e++) {
                                var r = this._zeroBits(this.words[e]);
                                if (((t += r), 26 !== r)) break;
                            }
                            return t;
                        }),
                        (o.prototype.byteLength = function () {
                            return Math.ceil(this.bitLength() / 8);
                        }),
                        (o.prototype.toTwos = function (t) {
                            return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
                        }),
                        (o.prototype.fromTwos = function (t) {
                            return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
                        }),
                        (o.prototype.isNeg = function () {
                            return 0 !== this.negative;
                        }),
                        (o.prototype.neg = function () {
                            return this.clone().ineg();
                        }),
                        (o.prototype.ineg = function () {
                            return this.isZero() || (this.negative ^= 1), this;
                        }),
                        (o.prototype.iuor = function (t) {
                            for (; this.length < t.length; ) this.words[this.length++] = 0;
                            for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
                            return this.strip();
                        }),
                        (o.prototype.ior = function (t) {
                            return n(0 == (this.negative | t.negative)), this.iuor(t);
                        }),
                        (o.prototype.or = function (t) {
                            return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
                        }),
                        (o.prototype.uor = function (t) {
                            return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
                        }),
                        (o.prototype.iuand = function (t) {
                            var e;
                            e = this.length > t.length ? t : this;
                            for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
                            return (this.length = e.length), this.strip();
                        }),
                        (o.prototype.iand = function (t) {
                            return n(0 == (this.negative | t.negative)), this.iuand(t);
                        }),
                        (o.prototype.and = function (t) {
                            return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
                        }),
                        (o.prototype.uand = function (t) {
                            return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
                        }),
                        (o.prototype.iuxor = function (t) {
                            var e, r;
                            this.length > t.length ? ((e = this), (r = t)) : ((e = t), (r = this));
                            for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
                            if (this !== e) for (; n < e.length; n++) this.words[n] = e.words[n];
                            return (this.length = e.length), this.strip();
                        }),
                        (o.prototype.ixor = function (t) {
                            return n(0 == (this.negative | t.negative)), this.iuxor(t);
                        }),
                        (o.prototype.xor = function (t) {
                            return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
                        }),
                        (o.prototype.uxor = function (t) {
                            return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
                        }),
                        (o.prototype.inotn = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e = 0 | Math.ceil(t / 26),
                                r = t % 26;
                            this._expand(e), r > 0 && e--;
                            for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
                            return r > 0 && (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))), this.strip();
                        }),
                        (o.prototype.notn = function (t) {
                            return this.clone().inotn(t);
                        }),
                        (o.prototype.setn = function (t, e) {
                            n("number" == typeof t && t >= 0);
                            var r = (t / 26) | 0,
                                i = t % 26;
                            return this._expand(r + 1), (this.words[r] = e ? this.words[r] | (1 << i) : this.words[r] & ~(1 << i)), this.strip();
                        }),
                        (o.prototype.iadd = function (t) {
                            var e, r, n;
                            if (0 !== this.negative && 0 === t.negative) return (this.negative = 0), (e = this.isub(t)), (this.negative ^= 1), this._normSign();
                            if (0 === this.negative && 0 !== t.negative) return (t.negative = 0), (e = this.isub(t)), (t.negative = 1), e._normSign();
                            this.length > t.length ? ((r = this), (n = t)) : ((r = t), (n = this));
                            for (var i = 0, o = 0; o < n.length; o++) (e = (0 | r.words[o]) + (0 | n.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26);
                            for (; 0 !== i && o < r.length; o++) (e = (0 | r.words[o]) + i), (this.words[o] = 67108863 & e), (i = e >>> 26);
                            if (((this.length = r.length), 0 !== i)) (this.words[this.length] = i), this.length++;
                            else if (r !== this) for (; o < r.length; o++) this.words[o] = r.words[o];
                            return this;
                        }),
                        (o.prototype.add = function (t) {
                            var e;
                            return 0 !== t.negative && 0 === this.negative
                                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                                : 0 === t.negative && 0 !== this.negative
                                    ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
                                    : this.length > t.length
                                        ? this.clone().iadd(t)
                                        : t.clone().iadd(this);
                        }),
                        (o.prototype.isub = function (t) {
                            if (0 !== t.negative) {
                                t.negative = 0;
                                var e = this.iadd(t);
                                return (t.negative = 1), e._normSign();
                            }
                            if (0 !== this.negative) return (this.negative = 0), this.iadd(t), (this.negative = 1), this._normSign();
                            var r,
                                n,
                                i = this.cmp(t);
                            if (0 === i) return (this.negative = 0), (this.length = 1), (this.words[0] = 0), this;
                            i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
                            for (var o = 0, s = 0; s < n.length; s++) (o = (e = (0 | r.words[s]) - (0 | n.words[s]) + o) >> 26), (this.words[s] = 67108863 & e);
                            for (; 0 !== o && s < r.length; s++) (o = (e = (0 | r.words[s]) + o) >> 26), (this.words[s] = 67108863 & e);
                            if (0 === o && s < r.length && r !== this) for (; s < r.length; s++) this.words[s] = r.words[s];
                            return (this.length = Math.max(this.length, s)), r !== this && (this.negative = 1), this.strip();
                        }),
                        (o.prototype.sub = function (t) {
                            return this.clone().isub(t);
                        });
                    var p = function (t, e, r) {
                        var n,
                            i,
                            o,
                            s = t.words,
                            a = e.words,
                            f = r.words,
                            u = 0,
                            c = 0 | s[0],
                            h = 8191 & c,
                            d = c >>> 13,
                            l = 0 | s[1],
                            p = 8191 & l,
                            b = l >>> 13,
                            y = 0 | s[2],
                            m = 8191 & y,
                            g = y >>> 13,
                            v = 0 | s[3],
                            w = 8191 & v,
                            M = v >>> 13,
                            _ = 0 | s[4],
                            A = 8191 & _,
                            S = _ >>> 13,
                            x = 0 | s[5],
                            E = 8191 & x,
                            k = x >>> 13,
                            I = 0 | s[6],
                            B = 8191 & I,
                            P = I >>> 13,
                            R = 0 | s[7],
                            U = 8191 & R,
                            O = R >>> 13,
                            T = 0 | s[8],
                            L = 8191 & T,
                            z = T >>> 13,
                            j = 0 | s[9],
                            N = 8191 & j,
                            q = j >>> 13,
                            C = 0 | a[0],
                            W = 8191 & C,
                            K = C >>> 13,
                            D = 0 | a[1],
                            F = 8191 & D,
                            $ = D >>> 13,
                            V = 0 | a[2],
                            Z = 8191 & V,
                            Y = V >>> 13,
                            H = 0 | a[3],
                            J = 8191 & H,
                            G = H >>> 13,
                            X = 0 | a[4],
                            Q = 8191 & X,
                            tt = X >>> 13,
                            et = 0 | a[5],
                            rt = 8191 & et,
                            nt = et >>> 13,
                            it = 0 | a[6],
                            ot = 8191 & it,
                            st = it >>> 13,
                            at = 0 | a[7],
                            ft = 8191 & at,
                            ut = at >>> 13,
                            ct = 0 | a[8],
                            ht = 8191 & ct,
                            dt = ct >>> 13,
                            lt = 0 | a[9],
                            pt = 8191 & lt,
                            bt = lt >>> 13;
                        (r.negative = t.negative ^ e.negative), (r.length = 19);
                        var yt = (((u + (n = Math.imul(h, W))) | 0) + ((8191 & (i = ((i = Math.imul(h, K)) + Math.imul(d, W)) | 0)) << 13)) | 0;
                        (u = ((((o = Math.imul(d, K)) + (i >>> 13)) | 0) + (yt >>> 26)) | 0), (yt &= 67108863), (n = Math.imul(p, W)), (i = ((i = Math.imul(p, K)) + Math.imul(b, W)) | 0), (o = Math.imul(b, K));
                        var mt = (((u + (n = (n + Math.imul(h, F)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, $)) | 0) + Math.imul(d, F)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, $)) | 0) + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
                            (mt &= 67108863),
                            (n = Math.imul(m, W)),
                            (i = ((i = Math.imul(m, K)) + Math.imul(g, W)) | 0),
                            (o = Math.imul(g, K)),
                            (n = (n + Math.imul(p, F)) | 0),
                            (i = ((i = (i + Math.imul(p, $)) | 0) + Math.imul(b, F)) | 0),
                            (o = (o + Math.imul(b, $)) | 0);
                        var gt = (((u + (n = (n + Math.imul(h, Z)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, Y)) | 0) + Math.imul(d, Z)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, Y)) | 0) + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
                            (gt &= 67108863),
                            (n = Math.imul(w, W)),
                            (i = ((i = Math.imul(w, K)) + Math.imul(M, W)) | 0),
                            (o = Math.imul(M, K)),
                            (n = (n + Math.imul(m, F)) | 0),
                            (i = ((i = (i + Math.imul(m, $)) | 0) + Math.imul(g, F)) | 0),
                            (o = (o + Math.imul(g, $)) | 0),
                            (n = (n + Math.imul(p, Z)) | 0),
                            (i = ((i = (i + Math.imul(p, Y)) | 0) + Math.imul(b, Z)) | 0),
                            (o = (o + Math.imul(b, Y)) | 0);
                        var vt = (((u + (n = (n + Math.imul(h, J)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, G)) | 0) + Math.imul(d, J)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, G)) | 0) + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
                            (vt &= 67108863),
                            (n = Math.imul(A, W)),
                            (i = ((i = Math.imul(A, K)) + Math.imul(S, W)) | 0),
                            (o = Math.imul(S, K)),
                            (n = (n + Math.imul(w, F)) | 0),
                            (i = ((i = (i + Math.imul(w, $)) | 0) + Math.imul(M, F)) | 0),
                            (o = (o + Math.imul(M, $)) | 0),
                            (n = (n + Math.imul(m, Z)) | 0),
                            (i = ((i = (i + Math.imul(m, Y)) | 0) + Math.imul(g, Z)) | 0),
                            (o = (o + Math.imul(g, Y)) | 0),
                            (n = (n + Math.imul(p, J)) | 0),
                            (i = ((i = (i + Math.imul(p, G)) | 0) + Math.imul(b, J)) | 0),
                            (o = (o + Math.imul(b, G)) | 0);
                        var wt = (((u + (n = (n + Math.imul(h, Q)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, tt)) | 0) + Math.imul(d, Q)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, tt)) | 0) + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
                            (wt &= 67108863),
                            (n = Math.imul(E, W)),
                            (i = ((i = Math.imul(E, K)) + Math.imul(k, W)) | 0),
                            (o = Math.imul(k, K)),
                            (n = (n + Math.imul(A, F)) | 0),
                            (i = ((i = (i + Math.imul(A, $)) | 0) + Math.imul(S, F)) | 0),
                            (o = (o + Math.imul(S, $)) | 0),
                            (n = (n + Math.imul(w, Z)) | 0),
                            (i = ((i = (i + Math.imul(w, Y)) | 0) + Math.imul(M, Z)) | 0),
                            (o = (o + Math.imul(M, Y)) | 0),
                            (n = (n + Math.imul(m, J)) | 0),
                            (i = ((i = (i + Math.imul(m, G)) | 0) + Math.imul(g, J)) | 0),
                            (o = (o + Math.imul(g, G)) | 0),
                            (n = (n + Math.imul(p, Q)) | 0),
                            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(b, Q)) | 0),
                            (o = (o + Math.imul(b, tt)) | 0);
                        var Mt = (((u + (n = (n + Math.imul(h, rt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, nt)) | 0) + Math.imul(d, rt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, nt)) | 0) + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
                            (Mt &= 67108863),
                            (n = Math.imul(B, W)),
                            (i = ((i = Math.imul(B, K)) + Math.imul(P, W)) | 0),
                            (o = Math.imul(P, K)),
                            (n = (n + Math.imul(E, F)) | 0),
                            (i = ((i = (i + Math.imul(E, $)) | 0) + Math.imul(k, F)) | 0),
                            (o = (o + Math.imul(k, $)) | 0),
                            (n = (n + Math.imul(A, Z)) | 0),
                            (i = ((i = (i + Math.imul(A, Y)) | 0) + Math.imul(S, Z)) | 0),
                            (o = (o + Math.imul(S, Y)) | 0),
                            (n = (n + Math.imul(w, J)) | 0),
                            (i = ((i = (i + Math.imul(w, G)) | 0) + Math.imul(M, J)) | 0),
                            (o = (o + Math.imul(M, G)) | 0),
                            (n = (n + Math.imul(m, Q)) | 0),
                            (i = ((i = (i + Math.imul(m, tt)) | 0) + Math.imul(g, Q)) | 0),
                            (o = (o + Math.imul(g, tt)) | 0),
                            (n = (n + Math.imul(p, rt)) | 0),
                            (i = ((i = (i + Math.imul(p, nt)) | 0) + Math.imul(b, rt)) | 0),
                            (o = (o + Math.imul(b, nt)) | 0);
                        var _t = (((u + (n = (n + Math.imul(h, ot)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, st)) | 0) + Math.imul(d, ot)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, st)) | 0) + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
                            (_t &= 67108863),
                            (n = Math.imul(U, W)),
                            (i = ((i = Math.imul(U, K)) + Math.imul(O, W)) | 0),
                            (o = Math.imul(O, K)),
                            (n = (n + Math.imul(B, F)) | 0),
                            (i = ((i = (i + Math.imul(B, $)) | 0) + Math.imul(P, F)) | 0),
                            (o = (o + Math.imul(P, $)) | 0),
                            (n = (n + Math.imul(E, Z)) | 0),
                            (i = ((i = (i + Math.imul(E, Y)) | 0) + Math.imul(k, Z)) | 0),
                            (o = (o + Math.imul(k, Y)) | 0),
                            (n = (n + Math.imul(A, J)) | 0),
                            (i = ((i = (i + Math.imul(A, G)) | 0) + Math.imul(S, J)) | 0),
                            (o = (o + Math.imul(S, G)) | 0),
                            (n = (n + Math.imul(w, Q)) | 0),
                            (i = ((i = (i + Math.imul(w, tt)) | 0) + Math.imul(M, Q)) | 0),
                            (o = (o + Math.imul(M, tt)) | 0),
                            (n = (n + Math.imul(m, rt)) | 0),
                            (i = ((i = (i + Math.imul(m, nt)) | 0) + Math.imul(g, rt)) | 0),
                            (o = (o + Math.imul(g, nt)) | 0),
                            (n = (n + Math.imul(p, ot)) | 0),
                            (i = ((i = (i + Math.imul(p, st)) | 0) + Math.imul(b, ot)) | 0),
                            (o = (o + Math.imul(b, st)) | 0);
                        var At = (((u + (n = (n + Math.imul(h, ft)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, ut)) | 0) + Math.imul(d, ft)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, ut)) | 0) + (i >>> 13)) | 0) + (At >>> 26)) | 0),
                            (At &= 67108863),
                            (n = Math.imul(L, W)),
                            (i = ((i = Math.imul(L, K)) + Math.imul(z, W)) | 0),
                            (o = Math.imul(z, K)),
                            (n = (n + Math.imul(U, F)) | 0),
                            (i = ((i = (i + Math.imul(U, $)) | 0) + Math.imul(O, F)) | 0),
                            (o = (o + Math.imul(O, $)) | 0),
                            (n = (n + Math.imul(B, Z)) | 0),
                            (i = ((i = (i + Math.imul(B, Y)) | 0) + Math.imul(P, Z)) | 0),
                            (o = (o + Math.imul(P, Y)) | 0),
                            (n = (n + Math.imul(E, J)) | 0),
                            (i = ((i = (i + Math.imul(E, G)) | 0) + Math.imul(k, J)) | 0),
                            (o = (o + Math.imul(k, G)) | 0),
                            (n = (n + Math.imul(A, Q)) | 0),
                            (i = ((i = (i + Math.imul(A, tt)) | 0) + Math.imul(S, Q)) | 0),
                            (o = (o + Math.imul(S, tt)) | 0),
                            (n = (n + Math.imul(w, rt)) | 0),
                            (i = ((i = (i + Math.imul(w, nt)) | 0) + Math.imul(M, rt)) | 0),
                            (o = (o + Math.imul(M, nt)) | 0),
                            (n = (n + Math.imul(m, ot)) | 0),
                            (i = ((i = (i + Math.imul(m, st)) | 0) + Math.imul(g, ot)) | 0),
                            (o = (o + Math.imul(g, st)) | 0),
                            (n = (n + Math.imul(p, ft)) | 0),
                            (i = ((i = (i + Math.imul(p, ut)) | 0) + Math.imul(b, ft)) | 0),
                            (o = (o + Math.imul(b, ut)) | 0);
                        var St = (((u + (n = (n + Math.imul(h, ht)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, dt)) | 0) + Math.imul(d, ht)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, dt)) | 0) + (i >>> 13)) | 0) + (St >>> 26)) | 0),
                            (St &= 67108863),
                            (n = Math.imul(N, W)),
                            (i = ((i = Math.imul(N, K)) + Math.imul(q, W)) | 0),
                            (o = Math.imul(q, K)),
                            (n = (n + Math.imul(L, F)) | 0),
                            (i = ((i = (i + Math.imul(L, $)) | 0) + Math.imul(z, F)) | 0),
                            (o = (o + Math.imul(z, $)) | 0),
                            (n = (n + Math.imul(U, Z)) | 0),
                            (i = ((i = (i + Math.imul(U, Y)) | 0) + Math.imul(O, Z)) | 0),
                            (o = (o + Math.imul(O, Y)) | 0),
                            (n = (n + Math.imul(B, J)) | 0),
                            (i = ((i = (i + Math.imul(B, G)) | 0) + Math.imul(P, J)) | 0),
                            (o = (o + Math.imul(P, G)) | 0),
                            (n = (n + Math.imul(E, Q)) | 0),
                            (i = ((i = (i + Math.imul(E, tt)) | 0) + Math.imul(k, Q)) | 0),
                            (o = (o + Math.imul(k, tt)) | 0),
                            (n = (n + Math.imul(A, rt)) | 0),
                            (i = ((i = (i + Math.imul(A, nt)) | 0) + Math.imul(S, rt)) | 0),
                            (o = (o + Math.imul(S, nt)) | 0),
                            (n = (n + Math.imul(w, ot)) | 0),
                            (i = ((i = (i + Math.imul(w, st)) | 0) + Math.imul(M, ot)) | 0),
                            (o = (o + Math.imul(M, st)) | 0),
                            (n = (n + Math.imul(m, ft)) | 0),
                            (i = ((i = (i + Math.imul(m, ut)) | 0) + Math.imul(g, ft)) | 0),
                            (o = (o + Math.imul(g, ut)) | 0),
                            (n = (n + Math.imul(p, ht)) | 0),
                            (i = ((i = (i + Math.imul(p, dt)) | 0) + Math.imul(b, ht)) | 0),
                            (o = (o + Math.imul(b, dt)) | 0);
                        var xt = (((u + (n = (n + Math.imul(h, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(h, bt)) | 0) + Math.imul(d, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(d, bt)) | 0) + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
                            (xt &= 67108863),
                            (n = Math.imul(N, F)),
                            (i = ((i = Math.imul(N, $)) + Math.imul(q, F)) | 0),
                            (o = Math.imul(q, $)),
                            (n = (n + Math.imul(L, Z)) | 0),
                            (i = ((i = (i + Math.imul(L, Y)) | 0) + Math.imul(z, Z)) | 0),
                            (o = (o + Math.imul(z, Y)) | 0),
                            (n = (n + Math.imul(U, J)) | 0),
                            (i = ((i = (i + Math.imul(U, G)) | 0) + Math.imul(O, J)) | 0),
                            (o = (o + Math.imul(O, G)) | 0),
                            (n = (n + Math.imul(B, Q)) | 0),
                            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(P, Q)) | 0),
                            (o = (o + Math.imul(P, tt)) | 0),
                            (n = (n + Math.imul(E, rt)) | 0),
                            (i = ((i = (i + Math.imul(E, nt)) | 0) + Math.imul(k, rt)) | 0),
                            (o = (o + Math.imul(k, nt)) | 0),
                            (n = (n + Math.imul(A, ot)) | 0),
                            (i = ((i = (i + Math.imul(A, st)) | 0) + Math.imul(S, ot)) | 0),
                            (o = (o + Math.imul(S, st)) | 0),
                            (n = (n + Math.imul(w, ft)) | 0),
                            (i = ((i = (i + Math.imul(w, ut)) | 0) + Math.imul(M, ft)) | 0),
                            (o = (o + Math.imul(M, ut)) | 0),
                            (n = (n + Math.imul(m, ht)) | 0),
                            (i = ((i = (i + Math.imul(m, dt)) | 0) + Math.imul(g, ht)) | 0),
                            (o = (o + Math.imul(g, dt)) | 0);
                        var Et = (((u + (n = (n + Math.imul(p, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(p, bt)) | 0) + Math.imul(b, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(b, bt)) | 0) + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
                            (Et &= 67108863),
                            (n = Math.imul(N, Z)),
                            (i = ((i = Math.imul(N, Y)) + Math.imul(q, Z)) | 0),
                            (o = Math.imul(q, Y)),
                            (n = (n + Math.imul(L, J)) | 0),
                            (i = ((i = (i + Math.imul(L, G)) | 0) + Math.imul(z, J)) | 0),
                            (o = (o + Math.imul(z, G)) | 0),
                            (n = (n + Math.imul(U, Q)) | 0),
                            (i = ((i = (i + Math.imul(U, tt)) | 0) + Math.imul(O, Q)) | 0),
                            (o = (o + Math.imul(O, tt)) | 0),
                            (n = (n + Math.imul(B, rt)) | 0),
                            (i = ((i = (i + Math.imul(B, nt)) | 0) + Math.imul(P, rt)) | 0),
                            (o = (o + Math.imul(P, nt)) | 0),
                            (n = (n + Math.imul(E, ot)) | 0),
                            (i = ((i = (i + Math.imul(E, st)) | 0) + Math.imul(k, ot)) | 0),
                            (o = (o + Math.imul(k, st)) | 0),
                            (n = (n + Math.imul(A, ft)) | 0),
                            (i = ((i = (i + Math.imul(A, ut)) | 0) + Math.imul(S, ft)) | 0),
                            (o = (o + Math.imul(S, ut)) | 0),
                            (n = (n + Math.imul(w, ht)) | 0),
                            (i = ((i = (i + Math.imul(w, dt)) | 0) + Math.imul(M, ht)) | 0),
                            (o = (o + Math.imul(M, dt)) | 0);
                        var kt = (((u + (n = (n + Math.imul(m, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(m, bt)) | 0) + Math.imul(g, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(g, bt)) | 0) + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
                            (kt &= 67108863),
                            (n = Math.imul(N, J)),
                            (i = ((i = Math.imul(N, G)) + Math.imul(q, J)) | 0),
                            (o = Math.imul(q, G)),
                            (n = (n + Math.imul(L, Q)) | 0),
                            (i = ((i = (i + Math.imul(L, tt)) | 0) + Math.imul(z, Q)) | 0),
                            (o = (o + Math.imul(z, tt)) | 0),
                            (n = (n + Math.imul(U, rt)) | 0),
                            (i = ((i = (i + Math.imul(U, nt)) | 0) + Math.imul(O, rt)) | 0),
                            (o = (o + Math.imul(O, nt)) | 0),
                            (n = (n + Math.imul(B, ot)) | 0),
                            (i = ((i = (i + Math.imul(B, st)) | 0) + Math.imul(P, ot)) | 0),
                            (o = (o + Math.imul(P, st)) | 0),
                            (n = (n + Math.imul(E, ft)) | 0),
                            (i = ((i = (i + Math.imul(E, ut)) | 0) + Math.imul(k, ft)) | 0),
                            (o = (o + Math.imul(k, ut)) | 0),
                            (n = (n + Math.imul(A, ht)) | 0),
                            (i = ((i = (i + Math.imul(A, dt)) | 0) + Math.imul(S, ht)) | 0),
                            (o = (o + Math.imul(S, dt)) | 0);
                        var It = (((u + (n = (n + Math.imul(w, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(w, bt)) | 0) + Math.imul(M, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(M, bt)) | 0) + (i >>> 13)) | 0) + (It >>> 26)) | 0),
                            (It &= 67108863),
                            (n = Math.imul(N, Q)),
                            (i = ((i = Math.imul(N, tt)) + Math.imul(q, Q)) | 0),
                            (o = Math.imul(q, tt)),
                            (n = (n + Math.imul(L, rt)) | 0),
                            (i = ((i = (i + Math.imul(L, nt)) | 0) + Math.imul(z, rt)) | 0),
                            (o = (o + Math.imul(z, nt)) | 0),
                            (n = (n + Math.imul(U, ot)) | 0),
                            (i = ((i = (i + Math.imul(U, st)) | 0) + Math.imul(O, ot)) | 0),
                            (o = (o + Math.imul(O, st)) | 0),
                            (n = (n + Math.imul(B, ft)) | 0),
                            (i = ((i = (i + Math.imul(B, ut)) | 0) + Math.imul(P, ft)) | 0),
                            (o = (o + Math.imul(P, ut)) | 0),
                            (n = (n + Math.imul(E, ht)) | 0),
                            (i = ((i = (i + Math.imul(E, dt)) | 0) + Math.imul(k, ht)) | 0),
                            (o = (o + Math.imul(k, dt)) | 0);
                        var Bt = (((u + (n = (n + Math.imul(A, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(A, bt)) | 0) + Math.imul(S, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(S, bt)) | 0) + (i >>> 13)) | 0) + (Bt >>> 26)) | 0),
                            (Bt &= 67108863),
                            (n = Math.imul(N, rt)),
                            (i = ((i = Math.imul(N, nt)) + Math.imul(q, rt)) | 0),
                            (o = Math.imul(q, nt)),
                            (n = (n + Math.imul(L, ot)) | 0),
                            (i = ((i = (i + Math.imul(L, st)) | 0) + Math.imul(z, ot)) | 0),
                            (o = (o + Math.imul(z, st)) | 0),
                            (n = (n + Math.imul(U, ft)) | 0),
                            (i = ((i = (i + Math.imul(U, ut)) | 0) + Math.imul(O, ft)) | 0),
                            (o = (o + Math.imul(O, ut)) | 0),
                            (n = (n + Math.imul(B, ht)) | 0),
                            (i = ((i = (i + Math.imul(B, dt)) | 0) + Math.imul(P, ht)) | 0),
                            (o = (o + Math.imul(P, dt)) | 0);
                        var Pt = (((u + (n = (n + Math.imul(E, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(E, bt)) | 0) + Math.imul(k, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(k, bt)) | 0) + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
                            (Pt &= 67108863),
                            (n = Math.imul(N, ot)),
                            (i = ((i = Math.imul(N, st)) + Math.imul(q, ot)) | 0),
                            (o = Math.imul(q, st)),
                            (n = (n + Math.imul(L, ft)) | 0),
                            (i = ((i = (i + Math.imul(L, ut)) | 0) + Math.imul(z, ft)) | 0),
                            (o = (o + Math.imul(z, ut)) | 0),
                            (n = (n + Math.imul(U, ht)) | 0),
                            (i = ((i = (i + Math.imul(U, dt)) | 0) + Math.imul(O, ht)) | 0),
                            (o = (o + Math.imul(O, dt)) | 0);
                        var Rt = (((u + (n = (n + Math.imul(B, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(B, bt)) | 0) + Math.imul(P, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(P, bt)) | 0) + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
                            (Rt &= 67108863),
                            (n = Math.imul(N, ft)),
                            (i = ((i = Math.imul(N, ut)) + Math.imul(q, ft)) | 0),
                            (o = Math.imul(q, ut)),
                            (n = (n + Math.imul(L, ht)) | 0),
                            (i = ((i = (i + Math.imul(L, dt)) | 0) + Math.imul(z, ht)) | 0),
                            (o = (o + Math.imul(z, dt)) | 0);
                        var Ut = (((u + (n = (n + Math.imul(U, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(U, bt)) | 0) + Math.imul(O, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(O, bt)) | 0) + (i >>> 13)) | 0) + (Ut >>> 26)) | 0), (Ut &= 67108863), (n = Math.imul(N, ht)), (i = ((i = Math.imul(N, dt)) + Math.imul(q, ht)) | 0), (o = Math.imul(q, dt));
                        var Ot = (((u + (n = (n + Math.imul(L, pt)) | 0)) | 0) + ((8191 & (i = ((i = (i + Math.imul(L, bt)) | 0) + Math.imul(z, pt)) | 0)) << 13)) | 0;
                        (u = ((((o = (o + Math.imul(z, bt)) | 0) + (i >>> 13)) | 0) + (Ot >>> 26)) | 0), (Ot &= 67108863);
                        var Tt = (((u + (n = Math.imul(N, pt))) | 0) + ((8191 & (i = ((i = Math.imul(N, bt)) + Math.imul(q, pt)) | 0)) << 13)) | 0;
                        return (
                            (u = ((((o = Math.imul(q, bt)) + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
                                (Tt &= 67108863),
                                (f[0] = yt),
                                (f[1] = mt),
                                (f[2] = gt),
                                (f[3] = vt),
                                (f[4] = wt),
                                (f[5] = Mt),
                                (f[6] = _t),
                                (f[7] = At),
                                (f[8] = St),
                                (f[9] = xt),
                                (f[10] = Et),
                                (f[11] = kt),
                                (f[12] = It),
                                (f[13] = Bt),
                                (f[14] = Pt),
                                (f[15] = Rt),
                                (f[16] = Ut),
                                (f[17] = Ot),
                                (f[18] = Tt),
                            0 !== u && ((f[19] = u), r.length++),
                                r
                        );
                    };
                    function b(t, e, r) {
                        return new y().mulp(t, e, r);
                    }
                    function y(t, e) {
                        (this.x = t), (this.y = e);
                    }
                    Math.imul || (p = l),
                        (o.prototype.mulTo = function (t, e) {
                            var r,
                                n = this.length + t.length;
                            return (
                                (r =
                                    10 === this.length && 10 === t.length
                                        ? p(this, t, e)
                                        : n < 63
                                            ? l(this, t, e)
                                            : n < 1024
                                                ? (function (t, e, r) {
                                                    (r.negative = e.negative ^ t.negative), (r.length = t.length + e.length);
                                                    for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                                                        var s = i;
                                                        i = 0;
                                                        for (var a = 67108863 & n, f = Math.min(o, e.length - 1), u = Math.max(0, o - t.length + 1); u <= f; u++) {
                                                            var c = o - u,
                                                                h = (0 | t.words[c]) * (0 | e.words[u]),
                                                                d = 67108863 & h;
                                                            (a = 67108863 & (d = (d + a) | 0)), (i += (s = ((s = (s + ((h / 67108864) | 0)) | 0) + (d >>> 26)) | 0) >>> 26), (s &= 67108863);
                                                        }
                                                        (r.words[o] = a), (n = s), (s = i);
                                                    }
                                                    return 0 !== n ? (r.words[o] = n) : r.length--, r.strip();
                                                })(this, t, e)
                                                : b(this, t, e)),
                                    r
                            );
                        }),
                        (y.prototype.makeRBT = function (t) {
                            for (var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
                            return e;
                        }),
                        (y.prototype.revBin = function (t, e, r) {
                            if (0 === t || t === r - 1) return t;
                            for (var n = 0, i = 0; i < e; i++) (n |= (1 & t) << (e - i - 1)), (t >>= 1);
                            return n;
                        }),
                        (y.prototype.permute = function (t, e, r, n, i, o) {
                            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
                        }),
                        (y.prototype.transform = function (t, e, r, n, i, o) {
                            this.permute(o, t, e, r, n, i);
                            for (var s = 1; s < i; s <<= 1)
                                for (var a = s << 1, f = Math.cos((2 * Math.PI) / a), u = Math.sin((2 * Math.PI) / a), c = 0; c < i; c += a)
                                    for (var h = f, d = u, l = 0; l < s; l++) {
                                        var p = r[c + l],
                                            b = n[c + l],
                                            y = r[c + l + s],
                                            m = n[c + l + s],
                                            g = h * y - d * m;
                                        (m = h * m + d * y), (y = g), (r[c + l] = p + y), (n[c + l] = b + m), (r[c + l + s] = p - y), (n[c + l + s] = b - m), l !== a && ((g = f * h - u * d), (d = f * d + u * h), (h = g));
                                    }
                        }),
                        (y.prototype.guessLen13b = function (t, e) {
                            var r = 1 | Math.max(e, t),
                                n = 1 & r,
                                i = 0;
                            for (r = (r / 2) | 0; r; r >>>= 1) i++;
                            return 1 << (i + 1 + n);
                        }),
                        (y.prototype.conjugate = function (t, e, r) {
                            if (!(r <= 1))
                                for (var n = 0; n < r / 2; n++) {
                                    var i = t[n];
                                    (t[n] = t[r - n - 1]), (t[r - n - 1] = i), (i = e[n]), (e[n] = -e[r - n - 1]), (e[r - n - 1] = -i);
                                }
                        }),
                        (y.prototype.normalize13b = function (t, e) {
                            for (var r = 0, n = 0; n < e / 2; n++) {
                                var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
                                (t[n] = 67108863 & i), (r = i < 67108864 ? 0 : (i / 67108864) | 0);
                            }
                            return t;
                        }),
                        (y.prototype.convert13b = function (t, e, r, i) {
                            for (var o = 0, s = 0; s < e; s++) (o += 0 | t[s]), (r[2 * s] = 8191 & o), (o >>>= 13), (r[2 * s + 1] = 8191 & o), (o >>>= 13);
                            for (s = 2 * e; s < i; ++s) r[s] = 0;
                            n(0 === o), n(0 == (-8192 & o));
                        }),
                        (y.prototype.stub = function (t) {
                            for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                            return e;
                        }),
                        (y.prototype.mulp = function (t, e, r) {
                            var n = 2 * this.guessLen13b(t.length, e.length),
                                i = this.makeRBT(n),
                                o = this.stub(n),
                                s = new Array(n),
                                a = new Array(n),
                                f = new Array(n),
                                u = new Array(n),
                                c = new Array(n),
                                h = new Array(n),
                                d = r.words;
                            (d.length = n), this.convert13b(t.words, t.length, s, n), this.convert13b(e.words, e.length, u, n), this.transform(s, o, a, f, n, i), this.transform(u, o, c, h, n, i);
                            for (var l = 0; l < n; l++) {
                                var p = a[l] * c[l] - f[l] * h[l];
                                (f[l] = a[l] * h[l] + f[l] * c[l]), (a[l] = p);
                            }
                            return this.conjugate(a, f, n), this.transform(a, f, d, o, n, i), this.conjugate(d, o, n), this.normalize13b(d, n), (r.negative = t.negative ^ e.negative), (r.length = t.length + e.length), r.strip();
                        }),
                        (o.prototype.mul = function (t) {
                            var e = new o(null);
                            return (e.words = new Array(this.length + t.length)), this.mulTo(t, e);
                        }),
                        (o.prototype.mulf = function (t) {
                            var e = new o(null);
                            return (e.words = new Array(this.length + t.length)), b(this, t, e);
                        }),
                        (o.prototype.imul = function (t) {
                            return this.clone().mulTo(t, this);
                        }),
                        (o.prototype.imuln = function (t) {
                            n("number" == typeof t), n(t < 67108864);
                            for (var e = 0, r = 0; r < this.length; r++) {
                                var i = (0 | this.words[r]) * t,
                                    o = (67108863 & i) + (67108863 & e);
                                (e >>= 26), (e += (i / 67108864) | 0), (e += o >>> 26), (this.words[r] = 67108863 & o);
                            }
                            return 0 !== e && ((this.words[r] = e), this.length++), this;
                        }),
                        (o.prototype.muln = function (t) {
                            return this.clone().imuln(t);
                        }),
                        (o.prototype.sqr = function () {
                            return this.mul(this);
                        }),
                        (o.prototype.isqr = function () {
                            return this.imul(this.clone());
                        }),
                        (o.prototype.pow = function (t) {
                            var e = (function (t) {
                                for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
                                    var n = (r / 26) | 0,
                                        i = r % 26;
                                    e[r] = (t.words[n] & (1 << i)) >>> i;
                                }
                                return e;
                            })(t);
                            if (0 === e.length) return new o(1);
                            for (var r = this, n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr());
                            if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
                            return r;
                        }),
                        (o.prototype.iushln = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e,
                                r = t % 26,
                                i = (t - r) / 26,
                                o = (67108863 >>> (26 - r)) << (26 - r);
                            if (0 !== r) {
                                var s = 0;
                                for (e = 0; e < this.length; e++) {
                                    var a = this.words[e] & o,
                                        f = ((0 | this.words[e]) - a) << r;
                                    (this.words[e] = f | s), (s = a >>> (26 - r));
                                }
                                s && ((this.words[e] = s), this.length++);
                            }
                            if (0 !== i) {
                                for (e = this.length - 1; e >= 0; e--) this.words[e + i] = this.words[e];
                                for (e = 0; e < i; e++) this.words[e] = 0;
                                this.length += i;
                            }
                            return this.strip();
                        }),
                        (o.prototype.ishln = function (t) {
                            return n(0 === this.negative), this.iushln(t);
                        }),
                        (o.prototype.iushrn = function (t, e, r) {
                            var i;
                            n("number" == typeof t && t >= 0), (i = e ? (e - (e % 26)) / 26 : 0);
                            var o = t % 26,
                                s = Math.min((t - o) / 26, this.length),
                                a = 67108863 ^ ((67108863 >>> o) << o),
                                f = r;
                            if (((i -= s), (i = Math.max(0, i)), f)) {
                                for (var u = 0; u < s; u++) f.words[u] = this.words[u];
                                f.length = s;
                            }
                            if (0 === s);
                            else if (this.length > s) for (this.length -= s, u = 0; u < this.length; u++) this.words[u] = this.words[u + s];
                            else (this.words[0] = 0), (this.length = 1);
                            var c = 0;
                            for (u = this.length - 1; u >= 0 && (0 !== c || u >= i); u--) {
                                var h = 0 | this.words[u];
                                (this.words[u] = (c << (26 - o)) | (h >>> o)), (c = h & a);
                            }
                            return f && 0 !== c && (f.words[f.length++] = c), 0 === this.length && ((this.words[0] = 0), (this.length = 1)), this.strip();
                        }),
                        (o.prototype.ishrn = function (t, e, r) {
                            return n(0 === this.negative), this.iushrn(t, e, r);
                        }),
                        (o.prototype.shln = function (t) {
                            return this.clone().ishln(t);
                        }),
                        (o.prototype.ushln = function (t) {
                            return this.clone().iushln(t);
                        }),
                        (o.prototype.shrn = function (t) {
                            return this.clone().ishrn(t);
                        }),
                        (o.prototype.ushrn = function (t) {
                            return this.clone().iushrn(t);
                        }),
                        (o.prototype.testn = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e = t % 26,
                                r = (t - e) / 26,
                                i = 1 << e;
                            return !(this.length <= r || !(this.words[r] & i));
                        }),
                        (o.prototype.imaskn = function (t) {
                            n("number" == typeof t && t >= 0);
                            var e = t % 26,
                                r = (t - e) / 26;
                            if ((n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r)) return this;
                            if ((0 !== e && r++, (this.length = Math.min(r, this.length)), 0 !== e)) {
                                var i = 67108863 ^ ((67108863 >>> e) << e);
                                this.words[this.length - 1] &= i;
                            }
                            return this.strip();
                        }),
                        (o.prototype.maskn = function (t) {
                            return this.clone().imaskn(t);
                        }),
                        (o.prototype.iaddn = function (t) {
                            return (
                                n("number" == typeof t),
                                    n(t < 67108864),
                                    t < 0
                                        ? this.isubn(-t)
                                        : 0 !== this.negative
                                            ? 1 === this.length && (0 | this.words[0]) < t
                                                ? ((this.words[0] = t - (0 | this.words[0])), (this.negative = 0), this)
                                                : ((this.negative = 0), this.isubn(t), (this.negative = 1), this)
                                            : this._iaddn(t)
                            );
                        }),
                        (o.prototype._iaddn = function (t) {
                            this.words[0] += t;
                            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) (this.words[e] -= 67108864), e === this.length - 1 ? (this.words[e + 1] = 1) : this.words[e + 1]++;
                            return (this.length = Math.max(this.length, e + 1)), this;
                        }),
                        (o.prototype.isubn = function (t) {
                            if ((n("number" == typeof t), n(t < 67108864), t < 0)) return this.iaddn(-t);
                            if (0 !== this.negative) return (this.negative = 0), this.iaddn(t), (this.negative = 1), this;
                            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0)) (this.words[0] = -this.words[0]), (this.negative = 1);
                            else for (var e = 0; e < this.length && this.words[e] < 0; e++) (this.words[e] += 67108864), (this.words[e + 1] -= 1);
                            return this.strip();
                        }),
                        (o.prototype.addn = function (t) {
                            return this.clone().iaddn(t);
                        }),
                        (o.prototype.subn = function (t) {
                            return this.clone().isubn(t);
                        }),
                        (o.prototype.iabs = function () {
                            return (this.negative = 0), this;
                        }),
                        (o.prototype.abs = function () {
                            return this.clone().iabs();
                        }),
                        (o.prototype._ishlnsubmul = function (t, e, r) {
                            var i,
                                o,
                                s = t.length + r;
                            this._expand(s);
                            var a = 0;
                            for (i = 0; i < t.length; i++) {
                                o = (0 | this.words[i + r]) + a;
                                var f = (0 | t.words[i]) * e;
                                (a = ((o -= 67108863 & f) >> 26) - ((f / 67108864) | 0)), (this.words[i + r] = 67108863 & o);
                            }
                            for (; i < this.length - r; i++) (a = (o = (0 | this.words[i + r]) + a) >> 26), (this.words[i + r] = 67108863 & o);
                            if (0 === a) return this.strip();
                            for (n(-1 === a), a = 0, i = 0; i < this.length; i++) (a = (o = -(0 | this.words[i]) + a) >> 26), (this.words[i] = 67108863 & o);
                            return (this.negative = 1), this.strip();
                        }),
                        (o.prototype._wordDiv = function (t, e) {
                            var r = (this.length, t.length),
                                n = this.clone(),
                                i = t,
                                s = 0 | i.words[i.length - 1];
                            0 != (r = 26 - this._countBits(s)) && ((i = i.ushln(r)), n.iushln(r), (s = 0 | i.words[i.length - 1]));
                            var a,
                                f = n.length - i.length;
                            if ("mod" !== e) {
                                ((a = new o(null)).length = f + 1), (a.words = new Array(a.length));
                                for (var u = 0; u < a.length; u++) a.words[u] = 0;
                            }
                            var c = n.clone()._ishlnsubmul(i, 1, f);
                            0 === c.negative && ((n = c), a && (a.words[f] = 1));
                            for (var h = f - 1; h >= 0; h--) {
                                var d = 67108864 * (0 | n.words[i.length + h]) + (0 | n.words[i.length + h - 1]);
                                for (d = Math.min((d / s) | 0, 67108863), n._ishlnsubmul(i, d, h); 0 !== n.negative; ) d--, (n.negative = 0), n._ishlnsubmul(i, 1, h), n.isZero() || (n.negative ^= 1);
                                a && (a.words[h] = d);
                            }
                            return a && a.strip(), n.strip(), "div" !== e && 0 !== r && n.iushrn(r), { div: a || null, mod: n };
                        }),
                        (o.prototype.divmod = function (t, e, r) {
                            return (
                                n(!t.isZero()),
                                    this.isZero()
                                        ? { div: new o(0), mod: new o(0) }
                                        : 0 !== this.negative && 0 === t.negative
                                            ? ((a = this.neg().divmod(t, e)), "mod" !== e && (i = a.div.neg()), "div" !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)), { div: i, mod: s })
                                            : 0 === this.negative && 0 !== t.negative
                                                ? ((a = this.divmod(t.neg(), e)), "mod" !== e && (i = a.div.neg()), { div: i, mod: a.mod })
                                                : 0 != (this.negative & t.negative)
                                                    ? ((a = this.neg().divmod(t.neg(), e)), "div" !== e && ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)), { div: a.div, mod: s })
                                                    : t.length > this.length || this.cmp(t) < 0
                                                        ? { div: new o(0), mod: this }
                                                        : 1 === t.length
                                                            ? "div" === e
                                                                ? { div: this.divn(t.words[0]), mod: null }
                                                                : "mod" === e
                                                                    ? { div: null, mod: new o(this.modn(t.words[0])) }
                                                                    : { div: this.divn(t.words[0]), mod: new o(this.modn(t.words[0])) }
                                                            : this._wordDiv(t, e)
                            );
                            var i, s, a;
                        }),
                        (o.prototype.div = function (t) {
                            return this.divmod(t, "div", !1).div;
                        }),
                        (o.prototype.mod = function (t) {
                            return this.divmod(t, "mod", !1).mod;
                        }),
                        (o.prototype.umod = function (t) {
                            return this.divmod(t, "mod", !0).mod;
                        }),
                        (o.prototype.divRound = function (t) {
                            var e = this.divmod(t);
                            if (e.mod.isZero()) return e.div;
                            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                                n = t.ushrn(1),
                                i = t.andln(1),
                                o = r.cmp(n);
                            return o < 0 || (1 === i && 0 === o) ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
                        }),
                        (o.prototype.modn = function (t) {
                            n(t <= 67108863);
                            for (var e = (1 << 26) % t, r = 0, i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
                            return r;
                        }),
                        (o.prototype.idivn = function (t) {
                            n(t <= 67108863);
                            for (var e = 0, r = this.length - 1; r >= 0; r--) {
                                var i = (0 | this.words[r]) + 67108864 * e;
                                (this.words[r] = (i / t) | 0), (e = i % t);
                            }
                            return this.strip();
                        }),
                        (o.prototype.divn = function (t) {
                            return this.clone().idivn(t);
                        }),
                        (o.prototype.egcd = function (t) {
                            n(0 === t.negative), n(!t.isZero());
                            var e = this,
                                r = t.clone();
                            e = 0 !== e.negative ? e.umod(t) : e.clone();
                            for (var i = new o(1), s = new o(0), a = new o(0), f = new o(1), u = 0; e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++u;
                            for (var c = r.clone(), h = e.clone(); !e.isZero(); ) {
                                for (var d = 0, l = 1; 0 == (e.words[0] & l) && d < 26; ++d, l <<= 1);
                                if (d > 0) for (e.iushrn(d); d-- > 0; ) (i.isOdd() || s.isOdd()) && (i.iadd(c), s.isub(h)), i.iushrn(1), s.iushrn(1);
                                for (var p = 0, b = 1; 0 == (r.words[0] & b) && p < 26; ++p, b <<= 1);
                                if (p > 0) for (r.iushrn(p); p-- > 0; ) (a.isOdd() || f.isOdd()) && (a.iadd(c), f.isub(h)), a.iushrn(1), f.iushrn(1);
                                e.cmp(r) >= 0 ? (e.isub(r), i.isub(a), s.isub(f)) : (r.isub(e), a.isub(i), f.isub(s));
                            }
                            return { a, b: f, gcd: r.iushln(u) };
                        }),
                        (o.prototype._invmp = function (t) {
                            n(0 === t.negative), n(!t.isZero());
                            var e = this,
                                r = t.clone();
                            e = 0 !== e.negative ? e.umod(t) : e.clone();
                            for (var i, s = new o(1), a = new o(0), f = r.clone(); e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
                                for (var u = 0, c = 1; 0 == (e.words[0] & c) && u < 26; ++u, c <<= 1);
                                if (u > 0) for (e.iushrn(u); u-- > 0; ) s.isOdd() && s.iadd(f), s.iushrn(1);
                                for (var h = 0, d = 1; 0 == (r.words[0] & d) && h < 26; ++h, d <<= 1);
                                if (h > 0) for (r.iushrn(h); h-- > 0; ) a.isOdd() && a.iadd(f), a.iushrn(1);
                                e.cmp(r) >= 0 ? (e.isub(r), s.isub(a)) : (r.isub(e), a.isub(s));
                            }
                            return (i = 0 === e.cmpn(1) ? s : a).cmpn(0) < 0 && i.iadd(t), i;
                        }),
                        (o.prototype.gcd = function (t) {
                            if (this.isZero()) return t.abs();
                            if (t.isZero()) return this.abs();
                            var e = this.clone(),
                                r = t.clone();
                            (e.negative = 0), (r.negative = 0);
                            for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
                            for (;;) {
                                for (; e.isEven(); ) e.iushrn(1);
                                for (; r.isEven(); ) r.iushrn(1);
                                var i = e.cmp(r);
                                if (i < 0) {
                                    var o = e;
                                    (e = r), (r = o);
                                } else if (0 === i || 0 === r.cmpn(1)) break;
                                e.isub(r);
                            }
                            return r.iushln(n);
                        }),
                        (o.prototype.invm = function (t) {
                            return this.egcd(t).a.umod(t);
                        }),
                        (o.prototype.isEven = function () {
                            return 0 == (1 & this.words[0]);
                        }),
                        (o.prototype.isOdd = function () {
                            return 1 == (1 & this.words[0]);
                        }),
                        (o.prototype.andln = function (t) {
                            return this.words[0] & t;
                        }),
                        (o.prototype.bincn = function (t) {
                            n("number" == typeof t);
                            var e = t % 26,
                                r = (t - e) / 26,
                                i = 1 << e;
                            if (this.length <= r) return this._expand(r + 1), (this.words[r] |= i), this;
                            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                                var a = 0 | this.words[s];
                                (o = (a += o) >>> 26), (a &= 67108863), (this.words[s] = a);
                            }
                            return 0 !== o && ((this.words[s] = o), this.length++), this;
                        }),
                        (o.prototype.isZero = function () {
                            return 1 === this.length && 0 === this.words[0];
                        }),
                        (o.prototype.cmpn = function (t) {
                            var e,
                                r = t < 0;
                            if (0 !== this.negative && !r) return -1;
                            if (0 === this.negative && r) return 1;
                            if ((this.strip(), this.length > 1)) e = 1;
                            else {
                                r && (t = -t), n(t <= 67108863, "Number is too big");
                                var i = 0 | this.words[0];
                                e = i === t ? 0 : i < t ? -1 : 1;
                            }
                            return 0 !== this.negative ? 0 | -e : e;
                        }),
                        (o.prototype.cmp = function (t) {
                            if (0 !== this.negative && 0 === t.negative) return -1;
                            if (0 === this.negative && 0 !== t.negative) return 1;
                            var e = this.ucmp(t);
                            return 0 !== this.negative ? 0 | -e : e;
                        }),
                        (o.prototype.ucmp = function (t) {
                            if (this.length > t.length) return 1;
                            if (this.length < t.length) return -1;
                            for (var e = 0, r = this.length - 1; r >= 0; r--) {
                                var n = 0 | this.words[r],
                                    i = 0 | t.words[r];
                                if (n !== i) {
                                    n < i ? (e = -1) : n > i && (e = 1);
                                    break;
                                }
                            }
                            return e;
                        }),
                        (o.prototype.gtn = function (t) {
                            return 1 === this.cmpn(t);
                        }),
                        (o.prototype.gt = function (t) {
                            return 1 === this.cmp(t);
                        }),
                        (o.prototype.gten = function (t) {
                            return this.cmpn(t) >= 0;
                        }),
                        (o.prototype.gte = function (t) {
                            return this.cmp(t) >= 0;
                        }),
                        (o.prototype.ltn = function (t) {
                            return -1 === this.cmpn(t);
                        }),
                        (o.prototype.lt = function (t) {
                            return -1 === this.cmp(t);
                        }),
                        (o.prototype.lten = function (t) {
                            return this.cmpn(t) <= 0;
                        }),
                        (o.prototype.lte = function (t) {
                            return this.cmp(t) <= 0;
                        }),
                        (o.prototype.eqn = function (t) {
                            return 0 === this.cmpn(t);
                        }),
                        (o.prototype.eq = function (t) {
                            return 0 === this.cmp(t);
                        }),
                        (o.red = function (t) {
                            return new A(t);
                        }),
                        (o.prototype.toRed = function (t) {
                            return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), t.convertTo(this)._forceRed(t);
                        }),
                        (o.prototype.fromRed = function () {
                            return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
                        }),
                        (o.prototype._forceRed = function (t) {
                            return (this.red = t), this;
                        }),
                        (o.prototype.forceRed = function (t) {
                            return n(!this.red, "Already a number in reduction context"), this._forceRed(t);
                        }),
                        (o.prototype.redAdd = function (t) {
                            return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
                        }),
                        (o.prototype.redIAdd = function (t) {
                            return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
                        }),
                        (o.prototype.redSub = function (t) {
                            return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
                        }),
                        (o.prototype.redISub = function (t) {
                            return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
                        }),
                        (o.prototype.redShl = function (t) {
                            return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
                        }),
                        (o.prototype.redMul = function (t) {
                            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
                        }),
                        (o.prototype.redIMul = function (t) {
                            return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
                        }),
                        (o.prototype.redSqr = function () {
                            return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
                        }),
                        (o.prototype.redISqr = function () {
                            return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
                        }),
                        (o.prototype.redSqrt = function () {
                            return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
                        }),
                        (o.prototype.redInvm = function () {
                            return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
                        }),
                        (o.prototype.redNeg = function () {
                            return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
                        }),
                        (o.prototype.redPow = function (t) {
                            return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
                        });
                    var m = { k256: null, p224: null, p192: null, p25519: null };
                    function g(t, e) {
                        (this.name = t), (this.p = new o(e, 16)), (this.n = this.p.bitLength()), (this.k = new o(1).iushln(this.n).isub(this.p)), (this.tmp = this._tmp());
                    }
                    function v() {
                        g.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
                    }
                    function w() {
                        g.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
                    }
                    function M() {
                        g.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
                    }
                    function _() {
                        g.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
                    }
                    function A(t) {
                        if ("string" == typeof t) {
                            var e = o._prime(t);
                            (this.m = e.p), (this.prime = e);
                        } else n(t.gtn(1), "modulus must be greater than 1"), (this.m = t), (this.prime = null);
                    }
                    function S(t) {
                        A.call(this, t),
                            (this.shift = this.m.bitLength()),
                        this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
                            (this.r = new o(1).iushln(this.shift)),
                            (this.r2 = this.imod(this.r.sqr())),
                            (this.rinv = this.r._invmp(this.m)),
                            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                            (this.minv = this.minv.umod(this.r)),
                            (this.minv = this.r.sub(this.minv));
                    }
                    (g.prototype._tmp = function () {
                        var t = new o(null);
                        return (t.words = new Array(Math.ceil(this.n / 13))), t;
                    }),
                        (g.prototype.ireduce = function (t) {
                            var e,
                                r = t;
                            do {
                                this.split(r, this.tmp), (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
                            } while (e > this.n);
                            var n = e < this.n ? -1 : r.ucmp(this.p);
                            return 0 === n ? ((r.words[0] = 0), (r.length = 1)) : n > 0 ? r.isub(this.p) : void 0 !== r.strip ? r.strip() : r._strip(), r;
                        }),
                        (g.prototype.split = function (t, e) {
                            t.iushrn(this.n, 0, e);
                        }),
                        (g.prototype.imulK = function (t) {
                            return t.imul(this.k);
                        }),
                        i(v, g),
                        (v.prototype.split = function (t, e) {
                            for (var r = 4194303, n = Math.min(t.length, 9), i = 0; i < n; i++) e.words[i] = t.words[i];
                            if (((e.length = n), t.length <= 9)) return (t.words[0] = 0), void (t.length = 1);
                            var o = t.words[9];
                            for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                                var s = 0 | t.words[i];
                                (t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s);
                            }
                            (o >>>= 22), (t.words[i - 10] = o), 0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
                        }),
                        (v.prototype.imulK = function (t) {
                            (t.words[t.length] = 0), (t.words[t.length + 1] = 0), (t.length += 2);
                            for (var e = 0, r = 0; r < t.length; r++) {
                                var n = 0 | t.words[r];
                                (e += 977 * n), (t.words[r] = 67108863 & e), (e = 64 * n + ((e / 67108864) | 0));
                            }
                            return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
                        }),
                        i(w, g),
                        i(M, g),
                        i(_, g),
                        (_.prototype.imulK = function (t) {
                            for (var e = 0, r = 0; r < t.length; r++) {
                                var n = 19 * (0 | t.words[r]) + e,
                                    i = 67108863 & n;
                                (n >>>= 26), (t.words[r] = i), (e = n);
                            }
                            return 0 !== e && (t.words[t.length++] = e), t;
                        }),
                        (o._prime = function (t) {
                            if (m[t]) return m[t];
                            var e;
                            if ("k256" === t) e = new v();
                            else if ("p224" === t) e = new w();
                            else if ("p192" === t) e = new M();
                            else {
                                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                                e = new _();
                            }
                            return (m[t] = e), e;
                        }),
                        (A.prototype._verify1 = function (t) {
                            n(0 === t.negative, "red works only with positives"), n(t.red, "red works only with red numbers");
                        }),
                        (A.prototype._verify2 = function (t, e) {
                            n(0 == (t.negative | e.negative), "red works only with positives"), n(t.red && t.red === e.red, "red works only with red numbers");
                        }),
                        (A.prototype.imod = function (t) {
                            return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
                        }),
                        (A.prototype.neg = function (t) {
                            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
                        }),
                        (A.prototype.add = function (t, e) {
                            this._verify2(t, e);
                            var r = t.add(e);
                            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
                        }),
                        (A.prototype.iadd = function (t, e) {
                            this._verify2(t, e);
                            var r = t.iadd(e);
                            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                        }),
                        (A.prototype.sub = function (t, e) {
                            this._verify2(t, e);
                            var r = t.sub(e);
                            return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
                        }),
                        (A.prototype.isub = function (t, e) {
                            this._verify2(t, e);
                            var r = t.isub(e);
                            return r.cmpn(0) < 0 && r.iadd(this.m), r;
                        }),
                        (A.prototype.shl = function (t, e) {
                            return this._verify1(t), this.imod(t.ushln(e));
                        }),
                        (A.prototype.imul = function (t, e) {
                            return this._verify2(t, e), this.imod(t.imul(e));
                        }),
                        (A.prototype.mul = function (t, e) {
                            return this._verify2(t, e), this.imod(t.mul(e));
                        }),
                        (A.prototype.isqr = function (t) {
                            return this.imul(t, t.clone());
                        }),
                        (A.prototype.sqr = function (t) {
                            return this.mul(t, t);
                        }),
                        (A.prototype.sqrt = function (t) {
                            if (t.isZero()) return t.clone();
                            var e = this.m.andln(3);
                            if ((n(e % 2 == 1), 3 === e)) {
                                var r = this.m.add(new o(1)).iushrn(2);
                                return this.pow(t, r);
                            }
                            for (var i = this.m.subn(1), s = 0; !i.isZero() && 0 === i.andln(1); ) s++, i.iushrn(1);
                            n(!i.isZero());
                            var a = new o(1).toRed(this),
                                f = a.redNeg(),
                                u = this.m.subn(1).iushrn(1),
                                c = this.m.bitLength();
                            for (c = new o(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(f); ) c.redIAdd(f);
                            for (var h = this.pow(c, i), d = this.pow(t, i.addn(1).iushrn(1)), l = this.pow(t, i), p = s; 0 !== l.cmp(a); ) {
                                for (var b = l, y = 0; 0 !== b.cmp(a); y++) b = b.redSqr();
                                n(y < p);
                                var m = this.pow(h, new o(1).iushln(p - y - 1));
                                (d = d.redMul(m)), (h = m.redSqr()), (l = l.redMul(h)), (p = y);
                            }
                            return d;
                        }),
                        (A.prototype.invm = function (t) {
                            var e = t._invmp(this.m);
                            return 0 !== e.negative ? ((e.negative = 0), this.imod(e).redNeg()) : this.imod(e);
                        }),
                        (A.prototype.pow = function (t, e) {
                            if (e.isZero()) return new o(1).toRed(this);
                            if (0 === e.cmpn(1)) return t.clone();
                            var r = new Array(16);
                            (r[0] = new o(1).toRed(this)), (r[1] = t);
                            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
                            var i = r[0],
                                s = 0,
                                a = 0,
                                f = e.bitLength() % 26;
                            for (0 === f && (f = 26), n = e.length - 1; n >= 0; n--) {
                                for (var u = e.words[n], c = f - 1; c >= 0; c--) {
                                    var h = (u >> c) & 1;
                                    i !== r[0] && (i = this.sqr(i)), 0 !== h || 0 !== s ? ((s <<= 1), (s |= h), (4 == ++a || (0 === n && 0 === c)) && ((i = this.mul(i, r[s])), (a = 0), (s = 0))) : (a = 0);
                                }
                                f = 26;
                            }
                            return i;
                        }),
                        (A.prototype.convertTo = function (t) {
                            var e = t.umod(this.m);
                            return e === t ? e.clone() : e;
                        }),
                        (A.prototype.convertFrom = function (t) {
                            var e = t.clone();
                            return (e.red = null), e;
                        }),
                        (o.mont = function (t) {
                            return new S(t);
                        }),
                        i(S, A),
                        (S.prototype.convertTo = function (t) {
                            return this.imod(t.ushln(this.shift));
                        }),
                        (S.prototype.convertFrom = function (t) {
                            var e = this.imod(t.mul(this.rinv));
                            return (e.red = null), e;
                        }),
                        (S.prototype.imul = function (t, e) {
                            if (t.isZero() || e.isZero()) return (t.words[0] = 0), (t.length = 1), t;
                            var r = t.imul(e),
                                n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                i = r.isub(n).iushrn(this.shift),
                                o = i;
                            return i.cmp(this.m) >= 0 ? (o = i.isub(this.m)) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
                        }),
                        (S.prototype.mul = function (t, e) {
                            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
                            var r = t.mul(e),
                                n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                                i = r.isub(n).iushrn(this.shift),
                                s = i;
                            return i.cmp(this.m) >= 0 ? (s = i.isub(this.m)) : i.cmpn(0) < 0 && (s = i.iadd(this.m)), s._forceRed(this);
                        }),
                        (S.prototype.invm = function (t) {
                            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
                        });
                })((t = r.nmd(t)), this);
            },
            6729: (t) => {
                "use strict";
                var e = Object.prototype.hasOwnProperty,
                    r = "~";
                function n() {}
                function i(t, e, r) {
                    (this.fn = t), (this.context = e), (this.once = r || !1);
                }
                function o(t, e, n, o, s) {
                    if ("function" != typeof n) throw new TypeError("The listener must be a function");
                    var a = new i(n, o || t, s),
                        f = r ? r + e : e;
                    return t._events[f] ? (t._events[f].fn ? (t._events[f] = [t._events[f], a]) : t._events[f].push(a)) : ((t._events[f] = a), t._eventsCount++), t;
                }
                function s(t, e) {
                    0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
                }
                function a() {
                    (this._events = new n()), (this._eventsCount = 0);
                }
                Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
                    (a.prototype.eventNames = function () {
                        var t,
                            n,
                            i = [];
                        if (0 === this._eventsCount) return i;
                        for (n in (t = this._events)) e.call(t, n) && i.push(r ? n.slice(1) : n);
                        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
                    }),
                    (a.prototype.listeners = function (t) {
                        var e = r ? r + t : t,
                            n = this._events[e];
                        if (!n) return [];
                        if (n.fn) return [n.fn];
                        for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
                        return s;
                    }),
                    (a.prototype.listenerCount = function (t) {
                        var e = r ? r + t : t,
                            n = this._events[e];
                        return n ? (n.fn ? 1 : n.length) : 0;
                    }),
                    (a.prototype.emit = function (t, e, n, i, o, s) {
                        var a = r ? r + t : t;
                        if (!this._events[a]) return !1;
                        var f,
                            u,
                            c = this._events[a],
                            h = arguments.length;
                        if (c.fn) {
                            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), h)) {
                                case 1:
                                    return c.fn.call(c.context), !0;
                                case 2:
                                    return c.fn.call(c.context, e), !0;
                                case 3:
                                    return c.fn.call(c.context, e, n), !0;
                                case 4:
                                    return c.fn.call(c.context, e, n, i), !0;
                                case 5:
                                    return c.fn.call(c.context, e, n, i, o), !0;
                                case 6:
                                    return c.fn.call(c.context, e, n, i, o, s), !0;
                            }
                            for (u = 1, f = new Array(h - 1); u < h; u++) f[u - 1] = arguments[u];
                            c.fn.apply(c.context, f);
                        } else {
                            var d,
                                l = c.length;
                            for (u = 0; u < l; u++)
                                switch ((c[u].once && this.removeListener(t, c[u].fn, void 0, !0), h)) {
                                    case 1:
                                        c[u].fn.call(c[u].context);
                                        break;
                                    case 2:
                                        c[u].fn.call(c[u].context, e);
                                        break;
                                    case 3:
                                        c[u].fn.call(c[u].context, e, n);
                                        break;
                                    case 4:
                                        c[u].fn.call(c[u].context, e, n, i);
                                        break;
                                    default:
                                        if (!f) for (d = 1, f = new Array(h - 1); d < h; d++) f[d - 1] = arguments[d];
                                        c[u].fn.apply(c[u].context, f);
                                }
                        }
                        return !0;
                    }),
                    (a.prototype.on = function (t, e, r) {
                        return o(this, t, e, r, !1);
                    }),
                    (a.prototype.once = function (t, e, r) {
                        return o(this, t, e, r, !0);
                    }),
                    (a.prototype.removeListener = function (t, e, n, i) {
                        var o = r ? r + t : t;
                        if (!this._events[o]) return this;
                        if (!e) return s(this, o), this;
                        var a = this._events[o];
                        if (a.fn) a.fn !== e || (i && !a.once) || (n && a.context !== n) || s(this, o);
                        else {
                            for (var f = 0, u = [], c = a.length; f < c; f++) (a[f].fn !== e || (i && !a[f].once) || (n && a[f].context !== n)) && u.push(a[f]);
                            u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : s(this, o);
                        }
                        return this;
                    }),
                    (a.prototype.removeAllListeners = function (t) {
                        var e;
                        return t ? ((e = r ? r + t : t), this._events[e] && s(this, e)) : ((this._events = new n()), (this._eventsCount = 0)), this;
                    }),
                    (a.prototype.off = a.prototype.removeListener),
                    (a.prototype.addListener = a.prototype.on),
                    (a.prefixed = r),
                    (a.EventEmitter = a),
                    (t.exports = a);
            },
            3715: (t, e, r) => {
                var n = e;
                (n.utils = r(6436)),
                    (n.common = r(5772)),
                    (n.sha = r(9041)),
                    (n.ripemd = r(2949)),
                    (n.hmac = r(2344)),
                    (n.sha1 = n.sha.sha1),
                    (n.sha256 = n.sha.sha256),
                    (n.sha224 = n.sha.sha224),
                    (n.sha384 = n.sha.sha384),
                    (n.sha512 = n.sha.sha512),
                    (n.ripemd160 = n.ripemd.ripemd160);
            },
            5772: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(9746);
                function o() {
                    (this.pending = null),
                        (this.pendingTotal = 0),
                        (this.blockSize = this.constructor.blockSize),
                        (this.outSize = this.constructor.outSize),
                        (this.hmacStrength = this.constructor.hmacStrength),
                        (this.padLength = this.constructor.padLength / 8),
                        (this.endian = "big"),
                        (this._delta8 = this.blockSize / 8),
                        (this._delta32 = this.blockSize / 32);
                }
                (e.BlockHash = o),
                    (o.prototype.update = function (t, e) {
                        if (((t = n.toArray(t, e)), this.pending ? (this.pending = this.pending.concat(t)) : (this.pending = t), (this.pendingTotal += t.length), this.pending.length >= this._delta8)) {
                            var r = (t = this.pending).length % this._delta8;
                            (this.pending = t.slice(t.length - r, t.length)), 0 === this.pending.length && (this.pending = null), (t = n.join32(t, 0, t.length - r, this.endian));
                            for (var i = 0; i < t.length; i += this._delta32) this._update(t, i, i + this._delta32);
                        }
                        return this;
                    }),
                    (o.prototype.digest = function (t) {
                        return this.update(this._pad()), i(null === this.pending), this._digest(t);
                    }),
                    (o.prototype._pad = function () {
                        var t = this.pendingTotal,
                            e = this._delta8,
                            r = e - ((t + this.padLength) % e),
                            n = new Array(r + this.padLength);
                        n[0] = 128;
                        for (var i = 1; i < r; i++) n[i] = 0;
                        if (((t <<= 3), "big" === this.endian)) {
                            for (var o = 8; o < this.padLength; o++) n[i++] = 0;
                            (n[i++] = 0), (n[i++] = 0), (n[i++] = 0), (n[i++] = 0), (n[i++] = (t >>> 24) & 255), (n[i++] = (t >>> 16) & 255), (n[i++] = (t >>> 8) & 255), (n[i++] = 255 & t);
                        } else for (n[i++] = 255 & t, n[i++] = (t >>> 8) & 255, n[i++] = (t >>> 16) & 255, n[i++] = (t >>> 24) & 255, n[i++] = 0, n[i++] = 0, n[i++] = 0, n[i++] = 0, o = 8; o < this.padLength; o++) n[i++] = 0;
                        return n;
                    });
            },
            2344: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(9746);
                function o(t, e, r) {
                    if (!(this instanceof o)) return new o(t, e, r);
                    (this.Hash = t), (this.blockSize = t.blockSize / 8), (this.outSize = t.outSize / 8), (this.inner = null), (this.outer = null), this._init(n.toArray(e, r));
                }
                (t.exports = o),
                    (o.prototype._init = function (t) {
                        t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize);
                        for (var e = t.length; e < this.blockSize; e++) t.push(0);
                        for (e = 0; e < t.length; e++) t[e] ^= 54;
                        for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++) t[e] ^= 106;
                        this.outer = new this.Hash().update(t);
                    }),
                    (o.prototype.update = function (t, e) {
                        return this.inner.update(t, e), this;
                    }),
                    (o.prototype.digest = function (t) {
                        return this.outer.update(this.inner.digest()), this.outer.digest(t);
                    });
            },
            2949: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(5772),
                    o = n.rotl32,
                    s = n.sum32,
                    a = n.sum32_3,
                    f = n.sum32_4,
                    u = i.BlockHash;
                function c() {
                    if (!(this instanceof c)) return new c();
                    u.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.endian = "little");
                }
                function h(t, e, r, n) {
                    return t <= 15 ? e ^ r ^ n : t <= 31 ? (e & r) | (~e & n) : t <= 47 ? (e | ~r) ^ n : t <= 63 ? (e & n) | (r & ~n) : e ^ (r | ~n);
                }
                function d(t) {
                    return t <= 15 ? 0 : t <= 31 ? 1518500249 : t <= 47 ? 1859775393 : t <= 63 ? 2400959708 : 2840853838;
                }
                function l(t) {
                    return t <= 15 ? 1352829926 : t <= 31 ? 1548603684 : t <= 47 ? 1836072691 : t <= 63 ? 2053994217 : 0;
                }
                n.inherits(c, u),
                    (e.ripemd160 = c),
                    (c.blockSize = 512),
                    (c.outSize = 160),
                    (c.hmacStrength = 192),
                    (c.padLength = 64),
                    (c.prototype._update = function (t, e) {
                        for (var r = this.h[0], n = this.h[1], i = this.h[2], u = this.h[3], c = this.h[4], g = r, v = n, w = i, M = u, _ = c, A = 0; A < 80; A++) {
                            var S = s(o(f(r, h(A, n, i, u), t[p[A] + e], d(A)), y[A]), c);
                            (r = c), (c = u), (u = o(i, 10)), (i = n), (n = S), (S = s(o(f(g, h(79 - A, v, w, M), t[b[A] + e], l(A)), m[A]), _)), (g = _), (_ = M), (M = o(w, 10)), (w = v), (v = S);
                        }
                        (S = a(this.h[1], i, M)), (this.h[1] = a(this.h[2], u, _)), (this.h[2] = a(this.h[3], c, g)), (this.h[3] = a(this.h[4], r, v)), (this.h[4] = a(this.h[0], n, w)), (this.h[0] = S);
                    }),
                    (c.prototype._digest = function (t) {
                        return "hex" === t ? n.toHex32(this.h, "little") : n.split32(this.h, "little");
                    });
                var p = [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        7,
                        4,
                        13,
                        1,
                        10,
                        6,
                        15,
                        3,
                        12,
                        0,
                        9,
                        5,
                        2,
                        14,
                        11,
                        8,
                        3,
                        10,
                        14,
                        4,
                        9,
                        15,
                        8,
                        1,
                        2,
                        7,
                        0,
                        6,
                        13,
                        11,
                        5,
                        12,
                        1,
                        9,
                        11,
                        10,
                        0,
                        8,
                        12,
                        4,
                        13,
                        3,
                        7,
                        15,
                        14,
                        5,
                        6,
                        2,
                        4,
                        0,
                        5,
                        9,
                        7,
                        12,
                        2,
                        10,
                        14,
                        1,
                        3,
                        8,
                        11,
                        6,
                        15,
                        13,
                    ],
                    b = [
                        5,
                        14,
                        7,
                        0,
                        9,
                        2,
                        11,
                        4,
                        13,
                        6,
                        15,
                        8,
                        1,
                        10,
                        3,
                        12,
                        6,
                        11,
                        3,
                        7,
                        0,
                        13,
                        5,
                        10,
                        14,
                        15,
                        8,
                        12,
                        4,
                        9,
                        1,
                        2,
                        15,
                        5,
                        1,
                        3,
                        7,
                        14,
                        6,
                        9,
                        11,
                        8,
                        12,
                        2,
                        10,
                        0,
                        4,
                        13,
                        8,
                        6,
                        4,
                        1,
                        3,
                        11,
                        15,
                        0,
                        5,
                        12,
                        2,
                        13,
                        9,
                        7,
                        10,
                        14,
                        12,
                        15,
                        10,
                        4,
                        1,
                        5,
                        8,
                        7,
                        6,
                        2,
                        13,
                        14,
                        0,
                        3,
                        9,
                        11,
                    ],
                    y = [
                        11,
                        14,
                        15,
                        12,
                        5,
                        8,
                        7,
                        9,
                        11,
                        13,
                        14,
                        15,
                        6,
                        7,
                        9,
                        8,
                        7,
                        6,
                        8,
                        13,
                        11,
                        9,
                        7,
                        15,
                        7,
                        12,
                        15,
                        9,
                        11,
                        7,
                        13,
                        12,
                        11,
                        13,
                        6,
                        7,
                        14,
                        9,
                        13,
                        15,
                        14,
                        8,
                        13,
                        6,
                        5,
                        12,
                        7,
                        5,
                        11,
                        12,
                        14,
                        15,
                        14,
                        15,
                        9,
                        8,
                        9,
                        14,
                        5,
                        6,
                        8,
                        6,
                        5,
                        12,
                        9,
                        15,
                        5,
                        11,
                        6,
                        8,
                        13,
                        12,
                        5,
                        12,
                        13,
                        14,
                        11,
                        8,
                        5,
                        6,
                    ],
                    m = [
                        8,
                        9,
                        9,
                        11,
                        13,
                        15,
                        15,
                        5,
                        7,
                        7,
                        8,
                        11,
                        14,
                        14,
                        12,
                        6,
                        9,
                        13,
                        15,
                        7,
                        12,
                        8,
                        9,
                        11,
                        7,
                        7,
                        12,
                        7,
                        6,
                        15,
                        13,
                        11,
                        9,
                        7,
                        15,
                        11,
                        8,
                        6,
                        6,
                        14,
                        12,
                        13,
                        5,
                        14,
                        13,
                        13,
                        7,
                        5,
                        15,
                        5,
                        8,
                        11,
                        14,
                        14,
                        6,
                        14,
                        6,
                        9,
                        12,
                        9,
                        12,
                        5,
                        15,
                        8,
                        8,
                        5,
                        12,
                        9,
                        12,
                        5,
                        14,
                        6,
                        8,
                        13,
                        6,
                        5,
                        15,
                        13,
                        11,
                        11,
                    ];
            },
            9041: (t, e, r) => {
                "use strict";
                (e.sha1 = r(4761)), (e.sha224 = r(799)), (e.sha256 = r(9344)), (e.sha384 = r(772)), (e.sha512 = r(5900));
            },
            4761: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(5772),
                    o = r(7038),
                    s = n.rotl32,
                    a = n.sum32,
                    f = n.sum32_5,
                    u = o.ft_1,
                    c = i.BlockHash,
                    h = [1518500249, 1859775393, 2400959708, 3395469782];
                function d() {
                    if (!(this instanceof d)) return new d();
                    c.call(this), (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]), (this.W = new Array(80));
                }
                n.inherits(d, c),
                    (t.exports = d),
                    (d.blockSize = 512),
                    (d.outSize = 160),
                    (d.hmacStrength = 80),
                    (d.padLength = 64),
                    (d.prototype._update = function (t, e) {
                        for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                        for (; n < r.length; n++) r[n] = s(r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16], 1);
                        var i = this.h[0],
                            o = this.h[1],
                            c = this.h[2],
                            d = this.h[3],
                            l = this.h[4];
                        for (n = 0; n < r.length; n++) {
                            var p = ~~(n / 20),
                                b = f(s(i, 5), u(p, o, c, d), l, r[n], h[p]);
                            (l = d), (d = c), (c = s(o, 30)), (o = i), (i = b);
                        }
                        (this.h[0] = a(this.h[0], i)), (this.h[1] = a(this.h[1], o)), (this.h[2] = a(this.h[2], c)), (this.h[3] = a(this.h[3], d)), (this.h[4] = a(this.h[4], l));
                    }),
                    (d.prototype._digest = function (t) {
                        return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
                    });
            },
            799: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(9344);
                function o() {
                    if (!(this instanceof o)) return new o();
                    i.call(this), (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
                }
                n.inherits(o, i),
                    (t.exports = o),
                    (o.blockSize = 512),
                    (o.outSize = 224),
                    (o.hmacStrength = 192),
                    (o.padLength = 64),
                    (o.prototype._digest = function (t) {
                        return "hex" === t ? n.toHex32(this.h.slice(0, 7), "big") : n.split32(this.h.slice(0, 7), "big");
                    });
            },
            9344: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(5772),
                    o = r(7038),
                    s = r(9746),
                    a = n.sum32,
                    f = n.sum32_4,
                    u = n.sum32_5,
                    c = o.ch32,
                    h = o.maj32,
                    d = o.s0_256,
                    l = o.s1_256,
                    p = o.g0_256,
                    b = o.g1_256,
                    y = i.BlockHash,
                    m = [
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298,
                    ];
                function g() {
                    if (!(this instanceof g)) return new g();
                    y.call(this), (this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), (this.k = m), (this.W = new Array(64));
                }
                n.inherits(g, y),
                    (t.exports = g),
                    (g.blockSize = 512),
                    (g.outSize = 256),
                    (g.hmacStrength = 192),
                    (g.padLength = 64),
                    (g.prototype._update = function (t, e) {
                        for (var r = this.W, n = 0; n < 16; n++) r[n] = t[e + n];
                        for (; n < r.length; n++) r[n] = f(b(r[n - 2]), r[n - 7], p(r[n - 15]), r[n - 16]);
                        var i = this.h[0],
                            o = this.h[1],
                            y = this.h[2],
                            m = this.h[3],
                            g = this.h[4],
                            v = this.h[5],
                            w = this.h[6],
                            M = this.h[7];
                        for (s(this.k.length === r.length), n = 0; n < r.length; n++) {
                            var _ = u(M, l(g), c(g, v, w), this.k[n], r[n]),
                                A = a(d(i), h(i, o, y));
                            (M = w), (w = v), (v = g), (g = a(m, _)), (m = y), (y = o), (o = i), (i = a(_, A));
                        }
                        (this.h[0] = a(this.h[0], i)),
                            (this.h[1] = a(this.h[1], o)),
                            (this.h[2] = a(this.h[2], y)),
                            (this.h[3] = a(this.h[3], m)),
                            (this.h[4] = a(this.h[4], g)),
                            (this.h[5] = a(this.h[5], v)),
                            (this.h[6] = a(this.h[6], w)),
                            (this.h[7] = a(this.h[7], M));
                    }),
                    (g.prototype._digest = function (t) {
                        return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
                    });
            },
            772: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(5900);
                function o() {
                    if (!(this instanceof o)) return new o();
                    i.call(this), (this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
                }
                n.inherits(o, i),
                    (t.exports = o),
                    (o.blockSize = 1024),
                    (o.outSize = 384),
                    (o.hmacStrength = 192),
                    (o.padLength = 128),
                    (o.prototype._digest = function (t) {
                        return "hex" === t ? n.toHex32(this.h.slice(0, 12), "big") : n.split32(this.h.slice(0, 12), "big");
                    });
            },
            5900: (t, e, r) => {
                "use strict";
                var n = r(6436),
                    i = r(5772),
                    o = r(9746),
                    s = n.rotr64_hi,
                    a = n.rotr64_lo,
                    f = n.shr64_hi,
                    u = n.shr64_lo,
                    c = n.sum64,
                    h = n.sum64_hi,
                    d = n.sum64_lo,
                    l = n.sum64_4_hi,
                    p = n.sum64_4_lo,
                    b = n.sum64_5_hi,
                    y = n.sum64_5_lo,
                    m = i.BlockHash,
                    g = [
                        1116352408,
                        3609767458,
                        1899447441,
                        602891725,
                        3049323471,
                        3964484399,
                        3921009573,
                        2173295548,
                        961987163,
                        4081628472,
                        1508970993,
                        3053834265,
                        2453635748,
                        2937671579,
                        2870763221,
                        3664609560,
                        3624381080,
                        2734883394,
                        310598401,
                        1164996542,
                        607225278,
                        1323610764,
                        1426881987,
                        3590304994,
                        1925078388,
                        4068182383,
                        2162078206,
                        991336113,
                        2614888103,
                        633803317,
                        3248222580,
                        3479774868,
                        3835390401,
                        2666613458,
                        4022224774,
                        944711139,
                        264347078,
                        2341262773,
                        604807628,
                        2007800933,
                        770255983,
                        1495990901,
                        1249150122,
                        1856431235,
                        1555081692,
                        3175218132,
                        1996064986,
                        2198950837,
                        2554220882,
                        3999719339,
                        2821834349,
                        766784016,
                        2952996808,
                        2566594879,
                        3210313671,
                        3203337956,
                        3336571891,
                        1034457026,
                        3584528711,
                        2466948901,
                        113926993,
                        3758326383,
                        338241895,
                        168717936,
                        666307205,
                        1188179964,
                        773529912,
                        1546045734,
                        1294757372,
                        1522805485,
                        1396182291,
                        2643833823,
                        1695183700,
                        2343527390,
                        1986661051,
                        1014477480,
                        2177026350,
                        1206759142,
                        2456956037,
                        344077627,
                        2730485921,
                        1290863460,
                        2820302411,
                        3158454273,
                        3259730800,
                        3505952657,
                        3345764771,
                        106217008,
                        3516065817,
                        3606008344,
                        3600352804,
                        1432725776,
                        4094571909,
                        1467031594,
                        275423344,
                        851169720,
                        430227734,
                        3100823752,
                        506948616,
                        1363258195,
                        659060556,
                        3750685593,
                        883997877,
                        3785050280,
                        958139571,
                        3318307427,
                        1322822218,
                        3812723403,
                        1537002063,
                        2003034995,
                        1747873779,
                        3602036899,
                        1955562222,
                        1575990012,
                        2024104815,
                        1125592928,
                        2227730452,
                        2716904306,
                        2361852424,
                        442776044,
                        2428436474,
                        593698344,
                        2756734187,
                        3733110249,
                        3204031479,
                        2999351573,
                        3329325298,
                        3815920427,
                        3391569614,
                        3928383900,
                        3515267271,
                        566280711,
                        3940187606,
                        3454069534,
                        4118630271,
                        4000239992,
                        116418474,
                        1914138554,
                        174292421,
                        2731055270,
                        289380356,
                        3203993006,
                        460393269,
                        320620315,
                        685471733,
                        587496836,
                        852142971,
                        1086792851,
                        1017036298,
                        365543100,
                        1126000580,
                        2618297676,
                        1288033470,
                        3409855158,
                        1501505948,
                        4234509866,
                        1607167915,
                        987167468,
                        1816402316,
                        1246189591,
                    ];
                function v() {
                    if (!(this instanceof v)) return new v();
                    m.call(this),
                        (this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]),
                        (this.k = g),
                        (this.W = new Array(160));
                }
                function w(t, e, r, n, i) {
                    var o = (t & r) ^ (~t & i);
                    return o < 0 && (o += 4294967296), o;
                }
                function M(t, e, r, n, i, o) {
                    var s = (e & n) ^ (~e & o);
                    return s < 0 && (s += 4294967296), s;
                }
                function _(t, e, r, n, i) {
                    var o = (t & r) ^ (t & i) ^ (r & i);
                    return o < 0 && (o += 4294967296), o;
                }
                function A(t, e, r, n, i, o) {
                    var s = (e & n) ^ (e & o) ^ (n & o);
                    return s < 0 && (s += 4294967296), s;
                }
                function S(t, e) {
                    var r = s(t, e, 28) ^ s(e, t, 2) ^ s(e, t, 7);
                    return r < 0 && (r += 4294967296), r;
                }
                function x(t, e) {
                    var r = a(t, e, 28) ^ a(e, t, 2) ^ a(e, t, 7);
                    return r < 0 && (r += 4294967296), r;
                }
                function E(t, e) {
                    var r = a(t, e, 14) ^ a(t, e, 18) ^ a(e, t, 9);
                    return r < 0 && (r += 4294967296), r;
                }
                function k(t, e) {
                    var r = s(t, e, 1) ^ s(t, e, 8) ^ f(t, e, 7);
                    return r < 0 && (r += 4294967296), r;
                }
                function I(t, e) {
                    var r = a(t, e, 1) ^ a(t, e, 8) ^ u(t, e, 7);
                    return r < 0 && (r += 4294967296), r;
                }
                function B(t, e) {
                    var r = a(t, e, 19) ^ a(e, t, 29) ^ u(t, e, 6);
                    return r < 0 && (r += 4294967296), r;
                }
                n.inherits(v, m),
                    (t.exports = v),
                    (v.blockSize = 1024),
                    (v.outSize = 512),
                    (v.hmacStrength = 192),
                    (v.padLength = 128),
                    (v.prototype._prepareBlock = function (t, e) {
                        for (var r = this.W, n = 0; n < 32; n++) r[n] = t[e + n];
                        for (; n < r.length; n += 2) {
                            var i = ((y = r[n - 4]), (m = r[n - 3]), (g = void 0), (g = s(y, m, 19) ^ s(m, y, 29) ^ f(y, m, 6)) < 0 && (g += 4294967296), g),
                                o = B(r[n - 4], r[n - 3]),
                                a = r[n - 14],
                                u = r[n - 13],
                                c = k(r[n - 30], r[n - 29]),
                                h = I(r[n - 30], r[n - 29]),
                                d = r[n - 32],
                                b = r[n - 31];
                            (r[n] = l(i, o, a, u, c, h, d, b)), (r[n + 1] = p(i, o, a, u, c, h, d, b));
                        }
                        var y, m, g;
                    }),
                    (v.prototype._update = function (t, e) {
                        this._prepareBlock(t, e);
                        var r,
                            n,
                            i,
                            a = this.W,
                            f = this.h[0],
                            u = this.h[1],
                            l = this.h[2],
                            p = this.h[3],
                            m = this.h[4],
                            g = this.h[5],
                            v = this.h[6],
                            k = this.h[7],
                            I = this.h[8],
                            B = this.h[9],
                            P = this.h[10],
                            R = this.h[11],
                            U = this.h[12],
                            O = this.h[13],
                            T = this.h[14],
                            L = this.h[15];
                        o(this.k.length === a.length);
                        for (var z = 0; z < a.length; z += 2) {
                            var j = T,
                                N = L,
                                q = ((i = void 0), (i = s((r = I), (n = B), 14) ^ s(r, n, 18) ^ s(n, r, 9)) < 0 && (i += 4294967296), i),
                                C = E(I, B),
                                W = w(I, 0, P, 0, U),
                                K = M(0, B, 0, R, 0, O),
                                D = this.k[z],
                                F = this.k[z + 1],
                                $ = a[z],
                                V = a[z + 1],
                                Z = b(j, N, q, C, W, K, D, F, $, V),
                                Y = y(j, N, q, C, W, K, D, F, $, V);
                            (j = S(f, u)), (N = x(f, u)), (q = _(f, 0, l, 0, m)), (C = A(0, u, 0, p, 0, g));
                            var H = h(j, N, q, C),
                                J = d(j, N, q, C);
                            (T = U), (L = O), (U = P), (O = R), (P = I), (R = B), (I = h(v, k, Z, Y)), (B = d(k, k, Z, Y)), (v = m), (k = g), (m = l), (g = p), (l = f), (p = u), (f = h(Z, Y, H, J)), (u = d(Z, Y, H, J));
                        }
                        c(this.h, 0, f, u), c(this.h, 2, l, p), c(this.h, 4, m, g), c(this.h, 6, v, k), c(this.h, 8, I, B), c(this.h, 10, P, R), c(this.h, 12, U, O), c(this.h, 14, T, L);
                    }),
                    (v.prototype._digest = function (t) {
                        return "hex" === t ? n.toHex32(this.h, "big") : n.split32(this.h, "big");
                    });
            },
            7038: (t, e, r) => {
                "use strict";
                var n = r(6436).rotr32;
                function i(t, e, r) {
                    return (t & e) ^ (~t & r);
                }
                function o(t, e, r) {
                    return (t & e) ^ (t & r) ^ (e & r);
                }
                function s(t, e, r) {
                    return t ^ e ^ r;
                }
                (e.ft_1 = function (t, e, r, n) {
                    return 0 === t ? i(e, r, n) : 1 === t || 3 === t ? s(e, r, n) : 2 === t ? o(e, r, n) : void 0;
                }),
                    (e.ch32 = i),
                    (e.maj32 = o),
                    (e.p32 = s),
                    (e.s0_256 = function (t) {
                        return n(t, 2) ^ n(t, 13) ^ n(t, 22);
                    }),
                    (e.s1_256 = function (t) {
                        return n(t, 6) ^ n(t, 11) ^ n(t, 25);
                    }),
                    (e.g0_256 = function (t) {
                        return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
                    }),
                    (e.g1_256 = function (t) {
                        return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
                    });
            },
            6436: (t, e, r) => {
                "use strict";
                var n = r(9746),
                    i = r(5717);
                function o(t, e) {
                    return 55296 == (64512 & t.charCodeAt(e)) && !(e < 0 || e + 1 >= t.length) && 56320 == (64512 & t.charCodeAt(e + 1));
                }
                function s(t) {
                    return ((t >>> 24) | ((t >>> 8) & 65280) | ((t << 8) & 16711680) | ((255 & t) << 24)) >>> 0;
                }
                function a(t) {
                    return 1 === t.length ? "0" + t : t;
                }
                function f(t) {
                    return 7 === t.length ? "0" + t : 6 === t.length ? "00" + t : 5 === t.length ? "000" + t : 4 === t.length ? "0000" + t : 3 === t.length ? "00000" + t : 2 === t.length ? "000000" + t : 1 === t.length ? "0000000" + t : t;
                }
                (e.inherits = i),
                    (e.toArray = function (t, e) {
                        if (Array.isArray(t)) return t.slice();
                        if (!t) return [];
                        var r = [];
                        if ("string" == typeof t)
                            if (e) {
                                if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) r.push(parseInt(t[i] + t[i + 1], 16));
                            } else
                                for (var n = 0, i = 0; i < t.length; i++) {
                                    var s = t.charCodeAt(i);
                                    s < 128
                                        ? (r[n++] = s)
                                        : s < 2048
                                            ? ((r[n++] = (s >> 6) | 192), (r[n++] = (63 & s) | 128))
                                            : o(t, i)
                                                ? ((s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++i))), (r[n++] = (s >> 18) | 240), (r[n++] = ((s >> 12) & 63) | 128), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (63 & s) | 128))
                                                : ((r[n++] = (s >> 12) | 224), (r[n++] = ((s >> 6) & 63) | 128), (r[n++] = (63 & s) | 128));
                                }
                        else for (i = 0; i < t.length; i++) r[i] = 0 | t[i];
                        return r;
                    }),
                    (e.toHex = function (t) {
                        for (var e = "", r = 0; r < t.length; r++) e += a(t[r].toString(16));
                        return e;
                    }),
                    (e.htonl = s),
                    (e.toHex32 = function (t, e) {
                        for (var r = "", n = 0; n < t.length; n++) {
                            var i = t[n];
                            "little" === e && (i = s(i)), (r += f(i.toString(16)));
                        }
                        return r;
                    }),
                    (e.zero2 = a),
                    (e.zero8 = f),
                    (e.join32 = function (t, e, r, i) {
                        var o = r - e;
                        n(o % 4 == 0);
                        for (var s = new Array(o / 4), a = 0, f = e; a < s.length; a++, f += 4) {
                            var u;
                            (u = "big" === i ? (t[f] << 24) | (t[f + 1] << 16) | (t[f + 2] << 8) | t[f + 3] : (t[f + 3] << 24) | (t[f + 2] << 16) | (t[f + 1] << 8) | t[f]), (s[a] = u >>> 0);
                        }
                        return s;
                    }),
                    (e.split32 = function (t, e) {
                        for (var r = new Array(4 * t.length), n = 0, i = 0; n < t.length; n++, i += 4) {
                            var o = t[n];
                            "big" === e
                                ? ((r[i] = o >>> 24), (r[i + 1] = (o >>> 16) & 255), (r[i + 2] = (o >>> 8) & 255), (r[i + 3] = 255 & o))
                                : ((r[i + 3] = o >>> 24), (r[i + 2] = (o >>> 16) & 255), (r[i + 1] = (o >>> 8) & 255), (r[i] = 255 & o));
                        }
                        return r;
                    }),
                    (e.rotr32 = function (t, e) {
                        return (t >>> e) | (t << (32 - e));
                    }),
                    (e.rotl32 = function (t, e) {
                        return (t << e) | (t >>> (32 - e));
                    }),
                    (e.sum32 = function (t, e) {
                        return (t + e) >>> 0;
                    }),
                    (e.sum32_3 = function (t, e, r) {
                        return (t + e + r) >>> 0;
                    }),
                    (e.sum32_4 = function (t, e, r, n) {
                        return (t + e + r + n) >>> 0;
                    }),
                    (e.sum32_5 = function (t, e, r, n, i) {
                        return (t + e + r + n + i) >>> 0;
                    }),
                    (e.sum64 = function (t, e, r, n) {
                        var i = t[e],
                            o = (n + t[e + 1]) >>> 0,
                            s = (o < n ? 1 : 0) + r + i;
                        (t[e] = s >>> 0), (t[e + 1] = o);
                    }),
                    (e.sum64_hi = function (t, e, r, n) {
                        return (((e + n) >>> 0 < e ? 1 : 0) + t + r) >>> 0;
                    }),
                    (e.sum64_lo = function (t, e, r, n) {
                        return (e + n) >>> 0;
                    }),
                    (e.sum64_4_hi = function (t, e, r, n, i, o, s, a) {
                        var f = 0,
                            u = e;
                        return (f += (u = (u + n) >>> 0) < e ? 1 : 0), (f += (u = (u + o) >>> 0) < o ? 1 : 0), (t + r + i + s + (f += (u = (u + a) >>> 0) < a ? 1 : 0)) >>> 0;
                    }),
                    (e.sum64_4_lo = function (t, e, r, n, i, o, s, a) {
                        return (e + n + o + a) >>> 0;
                    }),
                    (e.sum64_5_hi = function (t, e, r, n, i, o, s, a, f, u) {
                        var c = 0,
                            h = e;
                        return (c += (h = (h + n) >>> 0) < e ? 1 : 0), (c += (h = (h + o) >>> 0) < o ? 1 : 0), (c += (h = (h + a) >>> 0) < a ? 1 : 0), (t + r + i + s + f + (c += (h = (h + u) >>> 0) < u ? 1 : 0)) >>> 0;
                    }),
                    (e.sum64_5_lo = function (t, e, r, n, i, o, s, a, f, u) {
                        return (e + n + o + a + u) >>> 0;
                    }),
                    (e.rotr64_hi = function (t, e, r) {
                        return ((e << (32 - r)) | (t >>> r)) >>> 0;
                    }),
                    (e.rotr64_lo = function (t, e, r) {
                        return ((t << (32 - r)) | (e >>> r)) >>> 0;
                    }),
                    (e.shr64_hi = function (t, e, r) {
                        return t >>> r;
                    }),
                    (e.shr64_lo = function (t, e, r) {
                        return ((t << (32 - r)) | (e >>> r)) >>> 0;
                    });
            },
            2156: (t, e, r) => {
                "use strict";
                var n = r(3715),
                    i = r(4504),
                    o = r(9746);
                function s(t) {
                    if (!(this instanceof s)) return new s(t);
                    (this.hash = t.hash),
                        (this.predResist = !!t.predResist),
                        (this.outLen = this.hash.outSize),
                        (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
                        (this._reseed = null),
                        (this.reseedInterval = null),
                        (this.K = null),
                        (this.V = null);
                    var e = i.toArray(t.entropy, t.entropyEnc || "hex"),
                        r = i.toArray(t.nonce, t.nonceEnc || "hex"),
                        n = i.toArray(t.pers, t.persEnc || "hex");
                    o(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, r, n);
                }
                (t.exports = s),
                    (s.prototype._init = function (t, e, r) {
                        var n = t.concat(e).concat(r);
                        (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
                        for (var i = 0; i < this.V.length; i++) (this.K[i] = 0), (this.V[i] = 1);
                        this._update(n), (this._reseed = 1), (this.reseedInterval = 281474976710656);
                    }),
                    (s.prototype._hmac = function () {
                        return new n.hmac(this.hash, this.K);
                    }),
                    (s.prototype._update = function (t) {
                        var e = this._hmac().update(this.V).update([0]);
                        t && (e = e.update(t)),
                            (this.K = e.digest()),
                            (this.V = this._hmac().update(this.V).digest()),
                        t && ((this.K = this._hmac().update(this.V).update([1]).update(t).digest()), (this.V = this._hmac().update(this.V).digest()));
                    }),
                    (s.prototype.reseed = function (t, e, r, n) {
                        "string" != typeof e && ((n = r), (r = e), (e = null)),
                            (t = i.toArray(t, e)),
                            (r = i.toArray(r, n)),
                            o(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"),
                            this._update(t.concat(r || [])),
                            (this._reseed = 1);
                    }),
                    (s.prototype.generate = function (t, e, r, n) {
                        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
                        "string" != typeof e && ((n = r), (r = e), (e = null)), r && ((r = i.toArray(r, n || "hex")), this._update(r));
                        for (var o = []; o.length < t; ) (this.V = this._hmac().update(this.V).digest()), (o = o.concat(this.V));
                        var s = o.slice(0, t);
                        return this._update(r), this._reseed++, i.encode(s, e);
                    });
            },
            645: (t, e) => {
                (e.read = function (t, e, r, n, i) {
                    var o,
                        s,
                        a = 8 * i - n - 1,
                        f = (1 << a) - 1,
                        u = f >> 1,
                        c = -7,
                        h = r ? i - 1 : 0,
                        d = r ? -1 : 1,
                        l = t[e + h];
                    for (h += d, o = l & ((1 << -c) - 1), l >>= -c, c += a; c > 0; o = 256 * o + t[e + h], h += d, c -= 8);
                    for (s = o & ((1 << -c) - 1), o >>= -c, c += n; c > 0; s = 256 * s + t[e + h], h += d, c -= 8);
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === f) return s ? NaN : (1 / 0) * (l ? -1 : 1);
                        (s += Math.pow(2, n)), (o -= u);
                    }
                    return (l ? -1 : 1) * s * Math.pow(2, o - n);
                }),
                    (e.write = function (t, e, r, n, i, o) {
                        var s,
                            a,
                            f,
                            u = 8 * o - i - 1,
                            c = (1 << u) - 1,
                            h = c >> 1,
                            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            l = n ? 0 : o - 1,
                            p = n ? 1 : -1,
                            b = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                        for (
                            e = Math.abs(e),
                                isNaN(e) || e === 1 / 0
                                    ? ((a = isNaN(e) ? 1 : 0), (s = c))
                                    : ((s = Math.floor(Math.log(e) / Math.LN2)),
                                    e * (f = Math.pow(2, -s)) < 1 && (s--, (f *= 2)),
                                    (e += s + h >= 1 ? d / f : d * Math.pow(2, 1 - h)) * f >= 2 && (s++, (f /= 2)),
                                        s + h >= c ? ((a = 0), (s = c)) : s + h >= 1 ? ((a = (e * f - 1) * Math.pow(2, i)), (s += h)) : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
                            i >= 8;
                            t[r + l] = 255 & a, l += p, a /= 256, i -= 8
                        );
                        for (s = (s << i) | a, u += i; u > 0; t[r + l] = 255 & s, l += p, s /= 256, u -= 8);
                        t[r + l - p] |= 128 * b;
                    });
            },
            5717: (t) => {
                "function" == typeof Object.create
                    ? (t.exports = function (t, e) {
                        e && ((t.super_ = e), (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })));
                    })
                    : (t.exports = function (t, e) {
                        if (e) {
                            t.super_ = e;
                            var r = function () {};
                            (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
                        }
                    });
            },
            1198: (t, e, r) => {
                "use strict";
                const n = r(1171),
                    i = r(7741),
                    o = function (t, e) {
                        if (!(this instanceof o)) return new o(t, e);
                        e || (e = {}),
                            (this.options = {
                                reviver: void 0 !== e.reviver ? e.reviver : null,
                                replacer: void 0 !== e.replacer ? e.replacer : null,
                                generator:
                                    void 0 !== e.generator
                                        ? e.generator
                                        : function () {
                                            return n();
                                        },
                                version: void 0 !== e.version ? e.version : 2,
                                notificationIdNull: "boolean" == typeof e.notificationIdNull && e.notificationIdNull,
                            }),
                            (this.callServer = t);
                    };
                (t.exports = o),
                    (o.prototype.request = function (t, e, r, n) {
                        const o = this;
                        let s = null;
                        const a = Array.isArray(t) && "function" == typeof e;
                        if (1 === this.options.version && a) throw new TypeError("JSON-RPC 1.0 does not support batching");
                        if (a || (!a && t && "object" == typeof t && "function" == typeof e)) (n = e), (s = t);
                        else {
                            "function" == typeof r && ((n = r), (r = void 0));
                            const o = "function" == typeof n;
                            try {
                                s = i(t, e, r, { generator: this.options.generator, version: this.options.version, notificationIdNull: this.options.notificationIdNull });
                            } catch (t) {
                                if (o) return n(t);
                                throw t;
                            }
                            if (!o) return s;
                        }
                        let f;
                        try {
                            f = JSON.stringify(s, this.options.replacer);
                        } catch (t) {
                            return n(t);
                        }
                        return (
                            this.callServer(f, function (t, e) {
                                o._parseResponse(t, e, n);
                            }),
                                s
                        );
                    }),
                    (o.prototype._parseResponse = function (t, e, r) {
                        if (t) return void r(t);
                        if (!e) return r();
                        let n;
                        try {
                            n = JSON.parse(e, this.options.reviver);
                        } catch (t) {
                            return r(t);
                        }
                        if (3 === r.length) {
                            if (Array.isArray(n)) {
                                const t = function (t) {
                                        return void 0 !== t.error;
                                    },
                                    e = function (e) {
                                        return !t(e);
                                    };
                                return r(null, n.filter(t), n.filter(e));
                            }
                            return r(null, n.error, n.result);
                        }
                        r(null, n);
                    });
            },
            7741: (t, e, r) => {
                "use strict";
                const n = r(1171);
                t.exports = function (t, e, r, i) {
                    if ("string" != typeof t) throw new TypeError(t + " must be a string");
                    const o = "number" == typeof (i = i || {}).version ? i.version : 2;
                    if (1 !== o && 2 !== o) throw new TypeError(o + " must be 1 or 2");
                    const s = { method: t };
                    if ((2 === o && (s.jsonrpc = "2.0"), e)) {
                        if ("object" != typeof e && !Array.isArray(e)) throw new TypeError(e + " must be an object, array or omitted");
                        s.params = e;
                    }
                    if (void 0 === r) {
                        const t =
                            "function" == typeof i.generator
                                ? i.generator
                                : function () {
                                    return n();
                                };
                        s.id = t(s, i);
                    } else 2 === o && null === r ? i.notificationIdNull && (s.id = null) : (s.id = r);
                    return s;
                };
            },
            1094: (t, e, r) => {
                var n;
                !(function () {
                    "use strict";
                    var i = "input is invalid type",
                        o = "object" == typeof window,
                        s = o ? window : {};
                    s.JS_SHA3_NO_WINDOW && (o = !1);
                    var a = !o && "object" == typeof self;
                    !s.JS_SHA3_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node ? (s = r.g) : a && (s = self);
                    var f = !s.JS_SHA3_NO_COMMON_JS && t.exports,
                        u = r.amdO,
                        c = !s.JS_SHA3_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                        h = "0123456789abcdef".split(""),
                        d = [4, 1024, 262144, 67108864],
                        l = [0, 8, 16, 24],
                        p = [
                            1,
                            0,
                            32898,
                            0,
                            32906,
                            2147483648,
                            2147516416,
                            2147483648,
                            32907,
                            0,
                            2147483649,
                            0,
                            2147516545,
                            2147483648,
                            32777,
                            2147483648,
                            138,
                            0,
                            136,
                            0,
                            2147516425,
                            0,
                            2147483658,
                            0,
                            2147516555,
                            0,
                            139,
                            2147483648,
                            32905,
                            2147483648,
                            32771,
                            2147483648,
                            32770,
                            2147483648,
                            128,
                            2147483648,
                            32778,
                            0,
                            2147483658,
                            2147483648,
                            2147516545,
                            2147483648,
                            32896,
                            2147483648,
                            2147483649,
                            0,
                            2147516424,
                            2147483648,
                        ],
                        b = [224, 256, 384, 512],
                        y = [128, 256],
                        m = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                        g = { 128: 168, 256: 136 };
                    (!s.JS_SHA3_NO_NODE_JS && Array.isArray) ||
                    (Array.isArray = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t);
                    }),
                    !c ||
                    (!s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
                    (ArrayBuffer.isView = function (t) {
                        return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
                    });
                    for (
                        var v = function (t, e, r) {
                                return function (n) {
                                    return new T(t, e, t).update(n)[r]();
                                };
                            },
                            w = function (t, e, r) {
                                return function (n, i) {
                                    return new T(t, e, i).update(n)[r]();
                                };
                            },
                            M = function (t, e, r) {
                                return function (e, n, i, o) {
                                    return E["cshake" + t].update(e, n, i, o)[r]();
                                };
                            },
                            _ = function (t, e, r) {
                                return function (e, n, i, o) {
                                    return E["kmac" + t].update(e, n, i, o)[r]();
                                };
                            },
                            A = function (t, e, r, n) {
                                for (var i = 0; i < m.length; ++i) {
                                    var o = m[i];
                                    t[o] = e(r, n, o);
                                }
                                return t;
                            },
                            S = function (t, e) {
                                var r = v(t, e, "hex");
                                return (
                                    (r.create = function () {
                                        return new T(t, e, t);
                                    }),
                                        (r.update = function (t) {
                                            return r.create().update(t);
                                        }),
                                        A(r, v, t, e)
                                );
                            },
                            x = [
                                { name: "keccak", padding: [1, 256, 65536, 16777216], bits: b, createMethod: S },
                                { name: "sha3", padding: [6, 1536, 393216, 100663296], bits: b, createMethod: S },
                                {
                                    name: "shake",
                                    padding: [31, 7936, 2031616, 520093696],
                                    bits: y,
                                    createMethod: function (t, e) {
                                        var r = w(t, e, "hex");
                                        return (
                                            (r.create = function (r) {
                                                return new T(t, e, r);
                                            }),
                                                (r.update = function (t, e) {
                                                    return r.create(e).update(t);
                                                }),
                                                A(r, w, t, e)
                                        );
                                    },
                                },
                                {
                                    name: "cshake",
                                    padding: d,
                                    bits: y,
                                    createMethod: function (t, e) {
                                        var r = g[t],
                                            n = M(t, 0, "hex");
                                        return (
                                            (n.create = function (n, i, o) {
                                                return i || o ? new T(t, e, n).bytepad([i, o], r) : E["shake" + t].create(n);
                                            }),
                                                (n.update = function (t, e, r, i) {
                                                    return n.create(e, r, i).update(t);
                                                }),
                                                A(n, M, t, e)
                                        );
                                    },
                                },
                                {
                                    name: "kmac",
                                    padding: d,
                                    bits: y,
                                    createMethod: function (t, e) {
                                        var r = g[t],
                                            n = _(t, 0, "hex");
                                        return (
                                            (n.create = function (n, i, o) {
                                                return new L(t, e, i).bytepad(["KMAC", o], r).bytepad([n], r);
                                            }),
                                                (n.update = function (t, e, r, i) {
                                                    return n.create(t, r, i).update(e);
                                                }),
                                                A(n, _, t, e)
                                        );
                                    },
                                },
                            ],
                            E = {},
                            k = [],
                            I = 0;
                        I < x.length;
                        ++I
                    )
                        for (var B = x[I], P = B.bits, R = 0; R < P.length; ++R) {
                            var U = B.name + "_" + P[R];
                            if ((k.push(U), (E[U] = B.createMethod(P[R], B.padding)), "sha3" !== B.name)) {
                                var O = B.name + P[R];
                                k.push(O), (E[O] = E[U]);
                            }
                        }
                    function T(t, e, r) {
                        (this.blocks = []),
                            (this.s = []),
                            (this.padding = e),
                            (this.outputBits = r),
                            (this.reset = !0),
                            (this.finalized = !1),
                            (this.block = 0),
                            (this.start = 0),
                            (this.blockCount = (1600 - (t << 1)) >> 5),
                            (this.byteCount = this.blockCount << 2),
                            (this.outputBlocks = r >> 5),
                            (this.extraBytes = (31 & r) >> 3);
                        for (var n = 0; n < 50; ++n) this.s[n] = 0;
                    }
                    function L(t, e, r) {
                        T.call(this, t, e, r);
                    }
                    (T.prototype.update = function (t) {
                        if (this.finalized) throw new Error("finalize already called");
                        var e,
                            r = typeof t;
                        if ("string" !== r) {
                            if ("object" !== r) throw new Error(i);
                            if (null === t) throw new Error(i);
                            if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                            else if (!(Array.isArray(t) || (c && ArrayBuffer.isView(t)))) throw new Error(i);
                            e = !0;
                        }
                        for (var n, o, s = this.blocks, a = this.byteCount, f = t.length, u = this.blockCount, h = 0, d = this.s; h < f; ) {
                            if (this.reset) for (this.reset = !1, s[0] = this.block, n = 1; n < u + 1; ++n) s[n] = 0;
                            if (e) for (n = this.start; h < f && n < a; ++h) s[n >> 2] |= t[h] << l[3 & n++];
                            else
                                for (n = this.start; h < f && n < a; ++h)
                                    (o = t.charCodeAt(h)) < 128
                                        ? (s[n >> 2] |= o << l[3 & n++])
                                        : o < 2048
                                            ? ((s[n >> 2] |= (192 | (o >> 6)) << l[3 & n++]), (s[n >> 2] |= (128 | (63 & o)) << l[3 & n++]))
                                            : o < 55296 || o >= 57344
                                                ? ((s[n >> 2] |= (224 | (o >> 12)) << l[3 & n++]), (s[n >> 2] |= (128 | ((o >> 6) & 63)) << l[3 & n++]), (s[n >> 2] |= (128 | (63 & o)) << l[3 & n++]))
                                                : ((o = 65536 + (((1023 & o) << 10) | (1023 & t.charCodeAt(++h)))),
                                                    (s[n >> 2] |= (240 | (o >> 18)) << l[3 & n++]),
                                                    (s[n >> 2] |= (128 | ((o >> 12) & 63)) << l[3 & n++]),
                                                    (s[n >> 2] |= (128 | ((o >> 6) & 63)) << l[3 & n++]),
                                                    (s[n >> 2] |= (128 | (63 & o)) << l[3 & n++]));
                            if (((this.lastByteIndex = n), n >= a)) {
                                for (this.start = n - a, this.block = s[u], n = 0; n < u; ++n) d[n] ^= s[n];
                                z(d), (this.reset = !0);
                            } else this.start = n;
                        }
                        return this;
                    }),
                        (T.prototype.encode = function (t, e) {
                            var r = 255 & t,
                                n = 1,
                                i = [r];
                            for (r = 255 & (t >>= 8); r > 0; ) i.unshift(r), (r = 255 & (t >>= 8)), ++n;
                            return e ? i.push(n) : i.unshift(n), this.update(i), i.length;
                        }),
                        (T.prototype.encodeString = function (t) {
                            var e,
                                r = typeof t;
                            if ("string" !== r) {
                                if ("object" !== r) throw new Error(i);
                                if (null === t) throw new Error(i);
                                if (c && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                                else if (!(Array.isArray(t) || (c && ArrayBuffer.isView(t)))) throw new Error(i);
                                e = !0;
                            }
                            var n = 0,
                                o = t.length;
                            if (e) n = o;
                            else
                                for (var s = 0; s < t.length; ++s) {
                                    var a = t.charCodeAt(s);
                                    a < 128 ? (n += 1) : a < 2048 ? (n += 2) : a < 55296 || a >= 57344 ? (n += 3) : ((a = 65536 + (((1023 & a) << 10) | (1023 & t.charCodeAt(++s)))), (n += 4));
                                }
                            return (n += this.encode(8 * n)), this.update(t), n;
                        }),
                        (T.prototype.bytepad = function (t, e) {
                            for (var r = this.encode(e), n = 0; n < t.length; ++n) r += this.encodeString(t[n]);
                            var i = e - (r % e),
                                o = [];
                            return (o.length = i), this.update(o), this;
                        }),
                        (T.prototype.finalize = function () {
                            if (!this.finalized) {
                                this.finalized = !0;
                                var t = this.blocks,
                                    e = this.lastByteIndex,
                                    r = this.blockCount,
                                    n = this.s;
                                if (((t[e >> 2] |= this.padding[3 & e]), this.lastByteIndex === this.byteCount)) for (t[0] = t[r], e = 1; e < r + 1; ++e) t[e] = 0;
                                for (t[r - 1] |= 2147483648, e = 0; e < r; ++e) n[e] ^= t[e];
                                z(n);
                            }
                        }),
                        (T.prototype.toString = T.prototype.hex = function () {
                            this.finalize();
                            for (var t, e = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, s = 0, a = ""; s < n; ) {
                                for (o = 0; o < e && s < n; ++o, ++s) (t = r[o]), (a += h[(t >> 4) & 15] + h[15 & t] + h[(t >> 12) & 15] + h[(t >> 8) & 15] + h[(t >> 20) & 15] + h[(t >> 16) & 15] + h[(t >> 28) & 15] + h[(t >> 24) & 15]);
                                s % e == 0 && (z(r), (o = 0));
                            }
                            return i && ((t = r[o]), (a += h[(t >> 4) & 15] + h[15 & t]), i > 1 && (a += h[(t >> 12) & 15] + h[(t >> 8) & 15]), i > 2 && (a += h[(t >> 20) & 15] + h[(t >> 16) & 15])), a;
                        }),
                        (T.prototype.arrayBuffer = function () {
                            this.finalize();
                            var t,
                                e = this.blockCount,
                                r = this.s,
                                n = this.outputBlocks,
                                i = this.extraBytes,
                                o = 0,
                                s = 0,
                                a = this.outputBits >> 3;
                            t = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a);
                            for (var f = new Uint32Array(t); s < n; ) {
                                for (o = 0; o < e && s < n; ++o, ++s) f[s] = r[o];
                                s % e == 0 && z(r);
                            }
                            return i && ((f[o] = r[o]), (t = t.slice(0, a))), t;
                        }),
                        (T.prototype.buffer = T.prototype.arrayBuffer),
                        (T.prototype.digest = T.prototype.array = function () {
                            this.finalize();
                            for (var t, e, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, s = 0, a = 0, f = []; a < i; ) {
                                for (s = 0; s < r && a < i; ++s, ++a) (t = a << 2), (e = n[s]), (f[t] = 255 & e), (f[t + 1] = (e >> 8) & 255), (f[t + 2] = (e >> 16) & 255), (f[t + 3] = (e >> 24) & 255);
                                a % r == 0 && z(n);
                            }
                            return o && ((t = a << 2), (e = n[s]), (f[t] = 255 & e), o > 1 && (f[t + 1] = (e >> 8) & 255), o > 2 && (f[t + 2] = (e >> 16) & 255)), f;
                        }),
                        (L.prototype = new T()),
                        (L.prototype.finalize = function () {
                            return this.encode(this.outputBits, !0), T.prototype.finalize.call(this);
                        });
                    var z = function (t) {
                        var e, r, n, i, o, s, a, f, u, c, h, d, l, b, y, m, g, v, w, M, _, A, S, x, E, k, I, B, P, R, U, O, T, L, z, j, N, q, C, W, K, D, F, $, V, Z, Y, H, J, G, X, Q, tt, et, rt, nt, it, ot, st, at, ft, ut, ct;
                        for (n = 0; n < 48; n += 2)
                            (i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
                                (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
                                (s = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
                                (a = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
                                (f = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
                                (u = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
                                (c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
                                (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
                                (e = (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^ ((s << 1) | (a >>> 31))),
                                (r = (l = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^ ((a << 1) | (s >>> 31))),
                                (t[0] ^= e),
                                (t[1] ^= r),
                                (t[10] ^= e),
                                (t[11] ^= r),
                                (t[20] ^= e),
                                (t[21] ^= r),
                                (t[30] ^= e),
                                (t[31] ^= r),
                                (t[40] ^= e),
                                (t[41] ^= r),
                                (e = i ^ ((f << 1) | (u >>> 31))),
                                (r = o ^ ((u << 1) | (f >>> 31))),
                                (t[2] ^= e),
                                (t[3] ^= r),
                                (t[12] ^= e),
                                (t[13] ^= r),
                                (t[22] ^= e),
                                (t[23] ^= r),
                                (t[32] ^= e),
                                (t[33] ^= r),
                                (t[42] ^= e),
                                (t[43] ^= r),
                                (e = s ^ ((c << 1) | (h >>> 31))),
                                (r = a ^ ((h << 1) | (c >>> 31))),
                                (t[4] ^= e),
                                (t[5] ^= r),
                                (t[14] ^= e),
                                (t[15] ^= r),
                                (t[24] ^= e),
                                (t[25] ^= r),
                                (t[34] ^= e),
                                (t[35] ^= r),
                                (t[44] ^= e),
                                (t[45] ^= r),
                                (e = f ^ ((d << 1) | (l >>> 31))),
                                (r = u ^ ((l << 1) | (d >>> 31))),
                                (t[6] ^= e),
                                (t[7] ^= r),
                                (t[16] ^= e),
                                (t[17] ^= r),
                                (t[26] ^= e),
                                (t[27] ^= r),
                                (t[36] ^= e),
                                (t[37] ^= r),
                                (t[46] ^= e),
                                (t[47] ^= r),
                                (e = c ^ ((i << 1) | (o >>> 31))),
                                (r = h ^ ((o << 1) | (i >>> 31))),
                                (t[8] ^= e),
                                (t[9] ^= r),
                                (t[18] ^= e),
                                (t[19] ^= r),
                                (t[28] ^= e),
                                (t[29] ^= r),
                                (t[38] ^= e),
                                (t[39] ^= r),
                                (t[48] ^= e),
                                (t[49] ^= r),
                                (b = t[0]),
                                (y = t[1]),
                                (Z = (t[11] << 4) | (t[10] >>> 28)),
                                (Y = (t[10] << 4) | (t[11] >>> 28)),
                                (B = (t[20] << 3) | (t[21] >>> 29)),
                                (P = (t[21] << 3) | (t[20] >>> 29)),
                                (at = (t[31] << 9) | (t[30] >>> 23)),
                                (ft = (t[30] << 9) | (t[31] >>> 23)),
                                (D = (t[40] << 18) | (t[41] >>> 14)),
                                (F = (t[41] << 18) | (t[40] >>> 14)),
                                (L = (t[2] << 1) | (t[3] >>> 31)),
                                (z = (t[3] << 1) | (t[2] >>> 31)),
                                (m = (t[13] << 12) | (t[12] >>> 20)),
                                (g = (t[12] << 12) | (t[13] >>> 20)),
                                (H = (t[22] << 10) | (t[23] >>> 22)),
                                (J = (t[23] << 10) | (t[22] >>> 22)),
                                (R = (t[33] << 13) | (t[32] >>> 19)),
                                (U = (t[32] << 13) | (t[33] >>> 19)),
                                (ut = (t[42] << 2) | (t[43] >>> 30)),
                                (ct = (t[43] << 2) | (t[42] >>> 30)),
                                (et = (t[5] << 30) | (t[4] >>> 2)),
                                (rt = (t[4] << 30) | (t[5] >>> 2)),
                                (j = (t[14] << 6) | (t[15] >>> 26)),
                                (N = (t[15] << 6) | (t[14] >>> 26)),
                                (v = (t[25] << 11) | (t[24] >>> 21)),
                                (w = (t[24] << 11) | (t[25] >>> 21)),
                                (G = (t[34] << 15) | (t[35] >>> 17)),
                                (X = (t[35] << 15) | (t[34] >>> 17)),
                                (O = (t[45] << 29) | (t[44] >>> 3)),
                                (T = (t[44] << 29) | (t[45] >>> 3)),
                                (x = (t[6] << 28) | (t[7] >>> 4)),
                                (E = (t[7] << 28) | (t[6] >>> 4)),
                                (nt = (t[17] << 23) | (t[16] >>> 9)),
                            (it = (t[16] << 23) | (t[17] >>> 9)),
                            (q = (t[26] << 25) | (t[27] >>> 7)),
                            (C = (t[27] << 25) | (t[26] >>> 7)),
                            (M = (t[36] << 21) | (t[37] >>> 11)),
                            (_ = (t[37] << 21) | (t[36] >>> 11)),
                            (Q = (t[47] << 24) | (t[46] >>> 8)),
                            (tt = (t[46] << 24) | (t[47] >>> 8)),
                            ($ = (t[8] << 27) | (t[9] >>> 5)),
                            (V = (t[9] << 27) | (t[8] >>> 5)),
                            (k = (t[18] << 20) | (t[19] >>> 12)),
                            (I = (t[19] << 20) | (t[18] >>> 12)),
                            (ot = (t[29] << 7) | (t[28] >>> 25)),
                            (st = (t[28] << 7) | (t[29] >>> 25)),
                            (W = (t[38] << 8) | (t[39] >>> 24)),
                            (K = (t[39] << 8) | (t[38] >>> 24)),
                            (A = (t[48] << 14) | (t[49] >>> 18)),
                            (S = (t[49] << 14) | (t[48] >>> 18)),
                            (t[0] = b ^ (~m & v)),
                            (t[1] = y ^ (~g & w)),
                            (t[10] = x ^ (~k & B)),
                            (t[11] = E ^ (~I & P)),
                            (t[20] = L ^ (~j & q)),
                            (t[21] = z ^ (~N & C)),
                            (t[30] = $ ^ (~Z & H)),
                            (t[31] = V ^ (~Y & J)),
                            (t[40] = et ^ (~nt & ot)),
                            (t[41] = rt ^ (~it & st)),
                            (t[2] = m ^ (~v & M)),
                            (t[3] = g ^ (~w & _)),
                            (t[12] = k ^ (~B & R)),
                            (t[13] = I ^ (~P & U)),
                            (t[22] = j ^ (~q & W)),
                            (t[23] = N ^ (~C & K)),
                            (t[32] = Z ^ (~H & G)),
                            (t[33] = Y ^ (~J & X)),
                            (t[42] = nt ^ (~ot & at)),
                            (t[43] = it ^ (~st & ft)),
                            (t[4] = v ^ (~M & A)),
                            (t[5] = w ^ (~_ & S)),
                            (t[14] = B ^ (~R & O)),
                            (t[15] = P ^ (~U & T)),
                            (t[24] = q ^ (~W & D)),
                            (t[25] = C ^ (~K & F)),
                            (t[34] = H ^ (~G & Q)),
                            (t[35] = J ^ (~X & tt)),
                            (t[44] = ot ^ (~at & ut)),
                            (t[45] = st ^ (~ft & ct)),
                            (t[6] = M ^ (~A & b)),
                            (t[7] = _ ^ (~S & y)),
                            (t[16] = R ^ (~O & x)),
                            (t[17] = U ^ (~T & E)),
                            (t[26] = W ^ (~D & L)),
                            (t[27] = K ^ (~F & z)),
                            (t[36] = G ^ (~Q & $)),
                            (t[37] = X ^ (~tt & V)),
                            (t[46] = at ^ (~ut & et)),
                            (t[47] = ft ^ (~ct & rt)),
                            (t[8] = A ^ (~b & m)),
                            (t[9] = S ^ (~y & g)),
                            (t[18] = O ^ (~x & k)),
                            (t[19] = T ^ (~E & I)),
                            (t[28] = D ^ (~L & j)),
                            (t[29] = F ^ (~z & N)),
                            (t[38] = Q ^ (~$ & Z)),
                            (t[39] = tt ^ (~V & Y)),
                            (t[48] = ut ^ (~et & nt)),
                            (t[49] = ct ^ (~rt & it)),
                            (t[0] ^= p[n]),
                            (t[1] ^= p[n + 1]);
                    };
                    if (f) t.exports = E;
                    else {
                        for (I = 0; I < k.length; ++I) s[k[I]] = E[k[I]];
                        u &&
                        (void 0 ===
                            (n = function () {
                                return E;
                            }.call(e, r, e, t)) ||
                            (t.exports = n));
                    }
                })();
            },
            9746: (t) => {
                function e(t, e) {
                    if (!t) throw new Error(e || "Assertion failed");
                }
                (t.exports = e),
                    (e.equal = function (t, e, r) {
                        if (t != e) throw new Error(r || "Assertion failed: " + t + " != " + e);
                    });
            },
            4504: (t, e) => {
                "use strict";
                var r = e;
                function n(t) {
                    return 1 === t.length ? "0" + t : t;
                }
                function i(t) {
                    for (var e = "", r = 0; r < t.length; r++) e += n(t[r].toString(16));
                    return e;
                }
                (r.toArray = function (t, e) {
                    if (Array.isArray(t)) return t.slice();
                    if (!t) return [];
                    var r = [];
                    if ("string" != typeof t) {
                        for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                        return r;
                    }
                    if ("hex" === e) for ((t = t.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (t = "0" + t), n = 0; n < t.length; n += 2) r.push(parseInt(t[n] + t[n + 1], 16));
                    else
                        for (n = 0; n < t.length; n++) {
                            var i = t.charCodeAt(n),
                                o = i >> 8,
                                s = 255 & i;
                            o ? r.push(o, s) : r.push(s);
                        }
                    return r;
                }),
                    (r.zero2 = n),
                    (r.toHex = i),
                    (r.encode = function (t, e) {
                        return "hex" === e ? i(t) : t;
                    });
            },
            5666: (t) => {
                var e = (function (t) {
                    "use strict";
                    var e,
                        r = Object.prototype,
                        n = r.hasOwnProperty,
                        i = "function" == typeof Symbol ? Symbol : {},
                        o = i.iterator || "@@iterator",
                        s = i.asyncIterator || "@@asyncIterator",
                        a = i.toStringTag || "@@toStringTag";
                    function f(t, e, r) {
                        return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
                    }
                    try {
                        f({}, "");
                    } catch (t) {
                        f = function (t, e, r) {
                            return (t[e] = r);
                        };
                    }
                    function u(t, e, r, n) {
                        var i = e && e.prototype instanceof y ? e : y,
                            o = Object.create(i.prototype),
                            s = new I(n || []);
                        return (
                            (o._invoke = (function (t, e, r) {
                                var n = h;
                                return function (i, o) {
                                    if (n === l) throw new Error("Generator is already running");
                                    if (n === p) {
                                        if ("throw" === i) throw o;
                                        return P();
                                    }
                                    for (r.method = i, r.arg = o; ; ) {
                                        var s = r.delegate;
                                        if (s) {
                                            var a = x(s, r);
                                            if (a) {
                                                if (a === b) continue;
                                                return a;
                                            }
                                        }
                                        if ("next" === r.method) r.sent = r._sent = r.arg;
                                        else if ("throw" === r.method) {
                                            if (n === h) throw ((n = p), r.arg);
                                            r.dispatchException(r.arg);
                                        } else "return" === r.method && r.abrupt("return", r.arg);
                                        n = l;
                                        var f = c(t, e, r);
                                        if ("normal" === f.type) {
                                            if (((n = r.done ? p : d), f.arg === b)) continue;
                                            return { value: f.arg, done: r.done };
                                        }
                                        "throw" === f.type && ((n = p), (r.method = "throw"), (r.arg = f.arg));
                                    }
                                };
                            })(t, r, s)),
                                o
                        );
                    }
                    function c(t, e, r) {
                        try {
                            return { type: "normal", arg: t.call(e, r) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    t.wrap = u;
                    var h = "suspendedStart",
                        d = "suspendedYield",
                        l = "executing",
                        p = "completed",
                        b = {};
                    function y() {}
                    function m() {}
                    function g() {}
                    var v = {};
                    f(v, o, function () {
                        return this;
                    });
                    var w = Object.getPrototypeOf,
                        M = w && w(w(B([])));
                    M && M !== r && n.call(M, o) && (v = M);
                    var _ = (g.prototype = y.prototype = Object.create(v));
                    function A(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            f(t, e, function (t) {
                                return this._invoke(e, t);
                            });
                        });
                    }
                    function S(t, e) {
                        function r(i, o, s, a) {
                            var f = c(t[i], t, o);
                            if ("throw" !== f.type) {
                                var u = f.arg,
                                    h = u.value;
                                return h && "object" == typeof h && n.call(h, "__await")
                                    ? e.resolve(h.__await).then(
                                        function (t) {
                                            r("next", t, s, a);
                                        },
                                        function (t) {
                                            r("throw", t, s, a);
                                        }
                                    )
                                    : e.resolve(h).then(
                                        function (t) {
                                            (u.value = t), s(u);
                                        },
                                        function (t) {
                                            return r("throw", t, s, a);
                                        }
                                    );
                            }
                            a(f.arg);
                        }
                        var i;
                        this._invoke = function (t, n) {
                            function o() {
                                return new e(function (e, i) {
                                    r(t, n, e, i);
                                });
                            }
                            return (i = i ? i.then(o, o) : o());
                        };
                    }
                    function x(t, r) {
                        var n = t.iterator[r.method];
                        if (n === e) {
                            if (((r.delegate = null), "throw" === r.method)) {
                                if (t.iterator.return && ((r.method = "return"), (r.arg = e), x(t, r), "throw" === r.method)) return b;
                                (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
                            }
                            return b;
                        }
                        var i = c(n, t.iterator, r.arg);
                        if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), b;
                        var o = i.arg;
                        return o
                            ? o.done
                                ? ((r[t.resultName] = o.value), (r.next = t.nextLoc), "return" !== r.method && ((r.method = "next"), (r.arg = e)), (r.delegate = null), b)
                                : o
                            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), b);
                    }
                    function E(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                    }
                    function k(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function I(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(E, this), this.reset(!0);
                    }
                    function B(t) {
                        if (t) {
                            var r = t[o];
                            if (r) return r.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var i = -1,
                                    s = function r() {
                                        for (; ++i < t.length; ) if (n.call(t, i)) return (r.value = t[i]), (r.done = !1), r;
                                        return (r.value = e), (r.done = !0), r;
                                    };
                                return (s.next = s);
                            }
                        }
                        return { next: P };
                    }
                    function P() {
                        return { value: e, done: !0 };
                    }
                    return (
                        (m.prototype = g),
                            f(_, "constructor", g),
                            f(g, "constructor", m),
                            (m.displayName = f(g, a, "GeneratorFunction")),
                            (t.isGeneratorFunction = function (t) {
                                var e = "function" == typeof t && t.constructor;
                                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name));
                            }),
                            (t.mark = function (t) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : ((t.__proto__ = g), f(t, a, "GeneratorFunction")), (t.prototype = Object.create(_)), t;
                            }),
                            (t.awrap = function (t) {
                                return { __await: t };
                            }),
                            A(S.prototype),
                            f(S.prototype, s, function () {
                                return this;
                            }),
                            (t.AsyncIterator = S),
                            (t.async = function (e, r, n, i, o) {
                                void 0 === o && (o = Promise);
                                var s = new S(u(e, r, n, i), o);
                                return t.isGeneratorFunction(r)
                                    ? s
                                    : s.next().then(function (t) {
                                        return t.done ? t.value : s.next();
                                    });
                            }),
                            A(_),
                            f(_, a, "Generator"),
                            f(_, o, function () {
                                return this;
                            }),
                            f(_, "toString", function () {
                                return "[object Generator]";
                            }),
                            (t.keys = function (t) {
                                var e = [];
                                for (var r in t) e.push(r);
                                return (
                                    e.reverse(),
                                        function r() {
                                            for (; e.length; ) {
                                                var n = e.pop();
                                                if (n in t) return (r.value = n), (r.done = !1), r;
                                            }
                                            return (r.done = !0), r;
                                        }
                                );
                            }),
                            (t.values = B),
                            (I.prototype = {
                                constructor: I,
                                reset: function (t) {
                                    if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = e), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = e), this.tryEntries.forEach(k), !t))
                                        for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var t = this.tryEntries[0].completion;
                                    if ("throw" === t.type) throw t.arg;
                                    return this.rval;
                                },
                                dispatchException: function (t) {
                                    if (this.done) throw t;
                                    var r = this;
                                    function i(n, i) {
                                        return (a.type = "throw"), (a.arg = t), (r.next = n), i && ((r.method = "next"), (r.arg = e)), !!i;
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var s = this.tryEntries[o],
                                            a = s.completion;
                                        if ("root" === s.tryLoc) return i("end");
                                        if (s.tryLoc <= this.prev) {
                                            var f = n.call(s, "catchLoc"),
                                                u = n.call(s, "finallyLoc");
                                            if (f && u) {
                                                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                                if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                                            } else if (f) {
                                                if (this.prev < s.catchLoc) return i(s.catchLoc, !0);
                                            } else {
                                                if (!u) throw new Error("try statement without catch or finally");
                                                if (this.prev < s.finallyLoc) return i(s.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (t, e) {
                                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                        var i = this.tryEntries[r];
                                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                            var o = i;
                                            break;
                                        }
                                    }
                                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                                    var s = o ? o.completion : {};
                                    return (s.type = t), (s.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), b) : this.complete(s);
                                },
                                complete: function (t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return (
                                        "break" === t.type || "continue" === t.type
                                            ? (this.next = t.arg)
                                            : "return" === t.type
                                                ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                                : "normal" === t.type && e && (this.next = e),
                                            b
                                    );
                                },
                                finish: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var r = this.tryEntries[e];
                                        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), b;
                                    }
                                },
                                catch: function (t) {
                                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                        var r = this.tryEntries[e];
                                        if (r.tryLoc === t) {
                                            var n = r.completion;
                                            if ("throw" === n.type) {
                                                var i = n.arg;
                                                k(r);
                                            }
                                            return i;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (t, r, n) {
                                    return (this.delegate = { iterator: B(t), resultName: r, nextLoc: n }), "next" === this.method && (this.arg = e), b;
                                },
                            }),
                            t
                    );
                })(t.exports);
                try {
                    regeneratorRuntime = e;
                } catch (t) {
                    "object" == typeof globalThis ? (globalThis.regeneratorRuntime = e) : Function("r", "regeneratorRuntime = r")(e);
                }
            },
            3937: (t, e, r) => {
                "use strict";
                var n = r(5318);
                n(r(4575)), n(r(2205)), n(r(8585)), n(r(9754)), n(r(9062));
                n(r(6855)).default;
            },
            6855: (t, e, r) => {
                "use strict";
                var n = r(5318);
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
                var i = n(r(7757)),
                    o = n(r(8926)),
                    s = n(r(8)),
                    a = n(r(4575)),
                    f = n(r(3913)),
                    u = n(r(2205)),
                    c = n(r(8585)),
                    h = n(r(9754)),
                    d = r(6729),
                    l = n(r(7953));
                var p = function (t, e) {
                        var r = {};
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                        }
                        return r;
                    },
                    b = (function (t) {
                        (0, u.default)(g, t);
                        var e,
                            r,
                            n,
                            d,
                            b,
                            y,
                            m =
                                ((b = g),
                                    (y = (function () {
                                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                        if (Reflect.construct.sham) return !1;
                                        if ("function" == typeof Proxy) return !0;
                                        try {
                                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                        } catch (t) {
                                            return !1;
                                        }
                                    })()),
                                    function () {
                                        var t,
                                            e = (0, h.default)(b);
                                        if (y) {
                                            var r = (0, h.default)(this).constructor;
                                            t = Reflect.construct(e, arguments, r);
                                        } else t = e.apply(this, arguments);
                                        return (0, c.default)(this, t);
                                    });
                        function g(t) {
                            var e,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ws://localhost:8080",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = arguments.length > 3 ? arguments[3] : void 0;
                            (0, a.default)(this, g);
                            var o = n.autoconnect,
                                s = void 0 === o || o,
                                f = n.reconnect,
                                u = void 0 === f || f,
                                c = n.reconnect_interval,
                                h = void 0 === c ? 1e3 : c,
                                d = n.max_reconnects,
                                l = void 0 === d ? 5 : d,
                                b = p(n, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
                            return (
                                ((e = m.call(this)).webSocketFactory = t),
                                    (e.queue = {}),
                                    (e.rpc_id = 0),
                                    (e.address = r),
                                    (e.autoconnect = s),
                                    (e.ready = !1),
                                    (e.reconnect = u),
                                    (e.reconnect_interval = h),
                                    (e.max_reconnects = l),
                                    (e.rest_options = b),
                                    (e.current_reconnects = 0),
                                    (e.generate_request_id =
                                        i ||
                                        function () {
                                            return ++e.rpc_id;
                                        }),
                                e.autoconnect && e._connect(e.address, Object.assign({ autoconnect: e.autoconnect, reconnect: e.reconnect, reconnect_interval: e.reconnect_interval, max_reconnects: e.max_reconnects }, e.rest_options)),
                                    e
                            );
                        }
                        return (
                            (0, f.default)(g, [
                                {
                                    key: "connect",
                                    value: function () {
                                        this.socket ||
                                        this._connect(
                                            this.address,
                                            Object.assign({ autoconnect: this.autoconnect, reconnect: this.reconnect, reconnect_interval: this.reconnect_interval, max_reconnects: this.max_reconnects }, this.rest_options)
                                        );
                                    },
                                },
                                {
                                    key: "call",
                                    value: function (t, e, r, n) {
                                        var i = this;
                                        return (
                                            n || "object" !== (0, s.default)(r) || ((n = r), (r = null)),
                                                new Promise(function (o, s) {
                                                    if (!i.ready) return s(new Error("socket not ready"));
                                                    var a = i.generate_request_id(t, e),
                                                        f = { jsonrpc: "2.0", method: t, params: e || null, id: a };
                                                    i.socket.send(JSON.stringify(f), n, function (t) {
                                                        if (t) return s(t);
                                                        (i.queue[a] = { promise: [o, s] }),
                                                        r &&
                                                        (i.queue[a].timeout = setTimeout(function () {
                                                            (i.queue[a] = null), s(new Error("reply timeout"));
                                                        }, r));
                                                    });
                                                })
                                        );
                                    },
                                },
                                {
                                    key: "login",
                                    value:
                                        ((d = (0, o.default)(
                                            i.default.mark(function t(e) {
                                                var r;
                                                return i.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (t.next = 2), this.call("rpc.login", e);
                                                                case 2:
                                                                    if ((r = t.sent)) {
                                                                        t.next = 5;
                                                                        break;
                                                                    }
                                                                    throw new Error("authentication failed");
                                                                case 5:
                                                                    return t.abrupt("return", r);
                                                                case 6:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this
                                                );
                                            })
                                        )),
                                            function (t) {
                                                return d.apply(this, arguments);
                                            }),
                                },
                                {
                                    key: "listMethods",
                                    value:
                                        ((n = (0, o.default)(
                                            i.default.mark(function t() {
                                                return i.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return (t.next = 2), this.call("__listMethods");
                                                                case 2:
                                                                    return t.abrupt("return", t.sent);
                                                                case 3:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this
                                                );
                                            })
                                        )),
                                            function () {
                                                return n.apply(this, arguments);
                                            }),
                                },
                                {
                                    key: "notify",
                                    value: function (t, e) {
                                        var r = this;
                                        return new Promise(function (n, i) {
                                            if (!r.ready) return i(new Error("socket not ready"));
                                            var o = { jsonrpc: "2.0", method: t, params: e || null };
                                            r.socket.send(JSON.stringify(o), function (t) {
                                                if (t) return i(t);
                                                n();
                                            });
                                        });
                                    },
                                },
                                {
                                    key: "subscribe",
                                    value:
                                        ((r = (0, o.default)(
                                            i.default.mark(function t(e) {
                                                var r;
                                                return i.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return "string" == typeof e && (e = [e]), (t.next = 3), this.call("rpc.on", e);
                                                                case 3:
                                                                    if (((r = t.sent), "string" != typeof e || "ok" === r[e])) {
                                                                        t.next = 6;
                                                                        break;
                                                                    }
                                                                    throw new Error("Failed subscribing to an event '" + e + "' with: " + r[e]);
                                                                case 6:
                                                                    return t.abrupt("return", r);
                                                                case 7:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this
                                                );
                                            })
                                        )),
                                            function (t) {
                                                return r.apply(this, arguments);
                                            }),
                                },
                                {
                                    key: "unsubscribe",
                                    value:
                                        ((e = (0, o.default)(
                                            i.default.mark(function t(e) {
                                                var r;
                                                return i.default.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return "string" == typeof e && (e = [e]), (t.next = 3), this.call("rpc.off", e);
                                                                case 3:
                                                                    if (((r = t.sent), "string" != typeof e || "ok" === r[e])) {
                                                                        t.next = 6;
                                                                        break;
                                                                    }
                                                                    throw new Error("Failed unsubscribing from an event with: " + r);
                                                                case 6:
                                                                    return t.abrupt("return", r);
                                                                case 7:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this
                                                );
                                            })
                                        )),
                                            function (t) {
                                                return e.apply(this, arguments);
                                            }),
                                },
                                {
                                    key: "close",
                                    value: function (t, e) {
                                        this.socket.close(t || 1e3, e);
                                    },
                                },
                                {
                                    key: "_connect",
                                    value: function (t, e) {
                                        var r = this;
                                        (this.socket = this.webSocketFactory(t, e)),
                                            this.socket.addEventListener("open", function () {
                                                (r.ready = !0), r.emit("open"), (r.current_reconnects = 0);
                                            }),
                                            this.socket.addEventListener("message", function (t) {
                                                var e = t.data;
                                                e instanceof ArrayBuffer && (e = Buffer.from(e).toString());
                                                try {
                                                    e = l.default.parse(e);
                                                } catch (t) {
                                                    return;
                                                }
                                                if (e.notification && r.listeners(e.notification).length) {
                                                    if (!Object.keys(e.params).length) return r.emit(e.notification);
                                                    var n = [e.notification];
                                                    if (e.params.constructor === Object) n.push(e.params);
                                                    else for (var i = 0; i < e.params.length; i++) n.push(e.params[i]);
                                                    return Promise.resolve().then(function () {
                                                        r.emit.apply(r, n);
                                                    });
                                                }
                                                if (!r.queue[e.id])
                                                    return e.method && e.params
                                                        ? Promise.resolve().then(function () {
                                                            r.emit(e.method, e.params);
                                                        })
                                                        : void 0;
                                                "error" in e == "result" in e && r.queue[e.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),
                                                r.queue[e.id].timeout && clearTimeout(r.queue[e.id].timeout),
                                                    e.error ? r.queue[e.id].promise[1](e.error) : r.queue[e.id].promise[0](e.result),
                                                    (r.queue[e.id] = null);
                                            }),
                                            this.socket.addEventListener("error", function (t) {
                                                return r.emit("error", t);
                                            }),
                                            this.socket.addEventListener("close", function (n) {
                                                var i = n.code,
                                                    o = n.reason;
                                                r.ready &&
                                                setTimeout(function () {
                                                    return r.emit("close", i, o);
                                                }, 0),
                                                    (r.ready = !1),
                                                    (r.socket = void 0),
                                                1e3 !== i &&
                                                (r.current_reconnects++,
                                                r.reconnect &&
                                                (r.max_reconnects > r.current_reconnects || 0 === r.max_reconnects) &&
                                                setTimeout(function () {
                                                    return r._connect(t, e);
                                                }, r.reconnect_interval));
                                            });
                                    },
                                },
                            ]),
                                g
                        );
                    })(d.EventEmitter);
                e.default = b;
            },
            9062: (t, e, r) => {
                "use strict";
                var n = r(5318);
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = function (t, e) {
                        return new u(t, e);
                    });
                var i = n(r(4575)),
                    o = n(r(3913)),
                    s = n(r(2205)),
                    a = n(r(8585)),
                    f = n(r(9754));
                var u = (function (t) {
                    (0, s.default)(u, t);
                    var e,
                        r,
                        n =
                            ((e = u),
                                (r = (function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                    if (Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                                    } catch (t) {
                                        return !1;
                                    }
                                })()),
                                function () {
                                    var t,
                                        n = (0, f.default)(e);
                                    if (r) {
                                        var i = (0, f.default)(this).constructor;
                                        t = Reflect.construct(n, arguments, i);
                                    } else t = n.apply(this, arguments);
                                    return (0, a.default)(this, t);
                                });
                    function u(t, e, r) {
                        var o;
                        return (
                            (0, i.default)(this, u),
                                ((o = n.call(this)).socket = new window.WebSocket(t, r)),
                                (o.socket.onopen = function () {
                                    return o.emit("open");
                                }),
                                (o.socket.onmessage = function (t) {
                                    return o.emit("message", t.data);
                                }),
                                (o.socket.onerror = function (t) {
                                    return o.emit("error", t);
                                }),
                                (o.socket.onclose = function (t) {
                                    o.emit("close", t.code, t.reason);
                                }),
                                o
                        );
                    }
                    return (
                        (0, o.default)(u, [
                            {
                                key: "send",
                                value: function (t, e, r) {
                                    var n = r || e;
                                    try {
                                        this.socket.send(t), n();
                                    } catch (t) {
                                        n(t);
                                    }
                                },
                            },
                            {
                                key: "close",
                                value: function (t, e) {
                                    this.socket.close(t, e);
                                },
                            },
                            {
                                key: "addEventListener",
                                value: function (t, e, r) {
                                    this.socket.addEventListener(t, e, r);
                                },
                            },
                        ]),
                            u
                    );
                })(r(6729).EventEmitter);
            },
            9509: (t, e, r) => {
                var n = r(8764),
                    i = n.Buffer;
                function o(t, e) {
                    for (var r in t) e[r] = t[r];
                }
                function s(t, e, r) {
                    return i(t, e, r);
                }
                i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? (t.exports = n) : (o(n, e), (e.Buffer = s)),
                    (s.prototype = Object.create(i.prototype)),
                    o(i, s),
                    (s.from = function (t, e, r) {
                        if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                        return i(t, e, r);
                    }),
                    (s.alloc = function (t, e, r) {
                        if ("number" != typeof t) throw new TypeError("Argument must be a number");
                        var n = i(t);
                        return void 0 !== e ? ("string" == typeof r ? n.fill(e, r) : n.fill(e)) : n.fill(0), n;
                    }),
                    (s.allocUnsafe = function (t) {
                        if ("number" != typeof t) throw new TypeError("Argument must be a number");
                        return i(t);
                    }),
                    (s.allocUnsafeSlow = function (t) {
                        if ("number" != typeof t) throw new TypeError("Argument must be a number");
                        return n.SlowBuffer(t);
                    });
            },
            7221: (t, e, r) => {
                t.exports = r(9119)(r(8573));
            },
            8573: (t, e, r) => {
                const n = new (0, r(6266).ec)("secp256k1"),
                    i = n.curve,
                    o = i.n.constructor;
                function s(t) {
                    const e = t[0];
                    switch (e) {
                        case 2:
                        case 3:
                            return 33 !== t.length
                                ? null
                                : (function (t, e) {
                                    let r = new o(e);
                                    if (r.cmp(i.p) >= 0) return null;
                                    r = r.toRed(i.red);
                                    let s = r.redSqr().redIMul(r).redIAdd(i.b).redSqrt();
                                    return (3 === t) !== s.isOdd() && (s = s.redNeg()), n.keyPair({ pub: { x: r, y: s } });
                                })(e, t.subarray(1, 33));
                        case 4:
                        case 6:
                        case 7:
                            return 65 !== t.length
                                ? null
                                : (function (t, e, r) {
                                    let s = new o(e),
                                        a = new o(r);
                                    if (s.cmp(i.p) >= 0 || a.cmp(i.p) >= 0) return null;
                                    if (((s = s.toRed(i.red)), (a = a.toRed(i.red)), (6 === t || 7 === t) && a.isOdd() !== (7 === t))) return null;
                                    const f = s.redSqr().redIMul(s);
                                    return a.redSqr().redISub(f.redIAdd(i.b)).isZero() ? n.keyPair({ pub: { x: s, y: a } }) : null;
                                })(e, t.subarray(1, 33), t.subarray(33, 65));
                        default:
                            return null;
                    }
                }
                function a(t, e) {
                    const r = e.encode(null, 33 === t.length);
                    for (let e = 0; e < t.length; ++e) t[e] = r[e];
                }
                t.exports = {
                    contextRandomize: () => 0,
                    privateKeyVerify(t) {
                        const e = new o(t);
                        return e.cmp(i.n) < 0 && !e.isZero() ? 0 : 1;
                    },
                    privateKeyNegate(t) {
                        const e = new o(t),
                            r = i.n.sub(e).umod(i.n).toArrayLike(Uint8Array, "be", 32);
                        return t.set(r), 0;
                    },
                    privateKeyTweakAdd(t, e) {
                        const r = new o(e);
                        if (r.cmp(i.n) >= 0) return 1;
                        if ((r.iadd(new o(t)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero())) return 1;
                        const n = r.toArrayLike(Uint8Array, "be", 32);
                        return t.set(n), 0;
                    },
                    privateKeyTweakMul(t, e) {
                        let r = new o(e);
                        if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                        r.imul(new o(t)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
                        const n = r.toArrayLike(Uint8Array, "be", 32);
                        return t.set(n), 0;
                    },
                    publicKeyVerify: (t) => (null === s(t) ? 1 : 0),
                    publicKeyCreate(t, e) {
                        const r = new o(e);
                        return r.cmp(i.n) >= 0 || r.isZero() ? 1 : (a(t, n.keyFromPrivate(e).getPublic()), 0);
                    },
                    publicKeyConvert(t, e) {
                        const r = s(e);
                        return null === r ? 1 : (a(t, r.getPublic()), 0);
                    },
                    publicKeyNegate(t, e) {
                        const r = s(e);
                        if (null === r) return 1;
                        const n = r.getPublic();
                        return (n.y = n.y.redNeg()), a(t, n), 0;
                    },
                    publicKeyCombine(t, e) {
                        const r = new Array(e.length);
                        for (let t = 0; t < e.length; ++t) if (((r[t] = s(e[t])), null === r[t])) return 1;
                        let n = r[0].getPublic();
                        for (let t = 1; t < r.length; ++t) n = n.add(r[t].pub);
                        return n.isInfinity() ? 2 : (a(t, n), 0);
                    },
                    publicKeyTweakAdd(t, e, r) {
                        const n = s(e);
                        if (null === n) return 1;
                        if ((r = new o(r)).cmp(i.n) >= 0) return 2;
                        const f = n.getPublic().add(i.g.mul(r));
                        return f.isInfinity() ? 2 : (a(t, f), 0);
                    },
                    publicKeyTweakMul(t, e, r) {
                        const n = s(e);
                        return null === n ? 1 : (r = new o(r)).cmp(i.n) >= 0 || r.isZero() ? 2 : (a(t, n.getPublic().mul(r)), 0);
                    },
                    signatureNormalize(t) {
                        const e = new o(t.subarray(0, 32)),
                            r = new o(t.subarray(32, 64));
                        return e.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && t.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0);
                    },
                    signatureExport(t, e) {
                        const r = e.subarray(0, 32),
                            n = e.subarray(32, 64);
                        if (new o(r).cmp(i.n) >= 0) return 1;
                        if (new o(n).cmp(i.n) >= 0) return 1;
                        const { output: s } = t;
                        let a = s.subarray(4, 37);
                        (a[0] = 0), a.set(r, 1);
                        let f = 33,
                            u = 0;
                        for (; f > 1 && 0 === a[u] && !(128 & a[u + 1]); --f, ++u);
                        if (((a = a.subarray(u)), 128 & a[0])) return 1;
                        if (f > 1 && 0 === a[0] && !(128 & a[1])) return 1;
                        let c = s.subarray(39, 72);
                        (c[0] = 0), c.set(n, 1);
                        let h = 33,
                            d = 0;
                        for (; h > 1 && 0 === c[d] && !(128 & c[d + 1]); --h, ++d);
                        return (
                            (c = c.subarray(d)),
                                128 & c[0] || (h > 1 && 0 === c[0] && !(128 & c[1]))
                                    ? 1
                                    : ((t.outputlen = 6 + f + h), (s[0] = 48), (s[1] = t.outputlen - 2), (s[2] = 2), (s[3] = a.length), s.set(a, 4), (s[4 + f] = 2), (s[5 + f] = c.length), s.set(c, 6 + f), 0)
                        );
                    },
                    signatureImport(t, e) {
                        if (e.length < 8) return 1;
                        if (e.length > 72) return 1;
                        if (48 !== e[0]) return 1;
                        if (e[1] !== e.length - 2) return 1;
                        if (2 !== e[2]) return 1;
                        const r = e[3];
                        if (0 === r) return 1;
                        if (5 + r >= e.length) return 1;
                        if (2 !== e[4 + r]) return 1;
                        const n = e[5 + r];
                        if (0 === n) return 1;
                        if (6 + r + n !== e.length) return 1;
                        if (128 & e[4]) return 1;
                        if (r > 1 && 0 === e[4] && !(128 & e[5])) return 1;
                        if (128 & e[r + 6]) return 1;
                        if (n > 1 && 0 === e[r + 6] && !(128 & e[r + 7])) return 1;
                        let s = e.subarray(4, 4 + r);
                        if ((33 === s.length && 0 === s[0] && (s = s.subarray(1)), s.length > 32)) return 1;
                        let a = e.subarray(6 + r);
                        if ((33 === a.length && 0 === a[0] && (a = a.slice(1)), a.length > 32)) throw new Error("S length is too long");
                        let f = new o(s);
                        f.cmp(i.n) >= 0 && (f = new o(0));
                        let u = new o(e.subarray(6 + r));
                        return u.cmp(i.n) >= 0 && (u = new o(0)), t.set(f.toArrayLike(Uint8Array, "be", 32), 0), t.set(u.toArrayLike(Uint8Array, "be", 32), 32), 0;
                    },
                    ecdsaSign(t, e, r, s, a) {
                        if (a) {
                            const t = a;
                            a = (n) => {
                                const i = t(e, r, null, s, n);
                                if (!(i instanceof Uint8Array && 32 === i.length)) throw new Error("This is the way");
                                return new o(i);
                            };
                        }
                        const f = new o(r);
                        if (f.cmp(i.n) >= 0 || f.isZero()) return 1;
                        let u;
                        try {
                            u = n.sign(e, r, { canonical: !0, k: a, pers: s });
                        } catch (t) {
                            return 1;
                        }
                        return t.signature.set(u.r.toArrayLike(Uint8Array, "be", 32), 0), t.signature.set(u.s.toArrayLike(Uint8Array, "be", 32), 32), (t.recid = u.recoveryParam), 0;
                    },
                    ecdsaVerify(t, e, r) {
                        const a = { r: t.subarray(0, 32), s: t.subarray(32, 64) },
                            f = new o(a.r),
                            u = new o(a.s);
                        if (f.cmp(i.n) >= 0 || u.cmp(i.n) >= 0) return 1;
                        if (1 === u.cmp(n.nh) || f.isZero() || u.isZero()) return 3;
                        const c = s(r);
                        if (null === c) return 2;
                        const h = c.getPublic();
                        return n.verify(e, a, h) ? 0 : 3;
                    },
                    ecdsaRecover(t, e, r, s) {
                        const f = { r: e.slice(0, 32), s: e.slice(32, 64) },
                            u = new o(f.r),
                            c = new o(f.s);
                        if (u.cmp(i.n) >= 0 || c.cmp(i.n) >= 0) return 1;
                        if (u.isZero() || c.isZero()) return 2;
                        let h;
                        try {
                            h = n.recoverPubKey(s, f, r);
                        } catch (t) {
                            return 2;
                        }
                        return a(t, h), 0;
                    },
                    ecdh(t, e, r, a, f, u, c) {
                        const h = s(e);
                        if (null === h) return 1;
                        const d = new o(r);
                        if (d.cmp(i.n) >= 0 || d.isZero()) return 2;
                        const l = h.getPublic().mul(d);
                        if (void 0 === f) {
                            const e = l.encode(null, !0),
                                r = n.hash().update(e).digest();
                            for (let e = 0; e < 32; ++e) t[e] = r[e];
                        } else {
                            u || (u = new Uint8Array(32));
                            const e = l.getX().toArray("be", 32);
                            for (let t = 0; t < 32; ++t) u[t] = e[t];
                            c || (c = new Uint8Array(32));
                            const r = l.getY().toArray("be", 32);
                            for (let t = 0; t < 32; ++t) c[t] = r[t];
                            const n = f(u, c, a);
                            if (!(n instanceof Uint8Array && n.length === t.length)) return 2;
                            t.set(n);
                        }
                        return 0;
                    },
                };
            },
            9119: (t) => {
                const e = "Impossible case. Please create issue.",
                    r = "The tweak was out of range or the resulted private key is invalid",
                    n = "The tweak was out of range or equal to zero",
                    i = "Public Key could not be parsed",
                    o = "Public Key serialization error",
                    s = "Signature could not be parsed";
                function a(t, e) {
                    if (!t) throw new Error(e);
                }
                function f(t, e, r) {
                    if ((a(e instanceof Uint8Array, `Expected ${t} to be an Uint8Array`), void 0 !== r))
                        if (Array.isArray(r)) {
                            const n = `Expected ${t} to be an Uint8Array with length [${r.join(", ")}]`;
                            a(r.includes(e.length), n);
                        } else {
                            const n = `Expected ${t} to be an Uint8Array with length ${r}`;
                            a(e.length === r, n);
                        }
                }
                function u(t) {
                    a("Boolean" === h(t), "Expected compressed to be a Boolean");
                }
                function c(t = (t) => new Uint8Array(t), e) {
                    return "function" == typeof t && (t = t(e)), f("output", t, e), t;
                }
                function h(t) {
                    return Object.prototype.toString.call(t).slice(8, -1);
                }
                t.exports = (t) => ({
                    contextRandomize(e) {
                        if ((a(null === e || e instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== e && f("seed", e, 32), 1 === t.contextRandomize(e))) throw new Error("Unknow error on context randomization");
                    },
                    privateKeyVerify: (e) => (f("private key", e, 32), 0 === t.privateKeyVerify(e)),
                    privateKeyNegate(r) {
                        switch ((f("private key", r, 32), t.privateKeyNegate(r))) {
                            case 0:
                                return r;
                            case 1:
                                throw new Error(e);
                        }
                    },
                    privateKeyTweakAdd(e, n) {
                        switch ((f("private key", e, 32), f("tweak", n, 32), t.privateKeyTweakAdd(e, n))) {
                            case 0:
                                return e;
                            case 1:
                                throw new Error(r);
                        }
                    },
                    privateKeyTweakMul(e, r) {
                        switch ((f("private key", e, 32), f("tweak", r, 32), t.privateKeyTweakMul(e, r))) {
                            case 0:
                                return e;
                            case 1:
                                throw new Error(n);
                        }
                    },
                    publicKeyVerify: (e) => (f("public key", e, [33, 65]), 0 === t.publicKeyVerify(e)),
                    publicKeyCreate(e, r = !0, n) {
                        switch ((f("private key", e, 32), u(r), (n = c(n, r ? 33 : 65)), t.publicKeyCreate(n, e))) {
                            case 0:
                                return n;
                            case 1:
                                throw new Error("Private Key is invalid");
                            case 2:
                                throw new Error(o);
                        }
                    },
                    publicKeyConvert(e, r = !0, n) {
                        switch ((f("public key", e, [33, 65]), u(r), (n = c(n, r ? 33 : 65)), t.publicKeyConvert(n, e))) {
                            case 0:
                                return n;
                            case 1:
                                throw new Error(i);
                            case 2:
                                throw new Error(o);
                        }
                    },
                    publicKeyNegate(r, n = !0, s) {
                        switch ((f("public key", r, [33, 65]), u(n), (s = c(s, n ? 33 : 65)), t.publicKeyNegate(s, r))) {
                            case 0:
                                return s;
                            case 1:
                                throw new Error(i);
                            case 2:
                                throw new Error(e);
                            case 3:
                                throw new Error(o);
                        }
                    },
                    publicKeyCombine(e, r = !0, n) {
                        a(Array.isArray(e), "Expected public keys to be an Array"), a(e.length > 0, "Expected public keys array will have more than zero items");
                        for (const t of e) f("public key", t, [33, 65]);
                        switch ((u(r), (n = c(n, r ? 33 : 65)), t.publicKeyCombine(n, e))) {
                            case 0:
                                return n;
                            case 1:
                                throw new Error(i);
                            case 2:
                                throw new Error("The sum of the public keys is not valid");
                            case 3:
                                throw new Error(o);
                        }
                    },
                    publicKeyTweakAdd(e, n, o = !0, s) {
                        switch ((f("public key", e, [33, 65]), f("tweak", n, 32), u(o), (s = c(s, o ? 33 : 65)), t.publicKeyTweakAdd(s, e, n))) {
                            case 0:
                                return s;
                            case 1:
                                throw new Error(i);
                            case 2:
                                throw new Error(r);
                        }
                    },
                    publicKeyTweakMul(e, r, o = !0, s) {
                        switch ((f("public key", e, [33, 65]), f("tweak", r, 32), u(o), (s = c(s, o ? 33 : 65)), t.publicKeyTweakMul(s, e, r))) {
                            case 0:
                                return s;
                            case 1:
                                throw new Error(i);
                            case 2:
                                throw new Error(n);
                        }
                    },
                    signatureNormalize(e) {
                        switch ((f("signature", e, 64), t.signatureNormalize(e))) {
                            case 0:
                                return e;
                            case 1:
                                throw new Error(s);
                        }
                    },
                    signatureExport(r, n) {
                        f("signature", r, 64);
                        const i = { output: (n = c(n, 72)), outputlen: 72 };
                        switch (t.signatureExport(i, r)) {
                            case 0:
                                return n.slice(0, i.outputlen);
                            case 1:
                                throw new Error(s);
                            case 2:
                                throw new Error(e);
                        }
                    },
                    signatureImport(r, n) {
                        switch ((f("signature", r), (n = c(n, 64)), t.signatureImport(n, r))) {
                            case 0:
                                return n;
                            case 1:
                                throw new Error(s);
                            case 2:
                                throw new Error(e);
                        }
                    },
                    ecdsaSign(r, n, i = {}, o) {
                        f("message", r, 32),
                            f("private key", n, 32),
                            a("Object" === h(i), "Expected options to be an Object"),
                        void 0 !== i.data && f("options.data", i.data),
                        void 0 !== i.noncefn && a("Function" === h(i.noncefn), "Expected options.noncefn to be a Function");
                        const s = { signature: (o = c(o, 64)), recid: null };
                        switch (t.ecdsaSign(s, r, n, i.data, i.noncefn)) {
                            case 0:
                                return s;
                            case 1:
                                throw new Error("The nonce generation function failed, or the private key was invalid");
                            case 2:
                                throw new Error(e);
                        }
                    },
                    ecdsaVerify(e, r, n) {
                        switch ((f("signature", e, 64), f("message", r, 32), f("public key", n, [33, 65]), t.ecdsaVerify(e, r, n))) {
                            case 0:
                                return !0;
                            case 3:
                                return !1;
                            case 1:
                                throw new Error(s);
                            case 2:
                                throw new Error(i);
                        }
                    },
                    ecdsaRecover(r, n, i, o = !0, d) {
                        switch (
                            (f("signature", r, 64), a("Number" === h(n) && n >= 0 && n <= 3, "Expected recovery id to be a Number within interval [0, 3]"), f("message", i, 32), u(o), (d = c(d, o ? 33 : 65)), t.ecdsaRecover(d, r, n, i))
                            ) {
                            case 0:
                                return d;
                            case 1:
                                throw new Error(s);
                            case 2:
                                throw new Error("Public key could not be recover");
                            case 3:
                                throw new Error(e);
                        }
                    },
                    ecdh(e, r, n = {}, o) {
                        switch (
                            (f("public key", e, [33, 65]),
                                f("private key", r, 32),
                                a("Object" === h(n), "Expected options to be an Object"),
                            void 0 !== n.data && f("options.data", n.data),
                                void 0 !== n.hashfn
                                    ? (a("Function" === h(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && f("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && f("options.ybuf", n.ybuf, 32), f("output", o))
                                    : (o = c(o, 32)),
                                t.ecdh(o, e, r, n.data, n.hashfn, n.xbuf, n.ybuf))
                            ) {
                            case 0:
                                return o;
                            case 1:
                                throw new Error(i);
                            case 2:
                                throw new Error("Scalar was invalid (zero or overflow)");
                        }
                    },
                });
            },
            1379: (t, e) => {
                "use strict";
                function r(t, e, r) {
                    return e <= t && t <= r;
                }
                function n(t) {
                    if (void 0 === t) return {};
                    if (t === Object(t)) return t;
                    throw TypeError("Could not convert argument to dictionary");
                }
                function i(t) {
                    this.tokens = [].slice.call(t);
                }
                i.prototype = {
                    endOfStream: function () {
                        return !this.tokens.length;
                    },
                    read: function () {
                        return this.tokens.length ? this.tokens.shift() : -1;
                    },
                    prepend: function (t) {
                        if (Array.isArray(t)) for (var e = t; e.length; ) this.tokens.unshift(e.pop());
                        else this.tokens.unshift(t);
                    },
                    push: function (t) {
                        if (Array.isArray(t)) for (var e = t; e.length; ) this.tokens.push(e.shift());
                        else this.tokens.push(t);
                    },
                };
                var o = -1;
                function s(t, e) {
                    if (t) throw TypeError("Decoder error");
                    return e || 65533;
                }
                var a = "utf-8";
                function f(t, e) {
                    if (!(this instanceof f)) return new f(t, e);
                    if ((t = void 0 !== t ? String(t).toLowerCase() : a) !== a) throw new Error("Encoding not supported. Only utf-8 is supported");
                    (e = n(e)),
                        (this._streaming = !1),
                        (this._BOMseen = !1),
                        (this._decoder = null),
                        (this._fatal = Boolean(e.fatal)),
                        (this._ignoreBOM = Boolean(e.ignoreBOM)),
                        Object.defineProperty(this, "encoding", { value: "utf-8" }),
                        Object.defineProperty(this, "fatal", { value: this._fatal }),
                        Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
                }
                function u(t, e) {
                    if (!(this instanceof u)) return new u(t, e);
                    if ((t = void 0 !== t ? String(t).toLowerCase() : a) !== a) throw new Error("Encoding not supported. Only utf-8 is supported");
                    (e = n(e)), (this._streaming = !1), (this._encoder = null), (this._options = { fatal: Boolean(e.fatal) }), Object.defineProperty(this, "encoding", { value: "utf-8" });
                }
                function c(t) {
                    var e = t.fatal,
                        n = 0,
                        i = 0,
                        a = 0,
                        f = 128,
                        u = 191;
                    this.handler = function (t, c) {
                        if (-1 === c && 0 !== a) return (a = 0), s(e);
                        if (-1 === c) return o;
                        if (0 === a) {
                            if (r(c, 0, 127)) return c;
                            if (r(c, 194, 223)) (a = 1), (n = c - 192);
                            else if (r(c, 224, 239)) 224 === c && (f = 160), 237 === c && (u = 159), (a = 2), (n = c - 224);
                            else {
                                if (!r(c, 240, 244)) return s(e);
                                240 === c && (f = 144), 244 === c && (u = 143), (a = 3), (n = c - 240);
                            }
                            return (n <<= 6 * a), null;
                        }
                        if (!r(c, f, u)) return (n = a = i = 0), (f = 128), (u = 191), t.prepend(c), s(e);
                        if (((f = 128), (u = 191), (n += (c - 128) << (6 * (a - (i += 1)))), i !== a)) return null;
                        var h = n;
                        return (n = a = i = 0), h;
                    };
                }
                function h(t) {
                    t.fatal,
                        (this.handler = function (t, e) {
                            if (-1 === e) return o;
                            if (r(e, 0, 127)) return e;
                            var n, i;
                            r(e, 128, 2047) ? ((n = 1), (i = 192)) : r(e, 2048, 65535) ? ((n = 2), (i = 224)) : r(e, 65536, 1114111) && ((n = 3), (i = 240));
                            for (var s = [(e >> (6 * n)) + i]; n > 0; ) {
                                var a = e >> (6 * (n - 1));
                                s.push(128 | (63 & a)), (n -= 1);
                            }
                            return s;
                        });
                }
                (f.prototype = {
                    decode: function (t, e) {
                        var r;
                        (r =
                            "object" == typeof t && t instanceof ArrayBuffer
                                ? new Uint8Array(t)
                                : "object" == typeof t && "buffer" in t && t.buffer instanceof ArrayBuffer
                                    ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                                    : new Uint8Array(0)),
                            (e = n(e)),
                        this._streaming || ((this._decoder = new c({ fatal: this._fatal })), (this._BOMseen = !1)),
                            (this._streaming = Boolean(e.stream));
                        for (var s, a = new i(r), f = []; !a.endOfStream() && (s = this._decoder.handler(a, a.read())) !== o; ) null !== s && (Array.isArray(s) ? f.push.apply(f, s) : f.push(s));
                        if (!this._streaming) {
                            do {
                                if ((s = this._decoder.handler(a, a.read())) === o) break;
                                null !== s && (Array.isArray(s) ? f.push.apply(f, s) : f.push(s));
                            } while (!a.endOfStream());
                            this._decoder = null;
                        }
                        return (
                            f.length && (-1 === ["utf-8"].indexOf(this.encoding) || this._ignoreBOM || this._BOMseen || (65279 === f[0] ? ((this._BOMseen = !0), f.shift()) : (this._BOMseen = !0))),
                                (function (t) {
                                    for (var e = "", r = 0; r < t.length; ++r) {
                                        var n = t[r];
                                        n <= 65535 ? (e += String.fromCharCode(n)) : ((n -= 65536), (e += String.fromCharCode(55296 + (n >> 10), 56320 + (1023 & n))));
                                    }
                                    return e;
                                })(f)
                        );
                    },
                }),
                    (u.prototype = {
                        encode: function (t, e) {
                            (t = t ? String(t) : ""), (e = n(e)), this._streaming || (this._encoder = new h(this._options)), (this._streaming = Boolean(e.stream));
                            for (
                                var r,
                                    s = [],
                                    a = new i(
                                        (function (t) {
                                            for (var e = String(t), r = e.length, n = 0, i = []; n < r; ) {
                                                var o = e.charCodeAt(n);
                                                if (o < 55296 || o > 57343) i.push(o);
                                                else if (56320 <= o && o <= 57343) i.push(65533);
                                                else if (55296 <= o && o <= 56319)
                                                    if (n === r - 1) i.push(65533);
                                                    else {
                                                        var s = t.charCodeAt(n + 1);
                                                        if (56320 <= s && s <= 57343) {
                                                            var a = 1023 & o,
                                                                f = 1023 & s;
                                                            i.push(65536 + (a << 10) + f), (n += 1);
                                                        } else i.push(65533);
                                                    }
                                                n += 1;
                                            }
                                            return i;
                                        })(t)
                                    );
                                !a.endOfStream() && (r = this._encoder.handler(a, a.read())) !== o;

                            )
                                Array.isArray(r) ? s.push.apply(s, r) : s.push(r);
                            if (!this._streaming) {
                                for (; (r = this._encoder.handler(a, a.read())) !== o; ) Array.isArray(r) ? s.push.apply(s, r) : s.push(r);
                                this._encoder = null;
                            }
                            return new Uint8Array(s);
                        },
                    }),
                    (e.TextEncoder = u),
                    (e.TextDecoder = f);
            },
            780: (t, e, r) => {
                !(function (t) {
                    "use strict";
                    var e = function (t) {
                            var e,
                                r = new Float64Array(16);
                            if (t) for (e = 0; e < t.length; e++) r[e] = t[e];
                            return r;
                        },
                        n = function () {
                            throw new Error("no PRNG");
                        },
                        i = new Uint8Array(16),
                        o = new Uint8Array(32);
                    o[0] = 9;
                    var s = e(),
                        a = e([1]),
                        f = e([56129, 1]),
                        u = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                        c = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                        h = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                        d = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                        l = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
                    function p(t, e, r, n) {
                        (t[e] = (r >> 24) & 255),
                            (t[e + 1] = (r >> 16) & 255),
                            (t[e + 2] = (r >> 8) & 255),
                            (t[e + 3] = 255 & r),
                            (t[e + 4] = (n >> 24) & 255),
                            (t[e + 5] = (n >> 16) & 255),
                            (t[e + 6] = (n >> 8) & 255),
                            (t[e + 7] = 255 & n);
                    }
                    function b(t, e, r, n, i) {
                        var o,
                            s = 0;
                        for (o = 0; o < i; o++) s |= t[e + o] ^ r[n + o];
                        return (1 & ((s - 1) >>> 8)) - 1;
                    }
                    function y(t, e, r, n) {
                        return b(t, e, r, n, 16);
                    }
                    function m(t, e, r, n) {
                        return b(t, e, r, n, 32);
                    }
                    function g(t, e, r, n) {
                        !(function (t, e, r, n) {
                            for (
                                var i,
                                    o = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                                    s = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                                    a = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                                    f = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
                                    u = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
                                    c = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                                    h = (255 & e[0]) | ((255 & e[1]) << 8) | ((255 & e[2]) << 16) | ((255 & e[3]) << 24),
                                    d = (255 & e[4]) | ((255 & e[5]) << 8) | ((255 & e[6]) << 16) | ((255 & e[7]) << 24),
                                    l = (255 & e[8]) | ((255 & e[9]) << 8) | ((255 & e[10]) << 16) | ((255 & e[11]) << 24),
                                    p = (255 & e[12]) | ((255 & e[13]) << 8) | ((255 & e[14]) << 16) | ((255 & e[15]) << 24),
                                    b = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
                                    y = (255 & r[16]) | ((255 & r[17]) << 8) | ((255 & r[18]) << 16) | ((255 & r[19]) << 24),
                                    m = (255 & r[20]) | ((255 & r[21]) << 8) | ((255 & r[22]) << 16) | ((255 & r[23]) << 24),
                                    g = (255 & r[24]) | ((255 & r[25]) << 8) | ((255 & r[26]) << 16) | ((255 & r[27]) << 24),
                                    v = (255 & r[28]) | ((255 & r[29]) << 8) | ((255 & r[30]) << 16) | ((255 & r[31]) << 24),
                                    w = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
                                    M = o,
                                    _ = s,
                                    A = a,
                                    S = f,
                                    x = u,
                                    E = c,
                                    k = h,
                                    I = d,
                                    B = l,
                                    P = p,
                                    R = b,
                                    U = y,
                                    O = m,
                                    T = g,
                                    L = v,
                                    z = w,
                                    j = 0;
                                j < 20;
                                j += 2
                            )
                                (M ^= ((i = ((O ^= ((i = ((B ^= ((i = ((x ^= ((i = (M + O) | 0) << 7) | (i >>> 25)) + M) | 0) << 9) | (i >>> 23)) + x) | 0) << 13) | (i >>> 19)) + B) | 0) << 18) | (i >>> 14)),
                                    (E ^= ((i = ((_ ^= ((i = ((T ^= ((i = ((P ^= ((i = (E + _) | 0) << 7) | (i >>> 25)) + E) | 0) << 9) | (i >>> 23)) + P) | 0) << 13) | (i >>> 19)) + T) | 0) << 18) | (i >>> 14)),
                                    (R ^= ((i = ((k ^= ((i = ((A ^= ((i = ((L ^= ((i = (R + k) | 0) << 7) | (i >>> 25)) + R) | 0) << 9) | (i >>> 23)) + L) | 0) << 13) | (i >>> 19)) + A) | 0) << 18) | (i >>> 14)),
                                    (z ^= ((i = ((U ^= ((i = ((I ^= ((i = ((S ^= ((i = (z + U) | 0) << 7) | (i >>> 25)) + z) | 0) << 9) | (i >>> 23)) + S) | 0) << 13) | (i >>> 19)) + I) | 0) << 18) | (i >>> 14)),
                                    (M ^= ((i = ((S ^= ((i = ((A ^= ((i = ((_ ^= ((i = (M + S) | 0) << 7) | (i >>> 25)) + M) | 0) << 9) | (i >>> 23)) + _) | 0) << 13) | (i >>> 19)) + A) | 0) << 18) | (i >>> 14)),
                                    (E ^= ((i = ((x ^= ((i = ((I ^= ((i = ((k ^= ((i = (E + x) | 0) << 7) | (i >>> 25)) + E) | 0) << 9) | (i >>> 23)) + k) | 0) << 13) | (i >>> 19)) + I) | 0) << 18) | (i >>> 14)),
                                    (R ^= ((i = ((P ^= ((i = ((B ^= ((i = ((U ^= ((i = (R + P) | 0) << 7) | (i >>> 25)) + R) | 0) << 9) | (i >>> 23)) + U) | 0) << 13) | (i >>> 19)) + B) | 0) << 18) | (i >>> 14)),
                                    (z ^= ((i = ((L ^= ((i = ((T ^= ((i = ((O ^= ((i = (z + L) | 0) << 7) | (i >>> 25)) + z) | 0) << 9) | (i >>> 23)) + O) | 0) << 13) | (i >>> 19)) + T) | 0) << 18) | (i >>> 14));
                            (M = (M + o) | 0),
                                (_ = (_ + s) | 0),
                                (A = (A + a) | 0),
                                (S = (S + f) | 0),
                                (x = (x + u) | 0),
                                (E = (E + c) | 0),
                                (k = (k + h) | 0),
                                (I = (I + d) | 0),
                                (B = (B + l) | 0),
                                (P = (P + p) | 0),
                                (R = (R + b) | 0),
                                (U = (U + y) | 0),
                                (O = (O + m) | 0),
                                (T = (T + g) | 0),
                                (L = (L + v) | 0),
                                (z = (z + w) | 0),
                                (t[0] = (M >>> 0) & 255),
                                (t[1] = (M >>> 8) & 255),
                                (t[2] = (M >>> 16) & 255),
                                (t[3] = (M >>> 24) & 255),
                                (t[4] = (_ >>> 0) & 255),
                                (t[5] = (_ >>> 8) & 255),
                                (t[6] = (_ >>> 16) & 255),
                                (t[7] = (_ >>> 24) & 255),
                                (t[8] = (A >>> 0) & 255),
                                (t[9] = (A >>> 8) & 255),
                                (t[10] = (A >>> 16) & 255),
                                (t[11] = (A >>> 24) & 255),
                                (t[12] = (S >>> 0) & 255),
                                (t[13] = (S >>> 8) & 255),
                                (t[14] = (S >>> 16) & 255),
                                (t[15] = (S >>> 24) & 255),
                                (t[16] = (x >>> 0) & 255),
                                (t[17] = (x >>> 8) & 255),
                                (t[18] = (x >>> 16) & 255),
                                (t[19] = (x >>> 24) & 255),
                                (t[20] = (E >>> 0) & 255),
                                (t[21] = (E >>> 8) & 255),
                                (t[22] = (E >>> 16) & 255),
                                (t[23] = (E >>> 24) & 255),
                                (t[24] = (k >>> 0) & 255),
                                (t[25] = (k >>> 8) & 255),
                                (t[26] = (k >>> 16) & 255),
                                (t[27] = (k >>> 24) & 255),
                                (t[28] = (I >>> 0) & 255),
                                (t[29] = (I >>> 8) & 255),
                                (t[30] = (I >>> 16) & 255),
                                (t[31] = (I >>> 24) & 255),
                                (t[32] = (B >>> 0) & 255),
                                (t[33] = (B >>> 8) & 255),
                                (t[34] = (B >>> 16) & 255),
                                (t[35] = (B >>> 24) & 255),
                                (t[36] = (P >>> 0) & 255),
                                (t[37] = (P >>> 8) & 255),
                                (t[38] = (P >>> 16) & 255),
                                (t[39] = (P >>> 24) & 255),
                                (t[40] = (R >>> 0) & 255),
                                (t[41] = (R >>> 8) & 255),
                                (t[42] = (R >>> 16) & 255),
                                (t[43] = (R >>> 24) & 255),
                                (t[44] = (U >>> 0) & 255),
                                (t[45] = (U >>> 8) & 255),
                                (t[46] = (U >>> 16) & 255),
                                (t[47] = (U >>> 24) & 255),
                                (t[48] = (O >>> 0) & 255),
                                (t[49] = (O >>> 8) & 255),
                                (t[50] = (O >>> 16) & 255),
                                (t[51] = (O >>> 24) & 255),
                                (t[52] = (T >>> 0) & 255),
                                (t[53] = (T >>> 8) & 255),
                                (t[54] = (T >>> 16) & 255),
                                (t[55] = (T >>> 24) & 255),
                                (t[56] = (L >>> 0) & 255),
                                (t[57] = (L >>> 8) & 255),
                                (t[58] = (L >>> 16) & 255),
                                (t[59] = (L >>> 24) & 255),
                                (t[60] = (z >>> 0) & 255),
                                (t[61] = (z >>> 8) & 255),
                                (t[62] = (z >>> 16) & 255),
                                (t[63] = (z >>> 24) & 255);
                        })(t, e, r, n);
                    }
                    function v(t, e, r, n) {
                        !(function (t, e, r, n) {
                            for (
                                var i,
                                    o = (255 & n[0]) | ((255 & n[1]) << 8) | ((255 & n[2]) << 16) | ((255 & n[3]) << 24),
                                    s = (255 & r[0]) | ((255 & r[1]) << 8) | ((255 & r[2]) << 16) | ((255 & r[3]) << 24),
                                    a = (255 & r[4]) | ((255 & r[5]) << 8) | ((255 & r[6]) << 16) | ((255 & r[7]) << 24),
                                    f = (255 & r[8]) | ((255 & r[9]) << 8) | ((255 & r[10]) << 16) | ((255 & r[11]) << 24),
                                    u = (255 & r[12]) | ((255 & r[13]) << 8) | ((255 & r[14]) << 16) | ((255 & r[15]) << 24),
                                    c = (255 & n[4]) | ((255 & n[5]) << 8) | ((255 & n[6]) << 16) | ((255 & n[7]) << 24),
                                    h = (255 & e[0]) | ((255 & e[1]) << 8) | ((255 & e[2]) << 16) | ((255 & e[3]) << 24),
                                    d = (255 & e[4]) | ((255 & e[5]) << 8) | ((255 & e[6]) << 16) | ((255 & e[7]) << 24),
                                    l = (255 & e[8]) | ((255 & e[9]) << 8) | ((255 & e[10]) << 16) | ((255 & e[11]) << 24),
                                    p = (255 & e[12]) | ((255 & e[13]) << 8) | ((255 & e[14]) << 16) | ((255 & e[15]) << 24),
                                    b = (255 & n[8]) | ((255 & n[9]) << 8) | ((255 & n[10]) << 16) | ((255 & n[11]) << 24),
                                    y = (255 & r[16]) | ((255 & r[17]) << 8) | ((255 & r[18]) << 16) | ((255 & r[19]) << 24),
                                    m = (255 & r[20]) | ((255 & r[21]) << 8) | ((255 & r[22]) << 16) | ((255 & r[23]) << 24),
                                    g = (255 & r[24]) | ((255 & r[25]) << 8) | ((255 & r[26]) << 16) | ((255 & r[27]) << 24),
                                    v = (255 & r[28]) | ((255 & r[29]) << 8) | ((255 & r[30]) << 16) | ((255 & r[31]) << 24),
                                    w = (255 & n[12]) | ((255 & n[13]) << 8) | ((255 & n[14]) << 16) | ((255 & n[15]) << 24),
                                    M = 0;
                                M < 20;
                                M += 2
                            )
                                (o ^= ((i = ((m ^= ((i = ((l ^= ((i = ((u ^= ((i = (o + m) | 0) << 7) | (i >>> 25)) + o) | 0) << 9) | (i >>> 23)) + u) | 0) << 13) | (i >>> 19)) + l) | 0) << 18) | (i >>> 14)),
                                    (c ^= ((i = ((s ^= ((i = ((g ^= ((i = ((p ^= ((i = (c + s) | 0) << 7) | (i >>> 25)) + c) | 0) << 9) | (i >>> 23)) + p) | 0) << 13) | (i >>> 19)) + g) | 0) << 18) | (i >>> 14)),
                                    (b ^= ((i = ((h ^= ((i = ((a ^= ((i = ((v ^= ((i = (b + h) | 0) << 7) | (i >>> 25)) + b) | 0) << 9) | (i >>> 23)) + v) | 0) << 13) | (i >>> 19)) + a) | 0) << 18) | (i >>> 14)),
                                    (w ^= ((i = ((y ^= ((i = ((d ^= ((i = ((f ^= ((i = (w + y) | 0) << 7) | (i >>> 25)) + w) | 0) << 9) | (i >>> 23)) + f) | 0) << 13) | (i >>> 19)) + d) | 0) << 18) | (i >>> 14)),
                                    (o ^= ((i = ((f ^= ((i = ((a ^= ((i = ((s ^= ((i = (o + f) | 0) << 7) | (i >>> 25)) + o) | 0) << 9) | (i >>> 23)) + s) | 0) << 13) | (i >>> 19)) + a) | 0) << 18) | (i >>> 14)),
                                    (c ^= ((i = ((u ^= ((i = ((d ^= ((i = ((h ^= ((i = (c + u) | 0) << 7) | (i >>> 25)) + c) | 0) << 9) | (i >>> 23)) + h) | 0) << 13) | (i >>> 19)) + d) | 0) << 18) | (i >>> 14)),
                                    (b ^= ((i = ((p ^= ((i = ((l ^= ((i = ((y ^= ((i = (b + p) | 0) << 7) | (i >>> 25)) + b) | 0) << 9) | (i >>> 23)) + y) | 0) << 13) | (i >>> 19)) + l) | 0) << 18) | (i >>> 14)),
                                    (w ^= ((i = ((v ^= ((i = ((g ^= ((i = ((m ^= ((i = (w + v) | 0) << 7) | (i >>> 25)) + w) | 0) << 9) | (i >>> 23)) + m) | 0) << 13) | (i >>> 19)) + g) | 0) << 18) | (i >>> 14));
                            (t[0] = (o >>> 0) & 255),
                                (t[1] = (o >>> 8) & 255),
                                (t[2] = (o >>> 16) & 255),
                                (t[3] = (o >>> 24) & 255),
                                (t[4] = (c >>> 0) & 255),
                                (t[5] = (c >>> 8) & 255),
                                (t[6] = (c >>> 16) & 255),
                                (t[7] = (c >>> 24) & 255),
                                (t[8] = (b >>> 0) & 255),
                                (t[9] = (b >>> 8) & 255),
                                (t[10] = (b >>> 16) & 255),
                                (t[11] = (b >>> 24) & 255),
                                (t[12] = (w >>> 0) & 255),
                                (t[13] = (w >>> 8) & 255),
                                (t[14] = (w >>> 16) & 255),
                                (t[15] = (w >>> 24) & 255),
                                (t[16] = (h >>> 0) & 255),
                                (t[17] = (h >>> 8) & 255),
                                (t[18] = (h >>> 16) & 255),
                                (t[19] = (h >>> 24) & 255),
                                (t[20] = (d >>> 0) & 255),
                                (t[21] = (d >>> 8) & 255),
                                (t[22] = (d >>> 16) & 255),
                                (t[23] = (d >>> 24) & 255),
                                (t[24] = (l >>> 0) & 255),
                                (t[25] = (l >>> 8) & 255),
                                (t[26] = (l >>> 16) & 255),
                                (t[27] = (l >>> 24) & 255),
                                (t[28] = (p >>> 0) & 255),
                                (t[29] = (p >>> 8) & 255),
                                (t[30] = (p >>> 16) & 255),
                                (t[31] = (p >>> 24) & 255);
                        })(t, e, r, n);
                    }
                    var w = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
                    function M(t, e, r, n, i, o, s) {
                        var a,
                            f,
                            u = new Uint8Array(16),
                            c = new Uint8Array(64);
                        for (f = 0; f < 16; f++) u[f] = 0;
                        for (f = 0; f < 8; f++) u[f] = o[f];
                        for (; i >= 64; ) {
                            for (g(c, u, s, w), f = 0; f < 64; f++) t[e + f] = r[n + f] ^ c[f];
                            for (a = 1, f = 8; f < 16; f++) (a = (a + (255 & u[f])) | 0), (u[f] = 255 & a), (a >>>= 8);
                            (i -= 64), (e += 64), (n += 64);
                        }
                        if (i > 0) for (g(c, u, s, w), f = 0; f < i; f++) t[e + f] = r[n + f] ^ c[f];
                        return 0;
                    }
                    function _(t, e, r, n, i) {
                        var o,
                            s,
                            a = new Uint8Array(16),
                            f = new Uint8Array(64);
                        for (s = 0; s < 16; s++) a[s] = 0;
                        for (s = 0; s < 8; s++) a[s] = n[s];
                        for (; r >= 64; ) {
                            for (g(f, a, i, w), s = 0; s < 64; s++) t[e + s] = f[s];
                            for (o = 1, s = 8; s < 16; s++) (o = (o + (255 & a[s])) | 0), (a[s] = 255 & o), (o >>>= 8);
                            (r -= 64), (e += 64);
                        }
                        if (r > 0) for (g(f, a, i, w), s = 0; s < r; s++) t[e + s] = f[s];
                        return 0;
                    }
                    function A(t, e, r, n, i) {
                        var o = new Uint8Array(32);
                        v(o, n, i, w);
                        for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = n[a + 16];
                        return _(t, e, r, s, o);
                    }
                    function S(t, e, r, n, i, o, s) {
                        var a = new Uint8Array(32);
                        v(a, o, s, w);
                        for (var f = new Uint8Array(8), u = 0; u < 8; u++) f[u] = o[u + 16];
                        return M(t, e, r, n, i, f, a);
                    }
                    var x = function (t) {
                        var e, r, n, i, o, s, a, f;
                        (this.buffer = new Uint8Array(16)),
                            (this.r = new Uint16Array(10)),
                            (this.h = new Uint16Array(10)),
                            (this.pad = new Uint16Array(8)),
                            (this.leftover = 0),
                            (this.fin = 0),
                            (e = (255 & t[0]) | ((255 & t[1]) << 8)),
                            (this.r[0] = 8191 & e),
                            (r = (255 & t[2]) | ((255 & t[3]) << 8)),
                            (this.r[1] = 8191 & ((e >>> 13) | (r << 3))),
                            (n = (255 & t[4]) | ((255 & t[5]) << 8)),
                            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
                            (i = (255 & t[6]) | ((255 & t[7]) << 8)),
                            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
                            (o = (255 & t[8]) | ((255 & t[9]) << 8)),
                            (this.r[4] = 255 & ((i >>> 4) | (o << 12))),
                            (this.r[5] = (o >>> 1) & 8190),
                            (s = (255 & t[10]) | ((255 & t[11]) << 8)),
                            (this.r[6] = 8191 & ((o >>> 14) | (s << 2))),
                            (a = (255 & t[12]) | ((255 & t[13]) << 8)),
                            (this.r[7] = 8065 & ((s >>> 11) | (a << 5))),
                            (f = (255 & t[14]) | ((255 & t[15]) << 8)),
                            (this.r[8] = 8191 & ((a >>> 8) | (f << 8))),
                            (this.r[9] = (f >>> 5) & 127),
                            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
                            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
                            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
                            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
                            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
                            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
                            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
                            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8));
                    };
                    function E(t, e, r, n, i, o) {
                        var s = new x(o);
                        return s.update(r, n, i), s.finish(t, e), 0;
                    }
                    function k(t, e, r, n, i, o) {
                        var s = new Uint8Array(16);
                        return E(s, 0, r, n, i, o), y(t, e, s, 0);
                    }
                    function I(t, e, r, n, i) {
                        var o;
                        if (r < 32) return -1;
                        for (S(t, 0, e, 0, r, n, i), E(t, 16, t, 32, r - 32, t), o = 0; o < 16; o++) t[o] = 0;
                        return 0;
                    }
                    function B(t, e, r, n, i) {
                        var o,
                            s = new Uint8Array(32);
                        if (r < 32) return -1;
                        if ((A(s, 0, 32, n, i), 0 !== k(e, 16, e, 32, r - 32, s))) return -1;
                        for (S(t, 0, e, 0, r, n, i), o = 0; o < 32; o++) t[o] = 0;
                        return 0;
                    }
                    function P(t, e) {
                        var r;
                        for (r = 0; r < 16; r++) t[r] = 0 | e[r];
                    }
                    function R(t) {
                        var e,
                            r,
                            n = 1;
                        for (e = 0; e < 16; e++) (r = t[e] + n + 65535), (n = Math.floor(r / 65536)), (t[e] = r - 65536 * n);
                        t[0] += n - 1 + 37 * (n - 1);
                    }
                    function U(t, e, r) {
                        for (var n, i = ~(r - 1), o = 0; o < 16; o++) (n = i & (t[o] ^ e[o])), (t[o] ^= n), (e[o] ^= n);
                    }
                    function O(t, r) {
                        var n,
                            i,
                            o,
                            s = e(),
                            a = e();
                        for (n = 0; n < 16; n++) a[n] = r[n];
                        for (R(a), R(a), R(a), i = 0; i < 2; i++) {
                            for (s[0] = a[0] - 65517, n = 1; n < 15; n++) (s[n] = a[n] - 65535 - ((s[n - 1] >> 16) & 1)), (s[n - 1] &= 65535);
                            (s[15] = a[15] - 32767 - ((s[14] >> 16) & 1)), (o = (s[15] >> 16) & 1), (s[14] &= 65535), U(a, s, 1 - o);
                        }
                        for (n = 0; n < 16; n++) (t[2 * n] = 255 & a[n]), (t[2 * n + 1] = a[n] >> 8);
                    }
                    function T(t, e) {
                        var r = new Uint8Array(32),
                            n = new Uint8Array(32);
                        return O(r, t), O(n, e), m(r, 0, n, 0);
                    }
                    function L(t) {
                        var e = new Uint8Array(32);
                        return O(e, t), 1 & e[0];
                    }
                    function z(t, e) {
                        var r;
                        for (r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
                        t[15] &= 32767;
                    }
                    function j(t, e, r) {
                        for (var n = 0; n < 16; n++) t[n] = e[n] + r[n];
                    }
                    function N(t, e, r) {
                        for (var n = 0; n < 16; n++) t[n] = e[n] - r[n];
                    }
                    function q(t, e, r) {
                        var n,
                            i,
                            o = 0,
                            s = 0,
                            a = 0,
                            f = 0,
                            u = 0,
                            c = 0,
                            h = 0,
                            d = 0,
                            l = 0,
                            p = 0,
                            b = 0,
                            y = 0,
                            m = 0,
                            g = 0,
                            v = 0,
                            w = 0,
                            M = 0,
                            _ = 0,
                            A = 0,
                            S = 0,
                            x = 0,
                            E = 0,
                            k = 0,
                            I = 0,
                            B = 0,
                            P = 0,
                            R = 0,
                            U = 0,
                            O = 0,
                            T = 0,
                            L = 0,
                            z = r[0],
                            j = r[1],
                            N = r[2],
                            q = r[3],
                            C = r[4],
                            W = r[5],
                            K = r[6],
                            D = r[7],
                            F = r[8],
                            $ = r[9],
                            V = r[10],
                            Z = r[11],
                            Y = r[12],
                            H = r[13],
                            J = r[14],
                            G = r[15];
                        (o += (n = e[0]) * z),
                            (s += n * j),
                            (a += n * N),
                            (f += n * q),
                            (u += n * C),
                            (c += n * W),
                            (h += n * K),
                            (d += n * D),
                            (l += n * F),
                            (p += n * $),
                            (b += n * V),
                            (y += n * Z),
                            (m += n * Y),
                            (g += n * H),
                            (v += n * J),
                            (w += n * G),
                            (s += (n = e[1]) * z),
                            (a += n * j),
                            (f += n * N),
                            (u += n * q),
                            (c += n * C),
                            (h += n * W),
                            (d += n * K),
                            (l += n * D),
                            (p += n * F),
                            (b += n * $),
                            (y += n * V),
                            (m += n * Z),
                            (g += n * Y),
                            (v += n * H),
                            (w += n * J),
                            (M += n * G),
                            (a += (n = e[2]) * z),
                            (f += n * j),
                            (u += n * N),
                            (c += n * q),
                            (h += n * C),
                            (d += n * W),
                            (l += n * K),
                            (p += n * D),
                            (b += n * F),
                            (y += n * $),
                            (m += n * V),
                            (g += n * Z),
                            (v += n * Y),
                            (w += n * H),
                            (M += n * J),
                            (_ += n * G),
                            (f += (n = e[3]) * z),
                            (u += n * j),
                            (c += n * N),
                            (h += n * q),
                            (d += n * C),
                            (l += n * W),
                            (p += n * K),
                            (b += n * D),
                            (y += n * F),
                            (m += n * $),
                            (g += n * V),
                            (v += n * Z),
                            (w += n * Y),
                            (M += n * H),
                            (_ += n * J),
                            (A += n * G),
                            (u += (n = e[4]) * z),
                            (c += n * j),
                            (h += n * N),
                            (d += n * q),
                            (l += n * C),
                            (p += n * W),
                            (b += n * K),
                            (y += n * D),
                            (m += n * F),
                            (g += n * $),
                            (v += n * V),
                            (w += n * Z),
                            (M += n * Y),
                            (_ += n * H),
                            (A += n * J),
                            (S += n * G),
                            (c += (n = e[5]) * z),
                            (h += n * j),
                            (d += n * N),
                            (l += n * q),
                            (p += n * C),
                            (b += n * W),
                            (y += n * K),
                            (m += n * D),
                            (g += n * F),
                            (v += n * $),
                            (w += n * V),
                            (M += n * Z),
                            (_ += n * Y),
                            (A += n * H),
                            (S += n * J),
                            (x += n * G),
                            (h += (n = e[6]) * z),
                            (d += n * j),
                            (l += n * N),
                            (p += n * q),
                            (b += n * C),
                        (y += n * W),
                        (m += n * K),
                        (g += n * D),
                        (v += n * F),
                        (w += n * $),
                        (M += n * V),
                        (_ += n * Z),
                        (A += n * Y),
                        (S += n * H),
                        (x += n * J),
                        (E += n * G),
                        (d += (n = e[7]) * z),
                        (l += n * j),
                        (p += n * N),
                        (b += n * q),
                        (y += n * C),
                        (m += n * W),
                        (g += n * K),
                        (v += n * D),
                        (w += n * F),
                        (M += n * $),
                        (_ += n * V),
                        (A += n * Z),
                        (S += n * Y),
                        (x += n * H),
                        (E += n * J),
                        (k += n * G),
                        (l += (n = e[8]) * z),
                        (p += n * j),
                        (b += n * N),
                        (y += n * q),
                        (m += n * C),
                        (g += n * W),
                        (v += n * K),
                        (w += n * D),
                        (M += n * F),
                        (_ += n * $),
                        (A += n * V),
                        (S += n * Z),
                        (x += n * Y),
                        (E += n * H),
                        (k += n * J),
                        (I += n * G),
                        (p += (n = e[9]) * z),
                        (b += n * j),
                        (y += n * N),
                        (m += n * q),
                        (g += n * C),
                        (v += n * W),
                        (w += n * K),
                        (M += n * D),
                        (_ += n * F),
                        (A += n * $),
                        (S += n * V),
                        (x += n * Z),
                        (E += n * Y),
                        (k += n * H),
                        (I += n * J),
                        (B += n * G),
                        (b += (n = e[10]) * z),
                        (y += n * j),
                        (m += n * N),
                        (g += n * q),
                        (v += n * C),
                        (w += n * W),
                        (M += n * K),
                        (_ += n * D),
                        (A += n * F),
                        (S += n * $),
                        (x += n * V),
                        (E += n * Z),
                        (k += n * Y),
                        (I += n * H),
                        (B += n * J),
                        (P += n * G),
                        (y += (n = e[11]) * z),
                        (m += n * j),
                        (g += n * N),
                        (v += n * q),
                        (w += n * C),
                        (M += n * W),
                        (_ += n * K),
                        (A += n * D),
                        (S += n * F),
                        (x += n * $),
                        (E += n * V),
                        (k += n * Z),
                        (I += n * Y),
                        (B += n * H),
                        (P += n * J),
                        (R += n * G),
                        (m += (n = e[12]) * z),
                        (g += n * j),
                        (v += n * N),
                        (w += n * q),
                        (M += n * C),
                        (_ += n * W),
                        (A += n * K),
                        (S += n * D),
                        (x += n * F),
                        (E += n * $),
                        (k += n * V),
                        (I += n * Z),
                        (B += n * Y),
                        (P += n * H),
                        (R += n * J),
                        (U += n * G),
                        (g += (n = e[13]) * z),
                        (v += n * j),
                        (w += n * N),
                        (M += n * q),
                        (_ += n * C),
                        (A += n * W),
                        (S += n * K),
                        (x += n * D),
                        (E += n * F),
                        (k += n * $),
                        (I += n * V),
                        (B += n * Z),
                        (P += n * Y),
                        (R += n * H),
                        (U += n * J),
                        (O += n * G),
                        (v += (n = e[14]) * z),
                        (w += n * j),
                        (M += n * N),
                        (_ += n * q),
                        (A += n * C),
                        (S += n * W),
                        (x += n * K),
                        (E += n * D),
                        (k += n * F),
                        (I += n * $),
                        (B += n * V),
                        (P += n * Z),
                        (R += n * Y),
                        (U += n * H),
                        (O += n * J),
                        (T += n * G),
                        (w += (n = e[15]) * z),
                        (s += 38 * (_ += n * N)),
                        (a += 38 * (A += n * q)),
                        (f += 38 * (S += n * C)),
                        (u += 38 * (x += n * W)),
                        (c += 38 * (E += n * K)),
                        (h += 38 * (k += n * D)),
                        (d += 38 * (I += n * F)),
                        (l += 38 * (B += n * $)),
                        (p += 38 * (P += n * V)),
                        (b += 38 * (R += n * Z)),
                        (y += 38 * (U += n * Y)),
                        (m += 38 * (O += n * H)),
                        (g += 38 * (T += n * J)),
                        (v += 38 * (L += n * G)),
                        (o = (n = (o += 38 * (M += n * j)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (o = (n = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (s = (n = s + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (a = (n = a + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (f = (n = f + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (u = (n = u + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (c = (n = c + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (h = (n = h + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (d = (n = d + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (l = (n = l + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (p = (n = p + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (b = (n = b + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (y = (n = y + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (m = (n = m + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (g = (n = g + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (v = (n = v + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (w = (n = w + i + 65535) - 65536 * (i = Math.floor(n / 65536))),
                        (o += i - 1 + 37 * (i - 1)),
                        (t[0] = o),
                        (t[1] = s),
                        (t[2] = a),
                        (t[3] = f),
                        (t[4] = u),
                        (t[5] = c),
                        (t[6] = h),
                        (t[7] = d),
                        (t[8] = l),
                        (t[9] = p),
                        (t[10] = b),
                        (t[11] = y),
                        (t[12] = m),
                        (t[13] = g),
                        (t[14] = v),
                        (t[15] = w);
                    }
                    function C(t, e) {
                        q(t, e, e);
                    }
                    function W(t, r) {
                        var n,
                            i = e();
                        for (n = 0; n < 16; n++) i[n] = r[n];
                        for (n = 253; n >= 0; n--) C(i, i), 2 !== n && 4 !== n && q(i, i, r);
                        for (n = 0; n < 16; n++) t[n] = i[n];
                    }
                    function K(t, r) {
                        var n,
                            i = e();
                        for (n = 0; n < 16; n++) i[n] = r[n];
                        for (n = 250; n >= 0; n--) C(i, i), 1 !== n && q(i, i, r);
                        for (n = 0; n < 16; n++) t[n] = i[n];
                    }
                    function D(t, r, n) {
                        var i,
                            o,
                            s = new Uint8Array(32),
                            a = new Float64Array(80),
                            u = e(),
                            c = e(),
                            h = e(),
                            d = e(),
                            l = e(),
                            p = e();
                        for (o = 0; o < 31; o++) s[o] = r[o];
                        for (s[31] = (127 & r[31]) | 64, s[0] &= 248, z(a, n), o = 0; o < 16; o++) (c[o] = a[o]), (d[o] = u[o] = h[o] = 0);
                        for (u[0] = d[0] = 1, o = 254; o >= 0; --o)
                            U(u, c, (i = (s[o >>> 3] >>> (7 & o)) & 1)),
                                U(h, d, i),
                                j(l, u, h),
                                N(u, u, h),
                                j(h, c, d),
                                N(c, c, d),
                                C(d, l),
                                C(p, u),
                                q(u, h, u),
                                q(h, c, l),
                                j(l, u, h),
                                N(u, u, h),
                                C(c, u),
                                N(h, d, p),
                                q(u, h, f),
                                j(u, u, d),
                                q(h, h, u),
                                q(u, d, p),
                                q(d, c, a),
                                C(c, l),
                                U(u, c, i),
                                U(h, d, i);
                        for (o = 0; o < 16; o++) (a[o + 16] = u[o]), (a[o + 32] = h[o]), (a[o + 48] = c[o]), (a[o + 64] = d[o]);
                        var b = a.subarray(32),
                            y = a.subarray(16);
                        return W(b, b), q(y, y, b), O(t, y), 0;
                    }
                    function F(t, e) {
                        return D(t, e, o);
                    }
                    function $(t, e) {
                        return n(e, 32), F(t, e);
                    }
                    function V(t, e, r) {
                        var n = new Uint8Array(32);
                        return D(n, r, e), v(t, i, n, w);
                    }
                    (x.prototype.blocks = function (t, e, r) {
                        for (
                            var n,
                                i,
                                o,
                                s,
                                a,
                                f,
                                u,
                                c,
                                h,
                                d,
                                l,
                                p,
                                b,
                                y,
                                m,
                                g,
                                v,
                                w,
                                M,
                                _ = this.fin ? 0 : 2048,
                                A = this.h[0],
                                S = this.h[1],
                                x = this.h[2],
                                E = this.h[3],
                                k = this.h[4],
                                I = this.h[5],
                                B = this.h[6],
                                P = this.h[7],
                                R = this.h[8],
                                U = this.h[9],
                                O = this.r[0],
                                T = this.r[1],
                                L = this.r[2],
                                z = this.r[3],
                                j = this.r[4],
                                N = this.r[5],
                                q = this.r[6],
                                C = this.r[7],
                                W = this.r[8],
                                K = this.r[9];
                            r >= 16;

                        )
                            (d = h = 0),
                                (d += (A += 8191 & (n = (255 & t[e + 0]) | ((255 & t[e + 1]) << 8))) * O),
                                (d += (S += 8191 & ((n >>> 13) | ((i = (255 & t[e + 2]) | ((255 & t[e + 3]) << 8)) << 3))) * (5 * K)),
                                (d += (x += 8191 & ((i >>> 10) | ((o = (255 & t[e + 4]) | ((255 & t[e + 5]) << 8)) << 6))) * (5 * W)),
                                (d += (E += 8191 & ((o >>> 7) | ((s = (255 & t[e + 6]) | ((255 & t[e + 7]) << 8)) << 9))) * (5 * C)),
                                (h = (d += (k += 8191 & ((s >>> 4) | ((a = (255 & t[e + 8]) | ((255 & t[e + 9]) << 8)) << 12))) * (5 * q)) >>> 13),
                                (d &= 8191),
                                (d += (I += (a >>> 1) & 8191) * (5 * N)),
                                (d += (B += 8191 & ((a >>> 14) | ((f = (255 & t[e + 10]) | ((255 & t[e + 11]) << 8)) << 2))) * (5 * j)),
                                (d += (P += 8191 & ((f >>> 11) | ((u = (255 & t[e + 12]) | ((255 & t[e + 13]) << 8)) << 5))) * (5 * z)),
                                (d += (R += 8191 & ((u >>> 8) | ((c = (255 & t[e + 14]) | ((255 & t[e + 15]) << 8)) << 8))) * (5 * L)),
                                (l = h += (d += (U += (c >>> 5) | _) * (5 * T)) >>> 13),
                                (l += A * T),
                                (l += S * O),
                                (l += x * (5 * K)),
                                (l += E * (5 * W)),
                                (h = (l += k * (5 * C)) >>> 13),
                                (l &= 8191),
                                (l += I * (5 * q)),
                                (l += B * (5 * N)),
                                (l += P * (5 * j)),
                                (l += R * (5 * z)),
                                (h += (l += U * (5 * L)) >>> 13),
                                (l &= 8191),
                                (p = h),
                                (p += A * L),
                                (p += S * T),
                                (p += x * O),
                                (p += E * (5 * K)),
                                (h = (p += k * (5 * W)) >>> 13),
                                (p &= 8191),
                                (p += I * (5 * C)),
                                (p += B * (5 * q)),
                                (p += P * (5 * N)),
                                (p += R * (5 * j)),
                                (b = h += (p += U * (5 * z)) >>> 13),
                                (b += A * z),
                                (b += S * L),
                                (b += x * T),
                                (b += E * O),
                                (h = (b += k * (5 * K)) >>> 13),
                                (b &= 8191),
                                (b += I * (5 * W)),
                                (b += B * (5 * C)),
                                (b += P * (5 * q)),
                                (b += R * (5 * N)),
                                (y = h += (b += U * (5 * j)) >>> 13),
                                (y += A * j),
                                (y += S * z),
                                (y += x * L),
                                (y += E * T),
                                (h = (y += k * O) >>> 13),
                                (y &= 8191),
                                (y += I * (5 * K)),
                                (y += B * (5 * W)),
                                (y += P * (5 * C)),
                                (y += R * (5 * q)),
                                (m = h += (y += U * (5 * N)) >>> 13),
                                (m += A * N),
                                (m += S * j),
                                (m += x * z),
                                (m += E * L),
                                (h = (m += k * T) >>> 13),
                                (m &= 8191),
                                (m += I * O),
                                (m += B * (5 * K)),
                                (m += P * (5 * W)),
                                (m += R * (5 * C)),
                                (g = h += (m += U * (5 * q)) >>> 13),
                                (g += A * q),
                                (g += S * N),
                                (g += x * j),
                                (g += E * z),
                                (h = (g += k * L) >>> 13),
                                (g &= 8191),
                                (g += I * T),
                                (g += B * O),
                                (g += P * (5 * K)),
                                (g += R * (5 * W)),
                                (v = h += (g += U * (5 * C)) >>> 13),
                                (v += A * C),
                                (v += S * q),
                                (v += x * N),
                                (v += E * j),
                                (h = (v += k * z) >>> 13),
                                (v &= 8191),
                                (v += I * L),
                                (v += B * T),
                                (v += P * O),
                                (v += R * (5 * K)),
                                (w = h += (v += U * (5 * W)) >>> 13),
                                (w += A * W),
                                (w += S * C),
                                (w += x * q),
                                (w += E * N),
                                (h = (w += k * j) >>> 13),
                                (w &= 8191),
                                (w += I * z),
                                (w += B * L),
                                (w += P * T),
                                (w += R * O),
                            (M = h += (w += U * (5 * K)) >>> 13),
                            (M += A * K),
                            (M += S * W),
                            (M += x * C),
                            (M += E * q),
                            (h = (M += k * N) >>> 13),
                            (M &= 8191),
                            (M += I * j),
                            (M += B * z),
                            (M += P * L),
                            (M += R * T),
                            (A = d = 8191 & (h = ((h = (((h += (M += U * O) >>> 13) << 2) + h) | 0) + (d &= 8191)) | 0)),
                            (S = l += h >>>= 13),
                            (x = p &= 8191),
                            (E = b &= 8191),
                            (k = y &= 8191),
                            (I = m &= 8191),
                            (B = g &= 8191),
                            (P = v &= 8191),
                            (R = w &= 8191),
                            (U = M &= 8191),
                            (e += 16),
                            (r -= 16);
                        (this.h[0] = A), (this.h[1] = S), (this.h[2] = x), (this.h[3] = E), (this.h[4] = k), (this.h[5] = I), (this.h[6] = B), (this.h[7] = P), (this.h[8] = R), (this.h[9] = U);
                    }),
                        (x.prototype.finish = function (t, e) {
                            var r,
                                n,
                                i,
                                o,
                                s = new Uint16Array(10);
                            if (this.leftover) {
                                for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
                                (this.fin = 1), this.blocks(this.buffer, 0, 16);
                            }
                            for (r = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) (this.h[o] += r), (r = this.h[o] >>> 13), (this.h[o] &= 8191);
                            for (this.h[0] += 5 * r, r = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += r, r = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += r, s[0] = this.h[0] + 5, r = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++)
                                (s[o] = this.h[o] + r), (r = s[o] >>> 13), (s[o] &= 8191);
                            for (s[9] -= 8192, n = (1 ^ r) - 1, o = 0; o < 10; o++) s[o] &= n;
                            for (n = ~n, o = 0; o < 10; o++) this.h[o] = (this.h[o] & n) | s[o];
                            for (
                                this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                                    this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                                    this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                                    this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                                    this.h[4] = 65535 & ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                                    this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                                    this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                                    this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                                    i = this.h[0] + this.pad[0],
                                    this.h[0] = 65535 & i,
                                    o = 1;
                                o < 8;
                                o++
                            )
                                (i = (((this.h[o] + this.pad[o]) | 0) + (i >>> 16)) | 0), (this.h[o] = 65535 & i);
                            (t[e + 0] = (this.h[0] >>> 0) & 255),
                                (t[e + 1] = (this.h[0] >>> 8) & 255),
                                (t[e + 2] = (this.h[1] >>> 0) & 255),
                                (t[e + 3] = (this.h[1] >>> 8) & 255),
                                (t[e + 4] = (this.h[2] >>> 0) & 255),
                                (t[e + 5] = (this.h[2] >>> 8) & 255),
                                (t[e + 6] = (this.h[3] >>> 0) & 255),
                                (t[e + 7] = (this.h[3] >>> 8) & 255),
                                (t[e + 8] = (this.h[4] >>> 0) & 255),
                                (t[e + 9] = (this.h[4] >>> 8) & 255),
                                (t[e + 10] = (this.h[5] >>> 0) & 255),
                                (t[e + 11] = (this.h[5] >>> 8) & 255),
                                (t[e + 12] = (this.h[6] >>> 0) & 255),
                                (t[e + 13] = (this.h[6] >>> 8) & 255),
                                (t[e + 14] = (this.h[7] >>> 0) & 255),
                                (t[e + 15] = (this.h[7] >>> 8) & 255);
                        }),
                        (x.prototype.update = function (t, e, r) {
                            var n, i;
                            if (this.leftover) {
                                for ((i = 16 - this.leftover) > r && (i = r), n = 0; n < i; n++) this.buffer[this.leftover + n] = t[e + n];
                                if (((r -= i), (e += i), (this.leftover += i), this.leftover < 16)) return;
                                this.blocks(this.buffer, 0, 16), (this.leftover = 0);
                            }
                            if ((r >= 16 && ((i = r - (r % 16)), this.blocks(t, e, i), (e += i), (r -= i)), r)) {
                                for (n = 0; n < r; n++) this.buffer[this.leftover + n] = t[e + n];
                                this.leftover += r;
                            }
                        });
                    var Z = I,
                        Y = B,
                        H = [
                            1116352408,
                            3609767458,
                            1899447441,
                            602891725,
                            3049323471,
                            3964484399,
                            3921009573,
                            2173295548,
                            961987163,
                            4081628472,
                            1508970993,
                            3053834265,
                            2453635748,
                            2937671579,
                            2870763221,
                            3664609560,
                            3624381080,
                            2734883394,
                            310598401,
                            1164996542,
                            607225278,
                            1323610764,
                            1426881987,
                            3590304994,
                            1925078388,
                            4068182383,
                            2162078206,
                            991336113,
                            2614888103,
                            633803317,
                            3248222580,
                            3479774868,
                            3835390401,
                            2666613458,
                            4022224774,
                            944711139,
                            264347078,
                            2341262773,
                            604807628,
                            2007800933,
                            770255983,
                            1495990901,
                            1249150122,
                            1856431235,
                            1555081692,
                            3175218132,
                            1996064986,
                            2198950837,
                            2554220882,
                            3999719339,
                            2821834349,
                            766784016,
                            2952996808,
                            2566594879,
                            3210313671,
                            3203337956,
                            3336571891,
                            1034457026,
                            3584528711,
                            2466948901,
                            113926993,
                            3758326383,
                            338241895,
                            168717936,
                            666307205,
                            1188179964,
                            773529912,
                            1546045734,
                            1294757372,
                            1522805485,
                            1396182291,
                            2643833823,
                            1695183700,
                            2343527390,
                            1986661051,
                            1014477480,
                            2177026350,
                            1206759142,
                            2456956037,
                            344077627,
                            2730485921,
                            1290863460,
                            2820302411,
                            3158454273,
                            3259730800,
                            3505952657,
                            3345764771,
                            106217008,
                            3516065817,
                            3606008344,
                            3600352804,
                            1432725776,
                            4094571909,
                            1467031594,
                            275423344,
                            851169720,
                            430227734,
                            3100823752,
                            506948616,
                            1363258195,
                            659060556,
                            3750685593,
                            883997877,
                            3785050280,
                            958139571,
                            3318307427,
                            1322822218,
                            3812723403,
                            1537002063,
                            2003034995,
                            1747873779,
                            3602036899,
                            1955562222,
                            1575990012,
                            2024104815,
                            1125592928,
                            2227730452,
                            2716904306,
                            2361852424,
                            442776044,
                            2428436474,
                            593698344,
                            2756734187,
                            3733110249,
                            3204031479,
                            2999351573,
                            3329325298,
                            3815920427,
                            3391569614,
                            3928383900,
                            3515267271,
                            566280711,
                            3940187606,
                            3454069534,
                            4118630271,
                            4000239992,
                            116418474,
                            1914138554,
                            174292421,
                            2731055270,
                            289380356,
                            3203993006,
                            460393269,
                            320620315,
                            685471733,
                            587496836,
                            852142971,
                            1086792851,
                            1017036298,
                            365543100,
                            1126000580,
                            2618297676,
                            1288033470,
                            3409855158,
                            1501505948,
                            4234509866,
                            1607167915,
                            987167468,
                            1816402316,
                            1246189591,
                        ];
                    function J(t, e, r, n) {
                        for (
                            var i,
                                o,
                                s,
                                a,
                                f,
                                u,
                                c,
                                h,
                                d,
                                l,
                                p,
                                b,
                                y,
                                m,
                                g,
                                v,
                                w,
                                M,
                                _,
                                A,
                                S,
                                x,
                                E,
                                k,
                                I,
                                B,
                                P = new Int32Array(16),
                                R = new Int32Array(16),
                                U = t[0],
                                O = t[1],
                                T = t[2],
                                L = t[3],
                                z = t[4],
                                j = t[5],
                                N = t[6],
                                q = t[7],
                                C = e[0],
                                W = e[1],
                                K = e[2],
                                D = e[3],
                                F = e[4],
                                $ = e[5],
                                V = e[6],
                                Z = e[7],
                                Y = 0;
                            n >= 128;

                        ) {
                            for (_ = 0; _ < 16; _++) (A = 8 * _ + Y), (P[_] = (r[A + 0] << 24) | (r[A + 1] << 16) | (r[A + 2] << 8) | r[A + 3]), (R[_] = (r[A + 4] << 24) | (r[A + 5] << 16) | (r[A + 6] << 8) | r[A + 7]);
                            for (_ = 0; _ < 80; _++)
                                if (
                                    ((i = U),
                                        (o = O),
                                        (s = T),
                                        (a = L),
                                        (f = z),
                                        (u = j),
                                        (c = N),
                                        (d = C),
                                        (l = W),
                                        (p = K),
                                        (b = D),
                                        (y = F),
                                        (m = $),
                                        (g = V),
                                        (E = 65535 & (x = Z)),
                                        (k = x >>> 16),
                                        (I = 65535 & (S = q)),
                                        (B = S >>> 16),
                                        (E += 65535 & (x = ((F >>> 14) | (z << 18)) ^ ((F >>> 18) | (z << 14)) ^ ((z >>> 9) | (F << 23)))),
                                        (k += x >>> 16),
                                        (I += 65535 & (S = ((z >>> 14) | (F << 18)) ^ ((z >>> 18) | (F << 14)) ^ ((F >>> 9) | (z << 23)))),
                                        (B += S >>> 16),
                                        (E += 65535 & (x = (F & $) ^ (~F & V))),
                                        (k += x >>> 16),
                                        (I += 65535 & (S = (z & j) ^ (~z & N))),
                                        (B += S >>> 16),
                                        (E += 65535 & (x = H[2 * _ + 1])),
                                        (k += x >>> 16),
                                        (I += 65535 & (S = H[2 * _])),
                                        (B += S >>> 16),
                                        (S = P[_ % 16]),
                                        (k += (x = R[_ % 16]) >>> 16),
                                        (I += 65535 & S),
                                        (B += S >>> 16),
                                        (I += (k += (E += 65535 & x) >>> 16) >>> 16),
                                        (E = 65535 & (x = M = (65535 & E) | (k << 16))),
                                        (k = x >>> 16),
                                        (I = 65535 & (S = w = (65535 & I) | ((B += I >>> 16) << 16))),
                                        (B = S >>> 16),
                                        (E += 65535 & (x = ((C >>> 28) | (U << 4)) ^ ((U >>> 2) | (C << 30)) ^ ((U >>> 7) | (C << 25)))),
                                        (k += x >>> 16),
                                        (I += 65535 & (S = ((U >>> 28) | (C << 4)) ^ ((C >>> 2) | (U << 30)) ^ ((C >>> 7) | (U << 25)))),
                                        (B += S >>> 16),
                                        (k += (x = (C & W) ^ (C & K) ^ (W & K)) >>> 16),
                                        (I += 65535 & (S = (U & O) ^ (U & T) ^ (O & T))),
                                        (B += S >>> 16),
                                        (h = (65535 & (I += (k += (E += 65535 & x) >>> 16) >>> 16)) | ((B += I >>> 16) << 16)),
                                        (v = (65535 & E) | (k << 16)),
                                        (E = 65535 & (x = b)),
                                        (k = x >>> 16),
                                        (I = 65535 & (S = a)),
                                        (B = S >>> 16),
                                        (k += (x = M) >>> 16),
                                        (I += 65535 & (S = w)),
                                        (B += S >>> 16),
                                        (O = i),
                                        (T = o),
                                        (L = s),
                                        (z = a = (65535 & (I += (k += (E += 65535 & x) >>> 16) >>> 16)) | ((B += I >>> 16) << 16)),
                                        (j = f),
                                        (N = u),
                                        (q = c),
                                        (U = h),
                                        (W = d),
                                        (K = l),
                                        (D = p),
                                        (F = b = (65535 & E) | (k << 16)),
                                        ($ = y),
                                        (V = m),
                                        (Z = g),
                                        (C = v),
                                    _ % 16 == 15)
                                )
                                    for (A = 0; A < 16; A++)
                                        (S = P[A]),
                                            (E = 65535 & (x = R[A])),
                                            (k = x >>> 16),
                                            (I = 65535 & S),
                                            (B = S >>> 16),
                                            (S = P[(A + 9) % 16]),
                                            (E += 65535 & (x = R[(A + 9) % 16])),
                                            (k += x >>> 16),
                                            (I += 65535 & S),
                                            (B += S >>> 16),
                                            (w = P[(A + 1) % 16]),
                                            (E += 65535 & (x = (((M = R[(A + 1) % 16]) >>> 1) | (w << 31)) ^ ((M >>> 8) | (w << 24)) ^ ((M >>> 7) | (w << 25)))),
                                            (k += x >>> 16),
                                            (I += 65535 & (S = ((w >>> 1) | (M << 31)) ^ ((w >>> 8) | (M << 24)) ^ (w >>> 7))),
                                            (B += S >>> 16),
                                            (w = P[(A + 14) % 16]),
                                            (k += (x = (((M = R[(A + 14) % 16]) >>> 19) | (w << 13)) ^ ((w >>> 29) | (M << 3)) ^ ((M >>> 6) | (w << 26))) >>> 16),
                                            (I += 65535 & (S = ((w >>> 19) | (M << 13)) ^ ((M >>> 29) | (w << 3)) ^ (w >>> 6))),
                                            (B += S >>> 16),
                                            (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                            (P[A] = (65535 & I) | (B << 16)),
                                            (R[A] = (65535 & E) | (k << 16));
                            (E = 65535 & (x = C)),
                                (k = x >>> 16),
                                (I = 65535 & (S = U)),
                                (B = S >>> 16),
                                (S = t[0]),
                                (k += (x = e[0]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[0] = U = (65535 & I) | (B << 16)),
                                (e[0] = C = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = W)),
                                (k = x >>> 16),
                                (I = 65535 & (S = O)),
                                (B = S >>> 16),
                                (S = t[1]),
                                (k += (x = e[1]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[1] = O = (65535 & I) | (B << 16)),
                                (e[1] = W = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = K)),
                                (k = x >>> 16),
                                (I = 65535 & (S = T)),
                                (B = S >>> 16),
                                (S = t[2]),
                                (k += (x = e[2]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[2] = T = (65535 & I) | (B << 16)),
                                (e[2] = K = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = D)),
                                (k = x >>> 16),
                                (I = 65535 & (S = L)),
                                (B = S >>> 16),
                                (S = t[3]),
                                (k += (x = e[3]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[3] = L = (65535 & I) | (B << 16)),
                                (e[3] = D = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = F)),
                                (k = x >>> 16),
                                (I = 65535 & (S = z)),
                                (B = S >>> 16),
                                (S = t[4]),
                                (k += (x = e[4]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[4] = z = (65535 & I) | (B << 16)),
                                (e[4] = F = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = $)),
                                (k = x >>> 16),
                                (I = 65535 & (S = j)),
                                (B = S >>> 16),
                                (S = t[5]),
                                (k += (x = e[5]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[5] = j = (65535 & I) | (B << 16)),
                                (e[5] = $ = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = V)),
                                (k = x >>> 16),
                                (I = 65535 & (S = N)),
                                (B = S >>> 16),
                                (S = t[6]),
                                (k += (x = e[6]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[6] = N = (65535 & I) | (B << 16)),
                                (e[6] = V = (65535 & E) | (k << 16)),
                                (E = 65535 & (x = Z)),
                                (k = x >>> 16),
                                (I = 65535 & (S = q)),
                                (B = S >>> 16),
                                (S = t[7]),
                                (k += (x = e[7]) >>> 16),
                                (I += 65535 & S),
                                (B += S >>> 16),
                                (B += (I += (k += (E += 65535 & x) >>> 16) >>> 16) >>> 16),
                                (t[7] = q = (65535 & I) | (B << 16)),
                                (e[7] = Z = (65535 & E) | (k << 16)),
                                (Y += 128),
                                (n -= 128);
                        }
                        return n;
                    }
                    function G(t, e, r) {
                        var n,
                            i = new Int32Array(8),
                            o = new Int32Array(8),
                            s = new Uint8Array(256),
                            a = r;
                        for (
                            i[0] = 1779033703,
                                i[1] = 3144134277,
                                i[2] = 1013904242,
                                i[3] = 2773480762,
                                i[4] = 1359893119,
                                i[5] = 2600822924,
                                i[6] = 528734635,
                                i[7] = 1541459225,
                                o[0] = 4089235720,
                                o[1] = 2227873595,
                                o[2] = 4271175723,
                                o[3] = 1595750129,
                                o[4] = 2917565137,
                                o[5] = 725511199,
                                o[6] = 4215389547,
                                o[7] = 327033209,
                                J(i, o, e, r),
                                r %= 128,
                                n = 0;
                            n < r;
                            n++
                        )
                            s[n] = e[a - r + n];
                        for (s[r] = 128, s[(r = 256 - 128 * (r < 112 ? 1 : 0)) - 9] = 0, p(s, r - 8, (a / 536870912) | 0, a << 3), J(i, o, s, r), n = 0; n < 8; n++) p(t, 8 * n, i[n], o[n]);
                        return 0;
                    }
                    function X(t, r) {
                        var n = e(),
                            i = e(),
                            o = e(),
                            s = e(),
                            a = e(),
                            f = e(),
                            u = e(),
                            h = e(),
                            d = e();
                        N(n, t[1], t[0]),
                            N(d, r[1], r[0]),
                            q(n, n, d),
                            j(i, t[0], t[1]),
                            j(d, r[0], r[1]),
                            q(i, i, d),
                            q(o, t[3], r[3]),
                            q(o, o, c),
                            q(s, t[2], r[2]),
                            j(s, s, s),
                            N(a, i, n),
                            N(f, s, o),
                            j(u, s, o),
                            j(h, i, n),
                            q(t[0], a, f),
                            q(t[1], h, u),
                            q(t[2], u, f),
                            q(t[3], a, h);
                    }
                    function Q(t, e, r) {
                        var n;
                        for (n = 0; n < 4; n++) U(t[n], e[n], r);
                    }
                    function tt(t, r) {
                        var n = e(),
                            i = e(),
                            o = e();
                        W(o, r[2]), q(n, r[0], o), q(i, r[1], o), O(t, i), (t[31] ^= L(n) << 7);
                    }
                    function et(t, e, r) {
                        var n, i;
                        for (P(t[0], s), P(t[1], a), P(t[2], a), P(t[3], s), i = 255; i >= 0; --i) Q(t, e, (n = (r[(i / 8) | 0] >> (7 & i)) & 1)), X(e, t), X(t, t), Q(t, e, n);
                    }
                    function rt(t, r) {
                        var n = [e(), e(), e(), e()];
                        P(n[0], h), P(n[1], d), P(n[2], a), q(n[3], h, d), et(t, n, r);
                    }
                    function nt(t, r, i) {
                        var o,
                            s = new Uint8Array(64),
                            a = [e(), e(), e(), e()];
                        for (i || n(r, 32), G(s, r, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, rt(a, s), tt(t, a), o = 0; o < 32; o++) r[o + 32] = t[o];
                        return 0;
                    }
                    var it = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
                    function ot(t, e) {
                        var r, n, i, o;
                        for (n = 63; n >= 32; --n) {
                            for (r = 0, i = n - 32, o = n - 12; i < o; ++i) (e[i] += r - 16 * e[n] * it[i - (n - 32)]), (r = Math.floor((e[i] + 128) / 256)), (e[i] -= 256 * r);
                            (e[i] += r), (e[n] = 0);
                        }
                        for (r = 0, i = 0; i < 32; i++) (e[i] += r - (e[31] >> 4) * it[i]), (r = e[i] >> 8), (e[i] &= 255);
                        for (i = 0; i < 32; i++) e[i] -= r * it[i];
                        for (n = 0; n < 32; n++) (e[n + 1] += e[n] >> 8), (t[n] = 255 & e[n]);
                    }
                    function st(t) {
                        var e,
                            r = new Float64Array(64);
                        for (e = 0; e < 64; e++) r[e] = t[e];
                        for (e = 0; e < 64; e++) t[e] = 0;
                        ot(t, r);
                    }
                    function at(t, r, n, i) {
                        var o,
                            s,
                            a = new Uint8Array(64),
                            f = new Uint8Array(64),
                            u = new Uint8Array(64),
                            c = new Float64Array(64),
                            h = [e(), e(), e(), e()];
                        G(a, i, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64);
                        var d = n + 64;
                        for (o = 0; o < n; o++) t[64 + o] = r[o];
                        for (o = 0; o < 32; o++) t[32 + o] = a[32 + o];
                        for (G(u, t.subarray(32), n + 32), st(u), rt(h, u), tt(t, h), o = 32; o < 64; o++) t[o] = i[o];
                        for (G(f, t, n + 64), st(f), o = 0; o < 64; o++) c[o] = 0;
                        for (o = 0; o < 32; o++) c[o] = u[o];
                        for (o = 0; o < 32; o++) for (s = 0; s < 32; s++) c[o + s] += f[o] * a[s];
                        return ot(t.subarray(32), c), d;
                    }
                    function ft(t, r, n, i) {
                        var o,
                            f = new Uint8Array(32),
                            c = new Uint8Array(64),
                            h = [e(), e(), e(), e()],
                            d = [e(), e(), e(), e()];
                        if (n < 64) return -1;
                        if (
                            (function (t, r) {
                                var n = e(),
                                    i = e(),
                                    o = e(),
                                    f = e(),
                                    c = e(),
                                    h = e(),
                                    d = e();
                                return (
                                    P(t[2], a),
                                        z(t[1], r),
                                        C(o, t[1]),
                                        q(f, o, u),
                                        N(o, o, t[2]),
                                        j(f, t[2], f),
                                        C(c, f),
                                        C(h, c),
                                        q(d, h, c),
                                        q(n, d, o),
                                        q(n, n, f),
                                        K(n, n),
                                        q(n, n, o),
                                        q(n, n, f),
                                        q(n, n, f),
                                        q(t[0], n, f),
                                        C(i, t[0]),
                                        q(i, i, f),
                                    T(i, o) && q(t[0], t[0], l),
                                        C(i, t[0]),
                                        q(i, i, f),
                                        T(i, o) ? -1 : (L(t[0]) === r[31] >> 7 && N(t[0], s, t[0]), q(t[3], t[0], t[1]), 0)
                                );
                            })(d, i)
                        )
                            return -1;
                        for (o = 0; o < n; o++) t[o] = r[o];
                        for (o = 0; o < 32; o++) t[o + 32] = i[o];
                        if ((G(c, t, n), st(c), et(h, d, c), rt(d, r.subarray(32)), X(h, d), tt(f, h), (n -= 64), m(r, 0, f, 0))) {
                            for (o = 0; o < n; o++) t[o] = 0;
                            return -1;
                        }
                        for (o = 0; o < n; o++) t[o] = r[o + 64];
                        return n;
                    }
                    var ut = 64,
                        ct = 32,
                        ht = 64;
                    function dt(t, e) {
                        if (32 !== t.length) throw new Error("bad key size");
                        if (24 !== e.length) throw new Error("bad nonce size");
                    }
                    function lt() {
                        for (var t = 0; t < arguments.length; t++) if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array");
                    }
                    function pt(t) {
                        for (var e = 0; e < t.length; e++) t[e] = 0;
                    }
                    (t.lowlevel = {
                        crypto_core_hsalsa20: v,
                        crypto_stream_xor: S,
                        crypto_stream: A,
                        crypto_stream_salsa20_xor: M,
                        crypto_stream_salsa20: _,
                        crypto_onetimeauth: E,
                        crypto_onetimeauth_verify: k,
                        crypto_verify_16: y,
                        crypto_verify_32: m,
                        crypto_secretbox: I,
                        crypto_secretbox_open: B,
                        crypto_scalarmult: D,
                        crypto_scalarmult_base: F,
                        crypto_box_beforenm: V,
                        crypto_box_afternm: Z,
                        crypto_box: function (t, e, r, n, i, o) {
                            var s = new Uint8Array(32);
                            return V(s, i, o), Z(t, e, r, n, s);
                        },
                        crypto_box_open: function (t, e, r, n, i, o) {
                            var s = new Uint8Array(32);
                            return V(s, i, o), Y(t, e, r, n, s);
                        },
                        crypto_box_keypair: $,
                        crypto_hash: G,
                        crypto_sign: at,
                        crypto_sign_keypair: nt,
                        crypto_sign_open: ft,
                        crypto_secretbox_KEYBYTES: 32,
                        crypto_secretbox_NONCEBYTES: 24,
                        crypto_secretbox_ZEROBYTES: 32,
                        crypto_secretbox_BOXZEROBYTES: 16,
                        crypto_scalarmult_BYTES: 32,
                        crypto_scalarmult_SCALARBYTES: 32,
                        crypto_box_PUBLICKEYBYTES: 32,
                        crypto_box_SECRETKEYBYTES: 32,
                        crypto_box_BEFORENMBYTES: 32,
                        crypto_box_NONCEBYTES: 24,
                        crypto_box_ZEROBYTES: 32,
                        crypto_box_BOXZEROBYTES: 16,
                        crypto_sign_BYTES: ut,
                        crypto_sign_PUBLICKEYBYTES: ct,
                        crypto_sign_SECRETKEYBYTES: ht,
                        crypto_sign_SEEDBYTES: 32,
                        crypto_hash_BYTES: 64,
                        gf: e,
                        D: u,
                        L: it,
                        pack25519: O,
                        unpack25519: z,
                        M: q,
                        A: j,
                        S: C,
                        Z: N,
                        pow2523: K,
                        add: X,
                        set25519: P,
                        modL: ot,
                        scalarmult: et,
                        scalarbase: rt,
                    }),
                        (t.randomBytes = function (t) {
                            var e = new Uint8Array(t);
                            return n(e, t), e;
                        }),
                        (t.secretbox = function (t, e, r) {
                            lt(t, e, r), dt(r, e);
                            for (var n = new Uint8Array(32 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++) n[o + 32] = t[o];
                            return I(i, n, n.length, e, r), i.subarray(16);
                        }),
                        (t.secretbox.open = function (t, e, r) {
                            lt(t, e, r), dt(r, e);
                            for (var n = new Uint8Array(16 + t.length), i = new Uint8Array(n.length), o = 0; o < t.length; o++) n[o + 16] = t[o];
                            return n.length < 32 || 0 !== B(i, n, n.length, e, r) ? null : i.subarray(32);
                        }),
                        (t.secretbox.keyLength = 32),
                        (t.secretbox.nonceLength = 24),
                        (t.secretbox.overheadLength = 16),
                        (t.scalarMult = function (t, e) {
                            if ((lt(t, e), 32 !== t.length)) throw new Error("bad n size");
                            if (32 !== e.length) throw new Error("bad p size");
                            var r = new Uint8Array(32);
                            return D(r, t, e), r;
                        }),
                        (t.scalarMult.base = function (t) {
                            if ((lt(t), 32 !== t.length)) throw new Error("bad n size");
                            var e = new Uint8Array(32);
                            return F(e, t), e;
                        }),
                        (t.scalarMult.scalarLength = 32),
                        (t.scalarMult.groupElementLength = 32),
                        (t.box = function (e, r, n, i) {
                            var o = t.box.before(n, i);
                            return t.secretbox(e, r, o);
                        }),
                        (t.box.before = function (t, e) {
                            lt(t, e),
                                (function (t, e) {
                                    if (32 !== t.length) throw new Error("bad public key size");
                                    if (32 !== e.length) throw new Error("bad secret key size");
                                })(t, e);
                            var r = new Uint8Array(32);
                            return V(r, t, e), r;
                        }),
                        (t.box.after = t.secretbox),
                        (t.box.open = function (e, r, n, i) {
                            var o = t.box.before(n, i);
                            return t.secretbox.open(e, r, o);
                        }),
                        (t.box.open.after = t.secretbox.open),
                        (t.box.keyPair = function () {
                            var t = new Uint8Array(32),
                                e = new Uint8Array(32);
                            return $(t, e), { publicKey: t, secretKey: e };
                        }),
                        (t.box.keyPair.fromSecretKey = function (t) {
                            if ((lt(t), 32 !== t.length)) throw new Error("bad secret key size");
                            var e = new Uint8Array(32);
                            return F(e, t), { publicKey: e, secretKey: new Uint8Array(t) };
                        }),
                        (t.box.publicKeyLength = 32),
                        (t.box.secretKeyLength = 32),
                        (t.box.sharedKeyLength = 32),
                        (t.box.nonceLength = 24),
                        (t.box.overheadLength = t.secretbox.overheadLength),
                        (t.sign = function (t, e) {
                            if ((lt(t, e), e.length !== ht)) throw new Error("bad secret key size");
                            var r = new Uint8Array(ut + t.length);
                            return at(r, t, t.length, e), r;
                        }),
                        (t.sign.open = function (t, e) {
                            if ((lt(t, e), e.length !== ct)) throw new Error("bad public key size");
                            var r = new Uint8Array(t.length),
                                n = ft(r, t, t.length, e);
                            if (n < 0) return null;
                            for (var i = new Uint8Array(n), o = 0; o < i.length; o++) i[o] = r[o];
                            return i;
                        }),
                        (t.sign.detached = function (e, r) {
                            for (var n = t.sign(e, r), i = new Uint8Array(ut), o = 0; o < i.length; o++) i[o] = n[o];
                            return i;
                        }),
                        (t.sign.detached.verify = function (t, e, r) {
                            if ((lt(t, e, r), e.length !== ut)) throw new Error("bad signature size");
                            if (r.length !== ct) throw new Error("bad public key size");
                            var n,
                                i = new Uint8Array(ut + t.length),
                                o = new Uint8Array(ut + t.length);
                            for (n = 0; n < ut; n++) i[n] = e[n];
                            for (n = 0; n < t.length; n++) i[n + ut] = t[n];
                            return ft(o, i, i.length, r) >= 0;
                        }),
                        (t.sign.keyPair = function () {
                            var t = new Uint8Array(ct),
                                e = new Uint8Array(ht);
                            return nt(t, e), { publicKey: t, secretKey: e };
                        }),
                        (t.sign.keyPair.fromSecretKey = function (t) {
                            if ((lt(t), t.length !== ht)) throw new Error("bad secret key size");
                            for (var e = new Uint8Array(ct), r = 0; r < e.length; r++) e[r] = t[32 + r];
                            return { publicKey: e, secretKey: new Uint8Array(t) };
                        }),
                        (t.sign.keyPair.fromSeed = function (t) {
                            if ((lt(t), 32 !== t.length)) throw new Error("bad seed size");
                            for (var e = new Uint8Array(ct), r = new Uint8Array(ht), n = 0; n < 32; n++) r[n] = t[n];
                            return nt(e, r, !0), { publicKey: e, secretKey: r };
                        }),
                        (t.sign.publicKeyLength = ct),
                        (t.sign.secretKeyLength = ht),
                        (t.sign.seedLength = 32),
                        (t.sign.signatureLength = ut),
                        (t.hash = function (t) {
                            lt(t);
                            var e = new Uint8Array(64);
                            return G(e, t, t.length), e;
                        }),
                        (t.hash.hashLength = 64),
                        (t.verify = function (t, e) {
                            return lt(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === b(t, 0, e, 0, t.length);
                        }),
                        (t.setPRNG = function (t) {
                            n = t;
                        }),
                        (function () {
                            var e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                            e && e.getRandomValues
                                ? t.setPRNG(function (t, r) {
                                    var n,
                                        i = new Uint8Array(r);
                                    for (n = 0; n < r; n += 65536) e.getRandomValues(i.subarray(n, n + Math.min(r - n, 65536)));
                                    for (n = 0; n < r; n++) t[n] = i[n];
                                    pt(i);
                                })
                                : (e = r(5024)) &&
                                e.randomBytes &&
                                t.setPRNG(function (t, r) {
                                    var n,
                                        i = e.randomBytes(r);
                                    for (n = 0; n < r; n++) t[n] = i[n];
                                    pt(i);
                                });
                        })();
                })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
            },
            5327: (t) => {
                for (var e = [], r = 0; r < 256; ++r) e[r] = (r + 256).toString(16).substr(1);
                t.exports = function (t, r) {
                    var n = r || 0,
                        i = e;
                    return [i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], "-", i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]], i[t[n++]]].join("");
                };
            },
            5217: (t) => {
                var e =
                    ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                    ("undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto));
                if (e) {
                    var r = new Uint8Array(16);
                    t.exports = function () {
                        return e(r), r;
                    };
                } else {
                    var n = new Array(16);
                    t.exports = function () {
                        for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), (n[e] = (t >>> ((3 & e) << 3)) & 255);
                        return n;
                    };
                }
            },
            1171: (t, e, r) => {
                var n = r(5217),
                    i = r(5327);
                t.exports = function (t, e, r) {
                    var o = (e && r) || 0;
                    "string" == typeof t && ((e = "binary" === t ? new Array(16) : null), (t = null));
                    var s = (t = t || {}).random || (t.rng || n)();
                    if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), e)) for (var a = 0; a < 16; ++a) e[o + a] = s[a];
                    return e || i(s);
                };
            },
            6601: () => {},
            9214: () => {},
            5568: () => {},
            5024: () => {},
            8597: (t) => {
                "use strict";
                t.exports = { i8: "6.5.4" };
            },
        },
        e = {};
    function r(n) {
        var i = e[n];
        if (void 0 !== i) return i.exports;
        var o = (e[n] = { id: n, loaded: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
    }
    (r.amdO = {}),
        (r.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return r.d(e, { a: e }), e;
        }),
        (r.d = (t, e) => {
            for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
        }),
        (r.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = (t) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (r.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t));
    var n = {};
    (() => {
        "use strict";
        r.r(n), r.d(n, { getWalletAdapterClass: () => $e });
        var t,
            e = r(6729),
            i = r.n(e);
        class o extends i() {}
        !(function (t) {
            (t.Mainnet = "mainnet-beta"), (t.Testnet = "testnet"), (t.Devnet = "devnet");
        })(t || (t = {}));
        class s extends Error {
            constructor(t, e) {
                super(t), (this.error = e);
            }
        }
        class a extends s {
            constructor() {
                super(...arguments), (this.name = "WalletNotFoundError");
            }
        }
        class f extends s {
            constructor() {
                super(...arguments), (this.name = "WalletNotInstalledError");
            }
        }
        class u extends s {
            constructor() {
                super(...arguments), (this.name = "WalletConnectionError");
            }
        }
        class c extends s {
            constructor() {
                super(...arguments), (this.name = "WalletDisconnectedError");
            }
        }
        class h extends s {
            constructor() {
                super(...arguments), (this.name = "WalletDisconnectionError");
            }
        }
        class d extends s {
            constructor() {
                super(...arguments), (this.name = "WalletAccountError");
            }
        }
        class l extends s {
            constructor() {
                super(...arguments), (this.name = "WalletPublicKeyError");
            }
        }
        class p extends s {
            constructor() {
                super(...arguments), (this.name = "WalletNotConnectedError");
            }
        }
        class b extends s {
            constructor() {
                super(...arguments), (this.name = "WalletSendTransactionError");
            }
        }
        class y extends s {
            constructor() {
                super(...arguments), (this.name = "WalletSignMessageError");
            }
        }
        class m extends s {
            constructor() {
                super(...arguments), (this.name = "WalletSignTransactionError");
            }
        }
        class g extends s {
            constructor() {
                super(...arguments), (this.name = "WalletTimeoutError");
            }
        }
        class v extends s {
            constructor() {
                super(...arguments), (this.name = "WalletWindowBlockedError");
            }
        }
        class w extends s {
            constructor() {
                super(...arguments), (this.name = "WalletWindowClosedError");
            }
        }
        function M(t, e, r) {
            r > 0 &&
            setTimeout(() => {
                return (
                    (n = this),
                        (i = void 0),
                        (s = function* () {
                            (yield t()) || M(t, e, r - 1);
                        }),
                        new ((o = void 0) || (o = Promise))(function (t, e) {
                            function r(t) {
                                try {
                                    f(s.next(t));
                                } catch (t) {
                                    e(t);
                                }
                            }
                            function a(t) {
                                try {
                                    f(s.throw(t));
                                } catch (t) {
                                    e(t);
                                }
                            }
                            function f(e) {
                                var n;
                                e.done
                                    ? t(e.value)
                                    : ((n = e.value),
                                        n instanceof o
                                            ? n
                                            : new o(function (t) {
                                                t(n);
                                            })).then(r, a);
                            }
                            f((s = s.apply(n, i || [])).next());
                        })
                );
                var n, i, o, s;
            }, e);
        }
        function _(t, e, r) {
            M(
                () => {
                    const { ready: e } = t;
                    return e && (t.emit("ready") || console.warn(`${t.constructor.name} is ready but no listener was registered`)), e;
                },
                e,
                r
            );
        }
        class A extends o {
            sendTransaction(t, e, r = {}) {
                return (
                    (n = this),
                        (i = void 0),
                        (a = function* () {
                            try {
                                try {
                                    t.feePayer || (t.feePayer = this.publicKey || void 0), t.recentBlockhash || (t.recentBlockhash = (yield e.getRecentBlockhash("finalized")).blockhash);
                                    const { signers: n } = r,
                                        i = (function (t, e) {
                                            var r = {};
                                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                                            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                                var i = 0;
                                                for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                                            }
                                            return r;
                                        })(r, ["signers"]);
                                    (null == n ? void 0 : n.length) && t.partialSign(...n);
                                    const o = (t = yield this.signTransaction(t)).serialize();
                                    return yield e.sendRawTransaction(o, i);
                                } catch (t) {
                                    if (t instanceof s) throw t;
                                    throw new b(null == t ? void 0 : t.message, t);
                                }
                            } catch (t) {
                                throw (this.emit("error", t), t);
                            }
                        }),
                        new ((o = void 0) || (o = Promise))(function (t, e) {
                            function r(t) {
                                try {
                                    f(a.next(t));
                                } catch (t) {
                                    e(t);
                                }
                            }
                            function s(t) {
                                try {
                                    f(a.throw(t));
                                } catch (t) {
                                    e(t);
                                }
                            }
                            function f(e) {
                                var n;
                                e.done
                                    ? t(e.value)
                                    : ((n = e.value),
                                        n instanceof o
                                            ? n
                                            : new o(function (t) {
                                                t(n);
                                            })).then(r, s);
                            }
                            f((a = a.apply(n, i || [])).next());
                        })
                );
                var n, i, o, a;
            }
        }
        class S extends A {}
        function x(t, e, r) {
            return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
        }
        var E = r(780),
            k = r.n(E),
            I = r(4285),
            B = r(3550),
            P = r.n(B),
            R = r(7191),
            U = r.n(R),
            O = r(9266),
            T = r(5532),
            L = r(9386);
        class z extends TypeError {
            constructor(t, e) {
                let r;
                const { message: n, ...i } = t,
                    { path: o } = t;
                super(0 === o.length ? n : "At path: " + o.join(".") + " -- " + n),
                    Object.assign(this, i),
                    (this.name = this.constructor.name),
                    (this.failures = () => {
                        var n;
                        return null != (n = r) ? n : (r = [t, ...e()]);
                    });
            }
        }
        function j(t) {
            return "object" == typeof t && null != t;
        }
        function N(t) {
            return "string" == typeof t ? JSON.stringify(t) : "" + t;
        }
        function q(t, e, r, n) {
            if (!0 === t) return;
            !1 === t ? (t = {}) : "string" == typeof t && (t = { message: t });
            const { path: i, branch: o } = e,
                { type: s } = r,
                { refinement: a, message: f = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + N(n) + "`" } = t;
            return { value: n, type: s, refinement: a, key: i[i.length - 1], path: i, branch: o, ...t, message: f };
        }
        function* C(t, e, r, n) {
            var i;
            (j((i = t)) && "function" == typeof i[Symbol.iterator]) || (t = [t]);
            for (const i of t) {
                const t = q(i, e, r, n);
                t && (yield t);
            }
        }
        function* W(t, e, r = {}) {
            const { path: n = [], branch: i = [t], coerce: o = !1, mask: s = !1 } = r,
                a = { path: n, branch: i };
            if (o && ((t = e.coercer(t, a)), s && "type" !== e.type && j(e.schema) && j(t) && !Array.isArray(t))) for (const r in t) void 0 === e.schema[r] && delete t[r];
            let f = !0;
            for (const r of e.validator(t, a)) (f = !1), yield [r, void 0];
            for (let [r, u, c] of e.entries(t, a)) {
                const e = W(u, c, { path: void 0 === r ? n : [...n, r], branch: void 0 === r ? i : [...i, u], coerce: o, mask: s });
                for (const n of e) n[0] ? ((f = !1), yield [n[0], void 0]) : o && ((u = n[1]), void 0 === r ? (t = u) : t instanceof Map ? t.set(r, u) : t instanceof Set ? t.add(u) : j(t) && (t[r] = u));
            }
            if (f) for (const r of e.refiner(t, a)) (f = !1), yield [r, void 0];
            f && (yield [void 0, t]);
        }
        class K {
            constructor(t) {
                const { type: e, schema: r, validator: n, refiner: i, coercer: o = (t) => t, entries: s = function* () {} } = t;
                (this.type = e), (this.schema = r), (this.entries = s), (this.coercer = o), (this.validator = n ? (t, e) => C(n(t, e), e, this, t) : () => []), (this.refiner = i ? (t, e) => C(i(t, e), e, this, t) : () => []);
            }
            assert(t) {
                return (function (t, e) {
                    const r = $(t, e);
                    if (r[0]) throw r[0];
                })(t, this);
            }
            create(t) {
                return D(t, this);
            }
            is(t) {
                return F(t, this);
            }
            mask(t) {
                return (function (t, e) {
                    const r = $(t, e, { coerce: !0, mask: !0 });
                    if (r[0]) throw r[0];
                    return r[1];
                })(t, this);
            }
            validate(t, e = {}) {
                return $(t, this, e);
            }
        }
        function D(t, e) {
            const r = $(t, e, { coerce: !0 });
            if (r[0]) throw r[0];
            return r[1];
        }
        function F(t, e) {
            return !$(t, e)[0];
        }
        function $(t, e, r = {}) {
            const n = W(t, e, r),
                i = (function (t) {
                    const { done: e, value: r } = t.next();
                    return e ? void 0 : r;
                })(n);
            return i[0]
                ? [
                    new z(i[0], function* () {
                        for (const t of n) t[0] && (yield t[0]);
                    }),
                    void 0,
                ]
                : [void 0, i[1]];
        }
        function V(t, e) {
            return new K({ type: t, schema: null, validator: e });
        }
        function Z(t) {
            return new K({
                type: "array",
                schema: t,
                *entries(e) {
                    if (t && Array.isArray(e)) for (const [r, n] of e.entries()) yield [r, n, t];
                },
                coercer: (t) => (Array.isArray(t) ? t.slice() : t),
                validator: (t) => Array.isArray(t) || "Expected an array value, but received: " + N(t),
            });
        }
        function Y() {
            return V("boolean", (t) => "boolean" == typeof t);
        }
        function H(t) {
            return V("instance", (e) => e instanceof t || "Expected a `" + t.name + "` instance, but received: " + N(e));
        }
        function J(t) {
            const e = N(t),
                r = typeof t;
            return new K({ type: "literal", schema: "string" === r || "number" === r || "boolean" === r ? t : null, validator: (r) => r === t || "Expected the literal `" + e + "`, but received: " + N(r) });
        }
        function G(t) {
            return new K({ ...t, validator: (e, r) => null === e || t.validator(e, r), refiner: (e, r) => null === e || t.refiner(e, r) });
        }
        function X() {
            return V("number", (t) => ("number" == typeof t && !isNaN(t)) || "Expected a number, but received: " + N(t));
        }
        function Q(t) {
            return new K({ ...t, validator: (e, r) => void 0 === e || t.validator(e, r), refiner: (e, r) => void 0 === e || t.refiner(e, r) });
        }
        function tt() {
            return V("string", (t) => "string" == typeof t || "Expected a string, but received: " + N(t));
        }
        function et(t) {
            const e = V("never", () => !1);
            return new K({
                type: "tuple",
                schema: null,
                *entries(r) {
                    if (Array.isArray(r)) {
                        const n = Math.max(t.length, r.length);
                        for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e];
                    }
                },
                validator: (t) => Array.isArray(t) || "Expected an array, but received: " + N(t),
            });
        }
        function rt(t) {
            const e = Object.keys(t);
            return new K({
                type: "type",
                schema: t,
                *entries(r) {
                    if (j(r)) for (const n of e) yield [n, r[n], t[n]];
                },
                validator: (t) => j(t) || "Expected an object, but received: " + N(t),
            });
        }
        function nt(t) {
            const e = t.map((t) => t.type).join(" | ");
            return new K({
                type: "union",
                schema: null,
                validator(r, n) {
                    const i = [];
                    for (const e of t) {
                        const [...t] = W(r, e, n),
                            [o] = t;
                        if (!o[0]) return [];
                        for (const [e] of t) e && i.push(e);
                    }
                    return ["Expected the value to satisfy a union of `" + e + "`, but received: " + N(r), ...i];
                },
            });
        }
        function it() {
            return V("unknown", () => !0);
        }
        function ot(t, e, r) {
            return new K({ ...t, coercer: (n, i) => (F(n, e) ? t.coercer(r(n, i), i) : t.coercer(n, i)) });
        }
        r(3937), r(1198);
        var st = r(7221),
            at = r.n(st),
            ft = r(1094);
        const ut = (t) => (I.lW.isBuffer(t) ? t : t instanceof Uint8Array ? I.lW.from(t.buffer, t.byteOffset, t.byteLength) : I.lW.from(t));
        const ct = new Map();
        class ht extends class {
            constructor(t) {
                Object.assign(this, t);
            }
            encode() {
                return I.lW.from((0, T.serialize)(ct, this));
            }
            static decode(t) {
                return (0, T.deserialize)(ct, this, t);
            }
            static decodeUnchecked(t) {
                return (0, T.deserializeUnchecked)(ct, this, t);
            }
        } {
            constructor(t) {
                if (
                    (super({}),
                        x(this, "_bn", void 0),
                        (function (t) {
                            return void 0 !== t._bn;
                        })(t))
                )
                    this._bn = t._bn;
                else {
                    if ("string" == typeof t) {
                        const e = U().decode(t);
                        if (32 != e.length) throw new Error("Invalid public key input");
                        this._bn = new (P())(e);
                    } else this._bn = new (P())(t);
                    if (this._bn.byteLength() > 32) throw new Error("Invalid public key input");
                }
            }
            equals(t) {
                return this._bn.eq(t._bn);
            }
            toBase58() {
                return U().encode(this.toBytes());
            }
            toBytes() {
                return this.toBuffer();
            }
            toBuffer() {
                const t = this._bn.toArrayLike(I.lW);
                if (32 === t.length) return t;
                const e = I.lW.alloc(32);
                return t.copy(e, 32 - t.length), e;
            }
            toString() {
                return this.toBase58();
            }
            static async createWithSeed(t, e, r) {
                const n = I.lW.concat([t.toBuffer(), I.lW.from(e), r.toBuffer()]),
                    i = await (0, O.JQ)(new Uint8Array(n));
                return new ht(I.lW.from(i, "hex"));
            }
            static async createProgramAddress(t, e) {
                let r = I.lW.alloc(0);
                t.forEach(function (t) {
                    if (t.length > 32) throw new TypeError("Max seed length exceeded");
                    r = I.lW.concat([r, ut(t)]);
                }),
                    (r = I.lW.concat([r, e.toBuffer(), I.lW.from("ProgramDerivedAddress")]));
                let n = await (0, O.JQ)(new Uint8Array(r)),
                    i = new (P())(n, 16).toArray(void 0, 32);
                if (lt(i)) throw new Error("Invalid seeds, address must fall off the curve");
                return new ht(i);
            }
            static async findProgramAddress(t, e) {
                let r,
                    n = 255;
                for (; 0 != n; ) {
                    try {
                        const i = t.concat(I.lW.from([n]));
                        r = await this.createProgramAddress(i, e);
                    } catch (t) {
                        if (t instanceof TypeError) throw t;
                        n--;
                        continue;
                    }
                    return [r, n];
                }
                throw new Error("Unable to find a viable program address nonce");
            }
            static isOnCurve(t) {
                return 1 == lt(t);
            }
        }
        x(ht, "default", new ht("11111111111111111111111111111111")), ct.set(ht, { kind: "struct", fields: [["_bn", "u256"]] });
        let dt = k().lowlevel;
        function lt(t) {
            var e = [dt.gf(), dt.gf(), dt.gf(), dt.gf()],
                r = dt.gf(),
                n = dt.gf(),
                i = dt.gf(),
                o = dt.gf(),
                s = dt.gf(),
                a = dt.gf(),
                f = dt.gf();
            return (
                dt.set25519(e[2], pt),
                    dt.unpack25519(e[1], t),
                    dt.S(i, e[1]),
                    dt.M(o, i, dt.D),
                    dt.Z(i, i, e[2]),
                    dt.A(o, e[2], o),
                    dt.S(s, o),
                    dt.S(a, s),
                    dt.M(f, a, s),
                    dt.M(r, f, i),
                    dt.M(r, r, o),
                    dt.pow2523(r, r),
                    dt.M(r, r, i),
                    dt.M(r, r, o),
                    dt.M(r, r, o),
                    dt.M(e[0], r, o),
                    dt.S(n, e[0]),
                    dt.M(n, n, o),
                yt(n, i) && dt.M(e[0], e[0], bt),
                    dt.S(n, e[0]),
                    dt.M(n, n, o),
                    yt(n, i) ? 0 : 1
            );
        }
        let pt = dt.gf([1]),
            bt = dt.gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function yt(t, e) {
            var r = new Uint8Array(32),
                n = new Uint8Array(32);
            return dt.pack25519(r, t), dt.pack25519(n, e), dt.crypto_verify_32(r, 0, n, 0);
        }
        new ht("BPFLoader1111111111111111111111111111111111");
        const mt = (t = "publicKey") => L.blob(32, t),
            gt = (t = "string") => {
                const e = L.struct([L.u32("length"), L.u32("lengthPadding"), L.blob(L.offset(L.u32(), -8), "chars")], t),
                    r = e.decode.bind(e),
                    n = e.encode.bind(e);
                return (
                    (e.decode = (t, e) => r(t, e).chars.toString("utf8")),
                        (e.encode = (t, e, r) => {
                            const i = { chars: I.lW.from(t, "utf8") };
                            return n(i, e, r);
                        }),
                        (e.alloc = (t) => L.u32().span + L.u32().span + I.lW.from(t, "utf8").length),
                        e
                );
            };
        function vt(t) {
            let e = 0,
                r = 0;
            for (;;) {
                let n = t.shift();
                if (((e |= (127 & n) << (7 * r)), (r += 1), 0 == (128 & n))) break;
            }
            return e;
        }
        function wt(t, e) {
            let r = e;
            for (;;) {
                let e = 127 & r;
                if (((r >>= 7), 0 == r)) {
                    t.push(e);
                    break;
                }
                (e |= 128), t.push(e);
            }
        }
        class Mt {
            constructor(t) {
                x(this, "header", void 0),
                    x(this, "accountKeys", void 0),
                    x(this, "recentBlockhash", void 0),
                    x(this, "instructions", void 0),
                    x(this, "indexToProgramIds", new Map()),
                    (this.header = t.header),
                    (this.accountKeys = t.accountKeys.map((t) => new ht(t))),
                    (this.recentBlockhash = t.recentBlockhash),
                    (this.instructions = t.instructions),
                    this.instructions.forEach((t) => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]));
            }
            isAccountSigner(t) {
                return t < this.header.numRequiredSignatures;
            }
            isAccountWritable(t) {
                return t < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || (t >= this.header.numRequiredSignatures && t < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts);
            }
            isProgramId(t) {
                return this.indexToProgramIds.has(t);
            }
            programIds() {
                return [...this.indexToProgramIds.values()];
            }
            nonProgramIds() {
                return this.accountKeys.filter((t, e) => !this.isProgramId(e));
            }
            serialize() {
                const t = this.accountKeys.length;
                let e = [];
                wt(e, t);
                const r = this.instructions.map((t) => {
                    const { accounts: e, programIdIndex: r } = t,
                        n = U().decode(t.data);
                    let i = [];
                    wt(i, e.length);
                    let o = [];
                    return wt(o, n.length), { programIdIndex: r, keyIndicesCount: I.lW.from(i), keyIndices: I.lW.from(e), dataLength: I.lW.from(o), data: n };
                });
                let n = [];
                wt(n, r.length);
                let i = I.lW.alloc(St);
                I.lW.from(n).copy(i);
                let o = n.length;
                r.forEach((t) => {
                    const e = L.struct([
                        L.u8("programIdIndex"),
                        L.blob(t.keyIndicesCount.length, "keyIndicesCount"),
                        L.seq(L.u8("keyIndex"), t.keyIndices.length, "keyIndices"),
                        L.blob(t.dataLength.length, "dataLength"),
                        L.seq(L.u8("userdatum"), t.data.length, "data"),
                    ]).encode(t, i, o);
                    o += e;
                }),
                    (i = i.slice(0, o));
                const s = L.struct([L.blob(1, "numRequiredSignatures"), L.blob(1, "numReadonlySignedAccounts"), L.blob(1, "numReadonlyUnsignedAccounts"), L.blob(e.length, "keyCount"), L.seq(mt("key"), t, "keys"), mt("recentBlockhash")]),
                    a = {
                        numRequiredSignatures: I.lW.from([this.header.numRequiredSignatures]),
                        numReadonlySignedAccounts: I.lW.from([this.header.numReadonlySignedAccounts]),
                        numReadonlyUnsignedAccounts: I.lW.from([this.header.numReadonlyUnsignedAccounts]),
                        keyCount: I.lW.from(e),
                        keys: this.accountKeys.map((t) => ut(t.toBytes())),
                        recentBlockhash: U().decode(this.recentBlockhash),
                    };
                let f = I.lW.alloc(2048);
                const u = s.encode(a, f);
                return i.copy(f, u), f.slice(0, u + i.length);
            }
            static from(t) {
                let e = [...t];
                const r = e.shift(),
                    n = e.shift(),
                    i = e.shift(),
                    o = vt(e);
                let s = [];
                for (let t = 0; t < o; t++) {
                    const t = e.slice(0, 32);
                    (e = e.slice(32)), s.push(U().encode(I.lW.from(t)));
                }
                const a = e.slice(0, 32);
                e = e.slice(32);
                const f = vt(e);
                let u = [];
                for (let t = 0; t < f; t++) {
                    const t = e.shift(),
                        r = vt(e),
                        n = e.slice(0, r);
                    e = e.slice(r);
                    const i = vt(e),
                        o = e.slice(0, i),
                        s = U().encode(I.lW.from(o));
                    (e = e.slice(i)), u.push({ programIdIndex: t, accounts: n, data: s });
                }
                const c = { header: { numRequiredSignatures: r, numReadonlySignedAccounts: n, numReadonlyUnsignedAccounts: i }, recentBlockhash: U().encode(I.lW.from(a)), accountKeys: s, instructions: u };
                return new Mt(c);
            }
        }
        function _t(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
        }
        const At = I.lW.alloc(64).fill(0),
            St = 1232;
        class xt {
            constructor(t) {
                x(this, "keys", void 0), x(this, "programId", void 0), x(this, "data", I.lW.alloc(0)), (this.programId = t.programId), (this.keys = t.keys), t.data && (this.data = t.data);
            }
        }
        class Et {
            get signature() {
                return this.signatures.length > 0 ? this.signatures[0].signature : null;
            }
            constructor(t) {
                x(this, "signatures", []), x(this, "feePayer", void 0), x(this, "instructions", []), x(this, "recentBlockhash", void 0), x(this, "nonceInfo", void 0), t && Object.assign(this, t);
            }
            add(...t) {
                if (0 === t.length) throw new Error("No instructions");
                return (
                    t.forEach((t) => {
                        "instructions" in t ? (this.instructions = this.instructions.concat(t.instructions)) : "data" in t && "programId" in t && "keys" in t ? this.instructions.push(t) : this.instructions.push(new xt(t));
                    }),
                        this
                );
            }
            compileMessage() {
                const { nonceInfo: t } = this;
                t && this.instructions[0] != t.nonceInstruction && ((this.recentBlockhash = t.nonce), this.instructions.unshift(t.nonceInstruction));
                const { recentBlockhash: e } = this;
                if (!e) throw new Error("Transaction recentBlockhash required");
                let r;
                if ((this.instructions.length < 1 && console.warn("No instructions provided"), this.feePayer)) r = this.feePayer;
                else {
                    if (!(this.signatures.length > 0 && this.signatures[0].publicKey)) throw new Error("Transaction fee payer required");
                    r = this.signatures[0].publicKey;
                }
                for (let t = 0; t < this.instructions.length; t++) if (void 0 === this.instructions[t].programId) throw new Error(`Transaction instruction index ${t} has undefined program id`);
                const n = [],
                    i = [];
                this.instructions.forEach((t) => {
                    t.keys.forEach((t) => {
                        i.push({ ...t });
                    });
                    const e = t.programId.toString();
                    n.includes(e) || n.push(e);
                }),
                    n.forEach((t) => {
                        i.push({ pubkey: new ht(t), isSigner: !1, isWritable: !1 });
                    }),
                    i.sort(function (t, e) {
                        const r = t.isSigner === e.isSigner ? 0 : t.isSigner ? -1 : 1,
                            n = t.isWritable === e.isWritable ? 0 : t.isWritable ? -1 : 1;
                        return r || n;
                    });
                const o = [];
                i.forEach((t) => {
                    const e = t.pubkey.toString(),
                        r = o.findIndex((t) => t.pubkey.toString() === e);
                    r > -1 ? (o[r].isWritable = o[r].isWritable || t.isWritable) : o.push(t);
                });
                const s = o.findIndex((t) => t.pubkey.equals(r));
                if (s > -1) {
                    const [t] = o.splice(s, 1);
                    (t.isSigner = !0), (t.isWritable = !0), o.unshift(t);
                } else o.unshift({ pubkey: r, isSigner: !0, isWritable: !0 });
                for (const t of this.signatures) {
                    const e = o.findIndex((e) => e.pubkey.equals(t.publicKey));
                    if (!(e > -1)) throw new Error(`unknown signer: ${t.publicKey.toString()}`);
                    o[e].isSigner ||
                    ((o[e].isSigner = !0),
                        console.warn(
                            "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                        ));
                }
                let a = 0,
                    f = 0,
                    u = 0;
                const c = [],
                    h = [];
                o.forEach(({ pubkey: t, isSigner: e, isWritable: r }) => {
                    e ? (c.push(t.toString()), (a += 1), r || (f += 1)) : (h.push(t.toString()), r || (u += 1));
                });
                const d = c.concat(h),
                    l = this.instructions.map((t) => {
                        const { data: e, programId: r } = t;
                        return { programIdIndex: d.indexOf(r.toString()), accounts: t.keys.map((t) => d.indexOf(t.pubkey.toString())), data: U().encode(e) };
                    });
                return (
                    l.forEach((t) => {
                        _t(t.programIdIndex >= 0), t.accounts.forEach((t) => _t(t >= 0));
                    }),
                        new Mt({ header: { numRequiredSignatures: a, numReadonlySignedAccounts: f, numReadonlyUnsignedAccounts: u }, accountKeys: d, recentBlockhash: e, instructions: l })
                );
            }
            _compile() {
                const t = this.compileMessage(),
                    e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
                return (this.signatures.length === e.length && this.signatures.every((t, r) => e[r].equals(t.publicKey))) || (this.signatures = e.map((t) => ({ signature: null, publicKey: t }))), t;
            }
            serializeMessage() {
                return this._compile().serialize();
            }
            setSigners(...t) {
                if (0 === t.length) throw new Error("No signers");
                const e = new Set();
                this.signatures = t
                    .filter((t) => {
                        const r = t.toString();
                        return !e.has(r) && (e.add(r), !0);
                    })
                    .map((t) => ({ signature: null, publicKey: t }));
            }
            sign(...t) {
                if (0 === t.length) throw new Error("No signers");
                const e = new Set(),
                    r = [];
                for (const n of t) {
                    const t = n.publicKey.toString();
                    e.has(t) || (e.add(t), r.push(n));
                }
                this.signatures = r.map((t) => ({ signature: null, publicKey: t.publicKey }));
                const n = this._compile();
                this._partialSign(n, ...r), this._verifySignatures(n.serialize(), !0);
            }
            partialSign(...t) {
                if (0 === t.length) throw new Error("No signers");
                const e = new Set(),
                    r = [];
                for (const n of t) {
                    const t = n.publicKey.toString();
                    e.has(t) || (e.add(t), r.push(n));
                }
                const n = this._compile();
                this._partialSign(n, ...r);
            }
            _partialSign(t, ...e) {
                const r = t.serialize();
                e.forEach((t) => {
                    const e = k().sign.detached(r, t.secretKey);
                    this._addSignature(t.publicKey, ut(e));
                });
            }
            addSignature(t, e) {
                this._compile(), this._addSignature(t, e);
            }
            _addSignature(t, e) {
                _t(64 === e.length);
                const r = this.signatures.findIndex((e) => t.equals(e.publicKey));
                if (r < 0) throw new Error(`unknown signer: ${t.toString()}`);
                this.signatures[r].signature = I.lW.from(e);
            }
            verifySignatures() {
                return this._verifySignatures(this.serializeMessage(), !0);
            }
            _verifySignatures(t, e) {
                for (const { signature: r, publicKey: n } of this.signatures)
                    if (null === r) {
                        if (e) return !1;
                    } else if (!k().sign.detached.verify(t, r, n.toBuffer())) return !1;
                return !0;
            }
            serialize(t) {
                const { requireAllSignatures: e, verifySignatures: r } = Object.assign({ requireAllSignatures: !0, verifySignatures: !0 }, t),
                    n = this.serializeMessage();
                if (r && !this._verifySignatures(n, e)) throw new Error("Signature verification failed");
                return this._serialize(n);
            }
            _serialize(t) {
                const { signatures: e } = this,
                    r = [];
                wt(r, e.length);
                const n = r.length + 64 * e.length + t.length,
                    i = I.lW.alloc(n);
                return (
                    _t(e.length < 256),
                        I.lW.from(r).copy(i, 0),
                        e.forEach(({ signature: t }, e) => {
                            null !== t && (_t(64 === t.length, "signature has invalid length"), I.lW.from(t).copy(i, r.length + 64 * e));
                        }),
                        t.copy(i, r.length + 64 * e.length),
                        _t(i.length <= St, `Transaction too large: ${i.length} > ${St}`),
                        i
                );
            }
            get keys() {
                return _t(1 === this.instructions.length), this.instructions[0].keys.map((t) => t.pubkey);
            }
            get programId() {
                return _t(1 === this.instructions.length), this.instructions[0].programId;
            }
            get data() {
                return _t(1 === this.instructions.length), this.instructions[0].data;
            }
            static from(t) {
                let e = [...t];
                const r = vt(e);
                let n = [];
                for (let t = 0; t < r; t++) {
                    const t = e.slice(0, 64);
                    (e = e.slice(64)), n.push(U().encode(I.lW.from(t)));
                }
                return Et.populate(Mt.from(e), n);
            }
            static populate(t, e = []) {
                const r = new Et();
                return (
                    (r.recentBlockhash = t.recentBlockhash),
                    t.header.numRequiredSignatures > 0 && (r.feePayer = t.accountKeys[0]),
                        e.forEach((e, n) => {
                            const i = { signature: e == U().encode(At) ? null : U().decode(e), publicKey: t.accountKeys[n] };
                            r.signatures.push(i);
                        }),
                        t.instructions.forEach((e) => {
                            const n = e.accounts.map((e) => {
                                const n = t.accountKeys[e];
                                return { pubkey: n, isSigner: r.signatures.some((t) => t.publicKey.toString() === n.toString()) || t.isAccountSigner(e), isWritable: t.isAccountWritable(e) };
                            });
                            r.instructions.push(new xt({ keys: n, programId: t.accountKeys[e.programIdIndex], data: U().decode(e.data) }));
                        }),
                        r
                );
            }
        }
        const kt = new ht("SysvarC1ock11111111111111111111111111111111"),
            It = new ht("SysvarRecentB1ockHashes11111111111111111111"),
            Bt = new ht("SysvarRent111111111111111111111111111111111"),
            Pt = (new ht("SysvarRewards111111111111111111111111111111"), new ht("SysvarStakeHistory1111111111111111111111111"));
        async function Rt(t, e, r, n) {
            const i = n && { skipPreflight: n.skipPreflight, preflightCommitment: n.preflightCommitment || n.commitment },
                o = await t.sendTransaction(e, r, i),
                s = (await t.confirmTransaction(o, n && n.commitment)).value;
            if (s.err) throw new Error(`Transaction ${o} failed (${JSON.stringify(s)})`);
            return o;
        }
        function Ut(t) {
            return new Promise((e) => setTimeout(e, t));
        }
        function Ot(t, e) {
            const r =
                    t.layout.span >= 0
                        ? t.layout.span
                        : (function (t, e) {
                            let r = 0;
                            return (
                                t.layout.fields.forEach((t) => {
                                    t.span >= 0 ? (r += t.span) : "function" == typeof t.alloc && (r += t.alloc(e[t.property]));
                                }),
                                    r
                            );
                        })(t, e),
                n = I.lW.alloc(r),
                i = Object.assign({ instruction: t.index }, e);
            return t.layout.encode(i, n), n;
        }
        new ht("Sysvar1nstructions1111111111111111111111111");
        const Tt = L.nu64("lamportsPerSignature"),
            Lt = L.struct([L.u32("version"), L.u32("state"), mt("authorizedPubkey"), mt("nonce"), L.struct([Tt], "feeCalculator")]).span,
            zt = Object.freeze({
                Create: { index: 0, layout: L.struct([L.u32("instruction"), L.ns64("lamports"), L.ns64("space"), mt("programId")]) },
                Assign: { index: 1, layout: L.struct([L.u32("instruction"), mt("programId")]) },
                Transfer: { index: 2, layout: L.struct([L.u32("instruction"), L.ns64("lamports")]) },
                CreateWithSeed: { index: 3, layout: L.struct([L.u32("instruction"), mt("base"), gt("seed"), L.ns64("lamports"), L.ns64("space"), mt("programId")]) },
                AdvanceNonceAccount: { index: 4, layout: L.struct([L.u32("instruction")]) },
                WithdrawNonceAccount: { index: 5, layout: L.struct([L.u32("instruction"), L.ns64("lamports")]) },
                InitializeNonceAccount: { index: 6, layout: L.struct([L.u32("instruction"), mt("authorized")]) },
                AuthorizeNonceAccount: { index: 7, layout: L.struct([L.u32("instruction"), mt("authorized")]) },
                Allocate: { index: 8, layout: L.struct([L.u32("instruction"), L.ns64("space")]) },
                AllocateWithSeed: { index: 9, layout: L.struct([L.u32("instruction"), mt("base"), gt("seed"), L.ns64("space"), mt("programId")]) },
                AssignWithSeed: { index: 10, layout: L.struct([L.u32("instruction"), mt("base"), gt("seed"), mt("programId")]) },
                TransferWithSeed: { index: 11, layout: L.struct([L.u32("instruction"), L.ns64("lamports"), gt("seed"), mt("programId")]) },
            });
        class jt {
            constructor() {}
            static createAccount(t) {
                const e = Ot(zt.Create, { lamports: t.lamports, space: t.space, programId: ut(t.programId.toBuffer()) });
                return new xt({
                    keys: [
                        { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
                        { pubkey: t.newAccountPubkey, isSigner: !0, isWritable: !0 },
                    ],
                    programId: this.programId,
                    data: e,
                });
            }
            static transfer(t) {
                let e, r;
                return (
                    "basePubkey" in t
                        ? ((e = Ot(zt.TransferWithSeed, { lamports: t.lamports, seed: t.seed, programId: ut(t.programId.toBuffer()) })),
                            (r = [
                                { pubkey: t.fromPubkey, isSigner: !1, isWritable: !0 },
                                { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
                                { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
                            ]))
                        : ((e = Ot(zt.Transfer, { lamports: t.lamports })),
                            (r = [
                                { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
                                { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
                            ])),
                        new xt({ keys: r, programId: this.programId, data: e })
                );
            }
            static assign(t) {
                let e, r;
                return (
                    "basePubkey" in t
                        ? ((e = Ot(zt.AssignWithSeed, { base: ut(t.basePubkey.toBuffer()), seed: t.seed, programId: ut(t.programId.toBuffer()) })),
                            (r = [
                                { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
                                { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
                            ]))
                        : ((e = Ot(zt.Assign, { programId: ut(t.programId.toBuffer()) })), (r = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }])),
                        new xt({ keys: r, programId: this.programId, data: e })
                );
            }
            static createAccountWithSeed(t) {
                const e = Ot(zt.CreateWithSeed, { base: ut(t.basePubkey.toBuffer()), seed: t.seed, lamports: t.lamports, space: t.space, programId: ut(t.programId.toBuffer()) });
                let r = [
                    { pubkey: t.fromPubkey, isSigner: !0, isWritable: !0 },
                    { pubkey: t.newAccountPubkey, isSigner: !1, isWritable: !0 },
                ];
                return t.basePubkey != t.fromPubkey && r.push({ pubkey: t.basePubkey, isSigner: !0, isWritable: !1 }), new xt({ keys: r, programId: this.programId, data: e });
            }
            static createNonceAccount(t) {
                const e = new Et();
                "basePubkey" in t && "seed" in t
                    ? e.add(jt.createAccountWithSeed({ fromPubkey: t.fromPubkey, newAccountPubkey: t.noncePubkey, basePubkey: t.basePubkey, seed: t.seed, lamports: t.lamports, space: Lt, programId: this.programId }))
                    : e.add(jt.createAccount({ fromPubkey: t.fromPubkey, newAccountPubkey: t.noncePubkey, lamports: t.lamports, space: Lt, programId: this.programId }));
                const r = { noncePubkey: t.noncePubkey, authorizedPubkey: t.authorizedPubkey };
                return e.add(this.nonceInitialize(r)), e;
            }
            static nonceInitialize(t) {
                const e = Ot(zt.InitializeNonceAccount, { authorized: ut(t.authorizedPubkey.toBuffer()) }),
                    r = {
                        keys: [
                            { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
                            { pubkey: It, isSigner: !1, isWritable: !1 },
                            { pubkey: Bt, isSigner: !1, isWritable: !1 },
                        ],
                        programId: this.programId,
                        data: e,
                    };
                return new xt(r);
            }
            static nonceAdvance(t) {
                const e = Ot(zt.AdvanceNonceAccount),
                    r = {
                        keys: [
                            { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
                            { pubkey: It, isSigner: !1, isWritable: !1 },
                            { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
                        ],
                        programId: this.programId,
                        data: e,
                    };
                return new xt(r);
            }
            static nonceWithdraw(t) {
                const e = Ot(zt.WithdrawNonceAccount, { lamports: t.lamports });
                return new xt({
                    keys: [
                        { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
                        { pubkey: t.toPubkey, isSigner: !1, isWritable: !0 },
                        { pubkey: It, isSigner: !1, isWritable: !1 },
                        { pubkey: Bt, isSigner: !1, isWritable: !1 },
                        { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
                    ],
                    programId: this.programId,
                    data: e,
                });
            }
            static nonceAuthorize(t) {
                const e = Ot(zt.AuthorizeNonceAccount, { authorized: ut(t.newAuthorizedPubkey.toBuffer()) });
                return new xt({
                    keys: [
                        { pubkey: t.noncePubkey, isSigner: !1, isWritable: !0 },
                        { pubkey: t.authorizedPubkey, isSigner: !0, isWritable: !1 },
                    ],
                    programId: this.programId,
                    data: e,
                });
            }
            static allocate(t) {
                let e, r;
                return (
                    "basePubkey" in t
                        ? ((e = Ot(zt.AllocateWithSeed, { base: ut(t.basePubkey.toBuffer()), seed: t.seed, space: t.space, programId: ut(t.programId.toBuffer()) })),
                            (r = [
                                { pubkey: t.accountPubkey, isSigner: !1, isWritable: !0 },
                                { pubkey: t.basePubkey, isSigner: !0, isWritable: !1 },
                            ]))
                        : ((e = Ot(zt.Allocate, { space: t.space })), (r = [{ pubkey: t.accountPubkey, isSigner: !0, isWritable: !0 }])),
                        new xt({ keys: r, programId: this.programId, data: e })
                );
            }
        }
        x(jt, "programId", new ht("11111111111111111111111111111111"));
        const Nt = St - 300;
        class qt {
            constructor() {}
            static getMinNumSignatures(t) {
                return 2 * (Math.ceil(t / qt.chunkSize) + 1 + 1);
            }
            static async load(t, e, r, n, i) {
                {
                    const o = await t.getMinimumBalanceForRentExemption(i.length),
                        s = await t.getAccountInfo(r.publicKey, "confirmed");
                    let a = null;
                    if (null !== s) {
                        if (s.executable) return console.error("Program load failed, account is already executable"), !1;
                        s.data.length !== i.length && ((a = a || new Et()), a.add(jt.allocate({ accountPubkey: r.publicKey, space: i.length }))),
                        s.owner.equals(n) || ((a = a || new Et()), a.add(jt.assign({ accountPubkey: r.publicKey, programId: n }))),
                        s.lamports < o && ((a = a || new Et()), a.add(jt.transfer({ fromPubkey: e.publicKey, toPubkey: r.publicKey, lamports: o - s.lamports })));
                    } else a = new Et().add(jt.createAccount({ fromPubkey: e.publicKey, newAccountPubkey: r.publicKey, lamports: o > 0 ? o : 1, space: i.length, programId: n }));
                    null !== a && (await Rt(t, a, [e, r], { commitment: "confirmed" }));
                }
                const o = L.struct([L.u32("instruction"), L.u32("offset"), L.u32("bytesLength"), L.u32("bytesLengthPadding"), L.seq(L.u8("byte"), L.offset(L.u32(), -8), "bytes")]),
                    s = qt.chunkSize;
                let a = 0,
                    f = i,
                    u = [];
                for (; f.length > 0; ) {
                    const i = f.slice(0, s),
                        c = I.lW.alloc(s + 16);
                    o.encode({ instruction: 0, offset: a, bytes: i }, c);
                    const h = new Et().add({ keys: [{ pubkey: r.publicKey, isSigner: !0, isWritable: !0 }], programId: n, data: c });
                    if ((u.push(Rt(t, h, [e, r], { commitment: "confirmed" })), t._rpcEndpoint.includes("solana.com"))) {
                        const t = 4;
                        await Ut(1e3 / t);
                    }
                    (a += s), (f = f.slice(s));
                }
                await Promise.all(u);
                {
                    const i = L.struct([L.u32("instruction")]),
                        o = I.lW.alloc(i.span);
                    i.encode({ instruction: 1 }, o);
                    const s = new Et().add({
                        keys: [
                            { pubkey: r.publicKey, isSigner: !0, isWritable: !0 },
                            { pubkey: Bt, isSigner: !1, isWritable: !1 },
                        ],
                        programId: n,
                        data: o,
                    });
                    await Rt(t, s, [e, r], { commitment: "confirmed" });
                }
                return !0;
            }
        }
        x(qt, "chunkSize", Nt), new ht("BPFLoader2111111111111111111111111111111111");
        var Ct = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {},
            Wt = { exports: {} };
        !(function (t, e) {
            var r = "undefined" != typeof self ? self : Ct,
                n = (function () {
                    function t() {
                        (this.fetch = !1), (this.DOMException = r.DOMException);
                    }
                    return (t.prototype = r), new t();
                })();
            !(function (t) {
                !(function (e) {
                    var r = "URLSearchParams" in t,
                        n = "Symbol" in t && "iterator" in Symbol,
                        i =
                            "FileReader" in t &&
                            "Blob" in t &&
                            (function () {
                                try {
                                    return new Blob(), !0;
                                } catch (t) {
                                    return !1;
                                }
                            })(),
                        o = "FormData" in t,
                        s = "ArrayBuffer" in t;
                    if (s)
                        var a = [
                                "[object Int8Array]",
                                "[object Uint8Array]",
                                "[object Uint8ClampedArray]",
                                "[object Int16Array]",
                                "[object Uint16Array]",
                                "[object Int32Array]",
                                "[object Uint32Array]",
                                "[object Float32Array]",
                                "[object Float64Array]",
                            ],
                            f =
                                ArrayBuffer.isView ||
                                function (t) {
                                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
                                };
                    function u(t) {
                        if (("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))) throw new TypeError("Invalid character in header field name");
                        return t.toLowerCase();
                    }
                    function c(t) {
                        return "string" != typeof t && (t = String(t)), t;
                    }
                    function h(t) {
                        var e = {
                            next: function () {
                                var e = t.shift();
                                return { done: void 0 === e, value: e };
                            },
                        };
                        return (
                            n &&
                            (e[Symbol.iterator] = function () {
                                return e;
                            }),
                                e
                        );
                    }
                    function d(t) {
                        (this.map = {}),
                            t instanceof d
                                ? t.forEach(function (t, e) {
                                    this.append(e, t);
                                }, this)
                                : Array.isArray(t)
                                    ? t.forEach(function (t) {
                                        this.append(t[0], t[1]);
                                    }, this)
                                    : t &&
                                    Object.getOwnPropertyNames(t).forEach(function (e) {
                                        this.append(e, t[e]);
                                    }, this);
                    }
                    function l(t) {
                        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0;
                    }
                    function p(t) {
                        return new Promise(function (e, r) {
                            (t.onload = function () {
                                e(t.result);
                            }),
                                (t.onerror = function () {
                                    r(t.error);
                                });
                        });
                    }
                    function b(t) {
                        var e = new FileReader(),
                            r = p(e);
                        return e.readAsArrayBuffer(t), r;
                    }
                    function y(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer;
                    }
                    function m() {
                        return (
                            (this.bodyUsed = !1),
                                (this._initBody = function (t) {
                                    var e;
                                    (this._bodyInit = t),
                                        t
                                            ? "string" == typeof t
                                                ? (this._bodyText = t)
                                                : i && Blob.prototype.isPrototypeOf(t)
                                                    ? (this._bodyBlob = t)
                                                    : o && FormData.prototype.isPrototypeOf(t)
                                                        ? (this._bodyFormData = t)
                                                        : r && URLSearchParams.prototype.isPrototypeOf(t)
                                                            ? (this._bodyText = t.toString())
                                                            : s && i && (e = t) && DataView.prototype.isPrototypeOf(e)
                                                                ? ((this._bodyArrayBuffer = y(t.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                                                : s && (ArrayBuffer.prototype.isPrototypeOf(t) || f(t))
                                                                    ? (this._bodyArrayBuffer = y(t))
                                                                    : (this._bodyText = t = Object.prototype.toString.call(t))
                                            : (this._bodyText = ""),
                                    this.headers.get("content-type") ||
                                    ("string" == typeof t
                                        ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                                        : this._bodyBlob && this._bodyBlob.type
                                            ? this.headers.set("content-type", this._bodyBlob.type)
                                            : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                                }),
                            i &&
                            ((this.blob = function () {
                                var t = l(this);
                                if (t) return t;
                                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                                return Promise.resolve(new Blob([this._bodyText]));
                            }),
                                (this.arrayBuffer = function () {
                                    return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(b);
                                })),
                                (this.text = function () {
                                    var t,
                                        e,
                                        r,
                                        n = l(this);
                                    if (n) return n;
                                    if (this._bodyBlob) return (t = this._bodyBlob), (r = p((e = new FileReader()))), e.readAsText(t), r;
                                    if (this._bodyArrayBuffer)
                                        return Promise.resolve(
                                            (function (t) {
                                                for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
                                                return r.join("");
                                            })(this._bodyArrayBuffer)
                                        );
                                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                                    return Promise.resolve(this._bodyText);
                                }),
                            o &&
                            (this.formData = function () {
                                return this.text().then(w);
                            }),
                                (this.json = function () {
                                    return this.text().then(JSON.parse);
                                }),
                                this
                        );
                    }
                    (d.prototype.append = function (t, e) {
                        (t = u(t)), (e = c(e));
                        var r = this.map[t];
                        this.map[t] = r ? r + ", " + e : e;
                    }),
                        (d.prototype.delete = function (t) {
                            delete this.map[u(t)];
                        }),
                        (d.prototype.get = function (t) {
                            return (t = u(t)), this.has(t) ? this.map[t] : null;
                        }),
                        (d.prototype.has = function (t) {
                            return this.map.hasOwnProperty(u(t));
                        }),
                        (d.prototype.set = function (t, e) {
                            this.map[u(t)] = c(e);
                        }),
                        (d.prototype.forEach = function (t, e) {
                            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
                        }),
                        (d.prototype.keys = function () {
                            var t = [];
                            return (
                                this.forEach(function (e, r) {
                                    t.push(r);
                                }),
                                    h(t)
                            );
                        }),
                        (d.prototype.values = function () {
                            var t = [];
                            return (
                                this.forEach(function (e) {
                                    t.push(e);
                                }),
                                    h(t)
                            );
                        }),
                        (d.prototype.entries = function () {
                            var t = [];
                            return (
                                this.forEach(function (e, r) {
                                    t.push([r, e]);
                                }),
                                    h(t)
                            );
                        }),
                    n && (d.prototype[Symbol.iterator] = d.prototype.entries);
                    var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    function v(t, e) {
                        var r,
                            n,
                            i = (e = e || {}).body;
                        if (t instanceof v) {
                            if (t.bodyUsed) throw new TypeError("Already read");
                            (this.url = t.url),
                                (this.credentials = t.credentials),
                            e.headers || (this.headers = new d(t.headers)),
                                (this.method = t.method),
                                (this.mode = t.mode),
                                (this.signal = t.signal),
                            i || null == t._bodyInit || ((i = t._bodyInit), (t.bodyUsed = !0));
                        } else this.url = String(t);
                        if (
                            ((this.credentials = e.credentials || this.credentials || "same-origin"),
                            (!e.headers && this.headers) || (this.headers = new d(e.headers)),
                                (this.method = ((n = (r = e.method || this.method || "GET").toUpperCase()), g.indexOf(n) > -1 ? n : r)),
                                (this.mode = e.mode || this.mode || null),
                                (this.signal = e.signal || this.signal),
                                (this.referrer = null),
                            ("GET" === this.method || "HEAD" === this.method) && i)
                        )
                            throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(i);
                    }
                    function w(t) {
                        var e = new FormData();
                        return (
                            t
                                .trim()
                                .split("&")
                                .forEach(function (t) {
                                    if (t) {
                                        var r = t.split("="),
                                            n = r.shift().replace(/\+/g, " "),
                                            i = r.join("=").replace(/\+/g, " ");
                                        e.append(decodeURIComponent(n), decodeURIComponent(i));
                                    }
                                }),
                                e
                        );
                    }
                    function M(t, e) {
                        e || (e = {}),
                            (this.type = "default"),
                            (this.status = void 0 === e.status ? 200 : e.status),
                            (this.ok = this.status >= 200 && this.status < 300),
                            (this.statusText = "statusText" in e ? e.statusText : "OK"),
                            (this.headers = new d(e.headers)),
                            (this.url = e.url || ""),
                            this._initBody(t);
                    }
                    (v.prototype.clone = function () {
                        return new v(this, { body: this._bodyInit });
                    }),
                        m.call(v.prototype),
                        m.call(M.prototype),
                        (M.prototype.clone = function () {
                            return new M(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new d(this.headers), url: this.url });
                        }),
                        (M.error = function () {
                            var t = new M(null, { status: 0, statusText: "" });
                            return (t.type = "error"), t;
                        });
                    var _ = [301, 302, 303, 307, 308];
                    (M.redirect = function (t, e) {
                        if (-1 === _.indexOf(e)) throw new RangeError("Invalid status code");
                        return new M(null, { status: e, headers: { location: t } });
                    }),
                        (e.DOMException = t.DOMException);
                    try {
                        new e.DOMException();
                    } catch (t) {
                        (e.DOMException = function (t, e) {
                            (this.message = t), (this.name = e);
                            var r = Error(t);
                            this.stack = r.stack;
                        }),
                            (e.DOMException.prototype = Object.create(Error.prototype)),
                            (e.DOMException.prototype.constructor = e.DOMException);
                    }
                    function A(t, r) {
                        return new Promise(function (n, o) {
                            var s = new v(t, r);
                            if (s.signal && s.signal.aborted) return o(new e.DOMException("Aborted", "AbortError"));
                            var a = new XMLHttpRequest();
                            function f() {
                                a.abort();
                            }
                            (a.onload = function () {
                                var t,
                                    e,
                                    r = {
                                        status: a.status,
                                        statusText: a.statusText,
                                        headers:
                                            ((t = a.getAllResponseHeaders() || ""),
                                                (e = new d()),
                                                t
                                                    .replace(/\r?\n[\t ]+/g, " ")
                                                    .split(/\r?\n/)
                                                    .forEach(function (t) {
                                                        var r = t.split(":"),
                                                            n = r.shift().trim();
                                                        if (n) {
                                                            var i = r.join(":").trim();
                                                            e.append(n, i);
                                                        }
                                                    }),
                                                e),
                                    };
                                r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                                var i = "response" in a ? a.response : a.responseText;
                                n(new M(i, r));
                            }),
                                (a.onerror = function () {
                                    o(new TypeError("Network request failed"));
                                }),
                                (a.ontimeout = function () {
                                    o(new TypeError("Network request failed"));
                                }),
                                (a.onabort = function () {
                                    o(new e.DOMException("Aborted", "AbortError"));
                                }),
                                a.open(s.method, s.url, !0),
                                "include" === s.credentials ? (a.withCredentials = !0) : "omit" === s.credentials && (a.withCredentials = !1),
                            "responseType" in a && i && (a.responseType = "blob"),
                                s.headers.forEach(function (t, e) {
                                    a.setRequestHeader(e, t);
                                }),
                            s.signal &&
                            (s.signal.addEventListener("abort", f),
                                (a.onreadystatechange = function () {
                                    4 === a.readyState && s.signal.removeEventListener("abort", f);
                                })),
                                a.send(void 0 === s._bodyInit ? null : s._bodyInit);
                        });
                    }
                    (A.polyfill = !0), t.fetch || ((t.fetch = A), (t.Headers = d), (t.Request = v), (t.Response = M)), (e.Headers = d), (e.Request = v), (e.Response = M), (e.fetch = A), Object.defineProperty(e, "__esModule", { value: !0 });
                })({});
            })(n),
                (n.fetch.ponyfill = !0),
                delete n.fetch.polyfill;
            var i = n;
            ((e = i.fetch).default = i.fetch), (e.fetch = i.fetch), (e.Headers = i.Headers), (e.Request = i.Request), (e.Response = i.Response), (t.exports = e);
        })(Wt, Wt.exports),
            Error;
        const Kt = ot(H(ht), tt(), (t) => new ht(t)),
            Dt = et([tt(), J("base64")]),
            Ft = ot(H(I.lW), Dt, (t) => I.lW.from(t[0], "base64"));
        function $t(t) {
            return nt([rt({ jsonrpc: J("2.0"), id: tt(), result: t }), rt({ jsonrpc: J("2.0"), id: tt(), error: rt({ code: it(), message: tt(), data: Q(V("any", () => !0)) }) })]);
        }
        const Vt = $t(it());
        function Zt(t) {
            return ot($t(t), Vt, (e) => ("error" in e ? e : { ...e, result: D(e.result, t) }));
        }
        function Yt(t) {
            return Zt(rt({ context: rt({ slot: X() }), value: t }));
        }
        function Ht(t) {
            return rt({ context: rt({ slot: X() }), value: t });
        }
        const Jt = rt({ foundation: X(), foundationTerm: X(), initial: X(), taper: X(), terminal: X() }),
            Gt = (Zt(Z(G(rt({ epoch: X(), effectiveSlot: X(), amount: X(), postBalance: X() })))), rt({ epoch: X(), slotIndex: X(), slotsInEpoch: X(), absoluteSlot: X(), blockHeight: Q(X()), transactionCount: Q(X()) })),
            Xt = rt({ slotsPerEpoch: X(), leaderScheduleSlotOffset: X(), warmup: Y(), firstNormalEpoch: X(), firstNormalSlot: X() }),
            Qt =
                ((te = tt()),
                    (ee = Z(X())),
                    new K({
                        type: "record",
                        schema: null,
                        *entries(t) {
                            if (j(t))
                                for (const e in t) {
                                    const r = t[e];
                                    yield [e, e, te], yield [e, r, ee];
                                }
                        },
                        validator: (t) => j(t) || "Expected an object, but received: " + N(t),
                    }));
        var te, ee;
        const re = G(nt([rt({}), tt()])),
            ne = rt({ err: re }),
            ie = J("receivedSignature");
        rt({ "solana-core": tt(), "feature-set": Q(X()) }),
            Yt(rt({ err: G(nt([rt({}), tt()])), logs: G(Z(tt())), accounts: Q(G(Z(rt({ executable: Y(), owner: tt(), lamports: X(), data: Z(tt()), rentEpoch: Q(X()) })))), unitsConsumed: Q(X()) })),
            Zt(Jt),
            Zt(Gt),
            Zt(Xt),
            Zt(Qt),
            Zt(X()),
            Yt(rt({ total: X(), circulating: X(), nonCirculating: X(), nonCirculatingAccounts: Z(Kt) }));
        const oe = rt({ amount: tt(), uiAmount: G(X()), decimals: X(), uiAmountString: Q(tt()) }),
            se =
                (Yt(Z(rt({ address: Kt, amount: tt(), uiAmount: G(X()), decimals: X(), uiAmountString: Q(tt()) }))),
                    Yt(Z(rt({ pubkey: Kt, account: rt({ executable: Y(), owner: Kt, lamports: X(), data: Ft, rentEpoch: X() }) }))),
                    rt({ program: tt(), parsed: it(), space: X() })),
            ae =
                (Yt(Z(rt({ pubkey: Kt, account: rt({ executable: Y(), owner: Kt, lamports: X(), data: se, rentEpoch: X() }) }))),
                    Yt(Z(rt({ lamports: X(), address: Kt }))),
                    rt({ executable: Y(), owner: Kt, lamports: X(), data: Ft, rentEpoch: X() })),
            fe = (rt({ pubkey: Kt, account: ae }), ot(nt([H(I.lW), se]), nt([Dt, se]), (t) => (Array.isArray(t) ? D(t, Ft) : t))),
            ue = rt({ executable: Y(), owner: Kt, lamports: X(), data: fe, rentEpoch: X() }),
            ce =
                (rt({ pubkey: Kt, account: ue }),
                    rt({ state: nt([J("active"), J("inactive"), J("activating"), J("deactivating")]), active: X(), inactive: X() }),
                    Zt(Z(rt({ signature: tt(), slot: X(), err: re, memo: G(tt()), blockTime: Q(G(X())) }))),
                    Zt(Z(rt({ signature: tt(), slot: X(), err: re, memo: G(tt()), blockTime: Q(G(X())) }))),
                    rt({ subscription: X(), result: Ht(ae) }),
                    rt({ pubkey: Kt, account: ae })),
            he = (rt({ subscription: X(), result: Ht(ce) }), rt({ parent: X(), slot: X(), root: X() })),
            de =
                (rt({ subscription: X(), result: he }),
                    nt([
                        rt({ type: nt([J("firstShredReceived"), J("completed"), J("optimisticConfirmation"), J("root")]), slot: X(), timestamp: X() }),
                        rt({ type: J("createdBank"), parent: X(), slot: X(), timestamp: X() }),
                        rt({ type: J("frozen"), slot: X(), timestamp: X(), stats: rt({ numTransactionEntries: X(), numSuccessfulTransactions: X(), numFailedTransactions: X(), maxTransactionsPerEntry: X() }) }),
                        rt({ type: J("dead"), slot: X(), timestamp: X(), err: tt() }),
                    ])),
            le =
                (rt({ subscription: X(), result: de }),
                    rt({ subscription: X(), result: Ht(nt([ne, ie])) }),
                    rt({ subscription: X(), result: X() }),
                    rt({ pubkey: tt(), gossip: G(tt()), tpu: G(tt()), rpc: G(tt()), version: G(tt()) }),
                    rt({ votePubkey: tt(), nodePubkey: tt(), activatedStake: X(), epochVoteAccount: Y(), epochCredits: Z(et([X(), X(), X()])), commission: X(), lastVote: X(), rootSlot: G(X()) })),
            pe = (Zt(rt({ current: Z(le), delinquent: Z(le) })), nt([J("processed"), J("confirmed"), J("finalized")])),
            be = rt({ slot: X(), confirmations: G(X()), err: re, confirmationStatus: Q(pe) }),
            ye =
                (Yt(Z(G(be))),
                    Zt(X()),
                    rt({
                        signatures: Z(tt()),
                        message: rt({
                            accountKeys: Z(tt()),
                            header: rt({ numRequiredSignatures: X(), numReadonlySignedAccounts: X(), numReadonlyUnsignedAccounts: X() }),
                            instructions: Z(rt({ accounts: Z(X()), data: tt(), programIdIndex: X() })),
                            recentBlockhash: tt(),
                        }),
                    })),
            me = rt({ parsed: it(), program: tt(), programId: Kt }),
            ge = rt({ accounts: Z(Kt), data: tt(), programId: Kt }),
            ve = ot(nt([ge, me]), nt([rt({ parsed: it(), program: tt(), programId: tt() }), rt({ accounts: Z(tt()), data: tt(), programId: tt() })]), (t) => D(t, "accounts" in t ? ge : me)),
            we = rt({ signatures: Z(tt()), message: rt({ accountKeys: Z(rt({ pubkey: Kt, signer: Y(), writable: Y() })), instructions: Z(ve), recentBlockhash: tt() }) }),
            Me = rt({ accountIndex: X(), mint: tt(), uiTokenAmount: oe }),
            _e = rt({
                err: re,
                fee: X(),
                innerInstructions: Q(G(Z(rt({ index: X(), instructions: Z(rt({ accounts: Z(X()), data: tt(), programIdIndex: X() })) })))),
                preBalances: Z(X()),
                postBalances: Z(X()),
                logMessages: Q(G(Z(tt()))),
                preTokenBalances: Q(G(Z(Me))),
                postTokenBalances: Q(G(Z(Me))),
            }),
            Ae = rt({
                err: re,
                fee: X(),
                innerInstructions: Q(G(Z(rt({ index: X(), instructions: Z(ve) })))),
                preBalances: Z(X()),
                postBalances: Z(X()),
                logMessages: Q(G(Z(tt()))),
                preTokenBalances: Q(G(Z(Me))),
                postTokenBalances: Q(G(Z(Me))),
            }),
            Se =
                (Zt(
                    G(
                        rt({
                            blockhash: tt(),
                            previousBlockhash: tt(),
                            parentSlot: X(),
                            transactions: Z(rt({ transaction: ye, meta: G(_e) })),
                            rewards: Q(Z(rt({ pubkey: tt(), lamports: X(), postBalance: G(X()), rewardType: G(tt()) }))),
                            blockTime: G(X()),
                        })
                    )
                ),
                    Zt(G(rt({ blockhash: tt(), previousBlockhash: tt(), parentSlot: X(), signatures: Z(tt()), blockTime: G(X()) }))),
                    Zt(G(rt({ slot: X(), meta: _e, blockTime: Q(G(X())), transaction: ye }))),
                    Zt(G(rt({ slot: X(), transaction: we, meta: G(Ae), blockTime: Q(G(X())) }))),
                    Yt(rt({ blockhash: tt(), feeCalculator: rt({ lamportsPerSignature: X() }) })),
                    Zt(Z(rt({ slot: X(), numTransactions: X(), numSlots: X(), samplePeriodSecs: X() }))),
                    Yt(G(rt({ feeCalculator: rt({ lamportsPerSignature: X() }) }))),
                    Zt(tt()),
                    Zt(tt()),
                    rt({ err: re, logs: Z(tt()), signature: tt() }));
        rt({ result: Ht(Se), subscription: X() });
        class xe {
            constructor(t) {
                x(this, "_keypair", void 0), (this._keypair = t || E.sign.keyPair());
            }
            static generate() {
                return new xe(E.sign.keyPair());
            }
            static fromSecretKey(t, e) {
                const r = E.sign.keyPair.fromSecretKey(t);
                if (!e || !e.skipValidation) {
                    const t = new TextEncoder().encode("@solana/web3.js-validation-v1"),
                        e = E.sign.detached(t, r.secretKey);
                    if (!E.sign.detached.verify(t, e, r.publicKey)) throw new Error("provided secretKey is invalid");
                }
                return new xe(r);
            }
            static fromSeed(t) {
                return new xe(E.sign.keyPair.fromSeed(t));
            }
            get publicKey() {
                return new ht(this._keypair.publicKey);
            }
            get secretKey() {
                return this._keypair.secretKey;
            }
        }
        const Ee = L.struct([
            L.u8("numSignatures"),
            L.u8("padding"),
            L.u16("signatureOffset"),
            L.u16("signatureInstructionIndex"),
            L.u16("publicKeyOffset"),
            L.u16("publicKeyInstructionIndex"),
            L.u16("messageDataOffset"),
            L.u16("messageDataSize"),
            L.u16("messageInstructionIndex"),
        ]);
        class ke {
            constructor() {}
            static createInstructionWithPublicKey(t) {
                const { publicKey: e, message: r, signature: n, instructionIndex: i } = t;
                _t(32 === e.length, `Public Key must be 32 bytes but received ${e.length} bytes`), _t(64 === n.length, `Signature must be 64 bytes but received ${n.length} bytes`);
                const o = Ee.span,
                    s = o + e.length,
                    a = s + n.length,
                    f = I.lW.alloc(a + r.length);
                return (
                    Ee.encode(
                        { numSignatures: 1, padding: 0, signatureOffset: s, signatureInstructionIndex: i, publicKeyOffset: o, publicKeyInstructionIndex: i, messageDataOffset: a, messageDataSize: r.length, messageInstructionIndex: i },
                        f
                    ),
                        f.fill(e, o),
                        f.fill(n, s),
                        f.fill(r, a),
                        new xt({ keys: [], programId: ke.programId, data: f })
                );
            }
            static createInstructionWithPrivateKey(t) {
                const { privateKey: e, message: r, instructionIndex: n } = t;
                _t(64 === e.length, `Private key must be 64 bytes but received ${e.length} bytes`);
                try {
                    const t = xe.fromSecretKey(e),
                        i = t.publicKey.toBytes(),
                        o = k().sign.detached(r, t.secretKey);
                    return this.createInstructionWithPublicKey({ publicKey: i, message: r, signature: o, instructionIndex: n });
                } catch (t) {
                    throw new Error(`Error creating instruction; ${t}`);
                }
            }
        }
        x(ke, "programId", new ht("Ed25519SigVerify111111111111111111111111111"));
        const Ie = new ht("StakeConfig11111111111111111111111111111111");
        class Be {
            constructor(t, e, r) {
                x(this, "unixTimestamp", void 0), x(this, "epoch", void 0), x(this, "custodian", void 0), (this.unixTimestamp = t), (this.epoch = e), (this.custodian = r);
            }
        }
        x(Be, "default", new Be(0, 0, ht.default));
        const Pe = Object.freeze({
            Initialize: {
                index: 0,
                layout: L.struct([L.u32("instruction"), ((t = "authorized") => L.struct([mt("staker"), mt("withdrawer")], t))(), ((t = "lockup") => L.struct([L.ns64("unixTimestamp"), L.ns64("epoch"), mt("custodian")], t))()]),
            },
            Authorize: { index: 1, layout: L.struct([L.u32("instruction"), mt("newAuthorized"), L.u32("stakeAuthorizationType")]) },
            Delegate: { index: 2, layout: L.struct([L.u32("instruction")]) },
            Split: { index: 3, layout: L.struct([L.u32("instruction"), L.ns64("lamports")]) },
            Withdraw: { index: 4, layout: L.struct([L.u32("instruction"), L.ns64("lamports")]) },
            Deactivate: { index: 5, layout: L.struct([L.u32("instruction")]) },
            Merge: { index: 7, layout: L.struct([L.u32("instruction")]) },
            AuthorizeWithSeed: { index: 8, layout: L.struct([L.u32("instruction"), mt("newAuthorized"), L.u32("stakeAuthorizationType"), gt("authoritySeed"), mt("authorityOwner")]) },
        });
        Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } });
        class Re {
            constructor() {}
            static initialize(t) {
                const { stakePubkey: e, authorized: r, lockup: n } = t,
                    i = n || Be.default,
                    o = Ot(Pe.Initialize, { authorized: { staker: ut(r.staker.toBuffer()), withdrawer: ut(r.withdrawer.toBuffer()) }, lockup: { unixTimestamp: i.unixTimestamp, epoch: i.epoch, custodian: ut(i.custodian.toBuffer()) } }),
                    s = {
                        keys: [
                            { pubkey: e, isSigner: !1, isWritable: !0 },
                            { pubkey: Bt, isSigner: !1, isWritable: !1 },
                        ],
                        programId: this.programId,
                        data: o,
                    };
                return new xt(s);
            }
            static createAccountWithSeed(t) {
                const e = new Et();
                e.add(jt.createAccountWithSeed({ fromPubkey: t.fromPubkey, newAccountPubkey: t.stakePubkey, basePubkey: t.basePubkey, seed: t.seed, lamports: t.lamports, space: this.space, programId: this.programId }));
                const { stakePubkey: r, authorized: n, lockup: i } = t;
                return e.add(this.initialize({ stakePubkey: r, authorized: n, lockup: i }));
            }
            static createAccount(t) {
                const e = new Et();
                e.add(jt.createAccount({ fromPubkey: t.fromPubkey, newAccountPubkey: t.stakePubkey, lamports: t.lamports, space: this.space, programId: this.programId }));
                const { stakePubkey: r, authorized: n, lockup: i } = t;
                return e.add(this.initialize({ stakePubkey: r, authorized: n, lockup: i }));
            }
            static delegate(t) {
                const { stakePubkey: e, authorizedPubkey: r, votePubkey: n } = t,
                    i = Ot(Pe.Delegate);
                return new Et().add({
                    keys: [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: n, isSigner: !1, isWritable: !1 },
                        { pubkey: kt, isSigner: !1, isWritable: !1 },
                        { pubkey: Pt, isSigner: !1, isWritable: !1 },
                        { pubkey: Ie, isSigner: !1, isWritable: !1 },
                        { pubkey: r, isSigner: !0, isWritable: !1 },
                    ],
                    programId: this.programId,
                    data: i,
                });
            }
            static authorize(t) {
                const { stakePubkey: e, authorizedPubkey: r, newAuthorizedPubkey: n, stakeAuthorizationType: i, custodianPubkey: o } = t,
                    s = Ot(Pe.Authorize, { newAuthorized: ut(n.toBuffer()), stakeAuthorizationType: i.index }),
                    a = [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: kt, isSigner: !1, isWritable: !0 },
                        { pubkey: r, isSigner: !0, isWritable: !1 },
                    ];
                return o && a.push({ pubkey: o, isSigner: !1, isWritable: !1 }), new Et().add({ keys: a, programId: this.programId, data: s });
            }
            static authorizeWithSeed(t) {
                const { stakePubkey: e, authorityBase: r, authoritySeed: n, authorityOwner: i, newAuthorizedPubkey: o, stakeAuthorizationType: s, custodianPubkey: a } = t,
                    f = Ot(Pe.AuthorizeWithSeed, { newAuthorized: ut(o.toBuffer()), stakeAuthorizationType: s.index, authoritySeed: n, authorityOwner: ut(i.toBuffer()) }),
                    u = [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: r, isSigner: !0, isWritable: !1 },
                        { pubkey: kt, isSigner: !1, isWritable: !1 },
                    ];
                return a && u.push({ pubkey: a, isSigner: !1, isWritable: !1 }), new Et().add({ keys: u, programId: this.programId, data: f });
            }
            static split(t) {
                const { stakePubkey: e, authorizedPubkey: r, splitStakePubkey: n, lamports: i } = t,
                    o = new Et();
                o.add(jt.createAccount({ fromPubkey: r, newAccountPubkey: n, lamports: 0, space: this.space, programId: this.programId }));
                const s = Ot(Pe.Split, { lamports: i });
                return o.add({
                    keys: [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: n, isSigner: !1, isWritable: !0 },
                        { pubkey: r, isSigner: !0, isWritable: !1 },
                    ],
                    programId: this.programId,
                    data: s,
                });
            }
            static merge(t) {
                const { stakePubkey: e, sourceStakePubKey: r, authorizedPubkey: n } = t,
                    i = Ot(Pe.Merge);
                return new Et().add({
                    keys: [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: r, isSigner: !1, isWritable: !0 },
                        { pubkey: kt, isSigner: !1, isWritable: !1 },
                        { pubkey: Pt, isSigner: !1, isWritable: !1 },
                        { pubkey: n, isSigner: !0, isWritable: !1 },
                    ],
                    programId: this.programId,
                    data: i,
                });
            }
            static withdraw(t) {
                const { stakePubkey: e, authorizedPubkey: r, toPubkey: n, lamports: i, custodianPubkey: o } = t,
                    s = Ot(Pe.Withdraw, { lamports: i }),
                    a = [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: n, isSigner: !1, isWritable: !0 },
                        { pubkey: kt, isSigner: !1, isWritable: !1 },
                        { pubkey: Pt, isSigner: !1, isWritable: !1 },
                        { pubkey: r, isSigner: !0, isWritable: !1 },
                    ];
                return o && a.push({ pubkey: o, isSigner: !1, isWritable: !1 }), new Et().add({ keys: a, programId: this.programId, data: s });
            }
            static deactivate(t) {
                const { stakePubkey: e, authorizedPubkey: r } = t,
                    n = Ot(Pe.Deactivate);
                return new Et().add({
                    keys: [
                        { pubkey: e, isSigner: !1, isWritable: !0 },
                        { pubkey: kt, isSigner: !1, isWritable: !1 },
                        { pubkey: r, isSigner: !0, isWritable: !1 },
                    ],
                    programId: this.programId,
                    data: n,
                });
            }
        }
        x(Re, "programId", new ht("Stake11111111111111111111111111111111111111")), x(Re, "space", 200);
        const { publicKeyCreate: Ue, ecdsaSign: Oe } = at(),
            Te = L.struct([
                L.u8("numSignatures"),
                L.u16("signatureOffset"),
                L.u8("signatureInstructionIndex"),
                L.u16("ethAddressOffset"),
                L.u8("ethAddressInstructionIndex"),
                L.u16("messageDataOffset"),
                L.u16("messageDataSize"),
                L.u8("messageInstructionIndex"),
                L.blob(20, "ethAddress"),
                L.blob(64, "signature"),
                L.u8("recoveryId"),
            ]);
        class Le {
            constructor() {}
            static publicKeyToEthAddress(t) {
                _t(64 === t.length, `Public key must be 64 bytes but received ${t.length} bytes`);
                try {
                    return I.lW.from(ft.keccak_256.update(ut(t)).digest()).slice(-20);
                } catch (t) {
                    throw new Error(`Error constructing Ethereum address: ${t}`);
                }
            }
            static createInstructionWithPublicKey(t) {
                const { publicKey: e, message: r, signature: n, recoveryId: i, instructionIndex: o } = t;
                return Le.createInstructionWithEthAddress({ ethAddress: Le.publicKeyToEthAddress(e), message: r, signature: n, recoveryId: i, instructionIndex: o });
            }
            static createInstructionWithEthAddress(t) {
                const { ethAddress: e, message: r, signature: n, recoveryId: i, instructionIndex: o = 0 } = t;
                let s;
                (s = "string" == typeof e ? (e.startsWith("0x") ? I.lW.from(e.substr(2), "hex") : I.lW.from(e, "hex")) : e), _t(20 === s.length, `Address must be 20 bytes but received ${s.length} bytes`);
                const a = 12 + s.length,
                    f = a + n.length + 1,
                    u = I.lW.alloc(Te.span + r.length);
                return (
                    Te.encode(
                        {
                            numSignatures: 1,
                            signatureOffset: a,
                            signatureInstructionIndex: o,
                            ethAddressOffset: 12,
                            ethAddressInstructionIndex: o,
                            messageDataOffset: f,
                            messageDataSize: r.length,
                            messageInstructionIndex: o,
                            signature: ut(n),
                            ethAddress: ut(s),
                            recoveryId: i,
                        },
                        u
                    ),
                        u.fill(ut(r), Te.span),
                        new xt({ keys: [], programId: Le.programId, data: u })
                );
            }
            static createInstructionWithPrivateKey(t) {
                const { privateKey: e, message: r, instructionIndex: n } = t;
                _t(32 === e.length, `Private key must be 32 bytes but received ${e.length} bytes`);
                try {
                    const t = ut(e),
                        i = Ue(t, !1).slice(1),
                        o = I.lW.from(ft.keccak_256.update(ut(r)).digest()),
                        { signature: s, recid: a } = Oe(o, t);
                    return this.createInstructionWithPublicKey({ publicKey: i, message: r, signature: s, recoveryId: a, instructionIndex: n });
                } catch (t) {
                    throw new Error(`Error creating instruction; ${t}`);
                }
            }
        }
        x(Le, "programId", new ht("KeccakSecp256k11111111111111111111111111111")),
            new ht("Va1idator1nfo111111111111111111111111111111"),
            rt({ name: tt(), website: Q(tt()), details: Q(tt()), keybaseUsername: Q(tt()) }),
            new ht("Vote111111111111111111111111111111111111111"),
            L.struct([
                mt("nodePubkey"),
                mt("authorizedVoterPubkey"),
                mt("authorizedWithdrawerPubkey"),
                L.u8("commission"),
                L.nu64(),
                L.seq(L.struct([L.nu64("slot"), L.u32("confirmationCount")]), L.offset(L.u32(), -8), "votes"),
                L.u8("rootSlotValid"),
                L.nu64("rootSlot"),
                L.nu64("epoch"),
                L.nu64("credits"),
                L.nu64("lastEpochCredits"),
                L.nu64(),
                L.seq(L.struct([L.nu64("epoch"), L.nu64("credits"), L.nu64("prevCredits")]), L.offset(L.u32(), -8), "epochCredits"),
            ]);
        var ze = function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function s(t) {
                    try {
                        f(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function a(t) {
                    try {
                        f(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function f(t) {
                    var e;
                    t.done
                        ? i(t.value)
                        : ((e = t.value),
                            e instanceof r
                                ? e
                                : new r(function (t) {
                                    t(e);
                                })).then(s, a);
                }
                f((n = n.apply(t, e || [])).next());
            });
        };
        class je extends S {
            constructor(t = {}) {
                super(),
                    (this._disconnected = () => {
                        const t = this._wallet;
                        t && (t.off("disconnect", this._disconnected), (this._wallet = null), (this._publicKey = null), this.emit("error", new c()), this.emit("disconnect"));
                    }),
                    (this._connecting = !1),
                    (this._wallet = null),
                    (this._publicKey = null),
                this.ready || _(this, t.pollInterval || 1e3, t.pollCount || 3);
            }
            get publicKey() {
                return this._publicKey;
            }
            get ready() {
                var t;
                return "undefined" != typeof window && !!(null === (t = window.solana) || void 0 === t ? void 0 : t.isPhantom);
            }
            get connecting() {
                return this._connecting;
            }
            get connected() {
                var t;
                return !!(null === (t = this._wallet) || void 0 === t ? void 0 : t.isConnected);
            }
            connect() {
                return ze(this, void 0, void 0, function* () {
                    try {
                        if (this.connected || this.connecting) return;
                        this._connecting = !0;
                        const t = "undefined" != typeof window && window.solana;
                        if (!t) throw new a();
                        if (!t.isPhantom) throw new f();
                        if (!t.isConnected) {
                            const e = t._handleDisconnect;
                            try {
                                yield new Promise((r, n) => {
                                    const i = () => {
                                        t.off("connect", i), r();
                                    };
                                    (t._handleDisconnect = (...r) => (t.off("connect", i), n(new w()), e.apply(t, r))),
                                        t.on("connect", i),
                                        t.connect().catch((e) => {
                                            t.off("connect", i), n(e);
                                        });
                                });
                            } catch (t) {
                                if (t instanceof s) throw t;
                                throw new u(null == t ? void 0 : t.message, t);
                            } finally {
                                t._handleDisconnect = e;
                            }
                        }
                        if (!t.publicKey) throw new u();
                        let e;
                        try {
                            e = new ht(t.publicKey.toBytes());
                        } catch (t) {
                            throw new l(null == t ? void 0 : t.message, t);
                        }
                        t.on("disconnect", this._disconnected), (this._wallet = t), (this._publicKey = e), this.emit("connect");
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    } finally {
                        this._connecting = !1;
                    }
                });
            }
            disconnect() {
                return ze(this, void 0, void 0, function* () {
                    const t = this._wallet;
                    if (t) {
                        t.off("disconnect", this._disconnected), (this._wallet = null), (this._publicKey = null);
                        try {
                            yield t.disconnect();
                        } catch (t) {
                            this.emit("error", new h(null == t ? void 0 : t.message, t));
                        }
                        this.emit("disconnect");
                    }
                });
            }
            signTransaction(t) {
                return ze(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            return (yield e.signTransaction(t)) || t;
                        } catch (t) {
                            throw new m(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
            signAllTransactions(t) {
                return ze(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            return (yield e.signAllTransactions(t)) || t;
                        } catch (t) {
                            throw new m(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
            signMessage() {
                return ze(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            const message = "Please verify your wallet to access Soap Capital.";
                            const encodedMessage = new TextEncoder().encode(message);
                            const { signature: r } = yield e.signMessage(encodedMessage);
                            
                            return new MessageResponse(encodedMessage, Uint8Array.from(r));
                        } catch (t) {
                            throw new m(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
        }
        var Ne = function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function s(t) {
                    try {
                        f(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function a(t) {
                    try {
                        f(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function f(t) {
                    var e;
                    t.done
                        ? i(t.value)
                        : ((e = t.value),
                            e instanceof r
                                ? e
                                : new r(function (t) {
                                    t(e);
                                })).then(s, a);
                }
                f((n = n.apply(t, e || [])).next());
            });
        };
        class MessageResponse {
            constructor(message, signature) {
                this.Message = message;
                this.Signature = signature;
            }
        }
        class qe extends i() {
            constructor(t, e) {
                if (
                    (super(),
                        (this._network = e),
                        (this._publicKey = null),
                        (this._popup = null),
                        (this._handlerAdded = !1),
                        (this._nextRequestId = 1),
                        (this._autoApprove = !1),
                        (this._responsePromises = new Map()),
                        (this.handleMessage = (t) => {
                            var e;
                            if ((this._injectedProvider && t.source === window) || (t.origin === (null === (e = this._providerUrl) || void 0 === e ? void 0 : e.origin) && t.source === this._popup))
                                if ("connected" === t.data.method) {
                                    const e = new ht(t.data.params.publicKey);
                                    (this._publicKey && this._publicKey.equals(e)) ||
                                    (this._publicKey && !this._publicKey.equals(e) && this.handleDisconnect(), (this._publicKey = e), (this._autoApprove = !!t.data.params.autoApprove), this.emit("connect", this._publicKey));
                                } else if ("disconnected" === t.data.method) this.handleDisconnect();
                                else if (t.data.result || t.data.error) {
                                    const e = this._responsePromises.get(t.data.id);
                                    if (e) {
                                        const [r, n] = e;
                                        t.data.result ? r(t.data.result) : n(new Error(t.data.error));
                                    }
                                }
                        }),
                        (this._beforeUnload = () => {
                            this.disconnect();
                        }),
                    (function (t) {
                        return "object" == typeof t && null !== t;
                    })((r = t)) &&
                    "postMessage" in r &&
                    "function" == typeof r.postMessage)
                )
                    this._injectedProvider = t;
                else {
                    if (
                        !(function (t) {
                            return "string" == typeof t;
                        })(t)
                    )
                        throw new Error("provider parameter must be an injected provider or a URL string.");
                    (this._providerUrl = new URL(t)), (this._providerUrl.hash = new URLSearchParams({ origin: window.location.origin, network: this._network }).toString());
                }
                var r;
            }
            handleConnect() {
                var t;
                return (
                    this._handlerAdded || ((this._handlerAdded = !0), window.addEventListener("message", this.handleMessage), window.addEventListener("beforeunload", this._beforeUnload)),
                        this._injectedProvider
                            ? new Promise((t) => {
                                this.sendRequest("connect", {}), t();
                            })
                            : ((window.name = "parent"),
                                (this._popup = window.open(null === (t = this._providerUrl) || void 0 === t ? void 0 : t.toString(), "_blank", "location,resizable,width=460,height=675")),
                                new Promise((t) => {
                                    this.once("connect", t);
                                }))
                );
            }
            handleDisconnect() {
                this._handlerAdded && ((this._handlerAdded = !1), window.removeEventListener("message", this.handleMessage), window.removeEventListener("beforeunload", this._beforeUnload)),
                this._publicKey && ((this._publicKey = null), this.emit("disconnect")),
                    this._responsePromises.forEach(([, t], e) => {
                        this._responsePromises.delete(e), t(new Error("Wallet disconnected"));
                    });
            }
            sendRequest(t, e) {
                return Ne(this, void 0, void 0, function* () {
                    if ("connect" !== t && !this.connected) throw new Error("Wallet not connected");
                    const r = this._nextRequestId;
                    return (
                        ++this._nextRequestId,
                            new Promise((n, i) => {
                                var o, s, a, f;
                                this._responsePromises.set(r, [n, i]),
                                    this._injectedProvider
                                        ? this._injectedProvider.postMessage({ jsonrpc: "2.0", id: r, method: t, params: Object.assign({ network: this._network }, e) })
                                        : (null === (o = this._popup) ||
                                        void 0 === o ||
                                        o.postMessage({ jsonrpc: "2.0", id: r, method: t, params: e }, null !== (a = null === (s = this._providerUrl) || void 0 === s ? void 0 : s.origin) && void 0 !== a ? a : ""),
                                        this.autoApprove || null === (f = this._popup) || void 0 === f || f.focus());
                            })
                    );
                });
            }
            get publicKey() {
                return this._publicKey;
            }
            get connected() {
                return null !== this._publicKey;
            }
            get autoApprove() {
                return this._autoApprove;
            }
            connect() {
                return Ne(this, void 0, void 0, function* () {
                    this._popup && this._popup.close(), yield this.handleConnect();
                });
            }
            disconnect() {
                return Ne(this, void 0, void 0, function* () {
                    this._injectedProvider && (yield this.sendRequest("disconnect", {})), this._popup && this._popup.close(), this.handleDisconnect();
                });
            }
            sign(t, e) {
                return Ne(this, void 0, void 0, function* () {
                    if (!(t instanceof Uint8Array)) throw new Error("Data must be an instance of Uint8Array");
                    const r = yield this.sendRequest("sign", { data: t, display: e });
                    return { signature: U().decode(r.signature), publicKey: new ht(r.publicKey) };
                });
            }
            signTransaction(t) {
                return Ne(this, void 0, void 0, function* () {
                    const e = yield this.sendRequest("signTransaction", { message: U().encode(t.serializeMessage()) }),
                        r = U().decode(e.signature),
                        n = new ht(e.publicKey);
                    return t.addSignature(n, r), t;
                });
            }
            signAllTransactions(t) {
                return Ne(this, void 0, void 0, function* () {
                    const e = yield this.sendRequest("signAllTransactions", { messages: t.map((t) => U().encode(t.serializeMessage())) }),
                        r = e.signatures.map((t) => U().decode(t)),
                        n = new ht(e.publicKey);
                    return (t = t.map((t, e) => (t.addSignature(n, r[e]), t)));
                });
            }
        }
        var Ce = function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function s(t) {
                    try {
                        f(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function a(t) {
                    try {
                        f(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function f(t) {
                    var e;
                    t.done
                        ? i(t.value)
                        : ((e = t.value),
                            e instanceof r
                                ? e
                                : new r(function (t) {
                                    t(e);
                                })).then(s, a);
                }
                f((n = n.apply(t, e || [])).next());
            });
        };
        class We extends S {
            constructor(e = {}) {
                super(),
                    (this._disconnected = () => {
                        const t = this._wallet;
                        t && (t.off("disconnect", this._disconnected), (this._wallet = null), this.emit("error", new c()), this.emit("disconnect"));
                    }),
                    (this._provider = e.provider || ("undefined" == typeof window ? void 0 : window.sollet)),
                    (this._network = e.network || t.Mainnet),
                    (this._connecting = !1),
                    (this._wallet = null),
                this.ready || _(this, e.pollInterval || 1e3, e.pollCount || 3);
            }
            get publicKey() {
                var t;
                return (null === (t = this._wallet) || void 0 === t ? void 0 : t.publicKey) || null;
            }
            get ready() {
                var t;
                return "string" == typeof this._provider || ("undefined" != typeof window && "function" == typeof (null === (t = window.sollet) || void 0 === t ? void 0 : t.postMessage));
            }
            get connecting() {
                return this._connecting;
            }
            get connected() {
                var t;
                return !!(null === (t = this._wallet) || void 0 === t ? void 0 : t.connected);
            }
            connect() {
                return Ce(this, void 0, void 0, function* () {
                    try {
                        if (this.connected || this.connecting) return;
                        this._connecting = !0;
                        const t = this._provider || ("undefined" != typeof window && window.sollet);
                        if (!t) throw new a();
                        let e;
                        try {
                            e = new qe(t, this._network);
                            const r = e.handleDisconnect;
                            let n, i;
                            try {
                                yield new Promise((o, s) => {
                                    const a = () => {
                                        n && clearTimeout(n), e.off("connect", a), o();
                                    };
                                    if (
                                        ((e.handleDisconnect = (...t) => (e.off("connect", a), s(new w()), r.apply(e, t))),
                                            e.on("connect", a),
                                            e.connect().catch((t) => {
                                                e.off("connect", a), s(t);
                                            }),
                                        "string" == typeof t)
                                    ) {
                                        let t = 0;
                                        i = setInterval(() => {
                                            const r = e._popup;
                                            r ? r.closed && s(new w()) : t > 50 && s(new v()), t++;
                                        }, 100);
                                    } else n = setTimeout(() => s(new g()), 1e4);
                                });
                            } finally {
                                (e.handleDisconnect = r), i && clearInterval(i);
                            }
                        } catch (t) {
                            if (t instanceof s) throw t;
                            throw new u(null == t ? void 0 : t.message, t);
                        }
                        e.on("disconnect", this._disconnected), (this._wallet = e), this.emit("connect");
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    } finally {
                        this._connecting = !1;
                    }
                });
            }
            disconnect() {
                return Ce(this, void 0, void 0, function* () {
                    const t = this._wallet;
                    if (t) {
                        t.off("disconnect", this._disconnected), (this._wallet = null);
                        const e = t.handleDisconnect;
                        try {
                            yield new Promise((r, n) => {
                                const i = setTimeout(() => r(), 250);
                                (t.handleDisconnect = (...n) => (clearTimeout(i), r(), e.apply(t, n))),
                                    t.disconnect().then(
                                        () => {
                                            clearTimeout(i), r();
                                        },
                                        (t) => {
                                            clearTimeout(i), "Wallet disconnected" === t.message ? r() : n(t);
                                        }
                                    );
                            });
                        } catch (t) {
                            this.emit("error", new h(null == t ? void 0 : t.message, t));
                        } finally {
                            t.handleDisconnect = e;
                        }
                        this.emit("disconnect");
                    }
                });
            }
            signTransaction(t) {
                return Ce(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            return (yield e.signTransaction(t)) || t;
                        } catch (t) {
                            throw new m(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
            signAllTransactions(t) {
                return Ce(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            return (yield e.signAllTransactions(t)) || t;
                        } catch (t) {
                            throw new m(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
            signMessage() {
                return Ce(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            const { signature: r } = yield e.sign(t, "utf8");
                            return Uint8Array.from(r);
                        } catch (t) {
                            throw new y(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
        }
        var Ke = function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function s(t) {
                    try {
                        f(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function a(t) {
                    try {
                        f(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function f(t) {
                    var e;
                    t.done
                        ? i(t.value)
                        : ((e = t.value),
                            e instanceof r
                                ? e
                                : new r(function (t) {
                                    t(e);
                                })).then(s, a);
                }
                f((n = n.apply(t, e || [])).next());
            });
        };
        class De extends A {
            constructor(t = {}) {
                super(), (this._connecting = !1), (this._wallet = null), (this._publicKey = null), this.ready || _(this, t.pollInterval || 1e3, t.pollCount || 3);
            }
            get publicKey() {
                return this._publicKey;
            }
            get ready() {
                return "undefined" != typeof window && !!window.solong;
            }
            get connecting() {
                return this._connecting;
            }
            get connected() {
                var t;
                return !!(null === (t = this._wallet) || void 0 === t ? void 0 : t.currentAccount);
            }
            connect() {
                return Ke(this, void 0, void 0, function* () {
                    try {
                        if (this.connected || this.connecting) return;
                        this._connecting = !0;
                        const t = "undefined" != typeof window && window.solong;
                        if (!t) throw new a();
                        let e, r;
                        try {
                            e = yield t.selectAccount();
                        } catch (t) {
                            throw new d(null == t ? void 0 : t.message, t);
                        }
                        try {
                            r = new ht(e);
                        } catch (t) {
                            throw new l(null == t ? void 0 : t.message, t);
                        }
                        (this._wallet = t), (this._publicKey = r), this.emit("connect");
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    } finally {
                        this._connecting = !1;
                    }
                });
            }
            disconnect() {
                return Ke(this, void 0, void 0, function* () {
                    this._wallet && ((this._wallet = null), (this._publicKey = null), this.emit("disconnect"));
                });
            }
            signTransaction(t) {
                return Ke(this, void 0, void 0, function* () {
                    try {
                        const e = this._wallet;
                        if (!e) throw new p();
                        try {
                            return (yield e.signTransaction(t)) || t;
                        } catch (t) {
                            throw new m(null == t ? void 0 : t.message, t);
                        }
                    } catch (t) {
                        throw (this.emit("error", t), t);
                    }
                });
            }
            signAllTransactions(t) {
                return Ke(this, void 0, void 0, function* () {
                    const e = [];
                    for (const r of t) e.push(yield this.signTransaction(r));
                    return e;
                });
            }
        }
        var Fe = function (t, e, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function s(t) {
                    try {
                        f(n.next(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function a(t) {
                    try {
                        f(n.throw(t));
                    } catch (t) {
                        o(t);
                    }
                }
                function f(t) {
                    var e;
                    t.done
                        ? i(t.value)
                        : ((e = t.value),
                            e instanceof r
                                ? e
                                : new r(function (t) {
                                    t(e);
                                })).then(s, a);
                }
                f((n = n.apply(t, e || [])).next());
            });
        };
        function $e(t) {
            return new Ze(t);
        }
        function Ve(t) {
            return btoa(String.fromCharCode.apply(null, t));
        }
        class Ze {
            constructor(t) {
                switch (((this.name = t), this.name)) {
                    case "Phantom":
                        (this.adapter = new je()), (this.hasSignMessage = !0);
                        break;
                    case "MetaMask":
                        (this.adapter = new We({ provider: "https://solflare.com/metamask-sync-popup?cluster=mainnet-beta&origin=https://soap.capital&title=Swap - Soap Capital&host=soap.capital" })), (this.hasSignMessage = !0);
                        break;
                    case "Solflare":
                    case "SolflareWeb":
                        (this.adapter = new We({ provider: "https://solflare.com/access-wallet" })), (this.hasSignMessage = !0);
                        break;
                    case "Sollet":
                    case "Sollet Extension":
                        (this.adapter = new We({ provider: "https://www.sollet.io" })), (this.hasSignMessage = !0);
                        break;
                    case "Solong":
                        (this.adapter = new De()), (this.hasSignMessage = !1);
                }
            }
            GetAdapter() {
                return this.adapter;
            }
            signTransaction(t) {
                return Fe(this, void 0, void 0, function* () {
                    var r = Et.populate(t, [this.adapter.publicKey.toString()]);
                    return r.compileMessage(), Ve(yield (yield this.adapter.signTransaction(r)).serialize());
                });
            }
            signMessage() {
                return Fe(this, void 0, void 0, function* () {
                    if (this.hasSignMessage) return yield this.adapter.signMessage();
                });
            }
            ConnectedHandler() {
                return Fe(this, void 0, void 0, function* () {
                    var t = new Object();
                    yield this.instance.invokeMethodAsync("OnEvent", t);
                });
            }
            removeEventListener() {
                this.adapter.removeListener("connect");
            }
            addEventListener(t) {
                this.removeEventListener(), (this.instance = t), this.adapter.on("connect", () => this.ConnectedHandler());
            }
        }
    })(),
        (solanawallet = n);
})();