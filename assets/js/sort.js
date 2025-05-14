document.addEventListener('DOMContentLoaded', () => {
    const sortButton = document.getElementById('sortButton');
    const nameList = document.getElementById('nameList');

    sortButton.addEventListener('click', () => {
        const names = Array.from(nameList.children).map(li => li.textContent);
        names.sort((a, b) => a.localeCompare(b));
        nameList.innerHTML = '';
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            nameList.appendChild(li);
        });
    });
});