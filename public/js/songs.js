'USE STRICT';

// SONGS UI CONTROLLER
const SONGS_UI_CONTROLLER = (function () {
    const DOMstrings = {
        holder: '#songs-holder',
        song: '.song',
        player: '.player',
        songName: '#name',
        artistName: '#artist',
        audioPlayer: '#audio-player'
    };

    return {
        getUIDOMStrings: function() {
            return DOMstrings;
        },

        getSongComponent: function(cover, songName, artistName) {
            return `
            <div class="w3-quarter w3-animate-opacity song" data-url="${artistName}/${songName}">
                <div class="w3-display-container w3-opacity-min w3-hover-opacity-off" style="transition:0.5s;width:100%"  data-url="${artistName}/${songName}">
                    <img src="${cover}" class="w3-round-xlarge" alt="${songName}" style="width:100%"  data-url="${artistName}/${songName}">
                    <!-- <div class="w3-display-topleft w3-display-hover w3-large">
                    <button type="button" class="w3-white w3-animate-opacity w3-btn w3-margin w3-round" title="Save"><i class="fa fa-heart w3-text-red"></i></button>
                    </div> 
                    <div class="w3-display-topleft w3-display-hover w3-large" style="left:65px">
                    <button type="button" class="w3-white w3-animate-opacity w3-btn w3-margin w3-round" title="Share"><i class="fa fa-paper-plane w3-text-grey"></i></button>
                    </div>
                    <div class="w3-display-topright w3-display-hover w3-large">
                    <button type="button" class="w3-white w3-animate-opacity w3-btn w3-margin w3-round" title="Shopping Cart"><i class="fa fa-shopping-cart w3-text-grey"></i></button>
                    </div> -->
                    <div class="w3-display-bottomleft w3-display-hover w3-large"  data-url="${artistName}/${songName}">
                        <div class="w3-padding w3-animate-opacity w3-text-black w3-white w3-round-xlarge" style="width:inherit; margin-bottom:10px"  data-url="${artistName}/${songName}">
                            ${songName}
                            <br/>
                            <span class="w3-text-grey">${artistName}</span>
                        </div>
                    </div>
                    <!-- <div class="w3-display-middle w3-display-hover w3-large">
                    <button type="button" class="w3-green w3-animate-opacity w3-btn w3-round">Shop Now</button>
                    </div> -->
                </div>
            </div>
            `;
        }
    }
})();

// SONGS MODAL CONTROLLER
var SONGS_MODAL_CONTROLLER = (function(UICtrl) {
 
    var DOM = UICtrl.getUIDOMStrings();
    var source = COMMON_UI_CONTROLLER;

    var player = null;

    function getAPIData() {
        API_CONTROLLER.getSongs()
        .then(response => response.json())
        .then(result => {
            populateData(result.songs);
        })
        .catch(err => {
            alert(err.message);
        });
    }

    function populateData(data) {
        data.forEach(song => {
            source.getQS(DOM.holder).innerHTML += UICtrl.getSongComponent(song.cover, song.name, song.artist);
        });
        setupEventListeners();
    }

    var setupEventListeners = function() {
        source.getQSA(DOM.song)
        .forEach(el => {
            el.addEventListener('click', (e) => {
                var song = e.target.getAttribute('data-url');
                var src = '/assets/music/' + song + '.mp3';
                if(!player) {
                    player = source.getQS(DOM.player);
                    player.style.visibility = 'visible';
                }

                source.getQS(DOM.artistName).innerHTML = song.split('/')[0];
                source.getQS(DOM.songName).innerHTML = song.split('/')[1];

                source.getQS(DOM.audioPlayer).setAttribute('src', src);
                source.getQS(DOM.audioPlayer).play();
            });
        });
    };
 
    return {
        init: function() {
            getAPIData();
        }
    };
 
})(SONGS_UI_CONTROLLER);
 
window.addEventListener('load', function () {
    SONGS_MODAL_CONTROLLER.init(); 
});