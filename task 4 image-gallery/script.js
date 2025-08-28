// Select main image element
const mainImage = document.getElementById("main-image");

// Select all thumbnails
const thumbnails = document.querySelectorAll(".thumb");

// Add click event to each thumbnail
thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    // Change main image src to clicked thumbnail src
    mainImage.src = thumb.src;

    // Optional: highlight active thumbnail
    thumbnails.forEach(img => img.style.borderColor = "#ccc");
    thumb.style.borderColor = "#333";
  });
});
