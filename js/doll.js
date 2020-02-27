
function halterDoll () {

    // perna
    var geometry = new THREE.ConeBufferGeometry( 1, 16, 10 );
    var material = new THREE.MeshLambertMaterial( {color: 0xffff66 } );
    var cone = new THREE.Mesh( geometry, material );
    cone.rotation.x=1.1*Math.PI;
    cone.position.set(0,-39,10);
    scene.add( cone );


    // perna2
    var geometry = new THREE.ConeBufferGeometry( 1, 15, 10 );
    var material = new THREE.MeshLambertMaterial( {color: 0xffff66 } );
    var cone2 = new THREE.Mesh( geometry, material );
    cone2.rotation.x=-1.2*Math.PI;
    cone2.position.set(13,-44,10);
    scene.add( cone2 );

    //tronco
    var geometry = new THREE.CylinderGeometry( 1, 3, 10, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x346633} );
    var cylinder = new THREE.Mesh( geometry, material );
    cylinder.rotation.x=-1*Math.PI;
    cylinder.position.set(-5,-21,18);
    scene.add( cylinder );

    // cabeça
    var geometry = new THREE.CircleBufferGeometry( 3,32 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.set(-4,-12,17);
    scene.add( circle );

    // braço
    var geometry = new THREE.ConeBufferGeometry( 1, 14, 10 );
    var material = new THREE.MeshLambertMaterial( {color: 0xffff66 } );
    var braco = new THREE.Mesh( geometry, material );
    braco.rotation.x=-0.3*Math.PI;
    braco.position.set(-9,-12,10);
    scene.add( braco );


    // braço2
    var geometry = new THREE.ConeBufferGeometry( 1.3, 16, 10 );
    var material = new THREE.MeshLambertMaterial( {color: 0xffff66 } );
    var braco2 = new THREE.Mesh( geometry, material );
    braco2.rotation.x=0.2*Math.PI;
    braco2.position.set(20,-19,10);
    scene.add( braco2 );

    //barra
    var geometry = new THREE.CylinderGeometry( 0.7, 0.7, 38, 21 );
    var material = new THREE.MeshBasicMaterial( {color: 0x346633} );
    var barra = new THREE.Mesh( geometry, material );
    barra.rotation.x = -1.56*Math.PI;
    barra.position.set(2,-8,10);
    scene.add( barra);

    // peso1
    var geometry = new THREE.CircleBufferGeometry( 3,15 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var circle = new THREE.Mesh( geometry, material );
    circle.rotation.y = 0.05*Math.PI;
    circle.rotation.x = -0.05*Math.PI;
    circle.position.set(-20,-3,10);
    scene.add( circle );

    // peso2
    var geometry = new THREE.CircleBufferGeometry( 4,15 );
    var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    var circle = new THREE.Mesh( geometry, material );
    circle.rotation.y = 0.04*Math.PI;
    circle.rotation.x = -0.04*Math.PI;
    circle.position.set(37,-16,10);
    scene.add( circle );

}