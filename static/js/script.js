const container = document.getElementById('container');

for (let x = 0; x <= 400; x++){
    const div = document.createElement('div');
    div.className = 'box-background';

    container.appendChild(div);
}