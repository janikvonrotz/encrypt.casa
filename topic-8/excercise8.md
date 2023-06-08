# Übungen Thema 8

## Aufgaben

### Aufgabe 1 - Chat mit TCP

Für diese Aufgabe wird [Nmap](https://nmap.org) benötigt. Laden Sie es für Windows [hier](https://nmap.org/download.html#windows) herunter und installieren Sie Nmap mit den Standardoptionen.

**Kommandozeile starten**

Windows: Starten Sie *Command Prompt* / `cmd.exe`\
Linux: Starten Sie das *Terminal*.

**IP-Adresse ermitteln**

Windows: Geben Sie den Befehl `ipconfig` ein\
Linux: Geben Sie den Befehl `ifconfig` oder `ip address` ein.

Suchen Sie nach dem Wireless LAN Adapter und notieren Sie sich die IPv4 Adresse.

**Server starten**

Starten Sie einen Ncat Server auf dem Port `4444`.

Windows: `ncat -l 4444`\
Linux: `nc -l 4444`

**Client starten**

Starten Sie einen Client und verbinden Sie sich mit der IP-Adresse ihres Nachbarn.

Windows: `ncat $IP 4444`\
Linux: `nc $IP 4444`

Wenn das Eingabefeld leer bleibt ist eine Verbindung zustande gekommen und Sie  können Nachrichten eintippen und mit `Enter` schicken. Dasselbe funktioniert auch auf dem Server. Beenden Sie die Verbindung mit <kbd>ctrl</kbd> + <kbd>c</kbd>. 

::: warning
Der Ncat Serverr kann nur eine Verbindung halten. Wenn der Client die Verbindung abbricht, wird der Server-Prozess beendet und muss zur erneuten Verbindung wieder gestartet werden.
:::

### Aufgabe 2 - Netzwerk scannen

Mit Nmap und dem installierten GUI Zenmap können Sie das lokale Netzwerk scannen.

**Scan starten**

Öffnen Sie die Applikation Zenmap und geben Sie als Ziel das lokale Netzwerk ein `192.168.1.0/24` (entsprechend Anpassen). Starten Sie den Scan-Vorgang.

![Capture](zenmap-caputre.png)

Beantworten Sei die folgenden Fragen:

* Wieviele Hosts sind im Netzwerk?
* Welche Dienste sind im Einsatz?
* Was wäre ein nächster Schritt

**Internet scannen**

Sie können mit Nmap auch das ganze Internet scannen und Netzwerk-Geräten durchsuchen. Es gibt entsprechende Suchmaschinen wie [Shodan](https://beta.shodan.io). Dazu ein Beispiel zur Webcams.

Mit dem Query <https://beta.shodan.io/search?query=webcamxp> findet man Webcams, welche die Software *webcamxp* einsetzen. Hier ein Beispiel <http://109.233.191.130:8080/>.

### Aufgabe 3 - Sniffing mit Wireshark

Für diese Aufgabe brauchen wir [Wireshark](https://www.wireshark.org/download.html).

Mit Wireshark kann man im verbunden Netzwerk die übertragenenen Pakete mitlesen. Natürlich nur so fern die unverschlüsselt sind.

**Capture starten**

Installieren Sie das Programm und starten Sie einen *Capture.*

**Nachricht versenden**

Der Dozent wird auf seinem Linux-Gerät einen UDP-Server starten

`nc -luk 12101`

Anschliessend wird die Dozentin eine UDP-Nachricht verschicken.

`echo -n "some dark secret" | nc -u -b 255.255.255.255 12101`

**Nachricht lesen**

Können Sie die Nachricht mitlesen? Um die Nachricht besser zu filtern können Sie diesen Filter verwenden:

`udp.port == 12101`