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
    this.display.textContent="Sending...";
    return null;
}

send(url,formData,display)
{
    fetch(url,
                {
                    method: 'POST',
                    body: formData,
                })
                .then(() => 
                {
                    console.log("Submitted successfully");
                    display.textContent=`Complete!`;
                })
                    .catch(err => {
                    console.error("Submission failed", err);
                    display.textContent=`Submission Failed Check Your Internet Connection`;
                });
}

getLocation(display,url,data) 
    {
    
        console.log(data)
        navigator.geolocation.getCurrentPosition(
            // Success callback
            position => 
            {
            console.log("Geolocation success!");
            const lat = position.coords.latitude;
            const lon= position.coords.longitude;
            const formData =new FormData();

            formData.append("eventName",data.eventName)
            formData.append("start",data.start)
            formData.append("end",data.end)
            formData.append("cutOff",data.cutOff)
            formData.append("latitude",lat)
            formData.append("longitude",lon)
            formData.append("logOff",data.logOff)

            this.send(url,formData,display)
            return;               
            },
            this.Get_Unsuccessful.bind(this)
            ,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    }
}