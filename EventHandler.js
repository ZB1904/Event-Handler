import { Locator } from "./Locate.js";

const display=document.getElementById("Display");
const eventName=document.getElementById("EventName");
const start=document.getElementById("Start");
const end=document.getElementById("End");
const cutOff=document.getElementById("CutOff");
const initialize=document.getElementById("Init");

    

    
const Locate = new Locator(display);


initialize.onclick = async () => {
    console.log("processing");

    try {
        const location = await Locate.getLocation();
        console.log(location);
    } catch (error) {
        console.error("Geolocation failed:");
        console.error("Code:", error.code);
        console.error("Message:", error.message);
        alert(`Location error: ${error.message} (Code ${error.code})`);
    }
};


