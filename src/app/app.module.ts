import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { FooterComponent } from './comps/footer/footer.component';
import { HomeComponent } from './comps/home/home.component';
import { ClientComponent } from './comps/client/client.component';
import { PortfolioComponent } from './comps/portfolio/portfolio.component';
import { PricingComponent } from './comps/pricing/pricing.component';
import { ContactComponent } from './comps/contact/contact.component';
import { BigportfolioComponent } from './comps/bigportfolio/bigportfolio.component';
import { BlogsComponent } from './comps/blogs/blogs.component';
import { AboutComponent } from './comps/about/about.component';
import { CustomComponent } from './comps/custom/custom.component';
import { HttpClientModule } from '@angular/common/http';
import { NewpricingComponent } from './comps/newpricing/newpricing.component';
import { HomepricingComponent } from './comps/homepricing/homepricing.component';
import { VectorComponent } from './comps/vector/vector.component';
import { NgOptimizedImage } from '@angular/common';
import { VectorpricingComponent } from './comps/vectorpricing/vectorpricing.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MainpricingComponent } from './comps/mainpricing/mainpricing.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ClientComponent,
    PortfolioComponent,
    PricingComponent,
    ContactComponent,
    BigportfolioComponent,
    BlogsComponent,
    AboutComponent,
    CustomComponent,
    NewpricingComponent,
    HomepricingComponent,
    VectorComponent,
    VectorpricingComponent,
    MainpricingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    NgOptimizedImage,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /*{provide: LocationStrategy, useClass: HashLocationStrategy}
{ provide: LocationStrategy, useClass: PathLocationStrategy }

  */
}
