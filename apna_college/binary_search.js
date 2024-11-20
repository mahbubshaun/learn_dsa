const array = [-1,2,3,4,5,6,7,8,9,10]
let key = 2;

console.log(binarySearch(array, key));
function binarySearch(array, key)
{
    let start = 0;
    let end = array.length - 1;
    while(start <= end)
    {
        let mid = Math.floor((start + end)/2);

        if (array[mid] == key)
        {
            return mid;
        }
        if (array[mid] < key)
        {
            start = mid + 1;
        }else
        {
            end = mid - 1;
        }

    }
    return -1;
}