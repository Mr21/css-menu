window.onload = function() {

	window.plugin_menu(
		document.querySelector(".css-menu"),
		[
			{
				text: "File",
				submenu: [
					{
						text: "New...",
						shortcut: "Ctrl+N",
						f: function(e) {
							console.log(this);
							console.log(e);
						}
					}, {
						text: "Open...",
						shortcut: "Ctrl+O"
					}, {}, {
						text: "Close",
						shortcut: "Ctrl+W"
					}, {
						text: "Close all",
						shortcut: "Alt+Ctrl+W"
					}, {
						text: "Enregistrer",
						shortcut: "Ctrl+S",
						class: "disable"
					}, {
						text: "Enregistrer sous...",
						shortcut: "Shift+Ctrl+S",
						class: "disable"
					}, {
						text: "Export to",
						submenu: [
							{
								text: "JPEG"
							}, {
								text: "PNG",
								f: function() {
									console.log("PNG");
								}
							}, {
								text: "BMP"
							}
						]
					}, {}, {
						text: "Quit",
						shortcut: "Ctrl+Q",
						f: function() {
							console.log("Quit");
							console.log(this);
						}
					}
				]
			}, {
				text: "Image",
				submenu: [
					{
						text: "Mode",
						submenu: [
							{
								text: "Bitmap"
							}, {
								text: "Grayscale"
							}, {
								text: "Bichromy"
							}, {
								text: "RGB color"
							}, {
								text: "CMYK color"
							}, {}, {
								text: "8 bits / layer"
							}, {
								text: "16 bits / layer"
							}, {
								text: "32 bits / layer"
							}
						]
					}, {}, {
						text: "Adjustment",
						submenu: [
							{
								text: "Brightness/Contrast..."
							}, {
								text: "Exposition..."
							}, {
								text: "Colors balance...",
								shortcut: "Ctrl+B"
							}, {
								text: "Black and white...",
								shortcut: "Alt+Shift+Ctrl+B"
							}, {
								text: "Photo filter..."
							}, {
								text: "Negative",
								shortcut: "Ctrl+I"
							}
						]
					}, {}, {
						text: "Auto Tone",
						shortcut: "Shift+Ctrl+L"
					}, {
						text: "Auto contrast",
						shortcut: "Alt+Shift+Ctrl+L"
					}, {
						text: "Auto color",
						shortcut: "Shift+Ctrl+B"
					}, {}, {
						text: "Image's size...",
						shortcut: "Alt+Ctrl+I"
					}, {
						text: "Workzone's size...",
						shortcut: "Alt+Ctrl+C"
					}
				]
			}, {
				text: "Help",
				submenu: [
					{
						text: "About css-menu"
					}
				]
			}
		]
	);

};
