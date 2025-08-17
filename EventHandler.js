import { Locator } from "./Locate.js";

const display=document.getElementById("Display");
const eventName=document.getElementById("EventName");
const start=document.getElementById("Start");
const end=document.getElementById("End");
const cutOff=document.getElementById("CutOff");
const penalty=document.getElementById("Penalty");
const initialize=document.getElementById("Init");
const m=document.getElementById("meridiem");
const m1=document.getElementById("meridiem1");
const m2=document.getElementById("meridiem2");
const url="https://script.google.com/macros/s/AKfycbzRMQ5ZyV_gDDZvlGtd_-gZtUG6ki3tzMYLl3lVsOvB2JysrcYwuF2e__sZiWUWllF1/exec";
let once;
    

  



const Locate = new Locator(display);


initialize.onclick = async () => {
    console.log("processing");


    if(once==1)
        {
            display.textContent="already sent"
        }
    else
        {
            once=1;
            const data=
{
    display:display.value,
    eventName:eventName.value,
    start:start.value,
    end:end.value,
    cutOff:cutOff.value,
    penalty:penalty.value,
    logOff:"",
} 
    if(m.checked && data.start >= 1200 && data.start <1300)
        {
            data.start=Number(start.value);
        }
        else{data.start=Number(start.value)+1200;}
    if(m1.checked && data.end >= 1200 && data.end <1300)
        {
            data.end=Number(end.value);
        }
        else{data.end=Number(end.value)+1200;}
    if(m2.checked && data.cutOff >= 1200 && data.cutOff <1300)
        {
            data.cutOff=Number(cutOff.value);
        }
        else{data.cutOff=Number(cutOff.value)+1200;}

    try {
        await Locate.getLocation(display,url,data)
    } catch (error) {
        console.error("Geolocation failed:");
        console.error("Code:", error.code);
        console.error("Message:", error.message);
        alert(`Location error: ${error.message} (Code ${error.code})`);
    }
        }
    
};


