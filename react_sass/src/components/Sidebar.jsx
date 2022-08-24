import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";


import "../styles/components/sidebar.sass";

import ProjectsContainer from "./ProjectsContainer";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Michael Petterson" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo
      </a>
      <ProjectsContainer />
    </aside>
  );
};

export default Sidebar;

