numbers = [5,4,1,3,2]
console.log(insertionSort(numbers));

function insertionSort(numbers)
{
    for(let i=1;i< numbers.length; i++)
    {
        let curr = numbers[i];
        let prev = i-1;
        //swap elements
        while(prev >= 0 && numbers[prev] > curr)
        {
            numbers[prev+1] = numbers[prev];
            prev--;
        }
        //insert to appropriate position
        numbers[prev+1] = curr;
        //test
    }
    return numbers;
}