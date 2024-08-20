document.getElementById('add-to-calendar').addEventListener('click', function() {
    const event = {
        title: 'BIENESTAR FÍSICO Y ECONÓMICO',
        location: '',  // Add location if available
        description: 'Event organized by María Sánchez Barrera',
        startDate: '20240811T210000Z',  // Start date in UTC format
        endDate: '20240812T230000Z'  // End date in UTC format
    };
    
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(url, '_blank');
});

document.getElementById('share').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'BIENESTAR FÍSICO Y ECONÓMICO',
            text: 'Check out this event!',
            url: window.location.href,
        })
        .catch((error) => console.error('Error sharing', error));
    } else {
        // Fallback
        alert('Your browser does not support the Web Share API');
    }
});
