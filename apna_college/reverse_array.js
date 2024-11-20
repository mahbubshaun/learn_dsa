const array = [-1,2,3,4,5,6,7,8,9,10];

console.log(array);
console.log(reverse(array));
console.log(array);
function reverse(array)
{
    let first = 0 , last = array.length - 1;
    while (first < last) {
        //swaping
        let temp = array[last];
        array[last] = array[first];
        array[first] = temp;

        first++;
        last--;

    }
    return array;
}