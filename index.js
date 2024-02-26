document.addEventListener("DOMContentLoaded", () => {
    // lists all function of the modals
    const forgotPasswordModalBtn = document.getElementById("forgot-password");
    const forgotPasswordModal = document.getElementById("forgot-password-modal");
    const signupModalBtn = document.getElementById("signup");
    const signupModal = document.getElementById("signup-modal");

    // Open modal
    function openForgotPasswordModal() {
        forgotPasswordModal.style.display = "flex";
    }
    function openSignupModal() {
        signupModal.style.display = "flex";
    }

    // close modal 
    function closeModal(modal) {
        modal.style.display = "none";
    }
  
    // event listerner to open modal 
    forgotPasswordModalBtn.addEventListener("click", openForgotPasswordModal);
    signupModalBtn.addEventListener("click", openSignupModal);

    // event listener for close button 
    forgotPasswordModal.querySelector(".close").addEventListener("click", () => {
        closeModal(forgotPasswordModal);
    });
    signupModal.querySelector(".close").addEventListener("click", () => {
        closeModal(signupModal);
    })

    // event listener to close the modal when user click outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === forgotPasswordModal) {
            closeModal(forgotPasswordModal);
        }
        if (event.target === signupModal) {
            closeModal(signupModal);
        }
    });
});

