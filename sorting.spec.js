describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles single element array', function() {
      expect( bubbleSort([1])).toEqual([1]);
   });
   it('handles 2 element array', function() {
      expect( bubbleSort([4,2])).toEqual([2,4]);
   });
    it('sorts an ordered array', function(){
      expect( bubbleSort([0,1,2,3,4,5])).toEqual( [0,1,2,3,4,5] )
   });
   it('sorts an unsorted array', function() {
      expect( bubbleSort([9,4,6,1,8,0,2,3])).toEqual( [0,1,2,3,4,6,8,9] );
   });
});



describe('Merge', function() {
   it('merges two sorted arrays', function() {
      expect(merge([1,3,5],[2,4,6])).toEqual([1,2,3,4,5,6]);
   })
   it('handes various sized arrays', function() {
      expect(merge([1,3],[0,2,4,5,6])).toEqual([0,1,2,3,4,5,6]);
   });
   it('handles various sized arrays', function() {
      expect(merge([0,2,4,6,8],[1,3])).toEqual([0,1,2,3,4,6,8]);
   });
});

describe('Split', function() {
   it('correctly spilts arrays with odd length', function() {
      expect( split([0,1,2,3,4,5,6]) ).toEqual([[0,1,2],[3,4,5,6]]);
   });
   it('correctly spilts arrays with even length', function() {
      expect( split([0,1,2,3,4,5]) ).toEqual([[0,1,2],[3,4,5]]);
   });
});




describe('Merge Sort', function() {
   it('handles an empty array', function() {
      expect(mergeSort([])).toEqual([]);
   });
   it('works for my first test case', function() {
      expect(mergeSort([3,5,7,9,1,2,6,4,0,8])).toEqual([0,1,2,3,4,5,6,7,8,9]);
   });
   it('works for arr with odd length', function() {
      expect(mergeSort([6,8,3,9,1])).toEqual([1,3,6,8,9]);
   });
});
