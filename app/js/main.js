new window.JustValidate('.just-validate', {
    rules: {
        name: {
            required: true,
            minLength: 3,
            maxLength: 15
        },
        text: {
            required: true,
            minLength: 3,
            maxLength: 15
        },
        myField: {
            required: true,
            maxLength: 19,
            minLength: 18
        }
    },

    submitHandler: () => {
        rules = true
    },
    invalidFormCallback: () => {
        rules = false
    },

});

let rules = false
let step = 1
const tabTitles = document.querySelectorAll(".tablinks")
const tabContent = document.querySelectorAll(".tabcontent")
const buttonNext = document.querySelectorAll('.feedback-content__btn-next');
const buttonBack = document.querySelectorAll('.feedback-content__btn-back');
const element = document.getElementById('inputMask');
const element2 = document.getElementById('doubleInput');

const setActiveStep = (title) => {
    tabContent.forEach(content => {
        if (title.dataset.id === content.dataset.content) {
            tabTitles.forEach(titlesToRemove => {
                titlesToRemove.classList.remove('active')
            })
            title.classList.add('active')
            content.classList.add('active')
        } else {
            content.classList.remove('active')
        }
    })
}


const setStep = () => {
    tabTitles.forEach(title => {
        if (Number(title.dataset.id) === step) {
            setActiveStep(title)
        }
    })
}

const nextStep = () => {

    console.log('nextStep')
    if(element2.classList.contains('js-validate-error-field')) {
        element.style.border = '1px solid red'
    } else {
        element.style.border = '2px solid #d4d9dd'
    }


    if (rules) {
        step = step + 1
        setStep()
    }

}
const prevStep = () => {
    step = step - 1
    rules = false
    setStep()

}

(function () {
    setActiveStep(tabTitles[0])

    buttonNext.forEach((buttonNextStep) => {
        buttonNextStep.addEventListener('click', function (e) {
            setTimeout(() => {
                nextStep()
            }, 100)
        })
    })
    buttonBack.forEach((buttonPrevStep) => {
        buttonPrevStep.addEventListener('click', function (e) {
            e.preventDefault()
            prevStep()
        })
    })
}())

element.addEventListener('keypress', (e) => {

    element2.value = e.target.value.split('_').join('')
    console.log(e.target.value.split('_').join('').length)
    console.log(element2.value.length)
})

var phoneMask = IMask(element, {
    mask: '+{3} 8(000) 000-00-00',
    lazy: false,
    placeholderChar: '_',
});


let map;

function initMap() {

    let mapWrap = document.getElementById("map")

    if (mapWrap) {
        map = new google.maps.Map(mapWrap, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
            disableDefaultUI: true,
            zoomControl: true,
        });

        map.setCenter({lat: 50.4279196877749, lng: 30.500332326549188});
        new google.maps.Marker({
            position:
                {
                    lat: 50.4279196877749,
                    lng: 30.500332326549188
                },
            map: map,
        });
    }


}



