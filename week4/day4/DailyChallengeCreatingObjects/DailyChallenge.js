
class Video{
    constructor(title , uploader , time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
       
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

class NewVideo extends Video{
    constructor(title , uploader , time){
     super(title , uploader , time)
    }
}

let  video1 = new Video("javascript" , "amit" , "44 min")

console.log(video1);