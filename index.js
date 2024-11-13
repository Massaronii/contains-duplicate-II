var containsNearbyDuplicate = function (nums, k) {

  let result = false

  for (let cont = 0; cont < nums.length; cont++) {
    for (let cont1 = cont + 1; cont1 < nums.length; cont1++) {

      if (nums[cont] === nums[cont1] && Math.abs(cont - cont1) <= k) {
        result =  true
      }
    }
  }
  return result
}


console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1],  3))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))