import {Component, OnInit} from "@angular/core"

@Component({
    selector:'app-recept',
    templateUrl: './recept.component.html'
})

export class ReceptComponent implements OnInit{
    currentPilafTitle:string = ''
    currentPilafText:string = ''
    currentCookingTime:string = ''
    currentPilafUrl:string = ''

    activeStyle = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none text-yellow-500 border-b-2 font-medium border-yellow-500'
    disActiveStyle = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none'
    style1 = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none'
    style2 = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none'
    style3 = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none'
    style4 = 'text-gray-600 py-4 px-6 block hover:text-yellow-500 focus:outline-none'

    pilafs = [
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
        this.style1 = this.disActiveStyle
        this.style2 = this.disActiveStyle
        this.style3 = this.disActiveStyle
        this.style4 = this.disActiveStyle
        switch(index){
            case 1:{
                this.currentPilafTitle = this.pilafs[0].title
                this.currentPilafText = this.pilafs[0].text
                this.currentCookingTime = this.pilafs[0].time
                this.currentPilafUrl = this.pilafs[0].url
                this.style1 = this.activeStyle
                break
            }
            case 2:{
                this.currentPilafTitle = this.pilafs[1].title
                this.currentPilafText = this.pilafs[1].text
                this.currentCookingTime = this.pilafs[1].time
                this.currentPilafUrl = this.pilafs[1].url
                this.style2 = this.activeStyle
                break
            }
            case 3:{
                this.currentPilafTitle = this.pilafs[2].title
                this.currentPilafText = this.pilafs[2].text
                this.currentCookingTime = this.pilafs[2].time
                this.currentPilafUrl = this.pilafs[2].url
                this.style3 = this.activeStyle
                break
            }
            case 4:{
                this.currentPilafTitle = this.pilafs[3].title
                this.currentPilafText = this.pilafs[3].text
                this.currentCookingTime = this.pilafs[3].time
                this.currentPilafUrl = this.pilafs[3].url
                this.style4 = this.activeStyle
                break
            }
            
        }
    }

    ngOnInit(){
        this.changePilaf(1)
    }
}