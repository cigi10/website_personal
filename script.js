var slideIndex = 0;
//showSlides();
/*
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Increment slideIndex and reset if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";  

    // Update the active state of indicators
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active"); // Remove active class from all indicators
    }
    dots[slideIndex - 1].classList.add("active"); // Add active class to the indicator corresponding to the current slide

    // Call showSlides function recursively after 2 seconds
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/
function downloadImage(imageUrl) {
    console.log(imageUrl);
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop();

    fetch(imageUrl, {
        mode : 'no-cors',
      })
        .then(response => response.blob())
        .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.download = imageUrl.replace(/^.*[\\\/]/, '');
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
    }



function showFullscreen(imageUrl) {
    document.querySelector('.fullscreen img').src = imageUrl;
    document.querySelector('.fullscreen').style.display = 'flex';
}

function closeFullscreen() {
    document.querySelector('.fullscreen img').src = '';
    document.querySelector('.fullscreen').style.display = 'none';
}

function likeImage(button) {
    button.classList.toggle('liked');
    // Implement logic to store like information (e.g., localStorage, database)
}
function downloadImage(imagedetails)
{
    console.log("im here");
    document.getElementsByClassName('downloadImage').style.visibility = 'visible';

}
