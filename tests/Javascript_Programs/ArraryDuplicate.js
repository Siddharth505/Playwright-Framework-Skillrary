const { count } = require("console");

var a=[10,20,30,40,10,20];
let count=0;
for(var i=0;i<a.length;i++)
{
    for(var j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j])
        {
            console.log("Duplicate Element is Found" + a[j]);
            count++;
        }
      //break;
    }
    
}
console.log(count);