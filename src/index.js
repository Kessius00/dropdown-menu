//import styles
import './styles/reset.css';
import './styles/styles.scss';

class DropDownItem {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}
class DropDownClass {
    constructor(title) {
        this.title = title;
        this.items = [];
        this.selectedItem = null;
        this.addItem = function (name, link) {
            const item = new DropDownItem(name, link);
            // Check if item is already in the list
            if (this.items.includes(item)) {
                console.log('Item already exists');
                return;
            }
            this.items.push(item);
        };
    }
}

const dropDown = new DropDownClass('My Dropdown');
dropDown.addItem('Item 1', 'https://google.com/');
dropDown.addItem('Item 2', 'https://google.com/');
dropDown.addItem('Item 3', 'https://google.com/');

function makeDropDownElement(dropDown) {
    const dropDownContainer = document.createElement('div');
    dropDownContainer.classList.add('dropdown');

    // Create the button
    const dropDownBtn = document.createElement('button');
    dropDownBtn.classList.add('dropbtn');
    dropDownBtn.innerText = dropDown.title;

    // Create the dropdown content
    const dropDownContent = document.createElement('div');
    dropDownContent.classList.add('dropdown-content', 'dd-hidden');

    dropDown.items.forEach((item) => {
        const itemElement = document.createElement('a');
        itemElement.innerText = item.name;
        itemElement.href = item.link;
        itemElement.target = '_blank';
        itemElement.classList.add('dropdown-item');
        dropDownContent.appendChild(itemElement);
    });

    // Add event listeners to dropdown links
    dropDownBtn.addEventListener('mouseover', () => {
        if (dropDownBtn.classList.contains('dd-active')) {
            return;
        } else {
            dropDownContent.classList.remove('dd-hidden');
            dropDownContent.classList.add('dd-translucent');
        }

        dropDownBtn.addEventListener('mouseleave', () => {
            // if it hovers over the list, do not remove the list
            // HEREEE

            if (dropDownBtn.classList.contains('dd-active')) {
                return;
            } else {
                dropDownContent.classList.add('dd-hidden');
                dropDownContent.classList.remove('dd-translucent');
            }
        });
    });

    dropDownBtn.addEventListener('click', () => {
        if (dropDownContent.classList.contains('dd-translucent')) {
            dropDownContent.classList.remove('dd-translucent');
            dropDownBtn.classList.add('dd-active');
        } else {
            dropDownBtn.classList.remove('dd-active');
            dropDownContent.classList.add('dd-hidden');
        }
    });

    dropDownContainer.append(dropDownBtn, dropDownContent);
    return dropDownContainer;
}

const dropdown1 = makeDropDownElement(dropDown);

const content = document.querySelector('.content');
content.appendChild(dropdown1);
