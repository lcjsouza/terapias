import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TerapiasComponent } from './pages/terapias/terapias.component'

const routes: Routes = [
  {
    path: '',
    component: TerapiasComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
