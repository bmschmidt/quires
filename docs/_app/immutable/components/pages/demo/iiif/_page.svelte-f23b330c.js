import {
	S as E,
	i as B,
	s as T,
	I as N,
	k as b,
	l as w,
	m as P,
	h as o,
	R as y,
	X as F,
	b as f,
	M as U,
	B as j,
	o as W,
	q as v,
	a as G,
	e as V,
	r as I,
	c as H,
	G as J,
	f as $,
	t as D,
	w as q,
	x as z,
	y as A,
	z as C
} from '../../../../chunks/index-c1110d94.js';
import { I as X, D as K } from '../../../../chunks/Document-7acfde01.js';
import { _ as Q } from '../../../../chunks/preload-helper-41c905a7.js';
const Y = `{"pandoc-api-version":[1,22,1],"meta":{"author":{"t":"MetaInlines","c":[{"t":"Str","c":"Ben"},{"t":"Space"},{"t":"Str","c":"Schmidt"}]},"date":{"t":"MetaInlines","c":[{"t":"Str","c":"2022-02-08"}]},"title":{"t":"MetaInlines","c":[{"t":"Str","c":"IIIF"},{"t":"Space"},{"t":"Str","c":"in"},{"t":"Space"},{"t":"Str","c":"image"},{"t":"Space"},{"t":"Str","c":"tags."}]}},"blocks":[{"t":"Para","c":[{"t":"Str","c":"This"},{"t":"Space"},{"t":"Str","c":"is"},{"t":"Space"},{"t":"Str","c":"an"},{"t":"Space"},{"t":"Str","c":"example"},{"t":"Space"},{"t":"Str","c":"of"},{"t":"Space"},{"t":"Str","c":"overriding"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"behavior"},{"t":"Space"},{"t":"Str","c":"of"},{"t":"Space"},{"t":"Str","c":"an"},{"t":"Space"},{"t":"Str","c":"image"},{"t":"Space"},{"t":"Str","c":"tag."}]},{"t":"Para","c":[{"t":"Str","c":"Here"},{"t":"Space"},{"t":"Str","c":"is"},{"t":"Space"},{"t":"Str","c":"a"},{"t":"Space"},{"t":"Str","c":"standalone"},{"t":"Space"},{"t":"Str","c":"image"},{"t":"Space"},{"t":"Str","c":"tag"},{"t":"Space"},{"t":"Str","c":"where"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"url"},{"t":"Space"},{"t":"Str","c":"is"},{"t":"Space"},{"t":"Str","c":"to"},{"t":"Space"},{"t":"Str","c":"a"},{"t":"Space"},{"t":"Str","c":"json"},{"t":"Space"},{"t":"Str","c":"file."},{"t":"SoftBreak"},{"t":"Str","c":"If"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"screen"},{"t":"Space"},{"t":"Str","c":"width"},{"t":"Space"},{"t":"Str","c":"is"},{"t":"Space"},{"t":"Str","c":"greater"},{"t":"Space"},{"t":"Str","c":"than"},{"t":"Space"},{"t":"Str","c":"480px,"},{"t":"Space"},{"t":"Str","c":"it"},{"t":"Space"},{"t":"Str","c":"will"},{"t":"Space"},{"t":"Str","c":"render"},{"t":"Space"},{"t":"Str","c":"as"},{"t":"SoftBreak"},{"t":"Str","c":"a"},{"t":"Space"},{"t":"Str","c":"IIIF"},{"t":"Space"},{"t":"Str","c":"viewer"},{"t":"Space"},{"t":"Str","c":"using"},{"t":"Space"},{"t":"Str","c":"OpenSeaDragon."}]},{"t":"Para","c":[{"t":"Image","c":[["",[],[]],[{"t":"Str","c":"An"},{"t":"Space"},{"t":"Str","c":"image"},{"t":"Space"},{"t":"Str","c":"of"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"future:"},{"t":"Space"},{"t":"Str","c":"Byte"},{"t":"Space"},{"t":"Str","c":"Magazine,"},{"t":"Space"},{"t":"Str","c":"1982"}],["https://iiif.archivelab.org/iiif/byte-magazine-1982-08$295/info.json","fig:"]]}]},{"t":"Para","c":[{"t":"Str","c":"A"},{"t":"Space"},{"t":"Str","c":"regular"},{"t":"Space"},{"t":"Str","c":"image"},{"t":"Space"},{"t":"Str","c":"will"},{"t":"Space"},{"t":"Str","c":"behave"},{"t":"Space"},{"t":"Str","c":"normally."}]},{"t":"Para","c":[{"t":"Str","c":"[]"}]}]}
`;
let k;
async function Z(i) {
	k =
		k ||
		(await Q(
			() => import('../../../../chunks/openseadragon-23ea881c.js').then((a) => a.o),
			[],
			import.meta.url
		).then((a) => a.default));
	const t = k(i);
	return (t.OSD = k), t;
}
function L(i) {
	let t,
		a,
		e = [{ id: i[3] }, i[2], { src: (a = i[4]) }],
		r = {};
	for (let c = 0; c < e.length; c += 1) r = N(r, e[c]);
	return {
		c() {
			(t = b('img')), this.h();
		},
		l(c) {
			(t = w(c, 'IMG', { id: !0, src: !0 })), this.h();
		},
		h() {
			y(t, r);
		},
		m(c, n) {
			f(c, t, n);
		},
		p(c, n) {
			y(t, (r = U(e, [{ id: c[3] }, c[2], { src: a }])));
		},
		d(c) {
			c && o(t);
		}
	};
}
function x(i) {
	let t,
		a,
		e = i[0] && L(i),
		r = [{ id: i[3] }, { class: (a = i[1].join(' ')) }, i[2]],
		c = {};
	for (let n = 0; n < r.length; n += 1) c = N(c, r[n]);
	return {
		c() {
			(t = b('div')), e && e.c(), this.h();
		},
		l(n) {
			t = w(n, 'DIV', { id: !0, class: !0 });
			var S = P(t);
			e && e.l(S), S.forEach(o), this.h();
		},
		h() {
			y(t, c), F(t, 'svelte-1v828up', !0);
		},
		m(n, S) {
			f(n, t, S), e && e.m(t, null);
		},
		p(n, [S]) {
			n[0] ? (e ? e.p(n, S) : ((e = L(n)), e.c(), e.m(t, null))) : e && (e.d(1), (e = null)),
				y(t, (c = U(r, [{ id: n[3] }, { class: a }, n[2]]))),
				F(t, 'svelte-1v828up', !0);
		},
		i: j,
		o: j,
		d(n) {
			n && o(t), e && e.d();
		}
	};
}
function tt(i, t, a) {
	let e,
		{ data: r } = t,
		{ settings: c } = t;
	const [n, S, [m, p]] = r,
		[d, _, h] = n,
		g = d || 'd' + Math.random().toString(36).slice(2);
	W(() => {
		if (window.screen && window.screen.width < 480) {
			a(0, (e = !0));
			return;
		}
		const u = Z({
				id: g,
				sequenceMode: !1,
				collectionMode: !1,
				prefixUrl: '/pandoc-svelte-components/assets/openseadragon/images/'
			}),
			O = fetch(m).then((s) => s.json());
		Promise.all([u, O]).then(([s, l]) => {
			s.open({ tileSource: m });
		});
	});
	const M = m.replace('info.json', 'full/256,/0/default.jpg');
	return (
		(i.$$set = (u) => {
			'data' in u && a(5, (r = u.data)), 'settings' in u && a(6, (c = u.settings));
		}),
		a(0, (e = !1)),
		[e, _, h, g, M, r, c]
	);
}
class et extends E {
	constructor(t) {
		super(), B(this, t, tt, x, T, { data: 5, settings: 6 });
	}
}
function at(i) {
	let t, a;
	return (
		(t = new X({ props: { data: i[0], settings: i[1] } })),
		{
			c() {
				q(t.$$.fragment);
			},
			l(e) {
				z(t.$$.fragment, e);
			},
			m(e, r) {
				A(t, e, r), (a = !0);
			},
			p(e, r) {
				const c = {};
				r & 1 && (c.data = e[0]), r & 2 && (c.settings = e[1]), t.$set(c);
			},
			i(e) {
				a || ($(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				C(t, e);
			}
		}
	);
}
function rt(i) {
	let t, a, e;
	return (
		(a = new et({ props: { data: i[0], settings: i[1] } })),
		{
			c() {
				(t = v(`'
  `)),
					q(a.$$.fragment);
			},
			l(r) {
				(t = I(
					r,
					`'
  `
				)),
					z(a.$$.fragment, r);
			},
			m(r, c) {
				f(r, t, c), A(a, r, c), (e = !0);
			},
			p(r, c) {
				const n = {};
				c & 1 && (n.data = r[0]), c & 2 && (n.settings = r[1]), a.$set(n);
			},
			i(r) {
				e || ($(a.$$.fragment, r), (e = !0));
			},
			o(r) {
				D(a.$$.fragment, r), (e = !1);
			},
			d(r) {
				r && o(t), C(a, r);
			}
		}
	);
}
function ct(i) {
	let t, a, e, r, c, n, S, m, p, d, _, h, g;
	const M = [rt, at],
		u = [];
	function O(s, l) {
		return s[2].endsWith('.json') ? 0 : 1;
	}
	return (
		(d = O(i)),
		(_ = u[d] = M[d](i)),
		{
			c() {
				(t = v('The image ')),
					(a = b('code')),
					(e = v('src')),
					(r = v(' passed in the markdown is ')),
					(c = b('code')),
					(n = v(i[2])),
					(S = G()),
					(m = b('br')),
					(p = G()),
					_.c(),
					(h = V());
			},
			l(s) {
				(t = I(s, 'The image ')), (a = w(s, 'CODE', {}));
				var l = P(a);
				(e = I(l, 'src')),
					l.forEach(o),
					(r = I(s, ' passed in the markdown is ')),
					(c = w(s, 'CODE', {}));
				var R = P(c);
				(n = I(R, i[2])),
					R.forEach(o),
					(S = H(s)),
					(m = w(s, 'BR', {})),
					(p = H(s)),
					_.l(s),
					(h = V());
			},
			m(s, l) {
				f(s, t, l),
					f(s, a, l),
					J(a, e),
					f(s, r, l),
					f(s, c, l),
					J(c, n),
					f(s, S, l),
					f(s, m, l),
					f(s, p, l),
					u[d].m(s, l),
					f(s, h, l),
					(g = !0);
			},
			p(s, [l]) {
				_.p(s, l);
			},
			i(s) {
				g || ($(_), (g = !0));
			},
			o(s) {
				D(_), (g = !1);
			},
			d(s) {
				s && o(t),
					s && o(a),
					s && o(r),
					s && o(c),
					s && o(S),
					s && o(m),
					s && o(p),
					u[d].d(s),
					s && o(h);
			}
		}
	);
}
function st(i, t, a) {
	let { data: e } = t,
		{ settings: r } = t;
	const [c, n, [S, m]] = e;
	return (
		(i.$$set = (p) => {
			'data' in p && a(0, (e = p.data)), 'settings' in p && a(1, (r = p.settings));
		}),
		[e, r, S]
	);
}
class it extends E {
	constructor(t) {
		super(), B(this, t, st, ct, T, { data: 0, settings: 1 });
	}
}
function nt(i) {
	let t, a;
	return (
		(t = new K({ props: { ast: JSON.parse(Y), settings: { elements: { Image: it } } } })),
		{
			c() {
				q(t.$$.fragment);
			},
			l(e) {
				z(t.$$.fragment, e);
			},
			m(e, r) {
				A(t, e, r), (a = !0);
			},
			p: j,
			i(e) {
				a || ($(t.$$.fragment, e), (a = !0));
			},
			o(e) {
				D(t.$$.fragment, e), (a = !1);
			},
			d(e) {
				C(t, e);
			}
		}
	);
}
class ft extends E {
	constructor(t) {
		super(), B(this, t, null, nt, T, {});
	}
}
export { ft as default };
