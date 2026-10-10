# Research — annonce du futur OrdoPro mobile

`RESEARCH: PASS` · entrée EXISTING · mode STANDARD.

Objectif demandé : site vitrine consultable avant disponibilité de l'application, sans moyen de l'utiliser, sans grille de prix, avec le périmètre prévu de la V1 gratuite.

Socle observé : GitHub Pages sert le HTML/CSS/JS de `public/`. `public/index.html` contient l'offre, les CTA et la navigation ; `public/css/style.css` porte le style ; `public/js/bundle.js` inclut des interactions pour des éléments absents de la page. La CI vérifie Prettier. Aucun backend, compte, tenant ou donnée patient n'est traité par cette page ; seul un lien mailto mène au support.

Le PRD mobile (F01–F17) prévoit une V1 iOS/Android gratuite avec tournées, patients, ordonnances, rappels, OCR, prescriptions, SCOR, brouillons et coordination. La démo actuelle est locale et fictive ; aucune inscription mobile ni fiche store n'est ouverte. Le ticket de lancement OP-W01 (#12) dépend de B02, B05 et C04. Ces dépendances n'empêchent pas une annonce exacte de la direction, mais empêchent de présenter la V1 comme disponible.

Le worktree principal du site contient des changements locaux préexistants. L'exécution est isolée dans `worktrees/website-prelaunch`. Les CGV historiques comportaient des prix. Une copie est conservée sous `docs/legal/` ; l’URL publique `cgv.html` reçoit un message sans prix, à valider juridiquement avant publication. L’ancienne politique de confidentialité décrivait le service web ; elle est archivée, et son URL publique contient maintenant une notice limitée au site statique. GitHub documente que Pages enregistre l’IP des visiteurs à des fins de sécurité (https://docs.github.com/fr/pages/getting-started-with-github-pages/what-is-github-pages). Risques : promesse prématurée, lien d'inscription trompeur, ancien contrat visible, régression du menu mobile. Vérification : textes/liens, Prettier, navigateur desktop/mobile, console et menu. Retour arrière : retirer la page de préannonce ou rétablir le commit du site après publication.

## Ajustement de direction — 10 octobre 2026

Le propriétaire demande une vitrine produit qui présente les usages gratuits inspirés d'Ozzen Start et d'Eliane, sans accroche « pas prête / pas disponible ». Le PRD mobile (`ordopro_mobile/docs/product/PRD.md`, F01–F17) confirme le périmètre : tournées, dossiers et transmissions, scan/classement d'ordonnances, échéances et rappels, prescriptions infirmières, brouillons de renouvellement/transmission/correction, coordination et agenda/journal. Le benchmark Eliane ne justifie pas d'annoncer une parité aux treize règles, une précision OCR garantie, un canal externe autorisé ou des intégrations annoncées comme à venir chez ce fournisseur. Le benchmark Ozzen Start ne justifie pas d'annoncer télétransmission SCOR intégrée, facturation ou fonctions Pro/Premium.

Décision éditoriale : décrire le socle produit gratuit et ses usages, enlever les formulations de pré-lancement et garder des CTA internes (exploration des fonctionnalités) ou de contact. Les descriptions maintiennent la validation de l'IDEL ; aucune inscription, installation ou action métier n'est simulée. Il s'agit d'une vitrine du produit, pas d'une preuve que la V1 est livrée. Aucun prix n'est affiché.
