EPUBJS.Hooks.register("beforeChapterDisplay").mathml = function(callback, renderer){

    if(renderer.currentChapter.properties=="mathml scripted") {
        console.log('load mathml');

        var s = document.createElement("script");
        s.type = 'text/x-mathjax-config';
        s.innerHTML = 'MathJax.Hub.Config({jax: ["input/TeX","input/MathML","output/SVG"],extensions: ["tex2jax.js","mml2jax.js","MathEvents.js"],TeX: {extensions: ["noErrors.js","noUndefined.js","autoload-all.js"]},MathMenu: {showRenderer: false},menuSettings: {zoom: "Click"},messageStyle: "none"});';
        renderer.doc.body.appendChild(s);

        EPUBJS.core.addScript('/libs/mathjax/MathJax.js', null, renderer.doc.head);

    }

    if(callback) callback();
}
