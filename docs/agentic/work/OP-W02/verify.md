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
