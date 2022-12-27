export const mblock_size = 0x100000;
export const mblock_size_log2 = 0x14;
export const block_size = 0x1000;
export const blocks_per_mblock = 0xfc;
export const offset_timespec_tv_sec = 0x0;
export const offset_timespec_tv_nsec = 0x8;
export const sizeof_bdescr = 0x40;
export const offset_first_bdescr = 0x100;
export const offset_first_block = 0x4000;
export const sizeof_first_mblock = 0xfc000;
export const offset_bdescr_start = 0x0;
export const offset_bdescr_free = 0x8;
export const offset_bdescr_link = 0x10;
export const offset_bdescr_gen_no = 0x28;
export const offset_bdescr_node = 0x2c;
export const offset_bdescr_flags = 0x2e;
export const offset_bdescr_blocks = 0x30;
export const BF_PINNED = 0x4;
export const pageSize = 65536;
export const offset_Capability_r = 0x18;
export const sizeof_StgAP = 0x20;
export const offset_StgAP_arity = 0x10;
export const offset_StgAP_n_args = 0x14;
export const offset_StgAP_fun = 0x18;
export const offset_StgAP_payload = 0x20;
export const sizeof_StgAP_STACK = 0x20;
export const offset_StgAP_STACK_size = 0x10;
export const offset_StgAP_STACK_fun = 0x18;
export const offset_StgAP_STACK_payload = 0x20;
export const sizeof_StgArrBytes = 0x10;
export const offset_StgArrBytes_bytes = 0x8;
export const offset_StgFunInfoExtraFwd_fun_type = 0x0;
export const offset_StgFunInfoExtraFwd_srt = 0x8;
export const offset_StgFunInfoExtraFwd_b = 0x10;
export const offset_StgFunInfoTable_i = 0x0;
export const offset_StgFunInfoTable_f = 0x18;
export const sizeof_StgInd = 0x10;
export const offset_StgInd_indirectee = 0x8;
export const sizeof_StgIndStatic = 0x20;
export const offset_StgIndStatic_indirectee = 0x8;
export const offset_StgInfoTable_layout = 0x8;
export const offset_StgInfoTable_type = 0x10;
export const offset_StgInfoTable_srt = 0x14;
export const offset_StgLargeBitmap_size = 0x0;
export const offset_StgLargeBitmap_bitmap = 0x8;
export const sizeof_StgMutArrPtrs = 0x18;
export const offset_StgMutArrPtrs_ptrs = 0x8;
export const offset_StgMutArrPtrs_payload = 0x18;
export const offset_StgMVar_head = 0x8;
export const offset_StgMVar_tail = 0x10;
export const offset_StgMVar_value = 0x18;
export const sizeof_StgPAP = 0x18;
export const offset_StgPAP_arity = 0x8;
export const offset_StgPAP_n_args = 0xc;
export const offset_StgPAP_fun = 0x10;
export const offset_StgPAP_payload = 0x18;
export const offset_StgRegTable_rR1 = 0x0;
export const offset_StgRegTable_rF1 = 0x50;
export const offset_StgRegTable_rD1 = 0x68;
export const offset_StgRegTable_rCurrentNursery = 0x378;
export const offset_StgRegTable_rHpAlloc = 0x388;
export const offset_StgRegTable_rRet = 0x390;
export const sizeof_StgRetFun = 0x18;
export const offset_StgRetFun_size = 0x8;
export const offset_StgRetFun_fun = 0x10;
export const offset_StgRetFun_payload = 0x18;
export const offset_StgRetInfoTable_i = 0x0;
export const offset_StgRetInfoTable_srt = 0x18;
export const sizeof_StgSelector = 0x18;
export const offset_StgSelector_selectee = 0x10;
export const sizeof_StgSmallMutArrPtrs = 0x10;
export const offset_StgSmallMutArrPtrs_ptrs = 0x8;
export const offset_StgSmallMutArrPtrs_payload = 0x10;
export const sizeof_StgThunk = 0x10;
export const offset_StgThunk_payload = 0x10;
export const offset_StgThunkInfoTable_i = 0x0;
export const offset_StgThunkInfoTable_srt = 0x18;
export const offset_StgTSO_id = 0x30;
export const offset_StgTSO_stackobj = 0x18;
export const offset_StgTSO_what_next = 0x20;
export const offset_StgTSO_why_blocked = 0x22;
export const offset_StgTSO_block_info = 0x28;
export const offset_StgStack_stack_size = 0x8;
export const offset_StgStack_sp = 0x10;
export const offset_StgStack_stack = 0x18;
export const offset_StgUpdateFrame_updatee = 0x8;
export const offset_StgWeak_cfinalizers = 0x8;
export const offset_StgWeak_key = 0x10;
export const offset_StgWeak_value = 0x18;
export const offset_StgWeak_finalizer = 0x20;
export const offset_StgWeak_link = 0x28;
export const sizeof_StgStableName = 0x10;
export const offset_StgStableName_header = 0x0;
export const offset_StgStableName_sn = 0x8;
export const offset_stat_mtime = 0x58;
export const offset_stat_size = 0x30;
export const offset_stat_mode = 0x18;
export const offset_stat_dev = 0x0;
export const offset_stat_ino = 0x8;
export const clock_monotonic = 0x1;
export const clock_realtime = 0x0;
export const hsTyCons = [
	'JSVal',
	'Bool',
	'Char',
	'Double',
	'Float',
	'Int',
	'Int8',
	'Int16',
	'Int32',
	'Int64',
	'Word',
	'Word8',
	'Word16',
	'Word32',
	'Word64',
	'StablePtr',
	'Ptr',
	'FunPtr'
];
