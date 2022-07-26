
var UIControlGithub = function(ui, visible, visibleLock) {
    this.ui = ui;
    this.control = this.ui.addControl("github",
      '<a target="_blank" href="https://github.com/Melown/vts-browser-js">'
      + '<img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png">'
      + '</a>'
      , visible, visibleLock);
};


export default UIControlGithub;

