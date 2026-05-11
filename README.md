# llmlogistics-site


LLM Logistics – Website
Offizielle Website von LLM Logistics aus Berlin.
Live: llmlogistics.de
(nach Domain-Verknüpfung mit GitHub Pages)

Projektstruktur
text/
├── index.html          # Startseite / Landingpage
├── impressum.html      # Impressum
├── datenschutz.html    # Datenschutzerklärung
├── assets/
│   ├── logo-nav.png    # Horizontales Logo für Navbar & Footer
│   └── logo-hero.png   # Großes Hero-Logo
├── css/
│   └── style.css       # Gesamtes Styling
└── js/
    └── main.js         # Navigation, Animationen, Kontaktformular

Technischer Stack

HTML5
CSS3
Vanilla JavaScript
Kein Framework
Kein Build-Prozess
Keine externen Abhängigkeiten
System-Font: Helvetica Neue, Helvetica, Arial, sans-serif
Hosting: GitHub Pages
Domain: llmlogistics.de


Design
Element				Wert

Hintergrund			#f5f4f1
Text				#1a1a1a
Akzentfarbe			#4d8a6a
Sekundärtext		#5a5856
Font				Helvetica Neue, Helvetica, Arial, sans-serif

Kontaktformular
Das Kontaktformular versendet keine Daten an einen eigenen Server.
Es öffnet das lokale E-Mail-Programm des Nutzers über mailto: mit einer vorbereiteten Nachricht.
Die Zieladresse befindet sich in:
jsconst CONTACT_EMAIL = 'info@llmlogistics.de';
Datei: js/main.js

Lokale Entwicklung
Das Projekt benötigt keinen lokalen Server.
Einfach die Datei öffnen:
index.html

Deployment mit GitHub Pages
Die Website ist für GitHub Pages vorbereitet.
Für die Domain-Verknüpfung:

www.llmlogistics.de kann per CNAME auf hamidkalaie.github.io zeigen.
llmlogistics.de sollte als Apex-Domain über A-/AAAA-Records oder ALIAS/ANAME eingerichtet werden.
In den GitHub-Pages-Einstellungen sollte die Custom Domain eingetragen werden.
GitHub erstellt bei Branch-Deployment automatisch eine CNAME-Datei im Repository.
DNS-Änderungen können etwas Zeit benötigen.


Wichtige Todos

 Domain llmlogistics.de mit GitHub Pages verknüpfen
 HTTPS in GitHub Pages aktivieren
 Google Search Console nach Go-Live einrichten
 Fahrzeugfoto oder Fuhrparkbild ergänzen
 Umsatzsteuer-ID ergänzen, falls vorhanden
 Impressum und Datenschutzerklärung bei Änderungen aktualisieren


Rechtliche Seiten
Die Website enthält:

impressum.html
datenschutz.html

Diese Seiten sollten vor dem Go-Live final geprüft und bei Änderungen am Unternehmen, Hosting oder Kontaktweg aktualisiert werden.

Kontakt
LLM Logistics
Hamid Kalaie
Berlin, Deutschland
E-Mail: info@llmlogistics.de