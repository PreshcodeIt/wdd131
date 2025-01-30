document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("year").textContent = new Date().getFullYear();
            document.getElementById("lastModified").textContent = document.lastModified;
            
            const temperature = 10; // Static value for now
            const windSpeed = 5; // Static value for now
            
            document.getElementById("temperature").textContent = temperature;
            document.getElementById("windSpeed").textContent = windSpeed;
            document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);
        });

        function calculateWindChill(temp, windSpeed) {
            if (temp <= 10 && windSpeed > 4.8) {
                return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
            } else {
                return "N/A";
            }
        }