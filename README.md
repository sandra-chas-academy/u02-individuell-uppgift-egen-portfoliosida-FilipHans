[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)

# Guide lines

This website will start at the projects page where you can navigate with left and right arrow through the cards or click the arrows. Then you can swap between the projects page and the CV page where I list my working and educational experiences. There is also a button to press at the bottom of the CV to see more information and skills. All of the github and other icons have related links to them, so click them!

## interactive features

This project contains a handful of interactive features although a couple of them fall into the same category, these are the buttons that have event listeneres which add classes or change the style of elements to 'block' or 'none'. The main one is the card slider which uses a nodelist to allowed the user to go through the project cards either via clicking the arrow buttons or using their left and right arrow keys. It works by iterating through the nodelist with a variable called active making that current assosciated node the main one and then two 'for loops' to alter the appereance of the nodes behind and ahead of the 'active' one. 

## Strengths

The website is easy to navigate and I think the interactive features are all clear in how they can be used. There is also clarity in when the site is loading in the API information at the start via a loader placed to appear at the start of the API calls and at the end of them.

In regards to the websites SEO and performance it did achieve low to high 90s in all categories from a lighthouse report. 

I think the Javascript code structure is sound, where related code is written in sequence for clarity. Example the API call functions followed by the runner function executing them. Destrucering also proved to increase the readability a lot in what information is used where and should simply if you wanted to change either in the JSON data or the Javascript code. The error handling for API calls also work well, despite the major flaw of limited API calls even if you stumble upon that error the rest of the website is functioning, a positive from the negative i suppose.


## Weaknesses

The main weakness of this website is that the number of calls per hour you are allowed to make to the github API is quite low, this means that once you've capped on API calls the cards do not recieve any data and thus cant display it making the websites project page rather dull.

I do find the design itself, color scheme and so to be a bit boring. Not having a clear design to strive for proved to be a weakpoint for me.

The use of innerHTML has caused a bit of clutter in Javascript code and I feel it does hamper the readability a bit.


## Vad kan man utveckla m.h.a. av JavaScript inom frontend?

Med hjälp av JavaScript så är din störtsa begränsning din kunskap och fantasi. Alla typer av webb applikationer som E-commerce eller sociala media platformer. En av de viktigaste applikationerna är Single-Page Applications (SPAs) som Gmail där innehål uppdateras utan att webbplatsen behöver laddas om. Efter det kan man utveckla Real-Time Applications, Chat appar och samarbetsverktyg som google docs för realtidsuppdateringar. 

Det går att uveckla spel med JavaScript, webb-baserade spel combinerade med t.ex Canvas API eller libraries som Three.js, det blir enkla men fortfarande intressanta spel. JavaScript är också centralt för att skapa en bra användarupplevelse genom att tillhandahålla funktioner som responsiv design, vilket gör att en webbplats fungerar väl på olika enheter och skärmstorlekar.   



## Vad är JSON och hur används det inom frontend?

JSON (JavaScript Object Notation) är ett format för att lagra och överföra data mellan olika system. Det är lättläst för både människor och maskiner och bygger på en struktur av nyckel-värde-par. Inom frontend används JSON främst för att kommunicera med backend-servrar genom API. När en frontend-applikation behöver data som användarprofiler skickar den en förfrågan till servern, ifall förfrågan godkänns skickar servern data i JSON-format.

 Det är också vanligt att skicka data i JSON från frontend till backend, exempelvis när en användare fyller i ett formulär. JSON används också lokalt inom frontend för att spara data temporärt i webbläsarens localStorage eller sessionStorage. 
 
 Verktyg i Javascript som JSON.stringify() och JSON.parse() används för att konvertera data mellan JSON och JavaScript-objekt. Tack vare sin enkla struktur är JSON särskilt användbart när man arbetar med dynamiska applikationer, där data kan ändras eller uppdateras utan att sidan behöver laddas om. 

 JSON spelar en stor roll inom frontend för att hantera data på ett effektivt sätt och hjälper utvecklare enkelt ska applikationer som hämtar och visar information i realtid.
 
## Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP (Hypertext Transfer Protocol) är det protokoll som används för att överföra data mellan en klient, som en webbläsare, och en server. För en frontendutvecklare är kunskap om HTTP väldigt viktig då det är en av byggstenarna som får webbplatser och applikationer att fungera, det behövs för att bygga funktionella gränssnitt som interagerar med en backend

för frontendutvecklare är det viktigt att förstå de olika HTTP-metoder, som GET för att hämta data och POST för att skicka information, eftersom dessa används vid API-anrop. Dessutom behöver man förstå HTTP-statuskoder, som anger om en förfrågan lyckades (200 OK), eller om något gick fel (404 Not Found), beroende på vilken typ av HTTP metod man använder kan dessa statuskoder variera. 

 Genom att förstå protokollets principer kan en frontendutvecklare bygga mer responsiva och pålitliga applikationer som integrerar väl med andra system, samtidigt som man kan felsöka problem som uppstår vid kommunikationen mellan frontend och backend.








