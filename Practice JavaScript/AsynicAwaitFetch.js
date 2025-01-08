const API_URL = "https://api.github.com/users/LikhithHG";

async function handlePromise() {
    try
    {
        //If the URL is invalid
        const data = await fetch(API_URL);
        //Fetch returs a response (response object) 
        //response body is a readable stream in JSON -> basically json value
        const jsonValue = await data.json();
        //This json is again a promise so we have used the await

        console.log(jsonValue); 
    }
    catch(err)
    {
        console.log(err);
    }
    
}
handlePromise();

//This way is also same as handling errors
//handlePromise().catch((err) => console.log(err));