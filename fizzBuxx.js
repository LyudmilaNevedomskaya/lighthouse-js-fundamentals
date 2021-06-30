var x = 1;

while (x < 25) {
    if (x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");
    } else if (x % 5 === 0) {
        console.log("James");
    } else if (x % 3 === 0 ) {
        console.log("Julia");
    }else {
        console.log(x);
    }
    // print Julia, James, or JuliaJames
    
    // increment x
    x++;
}