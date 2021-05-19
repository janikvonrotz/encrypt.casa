## Bausteine der Kryptographie

und wie man sie anwendet.

🎯 Sie verstehen weitere Elemente der Kryptografie und wissen was die asymmetrische Verschlüsselung ist.

---
### Ausweg: Asymmetrische Verschlüsselung

> Es ist schwierig den gemeinsamen Schlüssel sicher auszutauschen.

Die Probleme der symmetrischen Krypographie können mit der asymmetrischen gelöst werden.

![](../asymmetrische-verschluesselung.png)

---
### Asymmetrische Verschlüsselung

Man unterscheidet zwischen Public und Private Key

* Public Key ist öffentlich 📢 und dient der Verschlüsselung 🔒
* Private Key ist geheim 🤫 und dient der Entschlüsselung 🔓

ℹ️  Die Verschlüsselung muss mathematisch schwer umkehrbar sein!

---
### Krypto Primitive

Krypto Primitive sind die Grundbausteine. Wir kennen:

* Symmetrische Verschlüsselung
* Asymmetrische Verschlüsselung

Es gibt noch:

* Diffie Hellmann-Schlüsseltausch
* Hash-Verfahren
* uvw.

---
### Problem der Asymmetrischen Verschlüsselung

➖ Algorithmen zur asymmetrischen Verschlüssselung sind zeitaufwendig
➕ Kein sicherer Schlüsselaustausch nötig

---
### Diffie Hellmann Schlüsselaustausch

> Kann man einen Schlüssel über ein unsicheres Medium austauschen?  

Die Wissenschaflter Whitfield Diffie und Martin Hellman haben 1976 festgestellt: **Ja, man kann.**

---
### Der DH-Algorithmus

DH-Algorithmus is komplex, dafür gibt es eine schöne Analogie mit Farben.

1.  Alice und Bob einigen sich auf eine gemeinsame (öffentliche) Farbe
2.  Jeder wählt sich zudem eine geheime weitere Farbe
3.  Alice und Bob mischen sich aus ihrer geheimen und der öffentlichen Farbe eine weitere Farbe

---
### Veranschaulichung DH

![](../diffie-hellmann-farbe.png)

---
### Übungen

🎬 Lösen sie die [Übung](übungen.md) 1.

---
### Hybride Verschlüsselung

![](../hybride-Verschluesselung.png)

* Public/Private Key Krypto ist 1.000 mal langsamer als symmetrische Verschl.
* Daten werden mit einem zufällig generierten Key symmetrisch verschlüsselt
* Der Key wird asymmetrisch verschlüsselt und mitgesendet

---
### Fingerabdruck beim Menschen

 Fingerabdrücke werden benutzt, um Personen mit wenigen Eigenschaften zu identifizieren.
 
 ![](../fingerabdruck.png)

Gleicher Fingerabdruck heisst gleiche Person -> Wie erstellt man einen digitalen Fingerabdruck?

---
### Hash-Funktionen

> Ordnet eine Zeichenketter einer neuen Zeichenketten mit einer festen und vorgegebenen Länge zu.

```mermaid
graph LR;
    A[Hallo Bob, was hast du ... Alice]-->|Hash-Funktion|B[15255ed434];
```

---
### Arten von Hashes


---
### SHA265 mit Python

<iframe src="https://trinket.io/embed/python3/2b43c7b642" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

---
### Einwegfunktion

> Bei einer Einwegfunktion ist es praktisch unmöglich, aus einem möglichen Zielwert einen Ausgangswert so zu bestimmen.

![](../einbahnstrasse.png)

---
### Quersumme




---
### Kollisionsresistenz



---
### Angriffszenarien


---
### Als Nächstes

Weiter geht es mit [GnuPG](slides3.md).