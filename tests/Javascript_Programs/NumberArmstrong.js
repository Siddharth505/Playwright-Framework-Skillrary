var n1=153,n2,n3=0,n4=0;
n2=n1;

while(n1>0)
{
    n3=n1%10;
    n4=n4+n3*n3*n3;
    n1=n1/10;
}
if(n2==n4)
{
    console.log("Number is Armstrong");
}
else
console.log("Number is Not Armstrong");
