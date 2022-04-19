function calcInterest(){
    let arr=[]
    let arr1=[]

    arr.push(document.getElementById("balance1").value)
    arr.push(document.getElementById("balance2").value)
    arr.push(document.getElementById("balance3").value)
    arr.push(document.getElementById("balance4").value)
    arr.push(document.getElementById("balance5").value)
    
    for(balance of arr){
        if(Number(balance)>200000){
    arr1.push(Number(balance)+((Number(balance)*10)/100)-((Number(balance)*0.2)/100))
    
        }
       else if(Number(balance)>100000){
        arr1.push(Number(balance)+((Number(balance)*5)/100)-((Number(balance)*0.05)/100))
         
                }
                else {
                arr1.push(Number(balance)+(Number(balance)*3)/100)
                  
                    }
               
    }
    if(arr1[0]!=0)
    document.getElementById("balance1after").innerText=arr1[0];
    if(arr1[1]!=0)
    document.getElementById("balance2after").innerText=arr1[1];
    if(arr1[2]!=0)
    document.getElementById("balance3after").innerText=arr1[2];
    if(arr1[3]!=0)
    document.getElementById("balance4after").innerText=arr1[3];
    if(arr1[4]!=0)
    document.getElementById("balance5after").innerText=arr1[4];
    }