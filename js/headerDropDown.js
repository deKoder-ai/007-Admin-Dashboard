const DropdownMenu = {
    body: document.querySelector('body'),
    dropdownBtn: document.getElementById('burger-menu-btn'),
    dropdownContent: document.getElementById('header-dropdown-content'),
    toggle: false,
    btnClicked: function() {
        console.log(`${this.dropdownButton} clicked`);
        return `${this.dropdownButton} clicked`;
    },
    toggleMenu: function() {
        if (this.toggle === false) {
            this.dropdownContent.style.display = 'block';
            this.toggle = true;
        } else {
            this.dropdownContent.style.display = 'none';
            this.toggle = false;
        }
        return this.toggle;
    }
}

DropdownMenu.body.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        // add new task to the break task list
        case 'burger-menu-btn':
            DropdownMenu.toggleMenu();
            break;
        case '':
            if (DropdownMenu.toggle === true) {
                DropdownMenu.toggleMenu();
            }
            break;
    }
});

