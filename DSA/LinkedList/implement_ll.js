class Node{

    constructor(val){

        this.data = val;
        this.next = null;
    }
}

function add(head,val){

    if(head == null)return new Node(val);
    while(head)head = head.next;
    head.next = new Node(val);
    return head;
}

let head = null;
for(let i =1;i<=10;i++){
    head = add(head,i);
}
while(head){
    console.log(head.data);
    head = head.next;
}
