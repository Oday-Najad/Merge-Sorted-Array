

function mergeSortedArrays(arrayOne, arrayTwo){
  const mergedArray = [];
  let arrayOneFirstItem = arrayOne[0];
  let arrayTwoFirstItem = arrayTwo[0];
  let i = 1;
  let j = 1;


  if(arrayOne.length === 0){
    return arrayTwo;
  }

  if (arrayTwo.length === 0){
    return arrayOne;
  }

  while (arrayOneFirstItem || arrayTwoFirstItem){
    if( arrayTwoFirstItem === undefined || arrayOneFirstItem < arrayTwoFirstItem)
    {
      mergedArray.push(arrayOneFirstItem);
      arrayOneFirstItem = arrayOne[i];
      i++;
    }
    else
    {
        mergedArray.push(arrayTwoFirstItem);
        arrayTwoFirstItem = arrayTwo[j];
        j++;
    }
  }


  

  return mergedArray;
}


console.log(mergeSortedArrays([0,3,31,9090,89090], [3,4,6,30]))