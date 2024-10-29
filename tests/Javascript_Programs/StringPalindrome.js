var fname="Siddharth";
var leng=fname.length;
var rev='';
for(let i=leng-1;i>=0;i--)
{
  rev= rev + fname[i];
}
//console.log(rev);
if(rev==fname)
{
    console.log("Number is Palindrome");
}
else
{
    console.log("Number is Not Palindrome");
    
}