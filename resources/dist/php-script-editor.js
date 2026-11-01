// ../../node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, s = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: c, defineProperty: l, getOwnPropertyDescriptor: u, getOwnPropertyNames: d, getOwnPropertySymbols: ee, getPrototypeOf: te } = Object, f = globalThis, ne = f.trustedTypes, re = ne ? ne.emptyScript : "", ie = f.reactiveElementPolyfillSupport, p = (e, t) => e, ae = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? re : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, oe = (e, t) => !c(e, t), se = {
	attribute: !0,
	type: String,
	converter: ae,
	reflect: !1,
	useDefault: !1,
	hasChanged: oe
};
Symbol.metadata ??= Symbol("metadata"), f.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var m = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = se) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && l(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = u(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? se;
	}
	static _$Ei() {
		if (this.hasOwnProperty(p("elementProperties"))) return;
		let e = te(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(p("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(p("properties"))) {
			let e = this.properties, t = [...d(e), ...ee(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(s(e));
		} else e !== void 0 && t.push(s(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return o(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? ae : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? ae : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? oe)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
m.elementStyles = [], m.shadowRootOptions = { mode: "open" }, m[p("elementProperties")] = /* @__PURE__ */ new Map(), m[p("finalized")] = /* @__PURE__ */ new Map(), ie?.({ ReactiveElement: m }), (f.reactiveElementVersions ??= []).push("2.1.2");
// ../../node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
var h = globalThis, ce = (e) => e, g = h.trustedTypes, le = g ? g.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ue = "$lit$", _ = `lit$${Math.random().toFixed(9).slice(2)}$`, de = "?" + _, fe = `<${de}>`, v = document, y = () => v.createComment(""), b = (e) => e === null || typeof e != "object" && typeof e != "function", pe = Array.isArray, me = (e) => pe(e) || typeof e?.[Symbol.iterator] == "function", he = "[ 	\n\f\r]", x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ge = /-->/g, _e = />/g, S = RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), ve = /'/g, ye = /"/g, be = /^(?:script|style|textarea|title)$/i, xe = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), C = Symbol.for("lit-noChange"), w = Symbol.for("lit-nothing"), Se = /* @__PURE__ */ new WeakMap(), T = v.createTreeWalker(v, 129);
function Ce(e, t) {
	if (!pe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return le === void 0 ? t : le.createHTML(t);
}
var we = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = x;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === x ? c[1] === "!--" ? o = ge : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = S) : (be.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = S) : o = _e : o === S ? c[0] === ">" ? (o = i ?? x, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? S : c[3] === "\"" ? ye : ve) : o === ye || o === ve ? o = S : o === ge || o === _e ? o = x : (o = S, i = void 0);
		let d = o === S && e[t + 1].startsWith("/>") ? " " : "";
		a += o === x ? n + fe : l >= 0 ? (r.push(s), n.slice(0, l) + ue + n.slice(l) + _ + d) : n + _ + (l === -2 ? t : d);
	}
	return [Ce(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, E = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = we(t, n);
		if (this.el = e.createElement(l, r), T.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = T.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(ue)) {
					let t = u[o++], n = i.getAttribute(e).split(_), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Ee : r[1] === "?" ? De : r[1] === "@" ? Oe : k
					}), i.removeAttribute(e);
				} else e.startsWith(_) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (be.test(i.tagName)) {
					let e = i.textContent.split(_), t = e.length - 1;
					if (t > 0) {
						i.textContent = g ? g.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], y()), T.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], y());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === de) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(_, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += _.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = v.createElement("template");
		return n.innerHTML = e, n;
	}
};
function D(e, t, n = e, r) {
	if (t === C) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = b(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = D(e, i._$AS(e, t.values), i, r)), t;
}
var Te = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? v).importNode(t, !0);
		T.currentNode = r;
		let i = T.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new O(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new ke(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = T.nextNode(), a++);
		}
		return T.currentNode = v, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, O = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = D(this, e, t), b(e) ? e === w || e == null || e === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : e !== this._$AH && e !== C && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? me(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== w && b(this._$AH) ? this._$AA.nextSibling.data = e : this.T(v.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = E.createElement(Ce(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Te(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = Se.get(e.strings);
		return t === void 0 && Se.set(e.strings, t = new E(e)), t;
	}
	k(t) {
		pe(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(y()), this.O(y()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ce(e).nextSibling;
			ce(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, k = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = w, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = w;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = D(this, e, t, 0), a = !b(e) || e !== this._$AH && e !== C, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = D(this, r[n + o], t, o), s === C && (s = this._$AH[o]), a ||= !b(s) || s !== this._$AH[o], s === w ? e = w : e !== w && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Ee = class extends k {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === w ? void 0 : e;
	}
}, De = class extends k {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== w);
	}
}, Oe = class extends k {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = D(this, e, t, 0) ?? w) === C) return;
		let n = this._$AH, r = e === w && n !== w || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== w && (n === w || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, ke = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		D(this, e);
	}
}, Ae = h.litHtmlPolyfillSupport;
Ae?.(E, O), (h.litHtmlVersions ??= []).push("3.3.3");
var je = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new O(t.insertBefore(y(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, A = globalThis, j = class extends m {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = je(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return C;
	}
};
j._$litElement$ = !0, j.finalized = !0, A.litElementHydrateSupport?.({ LitElement: j });
var Me = A.litElementPolyfillSupport;
Me?.({ LitElement: j }), (A.litElementVersions ??= []).push("4.2.2");
// src/config.ts
var M = {
	keywords: [
		"if",
		"else",
		"for",
		"foreach",
		"as",
		"echo",
		"return",
		"true",
		"false",
		"null",
		"LINEBREAK"
	],
	loopKeywords: ["break", "continue"],
	allowedFunctions: [],
	contextVariables: [],
	operators: [
		"==",
		"===",
		"!=",
		"!==",
		"=",
		".",
		"+",
		"-",
		"*",
		"/",
		"%",
		">",
		"<",
		">=",
		"<=",
		"&&",
		"||",
		"!",
		"++",
		"--",
		":"
	],
	symbols: "[=><!~?&|+\\-*/^%.,;()\\{}\\[\\]]",
	tokenizer: {
		root: [
			["[a-zA-Z_]\\w*", { cases: {
				"@keywords": "keyword",
				"@loopKeywords": "keyword",
				"@allowedFunctions": "predefined",
				"@contextVariables": "variable.predefined",
				"@default": "identifier"
			} }],
			{ include: "@whitespace" },
			["[{}()\\[\\]]", "@brackets"],
			["[<>](?!@symbols)", "@brackets"],
			["@symbols", { cases: {
				"@operators": "operator",
				"@default": ""
			} }],
			["\\d+(\\.\\d+)?", "number"],
			[
				"\"",
				"string.quote",
				"@string_double"
			],
			[
				"'",
				"string.quote",
				"@string_single"
			]
		],
		whitespace: [["[ \\t\\r\\n]+", ""], ["\\/\\/.*$", "comment"]],
		string_double: [
			["[^\\\\\"]+", "string"],
			["\\\\.", "string.escape"],
			[
				"\"",
				"string.quote",
				"@pop"
			]
		],
		string_single: [
			["[^\\\\']+", "string"],
			["\\\\.", "string.escape"],
			[
				"'",
				"string.quote",
				"@pop"
			]
		]
	}
}, N = {
	globalFunctions: [],
	globalVariables: [],
	classes: {},
	controlFlows: [
		{
			label: "for",
			kind: "Snippet",
			snippet: "for (${1:i} = ${2:0}; ${1} < ${3:count}(${4}); ${1}++) {\n    $0\n}",
			doc: "For-Loop",
			detail: "for (int $i = 0; $i < count($items); $i++) {"
		},
		{
			label: "foreach",
			kind: "Snippet",
			snippet: "foreach (${1:items} as ${2:item}) {\n    $0\n}",
			doc: "Foreach-Loop",
			detail: "foreach ($items as $item) {"
		},
		{
			label: "foreach (key, value)",
			kind: "Snippet",
			snippet: "foreach (${1:map} as ${2:key}, ${3:value}) {\n    $0\n}",
			doc: "Foreach-Loop for Key/Value Pairs",
			detail: "foreach ($map as $key => $value) {"
		},
		{
			label: "if",
			kind: "Snippet",
			snippet: "if (${1:condition}) {\n    $0\n}",
			doc: "If-Condition",
			detail: "if ($condition) {"
		},
		{
			label: "ifelse",
			kind: "Snippet",
			snippet: "if (${1:condition}) {\n    $2\n} else {\n    $0\n}",
			doc: "If-Else-Condition",
			detail: "if ($condition) { ... } else { ... }"
		}
	],
	loopControls: [{
		label: "break 2",
		kind: "Snippet",
		snippet: "break ${1:2};",
		doc: "Break from nested loops",
		detail: "break N;"
	}, {
		label: "continue 2",
		kind: "Snippet",
		snippet: "continue ${1:2};",
		doc: "Continue outer loop from nested loops",
		detail: "continue N;"
	}],
	loopKeywords: ["break", "continue"]
}, P = {
	definition: M,
	completions: N
}, F = class extends Error {
	name = "ConfigError";
}, I = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ne = (e) => I(e) && I(e.tokenizer) && Array.isArray(e.keywords), Pe = (e) => I(e) && ("globalFunctions" in e || "globalVariables" in e || "classes" in e || "controlFlows" in e), L = (e, t) => Array.isArray(e) ? e : t;
function R(e) {
	if (e == null || e === "") return P;
	let t = e;
	if (typeof t == "string") try {
		t = JSON.parse(t);
	} catch (e) {
		throw new F(`Invalid php-script config JSON: ${e.message}`);
	}
	if (!I(t)) throw new F("php-script config must be an object.");
	let n = t.definition ?? t.language ?? (Ne(t) ? t : void 0), r = t.completions ?? t.completionItems ?? t.suggestions;
	if (n !== void 0 && !Ne(n)) throw new F("php-script config \"definition\" needs \"keywords\" and \"tokenizer\".");
	if (r !== void 0 && !Pe(r)) throw new F("php-script config \"completions\" has an unknown shape.");
	if (n === void 0 && r === void 0) throw new F("php-script config needs \"definition\" and/or \"completions\".");
	let i = n ? {
		...M,
		...n,
		loopKeywords: L(n.loopKeywords, M.loopKeywords ?? []),
		allowedFunctions: L(n.allowedFunctions, []),
		contextVariables: L(n.contextVariables, [])
	} : M, a = r ?? {};
	return {
		definition: i,
		completions: {
			globalFunctions: L(a.globalFunctions, []),
			globalVariables: L(a.globalVariables, []),
			classes: I(a.classes) ? a.classes : {},
			controlFlows: L(a.controlFlows, N.controlFlows),
			loopControls: L(a.loopControls, N.loopControls),
			loopKeywords: L(a.loopKeywords, i.loopKeywords ?? [])
		}
	};
}
function z(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return (t >>> 0).toString(36);
}
function Fe(e) {
	return e === P ? "default" : z(JSON.stringify(e));
}
// src/completion.ts
var Ie = /[A-Za-z_]\w*/y;
function B(e) {
	let t = "", n = 0;
	for (; n < e.length;) {
		let r = e[n];
		if (r === "/" && e[n + 1] === "/") {
			let r = e.indexOf("\n", n), i = r === -1 ? e.length : r;
			t += " ".repeat(i - n), n = i;
		} else if (r === "\"" || r === "'") {
			for (t += r, n++; n < e.length && e[n] !== r;) e[n] === "\\" && n + 1 < e.length ? (t += "  ", n += 2) : (t += e[n] === "\n" ? "\n" : " ", n++);
			n < e.length && (t += r, n++);
		} else t += r, n++;
	}
	return t;
}
function Le(e) {
	let t = B(e), n = [], r = !1, i = 0;
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if (/[A-Za-z_]/.test(a) && (e === 0 || !/\w/.test(t[e - 1]))) {
			Ie.lastIndex = e;
			let n = Ie.exec(t)?.[0] ?? "";
			(n === "for" || n === "foreach") && (r = !0), e += n.length - 1;
		} else a === "(" ? i++ : a === ")" ? i = Math.max(0, i - 1) : a === ";" && i === 0 ? r = !1 : a === "{" ? (n.push(r), r = !1) : a === "}" && n.pop();
	}
	return n.includes(!0);
}
function Re(e) {
	let t = B(e), n = /* @__PURE__ */ new Set();
	for (let e of t.matchAll(/(?:^|[^.\w])([A-Za-z_]\w*)\s*(?:\+\+|--|[+\-*/.%]?=(?!=))/g)) n.add(e[1]);
	for (let e of t.matchAll(/\bas\s+([A-Za-z_]\w*)(?:\s*(?:,|=>)\s*([A-Za-z_]\w*))?/g)) n.add(e[1]), e[2] && n.add(e[2]);
	return [...n];
}
function V(e) {
	let t = /([A-Za-z_]\w*(?:\([^()]*\))?(?:\.[A-Za-z_]\w*(?:\([^()]*\))?)*)\.$/.exec(e);
	if (!t) return null;
	let n = e.slice(0, t.index);
	return /[\w'"]$/.test(n) ? null : t[1].split(".").map((e) => e.replace(/\(.*\)$/, ""));
}
var H = (e) => (e ?? "").trim().replace(/^\?/, "").replace(/^\\/, "");
function ze(e) {
	let t = e.detail ?? "", n = t.lastIndexOf("):");
	return n === -1 ? "" : H(t.slice(n + 2));
}
function U(e, t) {
	let { completions: n } = t, [r, ...i] = e, a = n.globalVariables.find((e) => e.label === r);
	if (!a) return null;
	let o = H(a.detail);
	for (let e of i) {
		let t = n.classes[o];
		if (!t) return null;
		let r = t.properties.find((t) => t.label === e);
		if (r) {
			o = H(r.detail);
			continue;
		}
		let i = t.methods.find((t) => t.label === e);
		if (!i) return null;
		o = ze(i);
	}
	return n.classes[o] ? o : null;
}
var W = (e, t, n = "Text") => ({
	label: e.label,
	kind: e.kind || n,
	insertText: e.snippet ?? e.label,
	snippet: !!e.snippet,
	detail: e.detail ?? "",
	doc: e.doc ?? "",
	sort: t
});
function Be(e, t) {
	let { completions: n, definition: r } = t, i = V(e.textBeforeWord.slice(e.textBeforeWord.lastIndexOf("\n") + 1));
	if (i) {
		let e = U(i, t), r = e ? n.classes[e] : void 0;
		if (r) return [...r.properties.map((e) => W(e, 0, "Property")), ...r.methods.map((e) => W(e, 1, "Method"))];
	}
	let a = new Set(n.globalVariables.map((e) => e.label)), o = /* @__PURE__ */ new Set([...r.keywords, ...r.loopKeywords ?? []]), s = Re(e.code).filter((e) => !a.has(e) && !o.has(e)), c = new Set(n.controlFlows.map((e) => e.label)), l = [
		...n.globalVariables.map((e) => W(e, 0, "Variable")),
		...s.map((e) => W({
			label: e,
			kind: "Variable",
			detail: "Local variable"
		}, 1, "Variable")),
		...n.globalFunctions.map((e) => W(e, 2, "Function")),
		...n.controlFlows.map((e) => W(e, 3, "Snippet")),
		...r.keywords.filter((e) => !c.has(e)).map((e) => W({
			label: e,
			kind: "Keyword",
			detail: "Keyword"
		}, 4))
	];
	return Le(e.textBeforeWord) && l.push(...n.loopControls.map((e) => W(e, 3, "Snippet")), ...n.loopKeywords.map((e) => W({
		label: e,
		kind: "Keyword",
		detail: "Loop control keyword"
	}, 4))), l;
}
function Ve(e, t, n) {
	let { completions: r } = n, i = V(t), a;
	if (i) {
		let t = U(i, n), o = t ? r.classes[t] : void 0;
		a = o?.properties.find((t) => t.label === e) ?? o?.methods.find((t) => t.label === e);
	} else a = r.globalVariables.find((t) => t.label === e) ?? r.globalFunctions.find((t) => t.label === e);
	return a ? {
		detail: a.kind === "Variable" ? `${a.label}: ${a.detail ?? "mixed"}` : a.detail ?? a.label,
		doc: a.doc ?? ""
	} : null;
}
// src/language.ts
var He = "php-script", Ue = "php-script", We = /* @__PURE__ */ new Map();
function G(e, t) {
	let n = Fe(t), r = We.get(n);
	if (r) return r;
	let i = n === "default" ? He : `${He}-${n}`;
	We.set(n, i), e.languages.register({
		id: i,
		aliases: ["php-script", "PHP Script"]
	}), e.languages.setMonarchTokensProvider(i, t.definition), e.languages.setLanguageConfiguration(i, {
		comments: { lineComment: "//" },
		brackets: [
			["{", "}"],
			["[", "]"],
			["(", ")"]
		],
		autoClosingPairs: [
			{
				open: "{",
				close: "}"
			},
			{
				open: "[",
				close: "]"
			},
			{
				open: "(",
				close: ")"
			},
			{
				open: "\"",
				close: "\"",
				notIn: ["string"]
			},
			{
				open: "'",
				close: "'",
				notIn: ["string"]
			}
		],
		surroundingPairs: [
			{
				open: "{",
				close: "}"
			},
			{
				open: "[",
				close: "]"
			},
			{
				open: "(",
				close: ")"
			},
			{
				open: "\"",
				close: "\""
			},
			{
				open: "'",
				close: "'"
			}
		],
		indentationRules: {
			increaseIndentPattern: /^.*\{[^}"']*$/,
			decreaseIndentPattern: /^\s*\}/
		}
	});
	let a = e.languages.CompletionItemKind, o = {
		Function: a.Function,
		Method: a.Method,
		Variable: a.Variable,
		Property: a.Property,
		Keyword: a.Keyword,
		Snippet: a.Snippet
	};
	return e.languages.registerCompletionItemProvider(i, {
		triggerCharacters: ["."],
		provideCompletionItems(n, r) {
			let i = n.getWordUntilPosition(r), s = {
				startLineNumber: r.lineNumber,
				endLineNumber: r.lineNumber,
				startColumn: i.startColumn,
				endColumn: i.endColumn
			}, c = n.getValueInRange({
				startLineNumber: 1,
				startColumn: 1,
				endLineNumber: r.lineNumber,
				endColumn: i.startColumn
			});
			return { suggestions: Be({
				code: n.getValue(),
				textBeforeWord: c
			}, t).map((t) => ({
				label: t.label,
				kind: o[t.kind] ?? a.Text,
				detail: t.detail,
				documentation: t.doc,
				insertText: t.insertText,
				insertTextRules: t.snippet ? e.languages.CompletionItemInsertTextRule.InsertAsSnippet : e.languages.CompletionItemInsertTextRule.KeepWhitespace,
				sortText: `${t.sort}${t.label}`,
				range: s
			})) };
		}
	}), e.languages.registerHoverProvider(i, { provideHover(n, r) {
		let i = n.getWordAtPosition(r);
		if (!i) return null;
		let a = n.getLineContent(r.lineNumber).slice(0, i.startColumn - 1), o = Ve(i.word, a, t);
		return o ? {
			range: new e.Range(r.lineNumber, i.startColumn, r.lineNumber, i.endColumn),
			contents: [{ value: "```php-script\n" + o.detail + "\n```" }, ...o.doc ? [{ value: o.doc }] : []]
		} : null;
	} }), i;
}
function Ge(e, t) {
	return t.map((t) => ({
		startLineNumber: Math.max(1, t.line),
		startColumn: Math.max(1, t.column),
		endLineNumber: Math.max(1, t.line),
		endColumn: Math.max(1, t.column) + Math.max(t.length ?? 1, 1),
		message: t.message,
		source: t.rule ?? "php-script",
		severity: t.severity === "warning" ? e.MarkerSeverity.Warning : e.MarkerSeverity.Error
	}));
}
// src/load-monaco.ts
var Ke = null;
function qe() {
	return Ke ??= import("./chunks/monaco-Ct7LhgkF.js").then((e) => e.monaco, (e) => {
		throw Ke = null, e;
	}), Ke;
}
// src/text.ts
function Je(e) {
	let t = e.replace(/\r\n?/g, "\n").split("\n");
	for (; t.length && t[0].trim() === "";) t.shift();
	for (; t.length && t[t.length - 1].trim() === "";) t.pop();
	let n = t.filter((e) => e.trim() !== "").map((e) => /^[ \t]*/.exec(e)[0].length), r = n.length ? Math.min(...n) : 0;
	return t.map((e) => e.slice(Math.min(r, /^[ \t]*/.exec(e)[0].length))).join("\n");
}
// src/save-client.ts
var K = class extends Error {
	status;
	data;
	diagnostics;
	name = "SaveError";
	constructor(e, t, n, r = []) {
		super(e), this.status = t, this.data = n, this.diagnostics = r;
	}
};
function Ye(e, t) {
	return (e ?? "").trim().toUpperCase() || (t ? "PUT" : "POST");
}
function Xe(e = globalThis.document) {
	return e?.querySelector("meta[name=\"csrf-token\"]")?.content || null;
}
function Ze(e) {
	let t = Ye(e.method, e.persisted), n = e.csrfToken ?? Xe(), r = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"X-Requested-With": "XMLHttpRequest",
		...n ? { "X-CSRF-TOKEN": n } : {},
		...e.headers
	};
	return {
		url: e.url,
		method: t,
		headers: r,
		body: {
			...e.payload,
			[e.field]: e.content
		}
	};
}
async function Qe(e) {
	let t = await e.text();
	if (!t) return null;
	try {
		return JSON.parse(t);
	} catch {
		return t;
	}
}
function $e(e) {
	return (Array.isArray(e) ? e : typeof e == "object" && e && Array.isArray(e.diagnostics) ? e.diagnostics : []).filter((e) => typeof e == "object" && !!e && "message" in e && "line" in e && "column" in e);
}
function et(e, t, n) {
	if (typeof e == "object" && e) {
		let n = e, r = n.errors?.[t];
		if (Array.isArray(r) && typeof r[0] == "string") return r[0];
		if (typeof n.message == "string" && n.message) return n.message;
	}
	return `Save failed (HTTP ${n})`;
}
function tt(e, t, n) {
	let r = typeof t == "object" && t ? t.url ?? t.location : void 0, i = e.headers.get("Location") ?? (typeof r == "string" ? r : null);
	if (!i || n.method !== "POST") return n.url;
	try {
		return new URL(i, new URL(n.url, globalThis.location?.href ?? "http://localhost")).toString();
	} catch {
		return n.url;
	}
}
async function nt(e, t) {
	let n = await (t.fetch ?? globalThis.fetch.bind(globalThis))(e.url, {
		method: e.method,
		headers: e.headers,
		body: JSON.stringify(e.body),
		credentials: "same-origin"
	}), r = await Qe(n);
	if (!n.ok) throw new K(et(r, t.field, n.status), n.status, r, $e(r));
	return {
		url: e.url,
		method: e.method,
		status: n.status,
		data: r,
		nextUrl: tt(n, r, e)
	};
}
async function rt(e, t, n) {
	let r = Ze({
		url: e,
		method: "POST",
		persisted: !1,
		field: n.field,
		content: t,
		csrfToken: n.csrfToken ?? null,
		headers: n.headers ?? null
	}), i = await (n.fetch ?? globalThis.fetch.bind(globalThis))(e, {
		method: "POST",
		headers: r.headers,
		body: JSON.stringify(r.body),
		credentials: "same-origin",
		...n.signal ? { signal: n.signal } : {}
	}), a = await Qe(i);
	if (!i.ok && i.status !== 422) throw new K(`Lint failed (HTTP ${i.status})`, i.status, a);
	return $e(a);
}
// src/theme.ts
var q = {
	light: {
		colors: {
			background: "#ffffff",
			foreground: "#1f2328",
			lineHighlight: "#f6f8fa",
			selection: "#b6d7ff",
			cursor: "#0969da",
			lineNumber: "#8c959f",
			lineNumberActive: "#1f2328",
			widgetBackground: "#ffffff",
			widgetBorder: "#d0d7de",
			border: "#d0d7de",
			accent: "#0969da",
			danger: "#cf222e",
			success: "#1a7f37"
		},
		tokens: {
			keyword: "#cf222e",
			function: "#8250df",
			variable: "#0550ae",
			identifier: "#1f2328",
			string: "#0a3069",
			stringEscape: "#116329",
			number: "#0550ae",
			comment: "#6e7781",
			operator: "#953800",
			delimiter: "#57606a"
		}
	},
	dark: {
		colors: {
			background: "#0d1117",
			foreground: "#e6edf3",
			lineHighlight: "#161b22",
			selection: "#264f78",
			cursor: "#58a6ff",
			lineNumber: "#6e7681",
			lineNumberActive: "#e6edf3",
			widgetBackground: "#161b22",
			widgetBorder: "#30363d",
			border: "#30363d",
			accent: "#58a6ff",
			danger: "#f85149",
			success: "#3fb950"
		},
		tokens: {
			keyword: "#ff7b72",
			function: "#d2a8ff",
			variable: "#79c0ff",
			identifier: "#e6edf3",
			string: "#a5d6ff",
			stringEscape: "#7ee787",
			number: "#79c0ff",
			comment: "#8b949e",
			operator: "#ffa657",
			delimiter: "#8b949e"
		}
	}
}, it = (e) => e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`), at = (e, t) => e === "colors" ? `--php-script-editor-${it(t)}` : `--php-script-editor-token-${it(t)}`;
function ot(e) {
	let t = {}, n = {};
	for (let n of Object.keys(q.light.colors)) {
		let r = e(at("colors", n)).trim();
		r && (t[n] = r);
	}
	for (let t of Object.keys(q.light.tokens)) {
		let r = e(at("tokens", t)).trim();
		r && (n[t] = r);
	}
	return {
		colors: t,
		tokens: n
	};
}
function st(e, t = {}, n = {}) {
	let r = n.base ?? e, i = q[r];
	return {
		base: r,
		colors: {
			...i.colors,
			...t.colors,
			...n.colors
		},
		tokens: {
			...i.tokens,
			...t.tokens,
			...n.tokens
		},
		monaco: {
			colors: { ...n.monaco?.colors },
			rules: [...n.monaco?.rules ?? []]
		}
	};
}
var ct = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i, J;
function Y(e) {
	let t = e.trim();
	if (ct.test(t)) return t.length === 4 || t.length === 5 ? `#${[...t.slice(1)].map((e) => e + e).join("")}`.toLowerCase() : t.toLowerCase();
	let n = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)(?:[\s,/]+([\d.]+%?))?\s*\)$/i.exec(t);
	if (n) return ut(Number(n[1]), Number(n[2]), Number(n[3]), lt(n[4]));
	if (typeof document > "u") return null;
	if (J === void 0) try {
		let e = document.createElement("canvas");
		e.width = e.height = 1, J = e.getContext("2d", { willReadFrequently: !0 });
	} catch {
		J = null;
	}
	if (!J) return null;
	let r = J;
	r.clearRect(0, 0, 1, 1), r.fillStyle = "#000", r.fillStyle = t;
	let i = r.fillStyle;
	if (r.fillStyle = "#fff", r.fillStyle = t, i !== r.fillStyle) return null;
	r.fillRect(0, 0, 1, 1);
	let a = r.getImageData(0, 0, 1, 1).data;
	return ut(a[0] ?? 0, a[1] ?? 0, a[2] ?? 0, (a[3] ?? 255) / 255);
}
function lt(e) {
	return e === void 0 ? 1 : e.endsWith("%") ? Number(e.slice(0, -1)) / 100 : Number(e);
}
function ut(e, t, n, r = 1) {
	let i = (e) => Math.round(Math.min(255, Math.max(0, e))).toString(16).padStart(2, "0");
	return `#${i(e)}${i(t)}${i(n)}${r < 1 ? i(r * 255) : ""}`;
}
var dt = (e) => (Y(e) ?? "").replace("#", "").slice(0, 6);
function ft(e) {
	let { colors: t, tokens: n } = e, r = (e, t, n) => {
		let r = dt(t);
		return r ? [{
			token: e,
			foreground: r,
			...n ? { fontStyle: n } : {}
		}] : [];
	}, i = {
		"editor.background": t.background,
		"editor.foreground": t.foreground,
		"editor.lineHighlightBackground": t.lineHighlight,
		"editor.lineHighlightBorder": t.lineHighlight,
		"editor.selectionBackground": t.selection,
		"editorCursor.foreground": t.cursor,
		"editorLineNumber.foreground": t.lineNumber,
		"editorLineNumber.activeForeground": t.lineNumberActive,
		"editorGutter.background": t.background,
		"editorWidget.background": t.widgetBackground,
		"editorWidget.border": t.widgetBorder,
		"editorSuggestWidget.background": t.widgetBackground,
		"editorSuggestWidget.border": t.widgetBorder,
		"editorSuggestWidget.selectedBackground": t.selection,
		"editorHoverWidget.background": t.widgetBackground,
		"editorHoverWidget.border": t.widgetBorder,
		focusBorder: t.accent,
		"editorError.foreground": t.danger,
		...e.monaco.colors
	}, a = {};
	for (let [e, t] of Object.entries(i)) {
		let n = Y(t);
		n && (a[e] = n);
	}
	return {
		base: e.base === "dark" ? "vs-dark" : "vs",
		inherit: !0,
		rules: [
			...r("", n.identifier),
			...r("keyword", n.keyword, "bold"),
			...r("predefined", n.function),
			...r("variable.predefined", n.variable),
			...r("identifier", n.identifier),
			...r("string", n.string),
			...r("string.quote", n.string),
			...r("string.escape", n.stringEscape),
			...r("number", n.number),
			...r("comment", n.comment, "italic"),
			...r("operator", n.operator),
			...r("delimiter", n.delimiter),
			...e.monaco.rules ?? []
		],
		colors: a
	};
}
function pt(e = globalThis.document?.documentElement ?? null) {
	if (e) {
		let t = e.getAttribute("data-theme") ?? e.getAttribute("data-bs-theme") ?? e.getAttribute("data-mode");
		if (t === "dark" || t === "light") return t;
		if (e.classList.contains("dark")) return "dark";
		if (e.classList.contains("light")) return "light";
	}
	return globalThis.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function mt(e) {
	let t = globalThis.document?.documentElement, n = t && typeof MutationObserver < "u" ? new MutationObserver(() => e()) : null;
	n?.observe(t, {
		attributes: !0,
		attributeFilter: [
			"class",
			"data-theme",
			"data-bs-theme",
			"data-mode"
		]
	});
	let r = globalThis.matchMedia?.("(prefers-color-scheme: dark)");
	return r?.addEventListener?.("change", e), () => {
		n?.disconnect(), r?.removeEventListener?.("change", e);
	};
}
function ht(e) {
	let t = (e ?? "").trim();
	if (t === "light" || t === "dark" || t === "auto") return t;
	if (t.startsWith("{")) try {
		return JSON.parse(t);
	} catch {
		return "auto";
	}
	return "auto";
}
// src/php-script-editor.ts
var X = "php-script-editor", gt = {
	save: "Save",
	saving: "Saving…",
	saved: "Saved",
	dirty: "Unsaved changes",
	error: "Save failed"
}, Z = {
	fromAttribute(e) {
		if (e === null || e === "") return null;
		try {
			return JSON.parse(e);
		} catch {
			return e;
		}
	},
	toAttribute: (e) => e == null ? null : JSON.stringify(e)
}, _t = "php-script-editor-styles", vt = `
${X}{display:block;position:relative;box-sizing:border-box;height:var(--php-script-editor-height,20rem);min-height:6rem;border:1px solid var(--pse-border);border-radius:var(--php-script-editor-radius,.5rem);overflow:hidden;background:var(--pse-background);color:var(--pse-foreground);font-family:var(--php-script-editor-ui-font,system-ui,sans-serif)}
${X}:focus-within{outline:2px solid var(--php-script-editor-focus-ring,transparent);outline-offset:1px}
${X} .pse-root{display:flex;flex-direction:column;height:100%}
/* Monaco themes are page-global; background and gutter follow each element's own colors. */
${X} .monaco-editor,${X} .monaco-editor .margin,${X} .monaco-editor-background{background-color:var(--pse-background)}
${X} .pse-editor{flex:1 1 auto;min-height:0}
${X} .pse-toolbar{display:flex;align-items:center;gap:.5rem;padding:.375rem .5rem;border-top:1px solid var(--pse-border);font-size:12px;line-height:1.4}
${X} .pse-status{margin-right:auto;opacity:.75}
${X} .pse-status[data-status=error]{color:var(--pse-danger);opacity:1}
${X} .pse-status[data-status=saved]{color:var(--pse-success);opacity:1}
${X} .pse-save{appearance:none;border:1px solid var(--pse-accent);background:var(--pse-accent);color:var(--php-script-editor-accent-contrast,#fff);border-radius:var(--php-script-editor-button-radius,.375rem);padding:.25rem .75rem;font:inherit;font-weight:600;cursor:pointer}
${X} .pse-save:disabled{opacity:.5;cursor:default}
${X} .pse-save:focus-visible{outline:2px solid var(--pse-accent);outline-offset:2px}
`;
function yt() {
	if (typeof document > "u" || document.getElementById(_t)) return;
	let e = document.createElement("style");
	e.id = _t, e.textContent = vt, document.head.prepend(e);
}
var bt = /* @__PURE__ */ new Set(), Q = null, $ = class extends j {
	static formAssociated = !0;
	static properties = {
		value: { type: String },
		config: { converter: Z },
		configUrl: {
			type: String,
			attribute: "config-url"
		},
		saveUrl: {
			type: String,
			attribute: "save-url"
		},
		saveMethod: {
			type: String,
			attribute: "save-method"
		},
		saveField: {
			type: String,
			attribute: "save-field"
		},
		saveHeaders: {
			converter: Z,
			attribute: "save-headers"
		},
		savePayload: {
			converter: Z,
			attribute: "save-payload"
		},
		persisted: { type: Boolean },
		csrfToken: {
			type: String,
			attribute: "csrf-token"
		},
		lintUrl: {
			type: String,
			attribute: "lint-url"
		},
		lintDelay: {
			type: Number,
			attribute: "lint-delay"
		},
		theme: { converter: {
			fromAttribute: ht,
			toAttribute: () => null
		} },
		readonly: {
			type: Boolean,
			reflect: !0
		},
		name: {
			type: String,
			reflect: !0
		},
		options: { converter: Z },
		labels: { converter: Z },
		noToolbar: {
			type: Boolean,
			attribute: "no-toolbar"
		},
		noSaveShortcut: {
			type: Boolean,
			attribute: "no-save-shortcut"
		},
		status: {
			type: String,
			reflect: !0
		},
		_message: { state: !0 }
	};
	#e = null;
	#t = null;
	#n = P;
	#r = null;
	#i = null;
	#a = "";
	#o = "";
	#s = !1;
	#c = null;
	#l;
	#u = null;
	#d = null;
	#f;
	#p = new Promise((e) => this.#f = e);
	#m = null;
	#h = null;
	#g = !1;
	constructor() {
		super(), this.value = "", this.config = null, this.configUrl = null, this.saveUrl = null, this.saveMethod = null, this.saveField = "content", this.saveHeaders = null, this.savePayload = null, this.persisted = void 0, this.csrfToken = null, this.lintUrl = null, this.lintDelay = 400, this.theme = "auto", this.readonly = !1, this.name = null, this.options = null, this.labels = null, this.noToolbar = !1, this.noSaveShortcut = !1, this.status = "idle", this._message = "";
		try {
			this.#m = this.attachInternals();
		} catch {
			this.#m = null;
		}
	}
	get monaco() {
		return Q;
	}
	get editor() {
		return this.#e;
	}
	get resolvedConfig() {
		return this.#n;
	}
	whenReady() {
		return this.#p;
	}
	get dirty() {
		return this.value !== this.#a;
	}
	createRenderRoot() {
		return this;
	}
	connectedCallback() {
		this.#i === null && this.#_(), yt(), super.connectedCallback(), this.#c = mt(() => this.refreshTheme()), this.hasUpdated && !this.#e && this.#y();
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.#c?.(), this.#c = null, clearTimeout(this.#l), this.#u?.abort(), this.#e?.dispose(), this.#t?.dispose(), this.#e = null, this.#t = null, this.#d = null, this.#p = new Promise((e) => this.#f = e);
	}
	#_() {
		let e = this.querySelector(":scope > script[type=\"text/php-script\"], :scope > template");
		if (e) {
			let t = e instanceof HTMLTemplateElement ? e.content.textContent ?? "" : e.textContent ?? "";
			this.value ||= Je(t), e.remove();
		}
		this.#i = this.value ?? "", this.#a = this.#i, this.#m?.setFormValue(this.#i);
	}
	render() {
		let e = {
			...gt,
			...this.labels
		}, t = !!this.saveUrl && !this.noToolbar, n = this.status === "error" ? this._message || e.error : this.status === "saving" ? e.saving : this.status === "saved" ? e.saved : this.status === "dirty" ? e.dirty : "";
		return xe`<div class="pse-root">
      <div class="pse-editor"></div>
      ${t ? xe`<div class="pse-toolbar">
              <span class="pse-status" data-status=${this.status} role="status" aria-live="polite"
                >${n}</span
              >
              <button
                type="button"
                class="pse-save"
                ?disabled=${this.status === "saving" || this.readonly}
                @click=${() => void this.save().catch(() => void 0)}
              >
                ${e.save}
              </button>
            </div>` : w}
    </div>`;
	}
	firstUpdated() {
		this.#y();
	}
	updated(e) {
		this.#e && this.#t && (e.has("value") && !this.#s && this.value !== this.#t.getValue() && (this.#s = !0, this.#t.pushEditOperations([], [{
			range: this.#t.getFullModelRange(),
			text: this.value ?? ""
		}], () => null), this.#s = !1), (e.has("readonly") || e.has("options")) && this.#e.updateOptions({
			...this.options,
			readOnly: this.readonly || this.#g
		}), e.has("theme") && this.refreshTheme(), (e.has("config") || e.has("configUrl") && !this.config) && this.reloadConfig());
	}
	async #v() {
		try {
			if (this.config) return R(this.config);
			if (this.configUrl) {
				let e = await fetch(this.configUrl, {
					headers: { Accept: "application/json" },
					credentials: "same-origin"
				});
				if (!e.ok) throw new F(`Loading config failed (HTTP ${e.status})`);
				return this.#r = this.configUrl, R(await e.json());
			}
		} catch (e) {
			this.#C("ps-config-error", { error: e }), console.error("[php-script-editor]", e);
		}
		return P;
	}
	#y() {
		return this.#d ??= (async () => {
			let [e, t] = await Promise.all([this.#v(), qe()]);
			Q = t;
			let n = t;
			this.#n = e;
			let r = this.querySelector(".pse-editor");
			if (!this.isConnected || !r || this.#e) return;
			let i = G(n, this.#n);
			this.#t = n.editor.createModel(this.value ?? "", i), this.#x(), this.#e = n.editor.create(r, {
				model: this.#t,
				automaticLayout: !0,
				minimap: { enabled: !1 },
				scrollBeyondLastLine: !1,
				fixedOverflowWidgets: !0,
				roundedSelection: !0,
				snippetSuggestions: "inline",
				tabSize: 4,
				fontSize: 14,
				padding: {
					top: 8,
					bottom: 8
				},
				...this.options,
				readOnly: this.readonly || this.#g
			}), this.#e.onDidChangeModelContent(() => this.#b()), this.#e.onDidFocusEditorText(() => this.#o = this.value), this.#e.onDidBlurEditorText(() => {
				this.value !== this.#o && this.dispatchEvent(new Event("change", { bubbles: !0 }));
			}), this.#e.addAction({
				id: "php-script.save",
				label: "Save script",
				keybindings: [n.KeyMod.CtrlCmd | n.KeyCode.KeyS],
				precondition: void 0,
				run: () => {
					!this.noSaveShortcut && this.saveUrl && this.save().catch(() => void 0);
				}
			}), this.#f(this.#e), this.#C("ps-ready", {
				editor: this.#e,
				monaco: n
			}), this.lintUrl && this.value && this.#S();
		})(), this.#d;
	}
	#b() {
		if (!this.#t) return;
		let e = this.#t.getValue(), t = this.#s;
		this.value = e, this.#m?.setFormValue(e), this.status !== "saving" && (this.status = this.dirty ? "dirty" : this.status === "dirty" ? "idle" : this.status), t || (this.dispatchEvent(new Event("input", { bubbles: !0 })), this.#C("ps-change", { value: e }), this.#S());
	}
	async reloadConfig() {
		this.#t && (!this.config && this.configUrl === this.#r && this.#r && (this.#r = null), this.#n = await this.#v(), this.#t && Q && Q.editor.setModelLanguage(this.#t, G(Q, this.#n)));
	}
	refreshTheme() {
		this.#x();
	}
	#x() {
		let e = Q;
		if (!e) return;
		let t = typeof this.theme == "string" ? ht(this.theme) : this.theme, n = typeof t == "string" ? t : "auto", r = typeof t == "object" && t ? t : {}, i = n === "auto" ? pt() : n, a = getComputedStyle(this), o = st(i, ot((e) => a.getPropertyValue(e)), r), s = ft(o), c = `php-script-${z(JSON.stringify(s))}`;
		bt.has(c) || (e.editor.defineTheme(c, s), bt.add(c)), e.editor.setTheme(c), this.#h = o;
		for (let e of [
			"background",
			"foreground",
			"border",
			"accent",
			"danger",
			"success"
		]) this.style.setProperty(`--pse-${e}`, o.colors[e]);
		this.dataset.themeBase = o.base;
	}
	get currentTheme() {
		return this.#h;
	}
	async save() {
		if (!this.saveUrl) throw new K("No save-url set", 0, null);
		let e = this.value, t = this.persisted ?? this.#i !== "", n = Ze({
			url: this.saveUrl,
			method: this.saveMethod,
			persisted: t,
			field: this.saveField || "content",
			content: e,
			payload: this.savePayload,
			headers: this.saveHeaders,
			csrfToken: this.csrfToken
		});
		if (!this.#C("ps-save-start", {
			url: n.url,
			method: n.method,
			body: n.body
		}, !0)) throw new K("Save cancelled", 0, null);
		this.status = "saving", this._message = "";
		try {
			let r = await nt(n, { field: this.saveField || "content" });
			return this.#a = e, this.status = this.dirty ? "dirty" : "saved", Ye(this.saveMethod, t) === "POST" && !this.saveMethod && (this.persisted = !0, this.saveUrl = r.nextUrl), this.#C("ps-saved", {
				...r,
				value: e
			}), r;
		} catch (e) {
			let t = e instanceof K ? e : new K(e.message, 0, null);
			throw this.status = "error", this._message = t.message, t.diagnostics.length && this.setDiagnostics(t.diagnostics), this.#C("ps-save-error", {
				error: t,
				status: t.status,
				data: t.data
			}), t;
		}
	}
	setDiagnostics(e) {
		this.#t && Q && Q.editor.setModelMarkers(this.#t, Ue, Ge(Q, e)), this.#C("ps-diagnostics", { diagnostics: e });
	}
	async lint() {
		if (!this.lintUrl) return [];
		this.#u?.abort();
		let e = new AbortController();
		this.#u = e;
		try {
			let t = await rt(this.lintUrl, this.value, {
				field: this.saveField || "content",
				csrfToken: this.csrfToken,
				headers: this.saveHeaders,
				signal: e.signal
			});
			return e.signal.aborted || this.setDiagnostics(t), t;
		} catch (e) {
			return e.name !== "AbortError" && console.warn("[php-script-editor] lint failed", e), [];
		}
	}
	#S() {
		this.lintUrl && (clearTimeout(this.#l), this.#l = setTimeout(() => void this.lint(), this.lintDelay));
	}
	focus(e) {
		this.#e ? this.#e.focus() : super.focus(e);
	}
	formResetCallback() {
		this.value = this.#i ?? "";
	}
	formDisabledCallback(e) {
		this.#g = e, this.#e?.updateOptions({ readOnly: this.readonly || e });
	}
	#C(e, t, n = !1) {
		return this.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0,
			composed: !0,
			cancelable: n
		}));
	}
};
// src/props.ts
function xt(e, t, n) {
	let r = e;
	for (let [e, i] of Object.entries(t)) i === void 0 || n.has(e) && Object.is(n.get(e), i) || (n.set(e, i), r[e] = i);
}
// src/index.ts
function St(e = X) {
	typeof customElements < "u" && !customElements.get(e) && customElements.define(e, e === "php-script-editor" ? $ : class extends $ {});
}
St();
export { F as ConfigError, N as DEFAULT_COMPLETIONS, P as DEFAULT_CONFIG, M as DEFAULT_DEFINITION, q as PALETTES, $ as PhpScriptEditor, K as SaveError, X as TAG_NAME, xt as applyChangedProps, Ze as buildSaveRequest, Be as buildSuggestions, Fe as configKey, at as cssVarName, Je as dedent, St as defineElement, pt as detectPageBase, G as ensureLanguage, $e as extractDiagnostics, Xe as findCsrfToken, Re as findLocalVariables, z as hashString, Ve as hoverFor, Le as isInsideLoop, qe as loadMonaco, B as maskStringsAndComments, V as memberChainBefore, R as normalizeConfig, ht as parseThemeAttribute, ot as readCssOverrides, rt as requestLint, U as resolveChain, Ye as resolveSaveMethod, st as resolveTheme, ze as returnTypeOf, nt as sendSave, Y as toHexColor, Ge as toMarkers, ft as toMonacoTheme, mt as watchPageBase };

//# sourceMappingURL=php-script-editor.js.map