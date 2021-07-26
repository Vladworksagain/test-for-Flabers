function tabs(evt, id) {
    let i,
        tabcontent,
        tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
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
