import avatar from '../img/foto-michael.jpeg';
import '../styles/components/sidebar.sass';

const SideBar = () => {
    return (
        <aside id='sidebar'>
            <img src={avatar} alt="michael petterson" />
            <p className="title">Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className="btn">
                Download curriculo
            </a>
        </aside>
    )
}

export default SideBar;