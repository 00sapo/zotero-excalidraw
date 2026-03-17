if (!Zotero.ZoteroExcalidraw) Zotero.ZoteroExcalidraw = {};
if (!Zotero.ZoteroExcalidraw.Events) Zotero.ZoteroExcalidraw.Events = {};

Zotero.ZoteroExcalidraw.Events = Object.assign(Zotero.ZoteroExcalidraw.Events, {
	itemsViewOnSelect: null,
	noteEditorKeyup: null,

	init() {
		// 注册事件
		Zotero.ZoteroExcalidraw.Logger.log('Zotero.ZoteroExcalidraw.Events inited.');
	},

	register({itemsViewOnSelect, noteEditorKeyup}) {
		this.itemsViewOnSelect = itemsViewOnSelect;
		this.noteEditorKeyup = noteEditorKeyup;

		Zotero.getMainWindow().document.getElementById('zotero-items-tree').addEventListener('select', this.itemsViewOnSelect.bind(this), false);
		Zotero.ZoteroExcalidraw.Logger.log('itemsViewOnSelect registered.');
		Zotero.getMainWindow().document.getElementById('zotero-note-editor').addEventListener('keyup', this.noteEditorKeyup, false);
		Zotero.ZoteroExcalidraw.Logger.log('noteEditorKeyup registered.');

		Zotero.ZoteroExcalidraw.Logger.log('Zotero.ZoteroExcalidraw.Events registered.');
	},

	shutdown() {
		if (this.itemsViewOnSelect) {
			Zotero.getMainWindow().ZoteroPane.itemsView.onSelect.removeListener(this.itemsViewOnSelect);
			Zotero.ZoteroExcalidraw.Logger.log('itemsViewOnSelect removed.');
		}
		if (this.noteEditorKeyup) {
			Zotero.getMainWindow().document.getElementById('zotero-note-editor').removeEventListener('keyup', this.noteEditorKeyup, false);
			Zotero.ZoteroExcalidraw.Logger.log('noteEditorKeyup removed.');
		}
	}
});