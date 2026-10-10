# Review — annonce du futur OrdoPro mobile

`REVIEW: PASS_WITH_MINOR` pour le brouillon local, 10 octobre 2026.

Revue indépendante par `/root/site_review`, sans écriture. Le reviewer a relevé deux écarts Major : anciennes CGV publiquement tarifées et ancienne politique de confidentialité présentant des garanties non vérifiées. Après corrections, sa revue finale ne relève aucun Critical ou Major : les URL publiques affichent désormais des notices adaptées, et les versions historiques sont archivées sous `docs/legal/` hors du site servi. Le code mobile et les liens d'application ne sont pas publiés.

Limite : revue statique du reviewer ; essais navigateur, formatage et contrôle des liens exécutés par l'implementer dans `verify.md`. La conformité juridique des nouvelles notices et le traitement des éventuels contrats historiques restent à valider par le propriétaire avant publication. Aucun SHA de PR ni CI distante : pas encore de commit, ticket dédié ou PR.

## Revue de la révision produit — 10 octobre 2026

`REVIEW: PASS_WITH_MINOR`. La revue indépendante a levé les deux écarts Major précédents : disponibilité non établie présentée comme effective, et absence de mention du parcours documentaire SCOR. Le meta et le paragraphe tarifaire qualifient maintenant le socle gratuit d'imaginé/prévu ; le texte de SCOR n'allègue ni télétransmission ni conformité. Les liens d'ancre sont valides, les CTA restent internes. Aucun Major restant dans la passe ciblée. La revue était statique ; l'implementer a rejoué le parcours navigateur mobile et contrôlé la console séparément. Le libellé d'anomalies documentaires demeure générique, conformément au PRD qui ne fixe pas les règles de contrôle ni n'établit leur parité avec Eliane.
