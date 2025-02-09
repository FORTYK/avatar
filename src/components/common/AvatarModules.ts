import { type AvatarModuleMeta } from "./AvatarModuleMeta";

export class AvatarModules{
  label?: string;
  data: AvatarModuleMeta[] = [];
  disabled?: boolean = false;

  constructor(label: string, data: AvatarModuleMeta[], disabled?: boolean) {
    this.label = label;
    this.data = data;
    this.disabled = disabled;
  }
}; 