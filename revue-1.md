# Revue de code 1

## Le code

- L'indentation du code et conforme pour ce qu'il y a
- Le nommage des fonctions et des variables est acceptable

## Autres

- Le code dans le ScoreView (le tableau des scores) doit être dans un composant pour mieux séparer le code

  ```md
  <script>
    import { Player } from "../scripts/player";
    const players = ref<Player>([])
  </script>

  <template>
    <p>scores</p>
    
  </template>

  <style>
  </style>

  ```

Voici la source pour voir comment faire une revue de code [Bonnes pratiques de revue de code](https://appweb.progwmj.ca/documentations/bonnes-pratiques/revue-code)
