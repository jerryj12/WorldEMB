import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './comps/about/about.component';
import { BigportfolioComponent } from './comps/bigportfolio/bigportfolio.component';
import { BlogsComponent } from './comps/blogs/blogs.component';
import { ClientComponent } from './comps/client/client.component';
import { ContactComponent } from './comps/contact/contact.component';
import { CustomComponent } from './comps/custom/custom.component';
import { HomeComponent } from './comps/home/home.component';
import { MainpricingComponent } from './comps/mainpricing/mainpricing.component';
import { NewpricingComponent } from './comps/newpricing/newpricing.component';
import { PortfolioComponent } from './comps/portfolio/portfolio.component';
import { PricingComponent } from './comps/pricing/pricing.component';
import { VectorComponent } from './comps/vector/vector.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'clients',component:ClientComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'pricing', component:PricingComponent},
  {path:'contact', component:ContactComponent},
  {path: 'ourPortfolio', component: BigportfolioComponent},
  {path:'blogs', component: BlogsComponent},
  {path:'about', component: AboutComponent},
  {path:'embroidery', component: CustomComponent},
  {path:'newprice', component: NewpricingComponent},
  {path: 'vectorart', component: VectorComponent},
  {path: 'mainpricing', component: MainpricingComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    useHash: false
  })
],
  exports: [RouterModule]
  
})
export class AppRoutingModule { 
  
}
