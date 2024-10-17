> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Visitekaartje
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Redesign je visitekaartje met Node en data uit de [whois.fdnd.nl](whois.fdnd.nl) API.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Dit visitekaartje laat zien wie ik ben, wat ik leuk vind en waar ik te vinden ben.
Er staat een korte biografie over wat ik doe met daaronder overige belangrijke informatie zoals mijn huidige woonplaats, emailadress, github profiel en codepen profiel.
Er is de mogelijkheid om te hoveren over mijn profielfoto, als je dit doet verschijnt er een reeks van tekeningen en schilderijen die ik in mijn vrije tijd heb gemaakt! Op deze manier laat ik mijn talent zien.
<!-- Voeg een mooie poster visual toe 📸 -->
![FDNDVisitekaartje-GoogleChrome2024-02-0816-09-53-Trim1-ezgif com-video-to-gif-converter](https://github.com/Annevd/connect-your-tribe-profile-card/assets/144004647/d7e4eaaf-d2e9-4775-9230-49fda238c85a)

<!-- Voeg een link toe naar Github Pages 🌐-->
[Link naar mijn visitekaartje]([https://fierce-jade-chipmunk.cyclic.app/](https://connect-your-tribe-profile-card-8nf5.onrender.com/))

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De HTML is opgedeeld in een ```<article>``` met daarin een ```<header>```, ```<ul>```'s met daarin ```<li>```'s,  ```<p>```'s en waar nodig een paar ```<div>```'s en ```<span>```'s. Met CSS heb ik de foto's en de hover me tekst absoluut gepositioneerd en heb ik met een combinatie van Javascript (```'mouseenter'``` & ```'mouseleave'```) en keyframe animations ervoor gezorgd dat je kan hoveren over de foto's. Als je erover hovert verschijnt er een slideshow door middel van die keyframe animatie. Op mobiel scherm is dit met een ```'click'``` event.
Informatie zoals mijn naam, bio, adress en alle links komen uit de FDND API.

## Installatie

## Gebruik

Om mijn visitekaartje te [bekijken]([https://fierce-jade-chipmunk.cyclic.app/](https://connect-your-tribe-profile-card-8nf5.onrender.com/)) kan je op de link klikken in de about sectie van deze repo.

## Bronnen

- [Cyclic Hosting](https://www.cyclic.sh/)
- [Nodejs.org](https://nodejs.org/en/)
- [Introduction to Node](https://nodejs.dev/en/learn/)
- [FDND API](https://whois.fdnd.nl)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

