function odds(){
    for(var i=1;i<=20;i+=2){
        console.log(i);
    }
    // or
    // for(var i=1;i<=20;i++){
    // if(i%2==1){
    // console.log(i)
    // }
    // }
}
// odds();

function decreasing(){
    for(var i=100;i>0;i--){
        if(i%3==0){
            console.log(i);
        }
    }
}
// decreasing();

function printseq(){
    var num=4;
    while(num>-4){
        console.log(num);
        num-=1.5;
    }
}
// printseq();

function sigma(){
    var sum=0;
    for(var i=1;i<=100;i++){
        sum+=i;
    }
    console.log(sum);
}
// sigma();

function factorial(){
    var product=1;
    for(var i=1;i<=12;i++){
        product*=i;
    }
    console.log(product);
}
// factorial();