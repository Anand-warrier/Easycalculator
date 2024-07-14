document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.id;

            if (buttonValue === 'clear') {
                display.textContent = '0';
            } else if (buttonValue === 'equals') {
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = button.innerText;
                } else {
                    display.textContent += button.innerText;
                }
            }
        });
    });
});
