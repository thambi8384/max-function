function brand(){
    let arr=[70,80,90,30,20,50,300];
    let max=arr[0];

    for (let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(max);
}
brand();