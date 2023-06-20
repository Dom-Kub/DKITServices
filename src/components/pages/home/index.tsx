import { Grid, Typography } from '@mui/material';
import '../../../style/home.css';
import '../../../style/image.css';
import logo from '../../../photo/png/logo-color.png';
import backgroundFoto from '../../../photo/changigBackground/1.jpeg';
import { PagesHomeChangingImg } from './ChangingImg';
import { Footer } from '../../footer';
function Home() {
  return (
    <>
      <Grid
        className="home-page"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className="image-container">
          <PagesHomeChangingImg />
        </Grid>

        <Grid item className="home-items" xs={5}>
          <img className="home-logo" src={logo} alt={'logo'} />
        </Grid>
      </Grid>
      <Grid
        spacing={2}
        className="home-page"
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          item
          className="home-items text-item"
          xs={3}
          style={{ margin: 20 }}
        >
          <Typography
            color="#00d1cd"
            variant="h3"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            {'O nás'}
          </Typography>
          <Typography
            color="white"
            variant="h5"
            style={{ marginBottom: '10px' }}
          >
            {'Vitajte v DK IT SERVICES, kde programovanie žije!  '}
          </Typography>
          <Typography color="white">
            {
              'Sme tím vášnivých programátorov, ktorí prinášajú inovácie do digitálneho sveta. Naša špecialita je vytvárať výnimočné softvérové riešenia, ktoré posúvajú vaše podnikanie vpred. S nami získate programovanie na najvyššej úrovni a osobný prístup. Spolupracujeme s vami, aby sme pochopili vaše potreby a dosiahli vaše ciele. Vaše myšlienky pretvárame do kódu a pomáhame vám získať konkurenčnú výhodu.. Spojte sa s nami a začnite písať úspešný digitálny príbeh. DK IT SERVICES je tu pre vás, aby sme vytvorili programovacie dielo, ktoré prekoná vaše očakávania. Pripojte sa k nám a spolu vytvorme digitálnu budúcnosť. DK IT SERVICES je tu pre vás, aby sme prekonali vaše očakávania a priniesli vaše programovacie projekty na novú úroveň úspechu.'
            }
          </Typography>
          <Typography color="white">
            {
              'Kontaktujte nás ešte dnes a spoločne vytvoríme programovanie, ktoré zmení váš svet!'
            }
          </Typography>
        </Grid>
        <Grid
          item
          className="home-items text-item"
          xs={3}
          style={{ margin: 20 }}
        >
          <Typography
            color="#00d1cd"
            variant="h3"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            {'Zakladateľ'}
          </Typography>
          <Typography
            color="white"
            variant="h5"
            style={{ marginBottom: '10px' }}
          >
            {'Dominik Kubala'}
          </Typography>
          <Typography color="white">
            {
              'Dominik Kubala, talentovaný programátor a vizionár, sa narodil 17. septembra 1998. Jeho vášeň pre technológie a počítačový svet ho viedla k úspešnej kariére v oblasti softvérového vývoja. Po ukončení svojho vzdelania v oblasti informatiky začal Dominik Kubala pracovať pre rôzne softvérové spoločnosti, získaval skúsenosti a postupne si vytváral svoje vlastné vízie. Vďaka jeho neustálemu streveniu za inováciami a kvalitou sa stal známym v odvetví a získal si povesť spoľahlivého a šikovného programátora. S odhodlaním a silnou túžbou priniesť svoje myšlienky a inovatívne riešenia do sveta, Dominik Kubala sa rozhodol založiť v roku 2023 vlastnú programátorskú spoločnosť. Jeho výnimočné schopnosti a schopnosť vytvárať efektívne a spoľahlivé softvérové riešenia ho povzbudili k tomu, aby vytvoril tím profesionálov, ktorí by mu pomohli dosiahnuť jeho víziu.'
            }
          </Typography>
        </Grid>
        <Grid
          item
          className="home-items text-item"
          xs={3}
          style={{ margin: 20 }}
        >
          <Typography
            color="#00d1cd"
            variant="h3"
            style={{ marginBottom: '20px', marginTop: '20px' }}
          >
            {'Poloha'}
          </Typography>
          <Typography
            color="white"
            variant="h5"
            style={{ marginBottom: '10px' }}
          >
            {'Vitajte v DK IT SERVICES, kde programovanie žije!  '}
          </Typography>
          <Typography color="white">
            {
              'Spoločnosť DK IT Services, so sídlom na adrese Nesluša 939, sa nachádza v skvelej polohe s výhľadom na okolitú prírodu. Táto adresa poskytuje ideálne prostredie pre dynamickú a inovatívnu IT spoločnosť. Svojou polohou v blízkosti dôležitých dopravných uzlov je spoločnosť DK IT Services dobre dostupná z rôznych častí mesta a regiónu. To umožňuje zamestnancom a klientom jednoduché a pohodlné cestovanie. Okolie spoločnosti je charakterizované pokojom a príjemnou atmosférou. Vďaka výhľadom na okolitú prírodu majú zamestnanci možnosť relaxovať a načerpať novú energiu. Táto poloha tiež poskytuje príležitosti pre prechádzky a rekreáciu v prírode, čo môže prispieť k vyváženému pracovnému prostrediu.'
            }
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export { Home };
