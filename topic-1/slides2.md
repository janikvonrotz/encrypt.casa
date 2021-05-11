## Bausteine der Kryptographie

und wie man sie anwendet.

---
### Ausweg: Asymmetrische Verschlüsselung

Die Probleme der symmetrischen Krypographie können mit der asymmetrischen gelöst werden.

![](../Asymmetrische%20Verschluesselung.png)

---
### Asymmetrische Verschlüsselung

Man unterscheidet zwischen Public und Private Key

* Public Key ist öffentlich 📢 und dient der Verschlüsselung 🔒
* Private Key ist geheim 🤫 und dient der Entschlüsselung 🔓

ℹ️  Die Verschlüsselung muss mathematisch schwer umkehrbar sein

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
### Hybride Verschlüsselung

![](../Hybride%20Verschluesselung.png)

* Public/Private Key Krypto ist 1.000 mal langsamer als symmetrische Verschl.
* Daten werden mit einem zufällig generierten Key symmetrisch verschlüsselt
* Der Key wird asymmetrisch verschlüsselt und mitgesendet

---
### Problem der Asymmetrischen Verschlüsselung

