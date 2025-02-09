import { type Avatar } from "../Avatar";
import { AvatarModules } from "../AvatarModules";
import Body from './modules/Body';
import Ear from './modules/Ear';
import Head from './modules/Head';
import Face from './modules/Face';
import Eye from './modules/Eye';
import Mouth from './modules/Mouth';
import Hat from './modules/Hat';

const Llama: Avatar = {
  modules: [
    new AvatarModules("body", Body),
    new AvatarModules("ear", Ear),
    new AvatarModules("head", Head),
    new AvatarModules("face", Face),
    new AvatarModules("eye", Eye),
    new AvatarModules("mouth", Mouth),
    new AvatarModules("hat", Hat),
  ]
}

export default Llama;