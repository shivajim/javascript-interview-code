import { Routes } from "@angular/router";
import { AreaComponent } from "./area/area.component";
import { DiameterComponent } from "./diameter/diameter.component";

export const routes: Routes = [
    {
        path: 'area',
        component: AreaComponent
    },
    {
        path: 'diameter',
        component: DiameterComponent
    }
]