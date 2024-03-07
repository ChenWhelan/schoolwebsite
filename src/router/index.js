import Vue from 'vue'
import VueRouter from 'vue-router'
//引入Luyou 组件
import HomeIndex from '../page/Index/HomeIndex'
import AboutSchool from '../page/AboutSchool/AboutSchool'
import AboutSubject from '../page/AboutSubject/AboutSubject'
import AboutTeacher from '../page/AboutTeacher/AboutTeacher'
import PersonnelRec from '../page/PersonnelRec'
import EduAdm from '../page/EduAdm/EduAdm'
/* import Notedetail from '../page/Notedetail' */
import PartyCon from '../page/PartyCon/PartyCon'
import PraTeaching from '../page/PraTeaching/PraTeaching'
import RecEmp from '../page/RecEmp/RecEmp'
/* import SchoolNews from '../page/SchoolNews' */
import ServiceD from '../page/ServiceD/ServiceD'
import StuWork from '../page/StuWork/StuWork'
/* import cookie from '../utils/cookie.js' */
import SchoolNews from '../page/Index/SchoolNews'
import EduNews from '../page/EduAdm/EduNews'
import RuLes from '../page/EduAdm/RuLes'
import TrainPro from '../page/EduAdm/TrainPro'
import DtNotice from '../page/PartyCon/DtNotice'
import DtOrgan from '../page/PartyCon/DtOrgan'
import DtNews from '../page/PartyCon/DtNews'
import ActiviTy from '../page/StuWork/ActiviTy'
import AluMni from '../page/StuWork/AluMni'
import StudentWork from '../page/StuWork/StudentWork'
import EnrollMent from '../page/RecEmp/EnrollMent'
import EmployMent from '../page/RecEmp/EmployMent'
import EmpNotice from '../page/RecEmp/EmpNotice'
import TDownload from '../page/ServiceD/TDownload'
import SDownload from '../page/ServiceD/SDownload'

import TranService from '../page/ServiceD/TranService'
import CallMe from '../page/ServiceD/CallMe'
import CommonLink from '../page/ServiceD/CommonLink'
import SchoolnewsMore from '../page/Index/More/SchoolnewsMore'
import EdunoticeMore from '../page/Index/More/EdunoticeMore'
import StunoticeMore from '../page/Index/More/StunoticeMore'
import SpecializedLab from '../page/PraTeaching/SpecializedLab'
import ChanxueYan from '../page/PraTeaching/ChanxueYan'
import DisCom from '../page/PraTeaching/DisCom'
import AchievementShow from '../page/PraTeaching/AchievementShow'
import EngineerClass from '../page/PraTeaching/EngineerClass'
import EduCertification from '../page/PraTeaching/EduCertification'
import CommunEngineer from '../page/AboutSubject/CommunEngineer'
import AutoMation from '../page/AboutSubject/AutoMation'
import ComEngVideo from '../page/AboutSubject/ComEngVideo'
import AutoMationVideo from '../page/AboutSubject/AutoMationVideo'
import ComputerTech from '../page/AboutSubject/ComputerTech'
import ComputerTechVideo from '../page/AboutSubject/ComputerTechVideo'
import CollegeIntro from '../page/AboutSchool/CollegeIntro'
import CollegeLeader from '../page/AboutSchool/CollegeLeader'
import DeanSpeech from '../page/AboutSchool/DeanSpeech'
import InstitutionSet from '../page/AboutSchool/InstitutionSet'
import PromotionVideo from '../page/AboutSchool/PromotionVideo'
import HistoricalDevelop from '../page/AboutSchool/HistoricalDevelop'
import NoteDetails from '../page/NoteDetails.vue'
import SoftWare from '../page/AboutSubject/SoftWare'
import SoftwareVideo from '../page/AboutSubject/SoftwareVideo'
import AI from '../page/AboutSubject/AI'
import AIVideo from '../page/AboutSubject/AIVideo'
import SearchList from '../components/SearchList'

import AcademicAdviser from '../page/AboutTeacher/AcademicAdviser'
import AdminService from '../page/AboutTeacher/AdminService'
import BasicSubject from '../page/AboutTeacher/BasicSubject'
import ChairProfessor from '../page/AboutTeacher/ChairProfessor'
import ProfessorTeam from '../page/AboutTeacher/ProfessorTeam'
import TAI from '../page/AboutTeacher/TAI'
import TAutomation from '../page/AboutTeacher/TAutomation'
import TCommun from '../page/AboutTeacher/TCommun'
import TComputer from '../page/AboutTeacher/TComputer'
import TDetail from '../page/AboutTeacher/TDetail'
import TeachTeam from '../page/AboutTeacher/TeachTeam'
import VisitProfessor from '../page/AboutTeacher/VisitProfessor'
import SDetail from '../page/AboutTeacher/SDetail'
import PDetail from '../page/AboutTeacher/PDetail'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path:'/Home',
      component:HomeIndex,
      children:[
        {path: '/',redirect: '/Home/SchoolNews'},
        {path:'SchoolNews',component:SchoolNews},

    ]
    },
    {
      path:'/AboutSchool',
      component:AboutSchool,
      children:[
        {path: '/',redirect: '/AboutSchool/DeanSpeech'},
        {path:'DeanSpeech',component:DeanSpeech},
        {path:'CollegeIntro',component:CollegeIntro},
        {path:'CollegeLeader',component:CollegeLeader},
        {path:'HistoricalDevelop',component:HistoricalDevelop},
        {path:'InstitutionSet',component:InstitutionSet},
        {path:'PromotionVideo',component:PromotionVideo},

    ]
    },
    {
      path:'/AboutSubject',
      component:AboutSubject,
      children:[
        {path: '/',redirect: '/AboutSubject/CommunEngineer'},
        {path:'CommunEngineer',component:CommunEngineer},
        {path:'ComEngVideo',component:ComEngVideo},
        {path:'AutoMation',component:AutoMation},
        {path:'AutoMationVideo',component:AutoMationVideo},
        {path:'ComputerTech',component:ComputerTech},
        {path:'ComputerTechVideo',component:ComputerTechVideo},
        {path:'AI',component:AI},
        {path:'AIVideo',component:AIVideo},
        {path:'SoftWare',component:SoftWare},
        {path:'SoftwareVideo',component:SoftwareVideo},
      ]
    },
    {
      path:'/AboutTeacher',
      component:AboutTeacher,
      children:[
        {path: '/',redirect: '/AboutTeacher/TeachTeam'},
        {path:'TeachTeam',component:TeachTeam},
        {path:'AcademicAdviser',component:AcademicAdviser},
        {path:'AdminService',component:AdminService},
        {path:'BasicSubject',component:BasicSubject},
        {path:'ChairProfessor',component:ChairProfessor},
        {path:'ProfessorTeam',component:ProfessorTeam},
        {path:'TAI',component:TAI},
        {path:'TAutomation',component:TAutomation},
        {path:'TCommun',component:TCommun},
        {path:'TComputer',component:TComputer},
        {path:'VisitProfessor',component:VisitProfessor},
      ]
    },
    {
      path:'/EduAdm',
      component:EduAdm,
      children:[
        {path: '/',redirect: '/EduAdm/TrainPro'},
        {path:'EduNews',component:EduNews},
        {path:'RuLes',component:RuLes},
        {path:'TrainPro',component:TrainPro},
      ]
    },
    {
      path:'/PartyCon',
      component:PartyCon,
      children:[
        {path: '/',redirect: '/PartyCon/DtNotice'},
        {path:'DtNotice',component:DtNotice},
        {path:'DtOrgan',component:DtOrgan},
        {path:'DtNews',component:DtNews},
      ]
    },
    {
      path:'/PraTeaching',
      component:PraTeaching,
      children:[
        {path: '/',redirect: '/PraTeaching/SpecializedLab'},
        {path:'SpecializedLab',component:SpecializedLab},
        {path:'ChanxueYan',component:ChanxueYan},
        {path:'DisCom',component:DisCom},
        {path:'AchievementShow',component:AchievementShow},
        {path:'EngineerClass',component:EngineerClass},
        {path:'EduCertification',component:EduCertification}
        
        
      ]
    },
    {
      path:'/PersonnelRec',
      component:PersonnelRec
    },
    {
      path:'/RecEmp',
      component:RecEmp,
      children:[
        {path: '/',redirect: '/RecEmp/EnrollMent'},
        {path:'EnrollMent',component:EnrollMent},
        {path:'EmployMent',component:EmployMent},
        {path:'EmpNotice',component:EmpNotice},
      ]
    },
    {
      path:'/ServiceD',
      component:ServiceD,
      children:[
        {path: '/',redirect: '/ServiceD/TranService'},
        {path:'TranService',component:TranService},
        {path:'TDownload',component:TDownload},
        {path:'SDownload',component:SDownload},
        {path:'CommonLink',component:CommonLink},
        {path:'CallMe',component:CallMe},
      ]
    },
    {
      path:'/StuWork',
      component:StuWork,
      children:[
        {path: '/',redirect: '/StuWork/ActiviTy'},
        {path:'ActiviTy',component:ActiviTy},
        {path:'AluMni',component:AluMni},
        {path:'StudentWork',component:StudentWork},
      ]
    },
    {
      path:'/SchoolnewsMore',
      component:SchoolnewsMore
    },
    {
      path:'/EdunoticeMore',
      component:EdunoticeMore
    },    {
      path:'/StunoticeMore',
      component:StunoticeMore
    },
    {
      path: '/notedetail/:newsid',
      component: NoteDetails,
    },
    {
      path: '/SearchList',
      component: SearchList,
    },
    {
      path: '/Tdetail/:id',
      component: TDetail,
    },
    {
      path: '/Pdetail/:id',
      component: PDetail,
    },
    {
      path: '/Sdetail/:id',
      component: SDetail,
    },
  ]
})

