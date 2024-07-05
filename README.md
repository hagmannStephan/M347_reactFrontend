# M346 + M426 Abschlussprojekt von Edgar, Stephan, Dejan und Gian
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
### 21.06.2024
Der Main Branch wurde protected. Das bedeutet, dass niemand mehr direkt auf den Main pushen kann. So werden unnötige Fehler vermieden. Nun muss jeder seinen eigenen Branch erstellen, diesen mergen und auf Stephan's Genehmigung warten.
Stephan kümmert sich heute noch um das Backend und dessen API-Verbindung zur Datenbank. Der GET Rest Service funktioniert. Die anderen Dienste noch nicht.  
Dejan hat heute seinen Teil des Frontends fertiggestellt. Mit der Änderung, die den Main Branch schützt, hat er wieder Probleme mit seinem GitHub. Stephan und Edgar helfen ihm, damit das Frontend endlich zusammenkommen kann.
Gian hat einen Workflow zum Front- und Backend hinzugefügt, der bei jedem neuen Merge auf den Main ein File im Workflow auslöst. 
Diese Datei erstellt ein Docker Image und veröffentlicht es auf dem Docker Hub. Nun arbeitet er daran, dass das neue Image automatisch aufzusetzen... Dann ist die Pipeline fertig. 
Edgar hat seinen Teil des Frontends fertiggestellt. Nun mergt er seinen Teil ein und stellt sicher, dass die anderen Teile des Frontends zusammen koheränt funktionieren. 

Stephan konnte Schlussendlich die Vercel Datenbankänderungen nicht vervollständigen, da es in der Dokumentation falsche Angaben gab. 
### 28.06.2024
Das Projekt ist im Wesentlichen abgeschlossen. Kleinere Verbesserungen und Refactoring sind jetzt an der Reihe. Edgar arbeitet an Verbesserungen des Frontends. Stephan am Backend. Die Tasks und Issues werden dann doppelt geprüft. 
Gian schreibt die Testfälle der Pipeline und übernimmt den größten Teil des Projekts. Edgar übernimmt für ihn den Teil des Frontends. 
Dejan beendet seinen Teil des Frontends. Er hat noch Probleme mit seinem Github... Aber das sollte bis zum Ende des Tages behoben sein.
Das Projekt kann heute beendet werden. 

### 05.07.2024 — Letze Woche
Das Projekt wird heute beendet. Der letzte Commit und Merge wird diese Änderung der ReadMe Datei sein. 
#### Sprint review
Grundsätzlich ging das Projekt mühelos und unproblematisch vorbei. Wir hatten keinerlei Zeitdruck. Das aufteilen der Aufgaben musste angepasst werden, aber das war Unvorhersehbar. Wir haben aber adaptiert.

Der Product Owner ist sehr zufrieden mit dem Produkt. Das Backend gefällt ihm besonders. Er meinte, der Type der das Backend gecoded hat sollte eine Lohnerhöhung bekommen... Aus einer unvoreingenommene Perspektive sollte man aber unter Berücksichtigung, dass das Backend keine Datenbank hat. Klar war das die Schuld der Vercel Dokumentation. Genauer, deren Fehlen. 

Zum Frontend hatte der Product Owner auch ein paar Worte. Dass einige Buttons keine verlinkung haben (Instagram, Facebook, Login) oder das wir eine Deutsche Version scheinbar offerieren, darauf aber kein Zugriff zur verfügung steht, findet er besonders Interessant. Das ist aber die Schuld des Budgets des Kundes.
#### Verbesserungsvorschläge
Beim Deployen von Docker-Hub auf digital ocean würden Kosten anfallen. Aus diesem Grund
haben wir die Schritte für das deploymend dokumentiert, aber nicht ausgeführt. 
Es würde aber funktionieren, da die gesammte Pipeline funktioniert. 

Die Datenbankverbindung zum Backend ist nicht geschehen. Das war unvorhersehbar. Wir sollten vor dem beginn des Projektes die Zeit genommen haben, uns mit Vercel genauer familiär zu machen.

