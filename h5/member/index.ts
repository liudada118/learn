interface MembersEntity{
    id : number
    name: string
    avatar:string
}

const myform   = document.forms.myform as HTMLFormElement
// console.log(myform)
myform.addEventListener('submit',function(){
    const id = myform.id.value as HTMLInputElement

})
myform.addEventListener