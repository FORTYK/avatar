import { type AvatarModuleMeta } from "../AvatarModuleMeta";
import thumb from '/src/assets/thumb.svg';
import happy from '/src/assets/happy.svg';

const module: AvatarModuleMeta[] = 
[
  {
    title: "regular",
    src: thumb,
    y: 100,
    width: 92,
    height: 156
  },
  {
    title: "happy",
    src: happy,
    y: 100,
    width: 121,
    height: 156
  }
];

export default module;