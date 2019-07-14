import { NgModule } from "@angular/core";
import { ServicesComponent } from "./services.component";
import { CloudComponent } from "./cloud/cloud.component";
import { ShomeComponent } from "./shome/shome.component";
import { MobilesComponent } from "./mobiles/mobiles.component";
import { WebComponent } from "./web/web.component";
import { ServicesRoutes } from "./services.routes";

@NgModule({
  declarations: [
    ServicesComponent,
    CloudComponent,
    ShomeComponent,
    MobilesComponent,
    WebComponent
  ],
  imports: [ServicesRoutes]
})
export class ServicesModule {}
