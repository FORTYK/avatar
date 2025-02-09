import { type AvatarModuleMeta } from "./AvatarModuleMeta";

export class AvatarModules{
  label?: string;
  data: AvatarModuleMeta[] = [];

  constructor(label: string, data: AvatarModuleMeta[]) {
    this.label = label;
    this.data = data;
  }
}; 