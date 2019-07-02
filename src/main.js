const getImageButton = document.querySelector("#getImageButton");
const image = document.querySelector("#image");
const loaderPath = 'assets/images/loader.gif';

const init = () => {
    reloadImage();
};

const showLoader = () => {
    image.setAttribute('src', loaderPath);
};

const reloadImage = () => {
    showLoader();
    axios.get('https://inspirobot.me/api?generate=true')
        .then(function (response) {
            const imageUrl = response.data;
            image.setAttribute('src', imageUrl);
        });
};

getImageButton.addEventListener('click', (event) => {
    reloadImage();
});

window.addEventListener('load', init);
