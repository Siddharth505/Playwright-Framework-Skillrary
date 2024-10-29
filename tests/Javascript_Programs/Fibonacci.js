var n1=0;
var n2=1;
var sum=0;

console.log(n1 +" "+ n2);
for(var i=2;i<20;i++)
{
  sum=n1+n2;
  console.log(" " +sum+ " ");

  n1=n2;
  n2=sum;
}
