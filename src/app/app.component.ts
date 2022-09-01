import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 12'

  // printAlert(name:any){
  //   alert(name)
  // }
  // printAlert2(name:string | number){
  //   alert(name)
  // }

  // printConsole(val:string){
  //   console.warn(val)
  // }

  // displayVal:string=''
  // getValue(val:string){
  //   console.warn(val)
  //   this.displayVal = val
  // }

  // count=0
  // act(type:string){
  //   type==='plus' ? this.count++ : this.count--
  // }

  // name = 'Peter'
  // disable = false

  // show='yes'

  // color='orange'

  // users = ['Alpha', 'Beta', 'Charlie', 'Gamma', 'Epsilon']
  // usersDetail = [
  //   {name: 'Alpha', email:'alpha@gmail.com', phone:'1111', account:['facebook', 'email', 'linkedin']},
  //   {name: 'Beta', email:'beta@gmail.com', phone:'2222', account:['facebook', 'email', 'instagram']},
  //   {name: 'Gamma', email:'gamma@gmail.com', phone:'3333', account:['facebook', 'email', 'youtube']},
  //   {name: 'Delta', email:'delta@gmail.com', phone:'4444', account:['facebook', 'email', 'yahoo']},
  //   {name: 'Epsilon', email:'epsilon@gmail.com', phone:'5555', account:['facebook', 'email', 'twitter']},
  // ]

  // bgColor = 'green'
  // updateColor(){
  //   this.color = 'skyblue'
  //   this.bgColor = 'black'
  // }

  // userData:any={}
  // getFormData(data:NgForm){
  //   console.warn(data)
  //   this.userData=data
  // }

  // display=false
  // toggle(){
  //   this.display= !this.display
  // }


  // id=1
  // tasks:any[] = [];
  // addTask(task:string){
  //   if(!task) alert("Input must be filled!")
  //   else{
  //     // this.tasks.push({id:this.tasks.length, name:task})
  //     this.tasks.push({id:this.id++, name:task, done:false})
  //     console.warn(this.tasks)
  //   }
  // }
  // deleteTask(id:number){
  //   this.tasks = this.tasks.filter(task=>task.id!==id)
  // }
  // doneTask(id:number){
  //   this.tasks[this.tasks.findIndex(t => t.id === id)].done = true;
  // }

  data = 10
  updateData(){
    this.data=Math.floor(Math.random()*20)+1 //1-20
  }
}
