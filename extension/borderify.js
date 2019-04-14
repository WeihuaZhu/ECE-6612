async function phishingDetect(URL) {
    try {
        console.log("Input URL is: " + currentURL);
        var website = {
            url: '',
            rate: ''
        };
        website.url = URL;
        const result = await content.fetch('https://cors-anywhere.herokuapp.com/http://phishingman.pythonanywhere.com/result/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(website),
        });
        const data = await result.json();
        return data;
    } catch(error) {
        alert(error);
    }
}

var currentURL = String(window.location.href).replace(/^(https?:\/\/)?(www\.)?/,'');
console.log("currentURL is: " + currentURL);

phishingDetect("http://" + currentURL).then(data => {
    console.log(data);
    if (data.rate == "1") {
        document.body.style.border = "20px solid red";
        alert("This is a potential phishing website.");
    } else {
        document.body.style.border = "5px solid green";
        alert("This is not a legitimate website.");
    }
});





