const numbers = [2, 4, 6, 8, 10];
printSubArray(numbers);
function printSubArray(numbers)
{
    let total = 0;
    for(let i=0;i<numbers.length;i++)
    {
        for(let j=i;j<numbers.length;j++)
        {
            for(let k=i;k<=j;k++)
            {
                console.log(numbers[k] + " ");
                

            }
            total++;

            console.log("\n");

        }
        console.log("\n");
    }
    console.log('total subarrays: ', total);
}