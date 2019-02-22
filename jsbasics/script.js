/*var age=18;
if(age<13)
{
    console.log("minor");
}
else if(age>=18)
{
    console.log("major")
}
age>=18?console.log("major"):console.log("minor")

function mithi(firstname,lastname)
{
    console.log(firstname+ " " +lastname);
}
mithi('john','doe');

var names=["tommy","harry","david"];
console.log(names);
console.log(names.length);
names.push("tony");
console.log(names);
names.unshift("tracy");
console.log(names);
names.pop();
console.log(names);
*/
 //challenge2

 bills=[124,48,268];
 tip=[];
 cost=[];
 for (i=0;i<3;i++)
 {
     if(bills[i]<50)
     {
         tip[i]=.2*bills[i];
         cost[i]=bills[i]+tip[i];
    }
    else if(bills[i]>=50 && bills[i]<200)
{
    tip[i]=.15*bills[i];
    cost[i]=bills[i]+tip[i];

} 
else if(bills[i]>200)
{
    tip[i]=.1*bills[i];
    cost[i]=bills[i]+tip[i];
}
}
console.log(tip);
console.log(cost);