<script>
document.addEventListener('DOMContentLoaded', () => {
    const scholarships = [
        { title: 'Merit-based Scholarship', description: 'For students with high academic performance.' },
        { title: 'Need-based Scholarship', description: 'For students with financial need.' },
        { title: 'Sports Scholarship', description: 'For students with exceptional sports achievements.' },
        { title: 'International Scholarship', description: 'For students studying abroad.' }
    ];

    const scholarshipList = document.getElementById('scholarship-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const displayScholarships = (filter = '') => {
        scholarshipList.innerHTML = '';
        const filteredScholarships = scholarships.filter(scholarship => 
            scholarship.title.toLowerCase().includes(filter.toLowerCase())
        );
        filteredScholarships.forEach(scholarship => {
            const scholarshipItem = document.createElement('div');
            scholarshipItem.classList.add('scholarship-item');
            scholarshipItem.innerHTML = `
                <h3>${scholarship.title}</h3>
                <p>${scholarship.description}</p>
            `;
            scholarshipList.appendChild(scholarshipItem);
        });
    };

    searchButton.addEventListener('click', () => {
        const filter = searchInput.value;
        displayScholarships(filter);
    });

    displayScholarships();  // Display all scholarships initially
});
</script>
