async function phishingDetect(URL) {
    try {
        const result = await content.fetch('https://cors-anywhere.herokuapp.com/http://phishingman.pythonanywhere.com/result/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json();
        return data;
    } catch(error) {
        alert(error);
    }
}

var currentURL = window.location.href;
console.log("currentURL is: " + currentURL);

phishingDetect(currentURL).then(data => {
    console.log(data);
});





