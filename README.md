# M346 + M426 Abschlussprojekt
Das Projekt besteht aus folgenden Repositories:
- https://github.com/hagmannStephan/m347_backend_api (Deployed as https://m347backend-fid1eypgt-hagmannstephans-projects.vercel.app/)
- https://github.com/hagmannStephan/M347_reactFrontend (Deployed as https://m347-react-frontend-8cjs54yqc-hagmannstephans-projects.vercel.app/)
## Weekly-Meetings
### 17.05.2024
Heute haben wir die Aufgabenaufteilung besprochen. Gian, Dejan und Edgar arbeiten daran, das Frontend zum Laufen zu bringen und Stephan wird die REST-Backend-API umsetzen. Wenn ein Team früher als erwartet fertig ist, hilft es dem anderen Team.
Das Deployment werden wir auf Vercel machen, die Backend-API ist sogar bereits deployt, einfach noch nicht funktionsfähig.
Stephan wird Project Owner und Edgar ist Scrum-Master. Nächste Woche muss Stephan herausfinden, wie man ein Deployment auf Vercel auf Public setzt (Auf Deployment gehen > Settings > Deployment Protection > Set Vercel Authentication to disabled).
### 24.05.2024
Wir begannen den Tag damit, dass wir die Anforderungen der beiden Projekte, die unsere Gruppe derzeit in Angriff nimmt, klärten. Offensichtlich besteht für dieses Projekt kein Bedarf an einer Dokumentation... Ups. 
Nach dieser Klärung nahm Edgar seine Rolle als Scrum Master auf und organisierte ein Treffen, bei dem wir die Aufgabenverteilung besprachen. Diese Verteilung wurde dann in der Registerkarte "Projekte" in unserem Github festgeschrieben. 
Nachdem sie ihre individuellen Aufgaben erhalten hatten, begannen die anderen mit ihrer Recherche und Planung. 
Stephan setzte sich zusammen mit dem Deployment des Backends. 
### 31.05.2024
Im heutigen Meeting einigten sich Dejan, Gian und Edgar auf das erstellen von individuellen Branches für ihre eigenen Tasks. Diese werden dann rebased und, nach inspektion von Edgar, von Stephan im Github zum Main Branch gemerged. 
Dejan, Gian und Edgar werden heute weiterhin am Frontend arbeiten. Stephan wird weiter an den Endpoints arbeiten. Stephan wird heute die Datenbank durch einen (vermutlich) temporären Workaround lösen, in dem er die Daten in einem Python Array speichert.
### 07.06.2024
Heute hat Stephan mit einer In-Memory Datenbank die benötigten Backend APIs erstellt und ins Backend-Repository gepusht. Dejan und Gian können nun ihre Entwürfe mit dem Backend verbinden.  
Stephan möchte nun das Backend mit einer echten Datenbank verbessern.
Dejan und Gian können jetzt die paths /wishlists und /trips mit den von Stephan erstellten Endpoints verbinden. Rest-Services Get, Post, Delete, Patch...
Edgar fangt heute mit dem Design der Frontends an. 
### 14.06.2024
Stephan entschied sich die Datenbankanbindung vom letzten Mal auf halt zu setzten. Er beschäftigt sich heute indem er versucht das Backend in mehrere Dateien aufzuteilen. Das ist eine Schwierigkeit im Sinne, dass Vercel Serverlose Funktionen anwendet. Hatte schon Erfolg mit JSON files. 
Dejan arbeitet weiterhin an den API und Pathways.  
Gian informiert sich zu dem erstellen des Dockerfiles und versucht unsere Applikation in zwei Images umzuwandeln, welche er dann auf Docker Hub postet. 
Edgar arbeitet weiterhin am design und unterstützt Gian bei der Docker aufsetzung. 