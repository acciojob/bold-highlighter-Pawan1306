function highlight() {
    // Get all <strong> elements in the paragraph
    const strongElements = document.querySelectorAll('strong');

    // Change the color of bold elements to green
    strongElements.forEach((element) => {
        element.style.color = 'green';
    });
}

function return_normal() {
    // Get all <strong> elements in the paragraph
    const strongElements = document.querySelectorAll('strong');

    // Revert the color of bold elements back to black
    strongElements.forEach((element) => {
        element.style.color = 'black';
    });
}

