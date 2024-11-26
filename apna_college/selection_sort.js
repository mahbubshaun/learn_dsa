numbers = [5,4,1,3,2]
console.log(selectionSort(numbers));

function selectionSort(numbers)
{
    for(let i =0; i<numbers.length - 1; i++)
    {
        let min = i;
        for(let j = i+1; j<numbers.length; j++)
        {
            if(numbers[j] < numbers[min])
            {
                min = j;
            }
        }

        //swap
        let temp = numbers[min];
        numbers[min] = numbers[i];
        numbers[i] = temp;


    }
    return numbers;
}