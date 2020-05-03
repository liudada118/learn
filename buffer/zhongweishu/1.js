var findMedianSortedArrays = function(nums1, nums2) {
    var a = nums1.length
    var c = nums2.length
    if(a%2==0){
        var b = (nums1[a/2]+nums1[a/2-1])/2
    }else{
        var b = nums1[(a/2).toFixed(0)-1]
       
    }
    if(c%2==0){
        var d = (nums2[c/2]+nums2[c/2-1])/2
    }else{
        var d = nums2[(c/2).toFixed(0)-1]
        
    } 
    console.log((b+d)/2)
};
findMedianSortedArrays([1,3],[2])