function fetchUserData(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {

                    const success = true;

                    if(success){
                        resolve({
                            id:1, name:"maan"
                        });
                    }else{
                        reject("failed to fetch this data")
                    }
            
        }, 2000);
    })
}

fetchUserData()
    .then(data => console.log("user data is:", data))
    .catch(error => console.error("Error:", error));
