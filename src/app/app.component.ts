import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slider';
images:any=[]
perview :string=""
imageIndex!:number
  getImage(event:any){
var files=event.target.files//number of images
let sliderLength=this.images.length+files.length
if(sliderLength>5){
  let limit =5-this.images.length

for(let i=0;i<limit;i++){
  let file=files[i]
  let reader=new FileReader()
reader.readAsDataURL(file)
reader.onload=()=>{
this.images.push(reader.result)
console.log(this.images,"sorry")
}
}
}
else{
  for(let i=0;i<files.length;i++){
    let file=files[i]
    let reader=new FileReader()
  reader.readAsDataURL(file)
  reader.onload=()=>{
  this.images.push(reader.result)
  console.log(this.images,"sorry")
  }
  }
}

   }

   //slider=2
//   image=4
//2+4>5  --->slider-5
//2+4<5  --->slider-5


display(index:number){
this.imageIndex=index
this.perview=this.images[index]
console.log(this.imageIndex)
}
delete( ){
this.images.splice(this.imageIndex,1)
if(this.images.length==this.imageIndex){
  --this.imageIndex
  this.perview=this.images[this.imageIndex]

}
else{
  this.perview=this.images[this.imageIndex]

}

}

back(){
  --this.imageIndex
  this.perview=this.images[this.imageIndex]
}
next(){
  ++this.imageIndex
  this.perview=this.images[this.imageIndex]

}


}
