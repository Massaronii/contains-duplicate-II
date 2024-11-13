var containsNearbyDuplicate = function (nums, k) {
  let map = new Map()

  for (let cont = 0; cont < nums.length; cont++) {

    if (
      map.has(nums[cont]) 
    ) {

        if (Math.abs(cont - map.get(nums[cont])) <= k) {
          return true
        }
    }
        map.set(nums[cont], cont)
  }
  return false 
}


console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))