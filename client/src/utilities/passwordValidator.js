const passwordValidator = (text) => {
  let threeConsecutive = new RegExp(/([a-zA-Z])\1\1+/gm); //3 consecutive
  let lowerCase = new RegExp(/.*[a-z].*/); //one lower case
  let upperCase = new RegExp(/.*[A-Z].*/); //one upper case
  let digitCase = new RegExp(/.*\d.*/); //one special case

  let steps = 0;
  let add = 0;
  let subtract = 0;
  let change = 0;

  if (text.length < 3) {
    add += 6 - text.length;
  } else {
    if (text.length < 6) {
      add += 6 - text.length;
    }

    if ((text.match(digitCase) || []).length == 0) {
      change++;
    }
    if ((text.match(lowerCase) || []).length == 0) {
      change++;
    }
    if ((text.match(upperCase) || []).length == 0) {
      change++;
    }
    if ((text.match(threeConsecutive) || []).length > 0) {
      text.match(threeConsecutive).forEach((element) => {
        subtract += element.length - 2;
        console.log(element.length);
      });
    }
    if (text.length > 20) {
      subtract += text.length - 20;
    }
  }

  steps = add > subtract ? add + change : subtract + change;

  return steps;
};

export default passwordValidator;
