import {Component, OnInit} from "@angular/core"

export interface Pilaf {
    title:string;    
    text:string;
    time:string;
    url:string;
}

export interface Button {
    id:number;
    title:string;
    style:string;
}

@Component({
    selector:'app-recept',
    templateUrl: './recept.component.html'
})

export class ReceptComponent implements OnInit{
    currentPilafTitle:string = ''
    currentPilafText:string = ''
    currentCookingTime:string = ''
    currentPilafUrl:string = ''

    activeStyle:string = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none text-yellow-500 border-b-2 font-medium border-yellow-500'
    defaultStyle:string = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none'

    buttons:Button[] = [
        {
            id:1,
            title:'Pilaf 1',
            style:this.defaultStyle
        },
        {
            id:2,
            title:'Pilaf 2',
            style:this.defaultStyle
        },
        {
            id:3,
            title:'Pilaf 3',
            style:this.defaultStyle
        },
        {
            id:4,
            title:'Pilaf 4',
            style:this.defaultStyle   
        }
    ]


    pilafs:Pilaf[] = [
        {
            title: 'Pilaf 1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim vitae perspiciatis modi amet, dolores minima, ea velit eum voluptatibus excepturi dolore, aut maiores architecto ipsum! Doloribus explicabo id quam.',
            time: '1 hour',
            url: 'assets/images/pilaf.jpg'
        },
        {
            title: 'Pilaf 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim vitae perspiciatis modi amet, dolores minima, ea velit eum voluptatibus excepturi dolore, aut maiores architecto ipsum! Doloribus explicabo id quam.',
            time: '1.5 hours',
            url: 'assets/images/pilaf2.jpg'
        },
        {
            title: 'Pilaf 3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim vitae perspiciatis modi amet, dolores minima, ea velit eum voluptatibus excepturi dolore, aut maiores architecto ipsum! Doloribus explicabo id quam.',
            time: '2 hours',
            url: 'assets/images/pilaf3.jpg'
        },
        {
            title: 'Pilaf 4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim vitae perspiciatis modi amet, dolores minima, ea velit eum voluptatibus excepturi dolore, aut maiores architecto ipsum! Doloribus explicabo id quam.',
            time: '1 hour',
            url: 'assets/images/bg.jpg'
        },
    ]

    changePilaf(index){
        this.buttons.forEach(b => {
            b.style = this.defaultStyle
        })
        switch(index){
            case 1:{
                this.currentPilafTitle = this.pilafs[0].title
                this.currentPilafText = this.pilafs[0].text
                this.currentCookingTime = this.pilafs[0].time
                this.currentPilafUrl = this.pilafs[0].url
                this.buttons[0].style = this.activeStyle
                break
            }
            case 2:{
                this.currentPilafTitle = this.pilafs[1].title
                this.currentPilafText = this.pilafs[1].text
                this.currentCookingTime = this.pilafs[1].time
                this.currentPilafUrl = this.pilafs[1].url
                this.buttons[1].style = this.activeStyle
                break
            }
            case 3:{
                this.currentPilafTitle = this.pilafs[2].title
                this.currentPilafText = this.pilafs[2].text
                this.currentCookingTime = this.pilafs[2].time
                this.currentPilafUrl = this.pilafs[2].url
                this.buttons[2].style = this.activeStyle
                break
            }
            case 4:{
                this.currentPilafTitle = this.pilafs[3].title
                this.currentPilafText = this.pilafs[3].text
                this.currentCookingTime = this.pilafs[3].time
                this.currentPilafUrl = this.pilafs[3].url
                this.buttons[3].style = this.activeStyle
                break
            }
            
        }
    }

    ngOnInit(){
        this.changePilaf(1)
        console.log(this.buttons);
    }
}