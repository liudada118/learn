// var levelOrder = function(root) {
//     if(root === null) return [];
//       let queue = [ root ];
//       // let queue = [ root.left, root.right ];  // 假设处于第二层 也能够把第三层 追加到队尾
//       let res = [];
//       while(queue.length) {
//         // 上一层的元素都出队列
//         let rowNodes = queue.splice(0);
//         // 下一层的元素 拿到上一层的所有元素 遍历上一层所有有元素，取出所有 .left .right
//         for (let node of rowNodes) {
//             let c = []
//             {
//           // 假设 既没有没有 left right 二叉树的最底下这层 queue.length === 0
//           if (node.left) c.push(node.left)
//           if (node.right) c.push(node.right)
//           console.log(node.left)
//         }  console.log(c)
//         res.push(c)}
      
//       }
//       return res;
//     }
// console.log(levelOrder([3,9,20,null,null,15,7]))


// for(let i =0 ;i<10;i++){
//     let c =
// }