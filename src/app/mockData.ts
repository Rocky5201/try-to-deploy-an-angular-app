import{ profile, contact, projects, skill} from "../app/dataType"

export const timeMock:profile[]=[{
  title:"Fleet Hoster | Software Engineer",
  subTitle:"Aug 2023 - Present"
 },
 {
  title:"Delta Air Lines | Associate Software Development Engineer",
  subTitle:"Jul 2021 - Jun 2023"
  },
  {
   title:"Pyramid Consulting, Inc | Associate Software Development Engineer",
   subTitle:"Apr 2021 - Jul 2023"
  },
  {
   title:"New China Buffet | Freelance",
   subTitle:"May 2020 - Dec 2020"
  },
  {
   title:"Virginia Tech | Undergraduate Robotics Researcher",
   subTitle:"Apr 2019 - Dec 2019"
  }
  ]

export const navMock:string[]=
    ['Rocky Chen','Experience',"Projects",'About Me','Download Resume'];

export const profileMock:profile={
    title:"Rocky Chen",
    subTitle:"Software Engineer"
    };

export const skillsMock:skill[]=[{
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
];

export const projectsMock:projects[]=[{
    image:"../../assets/skymiles.jpg",
    link:'https://thriftytraveler.com/news/airlines/delta-new-skymiles-dashboard/',
    topie:"Associate Software Developer",
    action:"MORE",
    paragraph:"Delta Rolls Out New SkyMiles Dashboard to Track Your Medallion Status Progress"
  },{
    image:"../../assets/one.PNG",
    link:'',
    topie:"Web Developer",
    action:"Coming Soon",
    paragraph:"Collaborated with the business owner to design a streamlined website"
  },
  {
    image:"../../assets/robot.jpg",
    link:'https://icat.vt.edu/projects/2015-2016/major/escher-humanoid-robot.html',
    topie:"Associate Researcher",
    action:"MORE",
    paragraph:"Robot was intended to be entered into US Navycompetition to assist in firefighting sea rescues."
  }]

export const contactMock:contact={
    image:"../../assets/me.PNG",
    name:'Rocky Chen',
    roles:'Software Engineer',
    city:'Atlanta, GA',
    email:'chiang5201@gmail.com',
    link:"https://www.linkedin.com/in/rocky-chen-1a606118a/",
    icon:""
  };