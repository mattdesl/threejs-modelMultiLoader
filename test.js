function onReady() {

	var View = require('threejs-managed-view').View;
	var getURLParam = require('urlparams').getParam;
	var MultiLoader = require('./');
	//all you really need
	var view = new View({
		stats: true
	});
	view.renderer.setClearColor(0x999999);

	var assetUrlBase = '../../assets/models/';
	var url = 'parseTest/parse.autodesk';
	var temp = getURLParam('model');
	if(temp !== undefined) url = temp;

	var loadMode = MultiLoader.MODES.JSONJITGEOM;
	var stream = true;

	var materials = {
		carPaint: new THREE.MeshPhongMaterial({
			diffuse: 0x7f7f7f,
			emissive: 0xffddaa,
			ambient: 0x000000,
			lights: false,
			specular: 0x000000,
			vertexColors: THREE.VertexColors
			//side: THREE.BackSide
		}),
		pedestal: new THREE.MeshPhongMaterial({
			diffuse: 0x7f7f7f,
			emissive: 0xaaddcc,
			ambient: 0x000000,
			lights: false,
			specular: 0x000000,
			vertexColors: THREE.VertexColors
			//side: THREE.BackSide
		}),
		vertexShadow: new THREE.MeshPhongMaterial({
			diffuse: 0x7f7f7f,
			emissive: 0xffffff,
			ambient: 0x000000,
			lights: false,
			specular: 0x000000,
			vertexColors: THREE.VertexColors,

			//side: THREE.BackSide
		}),
		groundPlane: new THREE.MeshPhongMaterial({
			diffuse: 0x7f7f7f,
			emissive: 0xaa99aa,
			ambient: 0x000000,
			lights: false,
			specular: 0x000000,
			vertexColors: THREE.VertexColors
			//side: THREE.BackSide
		})
	}
	materials.glassTinted = materials.glassClear;
	var multiLoadedObject = new MultiLoader(assetUrlBase + url, view.scene, materials, loadMode, stream, false);

	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane', false, function(){
			console.log('loaded!!');
		});
	}, 1000);
	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane/niceTeapot', true, function(){
			console.log('loaded!!!!');
		});
	}, 2000);
	setTimeout(function() {
		multiLoadedObject.hideByName('all/groundPlane/niceTeapot', true);
	}, 2030);
	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane/niceTeapot', true, function(){
			console.log('loaded!!!!');
		});
	}, 2060);
	setTimeout(function() {
		multiLoadedObject.hideByName('all/groundPlane/niceTeapot', true);
	}, 2090);
	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane/niceTeapot', true, function(){
			console.log('loaded!!!!');
		});
	}, 2120);
	setTimeout(function() {
		multiLoadedObject.hideByName('all/groundPlane/niceTeapot', true);
	}, 2150);
	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane/niceTeapot', true, function(){
			console.log('loaded!!!!');
		});
	}, 2180);
	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane/niceTeapot', true, function(){
			console.log('loaded!!!!');
		});
	}, 2180);
	setTimeout(function() {
		multiLoadedObject.showByName('all/groundPlane/somethingMissing', true, function(){
			console.log('loaded!!!!');
		});
	}, 2280);

}

var loadAndRunScripts = require('loadandrunscripts');
loadAndRunScripts(
	[
		'bower_components/three.js/three.js',
		'lib/stats.min.js',
		'lib/threex.rendererstats.js',
		'lib/gzip.js'
	],
	function() {
		loadAndRunScripts(
			[
				'lib/ColladaLoader.js',
				'lib/SceneLoader.js'
			],
			onReady
		);
	}
);