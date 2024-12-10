(function(){
    let counter =0;
    const decreament = () =>{
        counter--;
        updateCounter();
    };

    const increament = () =>{
        counter++;
        updateCounter();
    };

    const updateCounter = ()=>{
    document.getElementById("counter").innerHTML=counter;
    };
    document.getElementById("increament").addEventListener("click" , increament);
    document.getElementById("decreament").addEventListener("click" , decreament);




    
})();