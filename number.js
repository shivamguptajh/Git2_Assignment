

//Check number is prime or not


for(let i=1;i<=13;i++){
    let count=0;

    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }

    if(count==2){
        console.log(i,"Is a prime number");
    }
    else{
        console.log(i,"Not a Prime Number")
    }





}