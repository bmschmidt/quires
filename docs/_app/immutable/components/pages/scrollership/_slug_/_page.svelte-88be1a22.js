import { _ as Xi } from '../../../../chunks/preload-helper-41c905a7.js';
import {
	S as J,
	i as $,
	s as ee,
	k as S,
	l as O,
	n as E,
	b as P,
	Z as Te,
	T as H,
	B as K,
	h as A,
	U as Ze,
	_ as Er,
	a as z,
	q,
	m as F,
	c as W,
	r as V,
	G as x,
	u as ue,
	f as U,
	g as Sr,
	d as Or,
	t as G,
	V as Qi,
	w as se,
	x as pe,
	y as he,
	z as de,
	I as vn,
	R as Ge,
	X as R,
	M as yn,
	o as Ir,
	Y as Ke,
	e as qe,
	$ as Zi,
	p as Fr,
	C as Ji,
	D as $i,
	E as et,
	F as nt
} from '../../../../chunks/index-c1110d94.js';
import { E as rt, a as it, D as tt } from '../../../../chunks/Document-7acfde01.js';
function lt(e) {
	let n, r, i;
	return {
		c() {
			(n = S('input')), this.h();
		},
		l(t) {
			(n = O(t, 'INPUT', { type: !0, min: !0, max: !0, step: !0 })), this.h();
		},
		h() {
			E(n, 'type', 'range'), E(n, 'min', e[0]), E(n, 'max', e[1]), E(n, 'step', 0.01);
		},
		m(t, l) {
			P(t, n, l),
				Te(n, e[2]),
				r || ((i = [H(n, 'change', e[5]), H(n, 'input', e[5]), H(n, 'input', e[3])]), (r = !0));
		},
		p(t, [l]) {
			l & 1 && E(n, 'min', t[0]), l & 2 && E(n, 'max', t[1]), l & 4 && Te(n, t[2]);
		},
		i: K,
		o: K,
		d(t) {
			t && A(n), (r = !1), Ze(i);
		}
	};
}
function ot(e, n, r) {
	let { min: i = 0 } = n,
		{ max: t = 1 } = n,
		{ settings: l } = n,
		o = i / 2 + t / 2;
	function a() {
		const c = l.controls._plot;
		if (c) {
			const s = c._query.callouts,
				f = [];
			for (let p of s) {
				const h = { ...p };
				(h.size = o), f.push(h);
			}
			c.plotAPI({ callouts: f });
		}
	}
	function u() {
		(o = Er(this.value)), r(2, o);
	}
	return (
		(e.$$set = (c) => {
			'min' in c && r(0, (i = c.min)),
				'max' in c && r(1, (t = c.max)),
				'settings' in c && r(4, (l = c.settings));
		}),
		[i, t, o, a, l, u]
	);
}
class at extends J {
	constructor(n) {
		super(), $(this, n, ot, lt, ee, { min: 0, max: 1, settings: 4 });
	}
}
var ut = typeof global == 'object' && global && global.Object === Object && global;
const kr = ut;
var ct = typeof self == 'object' && self && self.Object === Object && self,
	ft = kr || ct || Function('return this')();
const Q = ft;
var st = Q.Symbol;
const ie = st;
var Lr = Object.prototype,
	pt = Lr.hasOwnProperty,
	ht = Lr.toString,
	Fe = ie ? ie.toStringTag : void 0;
function dt(e) {
	var n = pt.call(e, Fe),
		r = e[Fe];
	try {
		e[Fe] = void 0;
		var i = !0;
	} catch {}
	var t = ht.call(e);
	return i && (n ? (e[Fe] = r) : delete e[Fe]), t;
}
var gt = Object.prototype,
	mt = gt.toString;
function _t(e) {
	return mt.call(e);
}
var vt = '[object Null]',
	yt = '[object Undefined]',
	Mn = ie ? ie.toStringTag : void 0;
function Ee(e) {
	return e == null ? (e === void 0 ? yt : vt) : Mn && Mn in Object(e) ? dt(e) : _t(e);
}
function Se(e) {
	return e != null && typeof e == 'object';
}
var bt = '[object Symbol]';
function bn(e) {
	return typeof e == 'symbol' || (Se(e) && Ee(e) == bt);
}
function At(e, n) {
	for (var r = -1, i = e == null ? 0 : e.length, t = Array(i); ++r < i; ) t[r] = n(e[r], r, e);
	return t;
}
var xt = Array.isArray;
const Oe = xt;
var Tt = 1 / 0,
	Dn = ie ? ie.prototype : void 0,
	Rn = Dn ? Dn.toString : void 0;
function jr(e) {
	if (typeof e == 'string') return e;
	if (Oe(e)) return At(e, jr) + '';
	if (bn(e)) return Rn ? Rn.call(e) : '';
	var n = e + '';
	return n == '0' && 1 / e == -Tt ? '-0' : n;
}
function ce(e) {
	var n = typeof e;
	return e != null && (n == 'object' || n == 'function');
}
var wt = '[object AsyncFunction]',
	Ct = '[object Function]',
	Et = '[object GeneratorFunction]',
	St = '[object Proxy]';
function Pr(e) {
	if (!ce(e)) return !1;
	var n = Ee(e);
	return n == Ct || n == Et || n == wt || n == St;
}
var Ot = Q['__core-js_shared__'];
const tn = Ot;
var Bn = (function () {
	var e = /[^.]+$/.exec((tn && tn.keys && tn.keys.IE_PROTO) || '');
	return e ? 'Symbol(src)_1.' + e : '';
})();
function It(e) {
	return !!Bn && Bn in e;
}
var Ft = Function.prototype,
	kt = Ft.toString;
function ge(e) {
	if (e != null) {
		try {
			return kt.call(e);
		} catch {}
		try {
			return e + '';
		} catch {}
	}
	return '';
}
var Lt = /[\\^$.*+?()[\]{}|]/g,
	jt = /^\[object .+?Constructor\]$/,
	Pt = Function.prototype,
	Nt = Object.prototype,
	Mt = Pt.toString,
	Dt = Nt.hasOwnProperty,
	Rt = RegExp(
		'^' +
			Mt.call(Dt)
				.replace(Lt, '\\$&')
				.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
			'$'
	);
function Bt(e) {
	if (!ce(e) || It(e)) return !1;
	var n = Pr(e) ? Rt : jt;
	return n.test(ge(e));
}
function Ut(e, n) {
	return e == null ? void 0 : e[n];
}
function me(e, n) {
	var r = Ut(e, n);
	return Bt(r) ? r : void 0;
}
var Yt = me(Q, 'WeakMap');
const cn = Yt;
var Un = Object.create,
	Ht = (function () {
		function e() {}
		return function (n) {
			if (!ce(n)) return {};
			if (Un) return Un(n);
			e.prototype = n;
			var r = new e();
			return (e.prototype = void 0), r;
		};
	})();
const Gt = Ht;
function Kt(e, n) {
	var r = -1,
		i = e.length;
	for (n || (n = Array(i)); ++r < i; ) n[r] = e[r];
	return n;
}
var qt = (function () {
	try {
		var e = me(Object, 'defineProperty');
		return e({}, '', {}), e;
	} catch {}
})();
const Yn = qt;
function Vt(e, n) {
	for (var r = -1, i = e == null ? 0 : e.length; ++r < i && n(e[r], r, e) !== !1; );
	return e;
}
var zt = 9007199254740991,
	Wt = /^(?:0|[1-9]\d*)$/;
function Nr(e, n) {
	var r = typeof e;
	return (
		(n = n ?? zt),
		!!n && (r == 'number' || (r != 'symbol' && Wt.test(e))) && e > -1 && e % 1 == 0 && e < n
	);
}
function Mr(e, n, r) {
	n == '__proto__' && Yn
		? Yn(e, n, { configurable: !0, enumerable: !0, value: r, writable: !0 })
		: (e[n] = r);
}
function Dr(e, n) {
	return e === n || (e !== e && n !== n);
}
var Xt = Object.prototype,
	Qt = Xt.hasOwnProperty;
function An(e, n, r) {
	var i = e[n];
	(!(Qt.call(e, n) && Dr(i, r)) || (r === void 0 && !(n in e))) && Mr(e, n, r);
}
function Je(e, n, r, i) {
	var t = !r;
	r || (r = {});
	for (var l = -1, o = n.length; ++l < o; ) {
		var a = n[l],
			u = i ? i(r[a], e[a], a, r, e) : void 0;
		u === void 0 && (u = e[a]), t ? Mr(r, a, u) : An(r, a, u);
	}
	return r;
}
var Zt = 9007199254740991;
function Rr(e) {
	return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Zt;
}
function Br(e) {
	return e != null && Rr(e.length) && !Pr(e);
}
var Jt = Object.prototype;
function xn(e) {
	var n = e && e.constructor,
		r = (typeof n == 'function' && n.prototype) || Jt;
	return e === r;
}
function $t(e, n) {
	for (var r = -1, i = Array(e); ++r < e; ) i[r] = n(r);
	return i;
}
var el = '[object Arguments]';
function Hn(e) {
	return Se(e) && Ee(e) == el;
}
var Ur = Object.prototype,
	nl = Ur.hasOwnProperty,
	rl = Ur.propertyIsEnumerable,
	il = Hn(
		(function () {
			return arguments;
		})()
	)
		? Hn
		: function (e) {
				return Se(e) && nl.call(e, 'callee') && !rl.call(e, 'callee');
		  };
const tl = il;
function ll() {
	return !1;
}
var Yr = typeof exports == 'object' && exports && !exports.nodeType && exports,
	Gn = Yr && typeof module == 'object' && module && !module.nodeType && module,
	ol = Gn && Gn.exports === Yr,
	Kn = ol ? Q.Buffer : void 0,
	al = Kn ? Kn.isBuffer : void 0,
	ul = al || ll;
const Hr = ul;
var cl = '[object Arguments]',
	fl = '[object Array]',
	sl = '[object Boolean]',
	pl = '[object Date]',
	hl = '[object Error]',
	dl = '[object Function]',
	gl = '[object Map]',
	ml = '[object Number]',
	_l = '[object Object]',
	vl = '[object RegExp]',
	yl = '[object Set]',
	bl = '[object String]',
	Al = '[object WeakMap]',
	xl = '[object ArrayBuffer]',
	Tl = '[object DataView]',
	wl = '[object Float32Array]',
	Cl = '[object Float64Array]',
	El = '[object Int8Array]',
	Sl = '[object Int16Array]',
	Ol = '[object Int32Array]',
	Il = '[object Uint8Array]',
	Fl = '[object Uint8ClampedArray]',
	kl = '[object Uint16Array]',
	Ll = '[object Uint32Array]',
	C = {};
C[wl] = C[Cl] = C[El] = C[Sl] = C[Ol] = C[Il] = C[Fl] = C[kl] = C[Ll] = !0;
C[cl] =
	C[fl] =
	C[xl] =
	C[sl] =
	C[Tl] =
	C[pl] =
	C[hl] =
	C[dl] =
	C[gl] =
	C[ml] =
	C[_l] =
	C[vl] =
	C[yl] =
	C[bl] =
	C[Al] =
		!1;
function jl(e) {
	return Se(e) && Rr(e.length) && !!C[Ee(e)];
}
function Tn(e) {
	return function (n) {
		return e(n);
	};
}
var Gr = typeof exports == 'object' && exports && !exports.nodeType && exports,
	Le = Gr && typeof module == 'object' && module && !module.nodeType && module,
	Pl = Le && Le.exports === Gr,
	ln = Pl && kr.process,
	Nl = (function () {
		try {
			var e = Le && Le.require && Le.require('util').types;
			return e || (ln && ln.binding && ln.binding('util'));
		} catch {}
	})();
const we = Nl;
var qn = we && we.isTypedArray,
	Ml = qn ? Tn(qn) : jl;
const Dl = Ml;
var Rl = Object.prototype,
	Bl = Rl.hasOwnProperty;
function Kr(e, n) {
	var r = Oe(e),
		i = !r && tl(e),
		t = !r && !i && Hr(e),
		l = !r && !i && !t && Dl(e),
		o = r || i || t || l,
		a = o ? $t(e.length, String) : [],
		u = a.length;
	for (var c in e)
		(n || Bl.call(e, c)) &&
			!(
				o &&
				(c == 'length' ||
					(t && (c == 'offset' || c == 'parent')) ||
					(l && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
					Nr(c, u))
			) &&
			a.push(c);
	return a;
}
function qr(e, n) {
	return function (r) {
		return e(n(r));
	};
}
var Ul = qr(Object.keys, Object);
const Yl = Ul;
var Hl = Object.prototype,
	Gl = Hl.hasOwnProperty;
function Kl(e) {
	if (!xn(e)) return Yl(e);
	var n = [];
	for (var r in Object(e)) Gl.call(e, r) && r != 'constructor' && n.push(r);
	return n;
}
function wn(e) {
	return Br(e) ? Kr(e) : Kl(e);
}
function ql(e) {
	var n = [];
	if (e != null) for (var r in Object(e)) n.push(r);
	return n;
}
var Vl = Object.prototype,
	zl = Vl.hasOwnProperty;
function Wl(e) {
	if (!ce(e)) return ql(e);
	var n = xn(e),
		r = [];
	for (var i in e) (i == 'constructor' && (n || !zl.call(e, i))) || r.push(i);
	return r;
}
function Cn(e) {
	return Br(e) ? Kr(e, !0) : Wl(e);
}
var Xl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	Ql = /^\w*$/;
function Zl(e, n) {
	if (Oe(e)) return !1;
	var r = typeof e;
	return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || bn(e)
		? !0
		: Ql.test(e) || !Xl.test(e) || (n != null && e in Object(n));
}
var Jl = me(Object, 'create');
const je = Jl;
function $l() {
	(this.__data__ = je ? je(null) : {}), (this.size = 0);
}
function eo(e) {
	var n = this.has(e) && delete this.__data__[e];
	return (this.size -= n ? 1 : 0), n;
}
var no = '__lodash_hash_undefined__',
	ro = Object.prototype,
	io = ro.hasOwnProperty;
function to(e) {
	var n = this.__data__;
	if (je) {
		var r = n[e];
		return r === no ? void 0 : r;
	}
	return io.call(n, e) ? n[e] : void 0;
}
var lo = Object.prototype,
	oo = lo.hasOwnProperty;
function ao(e) {
	var n = this.__data__;
	return je ? n[e] !== void 0 : oo.call(n, e);
}
var uo = '__lodash_hash_undefined__';
function co(e, n) {
	var r = this.__data__;
	return (this.size += this.has(e) ? 0 : 1), (r[e] = je && n === void 0 ? uo : n), this;
}
function fe(e) {
	var n = -1,
		r = e == null ? 0 : e.length;
	for (this.clear(); ++n < r; ) {
		var i = e[n];
		this.set(i[0], i[1]);
	}
}
fe.prototype.clear = $l;
fe.prototype.delete = eo;
fe.prototype.get = to;
fe.prototype.has = ao;
fe.prototype.set = co;
function fo() {
	(this.__data__ = []), (this.size = 0);
}
function $e(e, n) {
	for (var r = e.length; r--; ) if (Dr(e[r][0], n)) return r;
	return -1;
}
var so = Array.prototype,
	po = so.splice;
function ho(e) {
	var n = this.__data__,
		r = $e(n, e);
	if (r < 0) return !1;
	var i = n.length - 1;
	return r == i ? n.pop() : po.call(n, r, 1), --this.size, !0;
}
function go(e) {
	var n = this.__data__,
		r = $e(n, e);
	return r < 0 ? void 0 : n[r][1];
}
function mo(e) {
	return $e(this.__data__, e) > -1;
}
function _o(e, n) {
	var r = this.__data__,
		i = $e(r, e);
	return i < 0 ? (++this.size, r.push([e, n])) : (r[i][1] = n), this;
}
function ne(e) {
	var n = -1,
		r = e == null ? 0 : e.length;
	for (this.clear(); ++n < r; ) {
		var i = e[n];
		this.set(i[0], i[1]);
	}
}
ne.prototype.clear = fo;
ne.prototype.delete = ho;
ne.prototype.get = go;
ne.prototype.has = mo;
ne.prototype.set = _o;
var vo = me(Q, 'Map');
const Pe = vo;
function yo() {
	(this.size = 0), (this.__data__ = { hash: new fe(), map: new (Pe || ne)(), string: new fe() });
}
function bo(e) {
	var n = typeof e;
	return n == 'string' || n == 'number' || n == 'symbol' || n == 'boolean'
		? e !== '__proto__'
		: e === null;
}
function en(e, n) {
	var r = e.__data__;
	return bo(n) ? r[typeof n == 'string' ? 'string' : 'hash'] : r.map;
}
function Ao(e) {
	var n = en(this, e).delete(e);
	return (this.size -= n ? 1 : 0), n;
}
function xo(e) {
	return en(this, e).get(e);
}
function To(e) {
	return en(this, e).has(e);
}
function wo(e, n) {
	var r = en(this, e),
		i = r.size;
	return r.set(e, n), (this.size += r.size == i ? 0 : 1), this;
}
function le(e) {
	var n = -1,
		r = e == null ? 0 : e.length;
	for (this.clear(); ++n < r; ) {
		var i = e[n];
		this.set(i[0], i[1]);
	}
}
le.prototype.clear = yo;
le.prototype.delete = Ao;
le.prototype.get = xo;
le.prototype.has = To;
le.prototype.set = wo;
var Co = 'Expected a function';
function En(e, n) {
	if (typeof e != 'function' || (n != null && typeof n != 'function')) throw new TypeError(Co);
	var r = function () {
		var i = arguments,
			t = n ? n.apply(this, i) : i[0],
			l = r.cache;
		if (l.has(t)) return l.get(t);
		var o = e.apply(this, i);
		return (r.cache = l.set(t, o) || l), o;
	};
	return (r.cache = new (En.Cache || le)()), r;
}
En.Cache = le;
var Eo = 500;
function So(e) {
	var n = En(e, function (i) {
			return r.size === Eo && r.clear(), i;
		}),
		r = n.cache;
	return n;
}
var Oo =
		/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	Io = /\\(\\)?/g,
	Fo = So(function (e) {
		var n = [];
		return (
			e.charCodeAt(0) === 46 && n.push(''),
			e.replace(Oo, function (r, i, t, l) {
				n.push(t ? l.replace(Io, '$1') : i || r);
			}),
			n
		);
	});
const ko = Fo;
function Lo(e) {
	return e == null ? '' : jr(e);
}
function Vr(e, n) {
	return Oe(e) ? e : Zl(e, n) ? [e] : ko(Lo(e));
}
var jo = 1 / 0;
function zr(e) {
	if (typeof e == 'string' || bn(e)) return e;
	var n = e + '';
	return n == '0' && 1 / e == -jo ? '-0' : n;
}
function Po(e, n) {
	n = Vr(n, e);
	for (var r = 0, i = n.length; e != null && r < i; ) e = e[zr(n[r++])];
	return r && r == i ? e : void 0;
}
function No(e, n, r) {
	var i = e == null ? void 0 : Po(e, n);
	return i === void 0 ? r : i;
}
function Wr(e, n) {
	for (var r = -1, i = n.length, t = e.length; ++r < i; ) e[t + r] = n[r];
	return e;
}
var Mo = qr(Object.getPrototypeOf, Object);
const Xr = Mo;
function Do() {
	(this.__data__ = new ne()), (this.size = 0);
}
function Ro(e) {
	var n = this.__data__,
		r = n.delete(e);
	return (this.size = n.size), r;
}
function Bo(e) {
	return this.__data__.get(e);
}
function Uo(e) {
	return this.__data__.has(e);
}
var Yo = 200;
function Ho(e, n) {
	var r = this.__data__;
	if (r instanceof ne) {
		var i = r.__data__;
		if (!Pe || i.length < Yo - 1) return i.push([e, n]), (this.size = ++r.size), this;
		r = this.__data__ = new le(i);
	}
	return r.set(e, n), (this.size = r.size), this;
}
function Ie(e) {
	var n = (this.__data__ = new ne(e));
	this.size = n.size;
}
Ie.prototype.clear = Do;
Ie.prototype.delete = Ro;
Ie.prototype.get = Bo;
Ie.prototype.has = Uo;
Ie.prototype.set = Ho;
function Go(e, n) {
	return e && Je(n, wn(n), e);
}
function Ko(e, n) {
	return e && Je(n, Cn(n), e);
}
var Qr = typeof exports == 'object' && exports && !exports.nodeType && exports,
	Vn = Qr && typeof module == 'object' && module && !module.nodeType && module,
	qo = Vn && Vn.exports === Qr,
	zn = qo ? Q.Buffer : void 0,
	Wn = zn ? zn.allocUnsafe : void 0;
function Vo(e, n) {
	if (n) return e.slice();
	var r = e.length,
		i = Wn ? Wn(r) : new e.constructor(r);
	return e.copy(i), i;
}
function zo(e, n) {
	for (var r = -1, i = e == null ? 0 : e.length, t = 0, l = []; ++r < i; ) {
		var o = e[r];
		n(o, r, e) && (l[t++] = o);
	}
	return l;
}
function Zr() {
	return [];
}
var Wo = Object.prototype,
	Xo = Wo.propertyIsEnumerable,
	Xn = Object.getOwnPropertySymbols,
	Qo = Xn
		? function (e) {
				return e == null
					? []
					: ((e = Object(e)),
					  zo(Xn(e), function (n) {
							return Xo.call(e, n);
					  }));
		  }
		: Zr;
const Sn = Qo;
function Zo(e, n) {
	return Je(e, Sn(e), n);
}
var Jo = Object.getOwnPropertySymbols,
	$o = Jo
		? function (e) {
				for (var n = []; e; ) Wr(n, Sn(e)), (e = Xr(e));
				return n;
		  }
		: Zr;
const Jr = $o;
function ea(e, n) {
	return Je(e, Jr(e), n);
}
function $r(e, n, r) {
	var i = n(e);
	return Oe(e) ? i : Wr(i, r(e));
}
function na(e) {
	return $r(e, wn, Sn);
}
function ra(e) {
	return $r(e, Cn, Jr);
}
var ia = me(Q, 'DataView');
const fn = ia;
var ta = me(Q, 'Promise');
const sn = ta;
var la = me(Q, 'Set');
const pn = la;
var Qn = '[object Map]',
	oa = '[object Object]',
	Zn = '[object Promise]',
	Jn = '[object Set]',
	$n = '[object WeakMap]',
	er = '[object DataView]',
	aa = ge(fn),
	ua = ge(Pe),
	ca = ge(sn),
	fa = ge(pn),
	sa = ge(cn),
	oe = Ee;
((fn && oe(new fn(new ArrayBuffer(1))) != er) ||
	(Pe && oe(new Pe()) != Qn) ||
	(sn && oe(sn.resolve()) != Zn) ||
	(pn && oe(new pn()) != Jn) ||
	(cn && oe(new cn()) != $n)) &&
	(oe = function (e) {
		var n = Ee(e),
			r = n == oa ? e.constructor : void 0,
			i = r ? ge(r) : '';
		if (i)
			switch (i) {
				case aa:
					return er;
				case ua:
					return Qn;
				case ca:
					return Zn;
				case fa:
					return Jn;
				case sa:
					return $n;
			}
		return n;
	});
const On = oe;
var pa = Object.prototype,
	ha = pa.hasOwnProperty;
function da(e) {
	var n = e.length,
		r = new e.constructor(n);
	return (
		n &&
			typeof e[0] == 'string' &&
			ha.call(e, 'index') &&
			((r.index = e.index), (r.input = e.input)),
		r
	);
}
var ga = Q.Uint8Array;
const nr = ga;
function In(e) {
	var n = new e.constructor(e.byteLength);
	return new nr(n).set(new nr(e)), n;
}
function ma(e, n) {
	var r = n ? In(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.byteLength);
}
var _a = /\w*$/;
function va(e) {
	var n = new e.constructor(e.source, _a.exec(e));
	return (n.lastIndex = e.lastIndex), n;
}
var rr = ie ? ie.prototype : void 0,
	ir = rr ? rr.valueOf : void 0;
function ya(e) {
	return ir ? Object(ir.call(e)) : {};
}
function ba(e, n) {
	var r = n ? In(e.buffer) : e.buffer;
	return new e.constructor(r, e.byteOffset, e.length);
}
var Aa = '[object Boolean]',
	xa = '[object Date]',
	Ta = '[object Map]',
	wa = '[object Number]',
	Ca = '[object RegExp]',
	Ea = '[object Set]',
	Sa = '[object String]',
	Oa = '[object Symbol]',
	Ia = '[object ArrayBuffer]',
	Fa = '[object DataView]',
	ka = '[object Float32Array]',
	La = '[object Float64Array]',
	ja = '[object Int8Array]',
	Pa = '[object Int16Array]',
	Na = '[object Int32Array]',
	Ma = '[object Uint8Array]',
	Da = '[object Uint8ClampedArray]',
	Ra = '[object Uint16Array]',
	Ba = '[object Uint32Array]';
function Ua(e, n, r) {
	var i = e.constructor;
	switch (n) {
		case Ia:
			return In(e);
		case Aa:
		case xa:
			return new i(+e);
		case Fa:
			return ma(e, r);
		case ka:
		case La:
		case ja:
		case Pa:
		case Na:
		case Ma:
		case Da:
		case Ra:
		case Ba:
			return ba(e, r);
		case Ta:
			return new i();
		case wa:
		case Sa:
			return new i(e);
		case Ca:
			return va(e);
		case Ea:
			return new i();
		case Oa:
			return ya(e);
	}
}
function Ya(e) {
	return typeof e.constructor == 'function' && !xn(e) ? Gt(Xr(e)) : {};
}
var Ha = '[object Map]';
function Ga(e) {
	return Se(e) && On(e) == Ha;
}
var tr = we && we.isMap,
	Ka = tr ? Tn(tr) : Ga;
const qa = Ka;
var Va = '[object Set]';
function za(e) {
	return Se(e) && On(e) == Va;
}
var lr = we && we.isSet,
	Wa = lr ? Tn(lr) : za;
const Xa = Wa;
var Qa = 1,
	Za = 2,
	Ja = 4,
	ei = '[object Arguments]',
	$a = '[object Array]',
	eu = '[object Boolean]',
	nu = '[object Date]',
	ru = '[object Error]',
	ni = '[object Function]',
	iu = '[object GeneratorFunction]',
	tu = '[object Map]',
	lu = '[object Number]',
	ri = '[object Object]',
	ou = '[object RegExp]',
	au = '[object Set]',
	uu = '[object String]',
	cu = '[object Symbol]',
	fu = '[object WeakMap]',
	su = '[object ArrayBuffer]',
	pu = '[object DataView]',
	hu = '[object Float32Array]',
	du = '[object Float64Array]',
	gu = '[object Int8Array]',
	mu = '[object Int16Array]',
	_u = '[object Int32Array]',
	vu = '[object Uint8Array]',
	yu = '[object Uint8ClampedArray]',
	bu = '[object Uint16Array]',
	Au = '[object Uint32Array]',
	w = {};
w[ei] =
	w[$a] =
	w[su] =
	w[pu] =
	w[eu] =
	w[nu] =
	w[hu] =
	w[du] =
	w[gu] =
	w[mu] =
	w[_u] =
	w[tu] =
	w[lu] =
	w[ri] =
	w[ou] =
	w[au] =
	w[uu] =
	w[cu] =
	w[vu] =
	w[yu] =
	w[bu] =
	w[Au] =
		!0;
w[ru] = w[ni] = w[fu] = !1;
function He(e, n, r, i, t, l) {
	var o,
		a = n & Qa,
		u = n & Za,
		c = n & Ja;
	if ((r && (o = t ? r(e, i, t, l) : r(e)), o !== void 0)) return o;
	if (!ce(e)) return e;
	var s = Oe(e);
	if (s) {
		if (((o = da(e)), !a)) return Kt(e, o);
	} else {
		var f = On(e),
			p = f == ni || f == iu;
		if (Hr(e)) return Vo(e, a);
		if (f == ri || f == ei || (p && !t)) {
			if (((o = u || p ? {} : Ya(e)), !a)) return u ? ea(e, Ko(o, e)) : Zo(e, Go(o, e));
		} else {
			if (!w[f]) return t ? e : {};
			o = Ua(e, f, a);
		}
	}
	l || (l = new Ie());
	var h = l.get(e);
	if (h) return h;
	l.set(e, o),
		Xa(e)
			? e.forEach(function (_) {
					o.add(He(_, n, r, _, e, l));
			  })
			: qa(e) &&
			  e.forEach(function (_, b) {
					o.set(b, He(_, n, r, b, e, l));
			  });
	var d = c ? (u ? ra : na) : u ? Cn : wn,
		g = s ? void 0 : d(e);
	return (
		Vt(g || e, function (_, b) {
			g && ((b = _), (_ = e[b])), An(o, b, He(_, n, r, b, e, l));
		}),
		o
	);
}
var xu = 1,
	Tu = 4;
function wu(e) {
	return He(e, xu | Tu);
}
function Cu(e, n, r, i) {
	if (!ce(e)) return e;
	n = Vr(n, e);
	for (var t = -1, l = n.length, o = l - 1, a = e; a != null && ++t < l; ) {
		var u = zr(n[t]),
			c = r;
		if (u === '__proto__' || u === 'constructor' || u === 'prototype') return e;
		if (t != o) {
			var s = a[u];
			(c = i ? i(s, u, a) : void 0), c === void 0 && (c = ce(s) ? s : Nr(n[t + 1]) ? [] : {});
		}
		An(a, u, c), (a = a[u]);
	}
	return e;
}
function Ne(e, n, r) {
	return e == null ? e : Cu(e, n, r);
}
function or(e) {
	let n, r;
	return {
		c() {
			(n = q(e[0])), (r = q(':'));
		},
		l(i) {
			(n = V(i, e[0])), (r = V(i, ':'));
		},
		m(i, t) {
			P(i, n, t), P(i, r, t);
		},
		p(i, t) {
			t & 1 && ue(n, i[0]);
		},
		d(i) {
			i && A(n), i && A(r);
		}
	};
}
function Eu(e) {
	let n,
		r,
		i,
		t,
		l = Math.floor(e[2]) + '',
		o,
		a,
		u,
		c = e[0] && or(e);
	return {
		c() {
			(n = S('div')), c && c.c(), (r = z()), (i = S('input')), (t = z()), (o = q(l)), this.h();
		},
		l(s) {
			n = O(s, 'DIV', {});
			var f = F(n);
			c && c.l(f),
				(r = W(f)),
				(i = O(f, 'INPUT', { type: !0, min: !0, max: !0, step: !0 })),
				(t = W(f)),
				(o = V(f, l)),
				f.forEach(A),
				this.h();
		},
		h() {
			E(i, 'type', 'range'), E(i, 'min', '0'), E(i, 'max', '1'), E(i, 'step', '.001');
		},
		m(s, f) {
			P(s, n, f),
				c && c.m(n, null),
				x(n, r),
				x(n, i),
				Te(i, e[1]),
				x(n, t),
				x(n, o),
				a || ((u = [H(i, 'change', e[11]), H(i, 'input', e[11]), H(i, 'input', e[3])]), (a = !0));
		},
		p(s, [f]) {
			s[0] ? (c ? c.p(s, f) : ((c = or(s)), c.c(), c.m(n, r))) : c && (c.d(1), (c = null)),
				f & 2 && Te(i, s[1]),
				f & 4 && l !== (l = Math.floor(s[2]) + '') && ue(o, l);
		},
		i: K,
		o: K,
		d(s) {
			s && A(n), c && c.d(), (a = !1), Ze(u);
		}
	};
}
function Su(e, n, r) {
	let { settings: i } = n,
		{ target: t } = n,
		{ api: l = {} } = n,
		{ min: o = 0 } = n,
		{ max: a = 1 } = n,
		{ step: u = 0.01 } = n,
		{ trans: c = 'linear' } = n,
		{ label: s = null } = n,
		f = 0.5,
		p = o / 2 + a / 2;
	function h() {
		const g = i.controls._plot;
		if (g) {
			const _ = {};
			for (let [b, v] of Object.entries(l)) Ne(_, b, v);
			Ne(_, t, p), g.plotAPI(_);
		}
	}
	function d() {
		(f = Er(this.value)), r(1, f);
	}
	return (
		(e.$$set = (g) => {
			'settings' in g && r(4, (i = g.settings)),
				'target' in g && r(5, (t = g.target)),
				'api' in g && r(6, (l = g.api)),
				'min' in g && r(7, (o = g.min)),
				'max' in g && r(8, (a = g.max)),
				'step' in g && r(9, (u = g.step)),
				'trans' in g && r(10, (c = g.trans)),
				'label' in g && r(0, (s = g.label));
		}),
		(e.$$.update = () => {
			if (e.$$.dirty & 1410) {
				let g = f;
				c === 'sqrt' && (g = Math.sqrt(f)),
					c === 'log' && (g = Math.pow(f, 2.718)),
					r(2, (p = o + (a - o) * g));
			}
		}),
		[s, f, p, h, i, t, l, o, a, u, c, d]
	);
}
class Ou extends J {
	constructor(n) {
		super(),
			$(this, n, Su, Eu, ee, {
				settings: 4,
				target: 5,
				api: 6,
				min: 7,
				max: 8,
				step: 9,
				trans: 10,
				label: 0
			});
	}
}
function Iu(e) {
	let n, r, i, t;
	return {
		c() {
			(n = S('div')), (r = q(e[0])), this.h();
		},
		l(l) {
			n = O(l, 'DIV', { class: !0 });
			var o = F(n);
			(r = V(o, e[0])), o.forEach(A), this.h();
		},
		h() {
			E(n, 'class', 'button svelte-1eaq156');
		},
		m(l, o) {
			P(l, n, o), x(n, r), i || ((t = H(n, 'click', e[1])), (i = !0));
		},
		p(l, [o]) {
			o & 1 && ue(r, l[0]);
		},
		i: K,
		o: K,
		d(l) {
			l && A(n), (i = !1), t();
		}
	};
}
function Fu(e, n, r) {
	let { settings: i } = n,
		{ api: t = {} } = n,
		{ clone: l = [] } = n,
		{ hover: o = null } = n,
		{ label: a = null } = n,
		{ labels: u = [] } = n;
	function c() {
		const s = i.controls._plot;
		if (s) {
			const f = {};
			let p = [];
			typeof l == 'string' ? (p = [l]) : (p = [...l]);
			for (let h of p) Ne(f, h, No(s.query, h)), console.log('cloning', h);
			for (let [h, d] of Object.entries(t)) Ne(f, h, d);
			s.plotAPI(f);
		}
	}
	return (
		(e.$$set = (s) => {
			'settings' in s && r(2, (i = s.settings)),
				'api' in s && r(3, (t = s.api)),
				'clone' in s && r(4, (l = s.clone)),
				'hover' in s && r(5, (o = s.hover)),
				'label' in s && r(0, (a = s.label)),
				'labels' in s && r(6, (u = s.labels));
		}),
		[a, c, i, t, l, o, u]
	);
}
class ii extends J {
	constructor(n) {
		super(),
			$(this, n, Fu, Iu, ee, { settings: 2, api: 3, clone: 4, hover: 5, label: 0, labels: 6 });
	}
}
function ar(e, n, r) {
	const i = e.slice();
	return (i[9] = n[r]), i;
}
function ur(e) {
	let n, r;
	return (
		(n = new ii({
			props: { settings: e[0], api: e[9].api, clone: e[1], hover: e[2], label: e[9].label }
		})),
		{
			c() {
				se(n.$$.fragment);
			},
			l(i) {
				pe(n.$$.fragment, i);
			},
			m(i, t) {
				he(n, i, t), (r = !0);
			},
			p(i, t) {
				const l = {};
				t & 1 && (l.settings = i[0]),
					t & 2 && (l.clone = i[1]),
					t & 4 && (l.hover = i[2]),
					n.$set(l);
			},
			i(i) {
				r || (U(n.$$.fragment, i), (r = !0));
			},
			o(i) {
				G(n.$$.fragment, i), (r = !1);
			},
			d(i) {
				de(n, i);
			}
		}
	);
}
function ku(e) {
	let n,
		r,
		i,
		t,
		l,
		o = e[4],
		a = [];
	for (let c = 0; c < o.length; c += 1) a[c] = ur(ar(e, o, c));
	const u = (c) =>
		G(a[c], 1, 1, () => {
			a[c] = null;
		});
	return {
		c() {
			(n = S('h3')), (r = q(e[3])), (i = z()), (t = S('div'));
			for (let c = 0; c < a.length; c += 1) a[c].c();
			this.h();
		},
		l(c) {
			n = O(c, 'H3', {});
			var s = F(n);
			(r = V(s, e[3])), s.forEach(A), (i = W(c)), (t = O(c, 'DIV', { class: !0 }));
			var f = F(t);
			for (let p = 0; p < a.length; p += 1) a[p].l(f);
			f.forEach(A), this.h();
		},
		h() {
			E(t, 'class', 'buttons svelte-17hbzt4');
		},
		m(c, s) {
			P(c, n, s), x(n, r), P(c, i, s), P(c, t, s);
			for (let f = 0; f < a.length; f += 1) a[f].m(t, null);
			l = !0;
		},
		p(c, [s]) {
			if (((!l || s & 8) && ue(r, c[3]), s & 23)) {
				o = c[4];
				let f;
				for (f = 0; f < o.length; f += 1) {
					const p = ar(c, o, f);
					a[f]
						? (a[f].p(p, s), U(a[f], 1))
						: ((a[f] = ur(p)), a[f].c(), U(a[f], 1), a[f].m(t, null));
				}
				for (Sr(), f = o.length; f < a.length; f += 1) u(f);
				Or();
			}
		},
		i(c) {
			if (!l) {
				for (let s = 0; s < o.length; s += 1) U(a[s]);
				l = !0;
			}
		},
		o(c) {
			a = a.filter(Boolean);
			for (let s = 0; s < a.length; s += 1) G(a[s]);
			l = !1;
		},
		d(c) {
			c && A(n), c && A(i), c && A(t), Qi(a, c);
		}
	};
}
function Lu(e, n, r) {
	let { api: i = {} } = n,
		{ settings: t } = n,
		{ target: l } = n,
		{ pattern: o = '${value}' } = n,
		{ values: a = [] } = n,
		{ clone: u = [] } = n,
		{ hover: c = null } = n,
		{ label: s = null } = n;
	const f = [];
	for (let p of a) {
		const h = wu(i);
		Ne(h, l, o.replace('${value}', p)), f.push({ label: p, api: h });
	}
	return (
		(e.$$set = (p) => {
			'api' in p && r(5, (i = p.api)),
				'settings' in p && r(0, (t = p.settings)),
				'target' in p && r(6, (l = p.target)),
				'pattern' in p && r(7, (o = p.pattern)),
				'values' in p && r(8, (a = p.values)),
				'clone' in p && r(1, (u = p.clone)),
				'hover' in p && r(2, (c = p.hover)),
				'label' in p && r(3, (s = p.label));
		}),
		[t, u, c, s, f, i, l, o, a]
	);
}
class ju extends J {
	constructor(n) {
		super(),
			$(this, n, Lu, ku, ee, {
				api: 5,
				settings: 0,
				target: 6,
				pattern: 7,
				values: 8,
				clone: 1,
				hover: 2,
				label: 3
			});
	}
}
function Pu(e) {
	let n, r, i, t;
	r = new rt({ props: { settings: e[0], elems: e[5] } });
	let l = [{ id: e[3] }, { class: (i = 'chunk scroll-mt-36 ' + e[4].join(' ')) }, e[6]],
		o = {};
	for (let a = 0; a < l.length; a += 1) o = vn(o, l[a]);
	return {
		c() {
			(n = S('div')), se(r.$$.fragment), this.h();
		},
		l(a) {
			n = O(a, 'DIV', { id: !0, class: !0 });
			var u = F(n);
			pe(r.$$.fragment, u), u.forEach(A), this.h();
		},
		h() {
			Ge(n, o), R(n, 'active', e[2]), R(n, 'svelte-1bah4ga', !0);
		},
		m(a, u) {
			P(a, n, u), he(r, n, null), e[8](n), (t = !0);
		},
		p(a, [u]) {
			const c = {};
			u & 1 && (c.settings = a[0]),
				r.$set(c),
				Ge(n, (o = yn(l, [{ id: a[3] }, { class: i }, a[6]]))),
				R(n, 'active', a[2]),
				R(n, 'svelte-1bah4ga', !0);
		},
		i(a) {
			t || (U(r.$$.fragment, a), (t = !0));
		},
		o(a) {
			G(r.$$.fragment, a), (t = !1);
		},
		d(a) {
			a && A(n), de(r), e[8](null);
		}
	};
}
function Nu(e, n, r) {
	let i,
		{ data: t } = n,
		{ settings: l } = n;
	const [[o, a, u], c] = t,
		s = Object.fromEntries(u);
	let f;
	function p() {
		for (let d of c)
			d.t == 'CodeBlock' && d.c._scrollerly_apparatus && d.c._scrollerly_apparatus.run();
	}
	Ir(() => {
		const { observer: d } = l;
		if (d === void 0) throw new Error('observer is undefined');
		r(
			1,
			(f.enter = () => {
				r(2, (i = !0)), p();
			}),
			f
		),
			r(
				1,
				(f.exit = () => {
					r(2, (i = !1));
				}),
				f
			),
			d.observe(f);
	});
	function h(d) {
		Ke[d ? 'unshift' : 'push'](() => {
			(f = d), r(1, f);
		});
	}
	return (
		(e.$$set = (d) => {
			'data' in d && r(7, (t = d.data)), 'settings' in d && r(0, (l = d.settings));
		}),
		r(2, (i = !1)),
		[l, f, i, o, a, c, s, t, h]
	);
}
class Mu extends J {
	constructor(n) {
		super(), $(this, n, Nu, Pu, ee, { data: 7, settings: 0 });
	}
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */ function ti(e) {
	return typeof e > 'u' || e === null;
}
function Du(e) {
	return typeof e == 'object' && e !== null;
}
function Ru(e) {
	return Array.isArray(e) ? e : ti(e) ? [] : [e];
}
function Bu(e, n) {
	var r, i, t, l;
	if (n) for (l = Object.keys(n), r = 0, i = l.length; r < i; r += 1) (t = l[r]), (e[t] = n[t]);
	return e;
}
function Uu(e, n) {
	var r = '',
		i;
	for (i = 0; i < n; i += 1) r += e;
	return r;
}
function Yu(e) {
	return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
var Hu = ti,
	Gu = Du,
	Ku = Ru,
	qu = Uu,
	Vu = Yu,
	zu = Bu,
	L = { isNothing: Hu, isObject: Gu, toArray: Ku, repeat: qu, isNegativeZero: Vu, extend: zu };
function li(e, n) {
	var r = '',
		i = e.reason || '(unknown reason)';
	return e.mark
		? (e.mark.name && (r += 'in "' + e.mark.name + '" '),
		  (r += '(' + (e.mark.line + 1) + ':' + (e.mark.column + 1) + ')'),
		  !n &&
				e.mark.snippet &&
				(r +=
					`

` + e.mark.snippet),
		  i + ' ' + r)
		: i;
}
function Me(e, n) {
	Error.call(this),
		(this.name = 'YAMLException'),
		(this.reason = e),
		(this.mark = n),
		(this.message = li(this, !1)),
		Error.captureStackTrace
			? Error.captureStackTrace(this, this.constructor)
			: (this.stack = new Error().stack || '');
}
Me.prototype = Object.create(Error.prototype);
Me.prototype.constructor = Me;
Me.prototype.toString = function (n) {
	return this.name + ': ' + li(this, n);
};
var D = Me;
function on(e, n, r, i, t) {
	var l = '',
		o = '',
		a = Math.floor(t / 2) - 1;
	return (
		i - n > a && ((l = ' ... '), (n = i - a + l.length)),
		r - i > a && ((o = ' ...'), (r = i + a - o.length)),
		{ str: l + e.slice(n, r).replace(/\t/g, '→') + o, pos: i - n + l.length }
	);
}
function an(e, n) {
	return L.repeat(' ', n - e.length) + e;
}
function Wu(e, n) {
	if (((n = Object.create(n || null)), !e.buffer)) return null;
	n.maxLength || (n.maxLength = 79),
		typeof n.indent != 'number' && (n.indent = 1),
		typeof n.linesBefore != 'number' && (n.linesBefore = 3),
		typeof n.linesAfter != 'number' && (n.linesAfter = 2);
	for (var r = /\r?\n|\r|\0/g, i = [0], t = [], l, o = -1; (l = r.exec(e.buffer)); )
		t.push(l.index),
			i.push(l.index + l[0].length),
			e.position <= l.index && o < 0 && (o = i.length - 2);
	o < 0 && (o = i.length - 1);
	var a = '',
		u,
		c,
		s = Math.min(e.line + n.linesAfter, t.length).toString().length,
		f = n.maxLength - (n.indent + s + 3);
	for (u = 1; u <= n.linesBefore && !(o - u < 0); u++)
		(c = on(e.buffer, i[o - u], t[o - u], e.position - (i[o] - i[o - u]), f)),
			(a =
				L.repeat(' ', n.indent) +
				an((e.line - u + 1).toString(), s) +
				' | ' +
				c.str +
				`
` +
				a);
	for (
		c = on(e.buffer, i[o], t[o], e.position, f),
			a +=
				L.repeat(' ', n.indent) +
				an((e.line + 1).toString(), s) +
				' | ' +
				c.str +
				`
`,
			a +=
				L.repeat('-', n.indent + s + 3 + c.pos) +
				`^
`,
			u = 1;
		u <= n.linesAfter && !(o + u >= t.length);
		u++
	)
		(c = on(e.buffer, i[o + u], t[o + u], e.position - (i[o] - i[o + u]), f)),
			(a +=
				L.repeat(' ', n.indent) +
				an((e.line + u + 1).toString(), s) +
				' | ' +
				c.str +
				`
`);
	return a.replace(/\n$/, '');
}
var Xu = Wu,
	Qu = [
		'kind',
		'multi',
		'resolve',
		'construct',
		'instanceOf',
		'predicate',
		'represent',
		'representName',
		'defaultStyle',
		'styleAliases'
	],
	Zu = ['scalar', 'sequence', 'mapping'];
function Ju(e) {
	var n = {};
	return (
		e !== null &&
			Object.keys(e).forEach(function (r) {
				e[r].forEach(function (i) {
					n[String(i)] = r;
				});
			}),
		n
	);
}
function $u(e, n) {
	if (
		((n = n || {}),
		Object.keys(n).forEach(function (r) {
			if (Qu.indexOf(r) === -1)
				throw new D('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
		}),
		(this.options = n),
		(this.tag = e),
		(this.kind = n.kind || null),
		(this.resolve =
			n.resolve ||
			function () {
				return !0;
			}),
		(this.construct =
			n.construct ||
			function (r) {
				return r;
			}),
		(this.instanceOf = n.instanceOf || null),
		(this.predicate = n.predicate || null),
		(this.represent = n.represent || null),
		(this.representName = n.representName || null),
		(this.defaultStyle = n.defaultStyle || null),
		(this.multi = n.multi || !1),
		(this.styleAliases = Ju(n.styleAliases || null)),
		Zu.indexOf(this.kind) === -1)
	)
		throw new D('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var N = $u;
function cr(e, n) {
	var r = [];
	return (
		e[n].forEach(function (i) {
			var t = r.length;
			r.forEach(function (l, o) {
				l.tag === i.tag && l.kind === i.kind && l.multi === i.multi && (t = o);
			}),
				(r[t] = i);
		}),
		r
	);
}
function ec() {
	var e = {
			scalar: {},
			sequence: {},
			mapping: {},
			fallback: {},
			multi: { scalar: [], sequence: [], mapping: [], fallback: [] }
		},
		n,
		r;
	function i(t) {
		t.multi
			? (e.multi[t.kind].push(t), e.multi.fallback.push(t))
			: (e[t.kind][t.tag] = e.fallback[t.tag] = t);
	}
	for (n = 0, r = arguments.length; n < r; n += 1) arguments[n].forEach(i);
	return e;
}
function hn(e) {
	return this.extend(e);
}
hn.prototype.extend = function (n) {
	var r = [],
		i = [];
	if (n instanceof N) i.push(n);
	else if (Array.isArray(n)) i = i.concat(n);
	else if (n && (Array.isArray(n.implicit) || Array.isArray(n.explicit)))
		n.implicit && (r = r.concat(n.implicit)), n.explicit && (i = i.concat(n.explicit));
	else
		throw new D(
			'Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })'
		);
	r.forEach(function (l) {
		if (!(l instanceof N))
			throw new D(
				'Specified list of YAML types (or a single Type object) contains a non-Type object.'
			);
		if (l.loadKind && l.loadKind !== 'scalar')
			throw new D(
				'There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.'
			);
		if (l.multi)
			throw new D(
				'There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.'
			);
	}),
		i.forEach(function (l) {
			if (!(l instanceof N))
				throw new D(
					'Specified list of YAML types (or a single Type object) contains a non-Type object.'
				);
		});
	var t = Object.create(hn.prototype);
	return (
		(t.implicit = (this.implicit || []).concat(r)),
		(t.explicit = (this.explicit || []).concat(i)),
		(t.compiledImplicit = cr(t, 'implicit')),
		(t.compiledExplicit = cr(t, 'explicit')),
		(t.compiledTypeMap = ec(t.compiledImplicit, t.compiledExplicit)),
		t
	);
};
var oi = hn,
	ai = new N('tag:yaml.org,2002:str', {
		kind: 'scalar',
		construct: function (e) {
			return e !== null ? e : '';
		}
	}),
	ui = new N('tag:yaml.org,2002:seq', {
		kind: 'sequence',
		construct: function (e) {
			return e !== null ? e : [];
		}
	}),
	ci = new N('tag:yaml.org,2002:map', {
		kind: 'mapping',
		construct: function (e) {
			return e !== null ? e : {};
		}
	}),
	fi = new oi({ explicit: [ai, ui, ci] });
function nc(e) {
	if (e === null) return !0;
	var n = e.length;
	return (n === 1 && e === '~') || (n === 4 && (e === 'null' || e === 'Null' || e === 'NULL'));
}
function rc() {
	return null;
}
function ic(e) {
	return e === null;
}
var si = new N('tag:yaml.org,2002:null', {
	kind: 'scalar',
	resolve: nc,
	construct: rc,
	predicate: ic,
	represent: {
		canonical: function () {
			return '~';
		},
		lowercase: function () {
			return 'null';
		},
		uppercase: function () {
			return 'NULL';
		},
		camelcase: function () {
			return 'Null';
		},
		empty: function () {
			return '';
		}
	},
	defaultStyle: 'lowercase'
});
function tc(e) {
	if (e === null) return !1;
	var n = e.length;
	return (
		(n === 4 && (e === 'true' || e === 'True' || e === 'TRUE')) ||
		(n === 5 && (e === 'false' || e === 'False' || e === 'FALSE'))
	);
}
function lc(e) {
	return e === 'true' || e === 'True' || e === 'TRUE';
}
function oc(e) {
	return Object.prototype.toString.call(e) === '[object Boolean]';
}
var pi = new N('tag:yaml.org,2002:bool', {
	kind: 'scalar',
	resolve: tc,
	construct: lc,
	predicate: oc,
	represent: {
		lowercase: function (e) {
			return e ? 'true' : 'false';
		},
		uppercase: function (e) {
			return e ? 'TRUE' : 'FALSE';
		},
		camelcase: function (e) {
			return e ? 'True' : 'False';
		}
	},
	defaultStyle: 'lowercase'
});
function ac(e) {
	return (48 <= e && e <= 57) || (65 <= e && e <= 70) || (97 <= e && e <= 102);
}
function uc(e) {
	return 48 <= e && e <= 55;
}
function cc(e) {
	return 48 <= e && e <= 57;
}
function fc(e) {
	if (e === null) return !1;
	var n = e.length,
		r = 0,
		i = !1,
		t;
	if (!n) return !1;
	if (((t = e[r]), (t === '-' || t === '+') && (t = e[++r]), t === '0')) {
		if (r + 1 === n) return !0;
		if (((t = e[++r]), t === 'b')) {
			for (r++; r < n; r++)
				if (((t = e[r]), t !== '_')) {
					if (t !== '0' && t !== '1') return !1;
					i = !0;
				}
			return i && t !== '_';
		}
		if (t === 'x') {
			for (r++; r < n; r++)
				if (((t = e[r]), t !== '_')) {
					if (!ac(e.charCodeAt(r))) return !1;
					i = !0;
				}
			return i && t !== '_';
		}
		if (t === 'o') {
			for (r++; r < n; r++)
				if (((t = e[r]), t !== '_')) {
					if (!uc(e.charCodeAt(r))) return !1;
					i = !0;
				}
			return i && t !== '_';
		}
	}
	if (t === '_') return !1;
	for (; r < n; r++)
		if (((t = e[r]), t !== '_')) {
			if (!cc(e.charCodeAt(r))) return !1;
			i = !0;
		}
	return !(!i || t === '_');
}
function sc(e) {
	var n = e,
		r = 1,
		i;
	if (
		(n.indexOf('_') !== -1 && (n = n.replace(/_/g, '')),
		(i = n[0]),
		(i === '-' || i === '+') && (i === '-' && (r = -1), (n = n.slice(1)), (i = n[0])),
		n === '0')
	)
		return 0;
	if (i === '0') {
		if (n[1] === 'b') return r * parseInt(n.slice(2), 2);
		if (n[1] === 'x') return r * parseInt(n.slice(2), 16);
		if (n[1] === 'o') return r * parseInt(n.slice(2), 8);
	}
	return r * parseInt(n, 10);
}
function pc(e) {
	return (
		Object.prototype.toString.call(e) === '[object Number]' && e % 1 === 0 && !L.isNegativeZero(e)
	);
}
var hi = new N('tag:yaml.org,2002:int', {
		kind: 'scalar',
		resolve: fc,
		construct: sc,
		predicate: pc,
		represent: {
			binary: function (e) {
				return e >= 0 ? '0b' + e.toString(2) : '-0b' + e.toString(2).slice(1);
			},
			octal: function (e) {
				return e >= 0 ? '0o' + e.toString(8) : '-0o' + e.toString(8).slice(1);
			},
			decimal: function (e) {
				return e.toString(10);
			},
			hexadecimal: function (e) {
				return e >= 0
					? '0x' + e.toString(16).toUpperCase()
					: '-0x' + e.toString(16).toUpperCase().slice(1);
			}
		},
		defaultStyle: 'decimal',
		styleAliases: {
			binary: [2, 'bin'],
			octal: [8, 'oct'],
			decimal: [10, 'dec'],
			hexadecimal: [16, 'hex']
		}
	}),
	hc = new RegExp(
		'^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$'
	);
function dc(e) {
	return !(e === null || !hc.test(e) || e[e.length - 1] === '_');
}
function gc(e) {
	var n, r;
	return (
		(n = e.replace(/_/g, '').toLowerCase()),
		(r = n[0] === '-' ? -1 : 1),
		'+-'.indexOf(n[0]) >= 0 && (n = n.slice(1)),
		n === '.inf'
			? r === 1
				? Number.POSITIVE_INFINITY
				: Number.NEGATIVE_INFINITY
			: n === '.nan'
			? NaN
			: r * parseFloat(n, 10)
	);
}
var mc = /^[-+]?[0-9]+e/;
function _c(e, n) {
	var r;
	if (isNaN(e))
		switch (n) {
			case 'lowercase':
				return '.nan';
			case 'uppercase':
				return '.NAN';
			case 'camelcase':
				return '.NaN';
		}
	else if (Number.POSITIVE_INFINITY === e)
		switch (n) {
			case 'lowercase':
				return '.inf';
			case 'uppercase':
				return '.INF';
			case 'camelcase':
				return '.Inf';
		}
	else if (Number.NEGATIVE_INFINITY === e)
		switch (n) {
			case 'lowercase':
				return '-.inf';
			case 'uppercase':
				return '-.INF';
			case 'camelcase':
				return '-.Inf';
		}
	else if (L.isNegativeZero(e)) return '-0.0';
	return (r = e.toString(10)), mc.test(r) ? r.replace('e', '.e') : r;
}
function vc(e) {
	return (
		Object.prototype.toString.call(e) === '[object Number]' && (e % 1 !== 0 || L.isNegativeZero(e))
	);
}
var di = new N('tag:yaml.org,2002:float', {
		kind: 'scalar',
		resolve: dc,
		construct: gc,
		predicate: vc,
		represent: _c,
		defaultStyle: 'lowercase'
	}),
	gi = fi.extend({ implicit: [si, pi, hi, di] }),
	mi = gi,
	_i = new RegExp('^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$'),
	vi = new RegExp(
		'^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$'
	);
function yc(e) {
	return e === null ? !1 : _i.exec(e) !== null || vi.exec(e) !== null;
}
function bc(e) {
	var n,
		r,
		i,
		t,
		l,
		o,
		a,
		u = 0,
		c = null,
		s,
		f,
		p;
	if (((n = _i.exec(e)), n === null && (n = vi.exec(e)), n === null))
		throw new Error('Date resolve error');
	if (((r = +n[1]), (i = +n[2] - 1), (t = +n[3]), !n[4])) return new Date(Date.UTC(r, i, t));
	if (((l = +n[4]), (o = +n[5]), (a = +n[6]), n[7])) {
		for (u = n[7].slice(0, 3); u.length < 3; ) u += '0';
		u = +u;
	}
	return (
		n[9] && ((s = +n[10]), (f = +(n[11] || 0)), (c = (s * 60 + f) * 6e4), n[9] === '-' && (c = -c)),
		(p = new Date(Date.UTC(r, i, t, l, o, a, u))),
		c && p.setTime(p.getTime() - c),
		p
	);
}
function Ac(e) {
	return e.toISOString();
}
var yi = new N('tag:yaml.org,2002:timestamp', {
	kind: 'scalar',
	resolve: yc,
	construct: bc,
	instanceOf: Date,
	represent: Ac
});
function xc(e) {
	return e === '<<' || e === null;
}
var bi = new N('tag:yaml.org,2002:merge', { kind: 'scalar', resolve: xc }),
	Fn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Tc(e) {
	if (e === null) return !1;
	var n,
		r,
		i = 0,
		t = e.length,
		l = Fn;
	for (r = 0; r < t; r++)
		if (((n = l.indexOf(e.charAt(r))), !(n > 64))) {
			if (n < 0) return !1;
			i += 6;
		}
	return i % 8 === 0;
}
function wc(e) {
	var n,
		r,
		i = e.replace(/[\r\n=]/g, ''),
		t = i.length,
		l = Fn,
		o = 0,
		a = [];
	for (n = 0; n < t; n++)
		n % 4 === 0 && n && (a.push((o >> 16) & 255), a.push((o >> 8) & 255), a.push(o & 255)),
			(o = (o << 6) | l.indexOf(i.charAt(n)));
	return (
		(r = (t % 4) * 6),
		r === 0
			? (a.push((o >> 16) & 255), a.push((o >> 8) & 255), a.push(o & 255))
			: r === 18
			? (a.push((o >> 10) & 255), a.push((o >> 2) & 255))
			: r === 12 && a.push((o >> 4) & 255),
		new Uint8Array(a)
	);
}
function Cc(e) {
	var n = '',
		r = 0,
		i,
		t,
		l = e.length,
		o = Fn;
	for (i = 0; i < l; i++)
		i % 3 === 0 &&
			i &&
			((n += o[(r >> 18) & 63]),
			(n += o[(r >> 12) & 63]),
			(n += o[(r >> 6) & 63]),
			(n += o[r & 63])),
			(r = (r << 8) + e[i]);
	return (
		(t = l % 3),
		t === 0
			? ((n += o[(r >> 18) & 63]),
			  (n += o[(r >> 12) & 63]),
			  (n += o[(r >> 6) & 63]),
			  (n += o[r & 63]))
			: t === 2
			? ((n += o[(r >> 10) & 63]), (n += o[(r >> 4) & 63]), (n += o[(r << 2) & 63]), (n += o[64]))
			: t === 1 && ((n += o[(r >> 2) & 63]), (n += o[(r << 4) & 63]), (n += o[64]), (n += o[64])),
		n
	);
}
function Ec(e) {
	return Object.prototype.toString.call(e) === '[object Uint8Array]';
}
var Ai = new N('tag:yaml.org,2002:binary', {
		kind: 'scalar',
		resolve: Tc,
		construct: wc,
		predicate: Ec,
		represent: Cc
	}),
	Sc = Object.prototype.hasOwnProperty,
	Oc = Object.prototype.toString;
function Ic(e) {
	if (e === null) return !0;
	var n = [],
		r,
		i,
		t,
		l,
		o,
		a = e;
	for (r = 0, i = a.length; r < i; r += 1) {
		if (((t = a[r]), (o = !1), Oc.call(t) !== '[object Object]')) return !1;
		for (l in t)
			if (Sc.call(t, l))
				if (!o) o = !0;
				else return !1;
		if (!o) return !1;
		if (n.indexOf(l) === -1) n.push(l);
		else return !1;
	}
	return !0;
}
function Fc(e) {
	return e !== null ? e : [];
}
var xi = new N('tag:yaml.org,2002:omap', { kind: 'sequence', resolve: Ic, construct: Fc }),
	kc = Object.prototype.toString;
function Lc(e) {
	if (e === null) return !0;
	var n,
		r,
		i,
		t,
		l,
		o = e;
	for (l = new Array(o.length), n = 0, r = o.length; n < r; n += 1) {
		if (((i = o[n]), kc.call(i) !== '[object Object]' || ((t = Object.keys(i)), t.length !== 1)))
			return !1;
		l[n] = [t[0], i[t[0]]];
	}
	return !0;
}
function jc(e) {
	if (e === null) return [];
	var n,
		r,
		i,
		t,
		l,
		o = e;
	for (l = new Array(o.length), n = 0, r = o.length; n < r; n += 1)
		(i = o[n]), (t = Object.keys(i)), (l[n] = [t[0], i[t[0]]]);
	return l;
}
var Ti = new N('tag:yaml.org,2002:pairs', { kind: 'sequence', resolve: Lc, construct: jc }),
	Pc = Object.prototype.hasOwnProperty;
function Nc(e) {
	if (e === null) return !0;
	var n,
		r = e;
	for (n in r) if (Pc.call(r, n) && r[n] !== null) return !1;
	return !0;
}
function Mc(e) {
	return e !== null ? e : {};
}
var wi = new N('tag:yaml.org,2002:set', { kind: 'mapping', resolve: Nc, construct: Mc }),
	kn = mi.extend({ implicit: [yi, bi], explicit: [Ai, xi, Ti, wi] }),
	te = Object.prototype.hasOwnProperty,
	Ve = 1,
	Ci = 2,
	Ei = 3,
	ze = 4,
	un = 1,
	Dc = 2,
	fr = 3,
	Rc =
		/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
	Bc = /[\x85\u2028\u2029]/,
	Uc = /[,\[\]\{\}]/,
	Si = /^(?:!|!!|![a-z\-]+!)$/i,
	Oi = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function sr(e) {
	return Object.prototype.toString.call(e);
}
function X(e) {
	return e === 10 || e === 13;
}
function ae(e) {
	return e === 9 || e === 32;
}
function B(e) {
	return e === 9 || e === 32 || e === 10 || e === 13;
}
function Ae(e) {
	return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Yc(e) {
	var n;
	return 48 <= e && e <= 57 ? e - 48 : ((n = e | 32), 97 <= n && n <= 102 ? n - 97 + 10 : -1);
}
function Hc(e) {
	return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function Gc(e) {
	return 48 <= e && e <= 57 ? e - 48 : -1;
}
function pr(e) {
	return e === 48
		? '\0'
		: e === 97
		? '\x07'
		: e === 98
		? '\b'
		: e === 116 || e === 9
		? '	'
		: e === 110
		? `
`
		: e === 118
		? '\v'
		: e === 102
		? '\f'
		: e === 114
		? '\r'
		: e === 101
		? '\x1B'
		: e === 32
		? ' '
		: e === 34
		? '"'
		: e === 47
		? '/'
		: e === 92
		? '\\'
		: e === 78
		? ''
		: e === 95
		? ' '
		: e === 76
		? '\u2028'
		: e === 80
		? '\u2029'
		: '';
}
function Kc(e) {
	return e <= 65535
		? String.fromCharCode(e)
		: String.fromCharCode(((e - 65536) >> 10) + 55296, ((e - 65536) & 1023) + 56320);
}
var Ii = new Array(256),
	Fi = new Array(256);
for (var ye = 0; ye < 256; ye++) (Ii[ye] = pr(ye) ? 1 : 0), (Fi[ye] = pr(ye));
function qc(e, n) {
	(this.input = e),
		(this.filename = n.filename || null),
		(this.schema = n.schema || kn),
		(this.onWarning = n.onWarning || null),
		(this.legacy = n.legacy || !1),
		(this.json = n.json || !1),
		(this.listener = n.listener || null),
		(this.implicitTypes = this.schema.compiledImplicit),
		(this.typeMap = this.schema.compiledTypeMap),
		(this.length = e.length),
		(this.position = 0),
		(this.line = 0),
		(this.lineStart = 0),
		(this.lineIndent = 0),
		(this.firstTabInLine = -1),
		(this.documents = []);
}
function ki(e, n) {
	var r = {
		name: e.filename,
		buffer: e.input.slice(0, -1),
		position: e.position,
		line: e.line,
		column: e.position - e.lineStart
	};
	return (r.snippet = Xu(r)), new D(n, r);
}
function m(e, n) {
	throw ki(e, n);
}
function We(e, n) {
	e.onWarning && e.onWarning.call(null, ki(e, n));
}
var hr = {
	YAML: function (n, r, i) {
		var t, l, o;
		n.version !== null && m(n, 'duplication of %YAML directive'),
			i.length !== 1 && m(n, 'YAML directive accepts exactly one argument'),
			(t = /^([0-9]+)\.([0-9]+)$/.exec(i[0])),
			t === null && m(n, 'ill-formed argument of the YAML directive'),
			(l = parseInt(t[1], 10)),
			(o = parseInt(t[2], 10)),
			l !== 1 && m(n, 'unacceptable YAML version of the document'),
			(n.version = i[0]),
			(n.checkLineBreaks = o < 2),
			o !== 1 && o !== 2 && We(n, 'unsupported YAML version of the document');
	},
	TAG: function (n, r, i) {
		var t, l;
		i.length !== 2 && m(n, 'TAG directive accepts exactly two arguments'),
			(t = i[0]),
			(l = i[1]),
			Si.test(t) || m(n, 'ill-formed tag handle (first argument) of the TAG directive'),
			te.call(n.tagMap, t) &&
				m(n, 'there is a previously declared suffix for "' + t + '" tag handle'),
			Oi.test(l) || m(n, 'ill-formed tag prefix (second argument) of the TAG directive');
		try {
			l = decodeURIComponent(l);
		} catch {
			m(n, 'tag prefix is malformed: ' + l);
		}
		n.tagMap[t] = l;
	}
};
function re(e, n, r, i) {
	var t, l, o, a;
	if (n < r) {
		if (((a = e.input.slice(n, r)), i))
			for (t = 0, l = a.length; t < l; t += 1)
				(o = a.charCodeAt(t)),
					o === 9 || (32 <= o && o <= 1114111) || m(e, 'expected valid JSON character');
		else Rc.test(a) && m(e, 'the stream contains non-printable characters');
		e.result += a;
	}
}
function dr(e, n, r, i) {
	var t, l, o, a;
	for (
		L.isObject(r) || m(e, 'cannot merge mappings; the provided source object is unacceptable'),
			t = Object.keys(r),
			o = 0,
			a = t.length;
		o < a;
		o += 1
	)
		(l = t[o]), te.call(n, l) || ((n[l] = r[l]), (i[l] = !0));
}
function xe(e, n, r, i, t, l, o, a, u) {
	var c, s;
	if (Array.isArray(t))
		for (t = Array.prototype.slice.call(t), c = 0, s = t.length; c < s; c += 1)
			Array.isArray(t[c]) && m(e, 'nested arrays are not supported inside keys'),
				typeof t == 'object' && sr(t[c]) === '[object Object]' && (t[c] = '[object Object]');
	if (
		(typeof t == 'object' && sr(t) === '[object Object]' && (t = '[object Object]'),
		(t = String(t)),
		n === null && (n = {}),
		i === 'tag:yaml.org,2002:merge')
	)
		if (Array.isArray(l)) for (c = 0, s = l.length; c < s; c += 1) dr(e, n, l[c], r);
		else dr(e, n, l, r);
	else
		!e.json &&
			!te.call(r, t) &&
			te.call(n, t) &&
			((e.line = o || e.line),
			(e.lineStart = a || e.lineStart),
			(e.position = u || e.position),
			m(e, 'duplicated mapping key')),
			t === '__proto__'
				? Object.defineProperty(n, t, { configurable: !0, enumerable: !0, writable: !0, value: l })
				: (n[t] = l),
			delete r[t];
	return n;
}
function Ln(e) {
	var n;
	(n = e.input.charCodeAt(e.position)),
		n === 10
			? e.position++
			: n === 13
			? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++)
			: m(e, 'a line break is expected'),
		(e.line += 1),
		(e.lineStart = e.position),
		(e.firstTabInLine = -1);
}
function k(e, n, r) {
	for (var i = 0, t = e.input.charCodeAt(e.position); t !== 0; ) {
		for (; ae(t); )
			t === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position),
				(t = e.input.charCodeAt(++e.position));
		if (n && t === 35)
			do t = e.input.charCodeAt(++e.position);
			while (t !== 10 && t !== 13 && t !== 0);
		if (X(t))
			for (Ln(e), t = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; t === 32; )
				e.lineIndent++, (t = e.input.charCodeAt(++e.position));
		else break;
	}
	return r !== -1 && i !== 0 && e.lineIndent < r && We(e, 'deficient indentation'), i;
}
function nn(e) {
	var n = e.position,
		r;
	return (
		(r = e.input.charCodeAt(n)),
		!!(
			(r === 45 || r === 46) &&
			r === e.input.charCodeAt(n + 1) &&
			r === e.input.charCodeAt(n + 2) &&
			((n += 3), (r = e.input.charCodeAt(n)), r === 0 || B(r))
		)
	);
}
function jn(e, n) {
	n === 1
		? (e.result += ' ')
		: n > 1 &&
		  (e.result += L.repeat(
				`
`,
				n - 1
		  ));
}
function Vc(e, n, r) {
	var i,
		t,
		l,
		o,
		a,
		u,
		c,
		s,
		f = e.kind,
		p = e.result,
		h;
	if (
		((h = e.input.charCodeAt(e.position)),
		B(h) ||
			Ae(h) ||
			h === 35 ||
			h === 38 ||
			h === 42 ||
			h === 33 ||
			h === 124 ||
			h === 62 ||
			h === 39 ||
			h === 34 ||
			h === 37 ||
			h === 64 ||
			h === 96 ||
			((h === 63 || h === 45) && ((t = e.input.charCodeAt(e.position + 1)), B(t) || (r && Ae(t)))))
	)
		return !1;
	for (e.kind = 'scalar', e.result = '', l = o = e.position, a = !1; h !== 0; ) {
		if (h === 58) {
			if (((t = e.input.charCodeAt(e.position + 1)), B(t) || (r && Ae(t)))) break;
		} else if (h === 35) {
			if (((i = e.input.charCodeAt(e.position - 1)), B(i))) break;
		} else {
			if ((e.position === e.lineStart && nn(e)) || (r && Ae(h))) break;
			if (X(h))
				if (
					((u = e.line), (c = e.lineStart), (s = e.lineIndent), k(e, !1, -1), e.lineIndent >= n)
				) {
					(a = !0), (h = e.input.charCodeAt(e.position));
					continue;
				} else {
					(e.position = o), (e.line = u), (e.lineStart = c), (e.lineIndent = s);
					break;
				}
		}
		a && (re(e, l, o, !1), jn(e, e.line - u), (l = o = e.position), (a = !1)),
			ae(h) || (o = e.position + 1),
			(h = e.input.charCodeAt(++e.position));
	}
	return re(e, l, o, !1), e.result ? !0 : ((e.kind = f), (e.result = p), !1);
}
function zc(e, n) {
	var r, i, t;
	if (((r = e.input.charCodeAt(e.position)), r !== 39)) return !1;
	for (
		e.kind = 'scalar', e.result = '', e.position++, i = t = e.position;
		(r = e.input.charCodeAt(e.position)) !== 0;

	)
		if (r === 39)
			if ((re(e, i, e.position, !0), (r = e.input.charCodeAt(++e.position)), r === 39))
				(i = e.position), e.position++, (t = e.position);
			else return !0;
		else
			X(r)
				? (re(e, i, t, !0), jn(e, k(e, !1, n)), (i = t = e.position))
				: e.position === e.lineStart && nn(e)
				? m(e, 'unexpected end of the document within a single quoted scalar')
				: (e.position++, (t = e.position));
	m(e, 'unexpected end of the stream within a single quoted scalar');
}
function Wc(e, n) {
	var r, i, t, l, o, a;
	if (((a = e.input.charCodeAt(e.position)), a !== 34)) return !1;
	for (
		e.kind = 'scalar', e.result = '', e.position++, r = i = e.position;
		(a = e.input.charCodeAt(e.position)) !== 0;

	) {
		if (a === 34) return re(e, r, e.position, !0), e.position++, !0;
		if (a === 92) {
			if ((re(e, r, e.position, !0), (a = e.input.charCodeAt(++e.position)), X(a))) k(e, !1, n);
			else if (a < 256 && Ii[a]) (e.result += Fi[a]), e.position++;
			else if ((o = Hc(a)) > 0) {
				for (t = o, l = 0; t > 0; t--)
					(a = e.input.charCodeAt(++e.position)),
						(o = Yc(a)) >= 0 ? (l = (l << 4) + o) : m(e, 'expected hexadecimal character');
				(e.result += Kc(l)), e.position++;
			} else m(e, 'unknown escape sequence');
			r = i = e.position;
		} else
			X(a)
				? (re(e, r, i, !0), jn(e, k(e, !1, n)), (r = i = e.position))
				: e.position === e.lineStart && nn(e)
				? m(e, 'unexpected end of the document within a double quoted scalar')
				: (e.position++, (i = e.position));
	}
	m(e, 'unexpected end of the stream within a double quoted scalar');
}
function Xc(e, n) {
	var r = !0,
		i,
		t,
		l,
		o = e.tag,
		a,
		u = e.anchor,
		c,
		s,
		f,
		p,
		h,
		d = Object.create(null),
		g,
		_,
		b,
		v;
	if (((v = e.input.charCodeAt(e.position)), v === 91)) (s = 93), (h = !1), (a = []);
	else if (v === 123) (s = 125), (h = !0), (a = {});
	else return !1;
	for (
		e.anchor !== null && (e.anchorMap[e.anchor] = a), v = e.input.charCodeAt(++e.position);
		v !== 0;

	) {
		if ((k(e, !0, n), (v = e.input.charCodeAt(e.position)), v === s))
			return (
				e.position++,
				(e.tag = o),
				(e.anchor = u),
				(e.kind = h ? 'mapping' : 'sequence'),
				(e.result = a),
				!0
			);
		r
			? v === 44 && m(e, "expected the node content, but found ','")
			: m(e, 'missed comma between flow collection entries'),
			(_ = g = b = null),
			(f = p = !1),
			v === 63 &&
				((c = e.input.charCodeAt(e.position + 1)),
				B(c) && ((f = p = !0), e.position++, k(e, !0, n))),
			(i = e.line),
			(t = e.lineStart),
			(l = e.position),
			Ce(e, n, Ve, !1, !0),
			(_ = e.tag),
			(g = e.result),
			k(e, !0, n),
			(v = e.input.charCodeAt(e.position)),
			(p || e.line === i) &&
				v === 58 &&
				((f = !0),
				(v = e.input.charCodeAt(++e.position)),
				k(e, !0, n),
				Ce(e, n, Ve, !1, !0),
				(b = e.result)),
			h ? xe(e, a, d, _, g, b, i, t, l) : f ? a.push(xe(e, null, d, _, g, b, i, t, l)) : a.push(g),
			k(e, !0, n),
			(v = e.input.charCodeAt(e.position)),
			v === 44 ? ((r = !0), (v = e.input.charCodeAt(++e.position))) : (r = !1);
	}
	m(e, 'unexpected end of the stream within a flow collection');
}
function Qc(e, n) {
	var r,
		i,
		t = un,
		l = !1,
		o = !1,
		a = n,
		u = 0,
		c = !1,
		s,
		f;
	if (((f = e.input.charCodeAt(e.position)), f === 124)) i = !1;
	else if (f === 62) i = !0;
	else return !1;
	for (e.kind = 'scalar', e.result = ''; f !== 0; )
		if (((f = e.input.charCodeAt(++e.position)), f === 43 || f === 45))
			un === t ? (t = f === 43 ? fr : Dc) : m(e, 'repeat of a chomping mode identifier');
		else if ((s = Gc(f)) >= 0)
			s === 0
				? m(e, 'bad explicit indentation width of a block scalar; it cannot be less than one')
				: o
				? m(e, 'repeat of an indentation width identifier')
				: ((a = n + s - 1), (o = !0));
		else break;
	if (ae(f)) {
		do f = e.input.charCodeAt(++e.position);
		while (ae(f));
		if (f === 35)
			do f = e.input.charCodeAt(++e.position);
			while (!X(f) && f !== 0);
	}
	for (; f !== 0; ) {
		for (
			Ln(e), e.lineIndent = 0, f = e.input.charCodeAt(e.position);
			(!o || e.lineIndent < a) && f === 32;

		)
			e.lineIndent++, (f = e.input.charCodeAt(++e.position));
		if ((!o && e.lineIndent > a && (a = e.lineIndent), X(f))) {
			u++;
			continue;
		}
		if (e.lineIndent < a) {
			t === fr
				? (e.result += L.repeat(
						`
`,
						l ? 1 + u : u
				  ))
				: t === un &&
				  l &&
				  (e.result += `
`);
			break;
		}
		for (
			i
				? ae(f)
					? ((c = !0),
					  (e.result += L.repeat(
							`
`,
							l ? 1 + u : u
					  )))
					: c
					? ((c = !1),
					  (e.result += L.repeat(
							`
`,
							u + 1
					  )))
					: u === 0
					? l && (e.result += ' ')
					: (e.result += L.repeat(
							`
`,
							u
					  ))
				: (e.result += L.repeat(
						`
`,
						l ? 1 + u : u
				  )),
				l = !0,
				o = !0,
				u = 0,
				r = e.position;
			!X(f) && f !== 0;

		)
			f = e.input.charCodeAt(++e.position);
		re(e, r, e.position, !1);
	}
	return !0;
}
function gr(e, n) {
	var r,
		i = e.tag,
		t = e.anchor,
		l = [],
		o,
		a = !1,
		u;
	if (e.firstTabInLine !== -1) return !1;
	for (
		e.anchor !== null && (e.anchorMap[e.anchor] = l), u = e.input.charCodeAt(e.position);
		u !== 0 &&
		(e.firstTabInLine !== -1 &&
			((e.position = e.firstTabInLine), m(e, 'tab characters must not be used in indentation')),
		!(u !== 45 || ((o = e.input.charCodeAt(e.position + 1)), !B(o))));

	) {
		if (((a = !0), e.position++, k(e, !0, -1) && e.lineIndent <= n)) {
			l.push(null), (u = e.input.charCodeAt(e.position));
			continue;
		}
		if (
			((r = e.line),
			Ce(e, n, Ei, !1, !0),
			l.push(e.result),
			k(e, !0, -1),
			(u = e.input.charCodeAt(e.position)),
			(e.line === r || e.lineIndent > n) && u !== 0)
		)
			m(e, 'bad indentation of a sequence entry');
		else if (e.lineIndent < n) break;
	}
	return a ? ((e.tag = i), (e.anchor = t), (e.kind = 'sequence'), (e.result = l), !0) : !1;
}
function Zc(e, n, r) {
	var i,
		t,
		l,
		o,
		a,
		u,
		c = e.tag,
		s = e.anchor,
		f = {},
		p = Object.create(null),
		h = null,
		d = null,
		g = null,
		_ = !1,
		b = !1,
		v;
	if (e.firstTabInLine !== -1) return !1;
	for (
		e.anchor !== null && (e.anchorMap[e.anchor] = f), v = e.input.charCodeAt(e.position);
		v !== 0;

	) {
		if (
			(!_ &&
				e.firstTabInLine !== -1 &&
				((e.position = e.firstTabInLine), m(e, 'tab characters must not be used in indentation')),
			(i = e.input.charCodeAt(e.position + 1)),
			(l = e.line),
			(v === 63 || v === 58) && B(i))
		)
			v === 63
				? (_ && (xe(e, f, p, h, d, null, o, a, u), (h = d = g = null)),
				  (b = !0),
				  (_ = !0),
				  (t = !0))
				: _
				? ((_ = !1), (t = !0))
				: m(
						e,
						'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line'
				  ),
				(e.position += 1),
				(v = i);
		else {
			if (((o = e.line), (a = e.lineStart), (u = e.position), !Ce(e, r, Ci, !1, !0))) break;
			if (e.line === l) {
				for (v = e.input.charCodeAt(e.position); ae(v); ) v = e.input.charCodeAt(++e.position);
				if (v === 58)
					(v = e.input.charCodeAt(++e.position)),
						B(v) ||
							m(
								e,
								'a whitespace character is expected after the key-value separator within a block mapping'
							),
						_ && (xe(e, f, p, h, d, null, o, a, u), (h = d = g = null)),
						(b = !0),
						(_ = !1),
						(t = !1),
						(h = e.tag),
						(d = e.result);
				else if (b) m(e, 'can not read an implicit mapping pair; a colon is missed');
				else return (e.tag = c), (e.anchor = s), !0;
			} else if (b)
				m(e, 'can not read a block mapping entry; a multiline key may not be an implicit key');
			else return (e.tag = c), (e.anchor = s), !0;
		}
		if (
			((e.line === l || e.lineIndent > n) &&
				(_ && ((o = e.line), (a = e.lineStart), (u = e.position)),
				Ce(e, n, ze, !0, t) && (_ ? (d = e.result) : (g = e.result)),
				_ || (xe(e, f, p, h, d, g, o, a, u), (h = d = g = null)),
				k(e, !0, -1),
				(v = e.input.charCodeAt(e.position))),
			(e.line === l || e.lineIndent > n) && v !== 0)
		)
			m(e, 'bad indentation of a mapping entry');
		else if (e.lineIndent < n) break;
	}
	return (
		_ && xe(e, f, p, h, d, null, o, a, u),
		b && ((e.tag = c), (e.anchor = s), (e.kind = 'mapping'), (e.result = f)),
		b
	);
}
function Jc(e) {
	var n,
		r = !1,
		i = !1,
		t,
		l,
		o;
	if (((o = e.input.charCodeAt(e.position)), o !== 33)) return !1;
	if (
		(e.tag !== null && m(e, 'duplication of a tag property'),
		(o = e.input.charCodeAt(++e.position)),
		o === 60
			? ((r = !0), (o = e.input.charCodeAt(++e.position)))
			: o === 33
			? ((i = !0), (t = '!!'), (o = e.input.charCodeAt(++e.position)))
			: (t = '!'),
		(n = e.position),
		r)
	) {
		do o = e.input.charCodeAt(++e.position);
		while (o !== 0 && o !== 62);
		e.position < e.length
			? ((l = e.input.slice(n, e.position)), (o = e.input.charCodeAt(++e.position)))
			: m(e, 'unexpected end of the stream within a verbatim tag');
	} else {
		for (; o !== 0 && !B(o); )
			o === 33 &&
				(i
					? m(e, 'tag suffix cannot contain exclamation marks')
					: ((t = e.input.slice(n - 1, e.position + 1)),
					  Si.test(t) || m(e, 'named tag handle cannot contain such characters'),
					  (i = !0),
					  (n = e.position + 1))),
				(o = e.input.charCodeAt(++e.position));
		(l = e.input.slice(n, e.position)),
			Uc.test(l) && m(e, 'tag suffix cannot contain flow indicator characters');
	}
	l && !Oi.test(l) && m(e, 'tag name cannot contain such characters: ' + l);
	try {
		l = decodeURIComponent(l);
	} catch {
		m(e, 'tag name is malformed: ' + l);
	}
	return (
		r
			? (e.tag = l)
			: te.call(e.tagMap, t)
			? (e.tag = e.tagMap[t] + l)
			: t === '!'
			? (e.tag = '!' + l)
			: t === '!!'
			? (e.tag = 'tag:yaml.org,2002:' + l)
			: m(e, 'undeclared tag handle "' + t + '"'),
		!0
	);
}
function $c(e) {
	var n, r;
	if (((r = e.input.charCodeAt(e.position)), r !== 38)) return !1;
	for (
		e.anchor !== null && m(e, 'duplication of an anchor property'),
			r = e.input.charCodeAt(++e.position),
			n = e.position;
		r !== 0 && !B(r) && !Ae(r);

	)
		r = e.input.charCodeAt(++e.position);
	return (
		e.position === n && m(e, 'name of an anchor node must contain at least one character'),
		(e.anchor = e.input.slice(n, e.position)),
		!0
	);
}
function ef(e) {
	var n, r, i;
	if (((i = e.input.charCodeAt(e.position)), i !== 42)) return !1;
	for (i = e.input.charCodeAt(++e.position), n = e.position; i !== 0 && !B(i) && !Ae(i); )
		i = e.input.charCodeAt(++e.position);
	return (
		e.position === n && m(e, 'name of an alias node must contain at least one character'),
		(r = e.input.slice(n, e.position)),
		te.call(e.anchorMap, r) || m(e, 'unidentified alias "' + r + '"'),
		(e.result = e.anchorMap[r]),
		k(e, !0, -1),
		!0
	);
}
function Ce(e, n, r, i, t) {
	var l,
		o,
		a,
		u = 1,
		c = !1,
		s = !1,
		f,
		p,
		h,
		d,
		g,
		_;
	if (
		(e.listener !== null && e.listener('open', e),
		(e.tag = null),
		(e.anchor = null),
		(e.kind = null),
		(e.result = null),
		(l = o = a = ze === r || Ei === r),
		i &&
			k(e, !0, -1) &&
			((c = !0),
			e.lineIndent > n ? (u = 1) : e.lineIndent === n ? (u = 0) : e.lineIndent < n && (u = -1)),
		u === 1)
	)
		for (; Jc(e) || $c(e); )
			k(e, !0, -1)
				? ((c = !0),
				  (a = l),
				  e.lineIndent > n ? (u = 1) : e.lineIndent === n ? (u = 0) : e.lineIndent < n && (u = -1))
				: (a = !1);
	if (
		(a && (a = c || t),
		(u === 1 || ze === r) &&
			(Ve === r || Ci === r ? (g = n) : (g = n + 1),
			(_ = e.position - e.lineStart),
			u === 1
				? (a && (gr(e, _) || Zc(e, _, g))) || Xc(e, g)
					? (s = !0)
					: ((o && Qc(e, g)) || zc(e, g) || Wc(e, g)
							? (s = !0)
							: ef(e)
							? ((s = !0),
							  (e.tag !== null || e.anchor !== null) &&
									m(e, 'alias node should not have any properties'))
							: Vc(e, g, Ve === r) && ((s = !0), e.tag === null && (e.tag = '?')),
					  e.anchor !== null && (e.anchorMap[e.anchor] = e.result))
				: u === 0 && (s = a && gr(e, _))),
		e.tag === null)
	)
		e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
	else if (e.tag === '?') {
		for (
			e.result !== null &&
				e.kind !== 'scalar' &&
				m(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'),
				f = 0,
				p = e.implicitTypes.length;
			f < p;
			f += 1
		)
			if (((d = e.implicitTypes[f]), d.resolve(e.result))) {
				(e.result = d.construct(e.result)),
					(e.tag = d.tag),
					e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
				break;
			}
	} else if (e.tag !== '!') {
		if (te.call(e.typeMap[e.kind || 'fallback'], e.tag)) d = e.typeMap[e.kind || 'fallback'][e.tag];
		else
			for (d = null, h = e.typeMap.multi[e.kind || 'fallback'], f = 0, p = h.length; f < p; f += 1)
				if (e.tag.slice(0, h[f].tag.length) === h[f].tag) {
					d = h[f];
					break;
				}
		d || m(e, 'unknown tag !<' + e.tag + '>'),
			e.result !== null &&
				d.kind !== e.kind &&
				m(
					e,
					'unacceptable node kind for !<' +
						e.tag +
						'> tag; it should be "' +
						d.kind +
						'", not "' +
						e.kind +
						'"'
				),
			d.resolve(e.result, e.tag)
				? ((e.result = d.construct(e.result, e.tag)),
				  e.anchor !== null && (e.anchorMap[e.anchor] = e.result))
				: m(e, 'cannot resolve a node with !<' + e.tag + '> explicit tag');
	}
	return e.listener !== null && e.listener('close', e), e.tag !== null || e.anchor !== null || s;
}
function nf(e) {
	var n = e.position,
		r,
		i,
		t,
		l = !1,
		o;
	for (
		e.version = null,
			e.checkLineBreaks = e.legacy,
			e.tagMap = Object.create(null),
			e.anchorMap = Object.create(null);
		(o = e.input.charCodeAt(e.position)) !== 0 &&
		(k(e, !0, -1), (o = e.input.charCodeAt(e.position)), !(e.lineIndent > 0 || o !== 37));

	) {
		for (l = !0, o = e.input.charCodeAt(++e.position), r = e.position; o !== 0 && !B(o); )
			o = e.input.charCodeAt(++e.position);
		for (
			i = e.input.slice(r, e.position),
				t = [],
				i.length < 1 && m(e, 'directive name must not be less than one character in length');
			o !== 0;

		) {
			for (; ae(o); ) o = e.input.charCodeAt(++e.position);
			if (o === 35) {
				do o = e.input.charCodeAt(++e.position);
				while (o !== 0 && !X(o));
				break;
			}
			if (X(o)) break;
			for (r = e.position; o !== 0 && !B(o); ) o = e.input.charCodeAt(++e.position);
			t.push(e.input.slice(r, e.position));
		}
		o !== 0 && Ln(e),
			te.call(hr, i) ? hr[i](e, i, t) : We(e, 'unknown document directive "' + i + '"');
	}
	if (
		(k(e, !0, -1),
		e.lineIndent === 0 &&
		e.input.charCodeAt(e.position) === 45 &&
		e.input.charCodeAt(e.position + 1) === 45 &&
		e.input.charCodeAt(e.position + 2) === 45
			? ((e.position += 3), k(e, !0, -1))
			: l && m(e, 'directives end mark is expected'),
		Ce(e, e.lineIndent - 1, ze, !1, !0),
		k(e, !0, -1),
		e.checkLineBreaks &&
			Bc.test(e.input.slice(n, e.position)) &&
			We(e, 'non-ASCII line breaks are interpreted as content'),
		e.documents.push(e.result),
		e.position === e.lineStart && nn(e))
	) {
		e.input.charCodeAt(e.position) === 46 && ((e.position += 3), k(e, !0, -1));
		return;
	}
	if (e.position < e.length - 1) m(e, 'end of the stream or a document separator is expected');
	else return;
}
function Li(e, n) {
	(e = String(e)),
		(n = n || {}),
		e.length !== 0 &&
			(e.charCodeAt(e.length - 1) !== 10 &&
				e.charCodeAt(e.length - 1) !== 13 &&
				(e += `
`),
			e.charCodeAt(0) === 65279 && (e = e.slice(1)));
	var r = new qc(e, n),
		i = e.indexOf('\0');
	for (
		i !== -1 && ((r.position = i), m(r, 'null byte is not allowed in input')), r.input += '\0';
		r.input.charCodeAt(r.position) === 32;

	)
		(r.lineIndent += 1), (r.position += 1);
	for (; r.position < r.length - 1; ) nf(r);
	return r.documents;
}
function rf(e, n, r) {
	n !== null && typeof n == 'object' && typeof r > 'u' && ((r = n), (n = null));
	var i = Li(e, r);
	if (typeof n != 'function') return i;
	for (var t = 0, l = i.length; t < l; t += 1) n(i[t]);
}
function tf(e, n) {
	var r = Li(e, n);
	if (r.length !== 0) {
		if (r.length === 1) return r[0];
		throw new D('expected a single document in the stream, but found more');
	}
}
var lf = rf,
	of = tf,
	ji = { loadAll: lf, load: of },
	Pi = Object.prototype.toString,
	Ni = Object.prototype.hasOwnProperty,
	Pn = 65279,
	af = 9,
	De = 10,
	uf = 13,
	cf = 32,
	ff = 33,
	sf = 34,
	dn = 35,
	pf = 37,
	hf = 38,
	df = 39,
	gf = 42,
	Mi = 44,
	mf = 45,
	Xe = 58,
	_f = 61,
	vf = 62,
	yf = 63,
	bf = 64,
	Di = 91,
	Ri = 93,
	Af = 96,
	Bi = 123,
	xf = 124,
	Ui = 125,
	M = {};
M[0] = '\\0';
M[7] = '\\a';
M[8] = '\\b';
M[9] = '\\t';
M[10] = '\\n';
M[11] = '\\v';
M[12] = '\\f';
M[13] = '\\r';
M[27] = '\\e';
M[34] = '\\"';
M[92] = '\\\\';
M[133] = '\\N';
M[160] = '\\_';
M[8232] = '\\L';
M[8233] = '\\P';
var Tf = [
		'y',
		'Y',
		'yes',
		'Yes',
		'YES',
		'on',
		'On',
		'ON',
		'n',
		'N',
		'no',
		'No',
		'NO',
		'off',
		'Off',
		'OFF'
	],
	wf = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Cf(e, n) {
	var r, i, t, l, o, a, u;
	if (n === null) return {};
	for (r = {}, i = Object.keys(n), t = 0, l = i.length; t < l; t += 1)
		(o = i[t]),
			(a = String(n[o])),
			o.slice(0, 2) === '!!' && (o = 'tag:yaml.org,2002:' + o.slice(2)),
			(u = e.compiledTypeMap.fallback[o]),
			u && Ni.call(u.styleAliases, a) && (a = u.styleAliases[a]),
			(r[o] = a);
	return r;
}
function Ef(e) {
	var n, r, i;
	if (((n = e.toString(16).toUpperCase()), e <= 255)) (r = 'x'), (i = 2);
	else if (e <= 65535) (r = 'u'), (i = 4);
	else if (e <= 4294967295) (r = 'U'), (i = 8);
	else throw new D('code point within a string may not be greater than 0xFFFFFFFF');
	return '\\' + r + L.repeat('0', i - n.length) + n;
}
var Sf = 1,
	Re = 2;
function Of(e) {
	(this.schema = e.schema || kn),
		(this.indent = Math.max(1, e.indent || 2)),
		(this.noArrayIndent = e.noArrayIndent || !1),
		(this.skipInvalid = e.skipInvalid || !1),
		(this.flowLevel = L.isNothing(e.flowLevel) ? -1 : e.flowLevel),
		(this.styleMap = Cf(this.schema, e.styles || null)),
		(this.sortKeys = e.sortKeys || !1),
		(this.lineWidth = e.lineWidth || 80),
		(this.noRefs = e.noRefs || !1),
		(this.noCompatMode = e.noCompatMode || !1),
		(this.condenseFlow = e.condenseFlow || !1),
		(this.quotingType = e.quotingType === '"' ? Re : Sf),
		(this.forceQuotes = e.forceQuotes || !1),
		(this.replacer = typeof e.replacer == 'function' ? e.replacer : null),
		(this.implicitTypes = this.schema.compiledImplicit),
		(this.explicitTypes = this.schema.compiledExplicit),
		(this.tag = null),
		(this.result = ''),
		(this.duplicates = []),
		(this.usedDuplicates = null);
}
function mr(e, n) {
	for (var r = L.repeat(' ', n), i = 0, t = -1, l = '', o, a = e.length; i < a; )
		(t = e.indexOf(
			`
`,
			i
		)),
			t === -1 ? ((o = e.slice(i)), (i = a)) : ((o = e.slice(i, t + 1)), (i = t + 1)),
			o.length &&
				o !==
					`
` &&
				(l += r),
			(l += o);
	return l;
}
function gn(e, n) {
	return (
		`
` + L.repeat(' ', e.indent * n)
	);
}
function If(e, n) {
	var r, i, t;
	for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
		if (((t = e.implicitTypes[r]), t.resolve(n))) return !0;
	return !1;
}
function Qe(e) {
	return e === cf || e === af;
}
function Be(e) {
	return (
		(32 <= e && e <= 126) ||
		(161 <= e && e <= 55295 && e !== 8232 && e !== 8233) ||
		(57344 <= e && e <= 65533 && e !== Pn) ||
		(65536 <= e && e <= 1114111)
	);
}
function _r(e) {
	return Be(e) && e !== Pn && e !== uf && e !== De;
}
function vr(e, n, r) {
	var i = _r(e),
		t = i && !Qe(e);
	return (
		((r ? i : i && e !== Mi && e !== Di && e !== Ri && e !== Bi && e !== Ui) &&
			e !== dn &&
			!(n === Xe && !t)) ||
		(_r(n) && !Qe(n) && e === dn) ||
		(n === Xe && t)
	);
}
function Ff(e) {
	return (
		Be(e) &&
		e !== Pn &&
		!Qe(e) &&
		e !== mf &&
		e !== yf &&
		e !== Xe &&
		e !== Mi &&
		e !== Di &&
		e !== Ri &&
		e !== Bi &&
		e !== Ui &&
		e !== dn &&
		e !== hf &&
		e !== gf &&
		e !== ff &&
		e !== xf &&
		e !== _f &&
		e !== vf &&
		e !== df &&
		e !== sf &&
		e !== pf &&
		e !== bf &&
		e !== Af
	);
}
function kf(e) {
	return !Qe(e) && e !== Xe;
}
function ke(e, n) {
	var r = e.charCodeAt(n),
		i;
	return r >= 55296 &&
		r <= 56319 &&
		n + 1 < e.length &&
		((i = e.charCodeAt(n + 1)), i >= 56320 && i <= 57343)
		? (r - 55296) * 1024 + i - 56320 + 65536
		: r;
}
function Yi(e) {
	var n = /^\n* /;
	return n.test(e);
}
var Hi = 1,
	mn = 2,
	Gi = 3,
	Ki = 4,
	be = 5;
function Lf(e, n, r, i, t, l, o, a) {
	var u,
		c = 0,
		s = null,
		f = !1,
		p = !1,
		h = i !== -1,
		d = -1,
		g = Ff(ke(e, 0)) && kf(ke(e, e.length - 1));
	if (n || o)
		for (u = 0; u < e.length; c >= 65536 ? (u += 2) : u++) {
			if (((c = ke(e, u)), !Be(c))) return be;
			(g = g && vr(c, s, a)), (s = c);
		}
	else {
		for (u = 0; u < e.length; c >= 65536 ? (u += 2) : u++) {
			if (((c = ke(e, u)), c === De))
				(f = !0), h && ((p = p || (u - d - 1 > i && e[d + 1] !== ' ')), (d = u));
			else if (!Be(c)) return be;
			(g = g && vr(c, s, a)), (s = c);
		}
		p = p || (h && u - d - 1 > i && e[d + 1] !== ' ');
	}
	return !f && !p
		? g && !o && !t(e)
			? Hi
			: l === Re
			? be
			: mn
		: r > 9 && Yi(e)
		? be
		: o
		? l === Re
			? be
			: mn
		: p
		? Ki
		: Gi;
}
function jf(e, n, r, i, t) {
	e.dump = (function () {
		if (n.length === 0) return e.quotingType === Re ? '""' : "''";
		if (!e.noCompatMode && (Tf.indexOf(n) !== -1 || wf.test(n)))
			return e.quotingType === Re ? '"' + n + '"' : "'" + n + "'";
		var l = e.indent * Math.max(1, r),
			o = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - l),
			a = i || (e.flowLevel > -1 && r >= e.flowLevel);
		function u(c) {
			return If(e, c);
		}
		switch (Lf(n, a, e.indent, o, u, e.quotingType, e.forceQuotes && !i, t)) {
			case Hi:
				return n;
			case mn:
				return "'" + n.replace(/'/g, "''") + "'";
			case Gi:
				return '|' + yr(n, e.indent) + br(mr(n, l));
			case Ki:
				return '>' + yr(n, e.indent) + br(mr(Pf(n, o), l));
			case be:
				return '"' + Nf(n) + '"';
			default:
				throw new D('impossible error: invalid scalar style');
		}
	})();
}
function yr(e, n) {
	var r = Yi(e) ? String(n) : '',
		i =
			e[e.length - 1] ===
			`
`,
		t =
			i &&
			(e[e.length - 2] ===
				`
` ||
				e ===
					`
`),
		l = t ? '+' : i ? '' : '-';
	return (
		r +
		l +
		`
`
	);
}
function br(e) {
	return e[e.length - 1] ===
		`
`
		? e.slice(0, -1)
		: e;
}
function Pf(e, n) {
	for (
		var r = /(\n+)([^\n]*)/g,
			i = (function () {
				var c = e.indexOf(`
`);
				return (c = c !== -1 ? c : e.length), (r.lastIndex = c), Ar(e.slice(0, c), n);
			})(),
			t =
				e[0] ===
					`
` || e[0] === ' ',
			l,
			o;
		(o = r.exec(e));

	) {
		var a = o[1],
			u = o[2];
		(l = u[0] === ' '),
			(i +=
				a +
				(!t && !l && u !== ''
					? `
`
					: '') +
				Ar(u, n)),
			(t = l);
	}
	return i;
}
function Ar(e, n) {
	if (e === '' || e[0] === ' ') return e;
	for (var r = / [^ ]/g, i, t = 0, l, o = 0, a = 0, u = ''; (i = r.exec(e)); )
		(a = i.index),
			a - t > n &&
				((l = o > t ? o : a),
				(u +=
					`
` + e.slice(t, l)),
				(t = l + 1)),
			(o = a);
	return (
		(u += `
`),
		e.length - t > n && o > t
			? (u +=
					e.slice(t, o) +
					`
` +
					e.slice(o + 1))
			: (u += e.slice(t)),
		u.slice(1)
	);
}
function Nf(e) {
	for (var n = '', r = 0, i, t = 0; t < e.length; r >= 65536 ? (t += 2) : t++)
		(r = ke(e, t)),
			(i = M[r]),
			!i && Be(r) ? ((n += e[t]), r >= 65536 && (n += e[t + 1])) : (n += i || Ef(r));
	return n;
}
function Mf(e, n, r) {
	var i = '',
		t = e.tag,
		l,
		o,
		a;
	for (l = 0, o = r.length; l < o; l += 1)
		(a = r[l]),
			e.replacer && (a = e.replacer.call(r, String(l), a)),
			(Z(e, n, a, !1, !1) || (typeof a > 'u' && Z(e, n, null, !1, !1))) &&
				(i !== '' && (i += ',' + (e.condenseFlow ? '' : ' ')), (i += e.dump));
	(e.tag = t), (e.dump = '[' + i + ']');
}
function xr(e, n, r, i) {
	var t = '',
		l = e.tag,
		o,
		a,
		u;
	for (o = 0, a = r.length; o < a; o += 1)
		(u = r[o]),
			e.replacer && (u = e.replacer.call(r, String(o), u)),
			(Z(e, n + 1, u, !0, !0, !1, !0) || (typeof u > 'u' && Z(e, n + 1, null, !0, !0, !1, !0))) &&
				((!i || t !== '') && (t += gn(e, n)),
				e.dump && De === e.dump.charCodeAt(0) ? (t += '-') : (t += '- '),
				(t += e.dump));
	(e.tag = l), (e.dump = t || '[]');
}
function Df(e, n, r) {
	var i = '',
		t = e.tag,
		l = Object.keys(r),
		o,
		a,
		u,
		c,
		s;
	for (o = 0, a = l.length; o < a; o += 1)
		(s = ''),
			i !== '' && (s += ', '),
			e.condenseFlow && (s += '"'),
			(u = l[o]),
			(c = r[u]),
			e.replacer && (c = e.replacer.call(r, u, c)),
			Z(e, n, u, !1, !1) &&
				(e.dump.length > 1024 && (s += '? '),
				(s += e.dump + (e.condenseFlow ? '"' : '') + ':' + (e.condenseFlow ? '' : ' ')),
				Z(e, n, c, !1, !1) && ((s += e.dump), (i += s)));
	(e.tag = t), (e.dump = '{' + i + '}');
}
function Rf(e, n, r, i) {
	var t = '',
		l = e.tag,
		o = Object.keys(r),
		a,
		u,
		c,
		s,
		f,
		p;
	if (e.sortKeys === !0) o.sort();
	else if (typeof e.sortKeys == 'function') o.sort(e.sortKeys);
	else if (e.sortKeys) throw new D('sortKeys must be a boolean or a function');
	for (a = 0, u = o.length; a < u; a += 1)
		(p = ''),
			(!i || t !== '') && (p += gn(e, n)),
			(c = o[a]),
			(s = r[c]),
			e.replacer && (s = e.replacer.call(r, c, s)),
			Z(e, n + 1, c, !0, !0, !0) &&
				((f = (e.tag !== null && e.tag !== '?') || (e.dump && e.dump.length > 1024)),
				f && (e.dump && De === e.dump.charCodeAt(0) ? (p += '?') : (p += '? ')),
				(p += e.dump),
				f && (p += gn(e, n)),
				Z(e, n + 1, s, !0, f) &&
					(e.dump && De === e.dump.charCodeAt(0) ? (p += ':') : (p += ': '),
					(p += e.dump),
					(t += p)));
	(e.tag = l), (e.dump = t || '{}');
}
function Tr(e, n, r) {
	var i, t, l, o, a, u;
	for (t = r ? e.explicitTypes : e.implicitTypes, l = 0, o = t.length; l < o; l += 1)
		if (
			((a = t[l]),
			(a.instanceOf || a.predicate) &&
				(!a.instanceOf || (typeof n == 'object' && n instanceof a.instanceOf)) &&
				(!a.predicate || a.predicate(n)))
		) {
			if (
				(r
					? a.multi && a.representName
						? (e.tag = a.representName(n))
						: (e.tag = a.tag)
					: (e.tag = '?'),
				a.represent)
			) {
				if (
					((u = e.styleMap[a.tag] || a.defaultStyle), Pi.call(a.represent) === '[object Function]')
				)
					i = a.represent(n, u);
				else if (Ni.call(a.represent, u)) i = a.represent[u](n, u);
				else throw new D('!<' + a.tag + '> tag resolver accepts not "' + u + '" style');
				e.dump = i;
			}
			return !0;
		}
	return !1;
}
function Z(e, n, r, i, t, l, o) {
	(e.tag = null), (e.dump = r), Tr(e, r, !1) || Tr(e, r, !0);
	var a = Pi.call(e.dump),
		u = i,
		c;
	i && (i = e.flowLevel < 0 || e.flowLevel > n);
	var s = a === '[object Object]' || a === '[object Array]',
		f,
		p;
	if (
		(s && ((f = e.duplicates.indexOf(r)), (p = f !== -1)),
		((e.tag !== null && e.tag !== '?') || p || (e.indent !== 2 && n > 0)) && (t = !1),
		p && e.usedDuplicates[f])
	)
		e.dump = '*ref_' + f;
	else {
		if ((s && p && !e.usedDuplicates[f] && (e.usedDuplicates[f] = !0), a === '[object Object]'))
			i && Object.keys(e.dump).length !== 0
				? (Rf(e, n, e.dump, t), p && (e.dump = '&ref_' + f + e.dump))
				: (Df(e, n, e.dump), p && (e.dump = '&ref_' + f + ' ' + e.dump));
		else if (a === '[object Array]')
			i && e.dump.length !== 0
				? (e.noArrayIndent && !o && n > 0 ? xr(e, n - 1, e.dump, t) : xr(e, n, e.dump, t),
				  p && (e.dump = '&ref_' + f + e.dump))
				: (Mf(e, n, e.dump), p && (e.dump = '&ref_' + f + ' ' + e.dump));
		else if (a === '[object String]') e.tag !== '?' && jf(e, e.dump, n, l, u);
		else {
			if (a === '[object Undefined]') return !1;
			if (e.skipInvalid) return !1;
			throw new D('unacceptable kind of an object to dump ' + a);
		}
		e.tag !== null &&
			e.tag !== '?' &&
			((c = encodeURI(e.tag[0] === '!' ? e.tag.slice(1) : e.tag).replace(/!/g, '%21')),
			e.tag[0] === '!'
				? (c = '!' + c)
				: c.slice(0, 18) === 'tag:yaml.org,2002:'
				? (c = '!!' + c.slice(18))
				: (c = '!<' + c + '>'),
			(e.dump = c + ' ' + e.dump));
	}
	return !0;
}
function Bf(e, n) {
	var r = [],
		i = [],
		t,
		l;
	for (_n(e, r, i), t = 0, l = i.length; t < l; t += 1) n.duplicates.push(r[i[t]]);
	n.usedDuplicates = new Array(l);
}
function _n(e, n, r) {
	var i, t, l;
	if (e !== null && typeof e == 'object')
		if (((t = n.indexOf(e)), t !== -1)) r.indexOf(t) === -1 && r.push(t);
		else if ((n.push(e), Array.isArray(e))) for (t = 0, l = e.length; t < l; t += 1) _n(e[t], n, r);
		else for (i = Object.keys(e), t = 0, l = i.length; t < l; t += 1) _n(e[i[t]], n, r);
}
function Uf(e, n) {
	n = n || {};
	var r = new Of(n);
	r.noRefs || Bf(e, r);
	var i = e;
	return (
		r.replacer && (i = r.replacer.call({ '': i }, '', i)),
		Z(r, 0, i, !0, !0)
			? r.dump +
			  `
`
			: ''
	);
}
var Yf = Uf,
	Hf = { dump: Yf };
function Nn(e, n) {
	return function () {
		throw new Error(
			'Function yaml.' +
				e +
				' is removed in js-yaml 4. Use yaml.' +
				n +
				' instead, which is now safe by default.'
		);
	};
}
var Gf = N,
	Kf = oi,
	qf = fi,
	Vf = gi,
	zf = mi,
	Wf = kn,
	Xf = ji.load,
	Qf = ji.loadAll,
	Zf = Hf.dump,
	Jf = D,
	$f = {
		binary: Ai,
		float: di,
		map: ci,
		null: si,
		pairs: Ti,
		set: wi,
		timestamp: yi,
		bool: pi,
		int: hi,
		merge: bi,
		omap: xi,
		seq: ui,
		str: ai
	},
	es = Nn('safeLoad', 'load'),
	ns = Nn('safeLoadAll', 'loadAll'),
	rs = Nn('safeDump', 'dump'),
	qi = {
		Type: Gf,
		Schema: Kf,
		FAILSAFE_SCHEMA: qf,
		JSON_SCHEMA: Vf,
		CORE_SCHEMA: zf,
		DEFAULT_SCHEMA: Wf,
		load: Xf,
		loadAll: Qf,
		dump: Zf,
		YAMLException: Jf,
		types: $f,
		safeLoad: es,
		safeLoadAll: ns,
		safeDump: rs
	};
function is(e) {
	let n;
	return {
		c() {
			n = q('EMPTY BLOCK');
		},
		l(r) {
			n = V(r, 'EMPTY BLOCK');
		},
		m(r, i) {
			P(r, n, i);
		},
		p: K,
		i: K,
		o: K,
		d(r) {
			r && A(n);
		}
	};
}
function ts(e) {
	let n, r;
	const i = [{ settings: e[1] }, e[2] ? e[2] : {}];
	let t = {};
	for (let l = 0; l < i.length; l += 1) t = vn(t, i[l]);
	return (
		(n = new e[5]({ props: t })),
		{
			c() {
				se(n.$$.fragment);
			},
			l(l) {
				pe(n.$$.fragment, l);
			},
			m(l, o) {
				he(n, l, o), (r = !0);
			},
			p(l, o) {
				const a = o & 6 ? yn(i, [o & 2 && { settings: l[1] }, o & 4 && Zi(l[2] ? l[2] : {})]) : {};
				n.$set(a);
			},
			i(l) {
				r || (U(n.$$.fragment, l), (r = !0));
			},
			o(l) {
				G(n.$$.fragment, l), (r = !1);
			},
			d(l) {
				de(n, l);
			}
		}
	);
}
function ls(e) {
	var v;
	let n,
		r,
		i,
		t,
		l,
		o,
		a,
		u,
		c,
		s,
		f,
		p,
		h,
		d,
		g,
		_ = [{ id: e[8] }, { class: (u = (v = e[9]) == null ? void 0 : v.join(' ')) }, e[10]],
		b = {};
	for (let T = 0; T < _.length; T += 1) b = vn(b, _[T]);
	return {
		c() {
			(n = S('details')),
				(r = S('summary')),
				(i = q('Edit Code')),
				(t = z()),
				(l = S('pre')),
				(o = S('code')),
				(a = q(e[4])),
				(c = z()),
				(s = S('textarea')),
				(f = z()),
				(p = S('button')),
				(h = q('Save and Apply Edits')),
				this.h();
		},
		l(T) {
			n = O(T, 'DETAILS', {});
			var I = F(n);
			r = O(I, 'SUMMARY', { style: !0 });
			var _e = F(r);
			(i = V(_e, 'Edit Code')), _e.forEach(A), (t = W(I)), (l = O(I, 'PRE', { id: !0, class: !0 }));
			var j = F(l);
			o = O(j, 'CODE', { class: !0 });
			var Ue = F(o);
			(a = V(Ue, e[4])),
				Ue.forEach(A),
				j.forEach(A),
				(c = W(I)),
				(s = O(I, 'TEXTAREA', { class: !0 })),
				F(s).forEach(A),
				(f = W(I)),
				(p = O(I, 'BUTTON', { class: !0 }));
			var Ye = F(p);
			(h = V(Ye, 'Save and Apply Edits')), Ye.forEach(A), I.forEach(A), this.h();
		},
		h() {
			Fr(r, 'user-select', 'none'),
				E(o, 'class', 'svelte-3d9a4o'),
				Ge(l, b),
				R(l, 'hidden', e[6]),
				R(l, 'svelte-3d9a4o', !0),
				E(s, 'class', 'svelte-3d9a4o'),
				R(s, 'hidden', !e[6]),
				E(p, 'class', 'svelte-3d9a4o'),
				R(p, 'hidden', !e[6]);
		},
		m(T, I) {
			P(T, n, I),
				x(n, r),
				x(r, i),
				x(n, t),
				x(n, l),
				x(l, o),
				x(o, a),
				x(n, c),
				x(n, s),
				Te(s, e[7]),
				x(n, f),
				x(n, p),
				x(p, h),
				e[15](n),
				d || ((g = [H(l, 'click', e[12]), H(s, 'input', e[13]), H(p, 'click', e[14])]), (d = !0));
		},
		p(T, I) {
			I & 16 && ue(a, T[4]),
				Ge(l, (b = yn(_, [{ id: T[8] }, { class: u }, T[10]]))),
				R(l, 'hidden', T[6]),
				R(l, 'svelte-3d9a4o', !0),
				I & 128 && Te(s, T[7]),
				I & 64 && R(s, 'hidden', !T[6]),
				I & 64 && R(p, 'hidden', !T[6]);
		},
		i: K,
		o: K,
		d(T) {
			T && A(n), e[15](null), (d = !1), Ze(g);
		}
	};
}
function os(e) {
	let n, r, i, t;
	const l = [ls, ts, is],
		o = [];
	function a(u, c) {
		return u[11] ? 0 : u[5] !== void 0 ? 1 : u[0] !== void 0 ? 2 : -1;
	}
	return (
		~(n = a(e)) && (r = o[n] = l[n](e)),
		{
			c() {
				r && r.c(), (i = qe());
			},
			l(u) {
				r && r.l(u), (i = qe());
			},
			m(u, c) {
				~n && o[n].m(u, c), P(u, i, c), (t = !0);
			},
			p(u, [c]) {
				let s = n;
				(n = a(u)),
					n === s
						? ~n && o[n].p(u, c)
						: (r &&
								(Sr(),
								G(o[s], 1, 1, () => {
									o[s] = null;
								}),
								Or()),
						  ~n
								? ((r = o[n]),
								  r ? r.p(u, c) : ((r = o[n] = l[n](u)), r.c()),
								  U(r, 1),
								  r.m(i.parentNode, i))
								: (r = null));
			},
			i(u) {
				t || (U(r), (t = !0));
			},
			o(u) {
				G(r), (t = !1);
			},
			d(u) {
				~n && o[n].d(u), u && A(i);
			}
		}
	);
}
function as(e, n, r) {
	let i,
		t,
		l,
		{ data: o } = n,
		{ settings: a } = n;
	const [[u, c, s], f] = o,
		p = Object.fromEntries(s ?? []);
	let h = null,
		d;
	const g = '' + Math.random(),
		_ = c.includes('api') || c.length === 0;
	function b() {
		r(7, (l = i)), r(6, (t = !0));
	}
	let v;
	function T() {
		(l = this.value), r(7, l);
	}
	const I = () => {
		r(4, (i = l)), r(6, (t = !1)), o._scrollerly_apparatus.run();
	};
	function _e(j) {
		Ke[j ? 'unshift' : 'push'](() => {
			(d = j), r(3, d);
		});
	}
	return (
		(e.$$set = (j) => {
			'data' in j && r(0, (o = j.data)), 'settings' in j && r(1, (a = j.settings));
		}),
		(e.$$.update = () => {
			if (e.$$.dirty & 16)
				try {
					r(2, (h = qi.load(i)));
				} catch {
					r(2, (h = null));
				}
			if (
				(e.$$.dirty & 6 && a.code_nodes.set(g, h || {}),
				e.$$.dirty & 12 &&
					_ &&
					r(
						0,
						(o._scrollerly_apparatus = {
							run() {
								const j = new CustomEvent('plotAPI', {
									bubbles: !0,
									detail: { call: h, node_code: g }
								});
								h !== null && d.dispatchEvent(j);
							}
						}),
						o
					),
				e.$$.dirty & 2 && c && c.length && a.controls)
			) {
				const j = c[0];
				a.controls[j] && r(5, (v = a.controls[j]));
			}
		}),
		r(4, (i = f)),
		r(6, (t = !1)),
		r(7, (l = '')),
		[o, a, h, d, i, v, t, l, u, c, p, _, b, T, I, _e]
	);
}
class us extends J {
	constructor(n) {
		super(), $(this, n, as, os, ee, { data: 0, settings: 1 });
	}
}
function cs(e) {
	let n, r;
	return (
		(n = new it({ props: { data: e[0], settings: e[1] } })),
		{
			c() {
				se(n.$$.fragment);
			},
			l(i) {
				pe(n.$$.fragment, i);
			},
			m(i, t) {
				he(n, i, t), (r = !0);
			},
			p(i, t) {
				const l = {};
				t & 1 && (l.data = i[0]), t & 2 && (l.settings = i[1]), n.$set(l);
			},
			i(i) {
				r || (U(n.$$.fragment, i), (r = !0));
			},
			o(i) {
				G(n.$$.fragment, i), (r = !1);
			},
			d(i) {
				de(n, i);
			}
		}
	);
}
function fs(e) {
	let n, r;
	return (
		(n = new Mu({ props: { data: e[0], settings: e[2] } })),
		{
			c() {
				se(n.$$.fragment);
			},
			l(i) {
				pe(n.$$.fragment, i);
			},
			m(i, t) {
				he(n, i, t), (r = !0);
			},
			p(i, t) {
				const l = {};
				t & 1 && (l.data = i[0]), n.$set(l);
			},
			i(i) {
				r || (U(n.$$.fragment, i), (r = !0));
			},
			o(i) {
				G(n.$$.fragment, i), (r = !1);
			},
			d(i) {
				de(n, i);
			}
		}
	);
}
function ss(e) {
	let n, r, i, t;
	const l = [fs, cs],
		o = [];
	function a(u, c) {
		return u[3].includes('chunk') ? 0 : 1;
	}
	return (
		(n = a(e)),
		(r = o[n] = l[n](e)),
		{
			c() {
				r.c(), (i = qe());
			},
			l(u) {
				r.l(u), (i = qe());
			},
			m(u, c) {
				o[n].m(u, c), P(u, i, c), (t = !0);
			},
			p(u, [c]) {
				r.p(u, c);
			},
			i(u) {
				t || (U(r), (t = !0));
			},
			o(u) {
				G(r), (t = !1);
			},
			d(u) {
				o[n].d(u), u && A(i);
			}
		}
	);
}
function ps(e, n, r) {
	let { data: i } = n,
		{ settings: t } = n;
	const l = { ...t.elements };
	l.CodeBlock = us;
	const o = { ...t, elements: l },
		[[a, u, c], s] = i;
	return (
		(e.$$set = (f) => {
			'data' in f && r(0, (i = f.data)), 'settings' in f && r(1, (t = f.settings));
		}),
		[i, t, o, u]
	);
}
class hs extends J {
	constructor(n) {
		super(), $(this, n, ps, ss, ee, { data: 0, settings: 1 });
	}
}
const ds = (e) => ({}),
	wr = (e) => ({});
function Cr(e) {
	let n, r, i, t;
	return {
		c() {
			(n = S('div')), (r = q('Copy API')), this.h();
		},
		l(l) {
			n = O(l, 'DIV', { class: !0 });
			var o = F(n);
			(r = V(o, 'Copy API')), o.forEach(A), this.h();
		},
		h() {
			E(n, 'class', 'action svelte-tnnnxv');
		},
		m(l, o) {
			P(l, n, o), x(n, r), i || ((t = [H(n, 'click', e[8]), H(n, 'keyup', e[8])]), (i = !0));
		},
		p: K,
		d(l) {
			l && A(n), (i = !1), Ze(t);
		}
	};
}
function gs(e) {
	let n,
		r = e[4].indexOf('title_features') > -1,
		i,
		t,
		l,
		o = e[7] ? 'Show narrative' : 'Hide narrative',
		a,
		u,
		c,
		s,
		f,
		p,
		h = r && Cr(e);
	return {
		c() {
			(n = S('div')),
				h && h.c(),
				(i = z()),
				(t = S('div')),
				(l = S('div')),
				(a = q(o)),
				(u = z()),
				(c = S('div')),
				(s = q(e[2])),
				this.h();
		},
		l(d) {
			n = O(d, 'DIV', { class: !0 });
			var g = F(n);
			h && h.l(g), (i = W(g)), (t = O(g, 'DIV', {}));
			var _ = F(t);
			l = O(_, 'DIV', { class: !0 });
			var b = F(l);
			(a = V(b, o)), b.forEach(A), _.forEach(A), (u = W(g)), (c = O(g, 'DIV', { style: !0 }));
			var v = F(c);
			(s = V(v, e[2])), v.forEach(A), g.forEach(A), this.h();
		},
		h() {
			E(l, 'class', 'action svelte-tnnnxv'),
				Fr(c, 'margin-left', '100px'),
				E(n, 'class', 'flex-navbar svelte-tnnnxv');
		},
		m(d, g) {
			P(d, n, g),
				h && h.m(n, null),
				x(n, i),
				x(n, t),
				x(t, l),
				x(l, a),
				x(n, u),
				x(n, c),
				x(c, s),
				f || ((p = H(l, 'click', e[17])), (f = !0));
		},
		p(d, g) {
			g & 16 && (r = d[4].indexOf('title_features') > -1),
				r ? (h ? h.p(d, g) : ((h = Cr(d)), h.c(), h.m(n, i))) : h && (h.d(1), (h = null)),
				g & 128 && o !== (o = d[7] ? 'Show narrative' : 'Hide narrative') && ue(a, o),
				g & 4 && ue(s, d[2]);
		},
		d(d) {
			d && A(n), h && h.d(), (f = !1), p();
		}
	};
}
function ms(e) {
	let n, r, i, t, l, o, a, u, c, s;
	const f = e[16].navbar,
		p = Ji(f, e, e[15], wr),
		h = p || gs(e);
	return (
		(u = new tt({ props: { ast: e[1], settings: e[0] } })),
		{
			c() {
				(n = S('div')),
					h && h.c(),
					(r = z()),
					(i = S('div')),
					(t = S('div')),
					(l = S('div')),
					(o = z()),
					(a = S('div')),
					se(u.$$.fragment),
					this.h();
			},
			l(d) {
				n = O(d, 'DIV', { class: !0 });
				var g = F(n);
				h && h.l(g), g.forEach(A), (r = W(d)), (i = O(d, 'DIV', { class: !0 }));
				var _ = F(i);
				t = O(_, 'DIV', { class: !0 });
				var b = F(t);
				l = O(b, 'DIV', { id: !0, class: !0 });
				var v = F(l);
				v.forEach(A), b.forEach(A), (o = W(_)), (a = O(_, 'DIV', { class: !0 }));
				var T = F(a);
				pe(u.$$.fragment, T), T.forEach(A), _.forEach(A), this.h();
			},
			h() {
				E(n, 'class', 'navbar svelte-tnnnxv'),
					E(l, 'id', 'panel'),
					E(l, 'class', 'svelte-tnnnxv'),
					E(t, 'class', 'vizpanel svelte-tnnnxv'),
					E(a, 'class', (c = 'narrative ' + (e[3] ? e[3] : '') + ' svelte-tnnnxv')),
					R(a, 'slidden', e[7]),
					E(i, 'class', 'scrollership');
			},
			m(d, g) {
				P(d, n, g),
					h && h.m(n, null),
					P(d, r, g),
					P(d, i, g),
					x(i, t),
					x(t, l),
					e[18](l),
					x(i, o),
					x(i, a),
					he(u, a, null),
					e[19](a),
					(s = !0);
			},
			p(d, [g]) {
				p
					? p.p && (!s || g & 32768) && $i(p, f, d, d[15], s ? nt(f, d[15], g, ds) : et(d[15]), wr)
					: h && h.p && (!s || g & 148) && h.p(d, s ? g : -1);
				const _ = {};
				g & 2 && (_.ast = d[1]),
					g & 1 && (_.settings = d[0]),
					u.$set(_),
					(!s || (g & 8 && c !== (c = 'narrative ' + (d[3] ? d[3] : '') + ' svelte-tnnnxv'))) &&
						E(a, 'class', c),
					(!s || g & 136) && R(a, 'slidden', d[7]);
			},
			i(d) {
				s || (U(h, d), U(u.$$.fragment, d), (s = !0));
			},
			o(d) {
				G(h, d), G(u.$$.fragment, d), (s = !1);
			},
			d(d) {
				d && A(n), h && h.d(d), d && A(r), d && A(i), e[18](null), de(u), e[19](null);
			}
		}
	);
}
function _s(e, n, r) {
	let i,
		t,
		{ $$slots: l = {}, $$scope: o } = n,
		{ query: a = null } = n,
		{ ast: u } = n,
		{ title: c = 'Scrollership' } = n,
		{ controls: s = {} } = n,
		{ settings: f = {} } = n,
		{ position: p = void 0 } = n,
		{ title_features: h = [] } = n,
		{ API: d } = n,
		{ observer_options: g = { root: null, rootMargin: '-20% 20px -40% 40px', threshold: 0.01 } } =
			n;
	const _ = { slider: Ou, buttonset: ju, button: ii };
	for (let [y, Y] of Object.entries(_)) s[y] === void 0 && (s[y] = Y);
	console.log({ settings: f }),
		(f.elements = f.elements || {}),
		(f.elements.Div = hs),
		(f.code_nodes = new Map()),
		(f.controls = s),
		(f.observer = new IntersectionObserver((y) => {
			y.forEach((Y) => {
				Y.isIntersecting ? Y.target.enter !== void 0 && Y.target.enter() : Y.target.exit();
			});
		}, g));
	let b, v, T, I;
	Ir(async () => {
		let y;
		{
			d.constructor.name === 'AsyncFunction' ? (y = (await d()).default) : (y = d),
				r(13, (v = new y())),
				v.bind(b),
				(window.plot = v),
				r(0, (f.controls._plot = v), f);
			for (let [Y, ve] of f.code_nodes.entries()) {
				v.plotAPI(ve), r(9, (a = ve)), (I = Y);
				break;
			}
			T.addEventListener('plotAPI', ({ detail: Y }) => {
				if (Y.node_code) {
					const ve = [...f.code_nodes.keys()],
						Vi = ve.indexOf(I),
						zi = ve.indexOf(Y.node_code);
					for (let rn = Vi + 1; rn < zi; rn++) {
						const Wi = f.code_nodes.get(ve[rn]);
						i.push(Wi);
					}
				}
				i.push(Y.call), (I = Y.node_code), r(14, i), r(13, v);
			});
		}
	});
	function _e() {
		const y = qi.dump(v.query);
		navigator.clipboard.writeText(y).then(
			function () {},
			function () {
				alert("Couldn't write to clipboard");
			}
		);
	}
	const j = () => {
		r(7, (t = !t));
	};
	function Ue(y) {
		Ke[y ? 'unshift' : 'push'](() => {
			(b = y), r(5, b);
		});
	}
	function Ye(y) {
		Ke[y ? 'unshift' : 'push'](() => {
			(T = y), r(6, T);
		});
	}
	return (
		(e.$$set = (y) => {
			'query' in y && r(9, (a = y.query)),
				'ast' in y && r(1, (u = y.ast)),
				'title' in y && r(2, (c = y.title)),
				'controls' in y && r(10, (s = y.controls)),
				'settings' in y && r(0, (f = y.settings)),
				'position' in y && r(3, (p = y.position)),
				'title_features' in y && r(4, (h = y.title_features)),
				'API' in y && r(11, (d = y.API)),
				'observer_options' in y && r(12, (g = y.observer_options)),
				'$$scope' in y && r(15, (o = y.$$scope));
		}),
		(e.$$.update = () => {
			if (e.$$.dirty & 24576 && i.length > 0) {
				const y = i.shift();
				v.plotAPI(y).then(() => {
					console.log({ call: y }), r(14, i), r(13, v);
				});
			}
		}),
		r(14, (i = [])),
		r(7, (t = !1)),
		[f, u, c, p, h, b, T, t, _e, a, s, d, g, v, i, o, l, j, Ue, Ye]
	);
}
class vs extends J {
	constructor(n) {
		super(),
			$(this, n, _s, ms, ee, {
				query: 9,
				ast: 1,
				title: 2,
				controls: 10,
				settings: 0,
				position: 3,
				title_features: 4,
				API: 11,
				observer_options: 12
			});
	}
}
function ys(e) {
	let n, r;
	return (
		(n = new vs({ props: { controls: e[1], API: e[2], ast: e[0].document } })),
		{
			c() {
				se(n.$$.fragment);
			},
			l(i) {
				pe(n.$$.fragment, i);
			},
			m(i, t) {
				he(n, i, t), (r = !0);
			},
			p(i, [t]) {
				const l = {};
				t & 1 && (l.ast = i[0].document), n.$set(l);
			},
			i(i) {
				r || (U(n.$$.fragment, i), (r = !0));
			},
			o(i) {
				G(n.$$.fragment, i), (r = !1);
			},
			d(i) {
				de(n, i);
			}
		}
	);
}
function bs(e, n, r) {
	let { data: i } = n;
	const t = { resizer: at },
		l = async () =>
			Xi(
				() => import('../../../../chunks/nori-570d0739.js'),
				['../../../../chunks/nori-570d0739.js', '../../../../chunks/openseadragon-23ea881c.js'],
				import.meta.url
			);
	return (
		(e.$$set = (o) => {
			'data' in o && r(0, (i = o.data));
		}),
		[i, t, l]
	);
}
class ws extends J {
	constructor(n) {
		super(), $(this, n, bs, ys, ee, { data: 0 });
	}
}
export { ws as default };
