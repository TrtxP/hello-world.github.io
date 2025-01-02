        let isLightTheme = false;

        function changeTheme() {
            const darkTheme = {
                background: 'linear-gradient(135deg, #6B8E23, #008080)',
                color: '#ffffff'
            };

            const lightTheme = {
                background: '#006400',
                color: '#000000'
            };

            const newTheme = isLightTheme ? darkTheme : lightTheme;

            document.body.style.background = newTheme.background;
            document.body.style.color = newTheme.color;

            isLightTheme = !isLightTheme;
        }

        // Function to show a random message
        function showMessage() {
            const messages = [
                "You're awesome!",
                "Keep up the great work!",
                "Coding is fun!",
                "Have a fantastic day!",
                "Stay positive and code on!"
            ];
            const randomIndex = Math.floor(Math.random() * messages.length);
            alert(messages[randomIndex]);
        }