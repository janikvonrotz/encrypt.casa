## Übungen

zu [README](README.md)].

### Aufgabe 1 - Zertifikat betrachten

Wir schauen uns ein Zertifkat an. Öffnen sie die Adresse <https://example.com> in ihrem Browser und schauen sie sich das Zertifikat an. Hier das Vorgehen im Firefox:

![firefox-zertifikat-anzeigen](../firefox-zertifikat-anzeigen.gif)

Beantworten sie die folgenden Fragen:

* Wie lange ist das Zertifikat gültig?
* Sie lautet die Seriennummer des Zertifikats?
* Wie lautet die Kennung des Zertifikatsinhabers?
* Wie lautet der Name des Zertifikatsausstellers?
* Welcher Signaturalgorithmus ist zum Einsatz gekommen?

### Aufgabe 2 - Zertifikat verifizieren

Öffnen sie das Zertifikat zu <https://example.com> erneut. Überprüfen sie die Zertifikatskette und kopieren sie den SHA1-Fingerprint des Root-Zertifikats und merken sie sich den *Common Name*.

Der Fingerpint sieht ungefähr so aus: `A8:98:5D:3A:65:E5:E5:C4:B2:D7:D6:6D:40:C6:DD:2F:B1:9C:54:36` und der Name kann `DigiCert Global Root CA` sein.

Suchen sie das Root-Zertifikat in den Einstellungen des Browsers. Bei Firefox navigieren sie nach *Einstellungen > Datenschutz & Sicherheit > Sicherheit > Zertifikate anzeigen ...* und öffnen den Tab *Zertifizierungsstellen*. Exportieren sie das Zertifikate und importieren sie es in *Kleopatra*.

Vergleichen sie den Browser-Fingerabdruck mit dem Fingerabdruck in Kleopatra. Stimmer dieser überein?

### Aufgabe 3 - SSL Check

Öffnen sie die Webseite <https://www.ssllabs.com> und geben sie die Adresse `digitec.ch` ein und starten sie den Scan-Vorgang. Wenn sie das Resultat erhalten, beanworten sie die folgenden Fragen:

