function toggleAnswer(element) {
    const answer = element.nextElementSibling; // Get the next sibling element (the answer)
    const icon = element.querySelector('.faq-icon');
    console.log('testinggggggggg');

    // Toggle active class to the parent faq-item
    element.parentElement.classList.toggle('active');

    // Show or hide the answer
    if (answer.style.display === "block") {
        answer.style.display = "none"; // Hide the answer
        icon.textContent = "+"; // Change icon to +
    } else {
        answer.style.display = "block"; // Show the answer
        icon.textContent = "x"; // Change icon to x
    }
}
function toggleNavbar() {
    const navLinks = document.getElementById("collapsibleNavbar");
    const heroSection = document.querySelector(".hero"); // Reference to the hero section
    const body = document.body;
console.log('testinggggggggg');
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        navLinks.style.display = 'flex'; // Show the menu
        setTimeout(() => {
            navLinks.style.maxHeight = '300px'; // Change as necessary
            heroSection.style.marginbottom = '300px'; // Adjust this value based on nav height
        }, 10); // Small timeout to ensure the display property has taken effect
    } else {
        navLinks.style.maxHeight = '0'; // Collapse the menu
        setTimeout(() => {
            navLinks.style.display = 'none'; // Hide the menu after collapse
            heroSection.style.marginbottom = '0'; // Reset hero margin
        }, 300); // Match this with the transition duration
    }
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    const isActive = faqItem.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').style.display = 'none';
    });

    if (!isActive) {
        faqItem.classList.add('active');
        answer.style.display = 'block';
    }
}

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function openWhatsApp() {
    const phoneNumber = "your_phone_number"; // Replace with your number
    const message = "Hello! I need assistance."; // Predefined message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
