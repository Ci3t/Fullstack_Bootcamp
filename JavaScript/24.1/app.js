function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}



Square.prototype.isSquare = function () {
    
    if(this.a === this.b && this.b === this.c && this.b === this.d){
       console.log(true);
    }else{
        console.log(false);
    }
  
}

let res = new Square(10,10,10,10)
res.isSquare()


// Square.prototype.sqrta = function isSquare(a, b, c, d) {
//     if(Math.sqrt(a) === Math.sqrt(b) && Math.sqrt(b) === Math.sqrt(c) && Math.sqrt(c) === Math.sqrt(d)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(Square.sqrta(10,10,8,10));
