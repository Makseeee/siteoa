// script.js
const btn = document.getElementById('btn');
let imageUrl = null; // export the imageUrl variable

btn.addEventListener('click', function() {
  if (!imageUrl) {
    function fetchImage() {
      const url = document.getElementById("urlInput").value;
      fetch(url)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const images = doc.querySelectorAll("img");
          for (let i = 0; i < images.length; i++) {
            const currentUrl = images[i].src;
            if (currentUrl.includes("product")) {
              imageUrl = currentUrl;
              console.log(imageUrl);
              break;
            }
          }
          if (imageUrl) {
            // if imageUrl is found, call the ah.js script
            const script = document.createElement("script");
            script.type = "module";
            script.src = "ah.js";
            document.head.appendChild(script);
          }
        });
    }
    fetchImage();
  }
});

export { imageUrl }; // export the imageUrl variable
