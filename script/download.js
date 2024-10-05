// function downloadImage(imageSrc) {
//     const link = document.createElement('a');
//     link.href = imageSrc;
//     link.download = imageSrc.substring(imageSrc.lastIndexOf('/') + 1);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }


// Function to download image based on button's data-filepath attribute
function downloadImage(event) {
    const button = event.target; // Get the clicked button
    const filePath = button.getAttribute('data-filepath'); // Extract file path from data attribute

    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.substring(filePath.lastIndexOf('/') + 1); // Extract the file name from the path
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Attach event listener to all download buttons
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', downloadImage);
});

