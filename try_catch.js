var i=0;
try{
while(i<20)
{
    if(i%2!=0){
        console.log(i);
    }
    i=i+1
}
}
catch(b){
    console.log(b.message);
}
