import { O as Dt, a as Nt } from './openseadragon-23ea881c.js';
var at = 'http://www.w3.org/1999/xhtml';
const At = {
	svg: 'http://www.w3.org/2000/svg',
	xhtml: at,
	xlink: 'http://www.w3.org/1999/xlink',
	xml: 'http://www.w3.org/XML/1998/namespace',
	xmlns: 'http://www.w3.org/2000/xmlns/'
};
function et(t) {
	var n = (t += ''),
		e = n.indexOf(':');
	return (
		e >= 0 && (n = t.slice(0, e)) !== 'xmlns' && (t = t.slice(e + 1)),
		At.hasOwnProperty(n) ? { space: At[n], local: t } : t
	);
}
function _n(t) {
	return function () {
		var n = this.ownerDocument,
			e = this.namespaceURI;
		return e === at && n.documentElement.namespaceURI === at
			? n.createElement(t)
			: n.createElementNS(e, t);
	};
}
function gn(t) {
	return function () {
		return this.ownerDocument.createElementNS(t.space, t.local);
	};
}
function Lt(t) {
	var n = et(t);
	return (n.local ? gn : _n)(n);
}
function wn() {}
function pt(t) {
	return t == null
		? wn
		: function () {
				return this.querySelector(t);
		  };
}
function vn(t) {
	typeof t != 'function' && (t = pt(t));
	for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
		for (var o = n[i], s = o.length, a = (r[i] = new Array(s)), u, l, c = 0; c < s; ++c)
			(u = o[c]) &&
				(l = t.call(u, u.__data__, c, o)) &&
				('__data__' in u && (l.__data__ = u.__data__), (a[c] = l));
	return new w(r, this._parents);
}
function yn(t) {
	return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function xn() {
	return [];
}
function Xt(t) {
	return t == null
		? xn
		: function () {
				return this.querySelectorAll(t);
		  };
}
function mn(t) {
	return function () {
		return yn(t.apply(this, arguments));
	};
}
function bn(t) {
	typeof t == 'function' ? (t = mn(t)) : (t = Xt(t));
	for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
		for (var s = n[o], a = s.length, u, l = 0; l < a; ++l)
			(u = s[l]) && (r.push(t.call(u, u.__data__, l, s)), i.push(u));
	return new w(r, i);
}
function Vt(t) {
	return function () {
		return this.matches(t);
	};
}
function Bt(t) {
	return function (n) {
		return n.matches(t);
	};
}
var Nn = Array.prototype.find;
function An(t) {
	return function () {
		return Nn.call(this.children, t);
	};
}
function kn() {
	return this.firstElementChild;
}
function $n(t) {
	return this.select(t == null ? kn : An(typeof t == 'function' ? t : Bt(t)));
}
var En = Array.prototype.filter;
function Sn() {
	return Array.from(this.children);
}
function Cn(t) {
	return function () {
		return En.call(this.children, t);
	};
}
function Tn(t) {
	return this.selectAll(t == null ? Sn : Cn(typeof t == 'function' ? t : Bt(t)));
}
function Mn(t) {
	typeof t != 'function' && (t = Vt(t));
	for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
		for (var o = n[i], s = o.length, a = (r[i] = []), u, l = 0; l < s; ++l)
			(u = o[l]) && t.call(u, u.__data__, l, o) && a.push(u);
	return new w(r, this._parents);
}
function Yt(t) {
	return new Array(t.length);
}
function Rn() {
	return new w(this._enter || this._groups.map(Yt), this._parents);
}
function Z(t, n) {
	(this.ownerDocument = t.ownerDocument),
		(this.namespaceURI = t.namespaceURI),
		(this._next = null),
		(this._parent = t),
		(this.__data__ = n);
}
Z.prototype = {
	constructor: Z,
	appendChild: function (t) {
		return this._parent.insertBefore(t, this._next);
	},
	insertBefore: function (t, n) {
		return this._parent.insertBefore(t, n);
	},
	querySelector: function (t) {
		return this._parent.querySelector(t);
	},
	querySelectorAll: function (t) {
		return this._parent.querySelectorAll(t);
	}
};
function In(t) {
	return function () {
		return t;
	};
}
function Hn(t, n, e, r, i, o) {
	for (var s = 0, a, u = n.length, l = o.length; s < l; ++s)
		(a = n[s]) ? ((a.__data__ = o[s]), (r[s] = a)) : (e[s] = new Z(t, o[s]));
	for (; s < u; ++s) (a = n[s]) && (i[s] = a);
}
function zn(t, n, e, r, i, o, s) {
	var a,
		u,
		l = new Map(),
		c = n.length,
		f = o.length,
		h = new Array(c),
		d;
	for (a = 0; a < c; ++a)
		(u = n[a]) &&
			((h[a] = d = s.call(u, u.__data__, a, n) + ''), l.has(d) ? (i[a] = u) : l.set(d, u));
	for (a = 0; a < f; ++a)
		(d = s.call(t, o[a], a, o) + ''),
			(u = l.get(d)) ? ((r[a] = u), (u.__data__ = o[a]), l.delete(d)) : (e[a] = new Z(t, o[a]));
	for (a = 0; a < c; ++a) (u = n[a]) && l.get(h[a]) === u && (i[a] = u);
}
function Fn(t) {
	return t.__data__;
}
function On(t, n) {
	if (!arguments.length) return Array.from(this, Fn);
	var e = n ? zn : Hn,
		r = this._parents,
		i = this._groups;
	typeof t != 'function' && (t = In(t));
	for (var o = i.length, s = new Array(o), a = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
		var c = r[l],
			f = i[l],
			h = f.length,
			d = Pn(t.call(c, c && c.__data__, l, r)),
			p = d.length,
			_ = (a[l] = new Array(p)),
			k = (s[l] = new Array(p)),
			pn = (u[l] = new Array(h));
		e(c, f, _, k, pn, d, n);
		for (var R = 0, V = 0, mt, bt; R < p; ++R)
			if ((mt = _[R])) {
				for (R >= V && (V = R + 1); !(bt = k[V]) && ++V < p; );
				mt._next = bt || null;
			}
	}
	return (s = new w(s, r)), (s._enter = a), (s._exit = u), s;
}
function Pn(t) {
	return typeof t == 'object' && 'length' in t ? t : Array.from(t);
}
function qn() {
	return new w(this._exit || this._groups.map(Yt), this._parents);
}
function Dn(t, n, e) {
	var r = this.enter(),
		i = this,
		o = this.exit();
	return (
		typeof t == 'function' ? ((r = t(r)), r && (r = r.selection())) : (r = r.append(t + '')),
		n != null && ((i = n(i)), i && (i = i.selection())),
		e == null ? o.remove() : e(o),
		r && i ? r.merge(i).order() : i
	);
}
function Ln(t) {
	for (
		var n = t.selection ? t.selection() : t,
			e = this._groups,
			r = n._groups,
			i = e.length,
			o = r.length,
			s = Math.min(i, o),
			a = new Array(i),
			u = 0;
		u < s;
		++u
	)
		for (var l = e[u], c = r[u], f = l.length, h = (a[u] = new Array(f)), d, p = 0; p < f; ++p)
			(d = l[p] || c[p]) && (h[p] = d);
	for (; u < i; ++u) a[u] = e[u];
	return new w(a, this._parents);
}
function Xn() {
	for (var t = this._groups, n = -1, e = t.length; ++n < e; )
		for (var r = t[n], i = r.length - 1, o = r[i], s; --i >= 0; )
			(s = r[i]) &&
				(o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), (o = s));
	return this;
}
function Vn(t) {
	t || (t = Bn);
	function n(f, h) {
		return f && h ? t(f.__data__, h.__data__) : !f - !h;
	}
	for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
		for (var s = e[o], a = s.length, u = (i[o] = new Array(a)), l, c = 0; c < a; ++c)
			(l = s[c]) && (u[c] = l);
		u.sort(n);
	}
	return new w(i, this._parents).order();
}
function Bn(t, n) {
	return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Yn() {
	var t = arguments[0];
	return (arguments[0] = this), t.apply(null, arguments), this;
}
function Un() {
	return Array.from(this);
}
function Wn() {
	for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
		for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
			var s = r[i];
			if (s) return s;
		}
	return null;
}
function Gn() {
	let t = 0;
	for (const n of this) ++t;
	return t;
}
function Kn() {
	return !this.node();
}
function Zn(t) {
	for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
		for (var i = n[e], o = 0, s = i.length, a; o < s; ++o)
			(a = i[o]) && t.call(a, a.__data__, o, i);
	return this;
}
function Jn(t) {
	return function () {
		this.removeAttribute(t);
	};
}
function Qn(t) {
	return function () {
		this.removeAttributeNS(t.space, t.local);
	};
}
function jn(t, n) {
	return function () {
		this.setAttribute(t, n);
	};
}
function te(t, n) {
	return function () {
		this.setAttributeNS(t.space, t.local, n);
	};
}
function ne(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
	};
}
function ee(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
	};
}
function re(t, n) {
	var e = et(t);
	if (arguments.length < 2) {
		var r = this.node();
		return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
	}
	return this.each(
		(n == null
			? e.local
				? Qn
				: Jn
			: typeof n == 'function'
			? e.local
				? ee
				: ne
			: e.local
			? te
			: jn)(e, n)
	);
}
function Ut(t) {
	return (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView;
}
function ie(t) {
	return function () {
		this.style.removeProperty(t);
	};
}
function oe(t, n, e) {
	return function () {
		this.style.setProperty(t, n, e);
	};
}
function se(t, n, e) {
	return function () {
		var r = n.apply(this, arguments);
		r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
	};
}
function ae(t, n, e) {
	return arguments.length > 1
		? this.each((n == null ? ie : typeof n == 'function' ? se : oe)(t, n, e ?? ''))
		: T(this.node(), t);
}
function T(t, n) {
	return t.style.getPropertyValue(n) || Ut(t).getComputedStyle(t, null).getPropertyValue(n);
}
function ue(t) {
	return function () {
		delete this[t];
	};
}
function le(t, n) {
	return function () {
		this[t] = n;
	};
}
function ce(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		e == null ? delete this[t] : (this[t] = e);
	};
}
function fe(t, n) {
	return arguments.length > 1
		? this.each((n == null ? ue : typeof n == 'function' ? ce : le)(t, n))
		: this.node()[t];
}
function Wt(t) {
	return t.trim().split(/^|\s+/);
}
function _t(t) {
	return t.classList || new Gt(t);
}
function Gt(t) {
	(this._node = t), (this._names = Wt(t.getAttribute('class') || ''));
}
Gt.prototype = {
	add: function (t) {
		var n = this._names.indexOf(t);
		n < 0 && (this._names.push(t), this._node.setAttribute('class', this._names.join(' ')));
	},
	remove: function (t) {
		var n = this._names.indexOf(t);
		n >= 0 && (this._names.splice(n, 1), this._node.setAttribute('class', this._names.join(' ')));
	},
	contains: function (t) {
		return this._names.indexOf(t) >= 0;
	}
};
function Kt(t, n) {
	for (var e = _t(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Zt(t, n) {
	for (var e = _t(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function he(t) {
	return function () {
		Kt(this, t);
	};
}
function de(t) {
	return function () {
		Zt(this, t);
	};
}
function pe(t, n) {
	return function () {
		(n.apply(this, arguments) ? Kt : Zt)(this, t);
	};
}
function _e(t, n) {
	var e = Wt(t + '');
	if (arguments.length < 2) {
		for (var r = _t(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
		return !0;
	}
	return this.each((typeof n == 'function' ? pe : n ? he : de)(e, n));
}
function ge() {
	this.textContent = '';
}
function we(t) {
	return function () {
		this.textContent = t;
	};
}
function ve(t) {
	return function () {
		var n = t.apply(this, arguments);
		this.textContent = n ?? '';
	};
}
function ye(t) {
	return arguments.length
		? this.each(t == null ? ge : (typeof t == 'function' ? ve : we)(t))
		: this.node().textContent;
}
function xe() {
	this.innerHTML = '';
}
function me(t) {
	return function () {
		this.innerHTML = t;
	};
}
function be(t) {
	return function () {
		var n = t.apply(this, arguments);
		this.innerHTML = n ?? '';
	};
}
function Ne(t) {
	return arguments.length
		? this.each(t == null ? xe : (typeof t == 'function' ? be : me)(t))
		: this.node().innerHTML;
}
function Ae() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function ke() {
	return this.each(Ae);
}
function $e() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ee() {
	return this.each($e);
}
function Se(t) {
	var n = typeof t == 'function' ? t : Lt(t);
	return this.select(function () {
		return this.appendChild(n.apply(this, arguments));
	});
}
function Ce() {
	return null;
}
function Te(t, n) {
	var e = typeof t == 'function' ? t : Lt(t),
		r = n == null ? Ce : typeof n == 'function' ? n : pt(n);
	return this.select(function () {
		return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
function Me() {
	var t = this.parentNode;
	t && t.removeChild(this);
}
function Re() {
	return this.each(Me);
}
function Ie() {
	var t = this.cloneNode(!1),
		n = this.parentNode;
	return n ? n.insertBefore(t, this.nextSibling) : t;
}
function He() {
	var t = this.cloneNode(!0),
		n = this.parentNode;
	return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ze(t) {
	return this.select(t ? He : Ie);
}
function Fe(t) {
	return arguments.length ? this.property('__data__', t) : this.node().__data__;
}
function Oe(t) {
	return function (n) {
		t.call(this, n, this.__data__);
	};
}
function Pe(t) {
	return t
		.trim()
		.split(/^|\s+/)
		.map(function (n) {
			var e = '',
				r = n.indexOf('.');
			return r >= 0 && ((e = n.slice(r + 1)), (n = n.slice(0, r))), { type: n, name: e };
		});
}
function qe(t) {
	return function () {
		var n = this.__on;
		if (n) {
			for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
				(o = n[e]),
					(!t.type || o.type === t.type) && o.name === t.name
						? this.removeEventListener(o.type, o.listener, o.options)
						: (n[++r] = o);
			++r ? (n.length = r) : delete this.__on;
		}
	};
}
function De(t, n, e) {
	return function () {
		var r = this.__on,
			i,
			o = Oe(n);
		if (r) {
			for (var s = 0, a = r.length; s < a; ++s)
				if ((i = r[s]).type === t.type && i.name === t.name) {
					this.removeEventListener(i.type, i.listener, i.options),
						this.addEventListener(i.type, (i.listener = o), (i.options = e)),
						(i.value = n);
					return;
				}
		}
		this.addEventListener(t.type, o, e),
			(i = { type: t.type, name: t.name, value: n, listener: o, options: e }),
			r ? r.push(i) : (this.__on = [i]);
	};
}
function Le(t, n, e) {
	var r = Pe(t + ''),
		i,
		o = r.length,
		s;
	if (arguments.length < 2) {
		var a = this.node().__on;
		if (a) {
			for (var u = 0, l = a.length, c; u < l; ++u)
				for (i = 0, c = a[u]; i < o; ++i)
					if ((s = r[i]).type === c.type && s.name === c.name) return c.value;
		}
		return;
	}
	for (a = n ? De : qe, i = 0; i < o; ++i) this.each(a(r[i], n, e));
	return this;
}
function Jt(t, n, e) {
	var r = Ut(t),
		i = r.CustomEvent;
	typeof i == 'function'
		? (i = new i(n, e))
		: ((i = r.document.createEvent('Event')),
		  e
				? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
				: i.initEvent(n, !1, !1)),
		t.dispatchEvent(i);
}
function Xe(t, n) {
	return function () {
		return Jt(this, t, n);
	};
}
function Ve(t, n) {
	return function () {
		return Jt(this, t, n.apply(this, arguments));
	};
}
function Be(t, n) {
	return this.each((typeof n == 'function' ? Ve : Xe)(t, n));
}
function* Ye() {
	for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
		for (var r = t[n], i = 0, o = r.length, s; i < o; ++i) (s = r[i]) && (yield s);
}
var Qt = [null];
function w(t, n) {
	(this._groups = t), (this._parents = n);
}
function L() {
	return new w([[document.documentElement]], Qt);
}
function Ue() {
	return this;
}
w.prototype = L.prototype = {
	constructor: w,
	select: vn,
	selectAll: bn,
	selectChild: $n,
	selectChildren: Tn,
	filter: Mn,
	data: On,
	enter: Rn,
	exit: qn,
	join: Dn,
	merge: Ln,
	selection: Ue,
	order: Xn,
	sort: Vn,
	call: Yn,
	nodes: Un,
	node: Wn,
	size: Gn,
	empty: Kn,
	each: Zn,
	attr: re,
	style: ae,
	property: fe,
	classed: _e,
	text: ye,
	html: Ne,
	raise: ke,
	lower: Ee,
	append: Se,
	insert: Te,
	remove: Re,
	clone: ze,
	datum: Fe,
	on: Le,
	dispatch: Be,
	[Symbol.iterator]: Ye
};
function I(t) {
	return typeof t == 'string'
		? new w([[document.querySelector(t)]], [document.documentElement])
		: new w([[t]], Qt);
}
var We = { value: () => {} };
function jt() {
	for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
		if (!(r = arguments[t] + '') || r in e || /[\s.]/.test(r))
			throw new Error('illegal type: ' + r);
		e[r] = [];
	}
	return new W(e);
}
function W(t) {
	this._ = t;
}
function Ge(t, n) {
	return t
		.trim()
		.split(/^|\s+/)
		.map(function (e) {
			var r = '',
				i = e.indexOf('.');
			if ((i >= 0 && ((r = e.slice(i + 1)), (e = e.slice(0, i))), e && !n.hasOwnProperty(e)))
				throw new Error('unknown type: ' + e);
			return { type: e, name: r };
		});
}
W.prototype = jt.prototype = {
	constructor: W,
	on: function (t, n) {
		var e = this._,
			r = Ge(t + '', e),
			i,
			o = -1,
			s = r.length;
		if (arguments.length < 2) {
			for (; ++o < s; ) if ((i = (t = r[o]).type) && (i = Ke(e[i], t.name))) return i;
			return;
		}
		if (n != null && typeof n != 'function') throw new Error('invalid callback: ' + n);
		for (; ++o < s; )
			if ((i = (t = r[o]).type)) e[i] = kt(e[i], t.name, n);
			else if (n == null) for (i in e) e[i] = kt(e[i], t.name, null);
		return this;
	},
	copy: function () {
		var t = {},
			n = this._;
		for (var e in n) t[e] = n[e].slice();
		return new W(t);
	},
	call: function (t, n) {
		if ((i = arguments.length - 2) > 0)
			for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
		for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
	},
	apply: function (t, n, e) {
		if (!this._.hasOwnProperty(t)) throw new Error('unknown type: ' + t);
		for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
	}
};
function Ke(t, n) {
	for (var e = 0, r = t.length, i; e < r; ++e) if ((i = t[e]).name === n) return i.value;
}
function kt(t, n, e) {
	for (var r = 0, i = t.length; r < i; ++r)
		if (t[r].name === n) {
			(t[r] = We), (t = t.slice(0, r).concat(t.slice(r + 1)));
			break;
		}
	return e != null && t.push({ name: n, value: e }), t;
}
var M = 0,
	z = 0,
	H = 0,
	tn = 1e3,
	J,
	F,
	Q = 0,
	S = 0,
	rt = 0,
	O = typeof performance == 'object' && performance.now ? performance : Date,
	nn =
		typeof window == 'object' && window.requestAnimationFrame
			? window.requestAnimationFrame.bind(window)
			: function (t) {
					setTimeout(t, 17);
			  };
function gt() {
	return S || (nn(Ze), (S = O.now() + rt));
}
function Ze() {
	S = 0;
}
function j() {
	this._call = this._time = this._next = null;
}
j.prototype = en.prototype = {
	constructor: j,
	restart: function (t, n, e) {
		if (typeof t != 'function') throw new TypeError('callback is not a function');
		(e = (e == null ? gt() : +e) + (n == null ? 0 : +n)),
			!this._next && F !== this && (F ? (F._next = this) : (J = this), (F = this)),
			(this._call = t),
			(this._time = e),
			ut();
	},
	stop: function () {
		this._call && ((this._call = null), (this._time = 1 / 0), ut());
	}
};
function en(t, n, e) {
	var r = new j();
	return r.restart(t, n, e), r;
}
function Je() {
	gt(), ++M;
	for (var t = J, n; t; ) (n = S - t._time) >= 0 && t._call.call(void 0, n), (t = t._next);
	--M;
}
function $t() {
	(S = (Q = O.now()) + rt), (M = z = 0);
	try {
		Je();
	} finally {
		(M = 0), je(), (S = 0);
	}
}
function Qe() {
	var t = O.now(),
		n = t - Q;
	n > tn && ((rt -= n), (Q = t));
}
function je() {
	for (var t, n = J, e, r = 1 / 0; n; )
		n._call
			? (r > n._time && (r = n._time), (t = n), (n = n._next))
			: ((e = n._next), (n._next = null), (n = t ? (t._next = e) : (J = e)));
	(F = t), ut(r);
}
function ut(t) {
	if (!M) {
		z && (z = clearTimeout(z));
		var n = t - S;
		n > 24
			? (t < 1 / 0 && (z = setTimeout($t, t - O.now() - rt)), H && (H = clearInterval(H)))
			: (H || ((Q = O.now()), (H = setInterval(Qe, tn))), (M = 1), nn($t));
	}
}
function Et(t, n, e) {
	var r = new j();
	return (
		(n = n == null ? 0 : +n),
		r.restart(
			(i) => {
				r.stop(), t(i + n);
			},
			n,
			e
		),
		r
	);
}
var tr = jt('start', 'end', 'cancel', 'interrupt'),
	nr = [],
	rn = 0,
	St = 1,
	lt = 2,
	G = 3,
	Ct = 4,
	ct = 5,
	K = 6;
function it(t, n, e, r, i, o) {
	var s = t.__transition;
	if (!s) t.__transition = {};
	else if (e in s) return;
	er(t, e, {
		name: n,
		index: r,
		group: i,
		on: tr,
		tween: nr,
		time: o.time,
		delay: o.delay,
		duration: o.duration,
		ease: o.ease,
		timer: null,
		state: rn
	});
}
function wt(t, n) {
	var e = y(t, n);
	if (e.state > rn) throw new Error('too late; already scheduled');
	return e;
}
function m(t, n) {
	var e = y(t, n);
	if (e.state > G) throw new Error('too late; already running');
	return e;
}
function y(t, n) {
	var e = t.__transition;
	if (!e || !(e = e[n])) throw new Error('transition not found');
	return e;
}
function er(t, n, e) {
	var r = t.__transition,
		i;
	(r[n] = e), (e.timer = en(o, 0, e.time));
	function o(l) {
		(e.state = St), e.timer.restart(s, e.delay, e.time), e.delay <= l && s(l - e.delay);
	}
	function s(l) {
		var c, f, h, d;
		if (e.state !== St) return u();
		for (c in r)
			if (((d = r[c]), d.name === e.name)) {
				if (d.state === G) return Et(s);
				d.state === Ct
					? ((d.state = K),
					  d.timer.stop(),
					  d.on.call('interrupt', t, t.__data__, d.index, d.group),
					  delete r[c])
					: +c < n &&
					  ((d.state = K),
					  d.timer.stop(),
					  d.on.call('cancel', t, t.__data__, d.index, d.group),
					  delete r[c]);
			}
		if (
			(Et(function () {
				e.state === G && ((e.state = Ct), e.timer.restart(a, e.delay, e.time), a(l));
			}),
			(e.state = lt),
			e.on.call('start', t, t.__data__, e.index, e.group),
			e.state === lt)
		) {
			for (e.state = G, i = new Array((h = e.tween.length)), c = 0, f = -1; c < h; ++c)
				(d = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
			i.length = f + 1;
		}
	}
	function a(l) {
		for (
			var c =
					l < e.duration
						? e.ease.call(null, l / e.duration)
						: (e.timer.restart(u), (e.state = ct), 1),
				f = -1,
				h = i.length;
			++f < h;

		)
			i[f].call(t, c);
		e.state === ct && (e.on.call('end', t, t.__data__, e.index, e.group), u());
	}
	function u() {
		(e.state = K), e.timer.stop(), delete r[n];
		for (var l in r) return;
		delete t.__transition;
	}
}
function rr(t, n) {
	var e = t.__transition,
		r,
		i,
		o = !0,
		s;
	if (e) {
		n = n == null ? null : n + '';
		for (s in e) {
			if ((r = e[s]).name !== n) {
				o = !1;
				continue;
			}
			(i = r.state > lt && r.state < ct),
				(r.state = K),
				r.timer.stop(),
				r.on.call(i ? 'interrupt' : 'cancel', t, t.__data__, r.index, r.group),
				delete e[s];
		}
		o && delete t.__transition;
	}
}
function ir(t) {
	return this.each(function () {
		rr(this, t);
	});
}
function vt(t, n, e) {
	(t.prototype = n.prototype = e), (e.constructor = t);
}
function on(t, n) {
	var e = Object.create(t.prototype);
	for (var r in n) e[r] = n[r];
	return e;
}
function X() {}
var P = 0.7,
	tt = 1 / P,
	C = '\\s*([+-]?\\d+)\\s*',
	q = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	x = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	or = /^#([0-9a-f]{3,8})$/,
	sr = new RegExp(`^rgb\\(${C},${C},${C}\\)$`),
	ar = new RegExp(`^rgb\\(${x},${x},${x}\\)$`),
	ur = new RegExp(`^rgba\\(${C},${C},${C},${q}\\)$`),
	lr = new RegExp(`^rgba\\(${x},${x},${x},${q}\\)$`),
	cr = new RegExp(`^hsl\\(${q},${x},${x}\\)$`),
	fr = new RegExp(`^hsla\\(${q},${x},${x},${q}\\)$`),
	Tt = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
vt(X, D, {
	copy(t) {
		return Object.assign(new this.constructor(), this, t);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: Mt,
	formatHex: Mt,
	formatHex8: hr,
	formatHsl: dr,
	formatRgb: Rt,
	toString: Rt
});
function Mt() {
	return this.rgb().formatHex();
}
function hr() {
	return this.rgb().formatHex8();
}
function dr() {
	return sn(this).formatHsl();
}
function Rt() {
	return this.rgb().formatRgb();
}
function D(t) {
	var n, e;
	return (
		(t = (t + '').trim().toLowerCase()),
		(n = or.exec(t))
			? ((e = n[1].length),
			  (n = parseInt(n[1], 16)),
			  e === 6
					? It(n)
					: e === 3
					? new g(
							((n >> 8) & 15) | ((n >> 4) & 240),
							((n >> 4) & 15) | (n & 240),
							((n & 15) << 4) | (n & 15),
							1
					  )
					: e === 8
					? B((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (n & 255) / 255)
					: e === 4
					? B(
							((n >> 12) & 15) | ((n >> 8) & 240),
							((n >> 8) & 15) | ((n >> 4) & 240),
							((n >> 4) & 15) | (n & 240),
							(((n & 15) << 4) | (n & 15)) / 255
					  )
					: null)
			: (n = sr.exec(t))
			? new g(n[1], n[2], n[3], 1)
			: (n = ar.exec(t))
			? new g((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, 1)
			: (n = ur.exec(t))
			? B(n[1], n[2], n[3], n[4])
			: (n = lr.exec(t))
			? B((n[1] * 255) / 100, (n[2] * 255) / 100, (n[3] * 255) / 100, n[4])
			: (n = cr.exec(t))
			? Ft(n[1], n[2] / 100, n[3] / 100, 1)
			: (n = fr.exec(t))
			? Ft(n[1], n[2] / 100, n[3] / 100, n[4])
			: Tt.hasOwnProperty(t)
			? It(Tt[t])
			: t === 'transparent'
			? new g(NaN, NaN, NaN, 0)
			: null
	);
}
function It(t) {
	return new g((t >> 16) & 255, (t >> 8) & 255, t & 255, 1);
}
function B(t, n, e, r) {
	return r <= 0 && (t = n = e = NaN), new g(t, n, e, r);
}
function pr(t) {
	return (
		t instanceof X || (t = D(t)), t ? ((t = t.rgb()), new g(t.r, t.g, t.b, t.opacity)) : new g()
	);
}
function ft(t, n, e, r) {
	return arguments.length === 1 ? pr(t) : new g(t, n, e, r ?? 1);
}
function g(t, n, e, r) {
	(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
}
vt(
	g,
	ft,
	on(X, {
		brighter(t) {
			return (
				(t = t == null ? tt : Math.pow(tt, t)),
				new g(this.r * t, this.g * t, this.b * t, this.opacity)
			);
		},
		darker(t) {
			return (
				(t = t == null ? P : Math.pow(P, t)),
				new g(this.r * t, this.g * t, this.b * t, this.opacity)
			);
		},
		rgb() {
			return this;
		},
		clamp() {
			return new g(E(this.r), E(this.g), E(this.b), nt(this.opacity));
		},
		displayable() {
			return (
				-0.5 <= this.r &&
				this.r < 255.5 &&
				-0.5 <= this.g &&
				this.g < 255.5 &&
				-0.5 <= this.b &&
				this.b < 255.5 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		hex: Ht,
		formatHex: Ht,
		formatHex8: _r,
		formatRgb: zt,
		toString: zt
	})
);
function Ht() {
	return `#${$(this.r)}${$(this.g)}${$(this.b)}`;
}
function _r() {
	return `#${$(this.r)}${$(this.g)}${$(this.b)}${$(
		(isNaN(this.opacity) ? 1 : this.opacity) * 255
	)}`;
}
function zt() {
	const t = nt(this.opacity);
	return `${t === 1 ? 'rgb(' : 'rgba('}${E(this.r)}, ${E(this.g)}, ${E(this.b)}${
		t === 1 ? ')' : `, ${t})`
	}`;
}
function nt(t) {
	return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function E(t) {
	return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function $(t) {
	return (t = E(t)), (t < 16 ? '0' : '') + t.toString(16);
}
function Ft(t, n, e, r) {
	return (
		r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
		new v(t, n, e, r)
	);
}
function sn(t) {
	if (t instanceof v) return new v(t.h, t.s, t.l, t.opacity);
	if ((t instanceof X || (t = D(t)), !t)) return new v();
	if (t instanceof v) return t;
	t = t.rgb();
	var n = t.r / 255,
		e = t.g / 255,
		r = t.b / 255,
		i = Math.min(n, e, r),
		o = Math.max(n, e, r),
		s = NaN,
		a = o - i,
		u = (o + i) / 2;
	return (
		a
			? (n === o
					? (s = (e - r) / a + (e < r) * 6)
					: e === o
					? (s = (r - n) / a + 2)
					: (s = (n - e) / a + 4),
			  (a /= u < 0.5 ? o + i : 2 - o - i),
			  (s *= 60))
			: (a = u > 0 && u < 1 ? 0 : s),
		new v(s, a, u, t.opacity)
	);
}
function gr(t, n, e, r) {
	return arguments.length === 1 ? sn(t) : new v(t, n, e, r ?? 1);
}
function v(t, n, e, r) {
	(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
}
vt(
	v,
	gr,
	on(X, {
		brighter(t) {
			return (
				(t = t == null ? tt : Math.pow(tt, t)), new v(this.h, this.s, this.l * t, this.opacity)
			);
		},
		darker(t) {
			return (t = t == null ? P : Math.pow(P, t)), new v(this.h, this.s, this.l * t, this.opacity);
		},
		rgb() {
			var t = (this.h % 360) + (this.h < 0) * 360,
				n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
				e = this.l,
				r = e + (e < 0.5 ? e : 1 - e) * n,
				i = 2 * e - r;
			return new g(
				ot(t >= 240 ? t - 240 : t + 120, i, r),
				ot(t, i, r),
				ot(t < 120 ? t + 240 : t - 120, i, r),
				this.opacity
			);
		},
		clamp() {
			return new v(Ot(this.h), Y(this.s), Y(this.l), nt(this.opacity));
		},
		displayable() {
			return (
				((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
				0 <= this.l &&
				this.l <= 1 &&
				0 <= this.opacity &&
				this.opacity <= 1
			);
		},
		formatHsl() {
			const t = nt(this.opacity);
			return `${t === 1 ? 'hsl(' : 'hsla('}${Ot(this.h)}, ${Y(this.s) * 100}%, ${Y(this.l) * 100}%${
				t === 1 ? ')' : `, ${t})`
			}`;
		}
	})
);
function Ot(t) {
	return (t = (t || 0) % 360), t < 0 ? t + 360 : t;
}
function Y(t) {
	return Math.max(0, Math.min(1, t || 0));
}
function ot(t, n, e) {
	return (
		(t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n) *
		255
	);
}
const an = (t) => () => t;
function wr(t, n) {
	return function (e) {
		return t + e * n;
	};
}
function vr(t, n, e) {
	return (
		(t = Math.pow(t, e)),
		(n = Math.pow(n, e) - t),
		(e = 1 / e),
		function (r) {
			return Math.pow(t + r * n, e);
		}
	);
}
function yr(t) {
	return (t = +t) == 1
		? un
		: function (n, e) {
				return e - n ? vr(n, e, t) : an(isNaN(n) ? e : n);
		  };
}
function un(t, n) {
	var e = n - t;
	return e ? wr(t, e) : an(isNaN(t) ? n : t);
}
const Pt = (function t(n) {
	var e = yr(n);
	function r(i, o) {
		var s = e((i = ft(i)).r, (o = ft(o)).r),
			a = e(i.g, o.g),
			u = e(i.b, o.b),
			l = un(i.opacity, o.opacity);
		return function (c) {
			return (i.r = s(c)), (i.g = a(c)), (i.b = u(c)), (i.opacity = l(c)), i + '';
		};
	}
	return (r.gamma = t), r;
})(1);
function A(t, n) {
	return (
		(t = +t),
		(n = +n),
		function (e) {
			return t * (1 - e) + n * e;
		}
	);
}
var ht = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	st = new RegExp(ht.source, 'g');
function xr(t) {
	return function () {
		return t;
	};
}
function mr(t) {
	return function (n) {
		return t(n) + '';
	};
}
function br(t, n) {
	var e = (ht.lastIndex = st.lastIndex = 0),
		r,
		i,
		o,
		s = -1,
		a = [],
		u = [];
	for (t = t + '', n = n + ''; (r = ht.exec(t)) && (i = st.exec(n)); )
		(o = i.index) > e && ((o = n.slice(e, o)), a[s] ? (a[s] += o) : (a[++s] = o)),
			(r = r[0]) === (i = i[0])
				? a[s]
					? (a[s] += i)
					: (a[++s] = i)
				: ((a[++s] = null), u.push({ i: s, x: A(r, i) })),
			(e = st.lastIndex);
	return (
		e < n.length && ((o = n.slice(e)), a[s] ? (a[s] += o) : (a[++s] = o)),
		a.length < 2
			? u[0]
				? mr(u[0].x)
				: xr(n)
			: ((n = u.length),
			  function (l) {
					for (var c = 0, f; c < n; ++c) a[(f = u[c]).i] = f.x(l);
					return a.join('');
			  })
	);
}
var qt = 180 / Math.PI,
	dt = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function ln(t, n, e, r, i, o) {
	var s, a, u;
	return (
		(s = Math.sqrt(t * t + n * n)) && ((t /= s), (n /= s)),
		(u = t * e + n * r) && ((e -= t * u), (r -= n * u)),
		(a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (u /= a)),
		t * r < n * e && ((t = -t), (n = -n), (u = -u), (s = -s)),
		{
			translateX: i,
			translateY: o,
			rotate: Math.atan2(n, t) * qt,
			skewX: Math.atan(u) * qt,
			scaleX: s,
			scaleY: a
		}
	);
}
var U;
function Nr(t) {
	const n = new (typeof DOMMatrix == 'function' ? DOMMatrix : WebKitCSSMatrix)(t + '');
	return n.isIdentity ? dt : ln(n.a, n.b, n.c, n.d, n.e, n.f);
}
function Ar(t) {
	return t == null ||
		(U || (U = document.createElementNS('http://www.w3.org/2000/svg', 'g')),
		U.setAttribute('transform', t),
		!(t = U.transform.baseVal.consolidate()))
		? dt
		: ((t = t.matrix), ln(t.a, t.b, t.c, t.d, t.e, t.f));
}
function cn(t, n, e, r) {
	function i(l) {
		return l.length ? l.pop() + ' ' : '';
	}
	function o(l, c, f, h, d, p) {
		if (l !== f || c !== h) {
			var _ = d.push('translate(', null, n, null, e);
			p.push({ i: _ - 4, x: A(l, f) }, { i: _ - 2, x: A(c, h) });
		} else (f || h) && d.push('translate(' + f + n + h + e);
	}
	function s(l, c, f, h) {
		l !== c
			? (l - c > 180 ? (c += 360) : c - l > 180 && (l += 360),
			  h.push({ i: f.push(i(f) + 'rotate(', null, r) - 2, x: A(l, c) }))
			: c && f.push(i(f) + 'rotate(' + c + r);
	}
	function a(l, c, f, h) {
		l !== c
			? h.push({ i: f.push(i(f) + 'skewX(', null, r) - 2, x: A(l, c) })
			: c && f.push(i(f) + 'skewX(' + c + r);
	}
	function u(l, c, f, h, d, p) {
		if (l !== f || c !== h) {
			var _ = d.push(i(d) + 'scale(', null, ',', null, ')');
			p.push({ i: _ - 4, x: A(l, f) }, { i: _ - 2, x: A(c, h) });
		} else (f !== 1 || h !== 1) && d.push(i(d) + 'scale(' + f + ',' + h + ')');
	}
	return function (l, c) {
		var f = [],
			h = [];
		return (
			(l = t(l)),
			(c = t(c)),
			o(l.translateX, l.translateY, c.translateX, c.translateY, f, h),
			s(l.rotate, c.rotate, f, h),
			a(l.skewX, c.skewX, f, h),
			u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h),
			(l = c = null),
			function (d) {
				for (var p = -1, _ = h.length, k; ++p < _; ) f[(k = h[p]).i] = k.x(d);
				return f.join('');
			}
		);
	};
}
var kr = cn(Nr, 'px, ', 'px)', 'deg)'),
	$r = cn(Ar, ', ', ')', ')');
function Er(t, n) {
	var e, r;
	return function () {
		var i = m(this, t),
			o = i.tween;
		if (o !== e) {
			r = e = o;
			for (var s = 0, a = r.length; s < a; ++s)
				if (r[s].name === n) {
					(r = r.slice()), r.splice(s, 1);
					break;
				}
		}
		i.tween = r;
	};
}
function Sr(t, n, e) {
	var r, i;
	if (typeof e != 'function') throw new Error();
	return function () {
		var o = m(this, t),
			s = o.tween;
		if (s !== r) {
			i = (r = s).slice();
			for (var a = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
				if (i[u].name === n) {
					i[u] = a;
					break;
				}
			u === l && i.push(a);
		}
		o.tween = i;
	};
}
function Cr(t, n) {
	var e = this._id;
	if (((t += ''), arguments.length < 2)) {
		for (var r = y(this.node(), e).tween, i = 0, o = r.length, s; i < o; ++i)
			if ((s = r[i]).name === t) return s.value;
		return null;
	}
	return this.each((n == null ? Er : Sr)(e, t, n));
}
function yt(t, n, e) {
	var r = t._id;
	return (
		t.each(function () {
			var i = m(this, r);
			(i.value || (i.value = {}))[n] = e.apply(this, arguments);
		}),
		function (i) {
			return y(i, r).value[n];
		}
	);
}
function fn(t, n) {
	var e;
	return (typeof n == 'number' ? A : n instanceof D ? Pt : (e = D(n)) ? ((n = e), Pt) : br)(t, n);
}
function Tr(t) {
	return function () {
		this.removeAttribute(t);
	};
}
function Mr(t) {
	return function () {
		this.removeAttributeNS(t.space, t.local);
	};
}
function Rr(t, n, e) {
	var r,
		i = e + '',
		o;
	return function () {
		var s = this.getAttribute(t);
		return s === i ? null : s === r ? o : (o = n((r = s), e));
	};
}
function Ir(t, n, e) {
	var r,
		i = e + '',
		o;
	return function () {
		var s = this.getAttributeNS(t.space, t.local);
		return s === i ? null : s === r ? o : (o = n((r = s), e));
	};
}
function Hr(t, n, e) {
	var r, i, o;
	return function () {
		var s,
			a = e(this),
			u;
		return a == null
			? void this.removeAttribute(t)
			: ((s = this.getAttribute(t)),
			  (u = a + ''),
			  s === u ? null : s === r && u === i ? o : ((i = u), (o = n((r = s), a))));
	};
}
function zr(t, n, e) {
	var r, i, o;
	return function () {
		var s,
			a = e(this),
			u;
		return a == null
			? void this.removeAttributeNS(t.space, t.local)
			: ((s = this.getAttributeNS(t.space, t.local)),
			  (u = a + ''),
			  s === u ? null : s === r && u === i ? o : ((i = u), (o = n((r = s), a))));
	};
}
function Fr(t, n) {
	var e = et(t),
		r = e === 'transform' ? $r : fn;
	return this.attrTween(
		t,
		typeof n == 'function'
			? (e.local ? zr : Hr)(e, r, yt(this, 'attr.' + t, n))
			: n == null
			? (e.local ? Mr : Tr)(e)
			: (e.local ? Ir : Rr)(e, r, n)
	);
}
function Or(t, n) {
	return function (e) {
		this.setAttribute(t, n.call(this, e));
	};
}
function Pr(t, n) {
	return function (e) {
		this.setAttributeNS(t.space, t.local, n.call(this, e));
	};
}
function qr(t, n) {
	var e, r;
	function i() {
		var o = n.apply(this, arguments);
		return o !== r && (e = (r = o) && Pr(t, o)), e;
	}
	return (i._value = n), i;
}
function Dr(t, n) {
	var e, r;
	function i() {
		var o = n.apply(this, arguments);
		return o !== r && (e = (r = o) && Or(t, o)), e;
	}
	return (i._value = n), i;
}
function Lr(t, n) {
	var e = 'attr.' + t;
	if (arguments.length < 2) return (e = this.tween(e)) && e._value;
	if (n == null) return this.tween(e, null);
	if (typeof n != 'function') throw new Error();
	var r = et(t);
	return this.tween(e, (r.local ? qr : Dr)(r, n));
}
function Xr(t, n) {
	return function () {
		wt(this, t).delay = +n.apply(this, arguments);
	};
}
function Vr(t, n) {
	return (
		(n = +n),
		function () {
			wt(this, t).delay = n;
		}
	);
}
function Br(t) {
	var n = this._id;
	return arguments.length
		? this.each((typeof t == 'function' ? Xr : Vr)(n, t))
		: y(this.node(), n).delay;
}
function Yr(t, n) {
	return function () {
		m(this, t).duration = +n.apply(this, arguments);
	};
}
function Ur(t, n) {
	return (
		(n = +n),
		function () {
			m(this, t).duration = n;
		}
	);
}
function Wr(t) {
	var n = this._id;
	return arguments.length
		? this.each((typeof t == 'function' ? Yr : Ur)(n, t))
		: y(this.node(), n).duration;
}
function Gr(t, n) {
	if (typeof n != 'function') throw new Error();
	return function () {
		m(this, t).ease = n;
	};
}
function Kr(t) {
	var n = this._id;
	return arguments.length ? this.each(Gr(n, t)) : y(this.node(), n).ease;
}
function Zr(t, n) {
	return function () {
		var e = n.apply(this, arguments);
		if (typeof e != 'function') throw new Error();
		m(this, t).ease = e;
	};
}
function Jr(t) {
	if (typeof t != 'function') throw new Error();
	return this.each(Zr(this._id, t));
}
function Qr(t) {
	typeof t != 'function' && (t = Vt(t));
	for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
		for (var o = n[i], s = o.length, a = (r[i] = []), u, l = 0; l < s; ++l)
			(u = o[l]) && t.call(u, u.__data__, l, o) && a.push(u);
	return new N(r, this._parents, this._name, this._id);
}
function jr(t) {
	if (t._id !== this._id) throw new Error();
	for (
		var n = this._groups,
			e = t._groups,
			r = n.length,
			i = e.length,
			o = Math.min(r, i),
			s = new Array(r),
			a = 0;
		a < o;
		++a
	)
		for (var u = n[a], l = e[a], c = u.length, f = (s[a] = new Array(c)), h, d = 0; d < c; ++d)
			(h = u[d] || l[d]) && (f[d] = h);
	for (; a < r; ++a) s[a] = n[a];
	return new N(s, this._parents, this._name, this._id);
}
function ti(t) {
	return (t + '')
		.trim()
		.split(/^|\s+/)
		.every(function (n) {
			var e = n.indexOf('.');
			return e >= 0 && (n = n.slice(0, e)), !n || n === 'start';
		});
}
function ni(t, n, e) {
	var r,
		i,
		o = ti(n) ? wt : m;
	return function () {
		var s = o(this, t),
			a = s.on;
		a !== r && (i = (r = a).copy()).on(n, e), (s.on = i);
	};
}
function ei(t, n) {
	var e = this._id;
	return arguments.length < 2 ? y(this.node(), e).on.on(t) : this.each(ni(e, t, n));
}
function ri(t) {
	return function () {
		var n = this.parentNode;
		for (var e in this.__transition) if (+e !== t) return;
		n && n.removeChild(this);
	};
}
function ii() {
	return this.on('end.remove', ri(this._id));
}
function oi(t) {
	var n = this._name,
		e = this._id;
	typeof t != 'function' && (t = pt(t));
	for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s)
		for (var a = r[s], u = a.length, l = (o[s] = new Array(u)), c, f, h = 0; h < u; ++h)
			(c = a[h]) &&
				(f = t.call(c, c.__data__, h, a)) &&
				('__data__' in c && (f.__data__ = c.__data__), (l[h] = f), it(l[h], n, e, h, l, y(c, e)));
	return new N(o, this._parents, n, e);
}
function si(t) {
	var n = this._name,
		e = this._id;
	typeof t != 'function' && (t = Xt(t));
	for (var r = this._groups, i = r.length, o = [], s = [], a = 0; a < i; ++a)
		for (var u = r[a], l = u.length, c, f = 0; f < l; ++f)
			if ((c = u[f])) {
				for (var h = t.call(c, c.__data__, f, u), d, p = y(c, e), _ = 0, k = h.length; _ < k; ++_)
					(d = h[_]) && it(d, n, e, _, h, p);
				o.push(h), s.push(c);
			}
	return new N(o, s, n, e);
}
var ai = L.prototype.constructor;
function ui() {
	return new ai(this._groups, this._parents);
}
function li(t, n) {
	var e, r, i;
	return function () {
		var o = T(this, t),
			s = (this.style.removeProperty(t), T(this, t));
		return o === s ? null : o === e && s === r ? i : (i = n((e = o), (r = s)));
	};
}
function hn(t) {
	return function () {
		this.style.removeProperty(t);
	};
}
function ci(t, n, e) {
	var r,
		i = e + '',
		o;
	return function () {
		var s = T(this, t);
		return s === i ? null : s === r ? o : (o = n((r = s), e));
	};
}
function fi(t, n, e) {
	var r, i, o;
	return function () {
		var s = T(this, t),
			a = e(this),
			u = a + '';
		return (
			a == null && (u = a = (this.style.removeProperty(t), T(this, t))),
			s === u ? null : s === r && u === i ? o : ((i = u), (o = n((r = s), a)))
		);
	};
}
function hi(t, n) {
	var e,
		r,
		i,
		o = 'style.' + n,
		s = 'end.' + o,
		a;
	return function () {
		var u = m(this, t),
			l = u.on,
			c = u.value[o] == null ? a || (a = hn(n)) : void 0;
		(l !== e || i !== c) && (r = (e = l).copy()).on(s, (i = c)), (u.on = r);
	};
}
function di(t, n, e) {
	var r = (t += '') == 'transform' ? kr : fn;
	return n == null
		? this.styleTween(t, li(t, r)).on('end.style.' + t, hn(t))
		: typeof n == 'function'
		? this.styleTween(t, fi(t, r, yt(this, 'style.' + t, n))).each(hi(this._id, t))
		: this.styleTween(t, ci(t, r, n), e).on('end.style.' + t, null);
}
function pi(t, n, e) {
	return function (r) {
		this.style.setProperty(t, n.call(this, r), e);
	};
}
function _i(t, n, e) {
	var r, i;
	function o() {
		var s = n.apply(this, arguments);
		return s !== i && (r = (i = s) && pi(t, s, e)), r;
	}
	return (o._value = n), o;
}
function gi(t, n, e) {
	var r = 'style.' + (t += '');
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (n == null) return this.tween(r, null);
	if (typeof n != 'function') throw new Error();
	return this.tween(r, _i(t, n, e ?? ''));
}
function wi(t) {
	return function () {
		this.textContent = t;
	};
}
function vi(t) {
	return function () {
		var n = t(this);
		this.textContent = n ?? '';
	};
}
function yi(t) {
	return this.tween(
		'text',
		typeof t == 'function' ? vi(yt(this, 'text', t)) : wi(t == null ? '' : t + '')
	);
}
function xi(t) {
	return function (n) {
		this.textContent = t.call(this, n);
	};
}
function mi(t) {
	var n, e;
	function r() {
		var i = t.apply(this, arguments);
		return i !== e && (n = (e = i) && xi(i)), n;
	}
	return (r._value = t), r;
}
function bi(t) {
	var n = 'text';
	if (arguments.length < 1) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != 'function') throw new Error();
	return this.tween(n, mi(t));
}
function Ni() {
	for (
		var t = this._name, n = this._id, e = dn(), r = this._groups, i = r.length, o = 0;
		o < i;
		++o
	)
		for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
			if ((u = s[l])) {
				var c = y(u, n);
				it(u, t, e, l, s, {
					time: c.time + c.delay + c.duration,
					delay: 0,
					duration: c.duration,
					ease: c.ease
				});
			}
	return new N(r, this._parents, t, e);
}
function Ai() {
	var t,
		n,
		e = this,
		r = e._id,
		i = e.size();
	return new Promise(function (o, s) {
		var a = { value: s },
			u = {
				value: function () {
					--i === 0 && o();
				}
			};
		e.each(function () {
			var l = m(this, r),
				c = l.on;
			c !== t && ((n = (t = c).copy()), n._.cancel.push(a), n._.interrupt.push(a), n._.end.push(u)),
				(l.on = n);
		}),
			i === 0 && o();
	});
}
var ki = 0;
function N(t, n, e, r) {
	(this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
}
function dn() {
	return ++ki;
}
var b = L.prototype;
N.prototype = {
	constructor: N,
	select: oi,
	selectAll: si,
	selectChild: b.selectChild,
	selectChildren: b.selectChildren,
	filter: Qr,
	merge: jr,
	selection: ui,
	transition: Ni,
	call: b.call,
	nodes: b.nodes,
	node: b.node,
	size: b.size,
	empty: b.empty,
	each: b.each,
	on: ei,
	attr: Fr,
	attrTween: Lr,
	style: di,
	styleTween: gi,
	text: yi,
	textTween: bi,
	remove: ii,
	tween: Cr,
	delay: Br,
	duration: Wr,
	ease: Kr,
	easeVarying: Jr,
	end: Ai,
	[Symbol.iterator]: b[Symbol.iterator]
};
function $i(t) {
	return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var xt = 3;
(function t(n) {
	n = +n;
	function e(r) {
		return Math.pow(r, n);
	}
	return (e.exponent = t), e;
})(xt);
var Ei = (function t(n) {
	n = +n;
	function e(r) {
		return 1 - Math.pow(1 - r, n);
	}
	return (e.exponent = t), e;
})(xt);
(function t(n) {
	n = +n;
	function e(r) {
		return ((r *= 2) <= 1 ? Math.pow(r, n) : 2 - Math.pow(2 - r, n)) / 2;
	}
	return (e.exponent = t), e;
})(xt);
var Si = { time: null, delay: 0, duration: 250, ease: $i };
function Ci(t, n) {
	for (var e; !(e = t.__transition) || !(e = e[n]); )
		if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
	return e;
}
function Ti(t) {
	var n, e;
	t instanceof N
		? ((n = t._id), (t = t._name))
		: ((n = dn()), ((e = Si).time = gt()), (t = t == null ? null : t + ''));
	for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
		for (var s = r[o], a = s.length, u, l = 0; l < a; ++l)
			(u = s[l]) && it(u, t, n, l, s, e || Ci(u, n));
	return new N(r, this._parents, t, n);
}
L.prototype.interrupt = ir;
L.prototype.transition = Ti;
Mi(Dt);
class Ii {
	constructor(n) {
		(this.tileSource = n),
			(this._query = {}),
			(this.tiles = new Set()),
			n && this.tiles.add(n),
			(this.background_color = '#000F'),
			(this.duration = 5e3);
	}
	bind(n) {
		this.container = I(n);
		const e = {
			constrainDuringPan: !0,
			element: I(n).node(),
			minZoomLevel: 1,
			prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
			showNavigator: !0,
			visibilityRatio: 1,
			animationTime: 5
		};
		if (this.tiles.size) {
			e.tileSources = [];
			for (let r of this.tiles) e.tileSources.push(r);
		}
		(this.viewer = Dt(e)), (this.bound = !0);
	}
	set query(n) {
		this._query = n;
	}
	get query() {
		const n = this.current_zoom();
		return (this._query.zoom = n), this._query;
	}
	create_annotation_layer() {
		if (this.annotation_layer) return;
		I('.openseadragon-container')
			.transition(this.duration)
			.style('background', this.background_color);
		const n = this.viewer.svgOverlay(),
			e = n.node(),
			r = I(e.parentElement),
			i = r.append('radialGradient').attr('id', 'circle_penumbra');
		i.append('stop').attr('offset', '50%').attr('stop-color', '#000F'),
			i.append('stop').attr('offset', '100%').attr('stop-color', '#0000');
		const o = r.append('mask').attr('id', 'mask1');
		o
			.append('rect')
			.attr('x', 0)
			.attr('y', 0)
			.attr('width', 1.02)
			.attr('height', 3)
			.style('transform', 'translate(-0.1, 0)')
			.style('fill', 'white'),
			o
				.append('circle')
				.attr('cx', 0.5)
				.attr('cy', 0.5)
				.attr('r', 0.25)
				.attr('fill', "url('#circle_penumbra')");
		const s = I(e)
			.append('rect')
			.attr('width', '100%')
			.attr('height', '101%')
			.attr('fill', this.background_color)
			.attr('mask', "url('#mask1'");
		this.annotation_layer = { bounds: s, mask: o, gradient: i, overlay: n };
	}
	prepare_seaclick() {
		const { viewer: n } = this;
		n.innerTracker.pressHandler = ({ position: e }) => {
			const r = new Nt.Point(parseInt(e.x), parseInt(e.y)),
				{ x: i, y: o } = n.viewport.pointFromPixel(r),
				s = this.current_zoom[2] * 0.2,
				a = new CustomEvent('build_circle', { bubbles: !0, detail: { x: i, y: o, size: s } });
			this.container.node().dispatchEvent(a);
		};
	}
	update_annotations(n = []) {
		if (this.annotation_layer) {
			if (n.length === 0) {
				this.annotation_layer.bounds
					.transition(this.duration)
					.attr('fill', this.background_color)
					.attr('opacity', 0);
				return;
			}
			this.prepare_seaclick(),
				this.annotation_layer.bounds
					.transition(this.duration)
					.attr('fill', this.background_color)
					.attr('opacity', 1),
				this.annotation_layer.mask
					.selectAll('circle')
					.data(n)
					.join(
						(e) => e.append('circle').attr('r', 0).attr('fill', "url('#circle_penumbra')"),
						(e) => e,
						(e) =>
							e.call((r) =>
								r
									.transition()
									.duration(this.duration)
									.attr('r', n.length * 2)
									.remove()
							)
					)
					.filter((e) => e)
					.transition()
					.ease(Ei.exponent(4))
					.duration(this.duration)
					.attr('cx', (e) => e.x)
					.attr('cy', (e) => e.y)
					.attr('r', (e) => e.size);
		}
	}
	async plotAPI(n) {
		this.create_annotation_layer(),
			n.zoom || (this._query.zoom = void 0),
			(this._query = { ...this._query, ...n }),
			(n = this._query),
			n.source_url &&
				!this.tiles.has(n.source_url) &&
				(await new Promise((s, a) => {
					this.viewer.addTiledImage({
						tileSource: n.source_url,
						success: () => {
							this.create_annotation_layer(), s(!0);
						}
					});
				}),
				this.tiles.add(n.source_url),
				this.create_annotation_layer());
		const { viewer: e } = this;
		let { callouts: r, zoom: i } = n;
		r || (r = []),
			this.update_annotations(r),
			i && e.viewport.fitBounds(new Nt.Rect(...i.slice(0, 4)));
	}
	circle(n = 0.5) {
		const [e, r, i, o] = this.current_zoom();
		return { x: e + i / 2, y: r + o / 2, size: Math.min(i, o) * n };
	}
	current_zoom() {
		const { x: n, y: e, width: r, height: i, degrees: o } = this.viewer.viewport.getBounds(!0);
		return [n, e, r, i];
	}
}
function Mi(t) {
	var n = 'http://www.w3.org/2000/svg';
	t.Viewer.prototype.svgOverlay = function () {
		return this._svgOverlayInfo
			? this._svgOverlayInfo
			: ((this._svgOverlayInfo = new e(this)), this._svgOverlayInfo);
	};
	var e = function (r) {
		var i = this;
		(this._viewer = r),
			(this._containerWidth = 0),
			(this._containerHeight = 0),
			(this._svg = document.createElementNS(n, 'svg')),
			(this._svg.style.position = 'absolute'),
			(this._svg.style.left = 0),
			(this._svg.style.top = 0),
			(this._svg.style.width = '100%'),
			(this._svg.style.height = '100%'),
			this._viewer.canvas.appendChild(this._svg),
			(this._node = document.createElementNS(n, 'g')),
			this._svg.appendChild(this._node),
			this._viewer.addHandler('animation', function () {
				i.resize();
			}),
			this._viewer.addHandler('open', function () {
				i.resize();
			}),
			this._viewer.addHandler('rotate', function (o) {
				i.resize();
			}),
			this._viewer.addHandler('resize', function () {
				i.resize();
			}),
			this.resize();
	};
	e.prototype = {
		node: function () {
			return this._node;
		},
		resize: function () {
			this._containerWidth !== this._viewer.container.clientWidth &&
				((this._containerWidth = this._viewer.container.clientWidth),
				this._svg.setAttribute('width', this._containerWidth)),
				this._containerHeight !== this._viewer.container.clientHeight &&
					((this._containerHeight = this._viewer.container.clientHeight),
					this._svg.setAttribute('height', this._containerHeight));
			var r = this._viewer.viewport.pixelFromPoint(new t.Point(0, 0), !0),
				i = this._viewer.viewport.getZoom(!0),
				o = this._viewer.viewport.getRotation(),
				s = this._viewer.viewport._containerInnerSize.x * i;
			this._node.setAttribute(
				'transform',
				'translate(' + r.x + ',' + r.y + ') scale(' + s + ') rotate(' + o + ')'
			);
		},
		onClick: function (r, i) {
			new t.MouseTracker({ element: r, clickHandler: i }).setTracking(!0);
		}
	};
}
export { Ii as default };
