class Ground {


    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      // pos = this.body.position;
    }

    changeGrPosition(x,y){  
      this.body.position.x = x;
      this.body.position.y = y;
      // myColor = "yellow";
      // rectMode(CENTER);
      // fill("yellow");
      // rect(x, y, this.width, this.height);
    }

    display(){
      myColor = "blue";
      var pos = this.body.position;
      rectMode(CENTER);
      fill(myColor);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };