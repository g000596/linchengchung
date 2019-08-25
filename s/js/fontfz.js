var rootFz = function () {
	var maxwidth = 2400,
		remoffset = maxwidth / 100,
		doc = document,
		docEl = doc.documentElement,
		ratio;

	function resize() {
		var width = docEl.getBoundingClientRect().width,
			size;

		if ( width > maxwidth ) {
			docEl.style.fontSize ='100px';
			return;
		}

		size = width / remoffset * ratio;
		docEl.style.fontSize = size + 'px';
	}

	function getRatio() {
		var body = doc.body,
			ele = doc.createElement( 'div' ),
			fz = 1200,
			res;
		ele.style.cssText = 'font-size:' + fz + 'px;display: none';
		body.appendChild( ele );
		res = fz / parseInt( window.getComputedStyle( ele ).getPropertyValue( 'font-size' ) );
		body.removeChild(ele);
		return res;
	}

	function init() {
		ratio = getRatio();
		resize();
		window.addEventListener( 'resize', resize );
	}

	return {
		init: init
	};
} ();

rootFz.init();