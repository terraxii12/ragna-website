# Ragna – Roman-Website

Statische Lese-Website auf Basis von [Astro](https://astro.build).

## Lokal starten

```
npm install
npm run dev
```

Dann im Browser `http://localhost:4321` öffnen.

## Neues Kapitel hinzufügen

1. Neue Datei in `src/content/chapters/` anlegen, z. B. `kapitel-02.md`
2. Oben den Kopfbereich ausfüllen:

```
---
title: "Titel des Kapitels"
number: 2
part: "Durotar"                   # Teil/Region (optional)
summary: "Ein Satz zum Inhalt (optional)"
cover: "/images/kapitel-02.jpg"   # optional, Bild liegt in public/images/
interlude: false                  # true = Zwischenspiel
draft: false                      # true = noch nicht veröffentlichen
---
```

3. Darunter den Kapiteltext in Markdown schreiben (`---` allein in einer Zeile = Szenenwechsel).
4. Speichern, hochladen/pushen – die Seite baut sich neu.

## Texte der Seite ändern

Titel, Untertitel und Fan-Hinweis stehen in `src/config.ts`.
