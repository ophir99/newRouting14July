import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { ShomeComponent } from "./services/shome/shome.component";
import { MobilesComponent } from "./services/mobiles/mobiles.component";
import { CloudComponent } from "./services/cloud/cloud.component";
import { WebComponent } from "./services/web/web.component";
import { PostsComponent } from "./posts/posts.component";
import { PosthomeComponent } from "./posts/posthome/posthome.component";
import { SportsComponent } from "./posts/sports/sports.component";
import { ScienceComponent } from "./posts/science/science.component";
import { TechComponent } from "./posts/tech/tech.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FirstComponent } from "./gallery/first/first.component";
import { SecondComponent } from "./gallery/second/second.component";
import { ThirdComponent } from "./gallery/third/third.component";
import { ErrComponent } from "./err/err.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "gallery",
        // loadChildren: "./gallery/gallery.module#GalleryModule"
        loadChildren: () =>
          import("./gallery/gallery.module").then(mod => mod.GalleryModule)
      },
      {
        path: "posts",
        component: PostsComponent,
        children: [
          {
            path: "",
            component: PosthomeComponent
          },
          {
            path: "sports",
            component: SportsComponent
          },
          {
            path: "science",
            component: ScienceComponent
          },
          {
            path: "tech",
            component: TechComponent
          }
        ]
      },
      {
        path: "**",
        component: ErrComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutes {}
