class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(800,390,1600,10,options);
    World .add(world,this.body);    
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, 1600, 10);
        pop();
      }
}