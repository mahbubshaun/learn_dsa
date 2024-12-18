numbers = [5,4,1,3,2]
console.log(countingSort(numbers));

function countingSort(numbers)
{
    let largest = Number.MIN_VALUE;
    for (let i=0;i<numbers.length; i++)
    {
        largest = Math.max(numbers[i], largest);
    }
    let count = new Array(largest+1).fill(0);
    for (let i=0;i<numbers.length; i++)
    {
        count[numbers[i]]++;
    }
    
    let j=0;
    for (let i=0;i<count.length; i++)
    {
        while (count[i] > 0)
        {
            numbers[j] = i;
            j++;
            count[i]--;
        }
    }

    return numbers;
}