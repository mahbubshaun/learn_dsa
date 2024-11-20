
//find max

// negative infinity means minimum possible number




const numbers = [300,2,4,6,8,10,100,12,14,200,16,1]

console.log(Number.NEGATIVE_INFINITY);

console.log(findMax(numbers));

function findMax(array)
{
    let largest = Number.NEGATIVE_INFINITY;
    for(let i=0; i<array.length; i++)
    {
        if (array[i] > largest)
        {
            largest = array[i];
        }
    }
    return largest;

}
