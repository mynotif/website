# Plan — annonce du futur OrdoPro mobile

`PLAN: PASS` pour la préannonce locale (#13) ; publication soumise à la revue de contenu et au traitement des CGV historiques. Mode STANDARD, complexité moyenne, stack HTML/CSS/JS statique conservée.

1. Adapter `public/index.html` : SEO, disponibilité, fonctions prévues, aucun CTA d'inscription ni tarif ; retirer le lien CGV de la navigation de préannonce sans détruire les conditions historiques.
2. Adapter `public/css/style.css` : présentation responsive et états de focus.
3. Remplacer `public/politique_de_confidentialite.html` par une notice limitée à la vitrine et archiver sa version 2023 dans `docs/legal/` ; archiver également les CGV de 2023 et remplacer leur URL publique par une notice sans prix.
4. Remplacer le chargement du bundle devenu incompatible par `public/js/prelaunch.js` pour le menu et l'en-tête.
5. Vérifier Prettier, absence de prix/CTA applicatif sur l'accueil, rendu desktop/mobile, menu, ancres et console.

Aucune API, migration, authentification, donnée sensible ou service externe ajouté. Aucun achat ni déploiement dans Execute. Le ticket GH propre à cette préannonce et le commit unique seront créés au stade Ship si la publication est autorisée ; OP-W01 reste le ticket du lancement complet.

## Révision éditoriale — 10 octobre 2026

La page d'accueil devient une présentation produit du socle gratuit : couverture des usages recensés dans F01–F17 pertinents à la vitrine, CTA vers les fonctionnalités/contact, suppression des statuts de pré-lancement. Conserver la confirmation humaine sur les données, prescriptions et échanges ; ne pas annoncer les treize règles d'Eliane comme couvertes, la télétransmission intégrée, ni l'accès store/inscription. Vérifier liens, navigation, rendu mobile/desktop et formulation sans statut de non-disponibilité.

## FAQ OrdoPro — 10 octobre 2026

Ajouter une section FAQ à `public/index.html`, reliée à la navigation, avec des questions originales inspirées des thèmes d'Eliane et Ozzen : gratuité, facturation, formats/OCR et relecture, rappels, brouillons d'échanges, usage en cabinet. Employer les contrôles natifs `<details>/<summary>` pour l'accessibilité et éviter un nouveau JavaScript ; créer des styles cohérents dans `public/css/style.css`, responsive et visibles au clavier. Vérifier le contenu au PRD, les ancres, l'ouverture/fermeture des réponses sur desktop/mobile, le formatage et la console. Aucun tarif ni garantie concurrente non vérifiée.
