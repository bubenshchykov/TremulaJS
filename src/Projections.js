			
define([],function(){


	var exports = {};

	//===== bezier curve definitions ========

	var waterFallCurve = [
		{x:0,y:0},
		{x:.1,y:.5},
		{x:0,y:.01},
		{x:1,y:0}
	];

	var sunriseCurve = [
		{x:0,y:0},
		{x:.05,y:.5},
		{x:.5,y:.7},
		{x:1,y:0}
	];

	var sunsetCurve = [
		{x:0,y:0},
		{x:.5,y:.05},
		{x:.1,y:0},
		{x:1,y:0}
	];


	//====== curve helper =======

	function factorCurveBy(cubic,xy){
		var result = [
			{x:cubic[0].x*xy[0],y:cubic[0].y*xy[1]},
			{x:cubic[1].x*xy[0],y:cubic[1].y*xy[1]},
			{x:cubic[2].x*xy[0],y:cubic[2].y*xy[1]},
			{x:cubic[3].x*xy[0],y:cubic[3].y*xy[1]}
		]
		return result;
	}


	//===== bezier projections ========

	function bezier_1(x,y){

		var curve = sunsetCurve;


		//var xoffset = box.width / 2;
		//var yoffset = box.height / 2;
		var 
		tRamp = this.waves.tailRamp,
		hRamp = this.waves.headRamp,
		tri = this.waves.triangle,
			//s = 1,
			r,
			xo,//xo=x,//-xoffset, 
			yo;//yo=y;//-yoffset;

			var xyFactor = [
				Math.max(500,this.parent.gridDims[0]),
				Math.max(1000,this.parent.gridDims[1])
			];
			

			var cubicBezier = factorCurveBy(curve,xyFactor);
			
			
			
			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);
		//u.log(p);
		xo = p.x;
		// yo = p.y+y;
		yo = 450-p.y;


		//this.e.style.webkitTransform = 'translate3d(' + xo + 'px,' + yo +'px, 0)';
		//this.e.style.left = xo + 'px';
		//this.e.style.top = yo + 'px';
		
		//yo+= this.waves.triangle*100
		//s = Math.max(this.waves.triangle*2,1)
		//xo = x;
		//xo = 500+hRamp*-500;
		//xo = 200+hRamp*-200;
		//r = 50*tRamp;
		//xo=x;
		//yo=y;
		
		
		this.e.style.webkitTransformOrigin = '50%';
		this.e.style.MozTransformOrigin = '50%';
		
		this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform = 
		'translate3d(' + xo + 'px,' + yo +'px, 0)'//
		//+' rotateZ('+g*15+'deg)';
		// +' scale('+(tri*2)+')';
		+' scale('+(tRamp*2)+')';
		
		this.e.style.opacity = tRamp;
		
		this.pPos = [x,y];
	}//bezier_1()
	exports.bezier_1 = bezier_1;







	function bezier_2(x,y){

		var curve = sunriseCurve;


		//var xoffset = box.width / 2;
		//var yoffset = box.height / 2;
		var 
		tRamp = this.waves.tailRamp,
		hRamp = this.waves.headRamp,
		tri = this.waves.triangle,
			//s = 1,
			r,
			xo,//xo=x,//-xoffset, 
			yo;//yo=y;//-yoffset;

			var xyFactor = [
				Math.max(500,this.parent.gridDims[0]),
				Math.max(1000,this.parent.gridDims[1])
			];
			

			var cubicBezier = factorCurveBy(curve,xyFactor);
			
			
			
			var p = jsBezier.pointOnCurve(cubicBezier, hRamp);
			var g = jsBezier.gradientAtPoint(cubicBezier, hRamp);
		//u.log(p);
		xo = p.x;
		// yo = p.y+y;
		yo = 450-p.y;


		//this.e.style.webkitTransform = 'translate3d(' + xo + 'px,' + yo +'px, 0)';
		//this.e.style.left = xo + 'px';
		//this.e.style.top = yo + 'px';
		
		//yo+= this.waves.triangle*100
		//s = Math.max(this.waves.triangle*2,1)
		//xo = x;
		//xo = 500+hRamp*-500;
		//xo = 200+hRamp*-200;
		//r = 50*tRamp;
		//xo=x;
		//yo=y;
		
		
		this.e.style.webkitTransformOrigin = '50%';
		this.e.style.MozTransformOrigin = '50%';
		
		this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform = 
		'translate3d(' + xo + 'px,' + yo +'px, 0)'//
		+' rotateZ('+g*15+'deg)';
		//+' scale('+(tri*1+.4)+')';
		
		//this.e.style.opacity = tri;
		
		this.pPos = [x,y];
	}//bezier_2()
	exports.bezier_2 = bezier_2;










	// ========= 1:1 projection ========
			
	function xyPlane(x,y) {
	
		var 
			w = this.waves,
			tRamp = w.tailRamp,
			hRamp = w.headRamp,
			tri = w.triangle,
			xo,
			yo;
			
		xo=x;
		yo=y;
		
		//this.e.style.webkitTransformOrigin = '50%';
		
		this.e.style.webkitTransform = 
			'translate3d(' + xo + 'px,' + yo +'px, 0) '
			//+'rotateZ('+g*15+'deg)'
			//+'scale('+(tRamp*2+.4)+')';
		
		this.e.style.opacity = 1;//tri;
		this.pPos = [x,y];
			
	} //xyPlane(x,y)
		
	exports.xyPlane = xyPlane;








	//=========== linear projections ===============

	function xyBumpTaper(x,y) {
	
		var 
		w = this.waves,
		tRamp = w.tailRamp,
		hRamp = w.headRamp,
		tri = w.triangle,
		xo,
		yo;
		
		xo=x;
		yo=y;
		
		//this.e.style.webkitTransformOrigin = '50%';
		
		this.e.style.transform = this.e.style.OTransform = this.e.style.MozTransform = this.e.style.webkitTransform =  
		'translate3d(' + xo + 'px,' + yo +'px, 0) '
			//+'rotateZ('+g*15+'deg)'
			+'scale('+(tri*1+.4)+')';
			
		//this.e.style.opacity = '';//clear opacity setting (if set by other mapping FN);
		this.e.style.opacity = tri;
		this.pPos = [x,y];
			
	} //xyPlane(x,y)				
	exports.xyBumpTaper = xyBumpTaper;

	return exports;


});

