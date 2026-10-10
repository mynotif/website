# Ship — annonce du futur OrdoPro mobile

`SHIP: READY_FOR_HUMAN`. Ticket : https://github.com/mynotif/website/issues/13. PR draft : https://github.com/mynotif/website/pull/14. Worktree : `worktrees/website-prelaunch`, branche `feat/site-mobile-prelaunch`.

Preview Vercel de la branche : https://public-git-feat-site-mobile-prelaunch-issadiallos-projects.vercel.app. La protection actuelle exige une connexion Vercel. `ordopro.fr` n'est pas déployé.

Dernière revue indépendante : PASS_WITH_MINOR, aucun Critical/Major ouvert. CI GitHub `deploy` et statut Vercel Preview sur la tête de PR `370ac16` : PASS. Le site présente le socle mobile gratuit visé sans formulation frontale de non-disponibilité, et sans promesse non vérifiée de télétransmission ou conformité SCOR.

Avant merge/publication, le contenu juridique des notices et le traitement des éventuels anciens contrats restent à valider humainement. Aucun merge ni déploiement de production demandé.

## Mise à jour FAQ — 10 octobre 2026

Sept questions-réponses ont été ajoutées à la vitrine et au menu, avec accordéons natifs accessibles, sans prix. Elles reprennent les thèmes pertinents d'Eliane et Ozzen, mais restent fondées sur le PRD OrdoPro. Vérification navigateur local et revue indépendante FAQ finale : PASS, aucun écart ouvert. (La première passe PASS_WITH_MINOR a été résolue avant validation finale.) Captures incluses dans `output/playwright/`. CI GitHub `deploy` et statut Vercel Preview : PASS sur `944feb1` (10 octobre 2026). La preview protégée est accessible après connexion Vercel.


## Extension de l’offre gratuite — 10 octobre 2026

`SHIP: BLOCKED` avant merge/publication. Les nouveaux claims sont visibles sur la branche de PR pour revue, mais la revue indépendante `BLOCKED` relève un Critical Gmail et plusieurs Major. CI/Preview peuvent passer sans lever ce gate. Reprendre seulement après cadrage/validation PRD et ADR pour Gmail, Google Agenda, cadence, contrôle CPAM, format SCOR et quotas/coûts, puis nouvelle Verify/Review.

## Décision explicite du propriétaire — 10 octobre 2026

Le propriétaire demande de garder les nouvelles annonces, de merger la vitrine et de cadrer les risques produit dans les dépôts applicatifs. Cet ordre autorise la publication malgré la revue indépendante `BLOCKED` ; il ne change pas son verdict et ne signifie pas que les intégrations sont implémentées ou validées. Suivi créé : [mobile #61](https://github.com/mynotif/ordopro_mobile/issues/61), [backend #259](https://github.com/mynotif/mynotif-backend/issues/259), [infra #19](https://github.com/mynotif/mynotif-infra/issues/19), en plus des tickets de cadrage déjà ouverts liés depuis #61. La PR merge déploie GitHub Pages sur le domaine configuré `ordopro.fr`. Aucun code applicatif ou connecteur n’est inclus dans cette livraison.
