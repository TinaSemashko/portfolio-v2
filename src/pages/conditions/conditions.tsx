import { List, ListItem, Typography } from '@mui/material';
import Logo from '../../images/logo.png';

import * as S from './conditions.styled';

const Conditions: React.FC = () => {
  const fontSizeTitle = {
    xxs: '1rem',
    xs: '1.2rem',
    sm: '1.4rem',
    md: '2rem',
    lg: '2.4rem',
    xl: '2.6rem',
    xxl: '2.7rem',
  };

  return (
    <S.MainContainer>
      <S.Title>
        <S.FlexBox>
          <img src={Logo} alt="Logo" width="40vw" height="40vh" />
          <Typography variant="h4" sx={{ fontSize: fontSizeTitle }}>
            Akateria Web Studio
          </Typography>
        </S.FlexBox>

        <Typography variant="h1">CGV site Web</Typography>
        <Typography variant="h3" sx={{ fontSize: fontSizeTitle, textAlign: 'center' }}>
          Conditions générales de vente : Développement de site Web / Extranet
        </Typography>
      </S.Title>

      <S.BodyBox>
        <S.ChapterContainer variant="h2">Préambule</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le Prestataire: Ces présentes Conditions Générales de Vente (CGV) s'appliquent à chaque prestation effectuée
          par Tina SEMASHKO (Akateria Web Studio) (ci-après le "Développeur") ― Développeur web indépendant inscrit au
          Répertoire des Entreprises et des Établissements sous le SIRET 929 791 820 00012 ― pour le compte d'un
          particulier ou professionnel (ci-après le "Client").
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          <b>
            Le client déclare avoir pris connaissance et avoir accepté les conditions générales de vente antérieurement
            à la passation de la commande. La validation de la commande vaut donc acceptation des conditions générales
            de vente.
          </b>
        </S.ParagraphContainer>

        <S.ParagraphContainer variant="body1">Types de services fournis par le Développeur: </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          <List>
            <ListItem>Création de sites Web et d'applications mobiles</ListItem>
            <ListItem>Consultations sur le lancement de programmes d'affiliation pour des biens/services.</ListItem>
            <ListItem>
              Consultations sur la stratégie marketing dans le lancement/promotion de biens et services sur Internet.
            </ListItem>
            <ListItem>Optimisation technique SEO des sites internet, création et analyse de leur structure.</ListItem>
            <ListItem>
              Analyse du trafic de recherche, résolution des problèmes des sites avec moteurs de recherche.
            </ListItem>
            <ListItem>Sélection et configuration de systèmes et réseaux publicitaires pour sites Web.</ListItem>
            <ListItem>
              Mise en place et optimisation de serveurs (Linux, Windows, MacOS) pour sites web et outils de marketing en
              ligne.
            </ListItem>
          </List>
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 1. Objet – Domaine d’application</S.ChapterContainer>

        <S.ParagraphContainer variant="body1">
          Les présentes CGV déterminent les droits et obligations des parties dans le cadre de toute prestation de toute
          nature, effectuée par le Développeur dans le monde entier. Elles pourront être modifiées ou complétées si le
          Développeur établit un ou plusieurs éléments contractuels qui, le cas échéant, tiendraient lieu de conditions
          particulières.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur se réserve la possibilité de modifier, réactualiser ou rectifier les présentes CGV, à tout
          moment, par la publication d’une nouvelle version sur son site Internet, notamment afin de prendre en compte
          une évolution législative, réglementaire, jurisprudentielle et/ou technique.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          L’actualisation ne concerne en aucun cas les prestations déjà exécutées ou en cours d’exécution, sauf pour
          celles dont la durée restante est supérieure à six (6) mois à la date de modification. Dans ce cas, les
          dernières CGV sont mises en application entre les parties. Dans le cas où l’une des dispositions des présentes
          CGV est déclarée (ou réputée) nulle ou non écrite par un tribunal compétent, les autres dispositions restent
          intégralement en vigueur et doivent être interprétées de façon à respecter l’intention originelle des parties
          exprimée dans ce document.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Client déclare par ailleurs être en mesure de contracter légalement en vertu des lois françaises ou
          valablement représenter la personne physique ou morale pour laquelle il s’engage.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 2. Conditions d’exécution du contrat</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Dès lors qu’un devis ou tout autre élément contractuel a dûment été signé et retourné par e-mail, courrier ou
          main propre, le Développeur a pour obligation de réaliser la prestation et le Client de s’acquitter des sommes
          dues pour celle-ci.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          La réception du premier acompte implique l’allocation souvent immédiate de ressources sur le projet. Ainsi,
          aucun délai de rétractation n’est prévu après réception de ce-dit acompte. Aucune annulation de commande ne
          pourra donc être invoquée sans l’accord préalable du Développeur. A défaut, le Client reste redevable des
          sommes dues.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Client est conscient que son implication pleine et entière est essentielle au bon déroulement du projet
          afin de garantir que le résultat final corresponde à ses attentes, en termes de qualité comme de délais. Ce
          projet suppose ainsi une collaboration étroite entre les parties et un dialogue permanent dans un esprit de
          confiance et de respect mutuel.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          En cas de manque d’investissement clair de la part du Client, un résultat non conforme à ses attentes ne
          saurait relever de la responsabilité du Développeur.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur peut décider de refuser, d’interrompre ou de modifier la prestation et ce, sans indemnités au
          profit du Client ni remboursement d’acompte, dès l’instant où :
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Le Client ne s’acquitte pas des sommes facturées par le Développeur ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Le Client ne démontre pas, ou plus, un gage suffisant de solvabilité ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Le Client manifeste une opposition systématique aux conseils et prestations prodigués par le Développeur ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Le Client se refuse à fournir les instructions ou sources nécessaires à la réalisation définitive de la
              prestation ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Le Développeur constate tout acte de piratage, de fraude ou de non-respect des règles éthiques, juridiques
              ou morales de la profession, imputable au Client.
            </ListItem>
          </List>
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur se réserve par ailleurs le droit d’apporter des modifications non substantielles à ses
          prestations, sans que cela ne vienne remettre en cause les liens contractuels ni les obligations entre les
          deux parties.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 3. Prix – Facturation</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le prix indiqué sur la facture est ferme, exprimé en Euro et toutes taxes comprises.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Lors de la commande de toute prestation, le Développeur demande le versement d’un acompte n’excédant pas 50%
          du montant total à facturer. Une fois la réception de l’acompte, le Développeur peut débuter la réalisation du
          projet.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Selon la durée effective du projet de conception, le Développeur peut demander le paiement d’un second acompte
          à mi-projet. La date de versement et le montant de cet acompte seront décidés d’un commun accord entre les
          parties.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Ces acomptes sont versés au comptant. En cas de non-versement des acomptes aux jalons donnés, le Développeur
          se réserve le droit de suspendre la prestation.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Jusqu’au paiement intégral des sommes dues, le Développeur reste, sauf mention contraire, propriétaire de
          l’ensemble des éléments du projet. Le Client ne peut donc prétendre à une quelconque propriété sur tout ou
          partie des éléments de la prestation tant que cette dernière n’est pas achevée.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Toute prestation supplémentaire et non mentionnée lors de l’élaboration du cahier des charges ou du/des
          document(s) définissant les besoins et les prestations, fera l’objet d’une nouvelle facture et d’un avenant
          sur le contrat de prestation. En cas d’acceptation mais de non-paiement de cette prestation supplémentaire,
          l’ensemble des prestations pourront être suspendues ou annulées de plein droit par le Développeur.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 4. Délais et livraison</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          La livraison de la prestation, sauf mention du Développeur, se fait dans un délai d’un (1) à deux (2) jours
          ouvrables suivant la réception du paiement des sommes dues par le Client.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Sauf accord entre les deux parties, la livraison ne peut être mise en place qu’une fois la prestation
          complètement terminée, sous réserve du paiement complet de la prestation.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Tout retard imputable au Client sera à ajouter à la durée de la prestation, et notamment les retards liés à un
          manque de réactivité dans les décisions à prendre en cours de développement ou à la fourniture de contenus et
          autres éléments.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Les délais de livraison ne sont pas rigoureux, étant dépendants de nombreux facteurs variables, et ne sont
          donc donnés qu’à titre indicatif, sauf stipulation contraire dans l’élément contractuel. Un projet terminé en
          avance pourra ainsi être livré en amont de la date de livraison.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          A noter que toute prestation additionnelle reporte la date de livraison du temps nécessaire à sa réalisation
          et ne pourra donc pas être considérée comme un retard sur la livraison initialement prévue.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 5. Phases de recettage et garantie "vices cachés"</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le Client sera amené, en amont de la livraison de la prestation, à vérifier la bonne réalisation de son site
          Internet par une phase de recettage. Durant cette dernière, le Client testera en ligne l’ensemble des
          fonctionnalités de son futur site Internet en vue de vérifier sa conformité avec le devis ou cahier des
          charges établi. Le Développeur sera notifié par compte-rendu écrit (email, courrier) de l'issue de ce test.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Si le Client considère que la prestation n’est pas conforme au devis et/ou éventuellement à la dernière
          version validée du cahier des charges par les deux parties, il listera dans son compte-rendu les défauts de la
          prestation et en fournira les preuves. Si aucun défaut n'est constaté, la prestation sera jugée validée et
          apte à une mise en ligne définitive.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          La résolution des défauts constatés durant cette première phase de recette entraînera une nouvelle phase de
          recette dite définitive. Cette dernière permettra au Client d'attester la bonne résolution des défauts listés
          dans son compte-rendu et de valider par écrit et le cas échéant la prestation.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Une prestation validée implique la purge de tout droit à recours du client quant au défaut de conformité du
          site Internet, hors vices cachés constatés dans les six (6) mois suivant la mise en ligne définitive du site.
          Le Développeur s'engage dans le cadre de cette garantie à résoudre dans les meilleurs délais tout
          dysfonctionnement non relevé durant la phase de recettage et affectant un élément conçu par le Développeur.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 6. Obligations et responsabilités du Développeur</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur prend l’engagement de réaliser ses prestations avec tout le soin et la rigueur nécessaires à la
          réalisation d’une prestation de qualité, conforme avec les usages de la profession. Il a à ce titre :
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Une obligation de renseignement afin de garantir sa compréhension des besoins du Client ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Une obligation de mise en garde si les choix du Client ne sauraient répondre à ses besoins ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Une obligation d’information afin de garantir que le Client accepte la prestation en toute connaissance de
              cause.
            </ListItem>
          </List>
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Il est entendu que le Développeur est tenu à une obligation de résultat.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur s’engage :
          <List sx={{ listStyleType: 'disc' }}>
            <ListItem sx={{ display: 'list-item' }}>
              A mettre tout en oeuvre pour assurer dans les meilleures conditions le bon fonctionnement des prestations
              commandées par son Client ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              A intervenir dans les meilleurs délais en cas de dysfonctionnement qui aurait pour cause un défaut de
              conception ;
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>A maintenir ses propres outils à jour.</ListItem>
          </List>
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur ne pourra en revanche pas être tenu pour responsable en cas de mauvaise manipulation,
          négligence, défaut d’entretien ou non-respect des consignes d’utilisation de la part du Client fournies par le
          Développeur (consignes se limitant aux seuls éléments conçus par le Développeur), ou en cas de modification
          des éléments initialement conçus par le Développeur.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 7. Propriété intellectuelle</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur cède de manière exclusive et irrévocable au Client qui l’accepte, pour les besoins de son
          activité, l’intégralité des droits patrimoniaux de propriété intellectuelle sur les éléments graphiques
          (formats optimisés et fichiers sources, le cas échéant) et le code informatique (HTML, CSS, Node.js,
          JavaScript, React etc.) exécutés sur le produit strictement inclus dans la prestation, et conçu par le
          Développeur dans le cadre de sa mission – sauf en cas de mention contraire et expresse sur un des éléments
          concernés.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Cette cession des droits ne sera mise en place qu’après règlement intégral des sommes dues par le Client au
          Développeur.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          La présente cession couvre le droit de reproduction, le droit de représentation, le droit d’adaptation et le
          droit de commercialisation desdits travaux, pour la durée légale de leur protection et pour le monde entier.
          Le Développeur garantit par ailleurs le Client contre toute action relative à la propriété intellectuelle de
          ces travaux.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Les outils et méthodes exploités par le Développeur dans le cadre de sa mission sont et demeurent la propriété
          intellectuelle du Développeur, qui se réserve le droit d’utiliser les enseignements qu’il aura tirés de
          l’exécution du présent contrat sous réserve de l’Article 8 de ces présentes CGV.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Client reconnaît la pleine et entière responsabilité de ses choix dans tous les contenus qu’il présente,
          fournit ou demande au Développeur pour la réalisation de la prestation. La responsabilité du Développeur ne
          pourra en aucun cas être recherchée dans l’hypothèse où ces contenus ne se révèleraient pas libres de droits
          ou seraient attentatoires aux droits de propriétés intellectuelles d’un tiers. Le Client garantit le
          Développeur à cet égard de prendre à sa charge toute condamnation, frais et honoraires mis à la charge ou
          supportés par le Développeur pour se défendre du fait de la défaillance du Client.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 8. Copyright et utilisation des références</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Sauf mention contraire explicite du Client, le Développeur se réserve la possibilité d’inclure dans la
          réalisation une mention commerciale indiquant clairement sa contribution, sous la forme d’une mention du type
          « Réalisé par Tina SEMASHKO » ou « Site développé par Akateria Web Studio ».
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Sauf mention contraire explicite du Client, notifiée par écrit, le Développeur se réserve le droit de
          mentionner sa réalisation comme référence dans le cadre de ses démarches de prospection commerciale, de
          communication externe et de publicité.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          Le Client, représenté par le signataire de la présente commande, autorise le Développeur à utiliser, à des
          fins purement démonstratives, la réalisation. Cette autorisation s’étend plus particulièrement aux éléments
          constitutifs de la réalisation, comprenant sans restriction la présentation publique des contenus suivants :
          les contenus textuels, les contenus iconographiques ou les deux.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 9. Confidentialité</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur et le Client s’engagent à conserver confidentiels les informations et documents concernant
          l’autre partie, de quelque nature qu’ils soient, auxquels les parties auraient pu avoir accès au cours de la
          prestation.
        </S.ParagraphContainer>
        <S.ParagraphContainer variant="body1">
          La précédente disposition ne fait pas obstacle à ce que le Développeur puisse faire état de sa relation
          commerciale avec le Client, comme précisé à l’article 7 susvisé.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 10. Loi informatique et liberté</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Conformément à la loi informatique et liberté du 6 janvier 1978 (art. 34), le Client dispose d’un droit
          permanent d’accès, de modification, de rectification et de suppression relative aux informations le
          concernant.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 11. Cas de force majeure</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Le Développeur n’encourt aucune responsabilité en cas de non-exécution ou de retard dans l’exécution de l’une
          de ses obligations si celle-ci résulte d’un fait indépendant de sa volonté et qui échappe à son contrôle. Est
          considéré comme tel, tout événement extérieur, imprévisible et irrésistible au sens de l’article 1148 du Code
          Civil et de la jurisprudence des tribunaux français.
        </S.ParagraphContainer>
        <S.ChapterContainer variant="h2">Article 12. Droit applicable - Juridiction</S.ChapterContainer>
        <S.ParagraphContainer variant="body1">
          Tout litige relatif à l’interprétation et à l’exécution des présentes CGV est soumis au droit français. À
          défaut de résolution amiable, le Tribunal de commerce de Vincennes (94300) sera seul compétent pour tout
          litige relatif à l’interprétation et l’exécution d’un contrat et de ses suites.
        </S.ParagraphContainer>
      </S.BodyBox>
    </S.MainContainer>
  );
};

export default Conditions;
