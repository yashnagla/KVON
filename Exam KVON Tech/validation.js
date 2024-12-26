document.addEventListener('keydown', function(event) {
            if (event.keyCode === 123) {
                event.preventDefault();
            }
            
            // Disable F5 (Refresh)
            if (event.keyCode === 116) {
                event.preventDefault();
            }

            // Disable Tab key
            if (event.key === "Tab") {
                event.preventDefault();
            }

            // Disable Escape key
            if (event.key === "Escape") {
                event.preventDefault();
            }

            // Disable Alt key
            if (event.altKey) {
                event.preventDefault();
            }

            // Disable Meta (Windows/Command) key
            if (event.metaKey) {
                event.preventDefault();
            }

            // Disable Right-click Context Menu (using `contextmenu` key)
            if (event.key === "ContextMenu") {
                event.preventDefault();
            }

            // Disable Ctrl + R (Refresh)
            if (event.ctrlKey && event.key === "r") {
                event.preventDefault();
            }

            // Disable Ctrl + L (Focus address bar in browsers)
            if (event.ctrlKey && event.key === "l") {
                event.preventDefault();
            }
            
            // Disable Windows key
            if (event.key === "Meta" || event.keyCode === 91 || event.keyCode === 92) {
                event.preventDefault();
            }
        });
        // Disable Right Click
        document.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });

        let tabSwitchCount = 0;
        const maxTabSwitches = 1; // Set the maximum number of allowed tab switches

        // Function to handle tab visibility change
        function handleVisibilityChange() {
            if (document.hidden) {
                // Tab is not active (user switched to another tab)
                tabSwitchCount++;

                // Alert when the user switches to another tab for the first time
                if (tabSwitchCount === 1) {
                    alert("You have switched tabs. If you switch again, the quiz will close.");
                }
            }

            // Check if the user has switched tabs more than the allowed limit
            if (tabSwitchCount > maxTabSwitches) {
                // Close the quiz and redirect to the leaderboard page
                alert("You have switched tabs multiple times. The quiz is now closed.");
                window.location.href = "/leaderboard.html"; // Change this to the actual leaderboard URL
            }
        }

        // Listen for the visibility change event
        document.addEventListener("visibilitychange", handleVisibilityChange);


        // Listen for the visibility change event
        document.addEventListener("visibilitychange", handleVisibilityChange);