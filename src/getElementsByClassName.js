// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var classes = className.split(" ");
  var results = [];

  function checkElement(element){
    if (element.nodeType === 1){
      var hasClass = false;
      for (var i=0; i<classes.length; i++){
        if (element.classList.contains(classes[i])) {
          hasClass = true;

        }
      }
      if (hasClass){
        results.push(element)
      }

      if (element.childElementCount > 0) {
        for (var index in element.childNodes) {
          checkElement(element.childNodes[index]);
        }
      }

    }
  }

  checkElement(document.body);

  return results;
};
