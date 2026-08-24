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
            
        }, 3000);
    })
}

// fetchUserData()
//     .then(data => console.log("user data is:", data))
//     .catch(error => console.error("Error:", error));


async function displayUserData () {

    try{

        console.log("waxaad arkeysaa datada after 3 second");
        const userInfo  = await fetchUserData();
        console.log("User data is :", userInfo);

    }catch(error){
        console.log("error", error);

    }
    
}


displayUserData();