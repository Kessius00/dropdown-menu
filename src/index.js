//import styles
import './styles/reset.css';
import './styles/styles.scss';

console.log('Hello World!');

// Select elements
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Add event listeners to dropdown links
dropdownBtn.addEventListener('mouseover', () => {
    if (dropdownBtn.classList.contains('active')) {
        return;
    } else {
        dropdownContent.classList.remove('hidden');
        dropdownContent.classList.add('translucent');
    }

    dropdownBtn.addEventListener('mouseleave', () => {
        if (dropdownBtn.classList.contains('active')) {
            return;
        } else {
            dropdownContent.classList.add('hidden');
            dropdownContent.classList.remove('translucent');
        }
    });
});

dropdownBtn.addEventListener('click', () => {
    if (dropdownContent.classList.contains('translucent')) {
        dropdownContent.classList.remove('translucent');
        dropdownBtn.classList.add('active');
    } else {
        dropdownBtn.classList.remove('active');
        dropdownContent.classList.add('hidden');
    }
});
