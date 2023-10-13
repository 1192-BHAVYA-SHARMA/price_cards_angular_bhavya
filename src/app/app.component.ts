import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daytwotaskone';
  var_value=[{ plan_n:"FREE",
   price:0, features:[
    // {user: "Single User",isE:true},
    // {storage:"5GB Storage",isE:true},
    // {Public:"Unlimited Public Projects",isE:true},
    // {Access:"Community Access",isE:true},
    // {Private:"Unlimited Private Projects",isE:false},
    // {phone:"Dedicated Phone Support",isE:false},
    // {subdomain:"Free Subdomain",isE:false},
    // {report:"Monthly Status Reports",isE:false}
    {nm:"Single User",isE:true},{nm:"5GB Storage",isE:true},
    {nm:"Unlimited Public Projects",isE:true},{nm:"Community Access",isE:true},
    {nm:"Unlimited Private Projects",isE:false},{nm:"Dedicated Phone Support",isE:false},
    {nm:"Free Subdomain",isE:false},{nm:"Monthly Status Reports",isE:false}
   ]
},{
  plan_n:"PLUS",price:9,features:[  
  //   {user: "5 Users",isE:true},
  // {storage:"50GB Storage",isE:true},
  // {Public:"Unlimited Public Projects",isE:true},
  // {Access:"Community Access",isE:true},
  // {Private:"Unlimited Private Projects",isE:true},
  // {phone:"Dedicated Phone Support",isE:true},
  // {subdomain:"Free Subdomain",isE:true},
  // {report:"Monthly Status Reports",isE:false}
  {nm:"5 User",isE:true},{nm:"50GB Storage",isE:true},
  {nm:"Unlimited Public Projects",isE:true},{nm:"Community Access",isE:true},
  {nm:"Unlimited Private Projects",isE:true},{nm:"Dedicated Phone Support",isE:true},
  {nm:"Free Subdomain",isE:true},{nm:"Monthly Status Reports",isE:false}
]

},{
  plan_n:"PRO",price:49,features:[
  //   {user: "Unlimited Users",isE:true},
  // {storage:"150GB Storage",isE:true},
  // {Public:"Unlimited Public Projects",isE:true},
  // {Access:"Community Access",isE:true},
  // {Private:"Unlimited Private Projects",isE:true},
  // {phone:"Dedicated Phone Support",isE:true},
  // {subdomain:"Unlimited Free Subdomain",isE:true},
  // {report:"Monthly Status Reports",isE:true}
  {nm:"Unlimited Users",isE:true},{nm:"150GB Storage",isE:true},
  {nm:"Unlimited Public Projects",isE:true},{nm:"Community Access",isE:true},
  {nm:"Unlimited Private Projects",isE:true},{nm:"Dedicated Phone Support",isE:true},
  {nm:"Unlimited Free Subdomain",isE:true},{nm:"Monthly Status Reports",isE:false}

]
  
}
]
}
