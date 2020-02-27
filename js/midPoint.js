

// função que invoca o algoritmo para cada anel
function olympicRings () {
				midPoint(-8,28,8, 'rgb(102, 102, 255)' );
				midPoint(11,27,8, 'rgb(0, 0, 0)');
				midPoint(1,20,8, 'rgb(236, 236, 163)');
				midPoint(30,27,8, 'rgb(200, 0, 0)');
				midPoint(21,19,9, 'rgb(0, 128, 0)');
			  }


// algoritmo do ponto médio para geração de circuferências
function midPoint(x0,y0,radius, cor)  {

			var x = 0;
			var y = radius;
			var d = 5.0/4.0 - radius;

			// desenha o ponto inicial
			fullCircle (x0, y0, x, y, cor)
			while (y > x) {
			if (d <=0)
			d += 2.0*x + 3.0;
			else {
			d += 2.0*(x - y) + 5.0;
			y--;
			}
			x++;
      fullCircle( x0, y0, x, y, cor);
    	}
		}

// desenha os pontos correspondentes na semi-circunferência e nas suas simetrias
function fullCircle (x0, y0, x, y, cor) {
			rings (x0+x, y0+y, cor);
			rings (x0+y, y0+x, cor);
			rings (x0+y, y0-x, cor);
			rings (x0+x, y0-y, cor);
			rings (x0-x, y0-y, cor);
			rings (x0-y, y0-x, cor); 
			rings (x0-y, y0+x, cor);
			rings (x0-x, y0+y, cor);
      }
			
//cubo que simula o pixel dos aneis
function rings (x, y, cor) {
			var geometry = new THREE.BoxGeometry(0.5,0.5,0.5);
            var material = new THREE.LineBasicMaterial( { color: cor} );
			var cube = new THREE.Mesh( geometry, material );
			cube.position.set(x,y,0);
			scene.add( cube );
			}