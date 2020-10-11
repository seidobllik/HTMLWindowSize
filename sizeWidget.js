// Simple script that displays the window size. Easily add it to your project.
// NOTE: The HTML document must have a <body> element!


let displayTime = 3000; // time in milliseconds.

function buildWidget() {
  if (!document.getElementById("size-widget")) {
    let sizeWidget = document.createElement("div");
    sizeWidget.setAttribute("id", "size-widget");
    sizeWidget.innerHTML = `<div>
                              <p>Width: </p>
                              <p id="width">xxx</p>
                            </div>
                            <div>
                              <p>Height: </p>
                              <p id="height">xxx</p>
                            </div>`;
    sizeWidget.style.cssText = `font-family: Calibri;
                                font-size: 20px;
                                text-align: center;
                                line-height: 0;
                                display: fixed;
                                z-index: 100;
                                top: 50%;
                                left: 50%;
                                transform: translate(100%, 100%);
                                width: 200px;
                                background: lightgray;
                                border: 1px solid black;
                                box-shadow: 0 0 5px black;`;

    document.body.appendChild(sizeWidget);
  }
  document.getElementById("width").innerHTML = window.innerWidth;
  document.getElementById("height").innerHTML = window.innerHeight;

  setTimeout(destroyWidget, displayTime);
}

function destroyWidget() {
  document.getElementById("size-widget").remove();
}

buildWidget();
window.onresize = buildWidget;