class pixel {
    constructor(color_code) {
        if (color_code === '000') {
            this.color = 'red';
        }
        if (color_code === '001') {
            this.color = 'white';
        }
        if (color_code === '010') {
            this.color = 'yellow';
        }
        if (color_code === '011') {
            this.color = 'blue';
        }
        if (color_code === '100') {
            this.color = 'black';
        }
        if (color_code === '110') {
            this.color = 'green';
        }
    }
}

class render {
    constructor() {
        this.table = document.getElementById('pixel_table');
    }

    render_table(pixels) {
        for (let i = 0; i < pixels.length; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < pixels[i].length; j++) {
                let cell = document.createElement('td');
                cell.style.backgroundColor = pixels[i][j].color;
                row.appendChild(cell);
            }
            this.table.appendChild(row);
        }
    }
}

render_obj = new render();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log('file content: ', urlParams.get('filecontent'));

if (urlParams.has('filecontent')) { // parsing file content from url
    const fileContent = urlParams.get('filecontent');
    const lines = fileContent.split('\n');
    const pixels = lines.map((line) => line.split(',').map((color) => new pixel(color.trim()))); 
    render_obj.render_table(pixels);
}