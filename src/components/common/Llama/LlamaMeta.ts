import { type AvatarModules } from "../AvatarModules";
import Body from './Body';
import Ear from './Ear';
import Head from './Head';
import Eye from './Eye';
import Mouth from './Mouth';
import Hat from './Hat';

const Llama: AvatarModules[] = [
  {label: "body", data: Body},
  {label: "ear", data: Ear},
  {label: "head", data: Head},
  {label: "eye", data: Eye},
  {label: "mouth", data: Mouth},
  {label: "hat", data: Hat},
]

export default Llama;