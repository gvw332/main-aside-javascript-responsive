const listItems = document.querySelectorAll('#my-list li');
const items = document.querySelectorAll('.item');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', function () {
        const target = this.querySelector('a').getAttribute('data-target');
        for (let j = 0; j < items.length; j++) {
            items[j].style.display = 'none';
        }
        document.getElementById(target).style.display = 'block';
    });
}