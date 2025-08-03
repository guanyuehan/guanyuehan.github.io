const fileInput = document.getElementById('csv_file');

if (fileInput) {
    fileInput.addEventListener('change', function(event) { 
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const contents = e.target.result;
                window.location.href = "/image.html?filecontent=" + encodeURIComponent(contents);
            };
            reader.readAsText(file);
        }
    });
}