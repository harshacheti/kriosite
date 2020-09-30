$(document).ready(function(){

    let i = 0;

    //var bannerRef = firebase.database().ref('banner');
    

    var bannerStorageRef = firebase.storage().ref();

    bannerStorageRef.child('Site-Banner/').listAll().then(function(result){

        result.items.forEach(function(imageRef){
            console.log(imageRef.toString())
            imageRef.getDownloadURL().then(function(downloadURL){
                i++;
                var active = i==1? "active" : "";
                $('<div class="item '+active+'"><img src="'+ downloadURL+'"></div>')
                .appendTo('.carousel-inner');
                $('<li data-target="#myCarousel" data-slide-to="'+i+'" ></li>').
                appendTo('.carousel-indicators');
            })
            $('#myCarousel').carousel();
        })
    })
})