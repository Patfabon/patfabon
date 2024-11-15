// Function to show the resume modal
function showResume() {
    document.getElementById('resumeModal').style.display = 'flex';
}

// Function to close the resume modal
function closeResume() {
    document.getElementById('resumeModal').style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    let modal = document.getElementById('resumeModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
