import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServicesComponent } from "./services.component";
import { ShomeComponent } from "./shome/shome.component";
import { MobilesComponent } from "./mobiles/mobiles.component";
import { CloudComponent } from "./cloud/cloud.component";
import { WebComponent } from "./web/web.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "services",
        component: ServicesComponent,
        children: [
          {
            path: "",
            component: ShomeComponent
          },
          {
            path: "mobiles",
            component: MobilesComponent
          },
          {
            path: "cloud",
            component: CloudComponent
          },
          {
            path: "web",
            component: WebComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class ServicesRoutes {}
