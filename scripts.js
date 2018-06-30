function Obiekt(nazwa, promien, masa, dlDnia, dlRoku, silaCiezkosci, iloscKsiezycy, odlegloscOdSlonca, tempMin, tempMax, opis, odlegloscOdSloncaPrezentacja) {
    this.nazwa = nazwa;
    this.promien = promien;
    this.masa = masa;
    this.dlDnia = dlDnia;
    this.dlRoku = dlRoku;
    this.silaCiezkosci = silaCiezkosci;
    this.iloscKsiezycy = iloscKsiezycy;
    this.odlegloscOdSlonca = odlegloscOdSlonca;
    this.tempMin = tempMin;
    this.tempMax = tempMax;
    this.opis = opis;
    this.odlegloscOdSloncaPrezentacja = odlegloscOdSloncaPrezentacja
}

var przewodnik = {
    cialaNiebieskie: {
        neptune: new Obiekt(
            "Neptun",
            24622,
            1.024e+26,
            16.11,
            60233.353,
            11.15,
            13,
            4495000000,
            -239,
            -226,
            "Gazowy olbrzym, ósma, najdalsza od Słońca planeta w Układzie Słonecznym. Nazwa planety pochodzi od rzymskiego boga mórz Neptuna. Wśród planet Układu Słonecznego jest czwartą pod względem średnicy i trzecią pod względem masy.",
            630
        ),
        uranus: new Obiekt(
            "Uran",
            25362,
            8.681e+25,
            17.24,
            30707.49,
            8.87,
            27,
            2871000000,
            -214,
            -210,
            "Gazowy olbrzym, siódma w kolejności od Słońca planeta Układu Słonecznego. Jest także trzecią pod względem wielkości i czwartą pod względem masy planetą naszego systemu.",
            520
        ),
        saturn: new Obiekt(
            "Saturn",
            58232,
            5.683e+26,
            10.6561,
            10756.2,
            10.44,
            62,
            1433000000,
            -191,
            -73,
            "Gazowy olbrzym, szósta planeta Układu Słonecznego pod względem odległości od Słońca, druga po Jowiszu pod względem masy i wielkości.",
            440
        ),
        jupiter: new Obiekt(
            "Jowisz",
            69911,
            1.898e+27,
            9.925,
            4331.287,
            24.79,
            69,
            778500000,
            -129,
            -118,
            "Piąta w kolejności oddalenia od Słońca i największa planeta Układu Słonecznego. Jego masa jest nieco mniejsza niż jedna tysięczna masy Słońca, a zarazem dwa i pół razy większa niż łączna masa wszystkich innych planet w Układzie Słonecznym.",
            340
        ),
        asteroidsBelt: new Obiekt(
            "Pas planetoid",
            "n/d",
            "n/d",
            "n/d",
            2191,
            "n/d",
            "n/d",
            "n/d",
            "n/d",
            "n/d",
            "Obszar Układu Słonecznego, znajdujący się między orbitami Marsa i Jowisza. Krąży w nim wiele ciał różnej wielkości, nazywanych planetoidami.",
            300
        ),
        mars: new Obiekt(
            "Mars",
            3390,
            6.417e+23,
            24.6231,
            686.960,
            3.711,
            2,
            227900000,
            -140,
            20,
            "Czwarta według oddalenia od Słońca planeta Układu Słonecznego. Nazwa planety pochodzi od imienia rzymskiego boga wojny – Marsa.",
            190
        ),
        earth: new Obiekt(
            "Ziemia",
            6371,
            5.972e+24,
            23.9408,
            365.256,
            9.81,
            1,
            149600000,
            -88,
            58,
            "Trzecia, licząc od Słońca, oraz piąta pod względem wielkości planeta Układu Słonecznego. Pod względem średnicy, masy i gęstości jest to największa planeta skalista Układu Słonecznego.",
            145
        ),
        venus: new Obiekt(
            "Wenus",
            6052,
            4.867e+24,
            5832.45,
            224.701,
            8.87,
            0,
            108200000,
            -45,
            500,
            "Druga pod względem odległości od Słońca planeta Układu Słonecznego. Jest trzecim pod względem jasności ciałem niebieskim widocznym na niebie, po Słońcu i Księżycu.",
            100
        ),
        mercury: new Obiekt(
            "Merkury",
            2440,
            3.285e+23,
            1407.4333,
            87.969,
            3.7,
            0,
            57909170,
            -183,
            427,
            "Najmniejsza i najbliższa Słońcu planeta Układu Słonecznego. Jako planeta wewnętrzna znajduje się dla ziemskiego obserwatora zawsze bardzo blisko Słońca, dlatego jest trudna do obserwacji.",
            70
        ),
        sun: new Obiekt(
            "Słońce",
            695508,
            1.989e+30,
            609.1167,
            "n/d",
            274,
            "n/d",
            "n/d",
            5505,
            5505,
            "Gwiazda centralna Układu Słonecznego, wokół której krąży Ziemia, inne planety tego układu, planety karłowate oraz małe ciała Układu Słonecznego.",
            -1
        )
    },

    sterowanieStrona: {
        rysujGwiazdy: function (ile) {
            var kanwas = document.getElementById("stars");
            var ctx = kanwas.getContext("2d");
            ctx.clearRect(0, 0, kanwas.width, kanwas.height);
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
            for (var i = 0; i < ile; i++) {
                ctx.fillStyle = "rgba(255,255,255," + (Math.random() * 0.7 + 0.3) + ")";
                ctx.fillRect(Math.floor(Math.random() * ctx.canvas.width), Math.floor(Math.random() * ctx.canvas.height), 1, 1);
            }
        },

        rysujPasAsteroid: function (ile, promienWew, promienZew) {
            var kanwas = document.getElementById("asteroidsBelt");
            var ctx = kanwas.getContext("2d");
            ctx.clearRect(0, 0, kanwas.width, kanwas.height);
            for (var i = 0; i < ile; i++) {
                var kat = Math.random() * 2 * Math.PI;
                var x = kanwas.width / 2 + (Math.random() * (promienZew - promienWew) + promienWew) * Math.cos(kat);
                var y = kanwas.height / 2 + (Math.random() * (promienZew - promienWew) + promienWew) * Math.sin(kat);
                ctx.fillStyle = "rgba(255,255,255," + (Math.random() * 0.7 + 0.3) + ")";
                ctx.fillRect(x, y, 1, 1);
            }
        },

        zmienSzybkoscObrotu: function (czasObieguZiemi) {
            for (index in przewodnik.cialaNiebieskie) {
                document.getElementById(index).style.animation = "orb " + (przewodnik.cialaNiebieskie[index].dlRoku / 365.256 * czasObieguZiemi) + "s linear infinite";
            }
        },

        zmienStatusAnimacji: function (status) {
            for (index in przewodnik.cialaNiebieskie) {
                document.getElementById(index).style.animationPlayState = status;
            }
        },

        skaluj: function () {
            var maxWymiar = Math.min(window.innerWidth, window.innerHeight) - 10;
            if (maxWymiar < 550) maxWymiar = 550;
            for (index in przewodnik.cialaNiebieskie) {
                if (przewodnik.cialaNiebieskie[index].odlegloscOdSloncaPrezentacja !== -1) {
                    var skala = przewodnik.cialaNiebieskie[index].odlegloscOdSloncaPrezentacja / przewodnik.cialaNiebieskie.neptune.odlegloscOdSloncaPrezentacja;
                    document.getElementById(index).style.width = Math.floor(skala * maxWymiar) + "px";
                    document.getElementById(index).style.height = Math.floor(skala * maxWymiar) + "px";
                    document.getElementById(index).style.marginLeft = -(Math.floor(skala * maxWymiar) / 2) + "px";
                    document.getElementById(index).style.marginTop = -(Math.floor(skala * maxWymiar) / 2) + "px";
                }
            }
        }
    },

    menuWysuwane: {
        otworz: function () {
            document.getElementById("menuWysuwane").style.width = "40%";
        },

        zamknij: function () {
            document.getElementById("menuWysuwane").style.width = "0";
        },

        wyswietl: function (index) {
            var kod = "";
            kod += "<h1>" + przewodnik.cialaNiebieskie[index].nazwa + "</h1>";
            if (przewodnik.cialaNiebieskie[index].promien !== "n/d") kod += "<p><span class='blue'>Promień:</span> " + przewodnik.cialaNiebieskie[index].promien.toExponential(3) + " km</p>";
            if (przewodnik.cialaNiebieskie[index].masa !== "n/d") kod += "<p><span class='blue'>Masa:</span> " + przewodnik.cialaNiebieskie[index].masa.toExponential(3) + " kg</p>";
            if (przewodnik.cialaNiebieskie[index].dlDnia !== "n/d") {
                var czas = "";
                var godz = przewodnik.cialaNiebieskie[index].dlDnia;

                if (Math.floor(godz / 24) > 0) czas += Math.floor(godz / 24) + " dni ";
                godz -= Math.floor(godz / 24) * 24
                czas += Math.floor(godz) + " godzin ";
                godz = godz - Math.floor(godz);
                czas += Math.floor(godz * 60) + " minut";

                kod += "<p><span class='blue'>Czas obrotu:</span> " + czas + "</p>";
            }

            if (przewodnik.cialaNiebieskie[index].dlRoku !== "n/d") {
                var czas = "";
                var lat = przewodnik.cialaNiebieskie[index].dlRoku;

                if (Math.floor(lat / 365) > 0) czas += Math.floor(lat / 365) + " lat ";
                lat -= Math.floor(lat / 365) * 365;
                czas += lat.toFixed(2) + " dni";

                kod += "<p><span class='blue'>Czas obiegu wokół słońca:</span> " + czas + "</p>";
            }

            if (przewodnik.cialaNiebieskie[index].silaCiezkosci !== "n/d") kod += "<p><span class='blue'>Siła ciężkości:</span> " + przewodnik.cialaNiebieskie[index].silaCiezkosci.toFixed(2) + " m/s<sup>2</sup></p>";
            if (przewodnik.cialaNiebieskie[index].iloscKsiezycy !== "n/d") kod += "<p><span class='blue'>Ilość naturalnych satelit:</span> " + przewodnik.cialaNiebieskie[index].iloscKsiezycy + "</p>";
            if (przewodnik.cialaNiebieskie[index].odlegloscOdSlonca !== "n/d") kod += "<p><span class='blue'>Odległość od słońca:</span> " + przewodnik.cialaNiebieskie[index].odlegloscOdSlonca.toExponential(3) + " km</p>";
            if (przewodnik.cialaNiebieskie[index].tempMin !== "n/d") kod += "<p><span class='blue'>Temperatura minimalna:</span> " + przewodnik.cialaNiebieskie[index].tempMin + "&#8451;</p>";
            if (przewodnik.cialaNiebieskie[index].tempMax !== "n/d") kod += "<p><span class='blue'>Temperatura maksymalna:</span> " + przewodnik.cialaNiebieskie[index].tempMax + "&#8451;</p>";
            if (przewodnik.cialaNiebieskie[index].opis !== "n/d") kod += "<p><span class='blue'>Krótki opis:</span> " + przewodnik.cialaNiebieskie[index].opis + "</p>";


            document.getElementById("informacjeBok").innerHTML = kod;
            this.otworz();
        }
    },

    muzyka: {
        utwor : new Audio("music/Sub Pub Music  The Mourning (feat. Nadia Duggin) [Epic Emotional Space Music].mp3"),

        inicjalizujMuzyke: function () {
            document.getElementById("sound").addEventListener("click", przewodnik.muzyka.start);
        },

        start: function () {
            document.getElementById("sound").innerHTML = "&#x1F50A;";
            document.getElementById("sound").removeEventListener("click", przewodnik.muzyka.start);
            document.getElementById("sound").addEventListener("click", przewodnik.muzyka.stop);
            przewodnik.muzyka.utwor.loop = true;
            przewodnik.muzyka.utwor.play();
        },

        stop: function () {
            document.getElementById("sound").innerHTML = "&#x1F508;";
            document.getElementById("sound").removeEventListener("click", przewodnik.muzyka.stop);
            document.getElementById("sound").addEventListener("click", przewodnik.muzyka.start);
            przewodnik.muzyka.utwor.pause();
        }
    }
};