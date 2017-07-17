/*
function FlashLight() {
    console.log("Button Clicked ");
    window.plugins.flashlight.available(function (isAvailable) {
        if (isAvailable) {
            window.plugins.flashlight.toggle();
        } else {
            alert("Flashlight not available on this device");
        }


    });
}*/

function FlashLight() {
    console.log("Button Clicked ");
    window.plugins.flashlight.toggle();
}
