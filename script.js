Shery.imageEffect("#back", { style: 5, config: { "a": { "value": 1.2, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] }, "zindex": { "value": "", "range": [-9999999, 9999999] }, "aspect": { "value": 1.950211897539496 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 1, "range": [1, 15] }, "durationOut": { "value": 1.2, "range": [0.1, 5] }, "durationIn": { "value": 1, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.2, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": false }, "onMouse": { "value": 1 }, "noise_speed": { "value": 1.5, "range": [0, 10] }, "metaball": { "value": 0.20, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.47, "range": [0, 2] }, "noise_scale": { "value": 11.16, "range": [0, 100] } }, gooey: true })

var elements = document.querySelectorAll(".elems");
elements.forEach(function (elems) {
    var h1s = elems.querySelectorAll("h1");
    var idx = 0;
    var flow = false;

    document.querySelector("main").addEventListener("click", function () {

        if (!flow) {
            flow = true;
            gsap.to(h1s[idx], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: .8,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    flow = false;
                },
            });

            idx === h1s.length - 1 ? (idx = 0) : idx++;

            gsap.to(h1s[idx], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: .8,
            });
        }
    });
});