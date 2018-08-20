let count = 0
let count1 = 0

function myLike(el){
        count += 1
        document.getElementById(el).innerHTML = count
}

function myDislike(el){
    count1 += 1
    document.getElementById(el).innerHTML = count1
}

function addComment(inp , di){
    let myComment = document.createElement('p')
    myComment.textContent = document.getElementById(inp).value
    myComment.setAttribute("style" ,"background-color: #3a3838;height: 30px;width:500px;font-size:25px;opacity: 0.7;color:gold;margin:10px;border-radius:12px;")
    document.getElementById(di).appendChild(myComment)
    document.getElementById(inp).value = ""
}
