function $() {}
function Q(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function D(t) {
	return t();
}
function k() {
	return Object.create(null);
}
function p(t) {
	t.forEach(D);
}
function O(t) {
	return typeof t == 'function';
}
function _t(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function U(t) {
	return Object.keys(t).length === 0;
}
function V(t, ...n) {
	if (t == null) return $;
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function dt(t, n, e) {
	t.$$.on_destroy.push(V(n, e));
}
function ht(t, n, e, i) {
	if (t) {
		const r = B(t, n, e, i);
		return t[0](r);
	}
}
function B(t, n, e, i) {
	return t[1] && i ? Q(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function mt(t, n, e, i) {
	if (t[2] && i) {
		const r = t[2](i(e));
		if (n.dirty === void 0) return r;
		if (typeof r == 'object') {
			const l = [],
				s = Math.max(n.dirty.length, r.length);
			for (let o = 0; o < s; o += 1) l[o] = n.dirty[o] | r[o];
			return l;
		}
		return n.dirty | r;
	}
	return n.dirty;
}
function pt(t, n, e, i, r, l) {
	if (r) {
		const s = B(n, e, i, l);
		t.p(s, r);
	}
}
function yt(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
function gt(t) {
	const n = {};
	for (const e in t) e[0] !== '$' && (n[e] = t[e]);
	return n;
}
function xt(t, n) {
	const e = {};
	n = new Set(n);
	for (const i in t) !n.has(i) && i[0] !== '$' && (e[i] = t[i]);
	return e;
}
let v = !1;
function X() {
	v = !0;
}
function Y() {
	v = !1;
}
function Z(t, n, e, i) {
	for (; t < n; ) {
		const r = t + ((n - t) >> 1);
		e(r) <= i ? (t = r + 1) : (n = r);
	}
	return t;
}
function tt(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let u = 0; u < n.length; u++) {
			const a = n[u];
			a.claim_order !== void 0 && c.push(a);
		}
		n = c;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let r = 0;
	for (let c = 0; c < n.length; c++) {
		const u = n[c].claim_order,
			a = (r > 0 && n[e[r]].claim_order <= u ? r + 1 : Z(1, r, (y) => n[e[y]].claim_order, u)) - 1;
		i[c] = e[a] + 1;
		const f = a + 1;
		(e[f] = c), (r = Math.max(f, r));
	}
	const l = [],
		s = [];
	let o = n.length - 1;
	for (let c = e[r] + 1; c != 0; c = i[c - 1]) {
		for (l.push(n[c - 1]); o >= c; o--) s.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) s.push(n[o]);
	l.reverse(), s.sort((c, u) => c.claim_order - u.claim_order);
	for (let c = 0, u = 0; c < s.length; c++) {
		for (; u < l.length && s[c].claim_order >= l[u].claim_order; ) u++;
		const a = u < l.length ? l[u] : null;
		t.insertBefore(s[c], a);
	}
}
function nt(t, n) {
	if (v) {
		for (
			tt(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function et(t, n, e) {
	t.insertBefore(n, e || null);
}
function it(t, n, e) {
	v && !e ? nt(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function w(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function bt(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function P(t) {
	return document.createElement(t);
}
function G(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function A(t) {
	return document.createTextNode(t);
}
function $t() {
	return A(' ');
}
function wt() {
	return A('');
}
function vt(t, n, e, i) {
	return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function R(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function Nt(t, n) {
	const e = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const i in n)
		n[i] == null
			? t.removeAttribute(i)
			: i === 'style'
			? (t.style.cssText = n[i])
			: i === '__value'
			? (t.value = t[i] = n[i])
			: e[i] && e[i].set
			? (t[i] = n[i])
			: R(t, i, n[i]);
}
function Tt(t, n) {
	for (const e in n) R(t, e, n[e]);
}
function Et(t) {
	return t === '' ? null : +t;
}
function rt(t) {
	return Array.from(t.childNodes);
}
function q(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function z(t, n, e, i, r = !1) {
	q(t);
	const l = (() => {
		for (let s = t.claim_info.last_index; s < t.length; s++) {
			const o = t[s];
			if (n(o)) {
				const c = e(o);
				return c === void 0 ? t.splice(s, 1) : (t[s] = c), r || (t.claim_info.last_index = s), o;
			}
		}
		for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
			const o = t[s];
			if (n(o)) {
				const c = e(o);
				return (
					c === void 0 ? t.splice(s, 1) : (t[s] = c),
					r ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = s),
					o
				);
			}
		}
		return i();
	})();
	return (l.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), l;
}
function F(t, n, e, i) {
	return z(
		t,
		(r) => r.nodeName === n,
		(r) => {
			const l = [];
			for (let s = 0; s < r.attributes.length; s++) {
				const o = r.attributes[s];
				e[o.name] || l.push(o.name);
			}
			l.forEach((s) => r.removeAttribute(s));
		},
		() => i(n)
	);
}
function At(t, n, e) {
	return F(t, n, e, P);
}
function St(t, n, e) {
	return F(t, n, e, G);
}
function st(t, n) {
	return z(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => A(n),
		!0
	);
}
function jt(t) {
	return st(t, ' ');
}
function H(t, n, e) {
	for (let i = e; i < t.length; i += 1) {
		const r = t[i];
		if (r.nodeType === 8 && r.textContent.trim() === n) return i;
	}
	return t.length;
}
function kt(t, n) {
	const e = H(t, 'HTML_TAG_START', 0),
		i = H(t, 'HTML_TAG_END', e);
	if (e === i) return new M(void 0, n);
	q(t);
	const r = t.splice(e, i - e + 1);
	w(r[0]), w(r[r.length - 1]);
	const l = r.slice(1, r.length - 1);
	for (const s of l)
		(s.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new M(l, n);
}
function Ht(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function Mt(t, n) {
	t.value = n ?? '';
}
function Ct(t, n, e, i) {
	e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? 'important' : '');
}
function Lt(t, n, e) {
	t.classList[e ? 'add' : 'remove'](n);
}
function Dt(t, n) {
	const e = [];
	let i = 0;
	for (const r of n.childNodes)
		if (r.nodeType === 8) {
			const l = r.textContent.trim();
			l === `HEAD_${t}_END`
				? ((i -= 1), e.push(r))
				: l === `HEAD_${t}_START` && ((i += 1), e.push(r));
		} else i > 0 && e.push(r);
	return e;
}
class ct {
	constructor(n = !1) {
		(this.is_svg = !1), (this.is_svg = n), (this.e = this.n = null);
	}
	c(n) {
		this.h(n);
	}
	m(n, e, i = null) {
		this.e ||
			(this.is_svg ? (this.e = G(e.nodeName)) : (this.e = P(e.nodeName)), (this.t = e), this.c(n)),
			this.i(i);
	}
	h(n) {
		(this.e.innerHTML = n), (this.n = Array.from(this.e.childNodes));
	}
	i(n) {
		for (let e = 0; e < this.n.length; e += 1) et(this.t, this.n[e], n);
	}
	p(n) {
		this.d(), this.h(n), this.i(this.a);
	}
	d() {
		this.n.forEach(w);
	}
}
class M extends ct {
	constructor(n, e = !1) {
		super(e), (this.e = this.n = null), (this.l = n);
	}
	c(n) {
		this.l ? (this.n = this.l) : super.c(n);
	}
	i(n) {
		for (let e = 0; e < this.n.length; e += 1) it(this.t, this.n[e], n);
	}
}
function Ot(t, n) {
	return new t(n);
}
let m;
function h(t) {
	m = t;
}
function W() {
	if (!m) throw new Error('Function called outside component initialization');
	return m;
}
function Bt(t) {
	W().$$.on_mount.push(t);
}
function Pt(t) {
	W().$$.after_update.push(t);
}
const d = [],
	C = [],
	x = [],
	L = [],
	I = Promise.resolve();
let T = !1;
function J() {
	T || ((T = !0), I.then(K));
}
function Gt() {
	return J(), I;
}
function E(t) {
	x.push(t);
}
const N = new Set();
let g = 0;
function K() {
	const t = m;
	do {
		for (; g < d.length; ) {
			const n = d[g];
			g++, h(n), lt(n.$$);
		}
		for (h(null), d.length = 0, g = 0; C.length; ) C.pop()();
		for (let n = 0; n < x.length; n += 1) {
			const e = x[n];
			N.has(e) || (N.add(e), e());
		}
		x.length = 0;
	} while (d.length);
	for (; L.length; ) L.pop()();
	(T = !1), N.clear(), h(t);
}
function lt(t) {
	if (t.fragment !== null) {
		t.update(), p(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(E);
	}
}
const b = new Set();
let _;
function Rt() {
	_ = { r: 0, c: [], p: _ };
}
function qt() {
	_.r || p(_.c), (_ = _.p);
}
function ot(t, n) {
	t && t.i && (b.delete(t), t.i(n));
}
function zt(t, n, e, i) {
	if (t && t.o) {
		if (b.has(t)) return;
		b.add(t),
			_.c.push(() => {
				b.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	} else i && i();
}
function Ft(t, n) {
	const e = {},
		i = {},
		r = { $$scope: 1 };
	let l = t.length;
	for (; l--; ) {
		const s = t[l],
			o = n[l];
		if (o) {
			for (const c in s) c in o || (i[c] = 1);
			for (const c in o) r[c] || ((e[c] = o[c]), (r[c] = 1));
			t[l] = o;
		} else for (const c in s) r[c] = 1;
	}
	for (const s in i) s in e || (e[s] = void 0);
	return e;
}
function Wt(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function It(t) {
	t && t.c();
}
function Jt(t, n) {
	t && t.l(n);
}
function ut(t, n, e, i) {
	const { fragment: r, after_update: l } = t.$$;
	r && r.m(n, e),
		i ||
			E(() => {
				const s = t.$$.on_mount.map(D).filter(O);
				t.$$.on_destroy ? t.$$.on_destroy.push(...s) : p(s), (t.$$.on_mount = []);
			}),
		l.forEach(E);
}
function ft(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(p(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function at(t, n) {
	t.$$.dirty[0] === -1 && (d.push(t), J(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Kt(t, n, e, i, r, l, s, o = [-1]) {
	const c = m;
	h(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: [],
		props: l,
		update: $,
		not_equal: r,
		bound: k(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (c ? c.$$.context : [])),
		callbacks: k(),
		dirty: o,
		skip_bound: !1,
		root: n.target || c.$$.root
	});
	s && s(u.root);
	let a = !1;
	if (
		((u.ctx = e
			? e(t, n.props || {}, (f, y, ...S) => {
					const j = S.length ? S[0] : y;
					return (
						u.ctx &&
							r(u.ctx[f], (u.ctx[f] = j)) &&
							(!u.skip_bound && u.bound[f] && u.bound[f](j), a && at(t, f)),
						y
					);
			  })
			: []),
		u.update(),
		(a = !0),
		p(u.before_update),
		(u.fragment = i ? i(u.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			X();
			const f = rt(n.target);
			u.fragment && u.fragment.l(f), f.forEach(w);
		} else u.fragment && u.fragment.c();
		n.intro && ot(t.$$.fragment), ut(t, n.target, n.anchor, n.customElement), Y(), K();
	}
	h(c);
}
class Qt {
	$destroy() {
		ft(this, 1), (this.$destroy = $);
	}
	$on(n, e) {
		if (!O(e)) return $;
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const r = i.indexOf(e);
				r !== -1 && i.splice(r, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !U(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
export {
	Wt as $,
	Gt as A,
	$ as B,
	ht as C,
	pt as D,
	yt as E,
	mt as F,
	nt as G,
	dt as H,
	Q as I,
	G as J,
	St as K,
	Tt as L,
	Ft as M,
	xt as N,
	gt as O,
	M as P,
	kt as Q,
	Nt as R,
	Qt as S,
	vt as T,
	p as U,
	bt as V,
	Dt as W,
	Lt as X,
	C as Y,
	Mt as Z,
	Et as _,
	$t as a,
	it as b,
	jt as c,
	qt as d,
	wt as e,
	ot as f,
	Rt as g,
	w as h,
	Kt as i,
	Pt as j,
	P as k,
	At as l,
	rt as m,
	R as n,
	Bt as o,
	Ct as p,
	A as q,
	st as r,
	_t as s,
	zt as t,
	Ht as u,
	Ot as v,
	It as w,
	Jt as x,
	ut as y,
	ft as z
};
