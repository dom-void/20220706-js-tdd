# [e03] Post wrapper
         

## Opis zadania:
Posiadając serwis: [post-service](post-service.js), opakuj poprawnie dane w formacie HTML.  
Użyj TDD — utwórz osobny dla implementacji i dla testu.  
Najpierw przygotuj kilka planów do testu, a następnie: 
- czerwony 
- zielony 
- refaktor

### Wymagania:
Post powinien wyglądać tak:

```html
<h4> {tytuł} ({userId}) </h4>
<p>
   {ciało}
</p>
```

To tylko string (nie DOM Node ani JSX!)

Posty są zwracane przez post-service.js
należy go używać do pobierania postów i tworzenia odpowiedniego wrappera

Wymagania:
- post należy pobrać ze strony: https://dummyjson.com za pomocą osobnego serwisu (post-service).
- każdy post zawiera tytuł użytkownika i treść
- każdy post ma formę ciągu html z nagłówkiem i akapitem

https://github.com/Ovi/DummyJSON
