const numbers = [1, -2, 6, -1, 3];
printSubArray(numbers);
function printSubArray(numbers)
{
    let total = 0;
    let minimum_sum = Number.POSITIVE_INFINITY;
    let maximum_sum = Number.NEGATIVE_INFINITY;
    const prefix = new Array(numbers.length);
    prefix[0] = numbers[0];

    for(let n=1;n<prefix.length;n++)
    {
        prefix[n] = prefix[n-1]+ numbers[n];
    }
    for(let i=0;i<numbers.length;i++)
    {
        for(let j=i;j<numbers.length;j++)
        {
            let current_sum = 0;
            // for(let k=i;k<=j;k++)
            // {
            //     console.log(numbers[k] + " ");
            //     current_sum = current_sum+numbers[k];

            // }
            current_sum = i == 0 ? prefix[j] : prefix[j] - prefix[i-1];
            total++;
            if(current_sum > maximum_sum)
            {
                maximum_sum = current_sum;

            }
            if (maximum_sum < minimum_sum)
            {
                minimum_sum = maximum_sum;

            }
            console.log('maximum: ', maximum_sum);
            console.log('minimum sum: ', minimum_sum);

            console.log("\n");

        }
        console.log("\n");
    }
    console.log('total subarrays: ', total);
    console.log('maximum: ', maximum_sum);
    console.log('minimum sum: ', minimum_sum);
}