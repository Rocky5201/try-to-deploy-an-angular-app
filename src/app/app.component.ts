import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  profile={
  title:"Rocky Chen",
  subTitle:"Software Engineer"
  }
  
  skills=[{
      topie:'Languages',
      points:["Java", 'JavaScript', "HTML", "CSS", "C/C++", "Verilog", "Python", "BASH"]
    },
    {
      topie:'Frameworks',
      points:['React', 'Angular', 'Spring', 'Spring Boot', 'Hibernate', 'Node.js', 'Bootstrap' ]
    },
    {
      topie:'Databases',
      points:['MySQL', 'MongoDB']
    },  
    {
      topie:'Tools',
      points:['Git', 'Jenkins', 'Postman', 'ModelSim', 'Netlify', 'Ubuntu']
    }
  ]

  projects= [{
      image:"../../assets/skymiles.jpg",
      link:'https://thriftytraveler.com/news/airlines/delta-new-skymiles-dashboard/',
      topie:"Delta Airline",
      action:"MORE",
      paragraph:"Delta Rolls Out New SkyMiles Dashboard to Track Your Medallion Status Progress"
    },{
      image:"../../assets/one.PNG",
      link:'',
      topie:"Web Designer",
      action:"Coming Soon",
      paragraph:"Collaborated with the business owner to design a streamlined website"
    },
    {
      image:"../../assets/robot.jpg",
      link:'https://icat.vt.edu/projects/2015-2016/major/escher-humanoid-robot.html',
      topie:"Humanoid Robot",
      action:"MORE",
      paragraph:"Robot was intended to be entered into US Navycompetition to assist in firefighting sea rescues."
    }]

  contact={
    image:"../../assets/me.PNG",
    name:'Rocky Chen',
    roles:'Software Engineer',
    city:'Atlanta, GA',
    email:'chiang5201@gmail.com',
    link:"https://www.linkedin.com/in/rocky-chen-1a606118a/",
    icon:""
  }

  scrollTo(className: string):void {
    if(className=='top'){
      window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
      });
    }
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }
}
