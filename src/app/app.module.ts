import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';
import {HttpModule, Http} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from "./app.component";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
  } 
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
