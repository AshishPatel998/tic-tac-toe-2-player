document.getElementById('steamForm').addEventListener('submit', function(event) {
    event.preventDefault(); // फॉर्म के डिफ़ॉल्ट व्यवहार को रोके

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // यहाँ पर आप एपीआई कॉल या अन्य कार्य कर सकते हैं
    // हमने यहाँ पर केवल एक संदेश दिखाने के लिए कोड लिखा है
    const responseMessage = `धन्यवाद ${name}! आपके संदेश को सफलतापूर्वक भेज दिया गया है।`;
    
    document.getElementById('responseMessage').innerText = responseMessage;

    // फॉर्म को रीसेट करें
    document.getElementById('steamForm').reset();
});
