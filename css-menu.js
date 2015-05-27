/*
	CSS - menu - 1.0
	https://github.com/Mr21/css-menu
*/

(function() {

window.plugin_menu = function(el, menu) {

	el = el[0] || el;
	menu = menu || {};

	var
		that = this,
		callbacks = [],
		links,
		i = 0, a
	;

	function html(menu) {
		var m, s = '<ul>';
		for (var a in menu) {
			m = menu[a];
			s +=
				'<li>'+
					(!m.text ? '<hr/>' :
					(m.submenu ? html(m.submenu) : '')+
					'<a href="#" data-menu-id="'+ i +'" class="'+ (m.class || '') +'">'+
						'<span class="title">'+ m.text +'</span>'+
						'<span class="shortcut">'+ (m.shortcut || '') +'</span>'+
					'</a>'
					)+
				'</li>';
			callbacks[i++] = m.f;
		}
		return s + '</ul>';
	}

	if (el.className.indexOf("css-menu") === -1)
		el.className += " css-menu";
	el.innerHTML = html(menu);

	links = el.getElementsByTagName("a");
	for (i = 0, a; a = links[i]; ++i) {
		a.onclick = function(e) {
			var cb = callbacks[this.dataset.menuId];
			if (cb && this.className.indexOf("disable") === -1)
				cb.call(this, e);
			return false;
		};
	}

};

})();
