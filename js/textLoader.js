

// texto com fontLoader

function text(text) {

    var loader = new THREE.FontLoader();
    loader.load ("/fonts/DIN 1451 fette Breitschrift 1936_Regular.json", function (font)
    {
    var material = new THREE.MeshBasicMaterial({color: 0xFF0000});
    var shapes = font.generateShapes(text,8);
    var geometry = new THREE.ShapeBufferGeometry(shapes);
    geometry.computeBoundingBox();
    var texto1 = new THREE.Mesh(geometry, material);
    texto1.position.set(-28,37,0);
    scene.add(texto1);
    });

}