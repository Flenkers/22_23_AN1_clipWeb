class Particule {
	constructor(x, y, z){
		this.position =  new p5.Vector(x, y, z);
		this.speed = p5.Vector.random3D();
	}
	draw(){
		this.position.add(this.speed);
		push();
		translate (
			this.position.x,
			this.position.y,
			this.position.z
			);


		plane(100, 100);

		pop();
	}
}