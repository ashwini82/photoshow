var slideshow ={
photoList :["photo1","photo2","photo3","photo4","photo5"],

  currentPhotoIndex :0, 
 nextPhoto :function(){
                     if (this.currentPhotoIndex< this.photoList.length-1){
                       this.currentPhotoIndex=this.currentPhotoIndex +1;
	       console.log(this.photoList[this.currentPhotoIndex]) ;
	 } else { this.pause();
            console.log("End of slideshow");
    }
           
   
},

 prevPhoto :function(){
                    if(this.currentPhotoIndex > 0){
                               this.currentPhotoIndex=this.currentPhotoIndex - 1;
      
    	     return (this.photoList[this.currentPhotoIndex]);
     } else {
     	     return ("End of slideshow");
     }
},

  getCurrentPhoto :function(){
	         return this.photoList[this.currentPhotoIndex];
     },

//console.log(slideshow.photoList);
//console.log(slideshow.nextPhoto());
//console.log(slideshow.getCurrentPhoto());
// console.log(slideshow.nextPhoto());
 //console.log(slideshow.nextPhoto());
// console.log(slideshow.nextPhoto());

 playInterval :null ,
     play : function(){
           let a = this;
            console.log(this.getCurrentPhoto());

           this.getCurrentPhoto();
           this.playInterval = setInterval(function(){a.nextPhoto()},2000); 
    
},
     pause : function() {
                          clearInterval(this.playInterval);
       },

}; slideshow.play();
               
 
