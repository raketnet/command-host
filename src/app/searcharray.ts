export class SearchArray {
  active :boolean;
  source: string;
  name: string;

    constructor(active : boolean, id: string, name: string ) { 
        this.active=active;
        this.source = id;
        this.name= name;
    }

}
