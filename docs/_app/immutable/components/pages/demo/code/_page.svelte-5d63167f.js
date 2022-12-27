import {
	S as SvelteComponent,
	i as init,
	s as safe_not_equal,
	I as assign,
	J as svg_element,
	K as claim_svg_element,
	m as children,
	h as detach,
	n as attr,
	L as set_svg_attributes,
	b as insert_hydration,
	G as append_hydration,
	M as get_spread_update,
	B as noop,
	N as compute_rest_props,
	O as exclude_internal_props,
	q as text,
	r as claim_text,
	u as set_data,
	k as element,
	a as space,
	P as HtmlTagHydration,
	l as claim_element,
	c as claim_space,
	Q as claim_html_tag,
	R as set_attributes,
	p as set_style,
	f as transition_in,
	t as transition_out,
	w as create_component,
	x as claim_component,
	y as mount_component,
	T as listen,
	z as destroy_component,
	U as run_all
} from '../../../../chunks/index-c1110d94.js';
import { D as Document } from '../../../../chunks/Document-7acfde01.js';
const ast_text = `{"pandoc-api-version":[1,22,1],"meta":{"author":{"t":"MetaInlines","c":[{"t":"Str","c":"Ben"},{"t":"Space"},{"t":"Str","c":"Schmidt"}]},"title":{"t":"MetaInlines","c":[{"t":"Str","c":"example"},{"t":"Space"},{"t":"Str","c":"code"}]}},"blocks":[{"t":"Header","c":[1,["custom-behavior-for-classes.",[],[]],[{"t":"Str","c":"Custom"},{"t":"Space"},{"t":"Str","c":"behavior"},{"t":"Space"},{"t":"Str","c":"for"},{"t":"Space"},{"t":"Str","c":"classes."}]]},{"t":"Para","c":[{"t":"Str","c":"Different"},{"t":"Space"},{"t":"Str","c":"document."},{"t":"Space"},{"t":"Str","c":"The"},{"t":"Space"},{"t":"Str","c":"example"},{"t":"Space"},{"t":"Str","c":"file"},{"t":"Space"},{"t":"Str","c":"here"},{"t":"Space"},{"t":"Str","c":"applies"},{"t":"Space"},{"t":"Str","c":"highlight.js"},{"t":"Space"},{"t":"Str","c":"classes"},{"t":"Space"},{"t":"Str","c":"to"},{"t":"Space"},{"t":"Str","c":"elements,"},{"t":"SoftBreak"},{"t":"Str","c":"and"},{"t":"Space"},{"t":"Str","c":"then"},{"t":"Space"},{"t":"Str","c":"looks"},{"t":"Space"},{"t":"Str","c":"at"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"codeblock"},{"t":"Space"},{"t":"Str","c":"class"},{"t":"Space"},{"t":"Str","c":"for"},{"t":"Space"},{"t":"Str","c":"custom"},{"t":"Space"},{"t":"Str","c":"actions."}]},{"t":"Para","c":[{"t":"Str","c":"R"},{"t":"Space"},{"t":"Str","c":"code"},{"t":"Space"},{"t":"Str","c":"may"},{"t":"Space"},{"t":"Str","c":"be"},{"t":"Space"},{"t":"Str","c":"destined"},{"t":"Space"},{"t":"Str","c":"for"},{"t":"Space"},{"t":"Str","c":"R"},{"t":"Space"},{"t":"Str","c":"Markdown,"},{"t":"Space"},{"t":"Str","c":"so"},{"t":"Space"},{"t":"Str","c":"we’ll"},{"t":"Space"},{"t":"Str","c":"make"},{"t":"Space"},{"t":"Str","c":"all"},{"t":"Space"},{"t":"Str","c":"R"},{"t":"Space"},{"t":"Str","c":"code"},{"t":"Space"},{"t":"Str","c":"copy"},{"t":"Space"},{"t":"Str","c":"to"},{"t":"Space"},{"t":"Str","c":"R"},{"t":"Space"},{"t":"Str","c":"markdown"},{"t":"Space"},{"t":"Str","c":"blocks."}]},{"t":"CodeBlock","c":[["",["r"],[]],"\\nr_code %>%\\n   is_made %>%\\n   of_pipes %>%\\n   that_can %>%\\n   wrap_around %>%\\n   endlessly\\n"]},{"t":"Para","c":[{"t":"Str","c":"Indentation"},{"t":"Space"},{"t":"Str","c":"is"},{"t":"Space"},{"t":"Str","c":"important"},{"t":"Space"},{"t":"Str","c":"to"},{"t":"Space"},{"t":"Str","c":"python,"},{"t":"Space"},{"t":"Str","c":"so"},{"t":"Space"},{"t":"Str","c":"every"},{"t":"Space"},{"t":"Str","c":"python"},{"t":"Space"},{"t":"Str","c":"block"},{"t":"Space"},{"t":"Str","c":"gets"},{"t":"Space"},{"t":"Str","c":"buttons"},{"t":"Space"},{"t":"Str","c":"to"},{"t":"Space"},{"t":"Str","c":"change"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"indenting."}]},{"t":"CodeBlock","c":[["",["python"],[]],"\\npython = \\"a language_where\\"\\n  \\"indentation really matters\\"\\n  \\"for copying.\\"\\n"]},{"t":"Para","c":[{"t":"Str","c":"Javascript"},{"t":"Space"},{"t":"Str","c":"code"},{"t":"Space"},{"t":"Str","c":"can"},{"t":"Space"},{"t":"Str","c":"be"},{"t":"Space"},{"t":"Str","c":"executed"},{"t":"Space"},{"t":"Str","c":"straight"},{"t":"Space"},{"t":"Str","c":"in"},{"t":"Space"},{"t":"Str","c":"the"},{"t":"Space"},{"t":"Str","c":"browser:"},{"t":"Space"},{"t":"Str","c":"I"},{"t":"Space"},{"t":"Str","c":"can’t"},{"t":"Space"},{"t":"Str","c":"think"},{"t":"SoftBreak"},{"t":"Str","c":"of"},{"t":"Space"},{"t":"Str","c":"any"},{"t":"Space"},{"t":"Str","c":"reason"},{"t":"Space"},{"t":"Str","c":"not"},{"t":"Space"},{"t":"Str","c":"to"},{"t":"Space"},{"t":"Str","c":"do"},{"t":"Space"},{"t":"Str","c":"that!"}]},{"t":"CodeBlock","c":[["",["js"],[]],"\\nalert(\\"Usage of eval is a bad idea!\\")\\n"]}]}
`,
	atomOneLight = '';
var deepFreezeEs6 = { exports: {} };
function deepFreeze(e) {
	return (
		e instanceof Map
			? (e.clear =
					e.delete =
					e.set =
						function () {
							throw new Error('map is read-only');
						})
			: e instanceof Set &&
			  (e.add =
					e.clear =
					e.delete =
						function () {
							throw new Error('set is read-only');
						}),
		Object.freeze(e),
		Object.getOwnPropertyNames(e).forEach(function (t) {
			var n = e[t];
			typeof n == 'object' && !Object.isFrozen(n) && deepFreeze(n);
		}),
		e
	);
}
deepFreezeEs6.exports = deepFreeze;
deepFreezeEs6.exports.default = deepFreeze;
class Response {
	constructor(t) {
		t.data === void 0 && (t.data = {}), (this.data = t.data), (this.isMatchIgnored = !1);
	}
	ignoreMatch() {
		this.isMatchIgnored = !0;
	}
}
function escapeHTML(e) {
	return e
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}
function inherit$1(e, ...t) {
	const n = Object.create(null);
	for (const i in e) n[i] = e[i];
	return (
		t.forEach(function (i) {
			for (const c in i) n[c] = i[c];
		}),
		n
	);
}
const SPAN_CLOSE = '</span>',
	emitsWrappingTags = (e) => !!e.scope || (e.sublanguage && e.language),
	scopeToCSSClass = (e, { prefix: t }) => {
		if (e.includes('.')) {
			const n = e.split('.');
			return [`${t}${n.shift()}`, ...n.map((i, c) => `${i}${'_'.repeat(c + 1)}`)].join(' ');
		}
		return `${t}${e}`;
	};
class HTMLRenderer {
	constructor(t, n) {
		(this.buffer = ''), (this.classPrefix = n.classPrefix), t.walk(this);
	}
	addText(t) {
		this.buffer += escapeHTML(t);
	}
	openNode(t) {
		if (!emitsWrappingTags(t)) return;
		let n = '';
		t.sublanguage
			? (n = `language-${t.language}`)
			: (n = scopeToCSSClass(t.scope, { prefix: this.classPrefix })),
			this.span(n);
	}
	closeNode(t) {
		emitsWrappingTags(t) && (this.buffer += SPAN_CLOSE);
	}
	value() {
		return this.buffer;
	}
	span(t) {
		this.buffer += `<span class="${t}">`;
	}
}
const newNode = (e = {}) => {
	const t = { children: [] };
	return Object.assign(t, e), t;
};
class TokenTree {
	constructor() {
		(this.rootNode = newNode()), (this.stack = [this.rootNode]);
	}
	get top() {
		return this.stack[this.stack.length - 1];
	}
	get root() {
		return this.rootNode;
	}
	add(t) {
		this.top.children.push(t);
	}
	openNode(t) {
		const n = newNode({ scope: t });
		this.add(n), this.stack.push(n);
	}
	closeNode() {
		if (this.stack.length > 1) return this.stack.pop();
	}
	closeAllNodes() {
		for (; this.closeNode(); );
	}
	toJSON() {
		return JSON.stringify(this.rootNode, null, 4);
	}
	walk(t) {
		return this.constructor._walk(t, this.rootNode);
	}
	static _walk(t, n) {
		return (
			typeof n == 'string'
				? t.addText(n)
				: n.children &&
				  (t.openNode(n), n.children.forEach((i) => this._walk(t, i)), t.closeNode(n)),
			t
		);
	}
	static _collapse(t) {
		typeof t != 'string' &&
			t.children &&
			(t.children.every((n) => typeof n == 'string')
				? (t.children = [t.children.join('')])
				: t.children.forEach((n) => {
						TokenTree._collapse(n);
				  }));
	}
}
class TokenTreeEmitter extends TokenTree {
	constructor(t) {
		super(), (this.options = t);
	}
	addKeyword(t, n) {
		t !== '' && (this.openNode(n), this.addText(t), this.closeNode());
	}
	addText(t) {
		t !== '' && this.add(t);
	}
	addSublanguage(t, n) {
		const i = t.root;
		(i.sublanguage = !0), (i.language = n), this.add(i);
	}
	toHTML() {
		return new HTMLRenderer(this, this.options).value();
	}
	finalize() {
		return !0;
	}
}
function source(e) {
	return e ? (typeof e == 'string' ? e : e.source) : null;
}
function lookahead(e) {
	return concat('(?=', e, ')');
}
function anyNumberOfTimes(e) {
	return concat('(?:', e, ')*');
}
function optional(e) {
	return concat('(?:', e, ')?');
}
function concat(...e) {
	return e.map((n) => source(n)).join('');
}
function stripOptionsFromArgs(e) {
	const t = e[e.length - 1];
	return typeof t == 'object' && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {};
}
function either(...e) {
	return (
		'(' + (stripOptionsFromArgs(e).capture ? '' : '?:') + e.map((i) => source(i)).join('|') + ')'
	);
}
function countMatchGroups(e) {
	return new RegExp(e.toString() + '|').exec('').length - 1;
}
function startsWith(e, t) {
	const n = e && e.exec(t);
	return n && n.index === 0;
}
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function _rewriteBackreferences(e, { joinWith: t }) {
	let n = 0;
	return e
		.map((i) => {
			n += 1;
			const c = n;
			let _ = source(i),
				s = '';
			for (; _.length > 0; ) {
				const E = BACKREF_RE.exec(_);
				if (!E) {
					s += _;
					break;
				}
				(s += _.substring(0, E.index)),
					(_ = _.substring(E.index + E[0].length)),
					E[0][0] === '\\' && E[1]
						? (s += '\\' + String(Number(E[1]) + c))
						: ((s += E[0]), E[0] === '(' && n++);
			}
			return s;
		})
		.map((i) => `(${i})`)
		.join(t);
}
const MATCH_NOTHING_RE = /\b\B/,
	IDENT_RE$1 = '[a-zA-Z]\\w*',
	UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*',
	NUMBER_RE = '\\b\\d+(\\.\\d+)?',
	C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
	BINARY_NUMBER_RE = '\\b(0b[01]+)',
	RE_STARTERS_RE =
		'!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
	SHEBANG = (e = {}) => {
		const t = /^#![ ]*\//;
		return (
			e.binary && (e.begin = concat(t, /.*\b/, e.binary, /\b.*/)),
			inherit$1(
				{
					scope: 'meta',
					begin: t,
					end: /$/,
					relevance: 0,
					'on:begin': (n, i) => {
						n.index !== 0 && i.ignoreMatch();
					}
				},
				e
			)
		);
	},
	BACKSLASH_ESCAPE = { begin: '\\\\[\\s\\S]', relevance: 0 },
	APOS_STRING_MODE = {
		scope: 'string',
		begin: "'",
		end: "'",
		illegal: '\\n',
		contains: [BACKSLASH_ESCAPE]
	},
	QUOTE_STRING_MODE = {
		scope: 'string',
		begin: '"',
		end: '"',
		illegal: '\\n',
		contains: [BACKSLASH_ESCAPE]
	},
	PHRASAL_WORDS_MODE = {
		begin:
			/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
	},
	COMMENT = function (e, t, n = {}) {
		const i = inherit$1({ scope: 'comment', begin: e, end: t, contains: [] }, n);
		i.contains.push({
			scope: 'doctag',
			begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
			end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
			excludeBegin: !0,
			relevance: 0
		});
		const c = either(
			'I',
			'a',
			'is',
			'so',
			'us',
			'to',
			'at',
			'if',
			'in',
			'it',
			'on',
			/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
			/[A-Za-z]+[-][a-z]+/,
			/[A-Za-z][a-z]{2,}/
		);
		return i.contains.push({ begin: concat(/[ ]+/, '(', c, /[.]?[:]?([.][ ]|[ ])/, '){3}') }), i;
	},
	C_LINE_COMMENT_MODE = COMMENT('//', '$'),
	C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/'),
	HASH_COMMENT_MODE = COMMENT('#', '$'),
	NUMBER_MODE = { scope: 'number', begin: NUMBER_RE, relevance: 0 },
	C_NUMBER_MODE = { scope: 'number', begin: C_NUMBER_RE, relevance: 0 },
	BINARY_NUMBER_MODE = { scope: 'number', begin: BINARY_NUMBER_RE, relevance: 0 },
	REGEXP_MODE = {
		begin: /(?=\/[^/\n]*\/)/,
		contains: [
			{
				scope: 'regexp',
				begin: /\//,
				end: /\/[gimuy]*/,
				illegal: /\n/,
				contains: [
					BACKSLASH_ESCAPE,
					{ begin: /\[/, end: /\]/, relevance: 0, contains: [BACKSLASH_ESCAPE] }
				]
			}
		]
	},
	TITLE_MODE = { scope: 'title', begin: IDENT_RE$1, relevance: 0 },
	UNDERSCORE_TITLE_MODE = { scope: 'title', begin: UNDERSCORE_IDENT_RE, relevance: 0 },
	METHOD_GUARD = { begin: '\\.\\s*' + UNDERSCORE_IDENT_RE, relevance: 0 },
	END_SAME_AS_BEGIN = function (e) {
		return Object.assign(e, {
			'on:begin': (t, n) => {
				n.data._beginMatch = t[1];
			},
			'on:end': (t, n) => {
				n.data._beginMatch !== t[1] && n.ignoreMatch();
			}
		});
	};
var MODES = Object.freeze({
	__proto__: null,
	MATCH_NOTHING_RE,
	IDENT_RE: IDENT_RE$1,
	UNDERSCORE_IDENT_RE,
	NUMBER_RE,
	C_NUMBER_RE,
	BINARY_NUMBER_RE,
	RE_STARTERS_RE,
	SHEBANG,
	BACKSLASH_ESCAPE,
	APOS_STRING_MODE,
	QUOTE_STRING_MODE,
	PHRASAL_WORDS_MODE,
	COMMENT,
	C_LINE_COMMENT_MODE,
	C_BLOCK_COMMENT_MODE,
	HASH_COMMENT_MODE,
	NUMBER_MODE,
	C_NUMBER_MODE,
	BINARY_NUMBER_MODE,
	REGEXP_MODE,
	TITLE_MODE,
	UNDERSCORE_TITLE_MODE,
	METHOD_GUARD,
	END_SAME_AS_BEGIN
});
function skipIfHasPrecedingDot(e, t) {
	e.input[e.index - 1] === '.' && t.ignoreMatch();
}
function scopeClassName(e, t) {
	e.className !== void 0 && ((e.scope = e.className), delete e.className);
}
function beginKeywords(e, t) {
	t &&
		e.beginKeywords &&
		((e.begin = '\\b(' + e.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
		(e.__beforeBegin = skipIfHasPrecedingDot),
		(e.keywords = e.keywords || e.beginKeywords),
		delete e.beginKeywords,
		e.relevance === void 0 && (e.relevance = 0));
}
function compileIllegal(e, t) {
	Array.isArray(e.illegal) && (e.illegal = either(...e.illegal));
}
function compileMatch(e, t) {
	if (e.match) {
		if (e.begin || e.end) throw new Error('begin & end are not supported with match');
		(e.begin = e.match), delete e.match;
	}
}
function compileRelevance(e, t) {
	e.relevance === void 0 && (e.relevance = 1);
}
const beforeMatchExt = (e, t) => {
		if (!e.beforeMatch) return;
		if (e.starts) throw new Error('beforeMatch cannot be used with starts');
		const n = Object.assign({}, e);
		Object.keys(e).forEach((i) => {
			delete e[i];
		}),
			(e.keywords = n.keywords),
			(e.begin = concat(n.beforeMatch, lookahead(n.begin))),
			(e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }),
			(e.relevance = 0),
			delete n.beforeMatch;
	},
	COMMON_KEYWORDS = [
		'of',
		'and',
		'for',
		'in',
		'not',
		'or',
		'if',
		'then',
		'parent',
		'list',
		'value'
	],
	DEFAULT_KEYWORD_SCOPE = 'keyword';
function compileKeywords(e, t, n = DEFAULT_KEYWORD_SCOPE) {
	const i = Object.create(null);
	return (
		typeof e == 'string'
			? c(n, e.split(' '))
			: Array.isArray(e)
			? c(n, e)
			: Object.keys(e).forEach(function (_) {
					Object.assign(i, compileKeywords(e[_], t, _));
			  }),
		i
	);
	function c(_, s) {
		t && (s = s.map((E) => E.toLowerCase())),
			s.forEach(function (E) {
				const a = E.split('|');
				i[a[0]] = [_, scoreForKeyword(a[0], a[1])];
			});
	}
}
function scoreForKeyword(e, t) {
	return t ? Number(t) : commonKeyword(e) ? 0 : 1;
}
function commonKeyword(e) {
	return COMMON_KEYWORDS.includes(e.toLowerCase());
}
const seenDeprecations = {},
	error = (e) => {
		console.error(e);
	},
	warn = (e, ...t) => {
		console.log(`WARN: ${e}`, ...t);
	},
	deprecated = (e, t) => {
		seenDeprecations[`${e}/${t}`] ||
			(console.log(`Deprecated as of ${e}. ${t}`), (seenDeprecations[`${e}/${t}`] = !0));
	},
	MultiClassError = new Error();
function remapScopeNames(e, t, { key: n }) {
	let i = 0;
	const c = e[n],
		_ = {},
		s = {};
	for (let E = 1; E <= t.length; E++)
		(s[E + i] = c[E]), (_[E + i] = !0), (i += countMatchGroups(t[E - 1]));
	(e[n] = s), (e[n]._emit = _), (e[n]._multi = !0);
}
function beginMultiClass(e) {
	if (Array.isArray(e.begin)) {
		if (e.skip || e.excludeBegin || e.returnBegin)
			throw (
				(error('skip, excludeBegin, returnBegin not compatible with beginScope: {}'),
				MultiClassError)
			);
		if (typeof e.beginScope != 'object' || e.beginScope === null)
			throw (error('beginScope must be object'), MultiClassError);
		remapScopeNames(e, e.begin, { key: 'beginScope' }),
			(e.begin = _rewriteBackreferences(e.begin, { joinWith: '' }));
	}
}
function endMultiClass(e) {
	if (Array.isArray(e.end)) {
		if (e.skip || e.excludeEnd || e.returnEnd)
			throw (
				(error('skip, excludeEnd, returnEnd not compatible with endScope: {}'), MultiClassError)
			);
		if (typeof e.endScope != 'object' || e.endScope === null)
			throw (error('endScope must be object'), MultiClassError);
		remapScopeNames(e, e.end, { key: 'endScope' }),
			(e.end = _rewriteBackreferences(e.end, { joinWith: '' }));
	}
}
function scopeSugar(e) {
	e.scope &&
		typeof e.scope == 'object' &&
		e.scope !== null &&
		((e.beginScope = e.scope), delete e.scope);
}
function MultiClass(e) {
	scopeSugar(e),
		typeof e.beginScope == 'string' && (e.beginScope = { _wrap: e.beginScope }),
		typeof e.endScope == 'string' && (e.endScope = { _wrap: e.endScope }),
		beginMultiClass(e),
		endMultiClass(e);
}
function compileLanguage(e) {
	function t(s, E) {
		return new RegExp(
			source(s),
			'm' + (e.case_insensitive ? 'i' : '') + (e.unicodeRegex ? 'u' : '') + (E ? 'g' : '')
		);
	}
	class n {
		constructor() {
			(this.matchIndexes = {}), (this.regexes = []), (this.matchAt = 1), (this.position = 0);
		}
		addRule(E, a) {
			(a.position = this.position++),
				(this.matchIndexes[this.matchAt] = a),
				this.regexes.push([a, E]),
				(this.matchAt += countMatchGroups(E) + 1);
		}
		compile() {
			this.regexes.length === 0 && (this.exec = () => null);
			const E = this.regexes.map((a) => a[1]);
			(this.matcherRe = t(_rewriteBackreferences(E, { joinWith: '|' }), !0)), (this.lastIndex = 0);
		}
		exec(E) {
			this.matcherRe.lastIndex = this.lastIndex;
			const a = this.matcherRe.exec(E);
			if (!a) return null;
			const T = a.findIndex((I, u) => u > 0 && I !== void 0),
				N = this.matchIndexes[T];
			return a.splice(0, T), Object.assign(a, N);
		}
	}
	class i {
		constructor() {
			(this.rules = []),
				(this.multiRegexes = []),
				(this.count = 0),
				(this.lastIndex = 0),
				(this.regexIndex = 0);
		}
		getMatcher(E) {
			if (this.multiRegexes[E]) return this.multiRegexes[E];
			const a = new n();
			return (
				this.rules.slice(E).forEach(([T, N]) => a.addRule(T, N)),
				a.compile(),
				(this.multiRegexes[E] = a),
				a
			);
		}
		resumingScanAtSamePosition() {
			return this.regexIndex !== 0;
		}
		considerAll() {
			this.regexIndex = 0;
		}
		addRule(E, a) {
			this.rules.push([E, a]), a.type === 'begin' && this.count++;
		}
		exec(E) {
			const a = this.getMatcher(this.regexIndex);
			a.lastIndex = this.lastIndex;
			let T = a.exec(E);
			if (this.resumingScanAtSamePosition() && !(T && T.index === this.lastIndex)) {
				const N = this.getMatcher(0);
				(N.lastIndex = this.lastIndex + 1), (T = N.exec(E));
			}
			return (
				T &&
					((this.regexIndex += T.position + 1),
					this.regexIndex === this.count && this.considerAll()),
				T
			);
		}
	}
	function c(s) {
		const E = new i();
		return (
			s.contains.forEach((a) => E.addRule(a.begin, { rule: a, type: 'begin' })),
			s.terminatorEnd && E.addRule(s.terminatorEnd, { type: 'end' }),
			s.illegal && E.addRule(s.illegal, { type: 'illegal' }),
			E
		);
	}
	function _(s, E) {
		const a = s;
		if (s.isCompiled) return a;
		[scopeClassName, compileMatch, MultiClass, beforeMatchExt].forEach((N) => N(s, E)),
			e.compilerExtensions.forEach((N) => N(s, E)),
			(s.__beforeBegin = null),
			[beginKeywords, compileIllegal, compileRelevance].forEach((N) => N(s, E)),
			(s.isCompiled = !0);
		let T = null;
		return (
			typeof s.keywords == 'object' &&
				s.keywords.$pattern &&
				((s.keywords = Object.assign({}, s.keywords)),
				(T = s.keywords.$pattern),
				delete s.keywords.$pattern),
			(T = T || /\w+/),
			s.keywords && (s.keywords = compileKeywords(s.keywords, e.case_insensitive)),
			(a.keywordPatternRe = t(T, !0)),
			E &&
				(s.begin || (s.begin = /\B|\b/),
				(a.beginRe = t(a.begin)),
				!s.end && !s.endsWithParent && (s.end = /\B|\b/),
				s.end && (a.endRe = t(a.end)),
				(a.terminatorEnd = source(a.end) || ''),
				s.endsWithParent &&
					E.terminatorEnd &&
					(a.terminatorEnd += (s.end ? '|' : '') + E.terminatorEnd)),
			s.illegal && (a.illegalRe = t(s.illegal)),
			s.contains || (s.contains = []),
			(s.contains = [].concat(
				...s.contains.map(function (N) {
					return expandOrCloneMode(N === 'self' ? s : N);
				})
			)),
			s.contains.forEach(function (N) {
				_(N, a);
			}),
			s.starts && _(s.starts, E),
			(a.matcher = c(a)),
			a
		);
	}
	if (
		(e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes('self'))
	)
		throw new Error(
			'ERR: contains `self` is not supported at the top-level of a language.  See documentation.'
		);
	return (e.classNameAliases = inherit$1(e.classNameAliases || {})), _(e);
}
function dependencyOnParent(e) {
	return e ? e.endsWithParent || dependencyOnParent(e.starts) : !1;
}
function expandOrCloneMode(e) {
	return (
		e.variants &&
			!e.cachedVariants &&
			(e.cachedVariants = e.variants.map(function (t) {
				return inherit$1(e, { variants: null }, t);
			})),
		e.cachedVariants
			? e.cachedVariants
			: dependencyOnParent(e)
			? inherit$1(e, { starts: e.starts ? inherit$1(e.starts) : null })
			: Object.isFrozen(e)
			? inherit$1(e)
			: e
	);
}
var version = '11.7.0';
class HTMLInjectionError extends Error {
	constructor(t, n) {
		super(t), (this.name = 'HTMLInjectionError'), (this.html = n);
	}
}
const escape = escapeHTML,
	inherit = inherit$1,
	NO_MATCH = Symbol('nomatch'),
	MAX_KEYWORD_HITS = 7,
	HLJS = function (e) {
		const t = Object.create(null),
			n = Object.create(null),
			i = [];
		let c = !0;
		const _ = "Could not find the language '{}', did you forget to load/include a language module?",
			s = { disableAutodetect: !0, name: 'Plain text', contains: [] };
		let E = {
			ignoreUnescapedHTML: !1,
			throwUnescapedHTML: !1,
			noHighlightRe: /^(no-?highlight)$/i,
			languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
			classPrefix: 'hljs-',
			cssSelector: 'pre code',
			languages: null,
			__emitter: TokenTreeEmitter
		};
		function a(o) {
			return E.noHighlightRe.test(o);
		}
		function T(o) {
			let A = o.className + ' ';
			A += o.parentNode ? o.parentNode.className : '';
			const O = E.languageDetectRe.exec(A);
			if (O) {
				const d = v(O[1]);
				return (
					d ||
						(warn(_.replace('{}', O[1])),
						warn('Falling back to no-highlight mode for this block.', o)),
					d ? O[1] : 'no-highlight'
				);
			}
			return A.split(/\s+/).find((d) => a(d) || v(d));
		}
		function N(o, A, O) {
			let d = '',
				b = '';
			typeof A == 'object'
				? ((d = o), (O = A.ignoreIllegals), (b = A.language))
				: (deprecated('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
				  deprecated(
						'10.7.0',
						`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
				  ),
				  (b = o),
				  (d = A)),
				O === void 0 && (O = !0);
			const m = { code: d, language: b };
			X('before:highlight', m);
			const F = m.result ? m.result : I(m.language, m.code, O);
			return (F.code = m.code), X('after:highlight', F), F;
		}
		function I(o, A, O, d) {
			const b = Object.create(null);
			function m(l, R) {
				return l.keywords[R];
			}
			function F() {
				if (!S.keywords) {
					U.addText(M);
					return;
				}
				let l = 0;
				S.keywordPatternRe.lastIndex = 0;
				let R = S.keywordPatternRe.exec(M),
					L = '';
				for (; R; ) {
					L += M.substring(l, R.index);
					const g = x.case_insensitive ? R[0].toLowerCase() : R[0],
						P = m(S, g);
					if (P) {
						const [w, Ae] = P;
						if (
							(U.addText(L),
							(L = ''),
							(b[g] = (b[g] || 0) + 1),
							b[g] <= MAX_KEYWORD_HITS && (Q += Ae),
							w.startsWith('_'))
						)
							L += R[0];
						else {
							const Re = x.classNameAliases[w] || w;
							U.addKeyword(R[0], Re);
						}
					} else L += R[0];
					(l = S.keywordPatternRe.lastIndex), (R = S.keywordPatternRe.exec(M));
				}
				(L += M.substring(l)), U.addText(L);
			}
			function Z() {
				if (M === '') return;
				let l = null;
				if (typeof S.subLanguage == 'string') {
					if (!t[S.subLanguage]) {
						U.addText(M);
						return;
					}
					(l = I(S.subLanguage, M, !0, ce[S.subLanguage])), (ce[S.subLanguage] = l._top);
				} else l = C(M, S.subLanguage.length ? S.subLanguage : null);
				S.relevance > 0 && (Q += l.relevance), U.addSublanguage(l._emitter, l.language);
			}
			function H() {
				S.subLanguage != null ? Z() : F(), (M = '');
			}
			function V(l, R) {
				let L = 1;
				const g = R.length - 1;
				for (; L <= g; ) {
					if (!l._emit[L]) {
						L++;
						continue;
					}
					const P = x.classNameAliases[l[L]] || l[L],
						w = R[L];
					P ? U.addKeyword(w, P) : ((M = w), F(), (M = '')), L++;
				}
			}
			function se(l, R) {
				return (
					l.scope &&
						typeof l.scope == 'string' &&
						U.openNode(x.classNameAliases[l.scope] || l.scope),
					l.beginScope &&
						(l.beginScope._wrap
							? (U.addKeyword(M, x.classNameAliases[l.beginScope._wrap] || l.beginScope._wrap),
							  (M = ''))
							: l.beginScope._multi && (V(l.beginScope, R), (M = ''))),
					(S = Object.create(l, { parent: { value: S } })),
					S
				);
			}
			function ae(l, R, L) {
				let g = startsWith(l.endRe, L);
				if (g) {
					if (l['on:end']) {
						const P = new Response(l);
						l['on:end'](R, P), P.isMatchIgnored && (g = !1);
					}
					if (g) {
						for (; l.endsParent && l.parent; ) l = l.parent;
						return l;
					}
				}
				if (l.endsWithParent) return ae(l.parent, R, L);
			}
			function _e(l) {
				return S.matcher.regexIndex === 0 ? ((M += l[0]), 1) : ((ie = !0), 0);
			}
			function oe(l) {
				const R = l[0],
					L = l.rule,
					g = new Response(L),
					P = [L.__beforeBegin, L['on:begin']];
				for (const w of P) if (w && (w(l, g), g.isMatchIgnored)) return _e(R);
				return (
					L.skip
						? (M += R)
						: (L.excludeBegin && (M += R), H(), !L.returnBegin && !L.excludeBegin && (M = R)),
					se(L, l),
					L.returnBegin ? 0 : R.length
				);
			}
			function Te(l) {
				const R = l[0],
					L = A.substring(l.index),
					g = ae(S, l, L);
				if (!g) return NO_MATCH;
				const P = S;
				S.endScope && S.endScope._wrap
					? (H(), U.addKeyword(R, S.endScope._wrap))
					: S.endScope && S.endScope._multi
					? (H(), V(S.endScope, l))
					: P.skip
					? (M += R)
					: (P.returnEnd || P.excludeEnd || (M += R), H(), P.excludeEnd && (M = R));
				do
					S.scope && U.closeNode(), !S.skip && !S.subLanguage && (Q += S.relevance), (S = S.parent);
				while (S !== g.parent);
				return g.starts && se(g.starts, l), P.returnEnd ? 0 : R.length;
			}
			function Ne() {
				const l = [];
				for (let R = S; R !== x; R = R.parent) R.scope && l.unshift(R.scope);
				l.forEach((R) => U.openNode(R));
			}
			let z = {};
			function re(l, R) {
				const L = R && R[0];
				if (((M += l), L == null)) return H(), 0;
				if (z.type === 'begin' && R.type === 'end' && z.index === R.index && L === '') {
					if (((M += A.slice(R.index, R.index + 1)), !c)) {
						const g = new Error(`0 width match regex (${o})`);
						throw ((g.languageName = o), (g.badRule = z.rule), g);
					}
					return 1;
				}
				if (((z = R), R.type === 'begin')) return oe(R);
				if (R.type === 'illegal' && !O) {
					const g = new Error(
						'Illegal lexeme "' + L + '" for mode "' + (S.scope || '<unnamed>') + '"'
					);
					throw ((g.mode = S), g);
				} else if (R.type === 'end') {
					const g = Te(R);
					if (g !== NO_MATCH) return g;
				}
				if (R.type === 'illegal' && L === '') return 1;
				if (Ee > 1e5 && Ee > R.index * 3)
					throw new Error('potential infinite loop, way more iterations than matches');
				return (M += L), L.length;
			}
			const x = v(o);
			if (!x) throw (error(_.replace('{}', o)), new Error('Unknown language: "' + o + '"'));
			const le = compileLanguage(x);
			let ne = '',
				S = d || le;
			const ce = {},
				U = new E.__emitter(E);
			Ne();
			let M = '',
				Q = 0,
				k = 0,
				Ee = 0,
				ie = !1;
			try {
				for (S.matcher.considerAll(); ; ) {
					Ee++, ie ? (ie = !1) : S.matcher.considerAll(), (S.matcher.lastIndex = k);
					const l = S.matcher.exec(A);
					if (!l) break;
					const R = A.substring(k, l.index),
						L = re(R, l);
					k = l.index + L;
				}
				return (
					re(A.substring(k)),
					U.closeAllNodes(),
					U.finalize(),
					(ne = U.toHTML()),
					{ language: o, value: ne, relevance: Q, illegal: !1, _emitter: U, _top: S }
				);
			} catch (l) {
				if (l.message && l.message.includes('Illegal'))
					return {
						language: o,
						value: escape(A),
						illegal: !0,
						relevance: 0,
						_illegalBy: {
							message: l.message,
							index: k,
							context: A.slice(k - 100, k + 100),
							mode: l.mode,
							resultSoFar: ne
						},
						_emitter: U
					};
				if (c)
					return {
						language: o,
						value: escape(A),
						illegal: !1,
						relevance: 0,
						errorRaised: l,
						_emitter: U,
						_top: S
					};
				throw l;
			}
		}
		function u(o) {
			const A = {
				value: escape(o),
				illegal: !1,
				relevance: 0,
				_top: s,
				_emitter: new E.__emitter(E)
			};
			return A._emitter.addText(o), A;
		}
		function C(o, A) {
			A = A || E.languages || Object.keys(t);
			const O = u(o),
				d = A.filter(v)
					.filter(J)
					.map((H) => I(H, o, !1));
			d.unshift(O);
			const b = d.sort((H, V) => {
					if (H.relevance !== V.relevance) return V.relevance - H.relevance;
					if (H.language && V.language) {
						if (v(H.language).supersetOf === V.language) return 1;
						if (v(V.language).supersetOf === H.language) return -1;
					}
					return 0;
				}),
				[m, F] = b,
				Z = m;
			return (Z.secondBest = F), Z;
		}
		function D(o, A, O) {
			const d = (A && n[A]) || O;
			o.classList.add('hljs'), o.classList.add(`language-${d}`);
		}
		function p(o) {
			let A = null;
			const O = T(o);
			if (a(O)) return;
			if (
				(X('before:highlightElement', { el: o, language: O }),
				o.children.length > 0 &&
					(E.ignoreUnescapedHTML ||
						(console.warn(
							'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.'
						),
						console.warn('https://github.com/highlightjs/highlight.js/wiki/security'),
						console.warn('The element with unescaped HTML:'),
						console.warn(o)),
					E.throwUnescapedHTML))
			)
				throw new HTMLInjectionError(
					'One of your code blocks includes unescaped HTML.',
					o.innerHTML
				);
			A = o;
			const d = A.textContent,
				b = O ? N(d, { language: O, ignoreIllegals: !0 }) : C(d);
			(o.innerHTML = b.value),
				D(o, O, b.language),
				(o.result = { language: b.language, re: b.relevance, relevance: b.relevance }),
				b.secondBest &&
					(o.secondBest = { language: b.secondBest.language, relevance: b.secondBest.relevance }),
				X('after:highlightElement', { el: o, result: b, text: d });
		}
		function y(o) {
			E = inherit(E, o);
		}
		const B = () => {
			G(), deprecated('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.');
		};
		function f() {
			G(), deprecated('10.6.0', 'initHighlightingOnLoad() deprecated.  Use highlightAll() now.');
		}
		let h = !1;
		function G() {
			if (document.readyState === 'loading') {
				h = !0;
				return;
			}
			document.querySelectorAll(E.cssSelector).forEach(p);
		}
		function Y() {
			h && G();
		}
		typeof window < 'u' &&
			window.addEventListener &&
			window.addEventListener('DOMContentLoaded', Y, !1);
		function j(o, A) {
			let O = null;
			try {
				O = A(e);
			} catch (d) {
				if ((error("Language definition for '{}' could not be registered.".replace('{}', o)), c))
					error(d);
				else throw d;
				O = s;
			}
			O.name || (O.name = o),
				(t[o] = O),
				(O.rawDefinition = A.bind(null, e)),
				O.aliases && K(O.aliases, { languageName: o });
		}
		function W(o) {
			delete t[o];
			for (const A of Object.keys(n)) n[A] === o && delete n[A];
		}
		function q() {
			return Object.keys(t);
		}
		function v(o) {
			return (o = (o || '').toLowerCase()), t[o] || t[n[o]];
		}
		function K(o, { languageName: A }) {
			typeof o == 'string' && (o = [o]),
				o.forEach((O) => {
					n[O.toLowerCase()] = A;
				});
		}
		function J(o) {
			const A = v(o);
			return A && !A.disableAutodetect;
		}
		function ee(o) {
			o['before:highlightBlock'] &&
				!o['before:highlightElement'] &&
				(o['before:highlightElement'] = (A) => {
					o['before:highlightBlock'](Object.assign({ block: A.el }, A));
				}),
				o['after:highlightBlock'] &&
					!o['after:highlightElement'] &&
					(o['after:highlightElement'] = (A) => {
						o['after:highlightBlock'](Object.assign({ block: A.el }, A));
					});
		}
		function te(o) {
			ee(o), i.push(o);
		}
		function X(o, A) {
			const O = o;
			i.forEach(function (d) {
				d[O] && d[O](A);
			});
		}
		function $(o) {
			return (
				deprecated('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
				deprecated('10.7.0', 'Please use highlightElement now.'),
				p(o)
			);
		}
		Object.assign(e, {
			highlight: N,
			highlightAuto: C,
			highlightAll: G,
			highlightElement: p,
			highlightBlock: $,
			configure: y,
			initHighlighting: B,
			initHighlightingOnLoad: f,
			registerLanguage: j,
			unregisterLanguage: W,
			listLanguages: q,
			getLanguage: v,
			registerAliases: K,
			autoDetection: J,
			inherit,
			addPlugin: te
		}),
			(e.debugMode = function () {
				c = !1;
			}),
			(e.safeMode = function () {
				c = !0;
			}),
			(e.versionString = version),
			(e.regex = { concat, lookahead, either, optional, anyNumberOfTimes });
		for (const o in MODES) typeof MODES[o] == 'object' && deepFreezeEs6.exports(MODES[o]);
		return Object.assign(e, MODES), e;
	};
var highlight = HLJS({}),
	core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;
const HighlightJS = core,
	IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*',
	KEYWORDS = [
		'as',
		'in',
		'of',
		'if',
		'for',
		'while',
		'finally',
		'var',
		'new',
		'function',
		'do',
		'return',
		'void',
		'else',
		'break',
		'catch',
		'instanceof',
		'with',
		'throw',
		'case',
		'default',
		'try',
		'switch',
		'continue',
		'typeof',
		'delete',
		'let',
		'yield',
		'const',
		'class',
		'debugger',
		'async',
		'await',
		'static',
		'import',
		'from',
		'export',
		'extends'
	],
	LITERALS = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
	TYPES = [
		'Object',
		'Function',
		'Boolean',
		'Symbol',
		'Math',
		'Date',
		'Number',
		'BigInt',
		'String',
		'RegExp',
		'Array',
		'Float32Array',
		'Float64Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Int16Array',
		'Int32Array',
		'Uint16Array',
		'Uint32Array',
		'BigInt64Array',
		'BigUint64Array',
		'Set',
		'Map',
		'WeakSet',
		'WeakMap',
		'ArrayBuffer',
		'SharedArrayBuffer',
		'Atomics',
		'DataView',
		'JSON',
		'Promise',
		'Generator',
		'GeneratorFunction',
		'AsyncFunction',
		'Reflect',
		'Proxy',
		'Intl',
		'WebAssembly'
	],
	ERROR_TYPES = [
		'Error',
		'EvalError',
		'InternalError',
		'RangeError',
		'ReferenceError',
		'SyntaxError',
		'TypeError',
		'URIError'
	],
	BUILT_IN_GLOBALS = [
		'setInterval',
		'setTimeout',
		'clearInterval',
		'clearTimeout',
		'require',
		'exports',
		'eval',
		'isFinite',
		'isNaN',
		'parseFloat',
		'parseInt',
		'decodeURI',
		'decodeURIComponent',
		'encodeURI',
		'encodeURIComponent',
		'escape',
		'unescape'
	],
	BUILT_IN_VARIABLES = [
		'arguments',
		'this',
		'super',
		'console',
		'window',
		'document',
		'localStorage',
		'module',
		'global'
	],
	BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);
function javascript(e) {
	const t = e.regex,
		n = (A, { after: O }) => {
			const d = '</' + A[0].slice(1);
			return A.input.indexOf(d, O) !== -1;
		},
		i = IDENT_RE,
		c = { begin: '<>', end: '</>' },
		_ = /<[A-Za-z0-9\\._:-]+\s*\/>/,
		s = {
			begin: /<[A-Za-z0-9\\._:-]+/,
			end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
			isTrulyOpeningTag: (A, O) => {
				const d = A[0].length + A.index,
					b = A.input[d];
				if (b === '<' || b === ',') {
					O.ignoreMatch();
					return;
				}
				b === '>' && (n(A, { after: d }) || O.ignoreMatch());
				let m;
				const F = A.input.substring(d);
				if ((m = F.match(/^\s*=/))) {
					O.ignoreMatch();
					return;
				}
				if ((m = F.match(/^\s+extends\s+/)) && m.index === 0) {
					O.ignoreMatch();
					return;
				}
			}
		},
		E = {
			$pattern: IDENT_RE,
			keyword: KEYWORDS,
			literal: LITERALS,
			built_in: BUILT_INS,
			'variable.language': BUILT_IN_VARIABLES
		},
		a = '[0-9](_?[0-9])*',
		T = `\\.(${a})`,
		N = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
		I = {
			className: 'number',
			variants: [
				{ begin: `(\\b(${N})((${T})|\\.)?|(${T}))[eE][+-]?(${a})\\b` },
				{ begin: `\\b(${N})\\b((${T})\\b|\\.)?|(${T})\\b` },
				{ begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
				{ begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
				{ begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
				{ begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
				{ begin: '\\b0[0-7]+n?\\b' }
			],
			relevance: 0
		},
		u = { className: 'subst', begin: '\\$\\{', end: '\\}', keywords: E, contains: [] },
		C = {
			begin: 'html`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, u], subLanguage: 'xml' }
		},
		D = {
			begin: 'css`',
			end: '',
			starts: { end: '`', returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, u], subLanguage: 'css' }
		},
		p = { className: 'string', begin: '`', end: '`', contains: [e.BACKSLASH_ESCAPE, u] },
		B = {
			className: 'comment',
			variants: [
				e.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
					relevance: 0,
					contains: [
						{
							begin: '(?=@[A-Za-z]+)',
							relevance: 0,
							contains: [
								{ className: 'doctag', begin: '@[A-Za-z]+' },
								{
									className: 'type',
									begin: '\\{',
									end: '\\}',
									excludeEnd: !0,
									excludeBegin: !0,
									relevance: 0
								},
								{ className: 'variable', begin: i + '(?=\\s*(-)|$)', endsParent: !0, relevance: 0 },
								{ begin: /(?=[^\n])\s/, relevance: 0 }
							]
						}
					]
				}),
				e.C_BLOCK_COMMENT_MODE,
				e.C_LINE_COMMENT_MODE
			]
		},
		f = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, C, D, p, { match: /\$\d+/ }, I];
	u.contains = f.concat({ begin: /\{/, end: /\}/, keywords: E, contains: ['self'].concat(f) });
	const h = [].concat(B, u.contains),
		G = h.concat([{ begin: /\(/, end: /\)/, keywords: E, contains: ['self'].concat(h) }]),
		Y = {
			className: 'params',
			begin: /\(/,
			end: /\)/,
			excludeBegin: !0,
			excludeEnd: !0,
			keywords: E,
			contains: G
		},
		j = {
			variants: [
				{
					match: [
						/class/,
						/\s+/,
						i,
						/\s+/,
						/extends/,
						/\s+/,
						t.concat(i, '(', t.concat(/\./, i), ')*')
					],
					scope: { 1: 'keyword', 3: 'title.class', 5: 'keyword', 7: 'title.class.inherited' }
				},
				{ match: [/class/, /\s+/, i], scope: { 1: 'keyword', 3: 'title.class' } }
			]
		},
		W = {
			relevance: 0,
			match: t.either(
				/\bJSON/,
				/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
				/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
				/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
			),
			className: 'title.class',
			keywords: { _: [...TYPES, ...ERROR_TYPES] }
		},
		q = {
			label: 'use_strict',
			className: 'meta',
			relevance: 10,
			begin: /^\s*['"]use (strict|asm)['"]/
		},
		v = {
			variants: [
				{ match: [/function/, /\s+/, i, /(?=\s*\()/] },
				{ match: [/function/, /\s*(?=\()/] }
			],
			className: { 1: 'keyword', 3: 'title.function' },
			label: 'func.def',
			contains: [Y],
			illegal: /%/
		},
		K = { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: 'variable.constant' };
	function J(A) {
		return t.concat('(?!', A.join('|'), ')');
	}
	const ee = {
			match: t.concat(/\b/, J([...BUILT_IN_GLOBALS, 'super', 'import']), i, t.lookahead(/\(/)),
			className: 'title.function',
			relevance: 0
		},
		te = {
			begin: t.concat(/\./, t.lookahead(t.concat(i, /(?![0-9A-Za-z$_(])/))),
			end: i,
			excludeBegin: !0,
			keywords: 'prototype',
			className: 'property',
			relevance: 0
		},
		X = {
			match: [/get|set/, /\s+/, i, /(?=\()/],
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [{ begin: /\(\)/ }, Y]
		},
		$ =
			'(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
			e.UNDERSCORE_IDENT_RE +
			')\\s*=>',
		o = {
			match: [/const|var|let/, /\s+/, i, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead($)],
			keywords: 'async',
			className: { 1: 'keyword', 3: 'title.function' },
			contains: [Y]
		};
	return {
		name: 'Javascript',
		aliases: ['js', 'jsx', 'mjs', 'cjs'],
		keywords: E,
		exports: { PARAMS_CONTAINS: G, CLASS_REFERENCE: W },
		illegal: /#(?![$_A-z])/,
		contains: [
			e.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
			q,
			e.APOS_STRING_MODE,
			e.QUOTE_STRING_MODE,
			C,
			D,
			p,
			B,
			{ match: /\$\d+/ },
			I,
			W,
			{ className: 'attr', begin: i + t.lookahead(':'), relevance: 0 },
			o,
			{
				begin: '(' + e.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
				keywords: 'return throw case',
				relevance: 0,
				contains: [
					B,
					e.REGEXP_MODE,
					{
						className: 'function',
						begin: $,
						returnBegin: !0,
						end: '\\s*=>',
						contains: [
							{
								className: 'params',
								variants: [
									{ begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
									{ className: null, begin: /\(\s*\)/, skip: !0 },
									{
										begin: /\(/,
										end: /\)/,
										excludeBegin: !0,
										excludeEnd: !0,
										keywords: E,
										contains: G
									}
								]
							}
						]
					},
					{ begin: /,/, relevance: 0 },
					{ match: /\s+/, relevance: 0 },
					{
						variants: [
							{ begin: c.begin, end: c.end },
							{ match: _ },
							{ begin: s.begin, 'on:begin': s.isTrulyOpeningTag, end: s.end }
						],
						subLanguage: 'xml',
						contains: [{ begin: s.begin, end: s.end, skip: !0, contains: ['self'] }]
					}
				]
			},
			v,
			{ beginKeywords: 'while if switch catch for' },
			{
				begin:
					'\\b(?!function)' +
					e.UNDERSCORE_IDENT_RE +
					'\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
				returnBegin: !0,
				label: 'func.def',
				contains: [Y, e.inherit(e.TITLE_MODE, { begin: i, className: 'title.function' })]
			},
			{ match: /\.\.\./, relevance: 0 },
			te,
			{ match: '\\$' + i, relevance: 0 },
			{ match: [/\bconstructor(?=\s*\()/], className: { 1: 'title.function' }, contains: [Y] },
			ee,
			K,
			j,
			X,
			{ match: /\$[(.]/ }
		]
	};
}
function r(e) {
	const t = e.regex,
		n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
		i = t.either(
			/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
			/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
			/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
		),
		c = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
		_ = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
	return {
		name: 'R',
		keywords: {
			$pattern: n,
			keyword: 'function if in break next repeat else for while',
			literal:
				'NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10',
			built_in:
				'LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm'
		},
		contains: [
			e.COMMENT(/#'/, /$/, {
				contains: [
					{
						scope: 'doctag',
						match: /@examples/,
						starts: {
							end: t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)),
							endsParent: !0
						}
					},
					{
						scope: 'doctag',
						begin: '@param',
						end: /$/,
						contains: [
							{
								scope: 'variable',
								variants: [{ match: n }, { match: /`(?:\\.|[^`\\])+`/ }],
								endsParent: !0
							}
						]
					},
					{ scope: 'doctag', match: /@[a-zA-Z]+/ },
					{ scope: 'keyword', match: /\\[a-zA-Z]+/ }
				]
			}),
			e.HASH_COMMENT_MODE,
			{
				scope: 'string',
				contains: [e.BACKSLASH_ESCAPE],
				variants: [
					e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
					e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
					e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
					e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
					e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
					e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
					{ begin: '"', end: '"', relevance: 0 },
					{ begin: "'", end: "'", relevance: 0 }
				]
			},
			{
				relevance: 0,
				variants: [
					{ scope: { 1: 'operator', 2: 'number' }, match: [c, i] },
					{ scope: { 1: 'operator', 2: 'number' }, match: [/%[^%]*%/, i] },
					{ scope: { 1: 'punctuation', 2: 'number' }, match: [_, i] },
					{ scope: { 2: 'number' }, match: [/[^a-zA-Z0-9._]|^/, i] }
				]
			},
			{ scope: { 3: 'operator' }, match: [n, /\s+/, /<-/, /\s+/] },
			{ scope: 'operator', relevance: 0, variants: [{ match: c }, { match: /%[^%]*%/ }] },
			{ scope: 'punctuation', relevance: 0, match: _ },
			{ begin: '`', end: '`', contains: [{ begin: /\\./ }] }
		]
	};
}
function python(e) {
	const t = e.regex,
		n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
		i = [
			'and',
			'as',
			'assert',
			'async',
			'await',
			'break',
			'case',
			'class',
			'continue',
			'def',
			'del',
			'elif',
			'else',
			'except',
			'finally',
			'for',
			'from',
			'global',
			'if',
			'import',
			'in',
			'is',
			'lambda',
			'match',
			'nonlocal|10',
			'not',
			'or',
			'pass',
			'raise',
			'return',
			'try',
			'while',
			'with',
			'yield'
		],
		E = {
			$pattern: /[A-Za-z]\w+|__\w+__/,
			keyword: i,
			built_in: [
				'__import__',
				'abs',
				'all',
				'any',
				'ascii',
				'bin',
				'bool',
				'breakpoint',
				'bytearray',
				'bytes',
				'callable',
				'chr',
				'classmethod',
				'compile',
				'complex',
				'delattr',
				'dict',
				'dir',
				'divmod',
				'enumerate',
				'eval',
				'exec',
				'filter',
				'float',
				'format',
				'frozenset',
				'getattr',
				'globals',
				'hasattr',
				'hash',
				'help',
				'hex',
				'id',
				'input',
				'int',
				'isinstance',
				'issubclass',
				'iter',
				'len',
				'list',
				'locals',
				'map',
				'max',
				'memoryview',
				'min',
				'next',
				'object',
				'oct',
				'open',
				'ord',
				'pow',
				'print',
				'property',
				'range',
				'repr',
				'reversed',
				'round',
				'set',
				'setattr',
				'slice',
				'sorted',
				'staticmethod',
				'str',
				'sum',
				'super',
				'tuple',
				'type',
				'vars',
				'zip'
			],
			literal: ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'],
			type: [
				'Any',
				'Callable',
				'Coroutine',
				'Dict',
				'List',
				'Literal',
				'Generic',
				'Optional',
				'Sequence',
				'Set',
				'Tuple',
				'Type',
				'Union'
			]
		},
		a = { className: 'meta', begin: /^(>>>|\.\.\.) / },
		T = { className: 'subst', begin: /\{/, end: /\}/, keywords: E, illegal: /#/ },
		N = { begin: /\{\{/, relevance: 0 },
		I = {
			className: 'string',
			contains: [e.BACKSLASH_ESCAPE],
			variants: [
				{
					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
					end: /'''/,
					contains: [e.BACKSLASH_ESCAPE, a],
					relevance: 10
				},
				{
					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
					end: /"""/,
					contains: [e.BACKSLASH_ESCAPE, a],
					relevance: 10
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])'''/,
					end: /'''/,
					contains: [e.BACKSLASH_ESCAPE, a, N, T]
				},
				{
					begin: /([fF][rR]|[rR][fF]|[fF])"""/,
					end: /"""/,
					contains: [e.BACKSLASH_ESCAPE, a, N, T]
				},
				{ begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
				{ begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
				{ begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
				{ begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
				{ begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [e.BACKSLASH_ESCAPE, N, T] },
				{ begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, N, T] },
				e.APOS_STRING_MODE,
				e.QUOTE_STRING_MODE
			]
		},
		u = '[0-9](_?[0-9])*',
		C = `(\\b(${u}))?\\.(${u})|\\b(${u})\\.`,
		D = `\\b|${i.join('|')}`,
		p = {
			className: 'number',
			relevance: 0,
			variants: [
				{ begin: `(\\b(${u})|(${C}))[eE][+-]?(${u})[jJ]?(?=${D})` },
				{ begin: `(${C})[jJ]?` },
				{ begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${D})` },
				{ begin: `\\b0[bB](_?[01])+[lL]?(?=${D})` },
				{ begin: `\\b0[oO](_?[0-7])+[lL]?(?=${D})` },
				{ begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${D})` },
				{ begin: `\\b(${u})[jJ](?=${D})` }
			]
		},
		y = {
			className: 'comment',
			begin: t.lookahead(/# type:/),
			end: /$/,
			keywords: E,
			contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }]
		},
		B = {
			className: 'params',
			variants: [
				{ className: '', begin: /\(\s*\)/, skip: !0 },
				{
					begin: /\(/,
					end: /\)/,
					excludeBegin: !0,
					excludeEnd: !0,
					keywords: E,
					contains: ['self', a, p, I, e.HASH_COMMENT_MODE]
				}
			]
		};
	return (
		(T.contains = [I, p, a]),
		{
			name: 'Python',
			aliases: ['py', 'gyp', 'ipython'],
			unicodeRegex: !0,
			keywords: E,
			illegal: /(<\/|->|\?)|=>/,
			contains: [
				a,
				p,
				{ begin: /\bself\b/ },
				{ beginKeywords: 'if', relevance: 0 },
				I,
				y,
				e.HASH_COMMENT_MODE,
				{ match: [/\bdef/, /\s+/, n], scope: { 1: 'keyword', 3: 'title.function' }, contains: [B] },
				{
					variants: [
						{ match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] },
						{ match: [/\bclass/, /\s+/, n] }
					],
					scope: { 1: 'keyword', 3: 'title.class', 6: 'title.class.inherited' }
				},
				{ className: 'meta', begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [p, B, I] }
			]
		}
	);
}
function markdown(e) {
	const t = e.regex,
		n = { begin: /<\/?[A-Za-z_]/, end: '>', subLanguage: 'xml', relevance: 0 },
		i = { begin: '^[-\\*]{3,}', end: '$' },
		c = {
			className: 'code',
			variants: [
				{ begin: '(`{3,})[^`](.|\\n)*?\\1`*[ ]*' },
				{ begin: '(~{3,})[^~](.|\\n)*?\\1~*[ ]*' },
				{ begin: '```', end: '```+[ ]*$' },
				{ begin: '~~~', end: '~~~+[ ]*$' },
				{ begin: '`.+?`' },
				{
					begin: '(?=^( {4}|\\t))',
					contains: [{ begin: '^( {4}|\\t)', end: '(\\n)$' }],
					relevance: 0
				}
			]
		},
		_ = {
			className: 'bullet',
			begin: '^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)',
			end: '\\s+',
			excludeEnd: !0
		},
		s = {
			begin: /^\[[^\n]+\]:/,
			returnBegin: !0,
			contains: [
				{ className: 'symbol', begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0 },
				{ className: 'link', begin: /:\s*/, end: /$/, excludeBegin: !0 }
			]
		},
		E = /[A-Za-z][A-Za-z0-9+.-]*/,
		a = {
			variants: [
				{ begin: /\[.+?\]\[.*?\]/, relevance: 0 },
				{ begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, relevance: 2 },
				{ begin: t.concat(/\[.+?\]\(/, E, /:\/\/.*?\)/), relevance: 2 },
				{ begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
				{ begin: /\[.*?\]\(.*?\)/, relevance: 0 }
			],
			returnBegin: !0,
			contains: [
				{ match: /\[(?=\])/ },
				{
					className: 'string',
					relevance: 0,
					begin: '\\[',
					end: '\\]',
					excludeBegin: !0,
					returnEnd: !0
				},
				{
					className: 'link',
					relevance: 0,
					begin: '\\]\\(',
					end: '\\)',
					excludeBegin: !0,
					excludeEnd: !0
				},
				{
					className: 'symbol',
					relevance: 0,
					begin: '\\]\\[',
					end: '\\]',
					excludeBegin: !0,
					excludeEnd: !0
				}
			]
		},
		T = {
			className: 'strong',
			contains: [],
			variants: [
				{ begin: /_{2}(?!\s)/, end: /_{2}/ },
				{ begin: /\*{2}(?!\s)/, end: /\*{2}/ }
			]
		},
		N = {
			className: 'emphasis',
			contains: [],
			variants: [
				{ begin: /\*(?![*\s])/, end: /\*/ },
				{ begin: /_(?![_\s])/, end: /_/, relevance: 0 }
			]
		},
		I = e.inherit(T, { contains: [] }),
		u = e.inherit(N, { contains: [] });
	T.contains.push(u), N.contains.push(I);
	let C = [n, a];
	return (
		[T, N, I, u].forEach((y) => {
			y.contains = y.contains.concat(C);
		}),
		(C = C.concat(T, N)),
		{
			name: 'Markdown',
			aliases: ['md', 'mkdown', 'mkd'],
			contains: [
				{
					className: 'section',
					variants: [
						{ begin: '^#{1,6}', end: '$', contains: C },
						{
							begin: '(?=^.+?\\n[=-]{2,}$)',
							contains: [{ begin: '^[=-]*$' }, { begin: '^', end: '\\n', contains: C }]
						}
					]
				},
				n,
				_,
				T,
				N,
				{ className: 'quote', begin: '^>\\s+', contains: C, end: '$' },
				c,
				i,
				a,
				s
			]
		}
	);
}
function pgsql(e) {
	const t = e.COMMENT('--', '$'),
		n = '[a-zA-Z_][a-zA-Z_0-9$]*',
		i = '\\$([a-zA-Z_]?|[a-zA-Z_][a-zA-Z_0-9]*)\\$',
		c = '<<\\s*' + n + '\\s*>>',
		_ =
			'ABORT ALTER ANALYZE BEGIN CALL CHECKPOINT|10 CLOSE CLUSTER COMMENT COMMIT COPY CREATE DEALLOCATE DECLARE DELETE DISCARD DO DROP END EXECUTE EXPLAIN FETCH GRANT IMPORT INSERT LISTEN LOAD LOCK MOVE NOTIFY PREPARE REASSIGN|10 REFRESH REINDEX RELEASE RESET REVOKE ROLLBACK SAVEPOINT SECURITY SELECT SET SHOW START TRUNCATE UNLISTEN|10 UPDATE VACUUM|10 VALUES AGGREGATE COLLATION CONVERSION|10 DATABASE DEFAULT PRIVILEGES DOMAIN TRIGGER EXTENSION FOREIGN WRAPPER|10 TABLE FUNCTION GROUP LANGUAGE LARGE OBJECT MATERIALIZED VIEW OPERATOR CLASS FAMILY POLICY PUBLICATION|10 ROLE RULE SCHEMA SEQUENCE SERVER STATISTICS SUBSCRIPTION SYSTEM TABLESPACE CONFIGURATION DICTIONARY PARSER TEMPLATE TYPE USER MAPPING PREPARED ACCESS METHOD CAST AS TRANSFORM TRANSACTION OWNED TO INTO SESSION AUTHORIZATION INDEX PROCEDURE ASSERTION ALL ANALYSE AND ANY ARRAY ASC ASYMMETRIC|10 BOTH CASE CHECK COLLATE COLUMN CONCURRENTLY|10 CONSTRAINT CROSS DEFERRABLE RANGE DESC DISTINCT ELSE EXCEPT FOR FREEZE|10 FROM FULL HAVING ILIKE IN INITIALLY INNER INTERSECT IS ISNULL JOIN LATERAL LEADING LIKE LIMIT NATURAL NOT NOTNULL NULL OFFSET ON ONLY OR ORDER OUTER OVERLAPS PLACING PRIMARY REFERENCES RETURNING SIMILAR SOME SYMMETRIC TABLESAMPLE THEN TRAILING UNION UNIQUE USING VARIADIC|10 VERBOSE WHEN WHERE WINDOW WITH BY RETURNS INOUT OUT SETOF|10 IF STRICT CURRENT CONTINUE OWNER LOCATION OVER PARTITION WITHIN BETWEEN ESCAPE EXTERNAL INVOKER DEFINER WORK RENAME VERSION CONNECTION CONNECT TABLES TEMP TEMPORARY FUNCTIONS SEQUENCES TYPES SCHEMAS OPTION CASCADE RESTRICT ADD ADMIN EXISTS VALID VALIDATE ENABLE DISABLE REPLICA|10 ALWAYS PASSING COLUMNS PATH REF VALUE OVERRIDING IMMUTABLE STABLE VOLATILE BEFORE AFTER EACH ROW PROCEDURAL ROUTINE NO HANDLER VALIDATOR OPTIONS STORAGE OIDS|10 WITHOUT INHERIT DEPENDS CALLED INPUT LEAKPROOF|10 COST ROWS NOWAIT SEARCH UNTIL ENCRYPTED|10 PASSWORD CONFLICT|10 INSTEAD INHERITS CHARACTERISTICS WRITE CURSOR ALSO STATEMENT SHARE EXCLUSIVE INLINE ISOLATION REPEATABLE READ COMMITTED SERIALIZABLE UNCOMMITTED LOCAL GLOBAL SQL PROCEDURES RECURSIVE SNAPSHOT ROLLUP CUBE TRUSTED|10 INCLUDE FOLLOWING PRECEDING UNBOUNDED RANGE GROUPS UNENCRYPTED|10 SYSID FORMAT DELIMITER HEADER QUOTE ENCODING FILTER OFF FORCE_QUOTE FORCE_NOT_NULL FORCE_NULL COSTS BUFFERS TIMING SUMMARY DISABLE_PAGE_SKIPPING RESTART CYCLE GENERATED IDENTITY DEFERRED IMMEDIATE LEVEL LOGGED UNLOGGED OF NOTHING NONE EXCLUDE ATTRIBUTE USAGE ROUTINES TRUE FALSE NAN INFINITY ',
		s =
			'SUPERUSER NOSUPERUSER CREATEDB NOCREATEDB CREATEROLE NOCREATEROLE INHERIT NOINHERIT LOGIN NOLOGIN REPLICATION NOREPLICATION BYPASSRLS NOBYPASSRLS ',
		E =
			'ALIAS BEGIN CONSTANT DECLARE END EXCEPTION RETURN PERFORM|10 RAISE GET DIAGNOSTICS STACKED|10 FOREACH LOOP ELSIF EXIT WHILE REVERSE SLICE DEBUG LOG INFO NOTICE WARNING ASSERT OPEN ',
		a =
			'BIGINT INT8 BIGSERIAL SERIAL8 BIT VARYING VARBIT BOOLEAN BOOL BOX BYTEA CHARACTER CHAR VARCHAR CIDR CIRCLE DATE DOUBLE PRECISION FLOAT8 FLOAT INET INTEGER INT INT4 INTERVAL JSON JSONB LINE LSEG|10 MACADDR MACADDR8 MONEY NUMERIC DEC DECIMAL PATH POINT POLYGON REAL FLOAT4 SMALLINT INT2 SMALLSERIAL|10 SERIAL2|10 SERIAL|10 SERIAL4|10 TEXT TIME ZONE TIMETZ|10 TIMESTAMP TIMESTAMPTZ|10 TSQUERY|10 TSVECTOR|10 TXID_SNAPSHOT|10 UUID XML NATIONAL NCHAR INT4RANGE|10 INT8RANGE|10 NUMRANGE|10 TSRANGE|10 TSTZRANGE|10 DATERANGE|10 ANYELEMENT ANYARRAY ANYNONARRAY ANYENUM ANYRANGE CSTRING INTERNAL RECORD PG_DDL_COMMAND VOID UNKNOWN OPAQUE REFCURSOR NAME OID REGPROC|10 REGPROCEDURE|10 REGOPER|10 REGOPERATOR|10 REGCLASS|10 REGTYPE|10 REGROLE|10 REGNAMESPACE|10 REGCONFIG|10 REGDICTIONARY|10 ',
		T = a
			.trim()
			.split(' ')
			.map(function (p) {
				return p.split('|')[0];
			})
			.join('|'),
		N =
			'CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURRENT_CATALOG|10 CURRENT_DATE LOCALTIME LOCALTIMESTAMP CURRENT_ROLE|10 CURRENT_SCHEMA|10 SESSION_USER PUBLIC ',
		I =
			'FOUND NEW OLD TG_NAME|10 TG_WHEN|10 TG_LEVEL|10 TG_OP|10 TG_RELID|10 TG_RELNAME|10 TG_TABLE_NAME|10 TG_TABLE_SCHEMA|10 TG_NARGS|10 TG_ARGV|10 TG_EVENT|10 TG_TAG|10 ROW_COUNT RESULT_OID|10 PG_CONTEXT|10 RETURNED_SQLSTATE COLUMN_NAME CONSTRAINT_NAME PG_DATATYPE_NAME|10 MESSAGE_TEXT TABLE_NAME SCHEMA_NAME PG_EXCEPTION_DETAIL|10 PG_EXCEPTION_HINT|10 PG_EXCEPTION_CONTEXT|10 ',
		u =
			'SQLSTATE SQLERRM|10 SUCCESSFUL_COMPLETION WARNING DYNAMIC_RESULT_SETS_RETURNED IMPLICIT_ZERO_BIT_PADDING NULL_VALUE_ELIMINATED_IN_SET_FUNCTION PRIVILEGE_NOT_GRANTED PRIVILEGE_NOT_REVOKED STRING_DATA_RIGHT_TRUNCATION DEPRECATED_FEATURE NO_DATA NO_ADDITIONAL_DYNAMIC_RESULT_SETS_RETURNED SQL_STATEMENT_NOT_YET_COMPLETE CONNECTION_EXCEPTION CONNECTION_DOES_NOT_EXIST CONNECTION_FAILURE SQLCLIENT_UNABLE_TO_ESTABLISH_SQLCONNECTION SQLSERVER_REJECTED_ESTABLISHMENT_OF_SQLCONNECTION TRANSACTION_RESOLUTION_UNKNOWN PROTOCOL_VIOLATION TRIGGERED_ACTION_EXCEPTION FEATURE_NOT_SUPPORTED INVALID_TRANSACTION_INITIATION LOCATOR_EXCEPTION INVALID_LOCATOR_SPECIFICATION INVALID_GRANTOR INVALID_GRANT_OPERATION INVALID_ROLE_SPECIFICATION DIAGNOSTICS_EXCEPTION STACKED_DIAGNOSTICS_ACCESSED_WITHOUT_ACTIVE_HANDLER CASE_NOT_FOUND CARDINALITY_VIOLATION DATA_EXCEPTION ARRAY_SUBSCRIPT_ERROR CHARACTER_NOT_IN_REPERTOIRE DATETIME_FIELD_OVERFLOW DIVISION_BY_ZERO ERROR_IN_ASSIGNMENT ESCAPE_CHARACTER_CONFLICT INDICATOR_OVERFLOW INTERVAL_FIELD_OVERFLOW INVALID_ARGUMENT_FOR_LOGARITHM INVALID_ARGUMENT_FOR_NTILE_FUNCTION INVALID_ARGUMENT_FOR_NTH_VALUE_FUNCTION INVALID_ARGUMENT_FOR_POWER_FUNCTION INVALID_ARGUMENT_FOR_WIDTH_BUCKET_FUNCTION INVALID_CHARACTER_VALUE_FOR_CAST INVALID_DATETIME_FORMAT INVALID_ESCAPE_CHARACTER INVALID_ESCAPE_OCTET INVALID_ESCAPE_SEQUENCE NONSTANDARD_USE_OF_ESCAPE_CHARACTER INVALID_INDICATOR_PARAMETER_VALUE INVALID_PARAMETER_VALUE INVALID_REGULAR_EXPRESSION INVALID_ROW_COUNT_IN_LIMIT_CLAUSE INVALID_ROW_COUNT_IN_RESULT_OFFSET_CLAUSE INVALID_TABLESAMPLE_ARGUMENT INVALID_TABLESAMPLE_REPEAT INVALID_TIME_ZONE_DISPLACEMENT_VALUE INVALID_USE_OF_ESCAPE_CHARACTER MOST_SPECIFIC_TYPE_MISMATCH NULL_VALUE_NOT_ALLOWED NULL_VALUE_NO_INDICATOR_PARAMETER NUMERIC_VALUE_OUT_OF_RANGE SEQUENCE_GENERATOR_LIMIT_EXCEEDED STRING_DATA_LENGTH_MISMATCH STRING_DATA_RIGHT_TRUNCATION SUBSTRING_ERROR TRIM_ERROR UNTERMINATED_C_STRING ZERO_LENGTH_CHARACTER_STRING FLOATING_POINT_EXCEPTION INVALID_TEXT_REPRESENTATION INVALID_BINARY_REPRESENTATION BAD_COPY_FILE_FORMAT UNTRANSLATABLE_CHARACTER NOT_AN_XML_DOCUMENT INVALID_XML_DOCUMENT INVALID_XML_CONTENT INVALID_XML_COMMENT INVALID_XML_PROCESSING_INSTRUCTION INTEGRITY_CONSTRAINT_VIOLATION RESTRICT_VIOLATION NOT_NULL_VIOLATION FOREIGN_KEY_VIOLATION UNIQUE_VIOLATION CHECK_VIOLATION EXCLUSION_VIOLATION INVALID_CURSOR_STATE INVALID_TRANSACTION_STATE ACTIVE_SQL_TRANSACTION BRANCH_TRANSACTION_ALREADY_ACTIVE HELD_CURSOR_REQUIRES_SAME_ISOLATION_LEVEL INAPPROPRIATE_ACCESS_MODE_FOR_BRANCH_TRANSACTION INAPPROPRIATE_ISOLATION_LEVEL_FOR_BRANCH_TRANSACTION NO_ACTIVE_SQL_TRANSACTION_FOR_BRANCH_TRANSACTION READ_ONLY_SQL_TRANSACTION SCHEMA_AND_DATA_STATEMENT_MIXING_NOT_SUPPORTED NO_ACTIVE_SQL_TRANSACTION IN_FAILED_SQL_TRANSACTION IDLE_IN_TRANSACTION_SESSION_TIMEOUT INVALID_SQL_STATEMENT_NAME TRIGGERED_DATA_CHANGE_VIOLATION INVALID_AUTHORIZATION_SPECIFICATION INVALID_PASSWORD DEPENDENT_PRIVILEGE_DESCRIPTORS_STILL_EXIST DEPENDENT_OBJECTS_STILL_EXIST INVALID_TRANSACTION_TERMINATION SQL_ROUTINE_EXCEPTION FUNCTION_EXECUTED_NO_RETURN_STATEMENT MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED INVALID_CURSOR_NAME EXTERNAL_ROUTINE_EXCEPTION CONTAINING_SQL_NOT_PERMITTED MODIFYING_SQL_DATA_NOT_PERMITTED PROHIBITED_SQL_STATEMENT_ATTEMPTED READING_SQL_DATA_NOT_PERMITTED EXTERNAL_ROUTINE_INVOCATION_EXCEPTION INVALID_SQLSTATE_RETURNED NULL_VALUE_NOT_ALLOWED TRIGGER_PROTOCOL_VIOLATED SRF_PROTOCOL_VIOLATED EVENT_TRIGGER_PROTOCOL_VIOLATED SAVEPOINT_EXCEPTION INVALID_SAVEPOINT_SPECIFICATION INVALID_CATALOG_NAME INVALID_SCHEMA_NAME TRANSACTION_ROLLBACK TRANSACTION_INTEGRITY_CONSTRAINT_VIOLATION SERIALIZATION_FAILURE STATEMENT_COMPLETION_UNKNOWN DEADLOCK_DETECTED SYNTAX_ERROR_OR_ACCESS_RULE_VIOLATION SYNTAX_ERROR INSUFFICIENT_PRIVILEGE CANNOT_COERCE GROUPING_ERROR WINDOWING_ERROR INVALID_RECURSION INVALID_FOREIGN_KEY INVALID_NAME NAME_TOO_LONG RESERVED_NAME DATATYPE_MISMATCH INDETERMINATE_DATATYPE COLLATION_MISMATCH INDETERMINATE_COLLATION WRONG_OBJECT_TYPE GENERATED_ALWAYS UNDEFINED_COLUMN UNDEFINED_FUNCTION UNDEFINED_TABLE UNDEFINED_PARAMETER UNDEFINED_OBJECT DUPLICATE_COLUMN DUPLICATE_CURSOR DUPLICATE_DATABASE DUPLICATE_FUNCTION DUPLICATE_PREPARED_STATEMENT DUPLICATE_SCHEMA DUPLICATE_TABLE DUPLICATE_ALIAS DUPLICATE_OBJECT AMBIGUOUS_COLUMN AMBIGUOUS_FUNCTION AMBIGUOUS_PARAMETER AMBIGUOUS_ALIAS INVALID_COLUMN_REFERENCE INVALID_COLUMN_DEFINITION INVALID_CURSOR_DEFINITION INVALID_DATABASE_DEFINITION INVALID_FUNCTION_DEFINITION INVALID_PREPARED_STATEMENT_DEFINITION INVALID_SCHEMA_DEFINITION INVALID_TABLE_DEFINITION INVALID_OBJECT_DEFINITION WITH_CHECK_OPTION_VIOLATION INSUFFICIENT_RESOURCES DISK_FULL OUT_OF_MEMORY TOO_MANY_CONNECTIONS CONFIGURATION_LIMIT_EXCEEDED PROGRAM_LIMIT_EXCEEDED STATEMENT_TOO_COMPLEX TOO_MANY_COLUMNS TOO_MANY_ARGUMENTS OBJECT_NOT_IN_PREREQUISITE_STATE OBJECT_IN_USE CANT_CHANGE_RUNTIME_PARAM LOCK_NOT_AVAILABLE OPERATOR_INTERVENTION QUERY_CANCELED ADMIN_SHUTDOWN CRASH_SHUTDOWN CANNOT_CONNECT_NOW DATABASE_DROPPED SYSTEM_ERROR IO_ERROR UNDEFINED_FILE DUPLICATE_FILE SNAPSHOT_TOO_OLD CONFIG_FILE_ERROR LOCK_FILE_EXISTS FDW_ERROR FDW_COLUMN_NAME_NOT_FOUND FDW_DYNAMIC_PARAMETER_VALUE_NEEDED FDW_FUNCTION_SEQUENCE_ERROR FDW_INCONSISTENT_DESCRIPTOR_INFORMATION FDW_INVALID_ATTRIBUTE_VALUE FDW_INVALID_COLUMN_NAME FDW_INVALID_COLUMN_NUMBER FDW_INVALID_DATA_TYPE FDW_INVALID_DATA_TYPE_DESCRIPTORS FDW_INVALID_DESCRIPTOR_FIELD_IDENTIFIER FDW_INVALID_HANDLE FDW_INVALID_OPTION_INDEX FDW_INVALID_OPTION_NAME FDW_INVALID_STRING_LENGTH_OR_BUFFER_LENGTH FDW_INVALID_STRING_FORMAT FDW_INVALID_USE_OF_NULL_POINTER FDW_TOO_MANY_HANDLES FDW_OUT_OF_MEMORY FDW_NO_SCHEMAS FDW_OPTION_NAME_NOT_FOUND FDW_REPLY_HANDLE FDW_SCHEMA_NOT_FOUND FDW_TABLE_NOT_FOUND FDW_UNABLE_TO_CREATE_EXECUTION FDW_UNABLE_TO_CREATE_REPLY FDW_UNABLE_TO_ESTABLISH_CONNECTION PLPGSQL_ERROR RAISE_EXCEPTION NO_DATA_FOUND TOO_MANY_ROWS ASSERT_FAILURE INTERNAL_ERROR DATA_CORRUPTED INDEX_CORRUPTED ',
		D =
			'ARRAY_AGG AVG BIT_AND BIT_OR BOOL_AND BOOL_OR COUNT EVERY JSON_AGG JSONB_AGG JSON_OBJECT_AGG JSONB_OBJECT_AGG MAX MIN MODE STRING_AGG SUM XMLAGG CORR COVAR_POP COVAR_SAMP REGR_AVGX REGR_AVGY REGR_COUNT REGR_INTERCEPT REGR_R2 REGR_SLOPE REGR_SXX REGR_SXY REGR_SYY STDDEV STDDEV_POP STDDEV_SAMP VARIANCE VAR_POP VAR_SAMP PERCENTILE_CONT PERCENTILE_DISC ROW_NUMBER RANK DENSE_RANK PERCENT_RANK CUME_DIST NTILE LAG LEAD FIRST_VALUE LAST_VALUE NTH_VALUE NUM_NONNULLS NUM_NULLS ABS CBRT CEIL CEILING DEGREES DIV EXP FLOOR LN LOG MOD PI POWER RADIANS ROUND SCALE SIGN SQRT TRUNC WIDTH_BUCKET RANDOM SETSEED ACOS ACOSD ASIN ASIND ATAN ATAND ATAN2 ATAN2D COS COSD COT COTD SIN SIND TAN TAND BIT_LENGTH CHAR_LENGTH CHARACTER_LENGTH LOWER OCTET_LENGTH OVERLAY POSITION SUBSTRING TREAT TRIM UPPER ASCII BTRIM CHR CONCAT CONCAT_WS CONVERT CONVERT_FROM CONVERT_TO DECODE ENCODE INITCAP LEFT LENGTH LPAD LTRIM MD5 PARSE_IDENT PG_CLIENT_ENCODING QUOTE_IDENT|10 QUOTE_LITERAL|10 QUOTE_NULLABLE|10 REGEXP_MATCH REGEXP_MATCHES REGEXP_REPLACE REGEXP_SPLIT_TO_ARRAY REGEXP_SPLIT_TO_TABLE REPEAT REPLACE REVERSE RIGHT RPAD RTRIM SPLIT_PART STRPOS SUBSTR TO_ASCII TO_HEX TRANSLATE OCTET_LENGTH GET_BIT GET_BYTE SET_BIT SET_BYTE TO_CHAR TO_DATE TO_NUMBER TO_TIMESTAMP AGE CLOCK_TIMESTAMP|10 DATE_PART DATE_TRUNC ISFINITE JUSTIFY_DAYS JUSTIFY_HOURS JUSTIFY_INTERVAL MAKE_DATE MAKE_INTERVAL|10 MAKE_TIME MAKE_TIMESTAMP|10 MAKE_TIMESTAMPTZ|10 NOW STATEMENT_TIMESTAMP|10 TIMEOFDAY TRANSACTION_TIMESTAMP|10 ENUM_FIRST ENUM_LAST ENUM_RANGE AREA CENTER DIAMETER HEIGHT ISCLOSED ISOPEN NPOINTS PCLOSE POPEN RADIUS WIDTH BOX BOUND_BOX CIRCLE LINE LSEG PATH POLYGON ABBREV BROADCAST HOST HOSTMASK MASKLEN NETMASK NETWORK SET_MASKLEN TEXT INET_SAME_FAMILY INET_MERGE MACADDR8_SET7BIT ARRAY_TO_TSVECTOR GET_CURRENT_TS_CONFIG NUMNODE PLAINTO_TSQUERY PHRASETO_TSQUERY WEBSEARCH_TO_TSQUERY QUERYTREE SETWEIGHT STRIP TO_TSQUERY TO_TSVECTOR JSON_TO_TSVECTOR JSONB_TO_TSVECTOR TS_DELETE TS_FILTER TS_HEADLINE TS_RANK TS_RANK_CD TS_REWRITE TSQUERY_PHRASE TSVECTOR_TO_ARRAY TSVECTOR_UPDATE_TRIGGER TSVECTOR_UPDATE_TRIGGER_COLUMN XMLCOMMENT XMLCONCAT XMLELEMENT XMLFOREST XMLPI XMLROOT XMLEXISTS XML_IS_WELL_FORMED XML_IS_WELL_FORMED_DOCUMENT XML_IS_WELL_FORMED_CONTENT XPATH XPATH_EXISTS XMLTABLE XMLNAMESPACES TABLE_TO_XML TABLE_TO_XMLSCHEMA TABLE_TO_XML_AND_XMLSCHEMA QUERY_TO_XML QUERY_TO_XMLSCHEMA QUERY_TO_XML_AND_XMLSCHEMA CURSOR_TO_XML CURSOR_TO_XMLSCHEMA SCHEMA_TO_XML SCHEMA_TO_XMLSCHEMA SCHEMA_TO_XML_AND_XMLSCHEMA DATABASE_TO_XML DATABASE_TO_XMLSCHEMA DATABASE_TO_XML_AND_XMLSCHEMA XMLATTRIBUTES TO_JSON TO_JSONB ARRAY_TO_JSON ROW_TO_JSON JSON_BUILD_ARRAY JSONB_BUILD_ARRAY JSON_BUILD_OBJECT JSONB_BUILD_OBJECT JSON_OBJECT JSONB_OBJECT JSON_ARRAY_LENGTH JSONB_ARRAY_LENGTH JSON_EACH JSONB_EACH JSON_EACH_TEXT JSONB_EACH_TEXT JSON_EXTRACT_PATH JSONB_EXTRACT_PATH JSON_OBJECT_KEYS JSONB_OBJECT_KEYS JSON_POPULATE_RECORD JSONB_POPULATE_RECORD JSON_POPULATE_RECORDSET JSONB_POPULATE_RECORDSET JSON_ARRAY_ELEMENTS JSONB_ARRAY_ELEMENTS JSON_ARRAY_ELEMENTS_TEXT JSONB_ARRAY_ELEMENTS_TEXT JSON_TYPEOF JSONB_TYPEOF JSON_TO_RECORD JSONB_TO_RECORD JSON_TO_RECORDSET JSONB_TO_RECORDSET JSON_STRIP_NULLS JSONB_STRIP_NULLS JSONB_SET JSONB_INSERT JSONB_PRETTY CURRVAL LASTVAL NEXTVAL SETVAL COALESCE NULLIF GREATEST LEAST ARRAY_APPEND ARRAY_CAT ARRAY_NDIMS ARRAY_DIMS ARRAY_FILL ARRAY_LENGTH ARRAY_LOWER ARRAY_POSITION ARRAY_POSITIONS ARRAY_PREPEND ARRAY_REMOVE ARRAY_REPLACE ARRAY_TO_STRING ARRAY_UPPER CARDINALITY STRING_TO_ARRAY UNNEST ISEMPTY LOWER_INC UPPER_INC LOWER_INF UPPER_INF RANGE_MERGE GENERATE_SERIES GENERATE_SUBSCRIPTS CURRENT_DATABASE CURRENT_QUERY CURRENT_SCHEMA|10 CURRENT_SCHEMAS|10 INET_CLIENT_ADDR INET_CLIENT_PORT INET_SERVER_ADDR INET_SERVER_PORT ROW_SECURITY_ACTIVE FORMAT_TYPE TO_REGCLASS TO_REGPROC TO_REGPROCEDURE TO_REGOPER TO_REGOPERATOR TO_REGTYPE TO_REGNAMESPACE TO_REGROLE COL_DESCRIPTION OBJ_DESCRIPTION SHOBJ_DESCRIPTION TXID_CURRENT TXID_CURRENT_IF_ASSIGNED TXID_CURRENT_SNAPSHOT TXID_SNAPSHOT_XIP TXID_SNAPSHOT_XMAX TXID_SNAPSHOT_XMIN TXID_VISIBLE_IN_SNAPSHOT TXID_STATUS CURRENT_SETTING SET_CONFIG BRIN_SUMMARIZE_NEW_VALUES BRIN_SUMMARIZE_RANGE BRIN_DESUMMARIZE_RANGE GIN_CLEAN_PENDING_LIST SUPPRESS_REDUNDANT_UPDATES_TRIGGER LO_FROM_BYTEA LO_PUT LO_GET LO_CREAT LO_CREATE LO_UNLINK LO_IMPORT LO_EXPORT LOREAD LOWRITE GROUPING CAST '
				.trim()
				.split(' ')
				.map(function (p) {
					return p.split('|')[0];
				})
				.join('|');
	return {
		name: 'PostgreSQL',
		aliases: ['postgres', 'postgresql'],
		supersetOf: 'sql',
		case_insensitive: !0,
		keywords: { keyword: _ + E + s, built_in: N + I + u },
		illegal: /:==|\W\s*\(\*|(^|\s)\$[a-z]|\{\{|[a-z]:\s*$|\.\.\.|TO:|DO:/,
		contains: [
			{
				className: 'keyword',
				variants: [
					{ begin: /\bTEXT\s*SEARCH\b/ },
					{ begin: /\b(PRIMARY|FOREIGN|FOR(\s+NO)?)\s+KEY\b/ },
					{ begin: /\bPARALLEL\s+(UNSAFE|RESTRICTED|SAFE)\b/ },
					{ begin: /\bSTORAGE\s+(PLAIN|EXTERNAL|EXTENDED|MAIN)\b/ },
					{ begin: /\bMATCH\s+(FULL|PARTIAL|SIMPLE)\b/ },
					{ begin: /\bNULLS\s+(FIRST|LAST)\b/ },
					{ begin: /\bEVENT\s+TRIGGER\b/ },
					{ begin: /\b(MAPPING|OR)\s+REPLACE\b/ },
					{ begin: /\b(FROM|TO)\s+(PROGRAM|STDIN|STDOUT)\b/ },
					{ begin: /\b(SHARE|EXCLUSIVE)\s+MODE\b/ },
					{ begin: /\b(LEFT|RIGHT)\s+(OUTER\s+)?JOIN\b/ },
					{
						begin: /\b(FETCH|MOVE)\s+(NEXT|PRIOR|FIRST|LAST|ABSOLUTE|RELATIVE|FORWARD|BACKWARD)\b/
					},
					{ begin: /\bPRESERVE\s+ROWS\b/ },
					{ begin: /\bDISCARD\s+PLANS\b/ },
					{ begin: /\bREFERENCING\s+(OLD|NEW)\b/ },
					{ begin: /\bSKIP\s+LOCKED\b/ },
					{ begin: /\bGROUPING\s+SETS\b/ },
					{ begin: /\b(BINARY|INSENSITIVE|SCROLL|NO\s+SCROLL)\s+(CURSOR|FOR)\b/ },
					{ begin: /\b(WITH|WITHOUT)\s+HOLD\b/ },
					{ begin: /\bWITH\s+(CASCADED|LOCAL)\s+CHECK\s+OPTION\b/ },
					{ begin: /\bEXCLUDE\s+(TIES|NO\s+OTHERS)\b/ },
					{ begin: /\bFORMAT\s+(TEXT|XML|JSON|YAML)\b/ },
					{ begin: /\bSET\s+((SESSION|LOCAL)\s+)?NAMES\b/ },
					{ begin: /\bIS\s+(NOT\s+)?UNKNOWN\b/ },
					{ begin: /\bSECURITY\s+LABEL\b/ },
					{ begin: /\bSTANDALONE\s+(YES|NO|NO\s+VALUE)\b/ },
					{ begin: /\bWITH\s+(NO\s+)?DATA\b/ },
					{ begin: /\b(FOREIGN|SET)\s+DATA\b/ },
					{ begin: /\bSET\s+(CATALOG|CONSTRAINTS)\b/ },
					{ begin: /\b(WITH|FOR)\s+ORDINALITY\b/ },
					{ begin: /\bIS\s+(NOT\s+)?DOCUMENT\b/ },
					{ begin: /\bXML\s+OPTION\s+(DOCUMENT|CONTENT)\b/ },
					{ begin: /\b(STRIP|PRESERVE)\s+WHITESPACE\b/ },
					{ begin: /\bNO\s+(ACTION|MAXVALUE|MINVALUE)\b/ },
					{ begin: /\bPARTITION\s+BY\s+(RANGE|LIST|HASH)\b/ },
					{ begin: /\bAT\s+TIME\s+ZONE\b/ },
					{ begin: /\bGRANTED\s+BY\b/ },
					{ begin: /\bRETURN\s+(QUERY|NEXT)\b/ },
					{ begin: /\b(ATTACH|DETACH)\s+PARTITION\b/ },
					{ begin: /\bFORCE\s+ROW\s+LEVEL\s+SECURITY\b/ },
					{
						begin:
							/\b(INCLUDING|EXCLUDING)\s+(COMMENTS|CONSTRAINTS|DEFAULTS|IDENTITY|INDEXES|STATISTICS|STORAGE|ALL)\b/
					},
					{ begin: /\bAS\s+(ASSIGNMENT|IMPLICIT|PERMISSIVE|RESTRICTIVE|ENUM|RANGE)\b/ }
				]
			},
			{ begin: /\b(FORMAT|FAMILY|VERSION)\s*\(/ },
			{ begin: /\bINCLUDE\s*\(/, keywords: 'INCLUDE' },
			{ begin: /\bRANGE(?!\s*(BETWEEN|UNBOUNDED|CURRENT|[-0-9]+))/ },
			{
				begin:
					/\b(VERSION|OWNER|TEMPLATE|TABLESPACE|CONNECTION\s+LIMIT|PROCEDURE|RESTRICT|JOIN|PARSER|COPY|START|END|COLLATION|INPUT|ANALYZE|STORAGE|LIKE|DEFAULT|DELIMITER|ENCODING|COLUMN|CONSTRAINT|TABLE|SCHEMA)\s*=/
			},
			{ begin: /\b(PG_\w+?|HAS_[A-Z_]+_PRIVILEGE)\b/, relevance: 10 },
			{
				begin: /\bEXTRACT\s*\(/,
				end: /\bFROM\b/,
				returnEnd: !0,
				keywords: {
					type: 'CENTURY DAY DECADE DOW DOY EPOCH HOUR ISODOW ISOYEAR MICROSECONDS MILLENNIUM MILLISECONDS MINUTE MONTH QUARTER SECOND TIMEZONE TIMEZONE_HOUR TIMEZONE_MINUTE WEEK YEAR'
				}
			},
			{ begin: /\b(XMLELEMENT|XMLPI)\s*\(\s*NAME/, keywords: { keyword: 'NAME' } },
			{
				begin: /\b(XMLPARSE|XMLSERIALIZE)\s*\(\s*(DOCUMENT|CONTENT)/,
				keywords: { keyword: 'DOCUMENT CONTENT' }
			},
			{
				beginKeywords: 'CACHE INCREMENT MAXVALUE MINVALUE',
				end: e.C_NUMBER_RE,
				returnEnd: !0,
				keywords: 'BY CACHE INCREMENT MAXVALUE MINVALUE'
			},
			{ className: 'type', begin: /\b(WITH|WITHOUT)\s+TIME\s+ZONE\b/ },
			{
				className: 'type',
				begin:
					/\bINTERVAL\s+(YEAR|MONTH|DAY|HOUR|MINUTE|SECOND)(\s+TO\s+(MONTH|HOUR|MINUTE|SECOND))?\b/
			},
			{
				begin:
					/\bRETURNS\s+(LANGUAGE_HANDLER|TRIGGER|EVENT_TRIGGER|FDW_HANDLER|INDEX_AM_HANDLER|TSM_HANDLER)\b/,
				keywords: {
					keyword: 'RETURNS',
					type: 'LANGUAGE_HANDLER TRIGGER EVENT_TRIGGER FDW_HANDLER INDEX_AM_HANDLER TSM_HANDLER'
				}
			},
			{ begin: '\\b(' + D + ')\\s*\\(' },
			{ begin: '\\.(' + T + ')\\b' },
			{
				begin: '\\b(' + T + ')\\s+PATH\\b',
				keywords: { keyword: 'PATH', type: a.replace('PATH ', '') }
			},
			{ className: 'type', begin: '\\b(' + T + ')\\b' },
			{ className: 'string', begin: "'", end: "'", contains: [{ begin: "''" }] },
			{
				className: 'string',
				begin: "(e|E|u&|U&)'",
				end: "'",
				contains: [{ begin: '\\\\.' }],
				relevance: 10
			},
			e.END_SAME_AS_BEGIN({
				begin: i,
				end: i,
				contains: [
					{
						subLanguage: [
							'pgsql',
							'perl',
							'python',
							'tcl',
							'r',
							'lua',
							'java',
							'php',
							'ruby',
							'bash',
							'scheme',
							'xml',
							'json'
						],
						endsWithParent: !0
					}
				]
			}),
			{ begin: '"', end: '"', contains: [{ begin: '""' }] },
			e.C_NUMBER_MODE,
			e.C_BLOCK_COMMENT_MODE,
			t,
			{
				className: 'meta',
				variants: [
					{ begin: '%(ROW)?TYPE', relevance: 10 },
					{ begin: '\\$\\d+' },
					{ begin: '^#\\w', end: '$' }
				]
			},
			{ className: 'symbol', begin: c, relevance: 10 }
		]
	};
}
function create_if_block$2(e) {
	let t, n;
	return {
		c() {
			(t = svg_element('title')), (n = text(e[1]));
		},
		l(i) {
			t = claim_svg_element(i, 'title', {});
			var c = children(t);
			(n = claim_text(c, e[1])), c.forEach(detach);
		},
		m(i, c) {
			insert_hydration(i, t, c), append_hydration(t, n);
		},
		p(i, c) {
			c & 2 && set_data(n, i[1]);
		},
		d(i) {
			i && detach(t);
		}
	};
}
function create_fragment$3(e) {
	let t,
		n,
		i,
		c = e[1] && create_if_block$2(e),
		_ = [
			{ xmlns: 'http://www.w3.org/2000/svg' },
			{ viewBox: '0 0 32 32' },
			{ fill: 'currentColor' },
			{ preserveAspectRatio: 'xMidYMid meet' },
			{ width: e[0] },
			{ height: e[0] },
			e[2],
			e[3]
		],
		s = {};
	for (let E = 0; E < _.length; E += 1) s = assign(s, _[E]);
	return {
		c() {
			(t = svg_element('svg')),
				c && c.c(),
				(n = svg_element('path')),
				(i = svg_element('path')),
				this.h();
		},
		l(E) {
			t = claim_svg_element(E, 'svg', {
				xmlns: !0,
				viewBox: !0,
				fill: !0,
				preserveAspectRatio: !0,
				width: !0,
				height: !0
			});
			var a = children(t);
			c && c.l(a),
				(n = claim_svg_element(a, 'path', { d: !0 })),
				children(n).forEach(detach),
				(i = claim_svg_element(a, 'path', { d: !0 })),
				children(i).forEach(detach),
				a.forEach(detach),
				this.h();
		},
		h() {
			attr(
				n,
				'd',
				'M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z'
			),
				attr(i, 'd', 'M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z'),
				set_svg_attributes(t, s);
		},
		m(E, a) {
			insert_hydration(E, t, a), c && c.m(t, null), append_hydration(t, n), append_hydration(t, i);
		},
		p(E, [a]) {
			E[1]
				? c
					? c.p(E, a)
					: ((c = create_if_block$2(E)), c.c(), c.m(t, n))
				: c && (c.d(1), (c = null)),
				set_svg_attributes(
					t,
					(s = get_spread_update(_, [
						{ xmlns: 'http://www.w3.org/2000/svg' },
						{ viewBox: '0 0 32 32' },
						{ fill: 'currentColor' },
						{ preserveAspectRatio: 'xMidYMid meet' },
						a & 1 && { width: E[0] },
						a & 1 && { height: E[0] },
						a & 4 && E[2],
						a & 8 && E[3]
					]))
				);
		},
		i: noop,
		o: noop,
		d(E) {
			E && detach(t), c && c.d();
		}
	};
}
function instance$3(e, t, n) {
	let i, c;
	const _ = ['size', 'title'];
	let s = compute_rest_props(t, _),
		{ size: E = 16 } = t,
		{ title: a = void 0 } = t;
	return (
		(e.$$set = (T) => {
			n(5, (t = assign(assign({}, t), exclude_internal_props(T)))),
				n(3, (s = compute_rest_props(t, _))),
				'size' in T && n(0, (E = T.size)),
				'title' in T && n(1, (a = T.title));
		}),
		(e.$$.update = () => {
			n(4, (i = t['aria-label'] || t['aria-labelledby'] || a)),
				n(
					2,
					(c = {
						'aria-hidden': i ? void 0 : !0,
						role: i ? 'img' : void 0,
						focusable: Number(t.tabindex) === 0 ? !0 : void 0
					})
				);
		}),
		(t = exclude_internal_props(t)),
		[E, a, c, s, i]
	);
}
class Copy extends SvelteComponent {
	constructor(t) {
		super(), init(this, t, instance$3, create_fragment$3, safe_not_equal, { size: 0, title: 1 });
	}
}
function create_if_block$1(e) {
	let t, n;
	return {
		c() {
			(t = svg_element('title')), (n = text(e[1]));
		},
		l(i) {
			t = claim_svg_element(i, 'title', {});
			var c = children(t);
			(n = claim_text(c, e[1])), c.forEach(detach);
		},
		m(i, c) {
			insert_hydration(i, t, c), append_hydration(t, n);
		},
		p(i, c) {
			c & 2 && set_data(n, i[1]);
		},
		d(i) {
			i && detach(t);
		}
	};
}
function create_fragment$2(e) {
	let t,
		n,
		i,
		c,
		_ = e[1] && create_if_block$1(e),
		s = [
			{ xmlns: 'http://www.w3.org/2000/svg' },
			{ viewBox: '0 0 32 32' },
			{ fill: 'currentColor' },
			{ preserveAspectRatio: 'xMidYMid meet' },
			{ width: e[0] },
			{ height: e[0] },
			e[2],
			e[3]
		],
		E = {};
	for (let a = 0; a < s.length; a += 1) E = assign(E, s[a]);
	return {
		c() {
			(t = svg_element('svg')),
				_ && _.c(),
				(n = svg_element('path')),
				(i = svg_element('path')),
				(c = svg_element('path')),
				this.h();
		},
		l(a) {
			t = claim_svg_element(a, 'svg', {
				xmlns: !0,
				viewBox: !0,
				fill: !0,
				preserveAspectRatio: !0,
				width: !0,
				height: !0
			});
			var T = children(t);
			_ && _.l(T),
				(n = claim_svg_element(T, 'path', { d: !0 })),
				children(n).forEach(detach),
				(i = claim_svg_element(T, 'path', { d: !0 })),
				children(i).forEach(detach),
				(c = claim_svg_element(T, 'path', { d: !0 })),
				children(c).forEach(detach),
				T.forEach(detach),
				this.h();
		},
		h() {
			attr(n, 'd', 'M21,16a6,6,0,1,1-6,6,6,6,0,0,1,6-6m0-2a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z'),
				attr(
					i,
					'd',
					'M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h4V26H6V12H28V6A2,2,0,0,0,26,4ZM6,10V6H26v4Z'
				),
				attr(c, 'd', 'M19 19L19 25 24 22 19 19z'),
				set_svg_attributes(t, E);
		},
		m(a, T) {
			insert_hydration(a, t, T),
				_ && _.m(t, null),
				append_hydration(t, n),
				append_hydration(t, i),
				append_hydration(t, c);
		},
		p(a, [T]) {
			a[1]
				? _
					? _.p(a, T)
					: ((_ = create_if_block$1(a)), _.c(), _.m(t, n))
				: _ && (_.d(1), (_ = null)),
				set_svg_attributes(
					t,
					(E = get_spread_update(s, [
						{ xmlns: 'http://www.w3.org/2000/svg' },
						{ viewBox: '0 0 32 32' },
						{ fill: 'currentColor' },
						{ preserveAspectRatio: 'xMidYMid meet' },
						T & 1 && { width: a[0] },
						T & 1 && { height: a[0] },
						T & 4 && a[2],
						T & 8 && a[3]
					]))
				);
		},
		i: noop,
		o: noop,
		d(a) {
			a && detach(t), _ && _.d();
		}
	};
}
function instance$2(e, t, n) {
	let i, c;
	const _ = ['size', 'title'];
	let s = compute_rest_props(t, _),
		{ size: E = 16 } = t,
		{ title: a = void 0 } = t;
	return (
		(e.$$set = (T) => {
			n(5, (t = assign(assign({}, t), exclude_internal_props(T)))),
				n(3, (s = compute_rest_props(t, _))),
				'size' in T && n(0, (E = T.size)),
				'title' in T && n(1, (a = T.title));
		}),
		(e.$$.update = () => {
			n(4, (i = t['aria-label'] || t['aria-labelledby'] || a)),
				n(
					2,
					(c = {
						'aria-hidden': i ? void 0 : !0,
						role: i ? 'img' : void 0,
						focusable: Number(t.tabindex) === 0 ? !0 : void 0
					})
				);
		}),
		(t = exclude_internal_props(t)),
		[E, a, c, s, i]
	);
}
class Run extends SvelteComponent {
	constructor(t) {
		super(), init(this, t, instance$2, create_fragment$2, safe_not_equal, { size: 0, title: 1 });
	}
}
function create_if_block_3(e) {
	let t, n, i, c, _;
	return (
		(n = new Copy({})),
		{
			c() {
				(t = element('button')), create_component(n.$$.fragment);
			},
			l(s) {
				t = claim_element(s, 'BUTTON', {});
				var E = children(t);
				claim_component(n.$$.fragment, E), E.forEach(detach);
			},
			m(s, E) {
				insert_hydration(s, t, E),
					mount_component(n, t, null),
					(i = !0),
					c || ((_ = listen(t, 'click', e[6])), (c = !0));
			},
			p: noop,
			i(s) {
				i || (transition_in(n.$$.fragment, s), (i = !0));
			},
			o(s) {
				transition_out(n.$$.fragment, s), (i = !1);
			},
			d(s) {
				s && detach(t), destroy_component(n), (c = !1), _();
			}
		}
	);
}
function create_if_block_2(e) {
	let t,
		n,
		i,
		c,
		_,
		s = '<',
		E,
		a,
		T;
	return {
		c() {
			(t = element('div')),
				(n = element('button')),
				(i = text('>')),
				(c = space()),
				(_ = element('button')),
				(E = text(s)),
				this.h();
		},
		l(N) {
			t = claim_element(N, 'DIV', { style: !0 });
			var I = children(t);
			n = claim_element(I, 'BUTTON', {});
			var u = children(n);
			(i = claim_text(u, '>')),
				u.forEach(detach),
				(c = claim_space(I)),
				(_ = claim_element(I, 'BUTTON', {}));
			var C = children(_);
			(E = claim_text(C, s)), C.forEach(detach), I.forEach(detach), this.h();
		},
		h() {
			set_style(t, 'display', 'flex'), set_style(t, 'flex-direction', 'column');
		},
		m(N, I) {
			insert_hydration(N, t, I),
				append_hydration(t, n),
				append_hydration(n, i),
				append_hydration(t, c),
				append_hydration(t, _),
				append_hydration(_, E),
				a || ((T = [listen(n, 'click', e[7]), listen(_, 'click', e[8])]), (a = !0));
		},
		p: noop,
		d(N) {
			N && detach(t), (a = !1), run_all(T);
		}
	};
}
function create_if_block_1(e) {
	let t, n, i, c;
	return {
		c() {
			(t = element('button')), (n = text('Copy'));
		},
		l(_) {
			t = claim_element(_, 'BUTTON', {});
			var s = children(t);
			(n = claim_text(s, 'Copy')), s.forEach(detach);
		},
		m(_, s) {
			insert_hydration(_, t, s),
				append_hydration(t, n),
				i || ((c = listen(t, 'click', e[11])), (i = !0));
		},
		p: noop,
		d(_) {
			_ && detach(t), (i = !1), c();
		}
	};
}
function create_if_block(e) {
	let t, n, i, c, _;
	return (
		(n = new Run({})),
		{
			c() {
				(t = element('button')), create_component(n.$$.fragment);
			},
			l(s) {
				t = claim_element(s, 'BUTTON', {});
				var E = children(t);
				claim_component(n.$$.fragment, E), E.forEach(detach);
			},
			m(s, E) {
				insert_hydration(s, t, E),
					mount_component(n, t, null),
					(i = !0),
					c || ((_ = listen(t, 'click', e[12])), (c = !0));
			},
			p: noop,
			i(s) {
				i || (transition_in(n.$$.fragment, s), (i = !0));
			},
			o(s) {
				transition_out(n.$$.fragment, s), (i = !1);
			},
			d(s) {
				s && detach(t), destroy_component(n), (c = !1), _();
			}
		}
	);
}
function create_fragment$1(e) {
	let t,
		n,
		i,
		c,
		_,
		s,
		E,
		a,
		T,
		N,
		I,
		u = e[5] == 'r' && create_if_block_3(e),
		C = e[5] == 'python' && create_if_block_2(e),
		D = e[5] == 'R' && create_if_block_1(e),
		p = e[5] === 'js' && create_if_block(e),
		y = [{ id: e[1] }, { class: (N = e[2].join(' ')) }, e[4]],
		B = {};
	for (let f = 0; f < y.length; f += 1) B = assign(B, y[f]);
	return {
		c() {
			(t = element('div')),
				u && u.c(),
				(n = space()),
				C && C.c(),
				(i = space()),
				D && D.c(),
				(c = space()),
				p && p.c(),
				(_ = space()),
				(s = element('pre')),
				(E = text('    ')),
				(a = new HtmlTagHydration(!1)),
				(T = text(`
  `)),
				this.h();
		},
		l(f) {
			t = claim_element(f, 'DIV', { style: !0 });
			var h = children(t);
			u && u.l(h),
				(n = claim_space(h)),
				C && C.l(h),
				(i = claim_space(h)),
				D && D.l(h),
				(c = claim_space(h)),
				p && p.l(h),
				(_ = claim_space(h)),
				(s = claim_element(h, 'PRE', { id: !0, class: !0 }));
			var G = children(s);
			(E = claim_text(G, '    ')),
				(a = claim_html_tag(G, !1)),
				(T = claim_text(
					G,
					`
  `
				)),
				G.forEach(detach),
				h.forEach(detach),
				this.h();
		},
		h() {
			(a.a = T), set_attributes(s, B), set_style(t, 'display', 'flex');
		},
		m(f, h) {
			insert_hydration(f, t, h),
				u && u.m(t, null),
				append_hydration(t, n),
				C && C.m(t, null),
				append_hydration(t, i),
				D && D.m(t, null),
				append_hydration(t, c),
				p && p.m(t, null),
				append_hydration(t, _),
				append_hydration(t, s),
				append_hydration(s, E),
				a.m(e[0], s),
				append_hydration(s, T),
				(I = !0);
		},
		p(f, [h]) {
			f[5] == 'r' && u.p(f, h),
				f[5] == 'python' && C.p(f, h),
				f[5] == 'R' && D.p(f, h),
				f[5] === 'js' && p.p(f, h),
				(!I || h & 1) && a.p(f[0]),
				set_attributes(s, (B = get_spread_update(y, [{ id: f[1] }, { class: N }, f[4]])));
		},
		i(f) {
			I || (transition_in(u), transition_in(p), (I = !0));
		},
		o(f) {
			transition_out(u), transition_out(p), (I = !1);
		},
		d(f) {
			f && detach(t), u && u.d(), C && C.d(), D && D.d(), p && p.d();
		}
	};
}
function instance$1($$self, $$props, $$invalidate) {
	let html,
		{ data } = $$props,
		{ settings } = $$props;
	HighlightJS.registerLanguage('javascript', javascript),
		HighlightJS.registerLanguage('r', r),
		HighlightJS.registerLanguage('sql', pgsql),
		HighlightJS.registerLanguage('python', python),
		HighlightJS.registerLanguage('markdown', markdown);
	const [[id, classes, kv], elems] = data,
		attrs = Object.fromEntries(kv),
		language = classes[0];
	function copy() {
		let e = elems;
		language === 'r' && (e = '```{R}\n' + e + '\n```\n');
		var t = navigator.clipboard.writeText(e);
		t.then((n) => {
			setTimeout(() => {}, 2e3);
		});
	}
	function indent() {
		$$invalidate(
			0,
			(html = html
				.split(
					`
`
				)
				.map((e) => '  ' + e).join(`
`))
		);
	}
	function unindent() {
		$$invalidate(
			0,
			(html = html
				.split(
					`
`
				)
				.map((e) => e.replace(/^  /, '')).join(`
`))
		);
	}
	const click_handler = () => copy(),
		click_handler_1 = () => eval(elems);
	return (
		($$self.$$set = (e) => {
			'data' in e && $$invalidate(9, (data = e.data)),
				'settings' in e && $$invalidate(10, (settings = e.settings));
		}),
		$$invalidate(
			0,
			(html = HighlightJS.highlight(elems, { language: language.toLowerCase() }).value)
		),
		[
			html,
			id,
			classes,
			elems,
			attrs,
			language,
			copy,
			indent,
			unindent,
			data,
			settings,
			click_handler,
			click_handler_1
		]
	);
}
class CodeBlock extends SvelteComponent {
	constructor(t) {
		super(),
			init(this, t, instance$1, create_fragment$1, safe_not_equal, { data: 9, settings: 10 });
	}
}
const _page_svelte_svelte_type_style_lang = '';
function create_fragment(e) {
	let t, n, i, c, _, s, E, a, T;
	return (
		(a = new Document({ props: { ast: e[0], settings: { elements: { CodeBlock } } } })),
		{
			c() {
				(t = text(`This passes the custom codeblock element defined
`)),
					(n = element('a')),
					(i = text('here')),
					(c = text(`
on the markdown
`)),
					(_ = element('a')),
					(s = text('here')),
					(E = space()),
					create_component(a.$$.fragment),
					this.h();
			},
			l(N) {
				(t = claim_text(
					N,
					`This passes the custom codeblock element defined
`
				)),
					(n = claim_element(N, 'A', { href: !0 }));
				var I = children(n);
				(i = claim_text(I, 'here')),
					I.forEach(detach),
					(c = claim_text(
						N,
						`
on the markdown
`
					)),
					(_ = claim_element(N, 'A', { href: !0 }));
				var u = children(_);
				(s = claim_text(u, 'here')),
					u.forEach(detach),
					(E = claim_space(N)),
					claim_component(a.$$.fragment, N),
					this.h();
			},
			h() {
				attr(
					n,
					'href',
					'https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/routes/demo/_CodeBlock.svelte'
				),
					attr(
						_,
						'href',
						'https://github.com/bmschmidt/pandoc-svelte-components/blob/main/src/demo_data/code.md'
					);
			},
			m(N, I) {
				insert_hydration(N, t, I),
					insert_hydration(N, n, I),
					append_hydration(n, i),
					insert_hydration(N, c, I),
					insert_hydration(N, _, I),
					append_hydration(_, s),
					insert_hydration(N, E, I),
					mount_component(a, N, I),
					(T = !0);
			},
			p: noop,
			i(N) {
				T || (transition_in(a.$$.fragment, N), (T = !0));
			},
			o(N) {
				transition_out(a.$$.fragment, N), (T = !1);
			},
			d(N) {
				N && detach(t),
					N && detach(n),
					N && detach(c),
					N && detach(_),
					N && detach(E),
					destroy_component(a, N);
			}
		}
	);
}
function instance(e) {
	return [JSON.parse(ast_text)];
}
class Page extends SvelteComponent {
	constructor(t) {
		super(), init(this, t, instance, create_fragment, safe_not_equal, {});
	}
}
export { Page as default };
