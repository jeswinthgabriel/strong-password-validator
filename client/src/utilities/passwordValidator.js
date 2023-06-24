

const passwordValidator = (text) => {
    let threeConsecutive = new RegExp(/.*(\w).*\1.*\1.*\1.*/); //3 consecutive
let lowerCase = new RegExp(/.*[a-z].*/);   //one lower case
let upperCase = new RegExp(/.*[A-Z].*/);  //one upper case
let digitCase = new RegExp(/.*\d.*/);  //one special case

    let steps=0
    if(text.length<6){
        steps=6-text.length  
        
    }
    else if(text.length>20){
        steps=text.length-20
        
    }
    
    else{
        if(( text.match(digitCase) || [] ).length==0){
            steps++
        }
        if(( text.match(lowerCase) || [] ).length==0){
            steps++
        }
        if(( text.match(upperCase) || [] ).length==0){
            steps++
        }
        if(( !text.match(threeConsecutive) || [] ).length==0){
            steps++
        }
       
    
    }
    console.log(steps)  


  return steps
}

export default passwordValidator