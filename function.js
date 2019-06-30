var i=0,a=0,b=1;
var add_list=[];
function fibonacci(){
while(i<20){
    add=a+b;
    a=b;
    b=add;
    // console.log(add);
    i=i+1
    add_list.push(add)


}
return (add_list);
}
console.log(fibonacci());