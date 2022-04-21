function calcInterest(){
    let arr=[]
    let arr1=[]

    arr.push(document.getElementById("balance1").value)
    arr.push(document.getElementById("balance2").value)
    arr.push(document.getElementById("balance3").value)
    arr.push(document.getElementById("balance4").value)
    arr.push(document.getElementById("balance5").value)
   
    for(let i=0;i<arr.length;i++){
        let z=Number(arr[i])
        // if(arr[i]===''){
        //     arr1[i]=0
        //     return
        // }
        if(z>200000){
            arr1.push((z+((z*10)/100))-(((z+((z*10)/100))*0.2)/100))
    
        }
       else if(z>100000){
        arr1.push((z+((z*5)/100))-(((z+((z*10)/100))*0.05)/100))
         
                }
                else {
                arr1.push(z+(z*3)/100)
                  
                    }
               
    }
    
    document.getElementById("balance1after").innerText=arr1[0];
   
    document.getElementById("balance2after").innerText=arr1[1];
   
    document.getElementById("balance3after").innerText=arr1[2];
    
    document.getElementById("balance4after").innerText=arr1[3];
    
    document.getElementById("balance5after").innerText=arr1[4];
    }