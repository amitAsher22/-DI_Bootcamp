
// What You Will Learn :

// Create Objects


// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.




// class Video{
//     constructor(title , uploader , time){
//         this.title = title;
//         this.uploader = uploader;
//         this.time = time;
        

       
//     }
//     watch(){
//         console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
//     }
//     arrayDetails(){
//        let newArray = []
//        newArray.push(this.time , this.uploader , this.time)
//         console.log(newArray);
//     }
// }



// let video1 = new Video("javascript" , "amit" , "44 min")
// let video2 = new Video("Python" , "ran" , "30 min")

// // Instantiate a new Video instance and call the watch() method.
// video1.watch()
// video1.arrayDetails()


// console.log(video1);
// console.log(video2);



////////////////////////////////////////////////////////////////////////////////////////////////// ex in class

// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default

class TV  {
  constructor(brand ,channel = 1 ,volume = 50 ){
      this.brand = brand,
      this.channel = channel,
      this.volume = volume
  }

  increase(){
    this.volume++
  }
  decrease (){
      this.volume--
  }
}


let LGtv = new TV("LG" ,22 , 37)
console.log(LGtv);

// Create a subclass for Smart TV
// // 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// // 6) Add a attribute of Netflix that should be equal to true by default


class SmartTV extends TV{
    constructor(brand , channel ,volume){
        super(brand , channel ,volume)
        this.netflix = true
    }
    increase(){
        this.volume += 10;
    }
    decreaseNeverBeBelowZero(){
        if(this.volume < 0){
            console.log("You can not lower the volume anymore");
            this.volume = 0
            
        }
    }

    increaseNeverBeAboveOnehundred(){
        if(this.volume > 100){
            console.log("You can over abouve the volume anymore");
            this.volume = 100
          
        }
    }
}

let smart = new SmartTV("samsung" , 21 , 32)

smart.increase()
//// check if the volume change 
console.log(smart.volume);



/////////////////////////////////////////////////////////////////////////// bonus class

// 1. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 2. Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 3. Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// 4. It's useful to create that shows the status. It should return info about the TV status like: "Panasonic at channel 8, volume 75".