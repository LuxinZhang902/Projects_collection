export interface Project {
  name: string;
  imagePath: string;
  tools: string[];
  description: string;
  links: { [key: string]: string };
}
