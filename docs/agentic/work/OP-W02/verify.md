# Verify — annonce du futur OrdoPro mobile

`VERIFY: PASS` pour le brouillon local, le 10 octobre 2026.

| Critère | Preuve | Résultat |
|---|---|---|
| Disponibilité honnête | Capture navigateur desktop/mobile, texte « en préparation », aucun compte ouvert | PASS |
| Fonctions de V1 gratuite | Six cartes, conformité documentaire au PRD mobile F01–F17 | PASS documentaire |
| Aucun CTA vers l'application | Analyse HTML des liens et parcours navigateur | PASS |
| Aucun tarif sur l'accueil | Recherche dans `public/index.html` | PASS |
| Navigation responsive | Playwright à 390 px : menu ouvre/ferme, ancre Disponibilité atteinte, largeur page = largeur viewport | PASS |
| Confidentialité de la vitrine | Lien du pied de page ouvert dans Playwright ; GitHub Pages documente la journalisation IP | PASS factuel, revue juridique humaine à suivre |
| Code et console | `npx prettier --check public/`, `git diff --check`, console navigateur | PASS, 0 erreur/avertissement |

Rendu : `output/playwright/prelaunch-desktop.png` et `output/playwright/prelaunch-mobile.png` dans le worktree. Test local avec `python3 -m http.server 8765 --directory public` et Playwright CLI. Prévisualisation Vercel (target preview) créée : https://public-7xvz6bxg0-issadiallos-projects.vercel.app ; accès protégé par authentification Vercel. Aucune publication sur ordopro.fr ni CI distante exécutée. L’URL publique des CGV ne comporte plus de prix. Les copies historiques des CGV et de la politique restent publiques via le dépôt GitHub, mais ne sont pas servies par le site. Revue juridique humaine nécessaire avant publication. À 390 px, le lien Disponibilité a mis à jour le fragment `#availability`, déplacé le focus et fermé le menu ; largeur document = 390 px, console à 0 erreur.

## Révision de la vitrine produit — 10 octobre 2026

`VERIFY: PASS` sur la révision éditoriale. `npx prettier --check public/` et `git diff --check` passent. Le parcours navigateur local a été rejoué à 390 px : le bouton « Découvrir OrdoPro » atteint `#features`, le menu mobile s'ouvre et se ferme, et la console rapporte 0 erreur / 0 avertissement. Le contenu expose neuf blocs fonctionnels, y compris les pièces utiles au parcours SCOR, sans tarif, lien d'inscription, statut explicite d'indisponibilité, promesse de télétransmission ou de conformité SCOR. Captures rafraîchies : `output/playwright/prelaunch-desktop.png` et `output/playwright/prelaunch-mobile.png`. La revue indépendante confirme qu'aucun Major ne reste après reformulation au futur/imaginé du socle gratuit ; revue statique. CI distante et preview de la tête de PR restent à relancer après push.

## Vérification FAQ — 10 octobre 2026

`VERIFY: PASS` pour la FAQ. Les sept questions couvrent le socle gratuit, la facturation, les documents/OCR et relecture, les rappels, les brouillons d'échanges et le travail en cabinet. Le contenu a été recoupé avec le périmètre V1 du PRD ; la réponse rappels précise qu'une notification peut ne pas être reçue. Aucun tarif ni promesse concurrente n'est repris. `npx prettier --check public/` et `git diff --check` passent. Parcours Playwright sur la page locale à 390 px et 1440 px : ancre #faq atteinte, menu desktop montre le lien FAQ, une réponse native s'ouvre ; console sans erreurs ni avertissements. Captures FAQ : `output/playwright/prelaunch-faq-desktop.png` et `output/playwright/prelaunch-faq-mobile.png`. La revue indépendante statique finale est PASS, sans remarque ouverte. CI GitHub `deploy` et statut Vercel Preview : PASS sur le commit `944feb1`.


## Vérification de l’extension gratuite — 10 octobre 2026

`VERIFY: PASS` sur le rendu et les interactions, mais gate produit `BLOCKED`. Playwright sur le worktree du site : les mentions SCOR, 7–10 jours, CPAM, sans limite, Gmail et Google Agenda apparaissent sur desktop et mobile ; FAQ visible ; console à 0 erreur/avertissement. `npx prettier --check public/` et `git diff --check` passent. Captures : `output/playwright/prelaunch-features-desktop.png`, `output/playwright/prelaunch-features-mobile.png`, `output/playwright/prelaunch-faq-mobile.png`. Ces contrôles statiques et navigateur ne prouvent pas que l’application réalise ces fonctions. Revue indépendante a relevé un Critical et plusieurs Major ; voir `review.md`. CI/Preview ne valent pas approbation produit.
