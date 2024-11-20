
//find min

// positive infinity means max possible number




const numbers = [300,2,4,6,8,10,100,12,14,200,16,1]


console.log(findMin(numbers));
function findMin(array)
{
    let min = Number.POSITIVE_INFINITY;
    for(let i=0; i<array.length; i++)
    {
        if (array[i] < min)
        {
            min = array[i];
        }
    }
    return min;
}
