const API_KEY = 'TU_API_KEY_DE_GOOGLE';
const PLACE_ID = 'ID_DEL_LUGAR';

async function fetchGoogleReviews() {
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const reviewsContainer = document.getElementById('reviews-container');
        data.result.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <div class="review-author">${review.author_name}</div>
                <div class="review-rating">⭐ ${review.rating}/5</div>
                <div class="review-text">${review.text}</div>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

fetchGoogleReviews();