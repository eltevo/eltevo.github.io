window.MathJax = {
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/SVG"],
  tex2jax: {
    inlineMath:  [ ['$', '$'],   ["\\(", "\\)"] ],
    displayMath: [ ['$$', '$$'], ["\\[", "\\]"] ],
    processEscapes: true
  },
  loader: {
    load: ['[tex]/bbox', '[tex]/boldsymbol']
  },
  TeX: {
    equationNumbers: {
      autoNumber: "AMS"
    },
    packages: {
      '[+]': ['bbox'],
      '[+]': ['boldsymbol']
    }
  },
  SVG: {
    styles: {
      '.mjx-svg-href': {
        fill: 'rgba(255,204,0,1)', stroke: 'rgba(255,204,0,1)'
      }
    },
    linebreaks: {
      automatic: true
    },
    font: 'Latin-Modern'
  },
  menuSettings: {
    zoom: 'Hover'
  },
  MathZoom: {
    styles: {
      '#MathJax_Zoom': {
        'background-color': '#040A13'
      }
    }
  }
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/latest.js?config=default';
  script.async = true;
  document.head.appendChild(script);
})();