import { Component, Input } from '@angular/core';

interface features_of_plan{
  nm:string,
  isE:boolean;
//   user:string,
//   storage: string ,Public: string,Access: string,Private:string,phone:string,
//   subdomain:string,report:string
}

interface plan_details{
  plan_n: string,
  price: number,
  // features:[
  //   nm:string,
  //   isE:boolean
  // ]
  features:Array<features_of_plan>
  // features:[user:string,storage: string ,Public: string,Access: string,Private:string,phone:string,
  //   subdomain:string,report:string]
}
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() plan_obj: plan_details|undefined;
}

