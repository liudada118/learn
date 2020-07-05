var reverseList = function(head) {
    let pre = null
    let cre = head
    let pass
    while(cre){
        pass = cre.next
        cre.next = pre
        pre = cre
        cre = pass
    }
    return pre
};