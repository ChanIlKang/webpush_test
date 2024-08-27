self.addEventListener('push', function(event) {
    let data = {};

    if (event.data) {
        data = event.data.json();
    } else {
        data = {
            title: 'Default title',
            body: 'Default body'
        };
    }

    const options = {
        body: data.body,
        icon: 'assets/logo.svg', // 알림 아이콘 경로
        badge: 'assets/logo.svg' // 배지 아이콘 경로
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
