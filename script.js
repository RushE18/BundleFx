body {
    font-family: Arial, sans-serif;
    margin: 20;
    padding: 0;
    background-color: #0d1117;
    color: #c9d1d9;
}

#progressBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 4px;
    background-color: #58a6ff;
    z-index: 1000;
}

.vertical-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.page {
    width: calc(100% - 40px); /* Keeps it within the viewport */
    max-width: 800px;
    text-align: center;
    background-color: #161b22;
    padding: 30px;
    margin: 20px auto; /* Centers the page */
    box-shadow: 0 0 15px rgba(88, 166, 255, 0.3);
    border-radius: 30px;
    transition: transform 0.3s;
    overflow: hidden; /* Prevents content overflow */
}


.page:hover {
    transform: scale(1.02);
}

.page img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 5px 15px rgba(105, 67, 67, 0.5);
}

.button {
    display: inline-block;
    padding: 15px 40px;
    margin-top: 20px;
    background-color: #0077ff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.3s;
}

.button:hover {
    background-color: #1f6feb;
    transform: scale(1.05);
}

.countdown-frame {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 25px;
}

.countdown-segment {
    background-color: #58a6ff;
    color: #ffffff;
    padding: 5px 15px;
    border-radius: 15px;
    width: 60px;
    text-align: center;
    font-weight: bold;
}

.countdown-segment .value {
    font-size: 38px;
    font-weight: bold;
}

.countdown-segment span.label {
    font-size: 15px;
    color: #ffffff;
}

.bundle-details h2 {
    color: #58a6ff;
    font-size: 28px;
    margin-bottom: 10px;
}

.bundle-details h3 {
    color: #8b949e;
    font-size: 20px;
    margin-bottom: 20px;
}

.bundle-details p {
    color: #8b949e;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 30px;
}

.bundle-details ul {
    text-align: left;
    margin: 20px 0;
    padding-left: 20px;
}

.bundle-details ul li {
    margin-bottom: 10px;
    padding-left: 5px;
    position: relative;
    color: #c9d1d9;
}

.bundle-details ul li::before {
    content: "•";
    position: absolute;
    left: -15px;
    color: #58a6ff;
}

.footer {
    text-align: center; /* Centers the text */
    padding: 10px; /* Reduce padding for a smaller appearance */
    background-color: #161b22; /* Footer background color */
    color: #8b949e; /* Text color */
    font-size: 14px; /* Text size */
    border-top: 1px solid #58a6ff; /* Smaller border on top */
    margin-top: 20px;
    max-width: 400px; /* Restrict the width */
    margin-left: auto; /* Center horizontally */
    margin-right: auto;
    border-radius: 5px; /* Optional: rounded corners */
}


.box-link {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Keep the color of text inside the box */
    width: 48%; /* Ensure the link width matches the box width */
}

.horizontal-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    margin-top: 30px;
}

.box-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box img {
    width: 100%;  /* Control the width of the image */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Ensures image covers the box without distortion */
    border-radius: 5px; /* Optional: rounded corners for the image */
    border-radius: 20px;
}

.box:hover {
    transform: scale(1.032); /* Adds a hover effect */
    background-color: #3a4049; /* Slightly changes color on hover */
}

.product-name {
    margin-top: 10px;
    text-align: center;
    color: #ffffff;
    font-size: 22px;
    font-weight: bold;
}
.page-title {
    text-align: center; /* Center the title */
    margin: 20px auto; /* Add space around the title */
    padding: 10px; /* Add padding inside the border */
    border: 2px solid #58a6ff; /* Blue border */
    border-radius: 10px; /* Rounded corners */
    background-color: #161b22; /* Background color */
    width: 80%; /* Adjust width as needed */
    max-width: 600px; /* Prevent it from becoming too wide */
}

.page-title h1 {
    font-size: 2.5rem; /* Large font size for the title */
    color: #fafafa; /* Text color */
    margin: 0; /* Remove default margin */
}

