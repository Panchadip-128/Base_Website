var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

// Customizations
Tawk_API.onLoad = function() {
    Tawk_API.setAttributes({
        'position': 'bottom-right', // Change position to bottom-right
        'color': '#1e90ff', // Change widget color
        'customAttribute': 'customValue' // Add custom attribute
    }, function(error) {});
};

(function() {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/615f64df157d100a41ab54f3/1fhea43dh';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();