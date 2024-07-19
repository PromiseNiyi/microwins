let currentIndex = 0;
const visibleImages = 3; // Number of images visible at a time
const totalImages = document.getElementById('carouselImages').children.length;

document.getElementById('next').addEventListener('click', function(event) {
    event.preventDefault();
    if (currentIndex < totalImages - visibleImages) {
        moveToNextSlide();
    }
});

document.getElementById('prev').addEventListener('click', function(event) {
    event.preventDefault();
    if (currentIndex > 0) {
        moveToPrevSlide();
    }
});

function moveToNextSlide() {
    currentIndex++;
    updateCarouselPosition();
}

function moveToPrevSlide() {
    currentIndex--;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const carouselImages = document.getElementById('carouselImages');
    const slideWidth = carouselImages.children[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateControls();
}

function updateControls() {
    const nextControl = document.getElementById('next');
    const prevControl = document.getElementById('prev');

    if (currentIndex === 0) {
        prevControl.classList.add('inactive');
    } else {
        prevControl.classList.remove('inactive');
    }

    if (currentIndex >= totalImages - visibleImages) {
        nextControl.classList.add('inactive');
    } else {
        nextControl.classList.remove('inactive');
    }
}

// Initial call to set the correct state for the controls
updateControls();




// let currentIndex = 0;
// const visibleImages = 3; // Number of images visible at a time
// const totalImages = document.getElementById('carouselImages').children.length;

// document.getElementById('next').addEventListener('click', function(event) {
//     event.preventDefault();
//     if (currentIndex < totalImages - visibleImages) {
//         currentIndex += visibleImages;
//         updateCarouselPosition();
//     }
// });

// document.getElementById('prev').addEventListener('click', function(event) {
//     event.preventDefault();
//     if (currentIndex > 0) {
//         currentIndex -= visibleImages;
//         updateCarouselPosition();
//     }
// });

// function updateCarouselPosition() {
//     const carouselImages = document.getElementById('carouselImages');
//     const slideWidth = carouselImages.children[0].clientWidth;
//     carouselImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
//     updateControls();
// }

// function updateControls() {
//     const nextControl = document.getElementById('next');
//     const prevControl = document.getElementById('prev');

//     if (currentIndex === 0) {
//         prevControl.classList.add('inactive');
//     } else {
//         prevControl.classList.remove('inactive');
//     }

//     if (currentIndex >= totalImages - visibleImages) {
//         nextControl.classList.add('inactive');
//     } else {
//         nextControl.classList.remove('inactive');
//     }
// }

// // Initial call to set the correct state for the controls
// updateControls();
