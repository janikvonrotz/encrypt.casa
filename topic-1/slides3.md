## GnuPG

ist ein Werkzeug zum sicheren Nachrichten austausch.

🎯 Sie verstehen was GnuPG ist und können es anwenden.

---
### Pretty Good Privacy

* GnuPG ist eine Implmentation von OpenPGP aka PGP
* PGP ist eine Sammlung von Geheimschlüsselalgorithmen zur Verschlüsselung einer Nachricht
* PGP setzt auf eine hybride Verschlüsselung

---
### Hybride Verschlüsselung

![](../hybride-Verschluesselung.png)

* Public/Private Key Krypto ist 1.000 mal langsamer als symmetrische Verschl.
* Daten werden mit einem zufällig generierten Key symmetrisch verschlüsselt
* Der Key wird asymmetrisch verschlüsselt und mitgesendet

---
### PGP-Entschlüsselung

![](../pgp-entschluesselung.png)

Der Situngsschlüssel wird mit dem privaten Schlüssel entschlüsselt.

---
### E-Mail ist unsicher

> Warum schicken wir Briefe nicht als Postkarten? Mit E-Mail tun wir genau das.

E-Mails werden heute in den meisten Fällen sicher übertragen. Alle anderen [Sicherheitsziele](slides0.md#Sicherheitsziele) werden aber verletzt.

---
### Direktes Vertrauen

Damit sicher kommuniziert werden kann, braucht es ein direktes Vertrauen.

![](../direktes-vertrauen.png)

---
### Vertrauensstufen



---
### Übungen

🎬 Lösen sie die [Übung](übungen.md) 2.

---
### Als Nächstes

Weiter geht es mit [Lektion 2 - Zertifikate, Signaturen und Protokolle](../topic-2/README.md).
