

function findMax(arr)
{
    let MAX = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > MAX) {
            MAX = arr[i]

        }
    }

    return MAX;

}




let arr = [1,300, 6,3, 110, 20]
console.log(findMax(arr));
// for (x of arr)
//     console.log(x)