document.addEventListener("DOMContentLoaded", function () {
    // Select all kit buttons
    const kitButtons = document.querySelectorAll(".kit-button");
    const kitInfoPanel = document.getElementById("kit-info");
    const kitTitle = document.getElementById("kit-title");
    const kitDescription = document.getElementById("kit-description");
    const kitLink = document.getElementById("kit-link");

    // Kit data (you can modify this as needed)
    const kits = {
        "kit1": { title: "Warrior Kit", description: "A powerful melee kit.", link: "https://example.com/warrior" },
        "kit2": { title: "Archer Kit", description: "A long-range bow kit.", link: "https://example.com/archer" },
        "kit3": { title: "Mage Kit", description: "A magic-based spell kit.", link: "https://example.com/mage" }
    };

    // Click event for each kit button
    kitButtons.forEach(button => {
        button.addEventListener("click", function () {
            const kitId = this.dataset.kit; // Get the kit ID from data attribute

            if (kits[kitId]) {
                // Update UI with kit info
                kitTitle.textContent = kits[kitId].title;
                kitDescription.textContent = kits[kitId].description;
                kitLink.href = kits[kitId].link;
                kitLink.textContent = "More Info";

                // Show the kit info panel
                kitInfoPanel.style.display = "block";
            }
        });
    });
});
