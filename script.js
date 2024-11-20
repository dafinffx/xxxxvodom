// Disable Right-Click (Context Menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert("Right-click is disabled.");
});

// Disable F12, Ctrl+Shift+I, Ctrl+S, and other developer tools shortcuts
document.onkeydown = function(e) {
    // Disable F12 (DevTools)
    if (e.keyCode == 123 || 
        // Disable Ctrl+Shift+I (DevTools)
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
        // Disable Ctrl+S (Save Page)
        (e.ctrlKey && e.keyCode == 83)) {
        e.preventDefault();
        alert("This action is disabled.");
        return false;
    }
};

// Prevent Copy (Ctrl+C) and other copy events
document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert("Copying is disabled!");
});

// Detect if Developer Tools is open
(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            alert('You are trying to inspect the page!');
        }
    });
    console.log(element);
})();
