// function submitted(){
//     var res = document.getElementById('i1')
//     res.textContent = "Phishing";
//     // var checkcond = inp === '';
//     // if checkcond:

// }
// document.addEventListener('DOMContentLoaded', function () {
//     const submitButton = document.querySelector('.submit');
//     const urlInput = document.querySelector('input[type="url"]');
//     const resultElement = document.querySelector('#i1');

//     submitButton.addEventListener('click', function () {
//         const url = urlInput.value;

//         // Make sure the user has entered a URL
//         if (!url) {
//             resultElement.innerText = 'Please enter a URL.';
//             return;
//         }

//         // Send a POST request to your Flask server
//         fetch('/predict', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ url }),
//         })
//             .then(response => response.json())
//             .then(data => {
//                 // Display the prediction result
//                 const predictions = data.predictions;
//                 if (predictions.length > 0 && predictions[0] === 1) {
//                     resultElement.innerText = 'This URL is likely a phishing link.';
//                 } else {
//                     resultElement.innerText = 'This URL is likely legitimate.';
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 resultElement.innerText = 'An error occurred while checking the URL.';
//             });
//     });
// });



// function submitted() {
//     // Get the URL input value (you can modify this part as needed)
//     var urlInput = document.querySelector('.url input');
//     var url = urlInput.value;

//     // Make a POST request to your server (you can modify this part as needed)
//     fetch('/predict', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ url: url })
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Get the result message element
//         var resultMessage = document.getElementById('result-message');
//         var resultMessage2 = document.getElementById('result-message2');

//         // Check the prediction result
//         if (data.predictions[0] === 1) {
//             // Set the message for safe website
//             resultMessage.innerText = "We guess it is a safe website";
            
//         } else {
//             // Set the message for suspicious website
//             resultMessage2.innerText = "Caution! Suspicious website detected";
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }
   


function submitted() {
    // Get the URL input value (you can modify this part as needed)
    var urlInput = document.querySelector('.url input');
    var url = urlInput.value;
    var loadingSpinner = document.getElementById('loading-spinner');

    // Show the loading spinner
    loadingSpinner.style.display = 'block';


    // Make a POST request to your server (you can modify this part as needed)
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        // Get the result message element
        var resultMessage = document.getElementById('result-message');
        var resultMessage2 = document.getElementById('result-message2');
        loadingSpinner.style.display = 'none';

        // Check the prediction result
        if (data.predictions[0] === 1) {
            // Set the message for safe website
            resultMessage.innerText = "Safe Browsing Verified! This Website Is Secure";
            resultMessage.style.color = "green"; // Set text color to green
            resultMessage2.innerText = ""; // Clear the other message
        } else {
            // Set the message for suspicious website
            resultMessage.innerText = ""; // Clear the first message
            resultMessage2.innerText = "Caution! Suspicious website detected";
            resultMessage2.style.color = "red"; // Set text color to red
        }
    })
    .catch(error => {
        console.error('Error:', error);
        loadingSpinner.style.display = 'none';
    });
    
}



// function submitted() {
//     // Get the URL input value (you can modify this part as needed)
//     var urlInput = document.querySelector('.url input');
//     var url = urlInput.value;

//     // Get the loading spinner element
//     var loadingSpinner = document.getElementById('loading-spinner');

//     // Show the loading spinner
//     loadingSpinner.style.display = 'block';

//     // Make a POST request to your server (you can modify this part as needed)
//     fetch('/predict', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ url: url })
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Get the result message element
//         var resultMessage = document.getElementById('result-message');
//         var resultMessage2 = document.getElementById('result-message2');

//         // Hide the loading spinner
//         loadingSpinner.style.display = 'none';

//         // Check the prediction result
//         if (data.predictions[0] === 1) {
//             // Set the message for safe website
//             resultMessage.innerText = "We guess it is a safe website";
//             resultMessage.style.color = "green"; // Set text color to green
//             resultMessage2.innerText = ""; // Clear the other message
//         } else {
//             // Set the message for suspicious website
//             resultMessage.innerText = ""; // Clear the first message
//             resultMessage2.innerText = "Caution! Suspicious website detected";
//             resultMessage2.style.color = "red"; // Set text color to red
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);

//         // Hide the loading spinner in case of an error
//         loadingSpinner.style.display = 'none';
//     });
// }



