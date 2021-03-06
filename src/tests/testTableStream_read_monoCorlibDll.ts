/// <reference path="../pe.ts" />

declare var monoCorlib: ArrayBuffer;

module test_TableStream_read_monoCorlibDll {

	export function read_succeeds() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);
	}

	export function modules_length_1() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		if (tas.tables[pe.managed.TableKind.ModuleDefinition].length !== 1)
			throw tas.tables[pe.managed.TableKind.ModuleDefinition].length;
	}

	export function modules_0_name_mscorlibDll() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		var _module = tas.tables[pe.managed.TableKind.ModuleDefinition][0];

		if (_module.name !== "mscorlib.dll")
			throw _module.name;
	}

	export function modules_0_generation_0() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		var _module = tas.tables[pe.managed.TableKind.ModuleDefinition][0];

		if (_module.generation !== 0)
			throw _module.generation;
	}

	export function modules_0_mvid_5f771c4d459bd228469487b532184ce5() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		var _module = tas.tables[pe.managed.TableKind.ModuleDefinition][0];

		if (_module.mvid !== "{5f771c4d459bd228469487b532184ce5}")
			throw _module.mvid;
	}

	export function modules_0_encId_null() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		var _module = tas.tables[pe.managed.TableKind.ModuleDefinition][0];

		if (_module.encId !== null)
			throw _module.encId;
	}

	export function modules_0_encBaseId_null() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		var _module = tas.tables[pe.managed.TableKind.ModuleDefinition][0];

		if (_module.encBaseId !== null)
			throw _module.encBaseId;
	}

	export function typeRefs_undefined() {
		var bi = new pe.io.BufferReader(monoCorlib);
		var pef = new pe.headers.PEFileHeaders();
		pef.read(bi);
		bi.sections = pef.sectionHeaders;
		bi.setVirtualOffset(pef.optionalHeader.dataDirectories[pe.headers.DataDirectoryKind.Clr].address);

		var cdi = new pe.managed.ClrDirectory();
		cdi.read(bi);

		bi.setVirtualOffset(cdi.metadataDir.address);
		var cme = new pe.managed.ClrMetadata();
		cme.read(bi);

		var mes = new pe.managed.MetadataStreams();
		mes.read(cdi.metadataDir.address, cme.streamCount, bi);

		bi.setVirtualOffset(mes.tables.address);
		var tas = new pe.managed.TableStream();
		tas.read(bi, mes);

		var typeRefs = tas.tables[pe.managed.TableKind.ExternalType];

		if (typeof(typeRefs) !== "undefined")
			throw typeof(typeRefs) + " " + typeRefs;
	}
}