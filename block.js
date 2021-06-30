class Block{
    constructor(x, y, width, height) {
        var options = {
                    restitution:0.4,
                    friction:0.2, 
                    density:1,
                    isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        push()
        if(this.body.speed<0.5){
          
          rect(this.body.position.x,this.body.position.y,this.width, this.height);
          
        }
          else{
            
            World.remove(world,this.body)
            this.Visibility=this.Visibility-5;
           
            tint(255,this.Visibility)
            rect(this.body.position.x,this.body.position.y,this.width, this.height);

        pop()
               

        }
      }
    }