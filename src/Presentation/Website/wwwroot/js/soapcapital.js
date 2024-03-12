document.addEventListener('DOMContentLoaded', function() {
    // Function to check for invalid controls and disable submit buttons if necessary
    function checkAndDisableSubmitButtons() {
        const submitButtons = document.querySelectorAll('button[type="submit"]:not(.dont-disable)');
        const invalidElements = document.querySelectorAll('.invalid');
        if (invalidElements.length === 0) {
            submitButtons.forEach(button => {
                button.disabled = true; // Disable the submit button if there are no invalid elements
            });
        }
    }

    // Attach event listener to form submission event
    document.addEventListener('submit', function(event) {
        const form = event.target;

        // If the form is submitted
        if (event.target.tagName.toLowerCase() === 'form') {
            const invalidElements = document.querySelectorAll('.invalid');
            invalidElements.forEach(element => {
                element.classList.remove('invalid');
            });


            // Check for invalid elements and disable submit buttons if necessary
            checkAndDisableSubmitButtons();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function removeInvalidClassOnChange() {
        const elements = document.querySelectorAll('input, select, textarea');

        elements.forEach(element => {
            element.addEventListener('change', function() {
                if (this.value.length > 0 && this.classList.contains('invalid')) {
                    this.classList.remove('invalid');
                }
            });
        });
    }

    // Call the function to set up event listeners
    removeInvalidClassOnChange();
});


window.onscroll = function () {
    parallaxScroll();
    adjustNavbar();
};

window.onload = function() {
    adjustNavbar();
}

const parallaxScroll = function()
{
    let elements = document.querySelectorAll(".has-parallax-scroll");
    let scrollPosition = window.scrollY + window.innerHeight;

    elements.forEach(function(element) {
        let position = element.offsetTop;

        if (scrollPosition > position) {
            element.classList.add("fade-in");
        }
    });
}

const adjustNavbar = function () {
    let scrollTop = window.scrollY;
    let appbar = document.getElementsByClassName('mud-appbar')[0];
    
    if (!appbar.classList.contains('no-transparency'))
    {
        if (scrollTop > 56) {
            appbar.classList.remove("transparent-app-bar");
        }
        else {
            appbar.classList.add("transparent-app-bar");
        }   
    }
}