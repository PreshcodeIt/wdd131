

document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("product");
    const reviewCountDisplay = document.getElementById("reviewCount");
    const reviewForm = document.querySelector("form");

    // Sample product array
    const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

    // Populate product dropdown
    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Load review count from localStorage
    function updateReviewCount() {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        if (reviewCountDisplay) {
            reviewCountDisplay.textContent = reviewCount;
        }
    }
    updateReviewCount();

    // Handle form submission
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default behavior

        // Increment review count
        let reviewCount = parseInt(localStorage.getItem("reviewCount") || "0", 10);
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        // Update UI
        updateReviewCount();

        // Clear form fields
        reviewForm.reset();

        // Redirect to review page
        window.location.href = "review.html";
    });

    // Fix rating selection with radio buttons
    const ratingInputs = document.querySelectorAll('.rating input[type="radio"]');
    ratingInputs.forEach(input => {
        input.addEventListener('change', function () {
            // Reset all labels to default color
            document.querySelectorAll('.rating label').forEach(label => label.style.color = '#ccc');
            
            // Highlight selected and previous stars
            this.labels.forEach(label => label.style.color = 'gold');
        });
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
