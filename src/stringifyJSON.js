// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result;

  // HANDLES STRING OBJECTS
  if (typeof obj === "string") {
    return "\"" + obj + "\"";
  }

  // HANDLES BOOLEAN OBJECTS
  else if (typeof obj === 'boolean') {
    return obj.toString();
  }

  // HANDLES NUMBER OBJECTS
  else if (typeof obj == 'number') {
    return obj.toString();
  }
  // HANDLES OBJECT OBJECTS
  else if (typeof obj === 'object') {
    // CHECKS FOR NULL OBJECT
    if (obj === null){
      return 'null';
    }

    // DETERMINES IF OBJECT IS ARRAY (VS. HASH)
    else if (Array.isArray(obj)) {
      var array = [];
      for (var i=0; i<obj.length; i++) {
        array.push(stringifyJSON(obj[i]));
      }
      return "[" + array.toString() + "]";
    }

    // IF OBJECT IS NOT AN ARRAY IT IS A HASH
    else{
      var result = "{"
      var hash_length = 0;
      for (var item in obj) {
        // IF EITHER KEY OR VALUE IS UNDEFINED, DON'T RETURN THE PAIR
        if (stringifyJSON(item) != undefined && stringifyJSON(obj[item]) != undefined) {
          hash_length++;
          result += stringifyJSON(item);
          result += ":";
          result += stringifyJSON(obj[item]);
          result += ",";
        }
        
      }
      if (hash_length > 0) {
        return result.slice(0, result.length-1) + "}" 
      }
      else {
        return result + "}"     
      }
       
    }
  }

  // HANDLES UNDEFINED OBJECTS
  else if (typeof obj == 'undefined' || typeof obj === 'function'){
    return;
  }
};

