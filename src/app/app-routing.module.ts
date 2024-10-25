import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { EmitterComponent } from "./components/emitter/emitter.component"; 
import { ChangerNumberComponent } from "./components/changer-number/changer-number.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TowWayBindingComponent } from "./components/tow-way-binding/tow-way-binding.component";

const routes: Routes = [
    { path: '', component: FirstComponentComponent },
    { path: 'list', component: ListRenderComponent },
    { path: 'emitter', component: EmitterComponent },
    { path: 'chager', component: ChangerNumberComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'first', component: FirstComponentComponent},
    { path: 'eventos', component: EventosComponent},
    { path: 'if', component: IfRenderComponent},
    { path: 'parent', component: ParentDataComponent},
    { path: 'pipes', component: PipesComponent},
    { path: 'tow', component: TowWayBindingComponent},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
