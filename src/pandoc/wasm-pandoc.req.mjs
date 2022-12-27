import targetSpecificModule from './default.mjs';
export default {
	progName: 'wasm-pandoc',
	jsffiFactory: (__asterius_jsffi) => ({
		jsffi: {
			__asterius_jsffi_asteriuszmpreludezuAsteriusziUTF8_a4hj: ($1, $2, $3) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return new TextEncoder().encodeInto($1, __asterius_jsffi.exposeMemory($2, $3)).written;
			},
			__asterius_jsffi_asteriuszmpreludezuAsteriusziUTF8_a4hp: ($1) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return __asterius_jsffi.newJSValzh($1.result);
			},
			__asterius_jsffi_asteriuszmpreludezuAsteriusziUTF8_a4LW: ($1, $2, $3) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return ($1.result += $1.decode(__asterius_jsffi.exposeMemory($2, $3), { stream: true }));
			},
			__asterius_jsffi_asteriuszmpreludezuAsteriusziUTF8_a4M3: () => {
				return __asterius_jsffi.newJSValzh(
					(() => {
						const dec = new TextDecoder('utf-8', { fatal: true });
						dec.result = '';
						return dec;
					})()
				);
			},
			__asterius_jsffi_asteriuszmpreludezuAsteriusziUTF8_a4Ma: () => {
				return __asterius_jsffi.newJSValzh('');
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSException_a8Zfo: ($1) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return __asterius_jsffi.newJSValzh($1.stack ? $1.stack : `${$1}`);
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSString_a8VRX: ($1) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return __asterius_jsffi.newJSValzh($1[0]);
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSString_a8VS6: ($1, $2) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return ($1[0] += String.fromCodePoint($2));
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSString_a8VSb: () => {
				return __asterius_jsffi.newJSValzh(['']);
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSString_a8VSi: ($1) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return (() => {
					const r = $1.next();
					return r.done ? 0 : 1 + r.value.codePointAt(0);
				})();
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSString_a8VSq: ($1) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return __asterius_jsffi.newJSValzh($1[Symbol.iterator]());
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSString_a8VSD: ($1) => {
				$1 = __asterius_jsffi.getJSValzh($1);
				return $1.length;
			},
			__asterius_jsffi_basezuAsteriusziTypesziJSVal_a8U2a: ($1) => {
				return __asterius_jsffi.freeJSValzh($1);
			}
		}
	}),
	exportsStaticOffsets: [
		['convert', 0x00c371c8, 0x0000000000000421, 0x0000000000000001, false],
		['main', 0x00c36d88, 0x0000000000000000, 0x0000000000000000, true]
	],
	functionsOffsetTable: Object.freeze({}),
	staticsOffsetTable: Object.freeze({
		MainCapability: 0x40,
		base_AsteriusziTypesziJSException_mkJSException_closure: 0xc2da10,
		stg_IND_info: 0xc35c18,
		stg_WHITEHOLE_info: 0xc35af8,
		stg_raise_ret_info: 0xc359c8,
		base_AsteriusziTopHandler_runIO_closure: 0xc27b70,
		base_AsteriusziTopHandler_runNonIO_closure: 0xc27bd0,
		stg_JSVAL_info: 0xc30f50,
		stg_raise_info: 0xc359e0,
		stg_STABLE_NAME_info: 0xc36598
	}),
	sptOffsetEntries: new Map([]),
	tableSlots: 178136,
	staticBytes: 12808672,
	yolo: false,
	pic: false,
	defaultTableBase: 0x400,
	defaultMemoryBase: 0x400,
	consoleHistory: false,
	gcThreshold: 0x280,
	targetSpecificModule: targetSpecificModule
};
