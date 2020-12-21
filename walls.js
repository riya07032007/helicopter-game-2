class Wall{
   constructor(x,y,width,height) {
   var wall_options={
      isStatic:false

   }

   this.wall= Bodies.rectangle(x,y,width,height,wall_options)
   this.width=width
   this.height=height
   World.add(world,this.wall)
}


display(){
rectMode(CENTER);
rect(0,0,this.width,this.height)
fill("red")
   }
}