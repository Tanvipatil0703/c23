class Ground{
    constructor(x,y,width,hight){
    

var option={
    isStatic:true
}

this.body=Bodies.rectangle(x,y,width,hight,option);
this.width=width;
this.hight=hight;

World.add(world,this.body);

}

display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("purple");
    rect(pos.x,pos.y,this.width,this.hight);
    pop();
}

};