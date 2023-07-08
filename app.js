function GetAds() {
    return [
        {
            id: 1,
            name: 'Carolina',
            title: 'Booty Goddness addictive',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis leo sed augue iaculis malesuada at eu nulla.',
            price: '200',
            n_videos: 3,
            n_photos: 2,
            location: 'San Borja, Lima',
            isVerified: true,
            edad: 20,
            photos: [
                'peru.jpg',
                'grl1.jpeg'
            ]
        },
        {
            id: 2,
            name: 'Clarita',
            title: 'Olorem ipsum quia dolor sit amet',
            description: 'Mauris varius, libero ut ultrices pellentesque, ex leo hendrerit nulla, at volutpat purus nibh non metus.',
            price: '150',
            n_videos: 4,
            n_photos: 5,
            location: 'El Agustino, Lima',
            isVerified: false,
            edad: 18,
            photos: [
                'grl1.jpeg',
                'peru.jpg'
            ]
        }
    ];
}

class Ad {

    constructor(id, name, title, description, price, location, isVerified, photos, n_videos, n_photos, edad) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.isVerified = isVerified;
        this.photos = photos;
        this.n_videos = n_videos;
        this.n_photos = n_photos;
        this.edad = edad;
        this.elementId = 'card-' + this.id;
        this.intervalId = null;
    }

    render() {
        var images = '';
        this.photos.forEach((photo, index) => {
            images += `<img src="${photo}" class="${(index == 0 ? 'active' : '')}" alt="${photo}">`;
        });
        var template = `
        <div class="card ${this.elementId}">
            <div class="ribbon-container">
                <span class="ribbon-vip">VIP</span>
                <span class="ribbon-verificada">VERIFICADA</span>
            </div>
            <div class="card-image">
                ${images}
            </div>
            <div class="card-content">
                <h2 class="card-title">${this.name}</h2>
                <p class="card-description">${this.description.length > 80 ? this.description.substring(0, 80) + '...' : this.description}</p>
                <button class="card-button">S/. ${this.price}</button>
            </div>
        </div>`;
        return template;
    }

    startAnimation() {
        let currentImageIndex = 1;
        this.intervalId = setInterval(() => {
            const images = document.querySelectorAll(`.${this.elementId} img`);
            images.forEach((image, index) => {
                if (index === currentImageIndex) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 2500);
    }
}

function displayAds() {
    const ads = GetAds();
    const cardsElement = document.querySelector('.container');

    ads.forEach(ad => {
        var adObj = new Ad(ad.id, ad.name, ad.title, ad.description, ad.price, ad.location, ad.isVerified, ad.photos, 
            ad.n_videos, ad.n_photos, ad.edad);
        cardsElement.innerHTML += adObj.render();
        adObj.startAnimation();
    });
}

displayAds();