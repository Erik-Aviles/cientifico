import github from '../assets/image/icons8-github.svg';
import twiter from '../assets/image/icons8-twitter.svg';
import email from '../assets/image/icons8-email-96.png';

const Footer = () => {
    const view = `
            <div class="Social-media">
                <ul>
                    <li> 
                        <a href="">
                            <img src="${github}" alt="github" />
                        </a>
                    </li>
                    <li> 
                        <a href="">
                            <img src="${twiter}" alt="twiter" />
                        </a>
                    </li>
                    <li> 
                        <a href="">
                            <img src="${email}" alt="email" />
                        </a>
                    </li>
                </ul>
            </div>
            <p> ♥♠ by <span>Erika Aviles</span> 2022</p>
    `;
    return view;
};

export default Footer;

