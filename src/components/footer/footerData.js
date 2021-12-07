import { Facebook, YouTube, LinkedIn,GitHub } from "@mui/icons-material";
import resumePdf from './../../images/Resume.pdf';
export const footerData = [
  {
    title: "All Pages",
    cn: "footer-title",
    subTitle: [
      {
        title: "Home",
        cn: "footer-sub-title",
        path : '#home',
      },
      {
        title: "projects",
        cn: "footer-sub-title",
        path : '#projects',
      },
      {
        title: "CP",
        cn: "footer-sub-title",
        path : '#cp',
      },
      {
        title: "Social",
        cn: "footer-sub-title",
        path : '#social',
      },
    ],
  },
  {
    title: "Contact Us",
    cn: "footer-title",
    subTitle: [
      {
        title: "My Resume",
        cn: "footer-sub-title",
        path : resumePdf,
      },
      {
        title: "LinkedIn",
        cn: "footer-sub-title",
        path : 'https://in.linkedin.com/in/rakesh-sahni-7b1b581b6',
      },
      {
        title: "HackerRank",
        cn: "footer-sub-title",
        path : "https://www.hackerrank.com/rakeshsahni",
      },
      {
        title: "CodeForces",
        cn: "footer-sub-title",
        path : "https://codeforces.com/profile/RAKESHGON",
      },
      {
        title: "GeeksForGeeks",
        cn: "footer-sub-title",
        path : "https://auth.geeksforgeeks.org/user/rakeshsahni/articles",
      },
    ],
  },
  {
    title: "Projects",
    cn: "footer-title",
    subTitle: [
      {
        title: "Image App",
        cn: "footer-sub-title",
        path : 'https://rakeshmernapp.herokuapp.com/',
      },
      {
        title: "Tic Tac Toe",
        cn: "footer-sub-title",
        path : 'https://rakeshsahni.github.io/tic-tac-web/',
      },
      {
        title: "Res-Nav",
        cn: "footer-sub-title",
        path : 'https://rakeshsahni.github.io/responsive-nav-footer/',
      },
      {
        title: "Spam Classifier",
        cn: "footer-sub-title",
        path : 'https://detect-msg.herokuapp.com/',
      },
      {
        title: "Object Detect",
        cn: "footer-sub-title",
        path : 'https://github.com/rakeshsahni/mlgit',
      },
    ],
  },
  {
    title: "Social",
    cn: "footer-title",
    subTitle: [
      {
        title: "YouTube",
        cn: "footer-sub-title",
        icon: <YouTube />,
        path : "https://www.youtube.com/channel/UCG0z1BGdPKmcy-1DfwDkN1Q",
      },
      {
        title: "LinkedIn",
        cn: "footer-sub-title",
        icon: <LinkedIn />,
        path : "https://www.linkedin.com/in/rakesh-sahni-7b1b581b6/",
      },
      {
        title: "GitHub",
        cn: "footer-sub-title",
        icon: <GitHub />,
        path : 'https://github.com/rakeshsahni',
      },
      {
        title: "Facebook",
        cn: "footer-sub-title",
        icon: <Facebook />,
        path : 'https://www.facebook.com/people/Rakesh-Sahni/100051425001984/'
      },
    ],
  },
];
