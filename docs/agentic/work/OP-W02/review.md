# Review — annonce du futur OrdoPro mobile

`REVIEW: PASS_WITH_MINOR` pour le brouillon local, 10 octobre 2026.

Revue indépendante par `/root/site_review`, sans écriture. Le reviewer a relevé deux écarts Major : anciennes CGV publiquement tarifées et ancienne politique de confidentialité présentant des garanties non vérifiées. Après corrections, sa revue finale ne relève aucun Critical ou Major : les URL publiques affichent désormais des notices adaptées, et les versions historiques sont archivées sous `docs/legal/` hors du site servi. Le code mobile et les liens d'application ne sont pas publiés.

Limite : revue statique du reviewer ; essais navigateur, formatage et contrôle des liens exécutés par l'implementer dans `verify.md`. La conformité juridique des nouvelles notices et le traitement des éventuels contrats historiques restent à valider par le propriétaire avant publication. Aucun SHA de PR ni CI distante : pas encore de commit, ticket dédié ou PR.

## Revue de la révision produit — 10 octobre 2026

`REVIEW: PASS_WITH_MINOR`. La revue indépendante a levé les deux écarts Major précédents : disponibilité non établie présentée comme effective, et absence de mention du parcours documentaire SCOR. Le meta et le paragraphe tarifaire qualifient maintenant le socle gratuit d'imaginé/prévu ; le texte de SCOR n'allègue ni télétransmission ni conformité. Les liens d'ancre sont valides, les CTA restent internes. Aucun Major restant dans la passe ciblée. La revue était statique ; l'implementer a rejoué le parcours navigateur mobile et contrôlé la console séparément. Le libellé d'anomalies documentaires demeure générique, conformément au PRD qui ne fixe pas les règles de contrôle ni n'établit leur parité avec Eliane.

## Revue FAQ — 10 octobre 2026

`REVIEW: PASS_WITH_MINOR`. Revue indépendante statique de `/root/site_review` : aucun Critical ni Major. Le périmètre cité par la FAQ correspond au PRD ; le rappel peut ne pas être reçu est explicité. Deux phrases pourraient être raccourcies/ponctuées davantage, sans risque fonctionnel ni de sécurité.

## Revue finale FAQ — 10 octobre 2026

`REVIEW: PASS`. Après corrections de forme, le reviewer indépendant confirme qu’aucun écart Critical, Major ou Minor n’est ouvert pour la FAQ. Revue statique ciblée ; elle ne remplace pas la vérification navigateur/CI ni la validation humaine des notices juridiques.


## Revue de l’extension gratuite — 10 octobre 2026

`REVIEW: BLOCKED`. Revue indépendante statique par `/root/site_review`. Le propriétaire fixe la direction fonctionnelle, mais les capacités annoncées contredisent/dépassent les critères et ADR mobiles existants. Écarts à résoudre avant publication :

- **Critical — Gmail :** l’envoi peut contenir des données patient ; PRD et ADR-011 excluent l’envoi par courriel ordinaire tant que canal, destinataire, contrat et sécurité ne sont pas qualifiés. La confirmation IDEL ne résout pas ce risque.
- **Major — anomalies CPAM :** catalogue non qualifié (F12/R04), tandis que la facturation est hors périmètre V1 (PRD). L’automatisme et la précision ne sont pas prouvés.
- **Major — Google Agenda et échéances 7–10 jours :** export calendrier tiers non décidé (F15/M16) ; cadence attend encore la recherche et validation métier (R01/OP-C12/ADR-006).
- **Major — SCOR :** l’ADR-014 exige format, destination et test d’import avant toute allégation de compatibilité. Le scan et la sortie SCOR sont à distinguer.
- **Major — sans limite :** quotas, volumes, stockage et coûts ne sont pas établis (PRD R09/OP-C11).

Cette branche peut rester en brouillon comme proposition éditoriale reviewable. PRD/ADR/Architecture et recherche produit doivent être mis à jour, puis les choix qui exposent des données de santé validés, avant reprise et nouvelle revue. Aucun changement dans l’app n’est inclus.
