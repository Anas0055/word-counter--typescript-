import inquirer from 'inquirer'

function counter(paragraph:string){
    let freeWhitespace = paragraph.replace(/\s/g,"")

    return freeWhitespace.length
}
 async function startWordCounter(counter:(text:string)=>number){ 

    do{
        let res =await inquirer.prompt({
            type:"input",
            message:"write paragragh here ...",
            name:"paragragh"
    
        })
       console.log(counter(res.paragragh))
    }
    while(true)
}
startWordCounter(counter)





