
var x = createObject(); //called the function
function createObject (){
    
            var result = new Object();
            result.name = "bala";
            result.height = 180;
            result.aboutYourSelf = function() {
                return "I am " + this.name + ". I am " + this.height + " cm height ";
            }
            return result;
    
    
}

console.log(x.aboutYourSelf());