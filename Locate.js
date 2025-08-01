export class Locator
{
    constructor(display)
    {
        this.display=display;
    }
    

test_compatibility()
{
    if(!navigator.geolocation)
        {
            this.display.textContent="Your browser does not support Geolocation.\nUse a different browser: Crome is recommended"; 
        }
    return null;
}

Get_Unsuccessful()
{
    this.display.textContent="unable to get your location,\nplease enable the location permission and check your internet connection.";
    return null;
}

getLocation() {
    console.log("Calling geolocation API...");

    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            console.warn("Geolocation not supported");
            reject({ code: 0, message: "Geolocation not supported" });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            // Success callback
            position => {
                console.log("Geolocation success!");
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            // Error callback
            function (error) {
                console.error("Geolocation error caught:", error);
                reject(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    });
}
}