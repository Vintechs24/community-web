// When an image is clicked, open it in a modal
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <img src="${this.src}" alt="${this.alt}" />
            </div>
        `;
        document.body.appendChild(modal);

        // Close the modal when clicking the close button
        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.remove();
        });

        // Close modal when clicking anywhere outside the modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});
