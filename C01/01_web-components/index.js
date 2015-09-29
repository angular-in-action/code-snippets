// create the shadow root
var shadow = document.querySelector('first-comp').createShadowRoot();
// Get the template and import it
var tmpl = document.querySelector('template');
var clone = document.importNode(tmpl.content,true);

// Add the template to the shadow root
shadow.appendChild(clone);
