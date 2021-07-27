let index

function tabs(evt, id) {
    let i,
        tabcontent,
        tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('active')
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(id).style.display = "block";
    document.getElementById(id).classList.add('active')
    evt.currentTarget.className += " active";



    // window.addEventListener('resize', () => {
    //     const width = window.innerWidth;
    //     const tab = document.querySelectorAll('.tablinks')
    //     tab.forEach((tabs) => {
    //         if(width <= 868 && !tabs.classList.contains('active')) {
    //             tabs.style.display = 'none';
    //         }
    //     })
    // })

    index = id
}

const buttonNext = document.querySelectorAll('.feedback-content__btn-next');

buttonNext.forEach((buttonNextStep) => {
    buttonNextStep.addEventListener('click', nextStep);
})

function nextStep(e) {
    e.preventDefault()
    const element = document.getElementById(Number(index) + 1)
}


document.querySelector('.tablinks').click()

var element = document.getElementById('inputMask');
var phoneMask = IMask(element, {
    mask: '+{3} 8(0) 000-00-00-00',
    lazy: false,
    placeholderChar: '_',
});




let map;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        disableDefaultUI: true,
        zoomControl: true,
    });

    map.setCenter({lat: 50.4279196877749, lng: 30.500332326549188});
    new google.maps.Marker({position:
            {
                lat: 50.4279196877749,
                lng: 30.500332326549188
            },
            map: map,
    });
}
