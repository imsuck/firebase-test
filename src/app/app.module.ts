import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import {
	provideAnalytics,
	getAnalytics,
	ScreenTrackingService,
	UserTrackingService,
} from "@angular/fire/analytics";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { provideMessaging, getMessaging } from "@angular/fire/messaging";
import { providePerformance, getPerformance } from "@angular/fire/performance";
import { provideStorage, getStorage } from "@angular/fire/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { BoardComponent } from "./board/board.component";
import { SquareComponent } from "./square/square.component";

import { MatButtonModule } from "@angular/material/button";

@NgModule({
	declarations: [AppComponent, BoardComponent, SquareComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideMessaging(() => getMessaging()),
		providePerformance(() => getPerformance()),
		provideStorage(() => getStorage()),
		BrowserAnimationsModule,
		MatButtonModule,
	],
	providers: [ScreenTrackingService, UserTrackingService],
	bootstrap: [AppComponent],
})
export class AppModule {}
