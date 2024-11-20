//linear search

const numbers = [300,2,4,6,8,10,100,12,14,200,16,1]
let key = 10;
console.log(findKey(numbers));
function findKey(array)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i] == key)
        {
            return i;
        }
    }
}