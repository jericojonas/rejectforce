function processButtons() {
    let forceBtns = document.querySelectorAll(".btn-danger.reject[onclick^='openAlertRejectedForce']");
    let yesBtn = document.querySelector(".swal-button.swal-button--confirm.swal-button--danger");

    // Assuming you want to select the "next" button based on the text content
    let nextBtn = [...document.querySelectorAll(".cursor-pointer.color-paging")]
        .find(btn => btn.textContent.trim().toLowerCase() === 'next');

    if (yesBtn !== null) {
        yesBtn.click();
    } else {
        console.error("Yes button not found.");
    }

    // Loop through each "Reject Force" button
    for (const forceBtn of forceBtns) {
        forceBtn.click();

        // Assuming you want to click the "Yes" button for each "Reject Force" button
        if (yesBtn !== null) {
            yesBtn.click();
        } else {
            console.error("Yes button not found.");
        }
    }

    // Wait for 15 seconds before clicking the next button
    setTimeout(() => {
        if (nextBtn !== null) {
            nextBtn.click();

            // Add a 2-second delay after clicking the "Next" button
            setTimeout(() => {
                // Recursive call to continue processing buttons
                processButtons();
            }, 2000); // 2 seconds delay (2,000 milliseconds)
        } else {
            console.error("Next button not found.");
        }
    }, 15000);  // 15 seconds delay (15,000 milliseconds)
}

// Start the process
processButtons();
