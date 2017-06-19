"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var contact_component_1 = require("./contact/contact.component");
var not_found_component_1 = require("./not-found/not-found.component");
var login_component_1 = require("./login/login.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    { path: 'contact', component: contact_component_1.ContactComponent },
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule' // Lazy Module Module..
    },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule {
// }
exports.AppRoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map